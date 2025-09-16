import { calculate, formatCurrency } from './financeCalculations';

// Test cases based on user's provided examples
const testCases = [
  {
    name: 'Tabby - Product 950 SAR - No down payment (deduct from transfer)',
    input: {
      productValue: 950,
      provider: 'tabby' as const,
      downPaymentChoice: 'deduct' as const
    },
    expected: {
      transferAmount: 363,
      monthlyInstallment: 237.50,
      totalInstallments: 950,
      downPayment: 237.50
    }
  },
  {
    name: 'Tabby - Product 950 SAR - Yes down payment (paid upfront)',
    input: {
      productValue: 950,
      provider: 'tabby' as const,
      downPaymentChoice: 'paid' as const
    },
    expected: {
      transferAmount: 600,
      monthlyInstallment: 178.25,
      totalInstallments: 713,
      downPayment: 237.50
    }
  },
  {
    name: 'Tabby - Product 2495 SAR - Yes down payment (paid upfront)',
    input: {
      productValue: 2495,
      provider: 'tabby' as const,
      downPaymentChoice: 'paid' as const
    },
    expected: {
      transferAmount: 1800,
      monthlyInstallment: 467.50,
      totalInstallments: 1870,
      downPayment: 625
    }
  },
  {
    name: 'Tabby - Product 2495 SAR - No down payment (deduct from transfer)',
    input: {
      productValue: 2495,
      provider: 'tabby' as const,
      downPaymentChoice: 'deduct' as const
    },
    expected: {
      transferAmount: 1175,
      monthlyInstallment: 623.75,
      totalInstallments: 2495,
      downPayment: 625
    }
  },
  {
    name: 'Tamara - Product 950 SAR - Yes down payment (paid upfront)',
    input: {
      productValue: 950,
      provider: 'tamara' as const,
      downPaymentChoice: 'paid' as const
    },
    expected: {
      transferAmount: 600,
      monthlyInstallment: 178.25,
      totalInstallments: 713,
      downPayment: 237.50
    }
  },
  {
    name: 'Tamara - Product 2495 SAR - Yes down payment (paid upfront)',
    input: {
      productValue: 2495,
      provider: 'tamara' as const,
      downPaymentChoice: 'paid' as const
    },
    expected: {
      transferAmount: 1800,
      monthlyInstallment: 467.50,
      totalInstallments: 1870,
      downPayment: 625
    }
  }
];

console.log('Testing Finance Calculations...\n');

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.name}`);
  console.log('='.repeat(50));
  
  try {
    const result = calculate(
      testCase.input.productValue,
      testCase.input.provider,
      testCase.input.downPaymentChoice
    );
    
    console.log('Expected vs Actual:');
    console.log(`Transfer Amount: ${testCase.expected.transferAmount} vs ${result.transferAmount}`);
    console.log(`Monthly Installment: ${testCase.expected.monthlyInstallment} vs ${result.monthlyInstallment}`);
    console.log(`Total Installments: ${testCase.expected.totalInstallments} vs ${result.totalInstallments}`);
    console.log(`Down Payment: ${testCase.expected.downPayment} vs ${result.downPayment}`);
    
    // Check if values match (allowing small floating point differences)
    const transferMatch = Math.abs(result.transferAmount - testCase.expected.transferAmount) < 0.01;
    const monthlyMatch = Math.abs(result.monthlyInstallment - testCase.expected.monthlyInstallment) < 0.01;
    const totalMatch = Math.abs(result.totalInstallments - testCase.expected.totalInstallments) < 0.01;
    const downMatch = Math.abs(result.downPayment - testCase.expected.downPayment) < 0.01;
    
    const allMatch = transferMatch && monthlyMatch && totalMatch && downMatch;
    
    console.log(`Status: ${allMatch ? '✅ PASS' : '❌ FAIL'}`);
    
    if (!allMatch) {
      console.log('Mismatches:');
      if (!transferMatch) console.log(`- Transfer Amount: expected ${testCase.expected.transferAmount}, got ${result.transferAmount}`);
      if (!monthlyMatch) console.log(`- Monthly Installment: expected ${testCase.expected.monthlyInstallment}, got ${result.monthlyInstallment}`);
      if (!totalMatch) console.log(`- Total Installments: expected ${testCase.expected.totalInstallments}, got ${result.totalInstallments}`);
      if (!downMatch) console.log(`- Down Payment: expected ${testCase.expected.downPayment}, got ${result.downPayment}`);
    }
    
  } catch (error) {
    console.log(`❌ ERROR: ${error}`);
  }
  
  console.log('\n');
});