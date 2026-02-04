interface TraitBarProps {
  label: string;
  value: number; // 0-100
  colorClass: string;
}

export function TraitBar({ label, value, colorClass }: TraitBarProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-end">
        <span className="font-heading text-sm text-stone-600 dark:text-stone-400 font-medium">
          {label}
        </span>
        <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
          {value}/100
        </span>
      </div>
      <div className="h-1.5 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
