// Finance calculation module for Faz3a
// Handles dynamic calculations for product financing based on provider and payment choices

export interface CalculationConfig {
  downPaymentPct: number;
  monthsCount: number;
  useAlternateTotal: boolean; // Toggle for totalInstallments calculation method
}

export interface ProviderConfig {
  key: 'tabby' | 'tamara';
  name: string;
  allowDeductFromTransfer: boolean;
  requireUpfrontDownPayment: boolean;
}

export interface CalculationResult {
  productValue: number;
  providerKey: 'tabby' | 'tamara';
  downPayment: number;
  totalInstallments: number;
  monthlyInstallment: number;
  months: number;
  commission: number;
  transferAmount: number;
  notes: string;
}

// Price table - exact values as provided
const PRICE_TABLE = [
  { product: 350, transfer: 200, down: 87, months: 4 },
  { product: 500, transfer: 300, down: 125, months: 4 },
  { product: 650, transfer: 400, down: 162, months: 4 },
  { product: 750, transfer: 500, down: 187, months: 4 },
  { product: 950, transfer: 600, down: 237, months: 4 },
  { product: 1000, transfer: 700, down: 250, months: 4 },
  { product: 1250, transfer: 800, down: 312, months: 4 },
  { product: 1500, transfer: 1000, down: 375, months: 4 },
  { product: 1750, transfer: 1200, down: 437, months: 4 },
  { product: 1995, transfer: 1400, down: 499, months: 4 },
  { product: 2495, transfer: 1800, down: 625, months: 4 }
];

// Default configuration
const DEFAULT_CONFIG: CalculationConfig = {
  downPaymentPct: 0.25, // 25%
  monthsCount: 4,
  useAlternateTotal: true, // Use productValue as total installments
};

// Provider configurations
const PROVIDERS: Record<string, ProviderConfig> = {
  tabby: {
    key: 'tabby',
    name: 'تابي',
    allowDeductFromTransfer: true,
    requireUpfrontDownPayment: false,
  },
  tamara: {
    key: 'tamara',
    name: 'تمارا',
    allowDeductFromTransfer: false,
    requireUpfrontDownPayment: true,
  },
};

// Helper function to round up to nearest 0.25
function roundUpToNearestQuarter(value: number): number {
  return Math.ceil(value * 4) / 4;
}

// Get values from price table
function getPriceTableValues(productValue: number): { transfer: number; down: number; months: number } {
  const entry = PRICE_TABLE.find(item => item.product === productValue);
  if (entry) {
    return { transfer: entry.transfer, down: entry.down, months: entry.months };
  }
  
  // If exact match not found, calculate based on 25% down payment pattern
  // and interpolate transfer amount
  const down = parseFloat(roundUpToNearestQuarter(productValue * 0.25).toFixed(2));
  
  // For interpolation, find nearest values and estimate transfer
  const sortedTable = [...PRICE_TABLE].sort((a, b) => a.product - b.product);
  
  if (productValue < sortedTable[0].product) {
    // Below minimum, use similar ratio as first entry
    const ratio = sortedTable[0].transfer / sortedTable[0].product;
    const transfer = Math.round(productValue * ratio);
    return { transfer, down, months: sortedTable[0].months };
  }
  
  if (productValue > sortedTable[sortedTable.length - 1].product) {
    // Above maximum, use similar ratio as last entry
    const ratio = sortedTable[sortedTable.length - 1].transfer / sortedTable[sortedTable.length - 1].product;
    const transfer = Math.round(productValue * ratio);
    return { transfer, down, months: sortedTable[sortedTable.length - 1].months };
  }
  
  // Interpolate between two nearest values
  let lower = sortedTable[0];
  let upper = sortedTable[1];
  
  for (let i = 0; i < sortedTable.length - 1; i++) {
    if (productValue >= sortedTable[i].product && productValue <= sortedTable[i + 1].product) {
      lower = sortedTable[i];
      upper = sortedTable[i + 1];
      break;
    }
  }
  
  // Linear interpolation
  const ratio = (productValue - lower.product) / (upper.product - lower.product);
  const transfer = Math.round(lower.transfer + ratio * (upper.transfer - lower.transfer));
  
  return { transfer, down, months: lower.months };
}

// Simple commission calculation - no hardcoded values for specific amounts
export function defaultCommissionFn(
  productValue: number,
  totalInstallments: number,
  deductFromTransfer: boolean
): number {
  // Simple formula: commission = productValue - transferAmount - downPayment
  // This will be calculated in the main function based on table values
  return 0; // This will be overridden in the main calculation
}

// Currency formatter for Arabic SAR
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
    minimumFractionDigits: 2,
  }).format(amount);
}

