import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Info, Phone } from 'lucide-react';

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-primary-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-primary shadow-lg px-8 py-10 text-center md:px-4 md:py-7">
        {/* Decorative overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%)' }} />

        <h1 className="relative m-0 text-white text-[2.75rem] font-extrabold tracking-tight leading-tight md:text-2xl" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
          AutoVentas Premium
        </h1>
        <p className="relative mt-3 text-accent-400 text-[1.15rem] font-medium tracking-wide md:text-sm">
          Tu vehículo ideal te espera
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 py-12 pb-28 md:px-4 md:py-6 md:pb-24">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] flex justify-around items-center bg-white border-t-[3px] border-accent-400 shadow-[0_-4px_24px_rgba(15,23,42,0.15)] backdrop-blur-[10px] px-2 py-3 md:py-2">
        <Link
          to="/"
          className={`flex flex-col items-center min-w-[85px] px-6 py-3 rounded-xl transition-all duration-300 ease-smooth md:min-w-[70px] md:px-2 md:py-2 md:rounded-lg ${
            location.pathname === '/'
              ? 'bg-gradient-primary text-white shadow-md'
              : 'text-primary-500 hover:bg-secondary-50 hover:text-secondary-800 hover:-translate-y-1'
          }`}
        >
          <Home
            className={`mb-[0.35rem] transition-all duration-300 ease-smooth md:mb-1 ${
              location.pathname === '/' ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110'
            }`}
            size={24}
          />
          <span className="text-sm font-semibold tracking-tight md:text-[0.7rem]">Inicio</span>
        </Link>

        <Link
          to="/quienes-somos"
          className={`flex flex-col items-center min-w-[85px] px-6 py-3 rounded-xl transition-all duration-300 ease-smooth md:min-w-[70px] md:px-2 md:py-2 md:rounded-lg ${
            location.pathname === '/quienes-somos'
              ? 'bg-gradient-primary text-white shadow-md'
              : 'text-primary-500 hover:bg-secondary-50 hover:text-secondary-800 hover:-translate-y-1'
          }`}
        >
          <Info
            className={`mb-[0.35rem] transition-all duration-300 ease-smooth md:mb-1 ${
              location.pathname === '/quienes-somos' ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110'
            }`}
            size={24}
          />
          <span className="text-sm font-semibold tracking-tight md:text-[0.7rem]">Quiénes Somos</span>
        </Link>

        <Link
          to="/contactanos"
          className={`flex flex-col items-center min-w-[85px] px-6 py-3 rounded-xl transition-all duration-300 ease-smooth md:min-w-[70px] md:px-2 md:py-2 md:rounded-lg ${
            location.pathname === '/contactanos'
              ? 'bg-gradient-primary text-white shadow-md'
              : 'text-primary-500 hover:bg-secondary-50 hover:text-secondary-800 hover:-translate-y-1'
          }`}
        >
          <Phone
            className={`mb-[0.35rem] transition-all duration-300 ease-smooth md:mb-1 ${
              location.pathname === '/contactanos' ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110'
            }`}
            size={24}
          />
          <span className="text-sm font-semibold tracking-tight md:text-[0.7rem]">Contáctanos</span>
        </Link>
      </nav>
    </div>
  );
}

export default Layout;
