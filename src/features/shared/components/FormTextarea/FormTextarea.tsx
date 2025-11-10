import React from "react";

export interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  resizable?: boolean;
  className?: string;
}

/**
 * FormTextarea Component
 * A controlled textarea component with label, validation, and error states.
 * Includes focus states and accessibility features.
 */
export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  disabled = false,
  rows = 4,
  resizable = false,
  className = '',
}) => {
  // Error state styles
  const errorStyles = error
    ? 'border-error-600 focus:border-error-700'
    : 'border-neutral-300 focus:border-secondary-800';

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed bg-neutral-50' : 'bg-white';

  // Resize styles
  const resizeStyles = resizable ? 'resize-y' : 'resize-none';

  // Combined textarea className
  const textareaClassName = `
    w-full
    border-2
    ${errorStyles}
    ${disabledStyles}
    ${resizeStyles}
    rounded-xl
    px-4
    py-3
    text-[0.95rem]
    md:text-[1.05rem]
    text-primary-900
    placeholder:text-neutral-400
    focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)]
    focus:outline-none
    transition-all
    duration-200
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[0.95rem] md:text-[1.05rem] font-semibold text-primary-900"
      >
        {label}
        {required && <span className="text-error-600 ml-1">*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={textareaClassName}
      />

      {error && (
        <span className="text-error-600 text-sm font-medium animate-fade-in">
          {error}
        </span>
      )}
    </div>
  );
};
