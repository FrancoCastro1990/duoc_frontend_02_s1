import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export interface Position {
  x: number;
  y: number;
}

export interface UseFloatingMenuReturn {
  isOpen: boolean;
  toggleMenu: () => void;
  handleItemClick: (path: string) => void;
  getItemPosition: (index: number, totalItems: number) => Position;
}

/**
 * Custom hook for managing floating menu state and behavior
 * Handles menu open/close state, navigation, and radial positioning calculations
 */
export const useFloatingMenu = (): UseFloatingMenuReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  /**
   * Toggle menu open/closed state
   */
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  /**
   * Handle menu item click - navigates to path and closes menu
   */
  const handleItemClick = useCallback(
    (path: string) => {
      navigate(path);
      setIsOpen(false);
    },
    [navigate]
  );

  /**
   * Calculate radial position for menu items in a circular arc
   * Items are positioned in a semi-circle above the main button
   *
   * @param index - The index of the menu item (0-based)
   * @param totalItems - Total number of menu items
   * @returns Position object with x and y coordinates in pixels
   */
  const getItemPosition = useCallback((index: number, totalItems: number): Position => {
    // Radius of the circle (distance from center button)
    const radius = 130; // Increased from 80 to 130 for more spacing

    // Calculate angle for each item in a semi-circle (180 degrees = π radians)
    // Distribute items evenly across the arc, starting from 0 to π
    const angleStep = Math.PI / (totalItems + 1);
    const angle = angleStep * (index + 1);

    // Convert polar coordinates to cartesian
    // Use negative sin to position items ABOVE the button (Y negative goes up in CSS)
    const x = Math.cos(angle) * radius;
    const y = -Math.sin(angle) * radius; // Negative to go upward

    return { x, y };
  }, []);

  return {
    isOpen,
    toggleMenu,
    handleItemClick,
    getItemPosition,
  };
};
