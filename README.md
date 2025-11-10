# AutoVentas Premium

## Descripción

Aplicación web de comercio electrónico para la venta de vehículos nuevos y seminuevos. El proyecto implementa una arquitectura basada en features (Screaming Architecture) con gestión de estado global mediante Context API, navegación client-side con React Router, y un sistema de componentes reutilizables con TypeScript estricto.

La aplicación incluye funcionalidades CRUD completas para gestión de inventario, formularios con validación en tiempo real, tabla de inventario con sorting y búsqueda, y un sistema de navegación dual adaptativo (menú flotante radial para móviles, navegación fija para desktop).

## Tecnologías

- **React 19.1.1** - Biblioteca UI con hooks y Context API
- **TypeScript 5.9** - Tipado estático con strict mode
- **React Router DOM 7.x** - Navegación client-side declarativa
- **Vite 7.1** - Build tool y desarrollo con HMR
- **Tailwind CSS v4** - Framework utility-first con configuración CSS-first
- **PostCSS** - Procesamiento CSS con Autoprefixer
- **Lucide React** - Librería de iconos
- **Fontsource** - Sistema de tipografía (Montserrat Variable)

## Instalación y Ejecución

```bash
# Clonar repositorio
git clone <url-del-repositorio>
cd duoc_frontend_02_s1

# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Preview de producción
npm run preview

# Análisis estático con ESLint
npm run lint
```

## Arquitectura

### Screaming Architecture (Feature-Based)

El proyecto implementa una estructura organizacional basada en dominios de negocio:

```
src/
├── features/
│   ├── vehicles/              # Dominio de vehículos
│   │   ├── components/        # VehicleCard, VehicleList
│   │   ├── context/           # VehicleContext, VehicleProvider
│   │   ├── hooks/             # useVehicleCatalog
│   │   ├── pages/             # VehicleCatalog
│   │   ├── types/             # Vehicle interfaces
│   │   └── index.ts           # Public API
│   ├── add-vehicle/           # Formulario de creación
│   ├── vehicle-inventory/     # Tabla de inventario
│   ├── about/                 # Información corporativa
│   ├── contact/               # Formulario de contacto
│   ├── floating-menu/         # Navegación móvil
│   ├── possible-purchase/     # Lista de posibles compras
│   └── shared/                # Componentes reutilizables
│       └── components/        # Button, FormInput, Alert, etc.
├── main.tsx                   # Entry point + routing
└── index.css                  # Tailwind configuration
```

### Patrones Arquitectónicos

**Separation of Concerns**
- Custom hooks encapsulan lógica de negocio
- Componentes manejan exclusivamente presentación
- Context API como single source of truth para estado global

**Componentes Reutilizables**
- 11 componentes UI compartidos en `shared/components/`
- Reducción de código duplicado del 40-50%
- TypeScript interfaces exportadas para type safety

**Path Aliases**
- Configuración de alias `@` para imports absolutos
- Cross-feature: `import { useVehicles } from '@/features/vehicles'`
- Intra-feature: rutas relativas

**State Management**
- VehicleContext provee operaciones CRUD
- Custom hook `useVehicles()` como abstracción de consumo
- Estado tipado con interfaces TypeScript

**Routing**
- React Router 7.x con BrowserRouter
- Layout wrapper compartido con `<Outlet />`
- Navegación adaptativa según breakpoint responsive

### Flujo de Datos

```
VehicleProvider (main.tsx)
        ↓
  VehicleContext (global state)
        ↓
  useVehicles() hook
        ↓
  Feature-specific hooks (useVehicleCatalog, useAddVehicleForm, etc.)
        ↓
  Presentation components (UI only)
```

## Autor

Franco Castro Villanueva - Desarrollo Frontend II (PFY2202)
