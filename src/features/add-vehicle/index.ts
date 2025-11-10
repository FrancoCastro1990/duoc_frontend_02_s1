/**
 * Add Vehicle Feature
 * Barrel export for the add-vehicle feature module
 *
 * This feature provides functionality for adding new vehicles to the catalog.
 * It follows the Screaming Architecture pattern with separation of concerns:
 * - Business logic in custom hooks
 * - UI presentation in components
 * - Integration with VehicleContext for state management
 */

// Export custom hooks
export { useAddVehicleForm } from './hooks/useAddVehicleForm';
export type { AddVehicleFormData, FormErrors } from './hooks/useAddVehicleForm';

// Export page components
export { AddVehicle } from './pages/AddVehicle';
