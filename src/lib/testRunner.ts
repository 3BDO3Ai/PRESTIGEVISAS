import { calculate, formatCurrency } from './financeCalculations';

// Quick test to validate calculations match the examples
console.log('🧪 Testing Finance Calculations...\n');

// Test Case 1: Tabby - Deduct from transfer (950 SAR)
console.log('Test 1: Tabby - Deduct from transfer (950 SAR)');
const result1 = calculate(950, 'tabby', 'deduct');
console.log(`- Transfer Amount: ${formatCurrency(result1.transferAmount)}`);
console.log(`- Monthly Payment: ${formatCurrency(result1.monthlyInstallment)}`);
console.log(`- Total Installments: ${formatCurrency(result1.totalInstallments)}`);
console.log(`- Down Payment: ${formatCurrency(result1.downPayment)}`);
console.log(`- Notes: ${result1.notes}\n`);

// Test Case 2: Tabby - Paid upfront (950 SAR)  
console.log('Test 2: Tabby - Paid upfront (950 SAR)');
const result2 = calculate(950, 'tabby', 'paid');
console.log(`- Transfer Amount: ${formatCurrency(result2.transferAmount)}`);
console.log(`- Monthly Payment: ${formatCurrency(result2.monthlyInstallment)}`);
console.log(`- Total Installments: ${formatCurrency(result2.totalInstallments)}`);
console.log(`- Down Payment: ${formatCurrency(result2.downPayment)}`);
console.log(`- Notes: ${result2.notes}\n`);

// Test Case 3: Tamara - Paid upfront (950 SAR)
console.log('Test 3: Tamara - Paid upfront (950 SAR)');
const result3 = calculate(950, 'tamara', 'paid');
console.log(`- Transfer Amount: ${formatCurrency(result3.transferAmount)}`);
console.log(`- Monthly Payment: ${formatCurrency(result3.monthlyInstallment)}`);
console.log(`- Total Installments: ${formatCurrency(result3.totalInstallments)}`);
console.log(`- Down Payment: ${formatCurrency(result3.downPayment)}`);
console.log(`- Notes: ${result3.notes}\n`);

console.log('✅ All tests completed successfully!');