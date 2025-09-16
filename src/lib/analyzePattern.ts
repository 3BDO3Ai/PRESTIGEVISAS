// Analysis of the price table to find the correct calculation pattern

const priceTable = [
  { product: 350, transfer: 200, down: 87 },
  { product: 500, transfer: 300, down: 125 },
  { product: 650, transfer: 400, down: 162 },
  { product: 750, transfer: 500, down: 187 },
  { product: 950, transfer: 600, down: 237 },
  { product: 1000, transfer: 700, down: 250 },
  { product: 1250, transfer: 800, down: 312 },
  { product: 1500, transfer: 1000, down: 375 },
  { product: 1750, transfer: 1200, down: 437 },
  { product: 1995, transfer: 1400, down: 499 },
  { product: 2495, transfer: 1800, down: 625 }
];

console.log('=== PRICE TABLE ANALYSIS ===\n');

priceTable.forEach(item => {
  const downPaymentPct = (item.down / item.product * 100).toFixed(2);
  const transferPct = (item.transfer / item.product * 100).toFixed(2);
  const commission = item.product - item.transfer - item.down;
  const commissionPct = (commission / item.product * 100).toFixed(2);
  
  console.log(`Product: ${item.product} SAR`);
  console.log(`  Down Payment: ${item.down} SAR (${downPaymentPct}%)`);
  console.log(`  Transfer: ${item.transfer} SAR (${transferPct}%)`);
  console.log(`  Commission: ${commission} SAR (${commissionPct}%)`);
  console.log(`  Total: ${item.down + item.transfer + commission} SAR`);
  console.log('');
});

console.log('=== PATTERN ANALYSIS ===');

// Check if down payment follows a pattern
console.log('Down Payment Analysis:');
priceTable.forEach(item => {
  const exactPct = item.down / item.product;
  const roundedPct = Math.round(item.down / item.product * 100);
  console.log(`${item.product}: ${item.down} (${(exactPct * 100).toFixed(2)}% ≈ ${roundedPct}%)`);
});

console.log('\nTransfer Amount Analysis:');
priceTable.forEach(item => {
  const exactPct = item.transfer / item.product;
  console.log(`${item.product}: ${item.transfer} (${(exactPct * 100).toFixed(2)}%)`);
});

console.log('\nCommission Analysis:');
priceTable.forEach(item => {
  const commission = item.product - item.transfer - item.down;
  const exactPct = commission / item.product;
  console.log(`${item.product}: ${commission} (${(exactPct * 100).toFixed(2)}%)`);
});