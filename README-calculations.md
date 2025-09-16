# Finance Calculation Module

This module provides dynamic finance calculations for the Faz3a e-commerce platform, supporting both Tabby and Tamara payment providers.

## Features

- ✅ Dynamic calculation based on product value, provider, and payment choice
- ✅ Configurable commission function for easy API integration
- ✅ Provider-specific business rules (Tabby vs Tamara)
- ✅ Arabic currency formatting
- ✅ Comprehensive validation and error handling
- ✅ Test cases for validation

## Usage

```typescript
import { calculate, formatCurrency } from '@/lib/financeCalculations';

// Calculate financing terms
const result = calculate(950, 'tabby', 'deduct');

console.log(`Transfer Amount: ${formatCurrency(result.transferAmount)}`);
console.log(`Monthly Payment: ${formatCurrency(result.monthlyInstallment)}`);
```

## Configuration

### Default Settings

```typescript
const DEFAULT_CONFIG = {
  downPaymentPct: 0.25,  // 25% down payment
  monthsCount: 4,        // 4 months installment period
  useAlternateTotal: false // Use productValue - downPayment for total
};
```

### Provider Rules

- **Tabby**: Allows deducting down payment from transfer
- **Tamara**: Requires upfront down payment

## Replacing Commission Function

The module uses a placeholder commission function that can be easily replaced with real API calls:

### Current Implementation

```typescript
function defaultCommissionFn(
  productValue: number,
  totalInstallments: number,
  deductFromTransfer: boolean
): number {
  // Placeholder logic
  const baseCommission = Math.max(100, productValue * 0.12);
  const adjustment = deductFromTransfer ? 50 : 0;
  return Math.round(baseCommission + adjustment);
}
```

### API Integration Example

```typescript
// Create your API commission function
async function apiCommissionFn(
  productValue: number,
  totalInstallments: number,
  deductFromTransfer: boolean
): Promise<number> {
  const response = await fetch('/api/calculate-commission', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productValue,
      totalInstallments,
      deductFromTransfer
    })
  });
  
  const data = await response.json();
  return data.commission;
}

// Use with calculate function
const result = await calculate(
  950, 
  'tabby', 
  'deduct', 
  DEFAULT_CONFIG, 
  apiCommissionFn
);
```

### Synchronous API Example

```typescript
function syncApiCommissionFn(
  productValue: number,
  totalInstallments: number,
  deductFromTransfer: boolean
): number {
  // Use fetch with async handling or XMLHttpRequest
  // This is a simplified example - handle errors appropriately
  try {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/calculate-commission', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      productValue,
      totalInstallments,
      deductFromTransfer
    }));
    
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      return data.commission;
    }
  } catch (error) {
    console.error('Commission API error:', error);
  }
  
  // Fallback to default calculation
  return defaultCommissionFn(productValue, totalInstallments, deductFromTransfer);
}
```

## Test Cases

Run the included test cases to validate calculations:

```typescript
import { runTests } from '@/lib/financeCalculations.test';

// Run all test cases
runTests();
```

### Expected Results

- **Tabby (950 SAR, deduct)**: Transfer ≈ 363 SAR, Monthly ≈ 178.25 SAR
- **Tabby (950 SAR, paid)**: Transfer ≈ 600 SAR, Monthly ≈ 178.25 SAR  
- **Tamara (950 SAR, paid)**: Transfer ≈ 600 SAR, Monthly ≈ 178.25 SAR

## Error Handling

The module validates inputs and throws descriptive errors:

```typescript
try {
  const result = calculate(-100, 'tabby', 'deduct');
} catch (error) {
  console.error(error.message); // "Product value must be positive"
}
```

## DOM Integration

The module includes a DOM rendering function for direct HTML updates:

```typescript
import { renderResult } from '@/lib/financeCalculations';

// Renders to elements with IDs: transferAmount, monthlyAmount, totalAmount, monthsCount, notes
renderResult(calculationResult);
```

## Production Deployment

1. Replace `defaultCommissionFn` with your API function
2. Update configuration values as needed
3. Test with real data
4. Monitor for edge cases and validation errors