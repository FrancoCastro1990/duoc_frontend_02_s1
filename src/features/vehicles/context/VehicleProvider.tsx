import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { VehicleContext } from "./VehicleContext";
import type { VehicleContextValue } from "./VehicleContext";
import type { Vehicle } from "../types/vehicle";

/**
 * LocalStorage key for persisting possible purchases
 */
const POSSIBLE_PURCHASES_STORAGE_KEY = 'possiblePurchases';

/**
 * Initial sample vehicles for testing
 * These will be loaded when the app starts
 */
const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla Hybrid",
    price: 28990000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&auto=format&fit=crop",
    description: "Sedan híbrido con tecnología de última generación, bajo consumo y máximo confort. Ideal para la ciudad y carretera."
  },
  {
    id: "2",
    brand: "Honda",
    model: "CR-V",
    price: 35990000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format&fit=crop",
    description: "SUV espacioso con sistema de seguridad Honda Sensing y tracción inteligente. Perfecto para familias aventureras."
  },
  {
    id: "3",
    brand: "Mazda",
    model: "CX-5 Signature",
    price: 38500000,
    year: 2023,
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format&fit=crop",
    description: "SUV premium con diseño KODO y tecnología Skyactiv. Elegancia japonesa en cada detalle."
  },
  {
    id: "4",
    brand: "Hyundai",
    model: "Tucson N Line",
    price: 34200000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&auto=format&fit=crop",
    description: "SUV deportivo con acabados exclusivos y motor turbo. Potencia y estilo en perfecta armonía."
  },
  {
    id: "5",
    brand: "Nissan",
    model: "Qashqai e-Power",
    price: 32800000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop",
    description: "Crossover con innovadora tecnología e-Power 100% eléctrica. Eficiencia sin compromisos."
  }
];

/**
 * VehicleProvider Props
 */
export interface VehicleProviderProps {
  children: ReactNode;
}

/**
 * Load possible purchases from localStorage
 */
const loadPossiblePurchases = (): Set<string> => {
  try {
    const stored = localStorage.getItem(POSSIBLE_PURCHASES_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return new Set(Array.isArray(parsed) ? parsed : []);
    }
  } catch (error) {
    console.error('Error loading possible purchases from localStorage:', error);
  }
  return new Set();
};

/**
 * Save possible purchases to localStorage
 */
const savePossiblePurchases = (purchaseIds: Set<string>): void => {
  try {
    localStorage.setItem(
      POSSIBLE_PURCHASES_STORAGE_KEY,
      JSON.stringify(Array.from(purchaseIds))
    );
  } catch (error) {
    console.error('Error saving possible purchases to localStorage:', error);
  }
};

/**
 * VehicleProvider Component
 * Manages global vehicle state and provides CRUD operations
 */
export const VehicleProvider: React.FC<VehicleProviderProps> = ({ children }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [possiblePurchaseIds, setPossiblePurchaseIds] = useState<Set<string>>(loadPossiblePurchases);

  /**
   * Persist possible purchases to localStorage whenever they change
   */
  useEffect(() => {
    savePossiblePurchases(possiblePurchaseIds);
  }, [possiblePurchaseIds]);

  /**
   * Get all vehicles
   */
  const getVehicles = (): Vehicle[] => {
    return vehicles;
  };

  /**
   * Add a new vehicle
   * Auto-generates a unique ID using timestamp
   */
  const addVehicle = (vehicle: Omit<Vehicle, 'id'>): Vehicle => {
    const newVehicle: Vehicle = {
      ...vehicle,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };

    setVehicles((prev) => [...prev, newVehicle]);
    return newVehicle;
  };

  /**
   * Update an existing vehicle
   * Returns the updated vehicle or undefined if not found
   */
  const updateVehicle = (
    id: string,
    updates: Partial<Omit<Vehicle, 'id'>>
  ): Vehicle | undefined => {
    let updatedVehicle: Vehicle | undefined;

    setVehicles((prev) =>
      prev.map((vehicle) => {
        if (vehicle.id === id) {
          updatedVehicle = { ...vehicle, ...updates };
          return updatedVehicle;
        }
        return vehicle;
      })
    );

    return updatedVehicle;
  };

  /**
   * Delete a vehicle
   * Returns true if deleted, false if not found
   */
  const deleteVehicle = (id: string): boolean => {
    let wasDeleted = false;

    setVehicles((prev) => {
      const filtered = prev.filter((vehicle) => vehicle.id !== id);
      wasDeleted = filtered.length !== prev.length;
      return filtered;
    });

    // Also remove from possible purchases if it was marked
    if (wasDeleted && possiblePurchaseIds.has(id)) {
      setPossiblePurchaseIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }

    return wasDeleted;
  };

  /**
   * Mark a vehicle as a possible purchase
   */
  const markForPurchase = (vehicleId: string): void => {
    setPossiblePurchaseIds((prev) => {
      const newSet = new Set(prev);
      newSet.add(vehicleId);
      return newSet;
    });
  };

  /**
   * Unmark a vehicle from possible purchases
   */
  const unmarkForPurchase = (vehicleId: string): void => {
    setPossiblePurchaseIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(vehicleId);
      return newSet;
    });
  };

  /**
   * Check if a vehicle is marked for possible purchase
   */
  const isMarkedForPurchase = (vehicleId: string): boolean => {
    return possiblePurchaseIds.has(vehicleId);
  };

  /**
   * Get all vehicles marked for possible purchase
   */
  const getPossiblePurchases = (): Vehicle[] => {
    return vehicles.filter((vehicle) => possiblePurchaseIds.has(vehicle.id));
  };

  const contextValue: VehicleContextValue = {
    vehicles,
    possiblePurchaseIds,
    getVehicles,
    addVehicle,
    updateVehicle,
    deleteVehicle,
    markForPurchase,
    unmarkForPurchase,
    isMarkedForPurchase,
    getPossiblePurchases,
  };

  return (
    <VehicleContext.Provider value={contextValue}>
      {children}
    </VehicleContext.Provider>
  );
};
