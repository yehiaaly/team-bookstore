import Image from "next/image";
import { X } from "lucide-react";

interface StackItemProps {
  item: OrderItem;
  onRemove?: (id: string) => void;
}

export function StackItem({ item, onRemove }: StackItemProps) {
  return (
    <div className="group relative flex gap-4 rounded-sm border border-stone-200 bg-white p-4 shadow-sm transition-all hover:translate-x-1 hover:shadow-md dark:border-stone-800 dark:bg-stone-900">
      <div className="relative h-24 w-16 shrink-0 overflow-hidden bg-stone-200 shadow-inner">
        <Image
          src={item.book.coverUrl}
          alt={item.book.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h4 className="font-heading text-lg leading-tight font-bold text-stone-900 dark:text-stone-100">
          {item.book.title}
        </h4>
        <p className="font-body text-sm text-stone-500 dark:text-stone-400">
          by {item.book.author}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-mono text-xs text-stone-400">
            ${item.book.price.toFixed(2)}
          </span>
        </div>
      </div>
      <button
        onClick={() => onRemove?.(item.id)}
        className="absolute top-2 right-2 p-1 text-stone-300 opacity-0 transition-all group-hover:opacity-100 hover:text-red-500"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
