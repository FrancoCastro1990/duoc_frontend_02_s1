import React from "react";
import { useVehicles } from "../contexts";

/**
 * VehicleExample Component
 * Demonstrates how to use the Vehicle Context in any component
 *
 * This is an example component showing all available operations:
 * - Reading vehicles
 * - Adding a vehicle
 * - Updating a vehicle
 * - Deleting a vehicle
 */
export const VehicleExample: React.FC = () => {
  const { vehicles, addVehicle, updateVehicle, deleteVehicle } = useVehicles();

  const handleAddVehicle = () => {
    const newVehicle = addVehicle({
      brand: "Ford",
      model: "Mustang Mach-E",
      price: 45000000,
      year: 2024,
      image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800",
      description: "SUV eléctrico con alma deportiva"
    });
    console.log("Vehicle added:", newVehicle);
  };

  const handleUpdateVehicle = (id: string) => {
    const updated = updateVehicle(id, {
      price: 30000000,
      description: "Precio actualizado con descuento especial"
    });
    console.log("Vehicle updated:", updated);
  };

  const handleDeleteVehicle = (id: string) => {
    const deleted = deleteVehicle(id);
    console.log("Vehicle deleted:", deleted);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Vehicle Context Example</h2>

      <button
        onClick={handleAddVehicle}
        className="bg-secondary-800 text-white px-4 py-2 rounded-lg mb-4"
      >
        Add Sample Vehicle
      </button>

      <div className="grid gap-4">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white rounded-lg p-4 shadow-md flex items-center justify-between"
          >
            <div>
              <h3 className="font-bold">
                {vehicle.brand} {vehicle.model}
              </h3>
              <p className="text-sm text-neutral-600">
                ${vehicle.price.toLocaleString('es-CL')} - {vehicle.year}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdateVehicle(vehicle.id)}
                className="bg-secondary-800 text-white px-3 py-1 rounded text-sm"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteVehicle(vehicle.id)}
                className="bg-error-600 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
