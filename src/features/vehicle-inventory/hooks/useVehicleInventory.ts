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
 * useVehicleInventory Hook
 * Manages vehicle inventory logic including sorting, filtering, and delete confirmation
 * Separates business logic from UI presentation
 */
export const useVehicleInventory = () => {
  const { vehicles: allVehicles, deleteVehicle, isMarkedForPurchase } = useVehicles();

  // Sorting state
  const [sortField, setSortField] = useState<SortField>('brand');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Search/filter state
  const [searchTerm, setSearchTerm] = useState('');

  // Delete confirmation state
  const [vehicleToDelete, setVehicleToDelete] = useState<string | null>(null);

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
   * Initiate delete confirmation
   */
  const confirmDelete = (vehicleId: string) => {
    setVehicleToDelete(vehicleId);
  };

  /**
   * Cancel delete operation
   */
  const cancelDelete = () => {
    setVehicleToDelete(null);
  };

  /**
   * Execute delete operation
   */
  const handleDelete = () => {
    if (vehicleToDelete) {
      deleteVehicle(vehicleToDelete);
      setVehicleToDelete(null);
    }
  };

  /**
   * Filtered and sorted vehicles
   * Memoized for performance
   */
  const vehicles = useMemo(() => {
    // First, filter out vehicles marked for possible purchase
    let filtered = allVehicles.filter((vehicle) => !isMarkedForPurchase(vehicle.id));

    // Then filter by search term (brand or model)
    if (searchTerm.trim()) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.brand.toLowerCase().includes(lowerSearchTerm) ||
          vehicle.model.toLowerCase().includes(lowerSearchTerm)
      );
    }

    // Sort filtered vehicles
    const sorted = [...filtered].sort((a, b) => {
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
  }, [allVehicles, searchTerm, sortField, sortOrder, isMarkedForPurchase]);

  /**
   * Format price to Chilean peso format
   */
  const formatPrice = (price: number): string => {
    return `$${price.toLocaleString('es-CL')}`;
  };

  /**
   * Get sort indicator for column header
   */
  const getSortIndicator = (field: SortField): string => {
    if (sortField !== field) return '';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return {
    vehicles,
    sortField,
    sortOrder,
    searchTerm,
    vehicleToDelete,
    handleSort,
    handleSearch,
    confirmDelete,
    cancelDelete,
    handleDelete,
    formatPrice,
    getSortIndicator,
  };
};
