import React from "react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'white' | 'light';
  className?: string;
}

/**
 * FeatureCard Component
 * A card component for displaying features or benefits with icon, title, and description.
 * Includes hover effects and smooth transitions.
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  variant = 'white',
  className = '',
}) => {
  // Variant styles
  const variantStyles = {
    white: 'bg-white',
    light: 'bg-primary-50',
  };

  // Border color on hover
  const hoverBorderColor = variant === 'white' ? 'hover:border-accent-400' : 'hover:border-secondary-800';

  // Combined card className
  const cardClassName = `
    ${variantStyles[variant]}
    border-2
    border-transparent
    shadow-md
    rounded-2xl
    px-8
    py-10
    md:px-6
    md:py-8
    text-center
    hover:-translate-y-2
    hover:shadow-xl
    ${hoverBorderColor}
    transition-all
    duration-[400ms]
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={cardClassName}>
      <div className="flex justify-center mb-5 text-secondary-800">
        {icon}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-3">
        {title}
      </h3>

      <p className="text-[0.95rem] md:text-[1.05rem] text-primary-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
