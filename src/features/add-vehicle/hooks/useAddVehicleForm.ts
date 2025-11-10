import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { useVehicles } from '../../vehicles';
import type { CreateVehicleInput } from '../../vehicles';

/**
 * Form Data Interface
 * Represents the structure of the add vehicle form
 */
export interface AddVehicleFormData {
  brand: string;
  model: string;
  price: string;
  year: string;
  image: string;
  description: string;
}

/**
 * Form Errors Interface
 * Represents validation errors for each form field
 */
export interface FormErrors {
  brand?: string;
  model?: string;
  price?: string;
  year?: string;
  image?: string;
  description?: string;
}

/**
 * useAddVehicleForm Hook
 * Manages add vehicle form state, validation, and submission logic
 *
 * This hook encapsulates all business logic for adding vehicles,
 * separating it from the UI presentation layer.
 *
 * @returns Object containing form state, errors, and handlers
 */
export const useAddVehicleForm = () => {
  const { addVehicle } = useVehicles();

  const initialFormData: AddVehicleFormData = {
    brand: '',
    model: '',
    price: '',
    year: '',
    image: '',
    description: ''
  };

  const [formData, setFormData] = useState<AddVehicleFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  /**
   * Validate form data
   * Checks all required fields and business rules
   * @returns Object containing validation errors or empty object if valid
   */
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Brand validation
    if (!formData.brand.trim()) {
      newErrors.brand = 'La marca es requerida';
    }

    // Model validation
    if (!formData.model.trim()) {
      newErrors.model = 'El modelo es requerido';
    }

    // Price validation
    if (!formData.price.trim()) {
      newErrors.price = 'El precio es requerido';
    } else {
      const priceValue = parseFloat(formData.price);
      if (isNaN(priceValue) || priceValue <= 0) {
        newErrors.price = 'El precio debe ser mayor a 0';
      }
    }

    // Year validation
    if (!formData.year.trim()) {
      newErrors.year = 'El año es requerido';
    } else {
      const yearValue = parseInt(formData.year, 10);
      if (isNaN(yearValue) || yearValue < 1900 || yearValue > 2030) {
        newErrors.year = 'El año debe estar entre 1900 y 2030';
      }
    }

    // Image URL validation
    if (!formData.image.trim()) {
      newErrors.image = 'La URL de la imagen es requerida';
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }

    return newErrors;
  };

  /**
   * Handle form submission
   * Validates form and adds vehicle to catalog via context
   */
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate form
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Set submitting state
    setIsSubmitting(true);

    try {
      // Prepare vehicle data for submission
      const vehicleData: CreateVehicleInput = {
        brand: formData.brand.trim(),
        model: formData.model.trim(),
        price: parseFloat(formData.price),
        year: parseInt(formData.year, 10),
        image: formData.image.trim(),
        description: formData.description.trim()
      };

      // Add vehicle via context
      addVehicle(vehicleData);

      // Show success message
      setSubmitted(true);

      // Reset form and hide success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData(initialFormData);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      // Handle any errors during submission
      console.error('Error adding vehicle:', error);
      setErrors({ brand: 'Error al agregar el vehículo. Por favor, intente de nuevo.' });
      setIsSubmitting(false);
    }
  };

  /**
   * Handle input changes
   * Updates form data when user types in any field
   * Clears error for the field being edited
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  /**
   * Reset form to initial state
   * Clears all fields, errors, and submission state
   */
  const resetForm = (): void => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
    setIsSubmitting(false);
  };

  return {
    formData,
    errors,
    submitted,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm
  };
};
