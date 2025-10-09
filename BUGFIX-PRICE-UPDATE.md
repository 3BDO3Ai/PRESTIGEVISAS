# Fix: Price Data Not Updating in Calculations

## Problem
When updating price data in the admin panel (قائمة الأسعار الحالية), the values were displayed correctly in the price list on the main page, but the calculations in the finance calculator were still using the old hardcoded values.

## Root Cause
1. **Hardcoded Price Table**: The `financeCalculations.ts` file had a hardcoded `PRICE_TABLE` constant that was not using the dynamic price data from the content system.
2. **Content Caching**: The `useContent` hook was caching content indefinitely without checking for updates.

## Solution

### 1. Dynamic Price Data in Calculations
- Modified `financeCalculations.ts` to accept dynamic price data as an optional parameter
- Renamed the hardcoded table to `DEFAULT_PRICE_TABLE` (used as fallback)
- Added `PriceTableEntry` interface to type the dynamic price data
- Added `convertPriceData()` function to convert from the content format to internal format
- Updated `getPriceTableValues()` to accept a price table parameter
- Updated `calculate()` function signature to accept optional `priceData` parameter

### 2. Pass Dynamic Data from Component
- Updated `FinanceCalculator` component to pass `content.priceData` to the `calculate()` function
- Added `content.priceData` to the useEffect dependency array to recalculate when price data changes

### 3. Cache Invalidation System
- Added cache timestamp tracking (`_cacheTimestamp`)
- Added `CACHE_DURATION` constant (5 seconds) to control cache lifetime
- Added `invalidateContentCache()` function to manually clear the cache
- Updated `useContent()` hook to check cache validity before using cached data
- Added timestamp parameter to fetch URL to bypass browser cache
- Updated `useContentLoading()` hook to respect cache validity

### 4. Admin Panel Integration
- Updated `PriceDataManager` component to import and call `invalidateContentCache()`
- After successful save, the cache is invalidated so the main page will fetch fresh data

## Files Modified

1. **src/lib/financeCalculations.ts**
   - Added `PriceTableEntry` interface
   - Renamed `PRICE_TABLE` to `DEFAULT_PRICE_TABLE`
   - Added `convertPriceData()` helper function
   - Updated `getPriceTableValues()` to accept price table parameter
   - Updated `calculate()` to accept optional `priceData` parameter

2. **src/components/FinanceCalculator.tsx**
   - Updated `calculate()` call to pass `content.priceData`
   - Added `content.priceData` to dependency array

3. **src/content/useContent.ts**
   - Added cache timestamp system (`_cacheTimestamp`, `CACHE_DURATION`)
   - Added `invalidateContentCache()` export function
   - Updated `fetchRemoteContent()` to add timestamp query parameter
   - Updated `useContent()` to check cache validity
   - Updated `useContentLoading()` to respect cache validity

4. **src/components/admin/PriceDataManager.tsx**
   - Imported `invalidateContentCache` from useContent
   - Called `invalidateContentCache()` after successful save

## How It Works Now

1. Admin updates price data in the admin panel
2. Data is saved to Supabase storage via the API
3. `invalidateContentCache()` is called, clearing the cached content
4. User refreshes or navigates to the main page
5. `useContent()` hook detects invalid/expired cache
6. Fresh data is fetched from Supabase with timestamp parameter
7. New price data is cached with current timestamp
8. `FinanceCalculator` receives updated price data
9. Calculations use the new values from the updated price table

## Testing

To test the fix:
1. Go to the admin panel
2. Update any price value (e.g., change 820 to 850)
3. Click "حفظ التغييرات" (Save Changes)
4. Navigate to the main page
5. Select the updated product value
6. Choose provider and first payment option
7. Verify the calculations reflect the new values:
   - المبلغ المطلوب تحويله (Transfer Amount)
   - القسط الشهري (Monthly Installment)
   - إجمالي الأقساط (Total Installments)
   - عدد الأشهر (Number of Months)

## Notes

- The cache duration is set to 5 seconds, which means updates will be reflected within 5 seconds
- If needed, you can adjust `CACHE_DURATION` in `useContent.ts` (value is in milliseconds)
- The `DEFAULT_PRICE_TABLE` is still used as a fallback if no dynamic data is available
- All existing tests continue to work since the `priceData` parameter is optional
