import React, { useState } from 'react';
import type { TheCounterProps } from '@/../src/sections/the-counter/types';
import { LedgerInput } from './LedgerInput';
import { StackItem } from './StackItem';
import { ArrowLeft, Gift, Check } from 'lucide-react';

export function TheCounter({
  order,
  onRemoveItem,
  onToggleGift,
  onCompletePurchase,
}: TheCounterProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-stone-200 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-body selection:bg-orange-100 dark:selection:bg-orange-900 flex items-center justify-center p-4 lg:p-8">
      
      {/* The "Receipt/Ledger" Container */}
      <div className="w-full max-w-4xl bg-white dark:bg-stone-900 rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* Left Column: The Stack (Cart Summary) */}
        <div className="w-full lg:w-5/12 p-6 lg:p-8 flex flex-col bg-stone-50 dark:bg-stone-950 border-r border-stone-200 dark:border-stone-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold">The Stack</h2>
            <button 
              onClick={() => window.history.back()} // Simple back action
              className="text-xs text-stone-400 hover:text-stone-600 transition-colors font-mono uppercase tracking-wide"
            >
              Back
            </button>
          </div>

          <div className="space-y-3 mb-6 overflow-y-auto max-h-[400px] pr-2">
            {order.items.map(item => (
              <StackItem key={item.id} item={item} onRemove={onRemoveItem} />
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-dashed border-stone-300 dark:border-stone-700 space-y-2 font-mono text-xs">
            <div className="flex justify-between text-stone-500">
              <span>Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span>Tax</span>
              <span>${order.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-stone-900 dark:text-stone-100 pt-2">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right Column: The Ledger (Guestbook/Payment) */}
        <div className="w-full lg:w-7/12 p-6 lg:p-8 flex flex-col">
          <div className="mb-6 text-center">
            <h3 className="font-heading text-xl font-bold mb-1">The Guestbook</h3>
            <p className="text-xs text-stone-400 font-mono uppercase tracking-widest">Details & Payment</p>
          </div>

          <form 
            className="space-y-5 flex-1 flex flex-col"
            onSubmit={(e) => { e.preventDefault(); onCompletePurchase?.(formData); }}
          >
            <LedgerInput label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
            <LedgerInput label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
            <LedgerInput label="Address" name="address" value={formData.address} onChange={handleChange} />
            
            <div className="grid grid-cols-2 gap-4">
              <LedgerInput label="City" name="city" value={formData.city} onChange={handleChange} />
              <LedgerInput label="Zip" name="zip" value={formData.zip} onChange={handleChange} />
            </div>

            {/* Gift Toggle */}
            <div className="pt-2 flex items-center gap-3 cursor-pointer group" onClick={() => onToggleGift?.(!order.isGift)}>
              <div className={`w-4 h-4 border border-stone-400 rounded flex items-center justify-center transition-colors ${order.isGift ? 'bg-orange-500 border-orange-500 text-white' : 'bg-transparent group-hover:border-stone-600'}`}>
                {order.isGift && <Check className="w-3 h-3" />}
              </div>
              <span className="font-heading text-sm text-stone-600 dark:text-stone-300">Wrap as a gift?</span>
              <Gift className={`w-4 h-4 ${order.isGift ? 'text-orange-500' : 'text-stone-300'} ml-auto`} />
            </div>

            {/* The Stamp Button */}
            <div className="pt-6 mt-auto">
              <button 
                type="submit"
                className="w-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-heading font-bold text-lg py-4 rounded-sm shadow-md hover:bg-orange-700 dark:hover:bg-stone-200 transition-colors uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <span>Seal & Pay</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
