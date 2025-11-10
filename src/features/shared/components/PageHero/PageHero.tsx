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
  // Variant styles
  const variantStyles = {
    gradient: 'bg-gradient-primary text-white p-8 md:p-12 rounded-3xl shadow-lg',
    white: 'bg-white text-primary-900 px-10 py-16 md:px-6 md:py-8 rounded-[20px] shadow-xl',
    'gradient-overlay': 'bg-gradient-primary text-white p-8 md:p-12 rounded-3xl shadow-lg relative overflow-hidden',
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

  return (
    <div className={heroClassName}>
      {variant === 'gradient-overlay' && (
        <div className="absolute inset-0 bg-gradient-overlay opacity-30 pointer-events-none" />
      )}

      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>

        {subtitle && (
          <p className="text-[1.05rem] md:text-[1.15rem] opacity-90 mb-6 animate-fade-in-down">
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
