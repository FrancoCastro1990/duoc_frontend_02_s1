import React from "react";

export interface SectionCardProps {
  title?: string;
  subtitle?: string;
  titleAlignment?: 'left' | 'center';
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

/**
 * SectionCard Component
 * A card component for wrapping sections with optional title and subtitle.
 * Provides consistent styling and spacing for content sections.
 */
export const SectionCard: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  titleAlignment = 'left',
  children,
  className = '',
  padding = 'md',
}) => {
  // Padding styles
  const paddingStyles = {
    sm: 'px-6 py-6 md:px-6',
    md: 'px-10 py-10 md:px-6',
    lg: 'px-12 py-12 md:px-6',
  };

  // Title alignment styles
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center',
  };

  // Combined card className
  const cardClassName = `
    bg-white
    border
    border-secondary-100
    shadow-lg
    rounded-[20px]
    ${paddingStyles[padding]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={cardClassName}>
      {(title || subtitle) && (
        <div className={`mb-8 ${alignmentStyles[titleAlignment]}`}>
          {title && (
            <h2 className="text-primary-900 text-[2rem] md:text-2xl font-bold mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-primary-500 text-[1.05rem]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div>
        {children}
      </div>
    </div>
  );
};
