import React from "react";

// TraitRange component
interface TraitRangeProps {
  labelLeft: string;
  labelRight: string;
  value: number; // 0-100
}

export function TraitRange({ labelLeft, labelRight, value }: TraitRangeProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between font-mono text-xs tracking-wider text-stone-500 uppercase dark:text-stone-400">
        <span>{labelLeft}</span>
        <span>{labelRight}</span>
      </div>
      <div className="relative h-2 w-full rounded-full bg-stone-200 dark:bg-stone-800">
        {/* Background Track Markers (Optional decorative dots) */}
        <div className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-300 dark:bg-stone-700"></div>

        {/* The Marker */}
        <div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-stone-900 shadow-sm transition-all duration-1000 ease-out dark:border-stone-800 dark:bg-stone-100"
          style={{ left: `${value}%` }}
        />

        {/* Active Fill (Optional - maybe just the marker is cleaner for this style? Let's try filling for now) */}
        {/* Actually, for a bipolar scale, a fill implies "more of", but here it's "position between". 
            So NO fill bar, just the track and the marker (slider style). */}
      </div>
    </div>
  );
}
