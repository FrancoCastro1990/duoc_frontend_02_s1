import React from 'react';
import { useVehicleInventory } from '../hooks/useVehicleInventory';
import type { SortField } from '../hooks/useVehicleInventory';
import { PageHero, EmptyState, Button } from '@/features/shared';

/**
 * VehicleInventory Page Component
 * Displays all vehicles in a sortable, searchable table format
 * Focuses on presentation - all business logic handled by useVehicleInventory hook
 */
const VehicleInventory: React.FC = () => {
  const {
    vehicles,
    sortField,
    searchTerm,
    vehicleToDelete,
    handleSort,
    handleSearch,
    confirmDelete,
    cancelDelete,
    handleDelete,
    formatPrice,
    getSortIndicator,
  } = useVehicleInventory();

  /**
   * Render column header with sort functionality
   */
  const renderColumnHeader = (field: SortField, label: string) => (
    <th
      className="px-6 py-4 text-left text-sm md:text-base font-bold cursor-pointer hover:bg-secondary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset"
      onClick={() => handleSort(field)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleSort(field);
        }
      }}
    >
      <span>
        {label}
        {sortField === field && (
          <span className="ml-2 text-accent-400">{getSortIndicator(field)}</span>
        )}
      </span>
    </th>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in sm:py-8 md:py-10 lg:py-12">
      {/* Page header */}
      <PageHero
        title="Inventario de Vehículos"
        subtitle="Gestiona y visualiza todos los vehículos del catálogo"
        variant="gradient"
      />

      {/* Search bar */}
      <div className="bg-white rounded-2xl p-4 shadow-md mb-6 flex flex-col gap-3 sm:p-6 sm:flex-row sm:justify-between sm:items-center sm:gap-4">
        <div className="flex-1 max-w-md w-full">
          <input
            type="text"
            className="w-full border-2 border-neutral-300 focus:border-secondary-800 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] rounded-xl px-4 py-3 transition-all placeholder:text-neutral-400 text-base min-h-[44px]"
            placeholder="Buscar por marca o modelo..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            aria-label="Buscar vehículos por marca o modelo"
          />
        </div>
        <span className="text-sm text-neutral-600 font-medium sm:text-base">
          {vehicles.length} vehículo{vehicles.length !== 1 ? 's' : ''} encontrado{vehicles.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Table container */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {vehicles.length === 0 ? (
          // Empty state
          <EmptyState
            title={searchTerm
              ? `No se encontraron vehículos que coincidan con "${searchTerm}"`
              : 'No hay vehículos en el inventario'}
            description=""
          />
        ) : (
          // Data table
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-center text-sm md:text-base font-bold">Imagen</th>
                  {renderColumnHeader('brand', 'Marca')}
                  {renderColumnHeader('model', 'Modelo')}
                  {renderColumnHeader('year', 'Año')}
                  {renderColumnHeader('price', 'Precio')}
                  <th className="px-6 py-4 text-left text-sm md:text-base font-bold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-neutral-200 last:border-b-0 hover:bg-neutral-50 transition-colors">
                    {/* Image thumbnail */}
                    <td className="px-4 py-3 text-center sm:px-6 sm:py-4">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="w-20 h-20 rounded-lg object-cover shadow-sm mx-auto md:w-16 md:h-16"
                      />
                    </td>

                    {/* Brand */}
                    <td className="px-4 py-3 text-sm text-neutral-700 sm:px-6 sm:py-4 md:text-base">{vehicle.brand}</td>

                    {/* Model */}
                    <td className="px-4 py-3 text-sm text-neutral-700 sm:px-6 sm:py-4 md:text-base">{vehicle.model}</td>

                    {/* Year */}
                    <td className="px-4 py-3 text-sm text-neutral-700 sm:px-6 sm:py-4 md:text-base">{vehicle.year}</td>

                    {/* Price */}
                    <td className="px-4 py-3 text-sm font-bold text-secondary-800 sm:px-6 sm:py-4 md:text-base">
                      {formatPrice(vehicle.price)}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3 sm:px-6 sm:py-4">
                      {vehicleToDelete === vehicle.id ? (
                        // Delete confirmation inline
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text-neutral-700 mb-1 sm:text-sm sm:mb-2">¿Eliminar?</span>
                          <div className="flex gap-2 justify-center">
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={handleDelete}
                              aria-label="Confirmar eliminación"
                              className="min-h-[44px] px-4 sm:min-h-0 sm:px-3"
                            >
                              Sí
                            </Button>
                            <Button
                              variant="neutral"
                              size="sm"
                              onClick={cancelDelete}
                              aria-label="Cancelar eliminación"
                              className="min-h-[44px] px-4 sm:min-h-0 sm:px-3"
                            >
                              No
                            </Button>
                          </div>
                        </div>
                      ) : (
                        // Delete button
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => confirmDelete(vehicle.id)}
                          aria-label={`Eliminar ${vehicle.brand} ${vehicle.model}`}
                          className="min-h-[44px] px-4 sm:min-h-0 sm:px-3"
                        >
                          Eliminar
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Table footer with summary */}
      {vehicles.length > 0 && (
        <div className="bg-neutral-50 border-t border-neutral-200 px-6 py-4 rounded-b-2xl">
          <p className="text-sm text-neutral-600 font-medium text-center">
            Mostrando {vehicles.length} de {vehicles.length} vehículos
          </p>
        </div>
      )}
    </div>
  );
};

export default VehicleInventory;
