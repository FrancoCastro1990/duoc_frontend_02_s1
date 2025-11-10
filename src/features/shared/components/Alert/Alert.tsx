import React from "react";
import { X } from "lucide-react";

export interface AlertProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  message: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

/**
 * Alert Component
 * Displays contextual feedback messages with different severity levels.
 * Supports icons, close functionality, and smooth animations.
 */
export const Alert: React.FC<AlertProps> = ({
  variant,
  message,
  icon,
  onClose,
  className = '',
}) => {
  // Variant styles
  const variantStyles = {
    success: 'bg-success-100 border-l-4 border-success-600 text-success-800',
    error: 'bg-error-100 border-l-4 border-error-600 text-error-800',
    warning: 'bg-warning-100 border-l-4 border-warning-600 text-warning-800',
    info: 'bg-secondary-100 border-l-4 border-secondary-600 text-secondary-800',
  };

  // Combined alert className
  const alertClassName = `
    ${variantStyles[variant]}
    px-6
    py-5
    rounded-lg
    shadow-md
    flex
    items-start
    gap-3
    animate-fade-in-down
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={alertClassName} role="alert">
      {icon && (
        <div className="flex-shrink-0 mt-0.5">
          {icon}
        </div>
      )}

      <div className="flex-1 text-[0.95rem] md:text-[1.05rem] font-medium">
        {message}
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-70 transition-opacity duration-200 focus:outline-none"
          aria-label="Close alert"
        >
          <X size={20} strokeWidth={2} />
        </button>
      )}
    </div>
  );
};
