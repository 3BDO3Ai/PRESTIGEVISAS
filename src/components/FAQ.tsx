"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDownIcon className="w-5 h-5" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
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
  const [faq, setFaq] = useState<Record<string, { question: string; answer: string }>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        const res = await fetch('/api/admin/content');
        if (!res.ok) throw new Error('Failed to fetch content');
        const data = await res.json();
        if (mounted && data?.faq?.questions) {
          setFaq(data.faq.questions);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchContent();

    // listen to storage events to reflect admin edits made in another tab
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'adminContentUpdated') {
        fetchContent();
      }
    };
    window.addEventListener('storage', onStorage);

    // also listen to BroadcastChannel for same-tab notifications
    let bc: BroadcastChannel | null = null;
    try {
      bc = new BroadcastChannel('content-updates');
      bc.addEventListener('message', () => {
        fetchContent();
      });
    } catch (e) {
      // ignore if BroadcastChannel not supported
    }

    return () => {
      mounted = false;
      window.removeEventListener('storage', onStorage);
      try {
        if (bc) {
          bc.close();
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  if (loading) {
    return (
      <div id="faq" className="max-w-4xl mx-auto my-16">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-gray-600">جاري تحميل الأسئلة...</div>
      </div>
    );
  }

  return (
    <div id="faq" className="max-w-4xl mx-auto my-16">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg">
        {Object.entries(faq).map(([key, qa]) => (
          <AccordionItem key={key} title={qa.question}>
            <p>{qa.answer}</p>
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
