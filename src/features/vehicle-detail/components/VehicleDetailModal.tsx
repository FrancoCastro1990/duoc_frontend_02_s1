import React from 'react';
import { X, Heart } from 'lucide-react';
import { type Vehicle, useVehicles } from '@/features/vehicles';

export interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * VehicleDetailModal Component
 *
 * Displays detailed information about a vehicle in a modal overlay.
 * Shows vehicle image, brand, model, year, price, and description.
 * Can be closed by clicking the backdrop, close button, or X icon.
 */
export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  isOpen,
  onClose,
}) => {
  const { markForPurchase, unmarkForPurchase, isMarkedForPurchase } = useVehicles();

  // Don't render if modal is closed or no vehicle is selected
  if (!isOpen || !vehicle) {
    return null;
  }

  /**
   * Handles clicks on the backdrop (outside the modal content)
   */
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  /**
   * Formats price to Chilean peso format
   */
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl bg-white rounded-[20px] shadow-premium overflow-hidden animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gradient-accent rounded-full shadow-glow hover:shadow-xl transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-primary-900" />
        </button>

        {/* Modal content */}
        <div className="flex flex-col md:flex-row gap-0">
          {/* Vehicle image */}
          <div className="w-full md:w-1/2 bg-neutral-100">
            <img
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          {/* Vehicle details */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
                {vehicle.brand} {vehicle.model}
              </h2>
              <span className="inline-block bg-gradient-accent text-primary-900 px-4 py-2 rounded-lg font-bold shadow-glow text-sm">
                Año {vehicle.year}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                Precio
              </p>
              <p className="text-3xl md:text-4xl font-bold text-secondary-800">
                {formatPrice(vehicle.price)}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-primary-900 mb-3 uppercase tracking-wide">
                Descripción
              </p>
              <p className="text-[0.95rem] md:text-[1.05rem] text-neutral-700 leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-neutral-200">
              <button
                onClick={() => {
                  if (isMarkedForPurchase(vehicle.id)) {
                    unmarkForPurchase(vehicle.id);
                  } else {
                    markForPurchase(vehicle.id);
                  }
                }}
                className={`w-full flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-xl transition-all duration-300 mb-3 border-2 ${
                  isMarkedForPurchase(vehicle.id)
                    ? 'bg-secondary-800 border-secondary-800 text-white hover:bg-secondary-900 hover:border-secondary-900 hover:shadow-premium'
                    : 'bg-transparent border-secondary-800 text-secondary-800 hover:bg-secondary-800 hover:text-white hover:shadow-premium'
                }`}
              >
                <Heart
                  className="w-5 h-5"
                  fill={isMarkedForPurchase(vehicle.id) ? 'currentColor' : 'none'}
                />
                {isMarkedForPurchase(vehicle.id) ? 'Marcado para Posible Compra' : 'Marcar para Posible Compra'}
              </button>
              <button
                onClick={onClose}
                className="w-full bg-neutral-200 hover:bg-neutral-300 text-primary-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
