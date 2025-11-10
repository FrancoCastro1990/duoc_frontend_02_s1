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
import logo from "../../../assets/logo.png";

function AboutUs() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary rounded-[20px] text-center shadow-xl px-10 py-16 mb-10 md:px-6 md:py-8">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.08) 0%, transparent 100%)' }} />

        <h2 className="relative text-white text-5xl font-extrabold tracking-tight leading-tight m-0 mb-3 md:text-[1.75rem]" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}>
          Sobre Nosotros
        </h2>
        <p className="relative text-accent-400 text-[1.3rem] font-semibold tracking-wide m-0 md:text-base">
          Tu socio confiable en la compra de vehículos
        </p>
      </section>

      {/* Content sections with gap */}
      <div className="flex flex-col gap-10">
        {/* About Card - History */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-lg border border-secondary-100 grid grid-cols-[1fr_1.5fr] gap-0 md:grid-cols-1">
          <div className="bg-primary-50 flex items-center justify-center p-8">
            <img src={logo} alt="Nuestra empresa" className="w-full h-auto object-contain max-h-[350px] md:min-h-[220px]" />
          </div>

          <div className="px-12 py-12 md:px-6 md:py-8">
            <h3 className="text-primary-900 text-4xl font-bold m-0 mb-6 md:text-[1.75rem]">
              Nuestra Historia
            </h3>
            <p className="text-primary-500 text-[1.05rem] leading-[1.8] mb-5 md:text-[0.95rem]">
              Fundada en 2010, <strong>AutoVentas Premium</strong> nació con la
              visión de revolucionar la experiencia de compra de vehículos en
              Chile. Con más de 13 años de experiencia en el mercado automotriz,
              nos hemos convertido en uno de los distribuidores más confiables y
              reconocidos del país.
            </p>
            <p className="text-primary-500 text-[1.05rem] leading-[1.8] m-0 md:text-[0.95rem]">
              Comenzamos con un pequeño lote en Santiago y hoy contamos con
              múltiples sucursales a lo largo del país, sirviendo a miles de
              clientes satisfechos que confían en nuestra calidad y servicio
              profesional.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-1 md:gap-6">
          <div className="relative bg-white rounded-[20px] shadow-lg border-2 border-transparent px-12 py-12 transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-secondary-800 md:px-6 md:py-8">
            <Target className="block mb-6 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]" size={48} strokeWidth={1.5} />
            <h3 className="text-primary-900 text-[1.75rem] font-bold m-0 mb-5 md:text-2xl">
              Nuestra Misión
            </h3>
            <p className="text-primary-500 text-[1.05rem] leading-[1.8] m-0 md:text-[0.95rem]">
              Proporcionar a nuestros clientes vehículos de la más alta calidad,
              con un servicio personalizado y transparente, garantizando una
              experiencia de compra excepcional desde el primer contacto hasta
              el post-venta.
            </p>
          </div>

          <div className="relative bg-white rounded-[20px] shadow-lg border-2 border-transparent px-12 py-12 transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-secondary-800 md:px-6 md:py-8">
            <Telescope className="block mb-6 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]" size={48} strokeWidth={1.5} />
            <h3 className="text-primary-900 text-[1.75rem] font-bold m-0 mb-5 md:text-2xl">
              Nuestra Visión
            </h3>
            <p className="text-primary-500 text-[1.05rem] leading-[1.8] m-0 md:text-[0.95rem]">
              Ser la empresa líder en ventas de vehículos en Chile para 2030,
              reconocida por nuestra innovación, compromiso con la satisfacción
              del cliente y responsabilidad ambiental, expandiendo nuestra
              presencia a nivel latinoamericano.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-12 py-12 md:px-6 md:py-8">
          <h3 className="text-primary-900 text-4xl font-bold tracking-tight text-center m-0 mb-10 md:text-2xl md:mb-8">
            Nuestros Valores
          </h3>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 md:grid-cols-1 md:gap-6">
            <div className="bg-primary-50 text-center rounded-2xl shadow-sm border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:border-secondary-800 hover:-translate-y-2 hover:shadow-lg hover:bg-white md:px-6 md:py-8">
              <Handshake className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.15)]" size={40} strokeWidth={1.5} />
              <h4 className="text-primary-900 text-[1.4rem] font-bold m-0 mb-3 md:text-xl">
                Confianza
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
                Construimos relaciones duraderas basadas en la honestidad y
                transparencia
              </p>
            </div>

            <div className="bg-primary-50 text-center rounded-2xl shadow-sm border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:border-secondary-800 hover:-translate-y-2 hover:shadow-lg hover:bg-white md:px-6 md:py-8">
              <Star className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.15)]" size={40} strokeWidth={1.5} />
              <h4 className="text-primary-900 text-[1.4rem] font-bold m-0 mb-3 md:text-xl">
                Calidad
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
                Solo ofrecemos vehículos certificados que cumplen los más altos
                estándares
              </p>
            </div>

            <div className="bg-primary-50 text-center rounded-2xl shadow-sm border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:border-secondary-800 hover:-translate-y-2 hover:shadow-lg hover:bg-white md:px-6 md:py-8">
              <Lightbulb className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.15)]" size={40} strokeWidth={1.5} />
              <h4 className="text-primary-900 text-[1.4rem] font-bold m-0 mb-3 md:text-xl">
                Innovación
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
                Constantemente mejoramos nuestros procesos para ofrecer mejor
                servicio
              </p>
            </div>

            <div className="bg-primary-50 text-center rounded-2xl shadow-sm border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:border-secondary-800 hover:-translate-y-2 hover:shadow-lg hover:bg-white md:px-6 md:py-8">
              <Leaf className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.15)]" size={40} strokeWidth={1.5} />
              <h4 className="text-primary-900 text-[1.4rem] font-bold m-0 mb-3 md:text-xl">
                Sostenibilidad
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
                Comprometidos con el medio ambiente y vehículos eco-amigables
              </p>
            </div>

            <div className="bg-primary-50 text-center rounded-2xl shadow-sm border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:border-secondary-800 hover:-translate-y-2 hover:shadow-lg hover:bg-white md:px-6 md:py-8">
              <Users className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.15)]" size={40} strokeWidth={1.5} />
              <h4 className="text-primary-900 text-[1.4rem] font-bold m-0 mb-3 md:text-xl">
                Orientación al Cliente
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
                El cliente es el centro de todas nuestras decisiones y acciones
              </p>
            </div>

            <div className="bg-primary-50 text-center rounded-2xl shadow-sm border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:border-secondary-800 hover:-translate-y-2 hover:shadow-lg hover:bg-white md:px-6 md:py-8">
              <Trophy className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.15)]" size={40} strokeWidth={1.5} />
              <h4 className="text-primary-900 text-[1.4rem] font-bold m-0 mb-3 md:text-xl">
                Excelencia
              </h4>
              <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
                Buscamos la perfección en cada detalle de nuestro servicio
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative overflow-hidden bg-gradient-primary rounded-[20px] px-12 py-12 md:px-6 md:py-8">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.05) 0%, transparent 100%)' }} />

          <h3 className="relative text-white text-4xl font-bold text-center m-0 mb-10 md:text-2xl md:mb-8">
            Nuestros Logros
          </h3>

          <div className="relative grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 md:grid-cols-1 md:gap-6">
            <div className="bg-white text-center rounded-2xl shadow-md border-2 border-transparent px-10 py-12 transition-all duration-[400ms] ease-smooth hover:-translate-y-1 hover:shadow-xl hover:border-accent-400 md:px-6 md:py-8">
              <span className="block text-[3.5rem] font-black tracking-tight mb-3 md:text-[2.5rem]" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                13+
              </span>
              <span className="block text-primary-800 text-[1.05rem] font-semibold">
                Años de Experiencia
              </span>
            </div>

            <div className="bg-white text-center rounded-2xl shadow-md border-2 border-transparent px-10 py-12 transition-all duration-[400ms] ease-smooth hover:-translate-y-1 hover:shadow-xl hover:border-accent-400 md:px-6 md:py-8">
              <span className="block text-[3.5rem] font-black tracking-tight mb-3 md:text-[2.5rem]" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                15,000+
              </span>
              <span className="block text-primary-800 text-[1.05rem] font-semibold">
                Clientes Satisfechos
              </span>
            </div>

            <div className="bg-white text-center rounded-2xl shadow-md border-2 border-transparent px-10 py-12 transition-all duration-[400ms] ease-smooth hover:-translate-y-1 hover:shadow-xl hover:border-accent-400 md:px-6 md:py-8">
              <span className="block text-[3.5rem] font-black tracking-tight mb-3 md:text-[2.5rem]" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                8
              </span>
              <span className="block text-primary-800 text-[1.05rem] font-semibold">
                Sucursales en Chile
              </span>
            </div>

            <div className="bg-white text-center rounded-2xl shadow-md border-2 border-transparent px-10 py-12 transition-all duration-[400ms] ease-smooth hover:-translate-y-1 hover:shadow-xl hover:border-accent-400 md:px-6 md:py-8">
              <span className="block text-[3.5rem] font-black tracking-tight mb-3 md:text-[2.5rem]" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                98%
              </span>
              <span className="block text-primary-800 text-[1.05rem] font-semibold">
                Satisfacción del Cliente
              </span>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-12 py-12 md:px-6 md:py-8">
          <h3 className="text-primary-900 text-4xl font-bold tracking-tight text-center m-0 mb-10 md:text-2xl md:mb-8">
            Nuestro Equipo
          </h3>
          <p className="text-primary-500 text-center text-[1.1rem] leading-[1.8] max-w-[850px] mx-auto mb-10 md:text-base">
            Contamos con un equipo de más de 100 profesionales especializados en
            ventas, financiamiento, servicio técnico y atención al cliente,
            todos dedicados a brindarte la mejor experiencia posible.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 md:grid-cols-1">
            <div className="flex items-center gap-5 bg-primary-50 rounded-xl border-2 border-transparent px-7 py-7 transition-all duration-300 ease-smooth hover:bg-white hover:translate-x-2 hover:border-secondary-800 hover:shadow-md md:px-6">
              <CheckCircle className="text-[#10b981] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]" size={24} strokeWidth={2} />
              <p className="text-primary-800 text-[15px] font-medium leading-relaxed m-0">
                Asesores certificados y capacitados constantemente
              </p>
            </div>

            <div className="flex items-center gap-5 bg-primary-50 rounded-xl border-2 border-transparent px-7 py-7 transition-all duration-300 ease-smooth hover:bg-white hover:translate-x-2 hover:border-secondary-800 hover:shadow-md md:px-6">
              <CheckCircle className="text-[#10b981] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]" size={24} strokeWidth={2} />
              <p className="text-primary-800 text-[15px] font-medium leading-relaxed m-0">
                Técnicos especializados con certificación de fábrica
              </p>
            </div>

            <div className="flex items-center gap-5 bg-primary-50 rounded-xl border-2 border-transparent px-7 py-7 transition-all duration-300 ease-smooth hover:bg-white hover:translate-x-2 hover:border-secondary-800 hover:shadow-md md:px-6">
              <CheckCircle className="text-[#10b981] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]" size={24} strokeWidth={2} />
              <p className="text-primary-800 text-[15px] font-medium leading-relaxed m-0">
                Ejecutivos de financiamiento expertos
              </p>
            </div>

            <div className="flex items-center gap-5 bg-primary-50 rounded-xl border-2 border-transparent px-7 py-7 transition-all duration-300 ease-smooth hover:bg-white hover:translate-x-2 hover:border-secondary-800 hover:shadow-md md:px-6">
              <CheckCircle className="text-[#10b981] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]" size={24} strokeWidth={2} />
              <p className="text-primary-800 text-[15px] font-medium leading-relaxed m-0">
                Atención personalizada y seguimiento post-venta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
