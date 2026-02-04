import React from "react";

interface LedgerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function LedgerInput({ label, className, ...props }: LedgerInputProps) {
  // Use id if provided, otherwise fallback to name.
  // If neither, the label won't associate correctly, but name is usually present in forms.
  const inputId = props.id || props.name;

  return (
    <div className="relative pt-4">
      <input
        id={inputId}
        {...props}
        className={`font-heading peer w-full border-b border-stone-300 bg-transparent py-1 text-lg text-stone-900 italic placeholder:text-transparent focus:border-stone-900 focus:outline-none dark:border-stone-700 dark:text-stone-100 dark:focus:border-stone-100 ${className} `}
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        className="peer-placeholder-shown:font-heading absolute top-1 left-0 font-mono text-xs tracking-widest text-stone-400 uppercase transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-stone-400 peer-placeholder-shown:normal-case peer-placeholder-shown:italic peer-focus:top-1 peer-focus:font-mono peer-focus:text-xs peer-focus:tracking-widest peer-focus:text-stone-500 peer-focus:uppercase"
      >
        {label}
      </label>
    </div>
  );
}
