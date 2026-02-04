import React from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface MainNavProps {
  items: NavItem[];
  onNavigate?: (href: string) => void;
}

export function MainNav({ items, onNavigate }: MainNavProps) {
  return (
    <nav className="flex items-center gap-1">
      {items.map((item) => (
        <button
          key={item.href}
          onClick={() => onNavigate?.(item.href)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 font-heading",
            item.isActive
              ? "bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900"
              : "text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}