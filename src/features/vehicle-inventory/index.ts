/**
 * Vehicle Inventory Feature Barrel Export
 * Provides public API for the vehicle inventory feature
 */

// Hook exports
export { useVehicleInventory } from './hooks/useVehicleInventory';
export type { SortField, SortOrder } from './hooks/useVehicleInventory';

// Page exports
export { default as VehicleInventory } from './pages/VehicleInventory';
