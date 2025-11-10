import React from 'react';
import { useAddVehicleForm } from '../hooks/useAddVehicleForm';
import { PageHero, Alert, FormInput, FormTextarea, Button } from '@/features/shared';

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
      <PageHero
        title="Agregar Vehículo"
        subtitle="Complete el formulario para agregar un nuevo vehículo al catálogo"
        variant="gradient"
      />

      {/* Success Message */}
      {submitted && (
        <Alert
          variant="success"
          message="¡Vehículo agregado exitosamente al catálogo!"
        />
      )}

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="bg-white rounded-[20px] p-6 md:p-10 shadow-md">
        {/* Form Grid - 2x2 for first 4 fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput
            label="Marca"
            name="brand"
            type="text"
            value={formData.brand}
            onChange={handleChange}
            error={errors.brand}
            placeholder="Ej: Toyota"
            disabled={isSubmitting}
            required
          />

          <FormInput
            label="Modelo"
            name="model"
            type="text"
            value={formData.model}
            onChange={handleChange}
            error={errors.model}
            placeholder="Ej: Corolla"
            disabled={isSubmitting}
            required
          />

          <FormInput
            label="Precio"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            error={errors.price}
            placeholder="Ej: 28990000"
            min={0}
            step={1000}
            disabled={isSubmitting}
            required
          />

          <FormInput
            label="Año"
            name="year"
            type="number"
            value={formData.year}
            onChange={handleChange}
            error={errors.year}
            placeholder="Ej: 2024"
            min={1900}
            max={2030}
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Image URL Field - Full Width */}
        <div className="mb-6">
          <FormInput
            label="URL de Imagen"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
            error={errors.image}
            placeholder="https://ejemplo.com/imagen-vehiculo.jpg"
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Description Field - Full Width */}
        <div className="mb-6">
          <FormTextarea
            label="Descripción"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={errors.description}
            placeholder="Describa las características principales del vehículo..."
            rows={4}
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Form Actions */}
        <div className="flex gap-4 justify-end">
          <Button
            type="button"
            variant="neutral"
            onClick={resetForm}
            disabled={isSubmitting}
          >
            Limpiar Formulario
          </Button>
          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
          >
            Agregar Vehículo
          </Button>
        </div>
      </form>
    </div>
  );
};
