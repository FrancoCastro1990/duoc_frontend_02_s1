import React from "react";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

/**
 * EmptyState Component
 * A component for displaying empty states with optional icon and action button.
 * Used when no data is available or no items match a filter.
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className = '',
}) => {
  // Combined container className
  const containerClassName = `
    flex
    flex-col
    items-center
    justify-center
    text-center
    p-12
    md:p-16
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={containerClassName}>
      {icon && (
        <div className="mb-6 animate-fade-in">
          {icon}
        </div>
      )}

      <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3 animate-fade-in-down">
        {title}
      </h3>

      <p className="text-neutral-600 text-lg mb-8 max-w-md animate-fade-in">
        {description}
      </p>

      {action && (
        <button
          onClick={action.onClick}
          className="bg-secondary-800 hover:bg-secondary-900 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 animate-scale-in"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};
