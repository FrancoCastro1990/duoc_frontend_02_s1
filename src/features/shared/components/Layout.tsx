import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Info, Phone, PlusCircle, List, ShoppingCart } from 'lucide-react';
import { FloatingMenu, type MenuItem } from '@/features/floating-menu';

function Layout() {
  const location = useLocation();

  // Define menu items for FloatingMenu
  const menuItems: MenuItem[] = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/quienes-somos', icon: Info, label: 'Quiénes Somos' },
    { path: '/contactanos', icon: Phone, label: 'Contáctanos' },
    { path: '/agregar-vehiculo', icon: PlusCircle, label: 'Agregar' },
    { path: '/inventario', icon: List, label: 'Inventario' },
    { path: '/posibles-compras', icon: ShoppingCart, label: 'Posibles Compras' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-primary-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-primary shadow-lg px-4 py-6 text-center md:px-6 md:py-8 lg:px-8 lg:py-10">
        {/* Decorative overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%)' }} />

        <h1 className="relative m-0 text-white text-2xl font-extrabold tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-5xl" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
          AutoVentas Premium
        </h1>
        <p className="relative mt-2 text-accent-400 text-sm font-medium tracking-wide sm:mt-3 md:text-base lg:text-lg">
          Tu vehículo ideal te espera
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 py-6 pb-24 md:py-8 md:pb-28 lg:py-12">
        <Outlet />
      </main>

      {/* Floating Menu - Mobile Only */}
      <FloatingMenu items={menuItems} />

      {/* Bottom Navigation - Desktop Only */}
      <nav className="hidden md:flex fixed bottom-0 left-0 right-0 z-[100] justify-around items-center bg-white border-t-[3px] border-accent-400 shadow-[0_-4px_24px_rgba(15,23,42,0.15)] backdrop-blur-[10px] px-2 py-2 lg:py-3">
        <Link
          to="/"
          className={`flex flex-col items-center min-w-[70px] px-2 py-2 rounded-lg transition-all duration-300 ease-smooth lg:min-w-[85px] lg:px-4 lg:py-3 lg:rounded-xl ${
            location.pathname === '/'
              ? 'bg-gradient-primary text-white shadow-md'
              : 'text-primary-500 hover:bg-secondary-50 hover:text-secondary-800 hover:-translate-y-1'
          }`}
        >
          <Home
            className={`mb-1 transition-all duration-300 ease-smooth lg:mb-[0.35rem] ${
              location.pathname === '/' ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110'
            }`}
            size={24}
          />
          <span className="text-[0.7rem] font-semibold tracking-tight lg:text-sm">Inicio</span>
        </Link>

        <Link
          to="/quienes-somos"
          className={`flex flex-col items-center min-w-[70px] px-2 py-2 rounded-lg transition-all duration-300 ease-smooth lg:min-w-[85px] lg:px-4 lg:py-3 lg:rounded-xl ${
            location.pathname === '/quienes-somos'
              ? 'bg-gradient-primary text-white shadow-md'
              : 'text-primary-500 hover:bg-secondary-50 hover:text-secondary-800 hover:-translate-y-1'
          }`}
        >
          <Info
            className={`mb-1 transition-all duration-300 ease-smooth lg:mb-[0.35rem] ${
              location.pathname === '/quienes-somos' ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110'
            }`}
            size={24}
          />
          <span className="text-[0.7rem] font-semibold tracking-tight lg:text-sm">Quiénes Somos</span>
        </Link>

        <Link
          to="/contactanos"
          className={`flex flex-col items-center min-w-[70px] px-2 py-2 rounded-lg transition-all duration-300 ease-smooth lg:min-w-[85px] lg:px-4 lg:py-3 lg:rounded-xl ${
            location.pathname === '/contactanos'
              ? 'bg-gradient-primary text-white shadow-md'
              : 'text-primary-500 hover:bg-secondary-50 hover:text-secondary-800 hover:-translate-y-1'
          }`}
        >
          <Phone
            className={`mb-1 transition-all duration-300 ease-smooth lg:mb-[0.35rem] ${
              location.pathname === '/contactanos' ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110'
            }`}
            size={24}
          />
          <span className="text-[0.7rem] font-semibold tracking-tight lg:text-sm">Contáctanos</span>
        </Link>

        <Link
          to="/agregar-vehiculo"
          className={`flex flex-col items-center min-w-[70px] px-2 py-2 rounded-lg transition-all duration-300 ease-smooth lg:min-w-[85px] lg:px-4 lg:py-3 lg:rounded-xl ${
            location.pathname === '/agregar-vehiculo'
              ? 'bg-gradient-primary text-white shadow-md'
              : 'text-primary-500 hover:bg-secondary-50 hover:text-secondary-800 hover:-translate-y-1'
          }`}
        >
          <PlusCircle
            className={`mb-1 transition-all duration-300 ease-smooth lg:mb-[0.35rem] ${
              location.pathname === '/agregar-vehiculo' ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110'
            }`}
            size={24}
          />
          <span className="text-[0.7rem] font-semibold tracking-tight lg:text-sm">Agregar</span>
        </Link>

        <Link
          to="/inventario"
          className={`flex flex-col items-center min-w-[70px] px-2 py-2 rounded-lg transition-all duration-300 ease-smooth lg:min-w-[85px] lg:px-4 lg:py-3 lg:rounded-xl ${
            location.pathname === '/inventario'
              ? 'bg-gradient-primary text-white shadow-md'
              : 'text-primary-500 hover:bg-secondary-50 hover:text-secondary-800 hover:-translate-y-1'
          }`}
        >
          <List
            className={`mb-1 transition-all duration-300 ease-smooth lg:mb-[0.35rem] ${
              location.pathname === '/inventario' ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110'
            }`}
            size={24}
          />
          <span className="text-[0.7rem] font-semibold tracking-tight lg:text-sm">Inventario</span>
        </Link>

        <Link
          to="/posibles-compras"
          className={`flex flex-col items-center min-w-[70px] px-2 py-2 rounded-lg transition-all duration-300 ease-smooth lg:min-w-[85px] lg:px-4 lg:py-3 lg:rounded-xl ${
            location.pathname === '/posibles-compras'
              ? 'bg-gradient-primary text-white shadow-md'
              : 'text-primary-500 hover:bg-secondary-50 hover:text-secondary-800 hover:-translate-y-1'
          }`}
        >
          <ShoppingCart
            className={`mb-1 transition-all duration-300 ease-smooth lg:mb-[0.35rem] ${
              location.pathname === '/posibles-compras' ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110'
            }`}
            size={24}
          />
          <span className="text-[0.7rem] font-semibold tracking-tight lg:text-sm">Posibles</span>
        </Link>
      </nav>
    </div>
  );
}

export default Layout;
