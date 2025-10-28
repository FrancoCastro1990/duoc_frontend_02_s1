import {
  Target,
  Telescope,
  Handshake,
  Star,
  Lightbulb,
  Leaf,
  Users,
  Trophy,
  CheckCircle,
} from "lucide-react";
import "./QuienesSomos.css";
import logo from "../assets/logo.png";

function QuienesSomos() {
  return (
    <div className="quienes-somos">
      <section className="about-hero">
        <h2>Sobre Nosotros</h2>
        <p className="subtitle">Tu socio confiable en la compra de vehículos</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <div className="about-image">
            <img src={logo} alt="Nuestra empresa" />
          </div>
          <div className="about-text">
            <h3>Nuestra Historia</h3>
            <p>
              Fundada en 2010, <strong>AutoVentas Premium</strong> nació con la
              visión de revolucionar la experiencia de compra de vehículos en
              Chile. Con más de 13 años de experiencia en el mercado automotriz,
              nos hemos convertido en uno de los distribuidores más confiables y
              reconocidos del país.
            </p>
            <p>
              Comenzamos con un pequeño lote en Santiago y hoy contamos con
              múltiples sucursales a lo largo del país, sirviendo a miles de
              clientes satisfechos que confían en nuestra calidad y servicio
              profesional.
            </p>
          </div>
        </div>

        <div className="mission-vision">
          <div className="mission-card">
            <Target className="card-icon" size={48} strokeWidth={1.5} />
            <h3>Nuestra Misión</h3>
            <p>
              Proporcionar a nuestros clientes vehículos de la más alta calidad,
              con un servicio personalizado y transparente, garantizando una
              experiencia de compra excepcional desde el primer contacto hasta
              el post-venta.
            </p>
          </div>

          <div className="vision-card">
            <Telescope className="card-icon" size={48} strokeWidth={1.5} />
            <h3>Nuestra Visión</h3>
            <p>
              Ser la empresa líder en ventas de vehículos en Chile para 2030,
              reconocida por nuestra innovación, compromiso con la satisfacción
              del cliente y responsabilidad ambiental, expandiendo nuestra
              presencia a nivel latinoamericano.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h3 className="section-title">Nuestros Valores</h3>
          <div className="values-grid">
            <div className="value-item">
              <Handshake className="value-icon" size={40} strokeWidth={1.5} />
              <h4>Confianza</h4>
              <p>
                Construimos relaciones duraderas basadas en la honestidad y
                transparencia
              </p>
            </div>
            <div className="value-item">
              <Star className="value-icon" size={40} strokeWidth={1.5} />
              <h4>Calidad</h4>
              <p>
                Solo ofrecemos vehículos certificados que cumplen los más altos
                estándares
              </p>
            </div>
            <div className="value-item">
              <Lightbulb className="value-icon" size={40} strokeWidth={1.5} />
              <h4>Innovación</h4>
              <p>
                Constantemente mejoramos nuestros procesos para ofrecer mejor
                servicio
              </p>
            </div>
            <div className="value-item">
              <Leaf className="value-icon" size={40} strokeWidth={1.5} />
              <h4>Sostenibilidad</h4>
              <p>
                Comprometidos con el medio ambiente y vehículos eco-amigables
              </p>
            </div>
            <div className="value-item">
              <Users className="value-icon" size={40} strokeWidth={1.5} />
              <h4>Orientación al Cliente</h4>
              <p>
                El cliente es el centro de todas nuestras decisiones y acciones
              </p>
            </div>
            <div className="value-item">
              <Trophy className="value-icon" size={40} strokeWidth={1.5} />
              <h4>Excelencia</h4>
              <p>Buscamos la perfección en cada detalle de nuestro servicio</p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <h3 className="section-title">Nuestros Logros</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">13+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15,000+</span>
              <span className="stat-label">Clientes Satisfechos</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">8</span>
              <span className="stat-label">Sucursales en Chile</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfacción del Cliente</span>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="section-title">Nuestro Equipo</h3>
          <p className="team-intro">
            Contamos con un equipo de más de 100 profesionales especializados en
            ventas, financiamiento, servicio técnico y atención al cliente,
            todos dedicados a brindarte la mejor experiencia posible.
          </p>
          <div className="team-features">
            <div className="team-feature">
              <CheckCircle className="team-check" size={24} strokeWidth={2} />
              <p>Asesores certificados y capacitados constantemente</p>
            </div>
            <div className="team-feature">
              <CheckCircle className="team-check" size={24} strokeWidth={2} />
              <p>Técnicos especializados con certificación de fábrica</p>
            </div>
            <div className="team-feature">
              <CheckCircle className="team-check" size={24} strokeWidth={2} />
              <p>Ejecutivos de financiamiento expertos</p>
            </div>
            <div className="team-feature">
              <CheckCircle className="team-check" size={24} strokeWidth={2} />
              <p>Atención personalizada y seguimiento post-venta</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;
