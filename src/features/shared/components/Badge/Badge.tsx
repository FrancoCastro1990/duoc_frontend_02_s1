import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'primary' | 'secondary' | 'neutral';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

/**
 * Badge Component
 * A small label component for tags, categories, or status indicators.
 * Supports multiple variants and sizes.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  size = 'md',
  className = '',
}) => {
  // Variant styles
  const variantStyles = {
    accent: 'bg-gradient-accent text-primary-900 font-semibold uppercase tracking-widest',
    primary: 'bg-primary-600 text-white font-bold',
    secondary: 'bg-secondary-50 text-secondary-800 border border-secondary-200 font-bold',
    neutral: 'bg-neutral-100 text-neutral-700 font-bold',
  };

  // Size styles
  const sizeStyles = {
    xs: 'text-xs px-[0.85rem] py-[0.35rem]',
    sm: 'text-sm px-4 py-[0.4rem]',
    md: 'text-sm px-7 py-[0.6rem]',
  };

  // Combined badge className
  const badgeClassName = `
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    rounded-full
    inline-flex
    items-center
    justify-center
    whitespace-nowrap
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <span className={badgeClassName}>
      {children}
    </span>
  );
};
