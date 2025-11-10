import { useMemo } from 'react';
import { useVehicles } from '../context/VehicleContext';
import type { Vehicle } from '../types/vehicle';

/**
 * Vehicle Catalog Item Interface
 * Represents a vehicle in the catalog display with additional display fields
 */
export interface CatalogVehicle {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: string;
  image: string;
  type: string;
  features: string[];
  description: string;
}

/**
 * Featured Vehicle Interface
 * Represents the highlighted vehicle of the month
 */
export interface FeaturedVehicle {
  name: string;
  price: string;
  image: string;
  description: string;
}

/**
 * Format price to Chilean peso format
 * Converts number to formatted string with thousand separators
 */
const formatPrice = (price: number): string => {
  return `$${price.toLocaleString('es-CL')}`;
};

/**
 * Determine vehicle type based on model name
 * This is a simple heuristic - in a real app this would be a separate field
 */
const determineVehicleType = (model: string, brand: string): string => {
  const modelLower = model.toLowerCase();
  const brandLower = brand.toLowerCase();

  // Electric vehicles
  if (modelLower.includes('e-power') || modelLower.includes('electric') || brandLower === 'tesla') {
    return 'Eléctrico';
  }

  // Hybrid vehicles
  if (modelLower.includes('hybrid') || modelLower.includes('híbrido')) {
    return 'Híbrido';
  }

  // SUVs and Crossovers
  if (modelLower.includes('suv') || modelLower.includes('cx') ||
      modelLower.includes('cr-v') || modelLower.includes('tucson') ||
      modelLower.includes('qashqai')) {
    return 'SUV';
  }

  // Sports cars
  if (modelLower.includes('sport') || modelLower.includes('gt') ||
      modelLower.includes('type r')) {
    return 'Deportivo';
  }

  // Default to Sedan
  return 'Sedán';
};

/**
 * Extract features from vehicle description and type
 * This is a simple heuristic - in a real app features would be separate fields
 */
const extractFeatures = (vehicle: Vehicle, type: string): string[] => {
  const features: string[] = [];
  const descLower = vehicle.description.toLowerCase();
  const modelLower = vehicle.model.toLowerCase();

  // Technology features
  if (descLower.includes('híbrido') || modelLower.includes('hybrid')) {
    features.push('Híbrido');
  }
  if (descLower.includes('eléctric') || modelLower.includes('e-power')) {
    features.push('100% Eléctrico');
  }
  if (descLower.includes('turbo')) {
    features.push('Turbo');
  }

  // Transmission
  if (descLower.includes('automático') || type === 'SUV' || type === 'Sedán') {
    features.push('Automático');
  }

  // Comfort features
  if (descLower.includes('confort') || descLower.includes('lujo') || descLower.includes('premium')) {
    features.push('Full Equipo');
  }
  if (descLower.includes('cuero') || descLower.includes('leather')) {
    features.push('Cuero');
  }
  if (descLower.includes('panorámico') || descLower.includes('sunroof')) {
    features.push('Panorámico');
  }

  // Technology
  if (descLower.includes('sensing') || descLower.includes('seguridad')) {
    features.push('Sistema de Seguridad');
  }
  if (descLower.includes('tracción') || descLower.includes('awd')) {
    features.push('AWD');
  }

  // If no features found, add some defaults based on type
  if (features.length === 0) {
    if (type === 'SUV') {
      features.push('Automático', 'Full Equipo');
    } else if (type === 'Sedán') {
      features.push('Automático', 'Confort');
    } else if (type === 'Eléctrico') {
      features.push('100% Eléctrico', 'Tecnología');
    }
  }

  // Limit to 3 features for clean display
  return features.slice(0, 3);
};

/**
 * Transform Vehicle from context to CatalogVehicle for display
 */
const transformToCatalogVehicle = (vehicle: Vehicle): CatalogVehicle => {
  const type = determineVehicleType(vehicle.model, vehicle.brand);
  const features = extractFeatures(vehicle, type);

  return {
    id: vehicle.id,
    name: vehicle.model,
    brand: vehicle.brand,
    year: vehicle.year,
    price: formatPrice(vehicle.price),
    image: vehicle.image,
    type,
    features,
    description: vehicle.description,
  };
};

/**
 * useVehicleCatalog Hook
 * Manages vehicle catalog data and related business logic
 *
 * This hook integrates with VehicleContext to provide catalog-specific
 * data transformations and utility functions.
 *
 * @returns Object containing catalog vehicles, featured vehicle, and utility functions
 */
export const useVehicleCatalog = () => {
  const { vehicles, addVehicle, updateVehicle, deleteVehicle } = useVehicles();

  /**
   * Catalog vehicles data
   * Transforms context vehicles to catalog display format
   * Memoized to prevent unnecessary recalculations
   */
  const catalogVehicles = useMemo<CatalogVehicle[]>(() => {
    return vehicles.map(transformToCatalogVehicle);
  }, [vehicles]);

  /**
   * Featured vehicle of the month
   * Selects the most expensive vehicle as featured
   * Memoized to prevent unnecessary recalculations
   */
  const featuredVehicle = useMemo<FeaturedVehicle>(() => {
    if (vehicles.length === 0) {
      return {
        name: 'No hay vehículos disponibles',
        price: '$0',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop',
        description: 'Pronto tendremos vehículos disponibles para ti.',
      };
    }

    // Find the most expensive vehicle
    const mostExpensive = vehicles.reduce((prev, current) =>
      (current.price > prev.price) ? current : prev
    );

    return {
      name: `${mostExpensive.brand} ${mostExpensive.model}`,
      price: formatPrice(mostExpensive.price),
      image: mostExpensive.image,
      description: mostExpensive.description,
    };
  }, [vehicles]);

  /**
   * Get vehicle count
   * Returns the total number of vehicles in the catalog
   */
  const getVehicleCount = (): number => catalogVehicles.length;

  /**
   * Get vehicles by type
   * Filters vehicles by their type (Sedán, SUV, Deportivo, etc.)
   */
  const getVehiclesByType = (type: string): CatalogVehicle[] => {
    return catalogVehicles.filter(vehicle => vehicle.type === type);
  };

  /**
   * Get vehicles by brand
   * Filters vehicles by their brand
   */
  const getVehiclesByBrand = (brand: string): CatalogVehicle[] => {
    return catalogVehicles.filter(vehicle => vehicle.brand === brand);
  };

  /**
   * Get vehicles by year
   * Filters vehicles by their year
   */
  const getVehiclesByYear = (year: number): CatalogVehicle[] => {
    return catalogVehicles.filter(vehicle => vehicle.year === year);
  };

  /**
   * Get available vehicle types
   * Returns unique list of all vehicle types in catalog
   */
  const getAvailableTypes = (): string[] => {
    const types = catalogVehicles.map(v => v.type);
    return Array.from(new Set(types));
  };

  /**
   * Get available brands
   * Returns unique list of all brands in catalog
   */
  const getAvailableBrands = (): string[] => {
    const brands = catalogVehicles.map(v => v.brand);
    return Array.from(new Set(brands));
  };

  return {
    // Data
    catalogVehicles,
    featuredVehicle,

    // Context methods (passed through for potential use)
    addVehicle,
    updateVehicle,
    deleteVehicle,

    // Utility functions
    getVehicleCount,
    getVehiclesByType,
    getVehiclesByBrand,
    getVehiclesByYear,
    getAvailableTypes,
    getAvailableBrands,
  };
};
