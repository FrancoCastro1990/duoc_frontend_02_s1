import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Info, Phone } from 'lucide-react';
import './Layout.css';

function Layout() {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <h1>AutoVentas Premium</h1>
        <p className="tagline">Tu vehículo ideal te espera</p>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <Link
          to="/"
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          <Home className="nav-icon" size={24} />
          <span className="nav-label">Inicio</span>
        </Link>
        <Link
          to="/quienes-somos"
          className={`nav-item ${location.pathname === '/quienes-somos' ? 'active' : ''}`}
        >
          <Info className="nav-icon" size={24} />
          <span className="nav-label">Quiénes Somos</span>
        </Link>
        <Link
          to="/contactanos"
          className={`nav-item ${location.pathname === '/contactanos' ? 'active' : ''}`}
        >
          <Phone className="nav-icon" size={24} />
          <span className="nav-label">Contáctanos</span>
        </Link>
      </nav>
    </div>
  );
}

export default Layout;
