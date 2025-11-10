import { CheckCircle, DollarSign, Wrench, FileText } from 'lucide-react';
import { useVehicleCatalog } from '../hooks/useVehicleCatalog';

function VehicleCatalog() {
  const { catalogVehicles, featuredVehicle } = useVehicleCatalog();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white rounded-[20px] text-center shadow-lg border border-secondary-100 px-10 py-16 mb-10 md:px-6 md:py-8">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />

        <h2 className="text-primary-900 text-5xl font-extrabold tracking-tight leading-tight m-0 mb-4 md:text-[1.75rem]">
          Encuentra tu Vehículo Ideal
        </h2>
        <p className="text-primary-500 text-xl font-medium m-0 md:text-base">
          Ofrecemos los mejores vehículos nuevos y seminuevos del mercado
        </p>
      </section>

      {/* Featured Vehicle Section */}
      <section className="relative bg-white rounded-[20px] shadow-lg border border-secondary-100 px-10 py-10 mb-10 md:px-6">
        <div className="absolute -top-3 right-6 bg-gradient-accent text-primary-900 font-extrabold uppercase text-sm tracking-widest shadow-md rounded-full px-7 py-[0.6rem]">
          OFERTA ESPECIAL
        </div>

        <h3 className="text-primary-900 text-[2rem] font-bold m-0 mb-8 md:text-2xl">
          Vehículo Destacado del Mes
        </h3>

        <div className="grid grid-cols-2 gap-10 items-center md:grid-cols-1 md:gap-6">
          <img
            src={featuredVehicle.image}
            alt="Featured"
            className="w-full h-[350px] object-cover rounded-2xl shadow-md transition-transform duration-[400ms] ease-smooth hover:scale-[1.02] md:h-[220px]"
          />

          <div>
            <h4 className="text-primary-900 text-4xl font-extrabold m-0 mb-3 md:text-2xl">
              {featuredVehicle.name}
            </h4>
            <p
              className="text-[2.5rem] font-extrabold mb-5 md:text-[1.75rem]"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {featuredVehicle.price}
            </p>
            <p className="text-primary-500 text-[1.05rem] leading-relaxed mb-8 md:text-[0.95rem]">
              {featuredVehicle.description}
            </p>
            <button className="bg-gradient-primary text-white font-bold rounded-xl px-5 py-[0.65rem] shadow-md transition-all duration-300 ease-smooth border-none cursor-pointer text-[0.95rem] tracking-wide hover:-translate-y-1 hover:shadow-xl">
              Ver Detalles
            </button>
          </div>
        </div>
      </section>

      {/* Vehicles Catalog Section */}
      <section className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-10 py-10 mb-10 md:px-6">
        <h3 className="text-primary-900 text-[2rem] font-bold m-0 mb-8 md:text-2xl">
          Nuestro Catálogo
        </h3>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 md:grid-cols-1 md:gap-6">
          {catalogVehicles.map(vehicle => (
            <div
              key={vehicle.id}
              className="bg-primary-50 rounded-2xl overflow-hidden shadow-sm border-2 border-transparent transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-secondary-800"
            >
              {/* Vehicle Image */}
              <div className="relative h-[220px] overflow-hidden bg-primary-900">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-[400ms] ease-smooth group-hover:scale-110"
                  style={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.12)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span className="absolute top-3 right-3 bg-gradient-accent text-primary-900 font-bold uppercase text-xs tracking-wide shadow-md rounded-full px-4 py-[0.4rem]">
                  {vehicle.type}
                </span>
              </div>

              {/* Vehicle Info */}
              <div className="bg-white px-7 py-7 md:px-5">
                <h4 className="text-primary-900 text-[1.4rem] font-bold m-0 mb-2 md:text-xl">
                  {vehicle.brand} {vehicle.name}
                </h4>
                <p className="text-primary-500 text-[0.95rem] font-medium m-0 mb-4">
                  Año {vehicle.year}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {vehicle.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-secondary-50 text-secondary-800 border border-secondary-200 text-xs font-semibold rounded-full px-[0.85rem] py-[0.35rem]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-5 border-t-2 border-primary-100">
                  <span className="text-secondary-800 text-[1.6rem] font-extrabold md:text-[1.35rem]">
                    {vehicle.price}
                  </span>
                  <button className="bg-transparent text-secondary-800 font-bold border-2 border-secondary-800 rounded-xl px-5 py-[0.65rem] cursor-pointer transition-all duration-300 ease-smooth text-[0.95rem] tracking-wide hover:bg-secondary-800 hover:text-white hover:shadow-md md:px-4 md:py-[0.6rem] md:text-sm">
                    Ver Más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-gradient-primary rounded-[20px] shadow-xl px-10 py-12 md:px-6 md:py-8">
        {/* Decorative overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.05) 0%, transparent 100%)' }} />

        <h3 className="relative text-white text-[2rem] font-bold text-center m-0 mb-10 md:text-2xl">
          ¿Por qué elegirnos?
        </h3>

        <div className="relative grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 md:grid-cols-1 md:gap-6">
          <div className="text-center bg-white rounded-2xl shadow-md border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-accent-400 md:px-6 md:py-8">
            <CheckCircle
              className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]"
              size={48}
              strokeWidth={1.5}
            />
            <h4 className="text-primary-900 text-[1.3rem] font-bold m-0 mb-3 md:text-[1.15rem]">
              Garantía Certificada
            </h4>
            <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
              Todos nuestros vehículos incluyen garantía de fábrica
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl shadow-md border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-accent-400 md:px-6 md:py-8">
            <DollarSign
              className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]"
              size={48}
              strokeWidth={1.5}
            />
            <h4 className="text-primary-900 text-[1.3rem] font-bold m-0 mb-3 md:text-[1.15rem]">
              Financiamiento
            </h4>
            <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
              Planes de financiamiento flexibles hasta 60 meses
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl shadow-md border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-accent-400 md:px-6 md:py-8">
            <Wrench
              className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]"
              size={48}
              strokeWidth={1.5}
            />
            <h4 className="text-primary-900 text-[1.3rem] font-bold m-0 mb-3 md:text-[1.15rem]">
              Servicio Post-Venta
            </h4>
            <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
              Mantenimiento y repuestos originales
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl shadow-md border-2 border-transparent px-8 py-10 transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-accent-400 md:px-6 md:py-8">
            <FileText
              className="block mx-auto mb-5 text-secondary-800 drop-shadow-[0_2px_4px_rgba(30,64,175,0.2)]"
              size={48}
              strokeWidth={1.5}
            />
            <h4 className="text-primary-900 text-[1.3rem] font-bold m-0 mb-3 md:text-[1.15rem]">
              Documentación
            </h4>
            <p className="text-primary-500 text-[0.95rem] leading-relaxed m-0">
              Gestión completa de trámites y documentos
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VehicleCatalog;
