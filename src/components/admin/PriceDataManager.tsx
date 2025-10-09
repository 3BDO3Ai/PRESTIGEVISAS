"use client";

import { useState, useEffect } from 'react';
import { invalidateContentCache } from '@/content/useContent';

interface PriceItem {
  productValue: number;
  transferAmount: number;
  firstPayment: number;
}

export default function PriceDataManager() {
  const [priceData, setPriceData] = useState<PriceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newItem, setNewItem] = useState<PriceItem>({ productValue: 0, transferAmount: 0, firstPayment: 0 });
  const [showAddForm, setShowAddForm] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    loadPriceData();
  }, []);

  const loadPriceData = async () => {
    try {
      const response = await fetch('/api/admin/content');
      if (response.ok) {
        const data = await response.json();
        setPriceData(data.priceData || []);
      }
    } catch (error) {
      console.error('Error loading price data:', error);
    } finally {
      setLoading(false);
    }
  };

  const savePriceData = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/price-data', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceData }),
      });

      if (response.ok) {
        // Invalidate the content cache so the main page will fetch fresh data
        invalidateContentCache();
        setNotification({ type: 'success', message: 'تم حفظ بيانات الأسعار بنجاح' });
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

  const addItem = () => {
    if (newItem.productValue > 0 && newItem.transferAmount > 0 && newItem.firstPayment > 0) {
      setPriceData([...priceData, { ...newItem }]);
      setNewItem({ productValue: 0, transferAmount: 0, firstPayment: 0 });
      setShowAddForm(false);
    }
  };

  const updateItem = (index: number, field: keyof PriceItem, value: number) => {
    const updated = [...priceData];
    updated[index] = { ...updated[index], [field]: value };
    setPriceData(updated);
  };

  const deleteItem = (index: number) => {
    if (confirm('هل أنت متأكد من حذف هذا العنصر؟')) {
      setPriceData(priceData.filter((_, i) => i !== index));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
        <p className="mt-2 text-gray-600">جاري تحميل بيانات الأسعار...</p>
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

      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-secondary">إدارة أسعار المنتجات</h3>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors"
        >
          {showAddForm ? 'إلغاء' : 'إضافة عنصر جديد'}
        </button>
      </div>

      {/* Add New Item Form */}
      {showAddForm && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h4 className="font-medium text-gray-800 mb-4">إضافة عنصر جديد</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                قيمة المنتج
              </label>
              <input
                type="number"
                step="0.01"
                value={newItem.productValue || ''}
                onChange={(e) => setNewItem({ ...newItem, productValue: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                مبلغ التحويل
              </label>
              <input
                type="number"
                step="0.01"
                value={newItem.transferAmount || ''}
                onChange={(e) => setNewItem({ ...newItem, transferAmount: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الدفعة الأولى
              </label>
              <input
                type="number"
                step="0.01"
                value={newItem.firstPayment || ''}
                onChange={(e) => setNewItem({ ...newItem, firstPayment: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={addItem}
              disabled={!newItem.productValue || !newItem.transferAmount || !newItem.firstPayment}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              إضافة
            </button>
          </div>
        </div>
      )}

      {/* Price Data Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h4 className="font-medium text-gray-800">قائمة الأسعار الحالية</h4>
        </div>
        
        {priceData.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            لا توجد بيانات أسعار
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    قيمة المنتج
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    مبلغ التحويل
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الدفعة الأولى
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {priceData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingIndex === index ? (
                        <input
                          type="number"
                          step="0.01"
                          value={item.productValue}
                          onChange={(e) => updateItem(index, 'productValue', parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      ) : (
                        <span className="text-gray-900">{formatCurrency(item.productValue)}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingIndex === index ? (
                        <input
                          type="number"
                          step="0.01"
                          value={item.transferAmount}
                          onChange={(e) => updateItem(index, 'transferAmount', parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      ) : (
                        <span className="text-gray-900">{formatCurrency(item.transferAmount)}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingIndex === index ? (
                        <input
                          type="number"
                          step="0.01"
                          value={item.firstPayment}
                          onChange={(e) => updateItem(index, 'firstPayment', parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      ) : (
                        <span className="text-gray-900">{formatCurrency(item.firstPayment)}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {editingIndex === index ? (
                        <div className="flex space-x-2 space-x-reverse">
                          <button
                            onClick={() => setEditingIndex(null)}
                            className="text-green-600 hover:text-green-900"
                          >
                            حفظ
                          </button>
                          <button
                            onClick={() => setEditingIndex(null)}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            إلغاء
                          </button>
                        </div>
                      ) : (
                        <div className="flex space-x-2 space-x-reverse">
                          <button
                            onClick={() => setEditingIndex(index)}
                            className="text-accent hover:text-accent/80"
                          >
                            تعديل
                          </button>
                          <button
                            onClick={() => deleteItem(index)}
                            className="text-red-600 hover:text-red-900"
                          >
                            حذف
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={savePriceData}
          disabled={saving}
          className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? 'جاري الحفظ...' : 'حفظ تغييرات الأسعار'}
        </button>
      </div>
    </div>
  );
}