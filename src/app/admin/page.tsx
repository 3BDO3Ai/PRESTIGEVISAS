"use client";

import { useState } from 'react';
import { DocumentTextIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import AdminLayout from '@/components/AdminLayout';
import ContentManager from '@/components/admin/ContentManager';
import PriceDataManager from '@/components/admin/PriceDataManager';

type TabType = 'content' | 'prices';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('content');

  const tabs = [
    { id: 'content', label: 'إدارة المحتوى', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { id: 'prices', label: 'إدارة الأسعار', icon: <CurrencyDollarIcon className="w-5 h-5" /> },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-secondary mb-2">مرحباً بك في لوحة التحكم</h2>
          <p className="text-gray-600">
            يمكنك من هنا إدارة جميع محتويات الموقع وأسعار المنتجات
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 space-x-reverse px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="inline-flex items-center justify-center text-accent/90">
                    {tab.icon}
                  </span>
                  <span className="sr-only">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'content' && <ContentManager />}
            {activeTab === 'prices' && <PriceDataManager />}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}