import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'primary-gradient' | 'secondary' | 'neutral' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

/**
 * Button Component
 * A versatile button component with multiple variants, sizes, and states.
 * Supports icons, loading states, and full accessibility.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  onClick,
  icon,
  iconPosition = 'left',
  className = '',
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-secondary-800 hover:bg-secondary-900 text-white shadow-md hover:shadow-lg',
    'primary-gradient': 'bg-gradient-primary text-white shadow-md hover:shadow-xl hover:-translate-y-1',
    secondary: 'bg-transparent border-2 border-secondary-800 text-secondary-800 hover:bg-secondary-800 hover:text-white',
    neutral: 'bg-transparent border-2 border-neutral-400 text-neutral-700 hover:bg-neutral-100',
    danger: 'bg-error-600 hover:bg-error-700 text-white shadow-md hover:shadow-lg',
    success: 'bg-success-600 hover:bg-success-700 text-white shadow-md hover:shadow-lg',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-10 py-5 text-lg rounded-xl',
  };

  // Disabled/loading state
  const isDisabled = disabled || loading;
  const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  // Width style
  const widthStyle = fullWidth ? 'w-full' : '';

  // Combined className
  const buttonClassName = `
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabledStyles}
    ${widthStyle}
    font-semibold
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-2
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      className={buttonClassName}
    >
      {loading ? (
        <span>...</span>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
        </>
      )}
    </button>
  );
};
