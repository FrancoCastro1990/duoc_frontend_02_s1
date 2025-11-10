import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, MapPinned, CheckCircle } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';
import { PageHero, ContactInfoItem, Alert, FormInput, FormTextarea, Button } from '@/features/shared';

function Contact() {
  const { formData, submitted, handleSubmit, handleChange } = useContactForm();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <PageHero
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte en tu búsqueda del vehículo perfecto"
        variant="gradient-overlay"
        alignment="center"
      />

      {/* Contact Container - Info & Form */}
      <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-[1fr_1.5fr] lg:gap-10">
        {/* Contact Info Sidebar */}
        <div className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-6 py-6 h-fit sm:px-8 sm:py-8 md:px-10 md:py-10">
          <h3 className="text-primary-900 text-xl font-bold m-0 mb-6 sm:text-2xl md:text-3xl lg:text-[2rem] lg:mb-8">
            Información de Contacto
          </h3>

          {/* Info Items */}
          <ContactInfoItem
            icon={<MapPin size={32} strokeWidth={1.5} />}
            title="Dirección"
            details={[
              'Av. Providencia 1234, Providencia',
              'Santiago, Chile'
            ]}
          />

          <ContactInfoItem
            icon={<Phone size={32} strokeWidth={1.5} />}
            title="Teléfonos"
            details={[
              '+56 2 2345 6789',
              '+56 9 8765 4321'
            ]}
          />

          <ContactInfoItem
            icon={<Mail size={32} strokeWidth={1.5} />}
            title="Email"
            details={[
              'ventas@autoventaspremium.cl',
              'contacto@autoventaspremium.cl'
            ]}
          />

          <ContactInfoItem
            icon={<Clock size={32} strokeWidth={1.5} />}
            title="Horario de Atención"
            details={[
              'Lunes a Viernes: 9:00 - 19:00',
              'Sábado: 10:00 - 14:00',
              'Domingo: Cerrado'
            ]}
            className="mb-10"
          />

          {/* Social Media */}
          <div className="mt-8 pt-6 border-t-[3px] border-accent-400 sm:mt-10 sm:pt-8">
            <h4 className="text-primary-900 text-base font-bold m-0 mb-4 sm:text-lg sm:mb-5">
              Síguenos en Redes Sociales
            </h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <a href="#" className="flex items-center gap-2 bg-primary-50 border-2 border-transparent rounded-xl no-underline text-primary-800 font-semibold text-sm px-3 py-3 transition-all duration-300 ease-smooth hover:bg-gradient-primary hover:text-white hover:-translate-y-1 hover:shadow-md hover:border-secondary-800 min-h-[44px] sm:gap-3 sm:px-4 sm:py-4 md:text-[0.95rem]">
                <Facebook size={20} strokeWidth={2} /> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 bg-primary-50 border-2 border-transparent rounded-xl no-underline text-primary-800 font-semibold text-sm px-3 py-3 transition-all duration-300 ease-smooth hover:bg-gradient-primary hover:text-white hover:-translate-y-1 hover:shadow-md hover:border-secondary-800 min-h-[44px] sm:gap-3 sm:px-4 sm:py-4 md:text-[0.95rem]">
                <Instagram size={20} strokeWidth={2} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 bg-primary-50 border-2 border-transparent rounded-xl no-underline text-primary-800 font-semibold text-sm px-3 py-3 transition-all duration-300 ease-smooth hover:bg-gradient-primary hover:text-white hover:-translate-y-1 hover:shadow-md hover:border-secondary-800 min-h-[44px] sm:gap-3 sm:px-4 sm:py-4 md:text-[0.95rem]">
                <Twitter size={20} strokeWidth={2} /> Twitter
              </a>
              <a href="#" className="flex items-center gap-2 bg-primary-50 border-2 border-transparent rounded-xl no-underline text-primary-800 font-semibold text-sm px-3 py-3 transition-all duration-300 ease-smooth hover:bg-gradient-primary hover:text-white hover:-translate-y-1 hover:shadow-md hover:border-secondary-800 min-h-[44px] sm:gap-3 sm:px-4 sm:py-4 md:text-[0.95rem]">
                <Linkedin size={20} strokeWidth={2} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
          <h3 className="text-primary-900 text-xl font-bold m-0 mb-2 sm:text-2xl md:text-3xl lg:text-[2rem] lg:mb-3">
            Envíanos un Mensaje
          </h3>
          <p className="text-primary-500 text-[0.95rem] m-0 mb-6 sm:text-base md:text-[1.05rem] md:mb-8">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible
          </p>

          {/* Success Message */}
          {submitted && (
            <Alert
              variant="success"
              icon={<CheckCircle />}
              message="¡Mensaje enviado exitosamente! Nos contactaremos contigo pronto."
            />
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Full Name */}
            <FormInput
              label="Nombre Completo"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              required
              className="bg-primary-50 border-primary-200 focus:bg-white"
            />

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="bg-primary-50 border-primary-200 focus:bg-white"
              />

              <FormInput
                label="Teléfono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+56 9 1234 5678"
                required
                className="bg-primary-50 border-primary-200 focus:bg-white"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label htmlFor="asunto" className="text-primary-900 font-bold text-sm mb-2 sm:text-[0.95rem] sm:mb-3">
                Asunto *
              </label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                className="bg-primary-50 border-2 border-primary-200 text-primary-800 rounded-xl font-sans text-[0.95rem] px-4 py-3 transition-all duration-300 ease-smooth focus:outline-none focus:border-secondary-800 focus:shadow-[0_0_0_4px_rgba(30,64,175,0.1)] focus:bg-white min-h-[44px] sm:px-5 sm:py-4 sm:text-base"
              >
                <option value="">Selecciona un asunto</option>
                <option value="consulta">Consulta General</option>
                <option value="cotizacion">Solicitar Cotización</option>
                <option value="prueba">Agendar Prueba de Manejo</option>
                <option value="financiamiento">Información de Financiamiento</option>
                <option value="postventa">Servicio Post-Venta</option>
                <option value="reclamo">Reclamo o Sugerencia</option>
              </select>
            </div>

            {/* Message */}
            <FormTextarea
              label="Mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos cómo podemos ayudarte..."
              rows={5}
              required
              className="bg-primary-50 border-primary-200 focus:bg-white resize-y min-h-[140px]"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary-gradient"
              size="lg"
              fullWidth
              className="mt-4"
            >
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-6 py-6 mb-10 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
        <h3 className="text-primary-900 text-xl font-bold text-center m-0 mb-6 sm:text-2xl md:text-3xl lg:text-[2rem] lg:mb-8">
          Nuestra Ubicación
        </h3>
        <div className="bg-primary-50 rounded-2xl border-2 border-dashed border-secondary-800 px-6 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20">
          <div className="text-center">
            <MapPinned className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)] sm:mb-6" size={56} strokeWidth={1.5} />
            <p className="text-primary-800 text-base font-semibold my-3 sm:text-lg md:text-[1.15rem]">
              Av. Providencia 1234, Providencia, Santiago
            </p>
            <p className="text-primary-500 text-sm italic font-normal mt-4 sm:text-[0.95rem] sm:mt-5">
              * Mapa interactivo disponible próximamente
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
        <h3 className="text-primary-900 text-xl font-bold text-center m-0 mb-6 sm:text-2xl md:text-3xl lg:text-[2rem] lg:mb-8">
          Preguntas Frecuentes
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          <div className="bg-primary-50 rounded-xl shadow-sm border-l-4 border-secondary-800 px-5 py-5 transition-all duration-300 ease-smooth hover:translate-x-2 hover:shadow-md hover:bg-white hover:border-l-[6px] sm:px-6 sm:py-6 md:px-8 md:py-8">
            <h4 className="text-primary-900 text-base font-bold m-0 mb-3 sm:text-[1.05rem] sm:mb-4 md:text-[1.15rem]">
              ¿Tienen vehículos usados?
            </h4>
            <p className="text-primary-500 text-sm leading-relaxed m-0 sm:text-[0.95rem]">
              Sí, contamos con una amplia selección de vehículos seminuevos certificados con garantía.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl shadow-sm border-l-4 border-secondary-800 px-5 py-5 transition-all duration-300 ease-smooth hover:translate-x-2 hover:shadow-md hover:bg-white hover:border-l-[6px] sm:px-6 sm:py-6 md:px-8 md:py-8">
            <h4 className="text-primary-900 text-base font-bold m-0 mb-3 sm:text-[1.05rem] sm:mb-4 md:text-[1.15rem]">
              ¿Ofrecen financiamiento?
            </h4>
            <p className="text-primary-500 text-sm leading-relaxed m-0 sm:text-[0.95rem]">
              Sí, trabajamos con diversas instituciones financieras para ofrecerte las mejores tasas.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl shadow-sm border-l-4 border-secondary-800 px-5 py-5 transition-all duration-300 ease-smooth hover:translate-x-2 hover:shadow-md hover:bg-white hover:border-l-[6px] sm:px-6 sm:py-6 md:px-8 md:py-8">
            <h4 className="text-primary-900 text-base font-bold m-0 mb-3 sm:text-[1.05rem] sm:mb-4 md:text-[1.15rem]">
              ¿Puedo agendar una prueba de manejo?
            </h4>
            <p className="text-primary-500 text-sm leading-relaxed m-0 sm:text-[0.95rem]">
              Por supuesto, puedes agendarla contactándonos o visitando nuestra sucursal.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl shadow-sm border-l-4 border-secondary-800 px-5 py-5 transition-all duration-300 ease-smooth hover:translate-x-2 hover:shadow-md hover:bg-white hover:border-l-[6px] sm:px-6 sm:py-6 md:px-8 md:py-8">
            <h4 className="text-primary-900 text-base font-bold m-0 mb-3 sm:text-[1.05rem] sm:mb-4 md:text-[1.15rem]">
              ¿Reciben vehículos en parte de pago?
            </h4>
            <p className="text-primary-500 text-sm leading-relaxed m-0 sm:text-[0.95rem]">
              Sí, tasamos tu vehículo actual y lo recibimos como parte de pago.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
