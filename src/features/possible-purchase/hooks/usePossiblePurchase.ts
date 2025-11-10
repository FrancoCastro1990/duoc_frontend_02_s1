import { useMemo } from 'react';
import { useVehicles } from '@/features/vehicles';

/**
 * Custom hook for managing possible purchase vehicles
 * Integrates with VehicleContext to get marked vehicles and provides
 * utility functions for the possible purchase page
 */
export const usePossiblePurchase = () => {
  const { getPossiblePurchases, unmarkForPurchase } = useVehicles();

  // Get all vehicles marked for possible purchase
  const possiblePurchaseVehicles = useMemo(() => {
    return getPossiblePurchases();
  }, [getPossiblePurchases]);

  /**
   * Unmark a vehicle from possible purchases
   * @param id Vehicle ID to unmark
   */
  const unmarkVehicle = (id: string): void => {
    unmarkForPurchase(id);
  };

  /**
   * Calculate the total value of all marked vehicles
   * @returns Total price of all vehicles marked for purchase
   */
  const getTotalValue = (): number => {
    return possiblePurchaseVehicles.reduce((total, vehicle) => total + vehicle.price, 0);
  };

  /**
   * Get the count of vehicles marked for purchase
   * @returns Number of marked vehicles
   */
  const getVehicleCount = (): number => {
    return possiblePurchaseVehicles.length;
  };

  /**
   * Format a price to Chilean peso format
   * @param price Price to format
   * @returns Formatted price string (e.g., "$28.990.000")
   */
  const formatPrice = (price: number): string => {
    return `$${price.toLocaleString('es-CL')}`;
  };

  /**
   * Get formatted total value
   * @returns Formatted total value string
   */
  const getFormattedTotal = (): string => {
    return formatPrice(getTotalValue());
  };

  return {
    possiblePurchaseVehicles,
    unmarkVehicle,
    getTotalValue,
    getVehicleCount,
    formatPrice,
    getFormattedTotal,
  };
};
