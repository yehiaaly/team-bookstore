import React from 'react';
import type { OrderItem } from '@/../src/sections/the-counter/types';
import { X } from 'lucide-react';

interface StackItemProps {
  item: OrderItem;
  onRemove?: (id: string) => void;
}

export function StackItem({ item, onRemove }: StackItemProps) {
  return (
    <div className="group relative flex gap-4 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm rounded-sm transition-all hover:translate-x-1 hover:shadow-md">
      <div className="w-16 h-24 bg-stone-200 shrink-0 overflow-hidden shadow-inner">
        <img src={item.book.coverUrl} alt={item.book.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h4 className="font-heading font-bold text-lg leading-tight text-stone-900 dark:text-stone-100">{item.book.title}</h4>
        <p className="font-body text-sm text-stone-500 dark:text-stone-400">by {item.book.author}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-mono text-xs text-stone-400">${item.book.price.toFixed(2)}</span>
        </div>
      </div>
      <button 
        onClick={() => onRemove?.(item.id)}
        className="absolute top-2 right-2 p-1 text-stone-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
