/**
 * Possible Purchase Feature
 *
 * This feature manages vehicles marked for possible purchase.
 * It provides a dedicated page to view, compare, and manage vehicles
 * that users are considering buying.
 *
 * Features:
 * - View all marked vehicles in a grid layout
 * - Display total count and value of marked vehicles
 * - Unmark vehicles from the possible purchase list
 * - Empty state when no vehicles are marked
 * - Integration with VehicleContext for state management
 */

// Export page component
export { PossiblePurchase } from './pages/PossiblePurchase';

// Export custom hook
export { usePossiblePurchase } from './hooks/usePossiblePurchase';
