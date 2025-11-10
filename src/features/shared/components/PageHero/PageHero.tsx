import React from "react";

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  variant?: 'gradient' | 'white' | 'gradient-overlay';
  alignment?: 'center' | 'left';
  className?: string;
  showAccentBorder?: boolean;
  children?: React.ReactNode;
}

/**
 * PageHero Component
 * A versatile hero section component for page headers.
 * Supports multiple visual variants and flexible content layout.
 */
export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  variant = 'gradient',
  alignment = 'left',
  className = '',
  showAccentBorder = false,
  children,
}) => {
  // Variant styles - mobile-first (text colors handled separately for proper contrast)
  const variantStyles = {
    gradient: 'bg-gradient-primary p-6 rounded-3xl shadow-lg sm:p-8 md:p-10 lg:p-12',
    white: 'bg-white px-6 py-8 rounded-[20px] shadow-xl sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-10 lg:py-16',
    'gradient-overlay': 'bg-gradient-primary p-6 rounded-3xl shadow-lg relative overflow-hidden sm:p-8 md:p-10 lg:p-12',
  };

  // Alignment styles
  const alignmentStyles = {
    center: 'text-center',
    left: 'text-left',
  };

  // Accent border style
  const accentBorderStyle = showAccentBorder ? 'border-t-[3px] border-accent-400' : '';

  // Combined className
  const heroClassName = `
    ${variantStyles[variant]}
    ${alignmentStyles[alignment]}
    ${accentBorderStyle}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Text color classes based on variant - ensures proper contrast
  const textColorClass = variant === 'white' ? 'text-primary-900' : 'text-white';
  const subtitleColorClass = variant === 'white' ? 'text-primary-500' : 'text-white';

  return (
    <div className={heroClassName}>
      {variant === 'gradient-overlay' && (
        <div className="absolute inset-0 bg-gradient-overlay opacity-30 pointer-events-none" />
      )}

      <div className="relative z-10">
        <h1 className={`${textColorClass} text-2xl font-bold mb-3 animate-fade-in sm:text-3xl md:text-4xl lg:text-5xl lg:mb-4`}>
          {title}
        </h1>

        {subtitle && (
          <p className={`${subtitleColorClass} text-base opacity-90 mb-5 animate-fade-in-down sm:text-[1.05rem] md:text-[1.15rem] md:mb-6`}>
            {subtitle}
          </p>
        )}

        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
