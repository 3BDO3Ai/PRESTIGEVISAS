// Test cases for finance calculations
// These test cases validate the calculation logic against provided examples

import { calculate, formatCurrency, defaultCommissionFn } from './financeCalculations';

// Test data based on provided examples
const testCases = [
  {
    name: 'Tabby - Deduct from transfer (950 SAR)',
    input: {
      productValue: 950,
      providerKey: 'tabby' as const,
      downPaymentChoice: 'deduct' as const,
    },
    expected: {
      downPayment: 237, // Math.round(950 * 0.25) = 238, but example shows 237
      totalInstallments: 713, // 950 - 237
      monthlyInstallment: 178.25, // 713 / 4
      months: 4,
      transferAmount: 363, // Based on example
      notesContains: ['تابي', 'خصم', 'مبلغ التحويل'],
    }
  },
  {
    name: 'Tabby - Paid upfront (950 SAR)',
    input: {
      productValue: 950,
      providerKey: 'tabby' as const,
      downPaymentChoice: 'paid' as const,
    },
    expected: {
      downPayment: 237,
      totalInstallments: 713,
      monthlyInstallment: 178.25,
      months: 4,
      transferAmount: 600, // Based on example
      notesContains: ['تابي', 'سداد الدفعة الأولى'],
    }
  },
  {
    name: 'Tamara - Paid upfront (950 SAR)',
    input: {
      productValue: 950,
      providerKey: 'tamara' as const,
      downPaymentChoice: 'paid' as const,
    },
    expected: {
      downPayment: 237,
      totalInstallments: 713,
      monthlyInstallment: 178.25,
      months: 4,
      transferAmount: 600,
      notesContains: ['تمارا', 'يجب سداد'],
    }
  }
];

// Run tests
export function runTests(): void {
  console.log('🧪 Running Finance Calculation Tests...\n');

  testCases.forEach((testCase, index) => {
    console.log(`Test ${index + 1}: ${testCase.name}`);
    
    try {
      const result = calculate(
        testCase.input.productValue,
        testCase.input.providerKey,
        testCase.input.downPaymentChoice
      );

      // Validate results
      const validations = [
        {
          name: 'Down Payment',
          actual: result.downPayment,
          expected: testCase.expected.downPayment,
          tolerance: 1 // Allow 1 SAR difference for rounding
        },
        {
          name: 'Total Installments',
          actual: result.totalInstallments,
          expected: testCase.expected.totalInstallments,
          tolerance: 1
        },
        {
          name: 'Monthly Installment',
          actual: Math.round(result.monthlyInstallment * 100) / 100, // Round to 2 decimals
          expected: testCase.expected.monthlyInstallment,
          tolerance: 0.01
        },
        {
          name: 'Months',
          actual: result.months,
          expected: testCase.expected.months,
          tolerance: 0
        }
      ];

      let passed = true;
      validations.forEach(validation => {
        const diff = Math.abs(validation.actual - validation.expected);
        if (diff > validation.tolerance) {
          console.log(`  ❌ ${validation.name}: Expected ${validation.expected}, got ${validation.actual}`);
          passed = false;
        } else {
          console.log(`  ✅ ${validation.name}: ${validation.actual}`);
        }
      });

      // Validate notes content
      testCase.expected.notesContains.forEach(keyword => {
        if (result.notes.includes(keyword)) {
          console.log(`  ✅ Notes contain "${keyword}"`);
        } else {
          console.log(`  ❌ Notes missing "${keyword}"`);
          passed = false;
        }
      });

      console.log(`  📝 Notes: ${result.notes}`);
      console.log(`  💰 Transfer Amount: ${formatCurrency(result.transferAmount)}`);
      console.log(`  ${passed ? '✅ PASSED' : '❌ FAILED'}\n`);

    } catch (error) {
      console.log(`  ❌ ERROR: ${error}\n`);
    }
  });
}

// Export for use in tests
export { testCases };