import React from 'react';

interface LedgerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function LedgerInput({ label, className, ...props }: LedgerInputProps) {
  return (
    <div className="relative pt-4">
      <input
        {...props}
        className={`
          w-full bg-transparent border-b border-stone-300 dark:border-stone-700 
          text-stone-900 dark:text-stone-100 font-heading text-lg italic
          focus:outline-none focus:border-stone-900 dark:focus:border-stone-100
          placeholder:text-transparent peer py-1
          ${className}
        `}
        placeholder=" " 
      />
      <label 
        className="
          absolute left-0 top-1 text-xs font-mono uppercase tracking-widest text-stone-400 
          transition-all duration-200
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:font-heading peer-placeholder-shown:normal-case peer-placeholder-shown:italic peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-stone-400
          peer-focus:top-1 peer-focus:text-xs peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-stone-500
        "
      >
        {label}
      </label>
    </div>
  );
}
