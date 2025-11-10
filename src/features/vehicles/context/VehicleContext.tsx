import { createContext, useContext } from "react";
import type { Vehicle } from "../types/vehicle";

/**
 * Vehicle Context State
 * Represents the state managed by the Vehicle Context
 */
export interface VehicleContextState {
  vehicles: Vehicle[];
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