// Main calculation function
export function calculate(
  productValue: number,
  providerKey: 'tabby' | 'tamara',
  downPaymentChoice: 'paid' | 'deduct',
  config: CalculationConfig = DEFAULT_CONFIG,
  commissionFn = defaultCommissionFn
): CalculationResult {
  // Validation
  if (productValue <= 0) throw new Error('Product value must be positive');

  const provider = PROVIDERS[providerKey];
  if (!provider) throw new Error(`Unknown provider: ${providerKey}`);

  // Validate provider rules
  if (provider.requireUpfrontDownPayment && downPaymentChoice === 'deduct') {
    throw new Error(`${provider.name} requires upfront down payment`);
  }

  // Get values from price table - months and transfer amount come from table
  const priceTableValues = getPriceTableValues(productValue);
  const downPayment = priceTableValues.down;
  const months = priceTableValues.months; // عدد الأشهر from table
  const baseTransferAmount = priceTableValues.transfer; // المبلغ المطلوب تحويله from table
  
  if (downPayment >= productValue) {
    throw new Error('Down payment cannot exceed product value');
  }

  // Transfer amount handling based on down payment choice
  const deductFromTransfer = downPaymentChoice === 'deduct';

  // Calculate total installments based on payment choice:
  let totalInstallments: number;
  if (deductFromTransfer) {
    // When deducting from transfer: total installments = product value
    totalInstallments = productValue;
  } else {
    // When paying upfront: total installments = transfer amount + commission
    // Commission = productValue - transferAmount - downPayment
    const commission = productValue - baseTransferAmount - downPayment;
    totalInstallments = baseTransferAmount + commission;
  }
  
  // إجمالي الأقساط = القسط الشهري * عدد الأشهر
  // So: القسط الشهري = إجمالي الأقساط / عدد الأشهر
  const rawMonthlyInstallment = totalInstallments / months;
  const monthlyInstallment = parseFloat(roundUpToNearestQuarter(rawMonthlyInstallment).toFixed(2));

  // Commission = difference between what we charge vs what we transfer
  const commission = parseFloat((productValue - baseTransferAmount - downPayment).toFixed(2));
  const transferAmount = parseFloat((baseTransferAmount - (deductFromTransfer ? downPayment : 0)).toFixed(2));

  // Generate notes
  const notes = generateNotes(
    productValue,
    provider,
    downPayment,
    transferAmount,
    downPaymentChoice
  );

  return {
    productValue,
    providerKey,
    downPayment,
    totalInstallments,
    monthlyInstallment,
    months,
    commission,
    transferAmount,
    notes,
  };
}

// Generate Arabic notes based on calculation
function generateNotes(
  productValue: number,
  provider: ProviderConfig,
  downPayment: number,
  transferAmount: number,
  downPaymentChoice: 'paid' | 'deduct'
): string {
  const productValueText = formatCurrency(productValue);
  const downPaymentText = formatCurrency(downPayment);
  const transferAmountText = formatCurrency(transferAmount);

  let notes = `المزوّد: ${provider.name} — قيمة المنتج: ${productValueText}.`;

  if (downPaymentChoice === 'deduct') {
    notes += ` سيتم خصم ${downPaymentText} من مبلغ التحويل.`;
  } else {
    notes += ` سيتم تحويل ${transferAmountText} بعد سداد الدفعة الأولى (${downPaymentText}).`;
  }

  // Add provider-specific note
  if (provider.key === 'tabby') {
    if (downPaymentChoice === 'deduct') {
      notes += ` ${provider.name}: مسموح بدون دفعة أولى وسيتم خصمها من مبلغ التحويل.`;
    } else {
      notes += ` ${provider.name}: يمكنك سداد الدفعة الأولى أو خصمها من التحويل.`;
    }
  } else if (provider.key === 'tamara') {
    notes += ` ${provider.name}: يجب سداد الدفعة الأولى لاستكمال الطلب.`;
  }

  return notes;
}

// DOM rendering function
export function renderResult(result: CalculationResult): void {
  const elements = {
    transferAmount: document.getElementById('transferAmount'),
    monthlyAmount: document.getElementById('monthlyAmount'),
    totalAmount: document.getElementById('totalAmount'),
    monthsCount: document.getElementById('monthsCount'),
    notes: document.getElementById('notes'),
  };

  if (elements.transferAmount) {
    elements.transferAmount.textContent = formatCurrency(result.transferAmount);
  }
  if (elements.monthlyAmount) {
    elements.monthlyAmount.textContent = formatCurrency(result.monthlyInstallment);
  }
  if (elements.totalAmount) {
    elements.totalAmount.textContent = formatCurrency(result.totalInstallments);
  }
  if (elements.monthsCount) {
    elements.monthsCount.textContent = result.months.toString();
  }
  if (elements.notes) {
    elements.notes.textContent = result.notes;
  }
}