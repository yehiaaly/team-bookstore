import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon */}
      <div className="relative flex h-8 w-8 items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-orange-600 dark:text-orange-500"
        >
          {/* Stylized Arch Logo based on user request */}
          <path
            d="M3 21C3 12 12 2 12 2S21 12 21 21H16.5C16.5 15 12 8.5 12 8.5S7.5 15 7.5 21H3Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Title */}
      <span className="font-heading text-lg font-bold tracking-tight text-orange-950 dark:text-orange-50">
        team bookstore
      </span>
    </div>
  );
}
