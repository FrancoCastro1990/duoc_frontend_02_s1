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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 animate-fade-in sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl bg-white rounded-[20px] shadow-premium overflow-hidden animate-scale-in max-h-[95vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-gradient-accent rounded-full shadow-glow hover:shadow-xl transition-all duration-300 sm:top-4 sm:right-4 sm:p-3"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-primary-900 sm:w-6 sm:h-6" />
        </button>

        {/* Modal content */}
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Vehicle image */}
          <div className="w-full lg:w-1/2 bg-neutral-100">
            <img
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="w-full h-64 object-cover sm:h-80 lg:h-full"
            />
          </div>

          {/* Vehicle details */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center sm:p-8 lg:p-10">
            <div className="mb-5 sm:mb-6">
              <h2 className="text-xl font-bold text-primary-900 mb-3 sm:text-2xl md:text-3xl">
                {vehicle.brand} {vehicle.model}
              </h2>
              <span className="inline-block bg-gradient-accent text-primary-900 px-3 py-2 rounded-lg font-bold shadow-glow text-sm sm:px-4">
                Año {vehicle.year}
              </span>
            </div>

            <div className="mb-5 sm:mb-6">
              <p className="text-xs font-semibold text-neutral-600 mb-2 uppercase tracking-wide sm:text-sm">
                Precio
              </p>
              <p className="text-2xl font-bold text-secondary-800 sm:text-3xl md:text-4xl">
                {formatPrice(vehicle.price)}
              </p>
            </div>

            <div className="mb-5 sm:mb-6">
              <p className="text-xs font-semibold text-primary-900 mb-2 uppercase tracking-wide sm:text-sm sm:mb-3">
                Descripción
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed sm:text-[0.95rem] md:text-[1.05rem]">
                {vehicle.description}
              </p>
            </div>

            <div className="mt-auto pt-5 border-t border-neutral-200 sm:pt-6">
              <button
                onClick={() => {
                  if (isMarkedForPurchase(vehicle.id)) {
                    unmarkForPurchase(vehicle.id);
                  } else {
                    markForPurchase(vehicle.id);
                  }
                }}
                className={`w-full flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition-all duration-300 mb-3 border-2 min-h-[44px] sm:px-6 ${
                  isMarkedForPurchase(vehicle.id)
                    ? 'bg-secondary-800 border-secondary-800 text-white hover:bg-secondary-900 hover:border-secondary-900 hover:shadow-premium'
                    : 'bg-transparent border-secondary-800 text-secondary-800 hover:bg-secondary-800 hover:text-white hover:shadow-premium'
                }`}
              >
                <Heart
                  className="w-5 h-5"
                  fill={isMarkedForPurchase(vehicle.id) ? 'currentColor' : 'none'}
                />
                <span className="text-sm sm:text-base">
                  {isMarkedForPurchase(vehicle.id) ? 'Marcado para Posible Compra' : 'Marcar para Posible Compra'}
                </span>
              </button>
              <button
                onClick={onClose}
                className="w-full bg-neutral-200 hover:bg-neutral-300 text-primary-900 font-semibold py-3 px-4 rounded-xl transition-all duration-300 min-h-[44px] sm:px-6"
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
