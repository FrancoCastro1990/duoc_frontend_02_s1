/**
 * Vehicles Feature Barrel Export
 * Provides public API for the vehicles feature
 */

// Context exports
export { VehicleContext, useVehicles } from './context/VehicleContext';
export { VehicleProvider } from './context/VehicleProvider';
export type {
  VehicleContextState,
  VehicleContextActions,
  VehicleContextValue,
} from './context/VehicleContext';
export type { VehicleProviderProps } from './context/VehicleProvider';

// Type exports
export type { Vehicle, CreateVehicleInput, UpdateVehicleInput } from './types/vehicle';

// Hook exports
export { useVehicleCatalog } from './hooks/useVehicleCatalog';
export type { CatalogVehicle, FeaturedVehicle } from './hooks/useVehicleCatalog';

// Component exports
export { VehicleExample } from './components/VehicleExample';

// Page exports
export { default as VehicleCatalog } from './pages/VehicleCatalog';
