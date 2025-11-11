import React from "react";
import { ShoppingCart, Trash2, DollarSign, Search } from "lucide-react";
import { usePossiblePurchase } from '../hooks/usePossiblePurchase';
import type { SortField } from '../hooks/usePossiblePurchase';
import { EmptyState, Badge, Button } from '@/features/shared';

/**
 * PossiblePurchase Page Component
 * Displays all vehicles marked for possible purchase with ability to unmark them
 * Shows total count and value of marked vehicles
 */
export const PossiblePurchase: React.FC = () => {
  const {
    possiblePurchaseVehicles,
    sortField,
    searchTerm,
    unmarkVehicle,
    getVehicleCount,
    formatPrice,
    getFormattedTotal,
    handleSort,
    handleSearch,
    getSortIndicator,
  } = usePossiblePurchase();

  const vehicleCount = getVehicleCount();
  const hasVehicles = vehicleCount > 0;

  /**
   * Sort button configuration for each field
   */
  const sortButtons: Array<{ field: SortField; label: string }> = [
    { field: 'brand', label: 'Marca' },
    { field: 'model', label: 'Modelo' },
    { field: 'year', label: 'Año' },
    { field: 'price', label: 'Precio' },
  ];

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

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-md sm:p-6">
          {/* Search Bar */}
          <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:justify-between sm:items-center sm:gap-4 sm:mb-6">
            <div className="flex-1 max-w-md w-full relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                className="w-full border-2 border-neutral-300 focus:border-secondary-800 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] rounded-xl pl-12 pr-4 py-3 transition-all placeholder:text-neutral-400 text-base min-h-[44px]"
                placeholder="Buscar por marca o modelo..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                aria-label="Buscar vehículos por marca o modelo"
              />
            </div>
            <span className="text-sm text-neutral-600 font-medium sm:text-base">
              {possiblePurchaseVehicles.length} vehículo{possiblePurchaseVehicles.length !== 1 ? 's' : ''} encontrado{possiblePurchaseVehicles.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Sort Controls */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="text-sm font-medium text-neutral-700 sm:text-base">
              Ordenar por:
            </span>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 sm:pb-0 sm:mx-0 sm:px-0">
              {sortButtons.map(({ field, label }) => {
                const isActive = sortField === field;
                return (
                  <button
                    key={field}
                    onClick={() => handleSort(field)}
                    className={`
                      flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all min-h-[44px] sm:min-h-[36px]
                      ${
                        isActive
                          ? 'bg-secondary-800 text-white shadow-md hover:bg-secondary-900'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }
                    `}
                    aria-label={`Ordenar por ${label}`}
                    aria-pressed={isActive}
                  >
                    {label}
                    {isActive && (
                      <span className="text-accent-400 font-bold ml-1">
                        {getSortIndicator(field)}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto">
        {possiblePurchaseVehicles.length === 0 ? (
          // Empty State
          <EmptyState
            icon={<ShoppingCart className="w-16 h-16 sm:w-20 sm:h-20" />}
            title={searchTerm
              ? `No se encontraron vehículos que coincidan con "${searchTerm}"`
              : 'No hay vehículos marcados'}
            description={searchTerm
              ? 'Intenta con otro término de búsqueda.'
              : 'Explora nuestro catálogo y marca los vehículos que te interesen para compararlos aquí.'}
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
