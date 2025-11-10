import { createContext, useContext } from "react";
import type { Vehicle } from "../types/vehicle";

/**
 * Vehicle Context State
 * Represents the state managed by the Vehicle Context
 */
export interface VehicleContextState {
  vehicles: Vehicle[];
  possiblePurchaseIds: Set<string>;
}

/**
 * Vehicle Context Actions
 * Defines all methods available for managing vehicles
 */
export interface VehicleContextActions {
  /**
   * Get all vehicles
   * @returns Array of all vehicles
   */
  getVehicles: () => Vehicle[];

  /**
   * Add a new vehicle to the catalog
   * @param vehicle Vehicle data without ID (ID will be auto-generated)
   * @returns The newly created vehicle with generated ID
   */
  addVehicle: (vehicle: Omit<Vehicle, 'id'>) => Vehicle;

  /**
   * Update an existing vehicle
   * @param id Vehicle ID to update
   * @param updates Partial vehicle data to update
   * @returns The updated vehicle or undefined if not found
   */
  updateVehicle: (id: string, updates: Partial<Omit<Vehicle, 'id'>>) => Vehicle | undefined;

  /**
   * Delete a vehicle from the catalog
   * @param id Vehicle ID to delete
   * @returns true if deleted, false if not found
   */
  deleteVehicle: (id: string) => boolean;

  /**
   * Mark a vehicle as a possible purchase
   * @param vehicleId Vehicle ID to mark
   */
  markForPurchase: (vehicleId: string) => void;

  /**
   * Unmark a vehicle from possible purchases
   * @param vehicleId Vehicle ID to unmark
   */
  unmarkForPurchase: (vehicleId: string) => void;

  /**
   * Check if a vehicle is marked for possible purchase
   * @param vehicleId Vehicle ID to check
   * @returns true if marked, false otherwise
   */
  isMarkedForPurchase: (vehicleId: string) => boolean;

  /**
   * Get all vehicles marked for possible purchase
   * @returns Array of vehicles marked for possible purchase
   */
  getPossiblePurchases: () => Vehicle[];
}

/**
 * Complete Vehicle Context Value
 * Combines state and actions
 */
export interface VehicleContextValue extends VehicleContextState, VehicleContextActions {}

/**
 * Default context value that throws helpful errors
 */
const defaultContextValue: VehicleContextValue = {
  vehicles: [],
  possiblePurchaseIds: new Set(),
  getVehicles: () => {
    throw new Error('getVehicles must be used within a VehicleProvider');
  },
  addVehicle: () => {
    throw new Error('addVehicle must be used within a VehicleProvider');
  },
  updateVehicle: () => {
    throw new Error('updateVehicle must be used within a VehicleProvider');
  },
  deleteVehicle: () => {
    throw new Error('deleteVehicle must be used within a VehicleProvider');
  },
  markForPurchase: () => {
    throw new Error('markForPurchase must be used within a VehicleProvider');
  },
  unmarkForPurchase: () => {
    throw new Error('unmarkForPurchase must be used within a VehicleProvider');
  },
  isMarkedForPurchase: () => {
    throw new Error('isMarkedForPurchase must be used within a VehicleProvider');
  },
  getPossiblePurchases: () => {
    throw new Error('getPossiblePurchases must be used within a VehicleProvider');
  },
};

/**
 * Vehicle Context
 * Provides global state management for vehicles
 */
export const VehicleContext = createContext<VehicleContextValue>(defaultContextValue);

/**
 * Custom hook to access Vehicle Context
 * @throws Error if used outside VehicleProvider
 * @returns VehicleContextValue with state and actions
 */
export const useVehicles = (): VehicleContextValue => {
  const context = useContext(VehicleContext);

  if (!context) {
    throw new Error('useVehicles must be used within a VehicleProvider');
  }

  return context;
};
