import { useState, useMemo } from 'react';
import { useVehicles } from '@/features/vehicles';

/**
 * Sort field type union
 * Defines which fields can be used for sorting
 */
export type SortField = 'brand' | 'model' | 'price' | 'year';

/**
 * Sort order type union
 * Defines ascending or descending order
 */
export type SortOrder = 'asc' | 'desc';

/**
 * Custom hook for managing possible purchase vehicles
 * Integrates with VehicleContext to get marked vehicles and provides
 * utility functions for the possible purchase page
 * Includes sorting and filtering functionality
 */
export const usePossiblePurchase = () => {
  const { getPossiblePurchases, unmarkForPurchase } = useVehicles();

  // Sorting state
  const [sortField, setSortField] = useState<SortField>('brand');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Search/filter state
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Handle sort by field
   * Toggles sort order if same field clicked, otherwise sets new field with ascending order
   */
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle order if clicking same field
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, default to ascending
      setSortField(field);
      setSortOrder('asc');
    }
  };

  /**
   * Handle search input change
   */
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  /**
   * Get sort indicator for active sort field
   */
  const getSortIndicator = (field: SortField): string => {
    if (sortField !== field) return '';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  // Get all vehicles marked for possible purchase, filtered and sorted
  const possiblePurchaseVehicles = useMemo(() => {
    // Get all marked vehicles
    let vehicles = getPossiblePurchases();

    // Filter by search term (brand or model)
    if (searchTerm.trim()) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      vehicles = vehicles.filter(
        (vehicle) =>
          vehicle.brand.toLowerCase().includes(lowerSearchTerm) ||
          vehicle.model.toLowerCase().includes(lowerSearchTerm)
      );
    }

    // Sort vehicles
    const sorted = [...vehicles].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortField) {
        case 'brand':
          aValue = a.brand.toLowerCase();
          bValue = b.brand.toLowerCase();
          break;
        case 'model':
          aValue = a.model.toLowerCase();
          bValue = b.model.toLowerCase();
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'year':
          aValue = a.year;
          bValue = b.year;
          break;
        default:
          aValue = a.brand.toLowerCase();
          bValue = b.brand.toLowerCase();
      }

      // Compare values
      if (aValue < bValue) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [getPossiblePurchases, searchTerm, sortField, sortOrder]);

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
    sortField,
    sortOrder,
    searchTerm,
    unmarkVehicle,
    getTotalValue,
    getVehicleCount,
    formatPrice,
    getFormattedTotal,
    handleSort,
    handleSearch,
    getSortIndicator,
  };
};
