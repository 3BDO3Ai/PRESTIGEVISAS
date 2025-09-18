"use client";

import { useState } from "react";
import { useContent } from '@/content/useContent';
import { formatCurrencyEN } from '@/lib/financeCalculations';

const PriceList = ({ onSelect }: { onSelect?: (item: { productValue: number; transferAmount: number; firstPayment: number }) => void }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const content = useContent();
  const priceData = content.priceData;

  const format = (v: number) => formatCurrencyEN(v);

  function handleSelect(index: number) {
    setSelectedIndex(index);
    if (onSelect) onSelect(priceData[index]);
  }

  return (
    <div id="prices" className="max-w-6xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-4 text-secondary">{content.priceList.title}</h2>
      <p className="text-center text-gray-600 mb-6">{content.priceList.description}</p>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-4 text-gray-700 p-4 border-b border-gray-200 bg-gray-50">
          <div className="font-semibold">{content.priceList.headers.productValue}</div>
          <div className="font-semibold">{content.priceList.headers.transferAmount}</div>
          <div className="font-semibold">{content.priceList.headers.firstPayment}</div>
          <div className="font-semibold">{content.priceList.headers.select}</div>
        </div>

        {priceData.map((item, index) => {
          const selected = index === selectedIndex;
          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`grid grid-cols-4 items-center p-4 border-b border-gray-200 last:border-b-0 text-right w-full text-gray-900 focus:outline-none transition-colors ${
                selected ? 'bg-accent/15 ring-1 ring-accent/25' : 'hover:bg-gray-50'
              }`}
              aria-pressed={selected}
            >
              <div className="pr-4">{format(item.productValue)}</div>
              <div className="pr-4 text-gray-700">{format(item.transferAmount)}</div>
              <div className="pr-4 text-gray-700">{format(item.firstPayment)}</div>
              <div className="pr-4">
                <span className={`inline-block py-3 px-6 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selected 
                    ? 'bg-accent-600 text-white shadow-2xl ring-4 ring-accent/30 scale-105' 
                    : 'bg-gradient-to-r from-accent to-accent/80 text-white shadow-md hover:shadow-lg hover:scale-105 hover:from-accent/90 hover:to-accent'
                }`}>
                  {selected ? `✓ ${content.priceList.buttons.selected}` : content.priceList.buttons.select}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <div className="mt-6 bg-accent/10 border border-accent/20 p-4 rounded-lg text-gray-800">
          <strong className="block mb-2 text-accent">{content.priceList.selectedValue.title}</strong>
          <div className="flex justify-between gap-4">
            <div>{content.priceList.selectedValue.productValue}: {format(priceData[selectedIndex].productValue)}</div>
            <div>{content.priceList.selectedValue.transferAmount}: {format(priceData[selectedIndex].transferAmount)}</div>
            <div>{content.priceList.selectedValue.firstPayment}: {format(priceData[selectedIndex].firstPayment)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceList;