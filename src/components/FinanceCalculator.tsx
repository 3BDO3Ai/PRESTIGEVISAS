"use client";

import { useState, useEffect } from 'react';
import { calculate, formatCurrencyEN, type CalculationResult } from '@/lib/financeCalculations';
import { useContent } from '@/content/useContent';

interface FinanceCalculatorProps {
  initialAmount?: number | undefined;
}

const FinanceCalculator = ({ initialAmount }: FinanceCalculatorProps) => {
  const content = useContent();
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
          <h3 className="text-lg font-semibold">{content.calculator.providerSelection.title}</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => { setProvider('tamara'); setHasFirstPayment(true); }}
              className={`py-2 px-6 rounded-lg transition-all ${provider === 'tamara' ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {content.calculator.providerSelection.tamara}
            </button>
            <button
              onClick={() => { setProvider('tabby'); /* keep existing hasFirstPayment choice */ }}
              className={`py-2 px-6 rounded-lg transition-all ${provider === 'tabby' ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {content.calculator.providerSelection.tabby}
            </button>
          </div>
        </div>

        {/* Left Side */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">{content.calculator.firstPayment.title}</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setHasFirstPayment(true)}
              className={`py-2 px-6 rounded-lg transition-all ${hasFirstPayment ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {content.calculator.firstPayment.yes}
            </button>
            <button
              onClick={() => setHasFirstPayment(false)}
              disabled={!provider || provider === 'tamara'}
              className={`py-2 px-6 rounded-lg transition-all ${(!hasFirstPayment && provider && provider !== 'tamara') ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'} ${(!provider || provider === 'tamara') ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {content.calculator.firstPayment.no}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 border border-gray-200 p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="customer-name" className="block text-sm text-gray-700 mb-1">{content.calculator.form.customerName}</label>
          <input
            id="customer-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={content.calculator.form.customerNamePlaceholder}
            className="w-full p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-900"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg">{content.calculator.form.productValue}</h3>
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
            <span className="text-sm text-gray-400">{content.common.currency}</span>
          </div>
        </div>
        {/* Slider removed as requested; number input remains for precise entry */}
        
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-light border border-gray-200 p-3 rounded shadow-sm">
            <p className="text-gray-600">{content.calculator.summaryLabels.transferAmountRequired}</p>
            <p className="text-lg font-bold text-accent" id="transferAmount">
              {calculationResult ? formatCurrencyEN(calculationResult.transferAmount) : '—'}
            </p>
          </div>
          <div className="bg-light border border-gray-200 p-3 rounded shadow-sm">
            <p className="text-gray-600">{content.calculator.summaryLabels.monthlyInstallment}</p>
            <p className="text-lg font-bold text-secondary" id="monthlyAmount">
              {calculationResult ? formatCurrencyEN(calculationResult.monthlyInstallment) : '—'}
            </p>
          </div>
          <div className="bg-light border border-gray-200 p-3 rounded shadow-sm">
            <p className="text-gray-600">{content.calculator.summaryLabels.totalInstallments}</p>
            <p className="text-lg font-bold text-secondary" id="totalAmount">
              {calculationResult ? formatCurrencyEN(calculationResult.totalInstallments) : '—'}
            </p>
          </div>
          <div className="bg-light border border-gray-200 p-3 rounded shadow-sm">
            <p className="text-gray-600">{content.calculator.summaryLabels.monthsCount}</p>
            <p className="text-lg font-bold text-secondary" id="monthsCount">
              {calculationResult ? calculationResult.months : '—'}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-700 font-semibold">{content.calculator.importantNotes}</p>
          <p className="text-sm text-gray-600" id="notes">
            {calculationResult?.notes || content.calculator.defaultNotes}
          </p>
        </div>
      </div>

      <div className="mt-6 text-right text-gray-700 max-w-4xl mx-auto">
        <p className="mb-2">{content.calculator.orderSummary.name}: <span className="font-semibold">{name || '—'}</span></p>
  <p className="mb-2">{content.calculator.orderSummary.amount}: <span className="font-semibold">{amount ? formatCurrencyEN(parseFloat(amount)) : '—'}</span></p>
  <p className="mb-2">{content.calculator.orderSummary.monthlyInstallment}: <span className="font-semibold">{calculationResult ? formatCurrencyEN(calculationResult.monthlyInstallment) : '—'}</span></p>
        <p className="mb-2">{content.calculator.orderSummary.installmentsCount}: <span className="font-semibold">{calculationResult ? `${calculationResult.months} ${content.calculator.whatsappTemplate.monthsUnit}` : '—'}</span></p>
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
              alert(content.calculator.validationMessage);
              return;
            }

            const amountNumberForText = parseFloat(amount as unknown as string);
            const text = `${content.calculator.whatsappTemplate.header}\n${content.calculator.whatsappTemplate.name}: ${name}\n${content.calculator.whatsappTemplate.amount}: ${formatCurrencyEN(amountNumberForText)}\n${content.calculator.whatsappTemplate.installmentsCount}: ${calculationResult.months}\n${content.calculator.whatsappTemplate.monthlyInstallment}: ${formatCurrencyEN(calculationResult.monthlyInstallment)}\n${content.calculator.whatsappTemplate.transferAmount}: ${formatCurrencyEN(calculationResult.transferAmount)}`;
            const phone = content.footer.contact.phone;
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
          }}
          disabled={!name || !calculationResult || Number.isNaN(parseFloat(amount as unknown as string)) || parseFloat(amount as unknown as string) <= 0}
          className={`font-bold py-3 px-12 rounded-lg transition-all ${(!name || !calculationResult || Number.isNaN(parseFloat(amount as unknown as string)) || parseFloat(amount as unknown as string) <= 0) ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl'}`}
        >
          {content.calculator.submitButton}
        </button>
      </div>
    </div>
  );
};

export default FinanceCalculator;
