import React from 'react';
import { Menu, X } from 'lucide-react';
import { useFloatingMenu } from '../hooks/useFloatingMenu';

export interface MenuItem {
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}

export interface FloatingMenuProps {
  items: MenuItem[];
}

/**
 * FloatingMenu Component
 * A circular floating action button that expands into a radial menu on mobile devices
 * Displays menu items in a semi-circular arc above the main button when opened
 */
export const FloatingMenu: React.FC<FloatingMenuProps> = ({ items }) => {
  const { isOpen, toggleMenu, handleItemClick, getItemPosition } = useFloatingMenu();

  return (
    <>
      {/* Backdrop overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-primary-900/40 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Floating menu container - only visible on mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        {/* Menu items - rendered in circular positions */}
        {isOpen &&
          items.map((item, index) => {
            const position = getItemPosition(index, items.length);
            const IconComponent = item.icon;

            return (
              <button
                key={item.path}
                onClick={() => handleItemClick(item.path)}
                className="absolute w-14 h-14 bg-white border-2 border-secondary-800 rounded-full shadow-premium flex items-center justify-center text-secondary-800 hover:bg-gradient-accent hover:text-primary-900 hover:shadow-glow hover:scale-110 transition-all duration-300 animate-scale-in"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  animationDelay: `${index * 50}ms`,
                }}
                aria-label={item.label}
                title={item.label}
              >
                <IconComponent size={24} />
              </button>
            );
          })}

        {/* Main floating action button */}
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(30,64,175,0.4),0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 ${
            isOpen
              ? 'bg-gradient-secondary hover:shadow-glow rotate-45'
              : 'bg-gradient-secondary hover:shadow-[0_12px_40px_rgba(30,64,175,0.5),0_6px_16px_rgba(0,0,0,0.4)]'
          }`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={28} className="text-white transition-transform duration-300" />
          ) : (
            <Menu size={28} className="text-white transition-transform duration-300" />
          )}
        </button>
      </div>
    </>
  );
};
