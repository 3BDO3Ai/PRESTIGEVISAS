"use client";

import { useState, useEffect } from 'react';
import { calculate, formatCurrency, type CalculationResult } from '@/lib/financeCalculations';

interface FinanceCalculatorProps {
  initialAmount?: number | undefined;
}

const FinanceCalculator = ({ initialAmount }: FinanceCalculatorProps) => {
  const [provider, setProvider] = useState<'tabby' | 'tamara' | undefined>(undefined);
  const [hasFirstPayment, setHasFirstPayment] = useState<boolean | undefined>(undefined);
  // allow blank amount when nothing selected: keep as string
  const [amount, setAmount] = useState<string>(initialAmount ? String(initialAmount) : '');
  const [name, setName] = useState('');
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);

  // Update amount when initialAmount prop changes
  useEffect(() => {
    setAmount(initialAmount ? String(initialAmount) : '');
  }, [initialAmount]);

  // Recalculate whenever inputs change
  useEffect(() => {
    // Only calculate when provider is selected, hasFirstPayment chosen, and amount is valid
    const amountNumber = parseFloat(amount as unknown as string);
    if (!provider || hasFirstPayment === undefined || !amount || Number.isNaN(amountNumber) || amountNumber <= 0) {
      setCalculationResult(null);
      return;
    }

    try {
      const result = calculate(
        amountNumber,
        provider,
        hasFirstPayment ? 'paid' : 'deduct'
      );
      setCalculationResult(result);
    } catch (error) {
      console.error('Calculation error:', error);
      setCalculationResult(null);
    }
  }, [amount, provider, hasFirstPayment]);

  return (
    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Right Side */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">اختر المزود</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => { setProvider('tamara'); setHasFirstPayment(true); }}
              className={`py-2 px-6 rounded-lg transition-all ${provider === 'tamara' ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              تمارا
            </button>
            <button
              onClick={() => { setProvider('tabby'); /* keep existing hasFirstPayment choice */ }}
              className={`py-2 px-6 rounded-lg transition-all ${provider === 'tabby' ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              تابي
            </button>
          </div>
        </div>

        {/* Left Side */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">هل لديك الدفعة الأولى؟</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setHasFirstPayment(true)}
              className={`py-2 px-6 rounded-lg transition-all ${hasFirstPayment ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              نعم
            </button>
            <button
              onClick={() => setHasFirstPayment(false)}
              disabled={!provider || provider === 'tamara'}
              className={`py-2 px-6 rounded-lg transition-all ${(!hasFirstPayment && provider && provider !== 'tamara') ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'} ${(!provider || provider === 'tamara') ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              لا، خصمها من مبلغ التحويل
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 border border-gray-200 p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="customer-name" className="block text-sm text-gray-700 mb-1">الاسم الكامل</label>
          <input
            id="customer-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="اكتب اسم العميل"
            className="w-full p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-900"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg">قيمة المنتج</h3>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="350"
              max="25000"
              step="0.25"
              value={amount}
              required
              onChange={(e) => setAmount(e.target.value)}
              className="w-32 p-2 rounded bg-gray-50 border border-gray-200 text-gray-900 text-right"
            />
            <span className="text-sm text-gray-400">ر.س.</span>
          </div>
        </div>
        {/* Slider removed as requested; number input remains for precise entry */}
        
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-light border border-gray-200 p-3 rounded shadow-sm">
            <p className="text-gray-600">المبلغ المطلوب تحويله</p>
            <p className="text-lg font-bold text-accent" id="transferAmount">
              {calculationResult ? formatCurrency(calculationResult.transferAmount) : '—'}
            </p>
          </div>
          <div className="bg-light border border-gray-200 p-3 rounded shadow-sm">
            <p className="text-gray-600">القسط الشهري</p>
            <p className="text-lg font-bold text-secondary" id="monthlyAmount">
              {calculationResult ? formatCurrency(calculationResult.monthlyInstallment) : '—'}
            </p>
          </div>
          <div className="bg-light border border-gray-200 p-3 rounded shadow-sm">
            <p className="text-gray-600">إجمالي الأقساط</p>
            <p className="text-lg font-bold text-secondary" id="totalAmount">
              {calculationResult ? formatCurrency(calculationResult.totalInstallments) : '—'}
            </p>
          </div>
          <div className="bg-light border border-gray-200 p-3 rounded shadow-sm">
            <p className="text-gray-600">عدد الأشهر</p>
            <p className="text-lg font-bold text-secondary" id="monthsCount">
              {calculationResult ? calculationResult.months : '—'}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-700 font-semibold">ملاحظات هامة</p>
          <p className="text-sm text-gray-600" id="notes">
            {calculationResult?.notes || 'اختر قيمة المنتج والمزود وحدد خيار الدفعة الأولى.'}
          </p>
        </div>
      </div>

      <div className="mt-6 text-right text-gray-700 max-w-4xl mx-auto">
        <p className="mb-2">الاسم: <span className="font-semibold">{name || '—'}</span></p>
        <p className="mb-2">المبلغ: <span className="font-semibold">{amount ? formatCurrency(parseFloat(amount)) : '—'}</span></p>
        <p className="mb-2">القسط الشهري: <span className="font-semibold">{calculationResult ? formatCurrency(calculationResult.monthlyInstallment) : '—'}</span></p>
        <p className="mb-2">عدد الأقساط: <span className="font-semibold">{calculationResult ? `${calculationResult.months} أشهر` : '—'}</span></p>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => {
            // Double-check validation before sending
            const isNameValid = name && name.trim().length > 0;
            const amtNum = parseFloat(amount as unknown as string);
            const isAmountValid = !!calculationResult && !Number.isNaN(amtNum) && amtNum > 0;
            if (!isNameValid || !isAmountValid || !calculationResult) {
              // Show a lightweight alert - could be replaced with UI toast
              alert('الرجاء ملء جميع الحقول المطلوبة قبل الإرسال (الاسم وقيمة المنتج).');
              return;
            }

            const amountNumberForText = parseFloat(amount as unknown as string);
            const text = `طلب تمويل من فزعة\nالاسم: ${name}\nالمبلغ: ${formatCurrency(amountNumberForText)}\nعدد الأقساط: ${calculationResult.months}\nالقسط الشهري: ${formatCurrency(calculationResult.monthlyInstallment)}\nمبلغ التحويل: ${formatCurrency(calculationResult.transferAmount)}`;
            const phone = '966504428580';
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
          }}
          disabled={!name || !calculationResult || Number.isNaN(parseFloat(amount as unknown as string)) || parseFloat(amount as unknown as string) <= 0}
          className={`font-bold py-3 px-12 rounded-lg transition-all ${(!name || !calculationResult || Number.isNaN(parseFloat(amount as unknown as string)) || parseFloat(amount as unknown as string) <= 0) ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl'}`}
        >
          إرسال الطلب عبر واتساب
        </button>
      </div>
    </div>
  );
};

export default FinanceCalculator;
