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
      <div className="grid grid-cols-[1fr_1.5fr] gap-10 mb-10 lg:grid-cols-1">
        {/* Contact Info Sidebar */}
        <div className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-10 py-10 h-fit md:px-6">
          <h3 className="text-primary-900 text-[2rem] font-bold m-0 mb-8 md:text-2xl">
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
          <div className="mt-10 pt-8 border-t-[3px] border-accent-400">
            <h4 className="text-primary-900 font-bold m-0 mb-5">
              Síguenos en Redes Sociales
            </h4>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <a href="#" className="flex items-center gap-3 bg-primary-50 border-2 border-transparent rounded-xl no-underline text-primary-800 font-semibold text-[0.95rem] px-4 py-4 transition-all duration-300 ease-smooth hover:bg-gradient-primary hover:text-white hover:-translate-y-1 hover:shadow-md hover:border-secondary-800 md:px-[0.85rem] md:text-sm">
                <Facebook size={20} strokeWidth={2} /> Facebook
              </a>
              <a href="#" className="flex items-center gap-3 bg-primary-50 border-2 border-transparent rounded-xl no-underline text-primary-800 font-semibold text-[0.95rem] px-4 py-4 transition-all duration-300 ease-smooth hover:bg-gradient-primary hover:text-white hover:-translate-y-1 hover:shadow-md hover:border-secondary-800 md:px-[0.85rem] md:text-sm">
                <Instagram size={20} strokeWidth={2} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-3 bg-primary-50 border-2 border-transparent rounded-xl no-underline text-primary-800 font-semibold text-[0.95rem] px-4 py-4 transition-all duration-300 ease-smooth hover:bg-gradient-primary hover:text-white hover:-translate-y-1 hover:shadow-md hover:border-secondary-800 md:px-[0.85rem] md:text-sm">
                <Twitter size={20} strokeWidth={2} /> Twitter
              </a>
              <a href="#" className="flex items-center gap-3 bg-primary-50 border-2 border-transparent rounded-xl no-underline text-primary-800 font-semibold text-[0.95rem] px-4 py-4 transition-all duration-300 ease-smooth hover:bg-gradient-primary hover:text-white hover:-translate-y-1 hover:shadow-md hover:border-secondary-800 md:px-[0.85rem] md:text-sm">
                <Linkedin size={20} strokeWidth={2} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-10 py-10 md:px-6">
          <h3 className="text-primary-900 text-[2rem] font-bold m-0 mb-3 md:text-2xl">
            Envíanos un Mensaje
          </h3>
          <p className="text-primary-500 text-[1.05rem] m-0 mb-8">
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
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
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
              <label htmlFor="asunto" className="text-primary-900 font-bold text-[0.95rem] mb-3">
                Asunto *
              </label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                className="bg-primary-50 border-2 border-primary-200 text-primary-800 rounded-xl font-sans text-base px-5 py-4 transition-all duration-300 ease-smooth focus:outline-none focus:border-secondary-800 focus:shadow-[0_0_0_4px_rgba(30,64,175,0.1)] focus:bg-white md:px-4 md:py-[0.85rem] md:text-[0.95rem]"
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
      <section className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-12 py-12 mb-10 md:px-6">
        <h3 className="text-primary-900 text-[2rem] font-bold text-center m-0 mb-8 md:text-2xl">
          Nuestra Ubicación
        </h3>
        <div className="bg-primary-50 rounded-2xl border-2 border-dashed border-secondary-800 px-10 py-20 md:px-6 md:py-12">
          <div className="text-center">
            <MapPinned className="block mx-auto mb-6 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]" size={64} strokeWidth={1.5} />
            <p className="text-primary-800 text-[1.15rem] font-semibold my-3 md:text-base">
              Av. Providencia 1234, Providencia, Santiago
            </p>
            <p className="text-primary-500 text-[0.95rem] italic font-normal mt-5">
              * Mapa interactivo disponible próximamente
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-12 py-12 md:px-6">
        <h3 className="text-primary-900 text-[2rem] font-bold text-center m-0 mb-8 md:text-2xl">
          Preguntas Frecuentes
        </h3>
        <div className="grid grid-cols-2 gap-7 md:grid-cols-1">
          <div className="bg-primary-50 rounded-xl shadow-sm border-l-4 border-secondary-800 px-8 py-8 transition-all duration-300 ease-smooth hover:translate-x-2 hover:shadow-md hover:bg-white hover:border-l-[6px] md:px-6">
            <h4 className="text-primary-900 text-[1.15rem] font-bold m-0 mb-4 md:text-[1.05rem]">
              ¿Tienen vehículos usados?
            </h4>
            <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
              Sí, contamos con una amplia selección de vehículos seminuevos certificados con garantía.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl shadow-sm border-l-4 border-secondary-800 px-8 py-8 transition-all duration-300 ease-smooth hover:translate-x-2 hover:shadow-md hover:bg-white hover:border-l-[6px] md:px-6">
            <h4 className="text-primary-900 text-[1.15rem] font-bold m-0 mb-4 md:text-[1.05rem]">
              ¿Ofrecen financiamiento?
            </h4>
            <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
              Sí, trabajamos con diversas instituciones financieras para ofrecerte las mejores tasas.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl shadow-sm border-l-4 border-secondary-800 px-8 py-8 transition-all duration-300 ease-smooth hover:translate-x-2 hover:shadow-md hover:bg-white hover:border-l-[6px] md:px-6">
            <h4 className="text-primary-900 text-[1.15rem] font-bold m-0 mb-4 md:text-[1.05rem]">
              ¿Puedo agendar una prueba de manejo?
            </h4>
            <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
              Por supuesto, puedes agendarla contactándonos o visitando nuestra sucursal.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl shadow-sm border-l-4 border-secondary-800 px-8 py-8 transition-all duration-300 ease-smooth hover:translate-x-2 hover:shadow-md hover:bg-white hover:border-l-[6px] md:px-6">
            <h4 className="text-primary-900 text-[1.15rem] font-bold m-0 mb-4 md:text-[1.05rem]">
              ¿Reciben vehículos en parte de pago?
            </h4>
            <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
              Sí, tasamos tu vehículo actual y lo recibimos como parte de pago.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
