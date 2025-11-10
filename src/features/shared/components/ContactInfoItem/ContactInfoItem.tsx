import React from "react";

export interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  showBorder?: boolean;
  className?: string;
}

/**
 * ContactInfoItem Component
 * A component for displaying contact information with icon, title, and details.
 * Used in contact pages to show address, phone, email, etc.
 */
export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  details,
  showBorder = false,
  className = '',
}) => {
  // Border styles
  const borderStyles = showBorder ? 'border-b-2 border-primary-100 pb-8' : '';

  // Combined container className
  const containerClassName = `
    flex
    gap-4
    ${borderStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={containerClassName}>
      <div className="flex-shrink-0 text-secondary-800">
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="text-[1.15rem] font-bold text-primary-900 mb-2">
          {title}
        </h3>

        <div className="space-y-1">
          {details.map((detail, index) => (
            <p key={index} className="text-[0.95rem] text-primary-500">
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
