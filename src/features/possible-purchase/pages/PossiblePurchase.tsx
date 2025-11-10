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
    <div className="min-h-screen bg-neutral-50 py-8 px-4 md:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-primary text-white rounded-3xl p-8 md:p-12 shadow-premium">
          <div className="flex items-center gap-4 mb-4">
            <ShoppingCart className="w-10 h-10 md:w-12 md:h-12" />
            <h1 className="text-3xl md:text-5xl font-bold">
              Vehículos para Posible Compra
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-lg md:text-xl">
                <strong>{vehicleCount}</strong> vehículo{vehicleCount !== 1 ? 's' : ''} seleccionado{vehicleCount !== 1 ? 's' : ''}
              </span>
            </div>
            {hasVehicles && (
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-lg md:text-xl">
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
            icon={<ShoppingCart className="w-20 h-20" />}
            title="No hay vehículos marcados"
            description="Explora nuestro catálogo y marca los vehículos que te interesen para compararlos aquí."
            className="bg-white rounded-3xl p-12 md:p-16 shadow-md"
          />
        ) : (
          // Vehicle Grid
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {possiblePurchaseVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-[20px] shadow-md hover:shadow-premium transition-all duration-300 overflow-hidden"
              >
                {/* Vehicle Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="accent" className="shadow-glow">
                      {vehicle.year}
                    </Badge>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-2">
                    {vehicle.brand} {vehicle.model}
                  </h3>

                  <p className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">
                    {formatPrice(vehicle.price)}
                  </p>

                  <p className="text-neutral-700 text-sm md:text-base mb-6 line-clamp-3">
                    {vehicle.description.length > 100
                      ? `${vehicle.description.substring(0, 100)}...`
                      : vehicle.description}
                  </p>

                  {/* Unmark Button */}
                  <Button
                    variant="danger"
                    fullWidth
                    onClick={() => unmarkVehicle(vehicle.id)}
                    className="flex items-center justify-center gap-2"
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
