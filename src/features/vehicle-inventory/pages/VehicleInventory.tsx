import React from 'react';
import { useVehicleInventory } from '../hooks/useVehicleInventory';
import type { SortField } from '../hooks/useVehicleInventory';

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
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 animate-fade-in">
      {/* Page header */}
      <div className="bg-gradient-primary text-white p-8 md:p-12 rounded-3xl mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Vehicle Inventory</h1>
        <p className="text-[0.95rem] md:text-[1.05rem] opacity-90">
          Manage and view all vehicles in the catalog
        </p>
      </div>

      {/* Search bar */}
      <div className="bg-white rounded-2xl p-6 shadow-md mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1 max-w-md w-full">
          <input
            type="text"
            className="w-full border-2 border-neutral-300 focus:border-secondary-800 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] rounded-xl px-4 py-3 transition-all placeholder:text-neutral-400"
            placeholder="Search by brand or model..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            aria-label="Search vehicles by brand or model"
          />
        </div>
        <span className="text-sm md:text-base text-neutral-600 font-medium">
          {vehicles.length} vehicle{vehicles.length !== 1 ? 's' : ''} found
        </span>
      </div>

      {/* Table container */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {vehicles.length === 0 ? (
          // Empty state
          <div className="text-center py-12">
            <p className="text-neutral-500 text-base md:text-lg">
              {searchTerm
                ? `No vehicles found matching "${searchTerm}"`
                : 'No vehicles in inventory'}
            </p>
          </div>
        ) : (
          // Data table
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-center text-sm md:text-base font-bold">Image</th>
                  {renderColumnHeader('brand', 'Brand')}
                  {renderColumnHeader('model', 'Model')}
                  {renderColumnHeader('year', 'Year')}
                  {renderColumnHeader('price', 'Price')}
                  <th className="px-6 py-4 text-left text-sm md:text-base font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-neutral-200 last:border-b-0 hover:bg-neutral-50 transition-colors">
                    {/* Image thumbnail */}
                    <td className="px-6 py-4 text-center">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="w-16 h-16 rounded-lg object-cover shadow-sm mx-auto"
                      />
                    </td>

                    {/* Brand */}
                    <td className="px-6 py-4 text-sm md:text-base text-neutral-700">{vehicle.brand}</td>

                    {/* Model */}
                    <td className="px-6 py-4 text-sm md:text-base text-neutral-700">{vehicle.model}</td>

                    {/* Year */}
                    <td className="px-6 py-4 text-sm md:text-base text-neutral-700">{vehicle.year}</td>

                    {/* Price */}
                    <td className="px-6 py-4 text-sm md:text-base font-bold text-secondary-800">
                      {formatPrice(vehicle.price)}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      {vehicleToDelete === vehicle.id ? (
                        // Delete confirmation inline
                        <div className="flex flex-col gap-2">
                          <span className="text-sm text-neutral-700 mb-2">Delete?</span>
                          <div className="flex gap-2 justify-center">
                            <button
                              className="bg-success-600 hover:bg-success-700 text-white px-3 py-1 rounded text-sm font-medium transition-all"
                              onClick={handleDelete}
                              aria-label="Confirm delete"
                            >
                              Yes
                            </button>
                            <button
                              className="bg-neutral-400 hover:bg-neutral-500 text-white px-3 py-1 rounded text-sm font-medium transition-all"
                              onClick={cancelDelete}
                              aria-label="Cancel delete"
                            >
                              No
                            </button>
                          </div>
                        </div>
                      ) : (
                        // Delete button
                        <button
                          className="bg-error-600 hover:bg-error-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                          onClick={() => confirmDelete(vehicle.id)}
                          aria-label={`Delete ${vehicle.brand} ${vehicle.model}`}
                        >
                          Delete
                        </button>
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
            Showing {vehicles.length} of {vehicles.length} vehicles
          </p>
        </div>
      )}
    </div>
  );
};

export default VehicleInventory;
