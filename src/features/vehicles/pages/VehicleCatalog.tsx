import { CheckCircle, DollarSign, Wrench, FileText, Heart } from 'lucide-react';
import { useVehicleCatalog } from '../hooks/useVehicleCatalog';
import { useVehicles } from '@/features/vehicles';
import { useVehicleDetail, VehicleDetailModal } from '@/features/vehicle-detail';
import { PageHero, Badge, Button, FeatureCard } from '@/features/shared';

function VehicleCatalog() {
  const { catalogVehicles, featuredVehicle } = useVehicleCatalog();
  const { markForPurchase, unmarkForPurchase, isMarkedForPurchase } = useVehicles();
  const { isOpen, selectedVehicle, openDetail, closeDetail } = useVehicleDetail();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <PageHero
        title="Encuentra tu Vehículo Ideal"
        subtitle="Ofrecemos los mejores vehículos nuevos y seminuevos del mercado"
        variant="white"
        alignment="center"
        showAccentBorder
      />

      {/* Featured Vehicle Section */}
      <section className="relative bg-white rounded-[20px] shadow-lg border border-secondary-100 px-6 py-8 mb-10 md:px-8 md:py-10 lg:px-10">
        <Badge
          variant="accent"
          size="md"
          className="absolute -top-3 right-4 shadow-md md:right-6"
        >
          OFERTA ESPECIAL
        </Badge>

        <h3 className="text-primary-900 text-xl font-bold m-0 mb-6 sm:text-2xl md:text-3xl lg:text-[2rem] lg:mb-8">
          Vehículo Destacado del Mes
        </h3>

        <div className="grid grid-cols-1 gap-6 items-center md:grid-cols-2 md:gap-8 lg:gap-10">
          <img
            src={featuredVehicle.image}
            alt="Featured"
            className="w-full h-[220px] object-cover rounded-2xl shadow-md transition-transform duration-[400ms] ease-smooth hover:scale-[1.02] sm:h-[280px] md:h-[300px] lg:h-[350px]"
          />

          <div>
            <h4 className="text-primary-900 text-2xl font-extrabold m-0 mb-3 sm:text-3xl lg:text-4xl">
              {featuredVehicle.name}
            </h4>
            <p
              className="text-[1.75rem] font-extrabold mb-4 sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] lg:mb-5"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {featuredVehicle.price}
            </p>
            <p className="text-primary-500 text-[0.95rem] leading-relaxed mb-6 sm:text-base md:text-[1.05rem] lg:mb-8">
              {featuredVehicle.description}
            </p>
            <Button
              variant="primary-gradient"
              onClick={() => openDetail({
                id: featuredVehicle.id,
                brand: featuredVehicle.brand,
                model: featuredVehicle.model,
                price: featuredVehicle.originalPrice,
                year: featuredVehicle.year,
                image: featuredVehicle.image,
                description: featuredVehicle.description
              })}
            >
              Ver Detalles
            </Button>
          </div>
        </div>
      </section>

      {/* Vehicles Catalog Section */}
      <section className="bg-white rounded-[20px] shadow-lg border border-secondary-100 px-6 py-8 mb-10 md:px-8 md:py-10 lg:px-10">
        <h3 className="text-primary-900 text-xl font-bold m-0 mb-6 sm:text-2xl md:text-3xl lg:text-[2rem] lg:mb-8">
          Nuestro Catálogo
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {catalogVehicles.map(vehicle => (
            <div
              key={vehicle.id}
              className="bg-primary-50 rounded-2xl overflow-hidden shadow-sm border-2 border-transparent transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-xl hover:border-secondary-800"
            >
              {/* Vehicle Image */}
              <div className="relative h-[220px] overflow-hidden bg-primary-900 sm:h-[200px] md:h-[220px]">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-[400ms] ease-smooth group-hover:scale-110"
                  style={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.12)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <Badge
                  variant="accent"
                  size="sm"
                  className="absolute top-3 right-3 shadow-md"
                >
                  {vehicle.type}
                </Badge>
              </div>

              {/* Vehicle Info */}
              <div className="bg-white px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
                <h4 className="text-primary-900 text-xl font-bold m-0 mb-2 md:text-[1.3rem] lg:text-[1.4rem]">
                  {vehicle.brand} {vehicle.name}
                </h4>
                <p className="text-primary-500 text-sm font-medium m-0 mb-4 md:text-[0.95rem]">
                  Año {vehicle.year}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {vehicle.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      size="xs"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-5 border-t-2 border-primary-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-secondary-800 text-[1.35rem] font-extrabold sm:text-[1.45rem] lg:text-[1.6rem]">
                      {vehicle.price}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="secondary"
                      fullWidth
                      onClick={() => openDetail({
                        id: vehicle.id,
                        brand: vehicle.brand,
                        model: vehicle.model,
                        price: vehicle.originalPrice,
                        year: vehicle.year,
                        image: vehicle.image,
                        description: vehicle.description
                      })}
                      className="flex-1"
                    >
                      Ver Más
                    </Button>
                    <button
                      onClick={() => {
                        if (isMarkedForPurchase(vehicle.id)) {
                          unmarkForPurchase(vehicle.id);
                        } else {
                          markForPurchase(vehicle.id);
                        }
                      }}
                      className={`flex-1 sm:flex-none flex items-center justify-center gap-2 font-bold border-2 rounded-xl px-4 py-[0.6rem] cursor-pointer transition-all duration-300 ease-smooth text-sm tracking-wide min-h-[44px] sm:min-h-0 md:px-5 md:py-[0.65rem] md:text-[0.95rem] ${
                        isMarkedForPurchase(vehicle.id)
                          ? 'bg-secondary-800 border-secondary-800 text-white hover:bg-secondary-900 hover:border-secondary-900'
                          : 'bg-transparent border-secondary-800 text-secondary-800 hover:bg-secondary-800 hover:text-white hover:shadow-md'
                      }`}
                    >
                      <Heart
                        className="w-4 h-4"
                        fill={isMarkedForPurchase(vehicle.id) ? 'currentColor' : 'none'}
                      />
                      {isMarkedForPurchase(vehicle.id) ? 'Marcado' : 'Marcar'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-gradient-primary rounded-[20px] shadow-xl px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        {/* Decorative overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.05) 0%, transparent 100%)' }} />

        <h3 className="relative text-white text-xl font-bold text-center m-0 mb-8 sm:text-2xl md:text-3xl lg:text-[2rem] lg:mb-10">
          ¿Por qué elegirnos?
        </h3>

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <FeatureCard
            icon={<CheckCircle size={48} strokeWidth={1.5} />}
            title="Garantía Certificada"
            description="Todos nuestros vehículos incluyen garantía de fábrica"
            variant="white"
          />

          <FeatureCard
            icon={<DollarSign size={48} strokeWidth={1.5} />}
            title="Financiamiento"
            description="Planes de financiamiento flexibles hasta 60 meses"
            variant="white"
          />

          <FeatureCard
            icon={<Wrench size={48} strokeWidth={1.5} />}
            title="Servicio Post-Venta"
            description="Mantenimiento y repuestos originales"
            variant="white"
          />

          <FeatureCard
            icon={<FileText size={48} strokeWidth={1.5} />}
            title="Documentación"
            description="Gestión completa de trámites y documentos"
            variant="white"
          />
        </div>
      </section>

      {/* Vehicle Detail Modal */}
      <VehicleDetailModal
        vehicle={selectedVehicle}
        isOpen={isOpen}
        onClose={closeDetail}
      />
    </div>
  );
}

export default VehicleCatalog;
