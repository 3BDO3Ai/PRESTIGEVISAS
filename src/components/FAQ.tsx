"use client";

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-right py-5 px-6 text-gray-900"
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon className="w-5 h-5" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 pt-0 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div id="faq" className="max-w-4xl mx-auto my-16">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg">
        <AccordionItem title="هل أحتاج دفعة أولى؟">
          <p>يعتمد على قيمة المنتج والمزود. يمكنك اختيار دفع دفعة أولى أو خصمها من مبلغ التمويل.</p>
        </AccordionItem>
        <AccordionItem title="كم عدد الأقساط؟">
          <p>يمكنك اختيار عدد الأقساط المناسب لك من 3 إلى 12 شهرًا.</p>
        </AccordionItem>
        <AccordionItem title="كيف يتم التحويل؟">
          <p>بعد إرسال الطلب عبر واتساب، سيتم التواصل معك لتأكيد المعلومات وإتمام عملية التحويل بشكل آمن وسريع.</p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default FAQ;