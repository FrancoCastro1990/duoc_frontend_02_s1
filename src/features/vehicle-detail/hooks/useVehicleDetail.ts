import { useState } from 'react';
import { type Vehicle } from '@/features/vehicles';

/**
 * Custom hook for managing vehicle detail modal state
 *
 * @returns Object containing modal state and control functions
 */
export const useVehicleDetail = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  /**
   * Opens the detail modal with the specified vehicle
   *
   * @param vehicle - The vehicle to display in the modal
   */
  const openDetail = (vehicle: Vehicle): void => {
    setSelectedVehicle(vehicle);
    setIsOpen(true);
  };

  /**
   * Closes the detail modal and clears the selected vehicle
   */
  const closeDetail = (): void => {
    setIsOpen(false);
    setSelectedVehicle(null);
  };

  return {
    isOpen,
    selectedVehicle,
    openDetail,
    closeDetail,
  };
};
