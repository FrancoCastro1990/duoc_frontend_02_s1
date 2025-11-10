import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, MapPinned, CheckCircle } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

function Contact() {
  const { formData, submitted, handleSubmit, handleChange } = useContactForm();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary rounded-[20px] text-center shadow-xl px-10 py-16 mb-10 md:px-6 md:py-8">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.08) 0%, transparent 100%)' }} />

        <h2 className="relative text-white text-5xl font-extrabold tracking-tight leading-tight m-0 mb-3 md:text-[1.75rem]" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}>
          Contáctanos
        </h2>
        <p className="relative text-accent-400 text-[1.3rem] font-semibold tracking-wide m-0 md:text-base">
          Estamos aquí para ayudarte en tu búsqueda del vehículo perfecto
        </p>
      </section>

      {/* Contact Container - Info & Form */}
      <div className="grid grid-cols-[1fr_1.5fr] gap-10 mb-10 lg:grid-cols-1">
        {/* Contact Info Sidebar */}
        <div className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-10 py-10 h-fit md:px-6">
          <h3 className="text-primary-900 text-[2rem] font-bold m-0 mb-8 md:text-2xl">
            Información de Contacto
          </h3>

          {/* Info Items */}
          <div className="flex gap-5 mb-8 pb-8 border-b-2 border-primary-100">
            <MapPin className="flex-shrink-0 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]" size={32} strokeWidth={1.5} />
            <div>
              <h4 className="text-primary-900 text-[1.15rem] font-bold m-0 mb-3">
                Dirección
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed my-[0.35rem]">
                Av. Providencia 1234, Providencia
              </p>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed my-[0.35rem]">
                Santiago, Chile
              </p>
            </div>
          </div>

          <div className="flex gap-5 mb-8 pb-8 border-b-2 border-primary-100">
            <Phone className="flex-shrink-0 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]" size={32} strokeWidth={1.5} />
            <div>
              <h4 className="text-primary-900 text-[1.15rem] font-bold m-0 mb-3">
                Teléfonos
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed my-[0.35rem]">
                +56 2 2345 6789
              </p>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed my-[0.35rem]">
                +56 9 8765 4321
              </p>
            </div>
          </div>

          <div className="flex gap-5 mb-8 pb-8 border-b-2 border-primary-100">
            <Mail className="flex-shrink-0 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]" size={32} strokeWidth={1.5} />
            <div>
              <h4 className="text-primary-900 text-[1.15rem] font-bold m-0 mb-3">
                Email
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed my-[0.35rem]">
                ventas@autoventaspremium.cl
              </p>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed my-[0.35rem]">
                contacto@autoventaspremium.cl
              </p>
            </div>
          </div>

          <div className="flex gap-5 mb-10">
            <Clock className="flex-shrink-0 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]" size={32} strokeWidth={1.5} />
            <div>
              <h4 className="text-primary-900 text-[1.15rem] font-bold m-0 mb-3">
                Horario de Atención
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed my-[0.35rem]">
                Lunes a Viernes: 9:00 - 19:00
              </p>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed my-[0.35rem]">
                Sábado: 10:00 - 14:00
              </p>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed my-[0.35rem]">
                Domingo: Cerrado
              </p>
            </div>
          </div>

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
            <div className="flex items-center justify-center gap-3 bg-gradient-to-br from-[#10B981] to-[#059669] text-white font-semibold rounded-xl shadow-md px-6 py-5 mb-8 animate-fade-in-down">
              <CheckCircle size={20} strokeWidth={2} />
              <span>¡Mensaje enviado exitosamente! Nos contactaremos contigo pronto.</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="nombre" className="text-primary-900 font-bold text-[0.95rem] mb-3">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Ej: Juan Pérez"
                className="bg-primary-50 border-2 border-primary-200 text-primary-800 rounded-xl font-sans text-base px-5 py-4 transition-all duration-300 ease-smooth focus:outline-none focus:border-secondary-800 focus:shadow-[0_0_0_4px_rgba(30,64,175,0.1)] focus:bg-white md:px-4 md:py-[0.85rem] md:text-[0.95rem]"
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-primary-900 font-bold text-[0.95rem] mb-3 md:text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="bg-primary-50 border-2 border-primary-200 text-primary-800 rounded-xl font-sans text-base px-5 py-4 transition-all duration-300 ease-smooth focus:outline-none focus:border-secondary-800 focus:shadow-[0_0_0_4px_rgba(30,64,175,0.1)] focus:bg-white md:px-4 md:py-[0.85rem] md:text-[0.95rem]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="telefono" className="text-primary-900 font-bold text-[0.95rem] mb-3 md:text-sm">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="+56 9 1234 5678"
                  className="bg-primary-50 border-2 border-primary-200 text-primary-800 rounded-xl font-sans text-base px-5 py-4 transition-all duration-300 ease-smooth focus:outline-none focus:border-secondary-800 focus:shadow-[0_0_0_4px_rgba(30,64,175,0.1)] focus:bg-white md:px-4 md:py-[0.85rem] md:text-[0.95rem]"
                />
              </div>
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
            <div className="flex flex-col">
              <label htmlFor="mensaje" className="text-primary-900 font-bold text-[0.95rem] mb-3">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                className="bg-primary-50 border-2 border-primary-200 text-primary-800 rounded-xl font-sans text-base px-5 py-4 transition-all duration-300 ease-smooth resize-y min-h-[140px] focus:outline-none focus:border-secondary-800 focus:shadow-[0_0_0_4px_rgba(30,64,175,0.1)] focus:bg-white md:px-4 md:py-[0.85rem] md:text-[0.95rem]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-primary text-white text-[1.1rem] font-bold tracking-wide rounded-xl shadow-md border-none cursor-pointer px-10 py-5 mt-4 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-xl active:-translate-y-0 md:px-8 md:py-4 md:text-base"
            >
              Enviar Mensaje
            </button>
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
