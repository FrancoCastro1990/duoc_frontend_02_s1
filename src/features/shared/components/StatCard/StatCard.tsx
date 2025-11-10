import React from "react";

export interface StatCardProps {
  value: string | number;
  label: string;
  className?: string;
}

/**
 * StatCard Component
 * A card component for displaying statistics with large gradient numbers.
 * Perfect for showcasing key metrics and achievements.
 */
export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  className = '',
}) => {
  // Combined card className
  const cardClassName = `
    bg-white
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
    hover:border-accent-400
    transition-all
    duration-[400ms]
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={cardClassName}>
      <div className="text-[3.5rem] md:text-[2.5rem] font-black mb-2 bg-gradient-primary bg-clip-text text-transparent leading-tight">
        {value}
      </div>

      <p className="text-[1.05rem] font-semibold text-primary-900">
        {label}
      </p>
    </div>
  );
};
