import { calculate } from './financeCalculations';

console.log('=== DEBUG ANALYSIS OF ARABIC OUTPUT ===\n');

// Based on Arabic text analysis, let's check these specific scenarios:

console.log('SCENARIO 1: Product 950 SAR, Tabby, No down payment (deduct)');
console.log('Expected from Arabic: المبلغ المطلوب تحويله ‏٣٦٣٫٠٠ ر.س.‏');
console.log('But also mentions: مبلغ التحويل: ‏٧٦٠٫٠٠ ر.س.‏');
const result1 = calculate(950, 'tabby', 'deduct');
console.log('Calculated result:');
console.log(`- Transfer Amount: ${result1.transferAmount} SAR`);
console.log(`- Monthly Installment: ${result1.monthlyInstallment} SAR`);
console.log(`- Total Installments: ${result1.totalInstallments} SAR`);
console.log(`- Down Payment: ${result1.downPayment} SAR`);
console.log(`- Commission: ${result1.commission} SAR`);
console.log('');

console.log('SCENARIO 2: Product 950 SAR, Tabby, Yes down payment (paid)');
console.log('Expected from Arabic: transfer should be 600 SAR');
const result2 = calculate(950, 'tabby', 'paid');
console.log('Calculated result:');
console.log(`- Transfer Amount: ${result2.transferAmount} SAR`);
console.log(`- Monthly Installment: ${result2.monthlyInstallment} SAR`);
console.log(`- Total Installments: ${result2.totalInstallments} SAR`);
console.log(`- Down Payment: ${result2.downPayment} SAR`);
console.log(`- Commission: ${result2.commission} SAR`);
console.log('');

console.log('ANALYSIS OF PRICE TABLE:');
console.log('From Arabic price table: ‏٩٥٠٫٠٠ ر.س.‏	‏٦٠٠٫٠٠ ر.س.‏	‏٢٣٧٫٠٠ ر.س.‏');
console.log('Product: 950 SAR, Transfer: 600 SAR, Down Payment: 237 SAR');
console.log('');

console.log('CHECKING CALCULATION LOGIC:');
console.log('If base transfer = 600 SAR and down payment = 237 SAR');
console.log('Then when deducting: 600 - 237 = 363 SAR ✓ (matches Arabic)');
console.log('When paying upfront: 600 SAR ✓ (matches Arabic)');
console.log('');

console.log('BUT Arabic also shows "مبلغ التحويل: ‏٧٦٠٫٠٠ ر.س.‏" which is confusing...');
console.log('');

// Let's test some other values from the price table
console.log('=== TESTING OTHER PRICE TABLE VALUES ===');

const priceTableTests = [
  { product: 350, expectedTransfer: 200, expectedDown: 87 },
  { product: 500, expectedTransfer: 300, expectedDown: 125 },
  { product: 650, expectedTransfer: 400, expectedDown: 162 },
  { product: 750, expectedTransfer: 500, expectedDown: 187 },
  { product: 1000, expectedTransfer: 700, expectedDown: 250 },
  { product: 1250, expectedTransfer: 800, expectedDown: 312 },
  { product: 1500, expectedTransfer: 1000, expectedDown: 375 },
  { product: 1750, expectedTransfer: 1200, expectedDown: 437 },
  { product: 1995, expectedTransfer: 1400, expectedDown: 499 }
];

priceTableTests.forEach(test => {
  console.log(`\nProduct: ${test.product} SAR`);
  console.log(`Expected from table - Transfer: ${test.expectedTransfer}, Down: ${test.expectedDown}`);
  
  const resultPaid = calculate(test.product, 'tabby', 'paid');
  const resultDeduct = calculate(test.product, 'tabby', 'deduct');
  
  console.log(`Calculated (paid): Transfer=${resultPaid.transferAmount}, Down=${resultPaid.downPayment}`);
  console.log(`Calculated (deduct): Transfer=${resultDeduct.transferAmount}, Down=${resultDeduct.downPayment}`);
  
  // Expected when deducting = table transfer - down payment
  const expectedDeductTransfer = test.expectedTransfer - test.expectedDown;
  console.log(`Expected deduct transfer: ${test.expectedTransfer} - ${test.expectedDown} = ${expectedDeductTransfer}`);
  
  const transferMatch = Math.abs(resultPaid.transferAmount - test.expectedTransfer) < 0.01;
  const downMatch = Math.abs(resultPaid.downPayment - test.expectedDown) < 0.01;
  const deductMatch = Math.abs(resultDeduct.transferAmount - expectedDeductTransfer) < 0.01;
  
  console.log(`Status: Transfer ${transferMatch ? '✅' : '❌'}, Down ${downMatch ? '✅' : '❌'}, Deduct ${deductMatch ? '✅' : '❌'}`);
});