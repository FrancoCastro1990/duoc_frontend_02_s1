import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, MapPinned, CheckCircle } from 'lucide-react';
import './Contactanos.css';

function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contactanos">
      <section className="contact-hero">
        <h2>Contáctanos</h2>
        <p className="subtitle">Estamos aquí para ayudarte en tu búsqueda del vehículo perfecto</p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Información de Contacto</h3>

          <div className="info-item">
            <MapPin className="info-icon" size={32} strokeWidth={1.5} />
            <div>
              <h4>Dirección</h4>
              <p>Av. Providencia 1234, Providencia</p>
              <p>Santiago, Chile</p>
            </div>
          </div>

          <div className="info-item">
            <Phone className="info-icon" size={32} strokeWidth={1.5} />
            <div>
              <h4>Teléfonos</h4>
              <p>+56 2 2345 6789</p>
              <p>+56 9 8765 4321</p>
            </div>
          </div>

          <div className="info-item">
            <Mail className="info-icon" size={32} strokeWidth={1.5} />
            <div>
              <h4>Email</h4>
              <p>ventas@autoventaspremium.cl</p>
              <p>contacto@autoventaspremium.cl</p>
            </div>
          </div>

          <div className="info-item">
            <Clock className="info-icon" size={32} strokeWidth={1.5} />
            <div>
              <h4>Horario de Atención</h4>
              <p>Lunes a Viernes: 9:00 - 19:00</p>
              <p>Sábado: 10:00 - 14:00</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>

          <div className="social-media">
            <h4>Síguenos en Redes Sociales</h4>
            <div className="social-icons">
              <a href="#" className="social-link">
                <Facebook size={20} strokeWidth={2} /> Facebook
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} strokeWidth={2} /> Instagram
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} strokeWidth={2} /> Twitter
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} strokeWidth={2} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Envíanos un Mensaje</h3>
          <p className="form-description">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible
          </p>

          {submitted && (
            <div className="success-message">
              <CheckCircle size={20} strokeWidth={2} />
              <span>¡Mensaje enviado exitosamente! Nos contactaremos contigo pronto.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Ej: Juan Pérez"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono *</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="+56 9 1234 5678"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto *</label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
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

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntanos cómo podemos ayudarte..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      <section className="map-section">
        <h3>Nuestra Ubicación</h3>
        <div className="map-placeholder">
          <div className="map-content">
            <MapPinned className="map-icon" size={64} strokeWidth={1.5} />
            <p>Av. Providencia 1234, Providencia, Santiago</p>
            <p className="map-note">* Mapa interactivo disponible próximamente</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h3>Preguntas Frecuentes</h3>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>¿Tienen vehículos usados?</h4>
            <p>Sí, contamos con una amplia selección de vehículos seminuevos certificados con garantía.</p>
          </div>
          <div className="faq-item">
            <h4>¿Ofrecen financiamiento?</h4>
            <p>Sí, trabajamos con diversas instituciones financieras para ofrecerte las mejores tasas.</p>
          </div>
          <div className="faq-item">
            <h4>¿Puedo agendar una prueba de manejo?</h4>
            <p>Por supuesto, puedes agendarla contactándonos o visitando nuestra sucursal.</p>
          </div>
          <div className="faq-item">
            <h4>¿Reciben vehículos en parte de pago?</h4>
            <p>Sí, tasamos tu vehículo actual y lo recibimos como parte de pago.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactanos;
