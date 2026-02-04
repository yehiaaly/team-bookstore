import React, { useState } from "react";
import type { TheCounterProps, CustomerDetails } from "@/types/counter";
import { LedgerInput } from "./LedgerInput";
import { StackItem } from "./StackItem";
import { Gift, Check } from "lucide-react";

interface TheCounterComponentProps extends TheCounterProps {
  initialValues?: Partial<CustomerDetails>;
}

export function TheCounter({
  order,
  onRemoveItem,
  onToggleGift,
  onCompletePurchase,
  initialValues,
}: TheCounterComponentProps) {
  const [formData, setFormData] = useState({
    fullName: initialValues?.fullName || "",
    email: initialValues?.email || "",
    address: initialValues?.address || "",
    city: initialValues?.city || "",
    zip: initialValues?.zip || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-body flex min-h-screen items-center justify-center bg-stone-200 p-4 text-stone-900 selection:bg-orange-100 lg:p-8 dark:bg-stone-950 dark:text-stone-100 dark:selection:bg-orange-900">
      {/* The "Receipt/Ledger" Container */}
      <div className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-sm bg-white shadow-2xl lg:flex-row dark:bg-stone-900">
        {/* Left Column: The Stack (Cart Summary) */}
        <div className="flex w-full flex-col border-r border-stone-200 bg-stone-50 p-6 lg:w-5/12 lg:p-8 dark:border-stone-800 dark:bg-stone-950">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-heading text-2xl font-bold">The Stack</h2>
            <button
              onClick={() => window.history.back()} // Simple back action
              className="font-mono text-xs tracking-wide text-stone-400 uppercase transition-colors hover:text-stone-600"
            >
              Back
            </button>
          </div>

          <div className="mb-6 max-h-[400px] space-y-3 overflow-y-auto pr-2">
            {order.items.length === 0 ? (
              <div className="py-10 text-center font-mono text-sm text-stone-400">
                The stack is empty.
              </div>
            ) : (
              order.items.map((item) => (
                <StackItem key={item.id} item={item} onRemove={onRemoveItem} />
              ))
            )}
          </div>

          <div className="mt-auto space-y-2 border-t border-dashed border-stone-300 pt-4 font-mono text-xs dark:border-stone-700">
            <div className="flex justify-between text-stone-500">
              <span>Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span>Tax</span>
              <span>${order.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 text-base font-bold text-stone-900 dark:text-stone-100">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right Column: The Ledger (Guestbook/Payment) */}
        <div className="flex w-full flex-col p-6 lg:w-7/12 lg:p-8">
          <div className="mb-6 text-center">
            <h3 className="font-heading mb-1 text-xl font-bold">
              The Guestbook
            </h3>
            <p className="font-mono text-xs tracking-widest text-stone-400 uppercase">
              Details & Payment
            </p>
          </div>

          <form
            className="flex flex-1 flex-col space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              onCompletePurchase?.(formData);
            }}
          >
            <LedgerInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <LedgerInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
            />
            <LedgerInput
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <LedgerInput
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <LedgerInput
                label="Zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gift Toggle */}
            <div
              className="group flex cursor-pointer items-center gap-3 pt-2"
              onClick={() => onToggleGift?.(!order.isGift)}
            >
              <div
                className={`flex h-4 w-4 items-center justify-center rounded border border-stone-400 transition-colors ${order.isGift ? "border-orange-500 bg-orange-500 text-white" : "bg-transparent group-hover:border-stone-600"}`}
              >
                {order.isGift && <Check className="h-3 w-3" />}
              </div>
              <span className="font-heading text-sm text-stone-600 dark:text-stone-300">
                Wrap as a gift?
              </span>
              <Gift
                className={`h-4 w-4 ${order.isGift ? "text-orange-500" : "text-stone-300"} ml-auto`}
              />
            </div>

            {/* The Stamp Button */}
            <div className="mt-auto pt-6">
              <button
                type="submit"
                disabled={order.items.length === 0} // Disable if empty
                className="font-heading flex w-full items-center justify-center gap-2 rounded-sm bg-stone-900 py-4 text-lg font-bold tracking-widest text-white uppercase shadow-md transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
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
