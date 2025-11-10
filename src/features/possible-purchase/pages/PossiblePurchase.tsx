import React from "react";
import { ShoppingCart, Trash2, DollarSign } from "lucide-react";
import { usePossiblePurchase } from '../hooks/usePossiblePurchase';
import { EmptyState, Badge, Button } from '@/features/shared';

/**
 * PossiblePurchase Page Component
 * Displays all vehicles marked for possible purchase with ability to unmark them
 * Shows total count and value of marked vehicles
 */
export const PossiblePurchase: React.FC = () => {
  const {
    possiblePurchaseVehicles,
    unmarkVehicle,
    getVehicleCount,
    formatPrice,
    getFormattedTotal,
  } = usePossiblePurchase();

  const vehicleCount = getVehicleCount();
  const hasVehicles = vehicleCount > 0;

  return (
    <div className="min-h-screen bg-neutral-50 py-6 px-4 sm:py-8 md:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-10">
        <div className="bg-gradient-primary rounded-3xl p-6 shadow-premium sm:p-8 md:p-10 lg:p-12">
          <div className="flex items-center gap-3 mb-3 sm:gap-4 sm:mb-4">
            <ShoppingCart className="w-8 h-8 text-white sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <h1 className="text-white text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Vehículos para Posible Compra
            </h1>
          </div>
          <div className="flex flex-col gap-3 mt-4 sm:gap-4 sm:mt-6 md:flex-row md:gap-6 lg:gap-8">
            <div className="flex items-center gap-2 text-white">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-base sm:text-lg md:text-xl">
                <strong>{vehicleCount}</strong> vehículo{vehicleCount !== 1 ? 's' : ''} seleccionado{vehicleCount !== 1 ? 's' : ''}
              </span>
            </div>
            {hasVehicles && (
              <div className="flex items-center gap-2 text-white">
                <DollarSign className="w-5 h-5" />
                <span className="text-base sm:text-lg md:text-xl">
                  Total: <strong>{getFormattedTotal()}</strong>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto">
        {!hasVehicles ? (
          // Empty State
          <EmptyState
            icon={<ShoppingCart className="w-16 h-16 sm:w-20 sm:h-20" />}
            title="No hay vehículos marcados"
            description="Explora nuestro catálogo y marca los vehículos que te interesen para compararlos aquí."
            className="bg-white rounded-3xl p-8 shadow-md sm:p-12 md:p-16"
          />
        ) : (
          // Vehicle Grid
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {possiblePurchaseVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-[20px] shadow-md hover:shadow-premium transition-all duration-300 overflow-hidden"
              >
                {/* Vehicle Image */}
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <Badge variant="accent" className="shadow-glow">
                      {vehicle.year}
                    </Badge>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-2 sm:text-2xl">
                    {vehicle.brand} {vehicle.model}
                  </h3>

                  <p className="text-2xl font-bold text-secondary-800 mb-4 sm:text-3xl">
                    {formatPrice(vehicle.price)}
                  </p>

                  <p className="text-neutral-700 text-sm mb-5 line-clamp-3 sm:text-base sm:mb-6">
                    {vehicle.description.length > 100
                      ? `${vehicle.description.substring(0, 100)}...`
                      : vehicle.description}
                  </p>

                  {/* Unmark Button */}
                  <Button
                    variant="danger"
                    fullWidth
                    onClick={() => unmarkVehicle(vehicle.id)}
                    className="flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <Trash2 className="w-5 h-5" />
                    Desmarcar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
