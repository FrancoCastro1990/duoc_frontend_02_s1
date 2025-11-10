import React from 'react';
import { useAddVehicleForm } from '../hooks/useAddVehicleForm';

/**
 * AddVehicle Page Component
 * Provides a form interface for adding new vehicles to the catalog
 *
 * This component focuses purely on presentation - all business logic
 * is handled by the useAddVehicleForm custom hook.
 */
export const AddVehicle: React.FC = () => {
  const {
    formData,
    errors,
    submitted,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm
  } = useAddVehicleForm();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white p-8 md:p-12 rounded-3xl mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Agregar Vehículo</h1>
        <p className="text-[0.95rem] md:text-[1.05rem] opacity-90">
          Complete el formulario para agregar un nuevo vehículo al catálogo
        </p>
      </div>

      {/* Success Message */}
      {submitted && (
        <div className="bg-success-100 border-l-4 border-success-600 p-4 rounded-lg mb-6 animate-fade-in-down">
          <p className="text-success-800 font-medium">
            ¡Vehículo agregado exitosamente al catálogo!
          </p>
        </div>
      )}

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="bg-white rounded-[20px] p-6 md:p-10 shadow-md">
        {/* Form Grid - 2x2 for first 4 fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Brand Field */}
          <div>
            <label htmlFor="brand" className="block text-sm md:text-base font-medium text-primary-900 mb-2">
              Marca *
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className={`w-full border-2 ${
                errors.brand ? 'border-error-600' : 'border-neutral-300'
              } focus:border-secondary-800 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] rounded-xl px-4 py-3 transition-all text-[0.95rem] md:text-[1.05rem] outline-none`}
              placeholder="Ej: Toyota"
              disabled={isSubmitting}
            />
            {errors.brand && (
              <span className="text-error-600 text-sm mt-1 block">{errors.brand}</span>
            )}
          </div>

          {/* Model Field */}
          <div>
            <label htmlFor="model" className="block text-sm md:text-base font-medium text-primary-900 mb-2">
              Modelo *
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className={`w-full border-2 ${
                errors.model ? 'border-error-600' : 'border-neutral-300'
              } focus:border-secondary-800 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] rounded-xl px-4 py-3 transition-all text-[0.95rem] md:text-[1.05rem] outline-none`}
              placeholder="Ej: Corolla"
              disabled={isSubmitting}
            />
            {errors.model && (
              <span className="text-error-600 text-sm mt-1 block">{errors.model}</span>
            )}
          </div>

          {/* Price Field */}
          <div>
            <label htmlFor="price" className="block text-sm md:text-base font-medium text-primary-900 mb-2">
              Precio *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={`w-full border-2 ${
                errors.price ? 'border-error-600' : 'border-neutral-300'
              } focus:border-secondary-800 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] rounded-xl px-4 py-3 transition-all text-[0.95rem] md:text-[1.05rem] outline-none`}
              placeholder="Ej: 28990000"
              min="0"
              step="1000"
              disabled={isSubmitting}
            />
            {errors.price && (
              <span className="text-error-600 text-sm mt-1 block">{errors.price}</span>
            )}
          </div>

          {/* Year Field */}
          <div>
            <label htmlFor="year" className="block text-sm md:text-base font-medium text-primary-900 mb-2">
              Año *
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={`w-full border-2 ${
                errors.year ? 'border-error-600' : 'border-neutral-300'
              } focus:border-secondary-800 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] rounded-xl px-4 py-3 transition-all text-[0.95rem] md:text-[1.05rem] outline-none`}
              placeholder="Ej: 2024"
              min="1900"
              max="2030"
              disabled={isSubmitting}
            />
            {errors.year && (
              <span className="text-error-600 text-sm mt-1 block">{errors.year}</span>
            )}
          </div>
        </div>

        {/* Image URL Field - Full Width */}
        <div className="mb-6">
          <label htmlFor="image" className="block text-sm md:text-base font-medium text-primary-900 mb-2">
            URL de Imagen *
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className={`w-full border-2 ${
              errors.image ? 'border-error-600' : 'border-neutral-300'
            } focus:border-secondary-800 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] rounded-xl px-4 py-3 transition-all text-[0.95rem] md:text-[1.05rem] outline-none`}
            placeholder="https://ejemplo.com/imagen-vehiculo.jpg"
            disabled={isSubmitting}
          />
          {errors.image && (
            <span className="text-error-600 text-sm mt-1 block">{errors.image}</span>
          )}
        </div>

        {/* Description Field - Full Width */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm md:text-base font-medium text-primary-900 mb-2">
            Descripción *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full border-2 ${
              errors.description ? 'border-error-600' : 'border-neutral-300'
            } focus:border-secondary-800 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.1)] rounded-xl px-4 py-3 transition-all text-[0.95rem] md:text-[1.05rem] outline-none resize-none`}
            placeholder="Describa las características principales del vehículo..."
            rows={4}
            disabled={isSubmitting}
          />
          {errors.description && (
            <span className="text-error-600 text-sm mt-1 block">{errors.description}</span>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            onClick={resetForm}
            className="border-2 border-neutral-400 text-neutral-700 hover:border-neutral-600 hover:bg-neutral-50 px-6 py-3 rounded-xl transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            Limpiar Formulario
          </button>
          <button
            type="submit"
            className="bg-secondary-800 hover:bg-secondary-900 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Agregando...' : 'Agregar Vehículo'}
          </button>
        </div>
      </form>
    </div>
  );
};
