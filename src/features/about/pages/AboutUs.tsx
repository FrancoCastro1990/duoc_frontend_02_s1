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
import { PageHero, FeatureCard, StatCard } from '@/features/shared';

function AboutUs() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <PageHero
        title="Sobre Nosotros"
        subtitle="Tu socio confiable en la compra de vehículos"
        variant="gradient-overlay"
        alignment="center"
      />

      {/* Content sections with gap */}
      <div className="flex flex-col gap-8 md:gap-10">
        {/* About Card - History */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-lg border border-secondary-100 grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1.5fr]">
          <div className="bg-primary-50 flex items-center justify-center p-6 sm:p-8">
            <img src={logo} alt="Nuestra empresa" className="w-full h-auto object-contain min-h-[220px] max-h-[280px] sm:max-h-[320px] lg:max-h-[350px]" />
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <h3 className="text-primary-900 text-[1.75rem] font-bold m-0 mb-5 sm:text-2xl md:text-3xl lg:text-4xl lg:mb-6">
              Nuestra Historia
            </h3>
            <p className="text-primary-500 text-[0.95rem] leading-[1.8] mb-4 sm:text-base md:text-[1.05rem] md:mb-5">
              Fundada en 2010, <strong>AutoVentas Premium</strong> nació con la
              visión de revolucionar la experiencia de compra de vehículos en
              Chile. Con más de 13 años de experiencia en el mercado automotriz,
              nos hemos convertido en uno de los distribuidores más confiables y
              reconocidos del país.
            </p>
            <p className="text-primary-500 text-[0.95rem] leading-[1.8] m-0 sm:text-base md:text-[1.05rem]">
              Comenzamos con un pequeño lote en Santiago y hoy contamos con
              múltiples sucursales a lo largo del país, sirviendo a miles de
              clientes satisfechos que confían en nuestra calidad y servicio
              profesional.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="relative bg-white rounded-[20px] shadow-lg border-2 border-transparent px-6 py-6 transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-secondary-800 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <Target className="block mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)] sm:mb-6" size={48} strokeWidth={1.5} />
            <h3 className="text-primary-900 text-xl font-bold m-0 mb-4 sm:text-2xl md:text-[1.75rem] md:mb-5">
              Nuestra Misión
            </h3>
            <p className="text-primary-500 text-[0.95rem] leading-[1.8] m-0 sm:text-base md:text-[1.05rem]">
              Proporcionar a nuestros clientes vehículos de la más alta calidad,
              con un servicio personalizado y transparente, garantizando una
              experiencia de compra excepcional desde el primer contacto hasta
              el post-venta.
            </p>
          </div>

          <div className="relative bg-white rounded-[20px] shadow-lg border-2 border-transparent px-6 py-6 transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-secondary-800 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <Telescope className="block mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)] sm:mb-6" size={48} strokeWidth={1.5} />
            <h3 className="text-primary-900 text-xl font-bold m-0 mb-4 sm:text-2xl md:text-[1.75rem] md:mb-5">
              Nuestra Visión
            </h3>
            <p className="text-primary-500 text-[0.95rem] leading-[1.8] m-0 sm:text-base md:text-[1.05rem]">
              Ser la empresa líder en ventas de vehículos en Chile para 2030,
              reconocida por nuestra innovación, compromiso con la satisfacción
              del cliente y responsabilidad ambiental, expandiendo nuestra
              presencia a nivel latinoamericano.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <h3 className="text-primary-900 text-2xl font-bold tracking-tight text-center m-0 mb-8 sm:text-3xl md:text-4xl md:mb-10">
            Nuestros Valores
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <FeatureCard
              icon={<Handshake size={40} strokeWidth={1.5} />}
              title="Confianza"
              description="Construimos relaciones duraderas basadas en la honestidad y transparencia"
              variant="light"
            />

            <FeatureCard
              icon={<Star size={40} strokeWidth={1.5} />}
              title="Calidad"
              description="Solo ofrecemos vehículos certificados que cumplen los más altos estándares"
              variant="light"
            />

            <FeatureCard
              icon={<Lightbulb size={40} strokeWidth={1.5} />}
              title="Innovación"
              description="Constantemente mejoramos nuestros procesos para ofrecer mejor servicio"
              variant="light"
            />

            <FeatureCard
              icon={<Leaf size={40} strokeWidth={1.5} />}
              title="Sostenibilidad"
              description="Comprometidos con el medio ambiente y vehículos eco-amigables"
              variant="light"
            />

            <FeatureCard
              icon={<Users size={40} strokeWidth={1.5} />}
              title="Orientación al Cliente"
              description="El cliente es el centro de todas nuestras decisiones y acciones"
              variant="light"
            />

            <FeatureCard
              icon={<Trophy size={40} strokeWidth={1.5} />}
              title="Excelencia"
              description="Buscamos la perfección en cada detalle de nuestro servicio"
              variant="light"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative overflow-hidden bg-gradient-primary rounded-[20px] px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.05) 0%, transparent 100%)' }} />

          <h3 className="relative text-white text-2xl font-bold text-center m-0 mb-8 sm:text-3xl md:text-4xl md:mb-10">
            Nuestros Logros
          </h3>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <StatCard
              value="13+"
              label="Años de Experiencia"
            />

            <StatCard
              value="15,000+"
              label="Clientes Satisfechos"
            />

            <StatCard
              value="8"
              label="Sucursales en Chile"
            />

            <StatCard
              value="98%"
              label="Satisfacción del Cliente"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <h3 className="text-primary-900 text-2xl font-bold tracking-tight text-center m-0 mb-8 sm:text-3xl md:text-4xl md:mb-10">
            Nuestro Equipo
          </h3>
          <p className="text-primary-500 text-center text-base leading-[1.8] max-w-[850px] mx-auto mb-8 sm:text-[1.05rem] md:text-[1.1rem] md:mb-10">
            Contamos con un equipo de más de 100 profesionales especializados en
            ventas, financiamiento, servicio técnico y atención al cliente,
            todos dedicados a brindarte la mejor experiencia posible.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-6">
            <div className="flex items-center gap-4 bg-primary-50 rounded-xl border-2 border-transparent px-5 py-5 transition-all duration-300 ease-smooth hover:bg-white hover:translate-x-2 hover:border-secondary-800 hover:shadow-md sm:gap-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
              <CheckCircle className="text-[#10b981] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]" size={24} strokeWidth={2} />
              <p className="text-primary-800 text-[14px] font-medium leading-relaxed m-0 sm:text-[15px]">
                Asesores certificados y capacitados constantemente
              </p>
            </div>

            <div className="flex items-center gap-4 bg-primary-50 rounded-xl border-2 border-transparent px-5 py-5 transition-all duration-300 ease-smooth hover:bg-white hover:translate-x-2 hover:border-secondary-800 hover:shadow-md sm:gap-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
              <CheckCircle className="text-[#10b981] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]" size={24} strokeWidth={2} />
              <p className="text-primary-800 text-[14px] font-medium leading-relaxed m-0 sm:text-[15px]">
                Técnicos especializados con certificación de fábrica
              </p>
            </div>

            <div className="flex items-center gap-4 bg-primary-50 rounded-xl border-2 border-transparent px-5 py-5 transition-all duration-300 ease-smooth hover:bg-white hover:translate-x-2 hover:border-secondary-800 hover:shadow-md sm:gap-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
              <CheckCircle className="text-[#10b981] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]" size={24} strokeWidth={2} />
              <p className="text-primary-800 text-[14px] font-medium leading-relaxed m-0 sm:text-[15px]">
                Ejecutivos de financiamiento expertos
              </p>
            </div>

            <div className="flex items-center gap-4 bg-primary-50 rounded-xl border-2 border-transparent px-5 py-5 transition-all duration-300 ease-smooth hover:bg-white hover:translate-x-2 hover:border-secondary-800 hover:shadow-md sm:gap-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
              <CheckCircle className="text-[#10b981] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]" size={24} strokeWidth={2} />
              <p className="text-primary-800 text-[14px] font-medium leading-relaxed m-0 sm:text-[15px]">
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
