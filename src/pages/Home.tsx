import { CheckCircle, DollarSign, Wrench, FileText } from 'lucide-react';
import './Home.css';

interface Vehicle {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: string;
  image: string;
  type: string;
  features: string[];
}

function Home() {
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Camry Hybrid',
      brand: 'Toyota',
      year: 2024,
      price: '$32.990.000',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
      type: 'Sedán',
      features: ['Híbrido', 'Automático', 'Full Equipo']
    },
    {
      id: 2,
      name: 'Mustang GT',
      brand: 'Ford',
      year: 2024,
      price: '$45.990.000',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop',
      type: 'Deportivo',
      features: ['V8', '450 HP', 'Manual']
    },
    {
      id: 3,
      name: 'CX-5',
      brand: 'Mazda',
      year: 2024,
      price: '$28.990.000',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&fit=crop',
      type: 'SUV',
      features: ['AWD', 'Automático', 'Cuero']
    },
    {
      id: 4,
      name: 'Model 3',
      brand: 'Tesla',
      year: 2024,
      price: '$38.990.000',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
      type: 'Eléctrico',
      features: ['100% Eléctrico', 'Autopilot', 'Long Range']
    },
    {
      id: 5,
      name: 'Tucson',
      brand: 'Hyundai',
      year: 2024,
      price: '$26.990.000',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop',
      type: 'SUV',
      features: ['Turbo', 'Automático', 'Panorámico']
    },
    {
      id: 6,
      name: 'Civic Type R',
      brand: 'Honda',
      year: 2024,
      price: '$42.990.000',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop',
      type: 'Deportivo',
      features: ['Turbo', '315 HP', 'Manual']
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h2>Encuentra tu Vehículo Ideal</h2>
        <p>Ofrecemos los mejores vehículos nuevos y seminuevos del mercado</p>
      </section>

      <section className="featured">
        <div className="promo-badge">OFERTA ESPECIAL</div>
        <h3>Vehículo Destacado del Mes</h3>
        <div className="featured-vehicle">
          <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop" alt="Featured" />
          <div className="featured-info">
            <h4>BMW X5 2024</h4>
            <p className="featured-price">$52.990.000</p>
            <p className="featured-description">
              SUV Premium con tecnología de punta, motor V6 turbo,
              interior de lujo y sistema de conducción autónoma nivel 2.
            </p>
            <button className="btn-primary">Ver Detalles</button>
          </div>
        </div>
      </section>

      <section className="vehicles-section">
        <h3>Nuestro Catálogo</h3>
        <div className="vehicles-grid">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image">
                <img src={vehicle.image} alt={vehicle.name} />
                <span className="vehicle-type">{vehicle.type}</span>
              </div>
              <div className="vehicle-info">
                <h4>{vehicle.brand} {vehicle.name}</h4>
                <p className="vehicle-year">Año {vehicle.year}</p>
                <div className="vehicle-features">
                  {vehicle.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="vehicle-footer">
                  <span className="vehicle-price">{vehicle.price}</span>
                  <button className="btn-secondary">Ver Más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits">
        <h3>¿Por qué elegirnos?</h3>
        <div className="benefits-grid">
          <div className="benefit-card">
            <CheckCircle className="benefit-icon" size={48} strokeWidth={1.5} />
            <h4>Garantía Certificada</h4>
            <p>Todos nuestros vehículos incluyen garantía de fábrica</p>
          </div>
          <div className="benefit-card">
            <DollarSign className="benefit-icon" size={48} strokeWidth={1.5} />
            <h4>Financiamiento</h4>
            <p>Planes de financiamiento flexibles hasta 60 meses</p>
          </div>
          <div className="benefit-card">
            <Wrench className="benefit-icon" size={48} strokeWidth={1.5} />
            <h4>Servicio Post-Venta</h4>
            <p>Mantenimiento y repuestos originales</p>
          </div>
          <div className="benefit-card">
            <FileText className="benefit-icon" size={48} strokeWidth={1.5} />
            <h4>Documentación</h4>
            <p>Gestión completa de trámites y documentos</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
