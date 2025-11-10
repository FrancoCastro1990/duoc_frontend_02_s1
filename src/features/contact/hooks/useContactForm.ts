import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

/**
 * Contact Form Data Interface
 * Represents the structure of the contact form
 */
export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

/**
 * useContactForm Hook
 * Manages contact form state, validation, and submission logic
 *
 * This hook encapsulates all business logic for the contact form,
 * separating it from the UI presentation layer.
 *
 * @returns Object containing form state and handlers
 */
export const useContactForm = () => {
  const initialFormData: ContactFormData = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  };

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState<boolean>(false);

  /**
   * Handle form submission
   * Simulates form submission and shows success message for 3 seconds
   */
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setSubmitted(true);

    // Simulate form submission - in a real app, this would call an API
    setTimeout(() => {
      setSubmitted(false);
      setFormData(initialFormData);
    }, 3000);
  };

  /**
   * Handle input changes
   * Updates form data when user types in any field
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  /**
   * Reset form to initial state
   * Useful for manual form clearing
   */
  const resetForm = (): void => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  return {
    formData,
    submitted,
    handleSubmit,
    handleChange,
    resetForm
  };
};
