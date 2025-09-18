"use client";

import { useState, useEffect } from 'react';

interface ContentSection {
  key: string;
  title: string;
  data: any;
}

export default function ContentManager() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch('/api/admin/content');
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      }
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        setNotification({ type: 'success', message: 'تم حفظ التغييرات بنجاح' });
        try {
          // notify other tabs/components that content changed
          localStorage.setItem('adminContentUpdated', String(Date.now()));
          try {
            // also notify same-tab listeners via BroadcastChannel
            const bc = new BroadcastChannel('content-updates');
            bc.postMessage({ updatedAt: Date.now() });
            bc.close();
          } catch (e) {
            // BroadcastChannel may not be available in some environments
          }
        } catch (e) {
          // ignore storage errors (e.g., private mode)
        }
      } else {
        setNotification({ type: 'error', message: 'حدث خطأ أثناء الحفظ' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'حدث خطأ في الاتصال' });
    } finally {
      setSaving(false);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const updateContent = (path: string[], value: string) => {
    setContent((prev: any) => {
      const newContent = { ...prev };
      let current = newContent;
      
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      current[path[path.length - 1]] = value;
      return newContent;
    });
  };

  const renderInput = (label: string, value: string, path: string[]) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => updateContent(path, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
      />
    </div>
  );

  const renderTextarea = (label: string, value: string, path: string[]) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        value={value || ''}
        onChange={(e) => updateContent(path, e.target.value)}
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
      />
    </div>
  );

  const addFeatureCard = () => {
    setContent((prev: any) => {
      const newContent = { ...prev };
      const key = `card_${Date.now()}`;
      if (!newContent.features) newContent.features = { cards: {} };
      if (!newContent.features.cards) newContent.features.cards = {};
      newContent.features.cards[key] = { title: 'عنوان جديد', description: 'وصف جديد' };
      return newContent;
    });
  };

  const deleteFeatureCard = (key: string) => {
    if (!confirm('هل أنت متأكد من حذف هذه الميزة؟')) return;
    setContent((prev: any) => {
      const newContent = { ...prev };
      if (newContent.features && newContent.features.cards && newContent.features.cards[key]) {
        const { [key]: _removed, ...rest } = newContent.features.cards;
        newContent.features.cards = rest;
      }
      return newContent;
    });
  };

  const addFaqItem = () => {
    setContent((prev: any) => {
      const newContent = { ...prev };
      const key = `q_${Date.now()}`;
      if (!newContent.faq) newContent.faq = { questions: {} };
      if (!newContent.faq.questions) newContent.faq.questions = {};
      newContent.faq.questions[key] = { question: 'سؤال جديد', answer: 'إجابة جديدة' };
      return newContent;
    });
  };

  const deleteFaqItem = (key: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا السؤال؟')) return;
    setContent((prev: any) => {
      const newContent = { ...prev };
      if (newContent.faq && newContent.faq.questions && newContent.faq.questions[key]) {
        const { [key]: _removed, ...rest } = newContent.faq.questions;
        newContent.faq.questions = rest;
      }
      return newContent;
    });
  };

  const sections = [
    { key: 'hero', title: 'القسم الرئيسي' },
    { key: 'header', title: 'رأس الصفحة' },
    { key: 'priceList', title: 'قائمة الأسعار' },
    { key: 'calculator', title: 'الحاسبة' },
    { key: 'features', title: 'المميزات' },
    { key: 'faq', title: 'الأسئلة الشائعة' },
    { key: 'footer', title: 'تذييل الصفحة' },
  ];

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
        <p className="mt-2 text-gray-600">جاري تحميل المحتوى...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="text-center py-8 text-red-600">
        خطأ في تحميل المحتوى
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Notification */}
      {notification && (
        <div className={`p-4 rounded-md ${
          notification.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {notification.message}
        </div>
      )}

      {/* Section Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 space-x-reverse">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeSection === section.key
                  ? 'border-accent text-accent'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Editor */}
      <div className="bg-gray-50 rounded-lg p-6">
        {activeSection === 'hero' && content.hero && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary mb-4">تحرير القسم الرئيسي</h3>
            {renderInput('العنوان الرئيسي', content.hero.title, ['hero', 'title'])}
            {renderInput('العنوان الفرعي', content.hero.subtitle, ['hero', 'subtitle'])}
            {renderInput('المزود', content.hero.provider, ['hero', 'provider'])}
            {renderInput('الخدمة', content.hero.service, ['hero', 'service'])}
            {renderInput('التحويل', content.hero.transfer, ['hero', 'transfer'])}
            {renderInput('بدون كفيل', content.hero.noGuarantor, ['hero', 'noGuarantor'])}
          </div>
        )}

        {activeSection === 'features' && content.features && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary mb-4">تحرير المميزات</h3>
            {renderInput('عنوان القسم', content.features.title, ['features', 'title'])}
            {renderInput('العنوان الفرعي', content.features.subtitle, ['features', 'subtitle'])}
            
            <div className="flex items-center justify-between mt-4">
              <h4 className="font-medium text-gray-800">البطاقات</h4>
              <div>
                <button onClick={addFeatureCard} className="bg-accent text-white px-3 py-1 rounded-md text-sm">إضافة بطاقة</button>
              </div>
            </div>

            <div className="space-y-6 mt-6">
              {Object.entries(content.features.cards).map(([key, card]: [string, any]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4 relative">
                  <div className="absolute left-4 top-4">
                    <button onClick={() => deleteFeatureCard(key)} className="text-red-600 hover:text-red-800 text-sm">حذف</button>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-3">بطاقة {key}</h4>
                  {renderInput('العنوان', card.title, ['features', 'cards', key, 'title'])}
                  {renderTextarea('الوصف', card.description, ['features', 'cards', key, 'description'])}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'faq' && content.faq && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary mb-4">تحرير الأسئلة الشائعة</h3>
            <div className="flex items-center justify-between mt-2">
              <h4 className="font-medium text-gray-800">الأسئلة</h4>
              <div>
                <button onClick={addFaqItem} className="bg-accent text-white px-3 py-1 rounded-md text-sm">إضافة سؤال</button>
              </div>
            </div>

            <div className="space-y-6 mt-4">
              {Object.entries(content.faq.questions).map(([key, qa]: [string, any]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4 relative">
                  <div className="absolute left-4 top-4">
                    <button onClick={() => deleteFaqItem(key)} className="text-red-600 hover:text-red-800 text-sm">حذف</button>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-3">سؤال {key}</h4>
                  {renderInput('السؤال', qa.question, ['faq', 'questions', key, 'question'])}
                  {renderTextarea('الإجابة', qa.answer, ['faq', 'questions', key, 'answer'])}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'header' && content.header && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary mb-4">تحرير رأس الصفحة</h3>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">قائمة التنقل</h4>
              {Object.entries(content.header.navigation).map(([key, value]: [string, any]) => (
                <div key={key}>
                  {renderInput(`${key}`, value, ['header', 'navigation', key])}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'priceList' && content.priceList && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary mb-4">تحرير قائمة الأسعار</h3>
            {renderInput('عنوان القسم', content.priceList.title, ['priceList', 'title'])}
            {renderTextarea('وصف القسم', content.priceList.description, ['priceList', 'description'])}
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">عناوين الجدول</h4>
              {Object.entries(content.priceList.headers).map(([key, value]: [string, any]) => (
                <div key={key}>
                  {renderInput(`${key}`, value, ['priceList', 'headers', key])}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'calculator' && content.calculator && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary mb-4">تحرير الحاسبة</h3>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">اختيار المزود</h4>
                {renderInput('العنوان', content.calculator.providerSelection.title, ['calculator', 'providerSelection', 'title'])}
                {renderInput('تابي', content.calculator.providerSelection.tabby, ['calculator', 'providerSelection', 'tabby'])}
                {renderInput('تمارا', content.calculator.providerSelection.tamara, ['calculator', 'providerSelection', 'tamara'])}
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">الدفعة الأولى</h4>
                {renderInput('العنوان', content.calculator.firstPayment.title, ['calculator', 'firstPayment', 'title'])}
                {renderInput('نعم', content.calculator.firstPayment.yes, ['calculator', 'firstPayment', 'yes'])}
                {renderInput('لا', content.calculator.firstPayment.no, ['calculator', 'firstPayment', 'no'])}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'footer' && content.footer && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary mb-4">تحرير تذييل الصفحة</h3>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">معلومات الشركة</h4>
                {renderInput('اسم الشركة', content.footer.company.name, ['footer', 'company', 'name'])}
                {renderTextarea('وصف الشركة', content.footer.company.description, ['footer', 'company', 'description'])}
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">معلومات التواصل</h4>
                {renderInput('رقم الهاتف', content.footer.contact.phone, ['footer', 'contact', 'phone'])}
                {renderInput('البريد الإلكتروني', content.footer.contact.emailAddress, ['footer', 'contact', 'emailAddress'])}
                {renderInput('العنوان', content.footer.contact.addressValue, ['footer', 'contact', 'addressValue'])}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={saveContent}
          disabled={saving}
          className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
        </button>
      </div>
    </div>
  );
}