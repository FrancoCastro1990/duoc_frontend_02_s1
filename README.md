# AutoVentas Premium - Sitio Web de Venta de Vehículos

Proyecto desarrollado para la **Evaluación Formativa 1** del curso **Desarrollo Frontend II (PFY2202)** - Semana 1

## Descripción del Proyecto

AutoVentas Premium es un sitio web moderno desarrollado con React que permite la venta de vehículos nuevos y seminuevos. El proyecto implementa navegación con React Router, gestión de estado global con Context API, y una arquitectura escalable basada en features de negocio (Screaming Architecture).

## Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript 5.9** - Superset de JavaScript con tipado estático
- **React Router DOM 7.x** - Librería para navegación y enrutamiento en React
- **Vite 7.1** - Build tool y servidor de desarrollo de última generación
- **Tailwind CSS v4** - Framework CSS utility-first con theme personalizado
- **PostCSS** - Procesador CSS con Autoprefixer
- **Lucide React** - Librería de iconos moderna
- **Montserrat Variable** - Tipografía profesional desde Fontsource

## Funcionalidades Implementadas

### ✅ Cumplimiento de Requisitos (100%)

**Criterio 1: Navegación con React Router (50 puntos)**
- ✓ React Router correctamente instalado y configurado
- ✓ Navegación funcional entre 5 páginas
- ✓ Menú de navegación inferior fijo y responsive
- ✓ Rutas configuradas con BrowserRouter
- ✓ Indicador visual de página activa

**Criterio 2: Componentes Frontend (50 puntos)**
- ✓ Página Home con catálogo completo de vehículos
- ✓ Página "Quiénes Somos" con información de la empresa
- ✓ Página "Contáctanos" con formulario funcional
- ✓ Layout consistente con header y navegación
- ✓ Diseño responsive y profesional

### Funcionalidades Adicionales

**Menú Flotante Radial (Mobile Only)** ✨ NUEVO
- ✓ Botón flotante circular en mobile con animación expandible
- ✓ Menú radial que se despliega en arco semi-circular hacia arriba
- ✓ 6 iconos circulares con navegación a diferentes secciones
- ✓ Animaciones suaves de apertura/cierre con backdrop blur
- ✓ Sombras premium para visibilidad sobre cualquier fondo
- ✓ Configurable vía props (rutas e iconos personalizables)
- ✓ Reemplazo de navegación inferior en mobile (desktop mantiene nav tradicional)

**Estado Global con Context API**
- ✓ VehicleContext implementado para gestión centralizada de vehículos
- ✓ CRUD completo: crear, leer, actualizar y eliminar vehículos
- ✓ Custom hook `useVehicles()` para consumir el contexto fácilmente
- ✓ 5 vehículos de ejemplo precargados
- ✓ TypeScript completamente tipado

**Screaming Architecture**
- ✓ Estructura organizada por features/dominios de negocio
- ✓ Separación clara: vehicles, about, contact, add-vehicle, vehicle-inventory, floating-menu, shared
- ✓ Cada feature es auto-contenida con sus componentes, tipos, hooks y páginas
- ✓ Barrel exports para importaciones limpias
- ✓ Escalabilidad mejorada para crecimiento futuro

**Custom Hooks para Separación de Lógica y UI**
- ✓ `useVehicleCatalog()` - Gestión de catálogo con transformación de datos
- ✓ `useContactForm()` - Gestión de formulario de contacto con validación
- ✓ `useAddVehicleForm()` - Gestión de formulario para agregar vehículos con validación completa
- ✓ `useVehicleInventory()` - Gestión de tabla de inventario con sorting y búsqueda
- ✓ `useFloatingMenu()` - Gestión de menú flotante con cálculos de posición radial ✨ NUEVO
- ✓ Separación completa entre lógica de negocio y presentación
- ✓ Hooks reutilizables y testables independientemente
- ✓ Integración con VehicleContext para fuente única de verdad

**Path Alias Configuration**
- ✓ Alias `@` configurado en TypeScript y Vite
- ✓ Imports limpios: `import { useVehicles } from '@/features/vehicles'`
- ✓ Mejor experiencia de desarrollo con autocompletado
- ✓ Rutas absolutas desde `src/` para imports cross-feature

### Páginas Desarrolladas

#### 1. Home (Página Principal) - `/`
- Banner hero con título y descripción
- Vehículo destacado del mes con oferta especial
- Catálogo de vehículos con:
  - Imágenes de alta calidad
  - Información detallada (marca, modelo, año, precio)
  - Características destacadas
  - Tipo de vehículo (Sedán, SUV, Deportivo, Eléctrico)
- Sección de beneficios (garantía, financiamiento, servicio, documentación)

#### 2. Quiénes Somos - `/quienes-somos`
- Historia de la empresa
- Misión y Visión corporativa
- 6 valores corporativos con iconografía
- Estadísticas de logros (años de experiencia, clientes, sucursales)
- Información del equipo profesional

#### 3. Contáctanos - `/contactanos`
- Formulario de contacto completo con validación
- Información de contacto (dirección, teléfonos, emails)
- Horarios de atención
- Enlaces a redes sociales
- Sección de ubicación
- Preguntas frecuentes (FAQ)

#### 4. Agregar Vehículo - `/agregar-vehiculo` ✨ NUEVO
- Formulario completo para agregar nuevos vehículos al inventario
- 6 campos: Marca, Modelo, Precio, Año, URL de Imagen, Descripción
- Validación en tiempo real:
  - Todos los campos requeridos
  - Precio debe ser mayor a 0
  - Año entre 1900-2030
- Integración con VehicleContext
- Mensaje de éxito y reset automático del formulario
- Estados de carga y disabled durante envío

#### 5. Inventario - `/inventario` ✨ NUEVO
- Tabla completa con todos los vehículos del inventario
- Columnas: Imagen, Marca, Modelo, Año, Precio, Acciones
- Características avanzadas:
  - **Búsqueda en tiempo real** por marca o modelo
  - **Ordenamiento** por cualquier columna (↑/↓)
  - **Eliminación** con confirmación inline
  - **Contador** de vehículos encontrados
  - **Formato** de precios en pesos chilenos
  - **Thumbnails** de imágenes
  - **Diseño responsive** con scroll horizontal en móvil
- Estados vacíos manejados elegantemente

### Características Técnicas

- **Navegación Dual Responsive** ✨ NUEVO
  - **Mobile**: Menú flotante radial con animación circular expandible
  - **Desktop**: Navegación inferior fija tradicional con backdrop blur
  - Ambos con indicador visual de página activa
- **Diseño responsive** - Mobile-first adaptable a móviles, tablets y desktop
- **Animaciones suaves** - Transiciones y efectos hover con utility classes
- **Tipado con TypeScript** - Mayor seguridad y mantenibilidad del código
- **Componentes reutilizables** - Arquitectura modular y escalable
- **Estado Global con Context API** - Gestión centralizada de vehículos con:
  - VehicleProvider para proveer estado global
  - Custom hook `useVehicles()` para consumir el contexto
  - CRUD completo: getVehicles, addVehicle, updateVehicle, deleteVehicle
  - TypeScript completamente tipado con interfaces Vehicle
  - 5 vehículos de ejemplo precargados
- **Custom Hooks para Separación de Lógica** - Patrón de separación de responsabilidades:
  - `useVehicleCatalog()` - Transformación de datos y lógica de catálogo
  - `useContactForm()` - Gestión de formulario con validación
  - `useAddVehicleForm()` - Gestión de formulario de agregar vehículo
  - `useVehicleInventory()` - Gestión de tabla con sorting y búsqueda
  - Componentes enfocados exclusivamente en presentación
  - Lógica de negocio reutilizable y testeable
  - Integración con VehicleContext para fuente única de verdad
- **Screaming Architecture** - Organización por features/dominios:
  - Features: vehicles, about, contact, add-vehicle, vehicle-inventory, floating-menu, shared
  - Cada feature auto-contenida con componentes, tipos, hooks, páginas
  - Barrel exports para API pública limpia
  - Path alias `@` para imports limpios
- **Tailwind CSS v4** - Sistema de diseño personalizado con:
  - Paleta de colores premium (Slate, Blue, Gold)
  - Gradientes personalizados para hero sections y CTAs
  - Sombras premium (`shadow-premium`, `shadow-glow`)
  - Animaciones custom (`animate-fade-in`, `animate-slide-in`)
  - Tipografía Montserrat Variable optimizada
- **CSS-first configuration** - Theme configurado con variables CSS nativas

## Estructura del Proyecto

El proyecto utiliza **Screaming Architecture** - una estructura organizada por features/dominios de negocio en lugar de capas técnicas:

```
duoc_frontend_02_s1/
├── src/
│   ├── features/
│   │   ├── vehicles/              # Feature de vehículos
│   │   │   ├── components/
│   │   │   │   ├── VehicleCard.tsx
│   │   │   │   ├── VehicleList.tsx
│   │   │   │   └── VehicleExample.tsx
│   │   │   ├── context/
│   │   │   │   ├── VehicleContext.tsx    # Contexto de vehículos
│   │   │   │   ├── VehicleProvider.tsx   # Provider con estado y CRUD
│   │   │   │   └── index.ts              # Barrel export
│   │   │   ├── hooks/
│   │   │   │   └── useVehicleCatalog.ts  # Hook para lógica del catálogo
│   │   │   ├── pages/
│   │   │   │   └── VehicleCatalog.tsx    # Página de catálogo (Home)
│   │   │   ├── types/
│   │   │   │   └── vehicle.ts            # Tipos TypeScript de vehículo
│   │   │   └── index.ts                  # Public API del feature
│   │   ├── about/                 # Feature de Quiénes Somos
│   │   │   ├── pages/
│   │   │   │   └── AboutUs.tsx
│   │   │   └── index.ts
│   │   ├── contact/               # Feature de Contacto
│   │   │   ├── hooks/
│   │   │   │   └── useContactForm.ts     # Hook para lógica del formulario
│   │   │   ├── pages/
│   │   │   │   └── Contact.tsx
│   │   │   └── index.ts
│   │   ├── add-vehicle/           # Feature de Agregar Vehículo ✨ NUEVO
│   │   │   ├── hooks/
│   │   │   │   └── useAddVehicleForm.ts  # Hook con validación y submit
│   │   │   ├── pages/
│   │   │   │   └── AddVehicle.tsx        # Formulario para agregar
│   │   │   └── index.ts
│   │   ├── vehicle-inventory/     # Feature de Inventario ✨ NUEVO
│   │   │   ├── hooks/
│   │   │   │   └── useVehicleInventory.ts # Hook con sorting y búsqueda
│   │   │   ├── pages/
│   │   │   │   └── VehicleInventory.tsx   # Tabla de inventario
│   │   │   └── index.ts
│   │   ├── floating-menu/         # Feature de Menú Flotante ✨ NUEVO
│   │   │   ├── components/
│   │   │   │   └── FloatingMenu.tsx       # Menú radial animado
│   │   │   ├── hooks/
│   │   │   │   └── useFloatingMenu.ts     # Hook con cálculos de posición
│   │   │   └── index.ts
│   │   └── shared/                # Componentes compartidos
│   │       ├── components/
│   │       │   ├── Layout.tsx
│   │       │   ├── ScrollToTop.tsx
│   │       │   └── TailwindExample.tsx
│   │       └── index.ts
│   ├── main.tsx                   # Punto de entrada con rutas y providers
│   └── index.css                  # Configuración Tailwind v4 + theme
├── vite.config.ts                 # Configuración Vite con path alias
├── tsconfig.app.json              # TypeScript config con path alias
├── tailwind.config.js             # Configuración mínima de Tailwind
├── postcss.config.js              # PostCSS con Tailwind y Autoprefixer
├── tailwind.d.ts                  # Tipos TypeScript para Tailwind
├── package.json                   # Dependencias del proyecto
├── CLAUDE.md                      # Instrucciones para Claude Code
└── README.md                      # Este archivo
```

### Ventajas de Screaming Architecture

1. **Claridad de propósito** - La estructura comunica qué hace la aplicación
2. **Aislamiento de features** - Cada feature es auto-contenida con componentes, hooks, tipos
3. **Escalabilidad** - Agregar nuevas features es directo y predecible
4. **Mantenibilidad** - Código relacionado está agrupado (componente + hook + tipos)
5. **Menor acoplamiento** - Features no dependen entre sí, solo de shared
6. **Separación de responsabilidades** - Hooks extraen lógica, componentes manejan UI

### Flujo de Datos en la Aplicación

```
                    main.tsx
                       ↓
              VehicleProvider (wrap app)
                       ↓
        ┌──────────────┴──────────────┐
        ↓                             ↓
  VehicleContext              React Router
  (global state)              (routing)
        ↓                             ↓
  useVehicles()                   Routes
        ↓                             ↓
        └──────────→ Custom Hooks ←───┘
                    (business logic)
                          ↓
        ┌─────────────────┼─────────────────┐
        ↓                 ↓                  ↓
useVehicleCatalog  useAddVehicleForm  useVehicleInventory
        ↓                 ↓                  ↓
   Components        Components         Components
   (UI only)         (UI only)          (UI only)
```

## Sistema de Diseño (Tailwind Theme)

El proyecto utiliza un theme personalizado de Tailwind CSS v4 optimizado para un sitio de ventas automotrices premium:

### Paleta de Colores

- **Primary (Slate)**: Tonos profesionales azul-grisáceo para headers y texto
- **Secondary (Blue)**: Azul tecnológico para CTAs y elementos interactivos
- **Accent (Gold)**: Dorado premium para highlights y badges especiales
- **Neutrals**: Escala de grises para backgrounds y UI subtle
- **Semantic**: Success (green), Error (red), Warning (orange)

### Gradientes Personalizados

- `bg-gradient-primary` - Gradiente oscuro azul-gris a azul
- `bg-gradient-secondary` - Gradiente de azul
- `bg-gradient-accent` - Gradiente dorado/amarillo
- `bg-gradient-hero` - Gradiente específico para hero sections
- `bg-gradient-overlay` - Overlay oscuro para fondos de imagen

### Sombras Premium

- `shadow-premium` - Sombra elevada para cards importantes
- `shadow-glow` - Efecto de brillo para elementos accent

### Animaciones Custom

- `animate-fade-in` - Entrada suave con fade
- `animate-fade-in-down` - Entrada con fade desde arriba
- `animate-slide-in-right` - Deslizamiento desde la derecha
- `animate-slide-in-left` - Deslizamiento desde la izquierda
- `animate-scale-in` - Entrada con escala
- `animate-shimmer` - Efecto shimmer para estados de carga

### Tipografía

- Font family: **Montserrat Variable** (light, medium, semibold, bold, extrabold)
- Escala responsive con breakpoint `md:` (768px)

## Path Alias Configuration

El proyecto está configurado con el alias `@` para imports más limpios y mantenibles:

### Configuración

**TypeScript (`tsconfig.app.json`):**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Vite (`vite.config.ts`):**
```typescript
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

### Uso de Path Alias

**Cross-feature imports** (entre features):
```typescript
import { useVehicles } from '@/features/vehicles';
import { VehicleCatalog } from '@/features/vehicles';
import { AddVehicle } from '@/features/add-vehicle';
import { VehicleInventory } from '@/features/vehicle-inventory';
import type { Vehicle, CreateVehicleInput } from '@/features/vehicles';
```

**Intra-feature imports** (dentro del mismo feature):
```typescript
// Usar rutas relativas
import { useAddVehicleForm } from '../hooks/useAddVehicleForm';
```

### Beneficios

- ✓ Imports más limpios y legibles
- ✓ Facilita refactorización de estructura
- ✓ Mejor autocompletado en IDEs
- ✓ Evita rutas relativas complejas (`../../..`)

## Uso del VehicleContext (Estado Global)

El proyecto implementa gestión de estado global usando React Context API para manejar los vehículos.

### Estructura de un Vehículo

```typescript
interface Vehicle {
  id: string;
  brand: string;        // Marca
  model: string;        // Modelo
  price: number;        // Precio
  year: number;         // Año
  image: string;        // URL de la imagen
  description: string;  // Descripción
}
```

### Cómo usar el contexto en componentes

```typescript
import { useVehicles } from '@/features/vehicles';

function MyComponent() {
  // Obtener el estado y métodos del contexto
  const { vehicles, addVehicle, updateVehicle, deleteVehicle } = useVehicles();

  // Listar vehículos
  const vehicleList = vehicles.map(vehicle => (
    <div key={vehicle.id}>
      {vehicle.brand} {vehicle.model} - ${vehicle.price}
    </div>
  ));

  // Agregar un vehículo
  const handleAdd = () => {
    addVehicle({
      brand: 'Toyota',
      model: 'Corolla',
      price: 25000000,
      year: 2024,
      image: 'https://example.com/image.jpg',
      description: 'Sedán híbrido eficiente'
    });
  };

  // Actualizar un vehículo
  const handleUpdate = (id: string) => {
    updateVehicle(id, { price: 26000000 });
  };

  // Eliminar un vehículo
  const handleDelete = (id: string) => {
    deleteVehicle(id);
  };

  return <div>{vehicleList}</div>;
}
```

### Métodos disponibles

- **`vehicles`** - Array con todos los vehículos
- **`addVehicle(vehicle)`** - Agrega un nuevo vehículo (genera ID automático)
- **`updateVehicle(id, updates)`** - Actualiza un vehículo existente por ID
- **`deleteVehicle(id)`** - Elimina un vehículo por ID

## Custom Hooks - Separación de Lógica y UI

El proyecto implementa el patrón de **separación de responsabilidades** mediante custom hooks que extraen la lógica de negocio de los componentes.

### useVehicleCatalog - Hook de Gestión de Catálogo

**Ubicación:** `src/features/vehicles/hooks/useVehicleCatalog.ts`

Este hook integra el VehicleContext y agrega lógica de transformación para el catálogo de vehículos.

#### Características

- Integración con VehicleContext
- Transformación de datos a formato de catálogo
- Formateo de precios chilenos ($28.990.000)
- Detección de tipo de vehículo (SUV, Sedán, Eléctrico, etc.)
- Extracción de características desde descripción
- Selección de vehículo destacado (más caro)
- Funciones utilitarias de filtrado

#### Uso

```typescript
import { useVehicleCatalog } from '@/features/vehicles';

const {
  catalogVehicles,      // Vehículos transformados
  featuredVehicle,      // Vehículo destacado
  addVehicle,           // CRUD operations
  updateVehicle,
  deleteVehicle,
  getVehicleCount,      // Utilidades
  getVehiclesByType,
  getVehiclesByBrand
} = useVehicleCatalog();
```

### useContactForm - Hook de Gestión de Formulario

**Ubicación:** `src/features/contact/hooks/useContactForm.ts`

Encapsula toda la lógica del formulario de contacto.

#### Características

- Gestión de estado (5 campos)
- Manejo de cambios en inputs
- Submit con prevención de default
- Estado de éxito temporal (3s)
- Reset automático

#### Uso

```typescript
import { useContactForm } from '@/features/contact';

const {
  formData,      // { nombre, email, telefono, asunto, mensaje }
  submitted,     // boolean
  handleSubmit,  // submit handler
  handleChange   // change handler
} = useContactForm();
```

### useAddVehicleForm - Hook de Formulario de Agregar ✨ NUEVO

**Ubicación:** `src/features/add-vehicle/hooks/useAddVehicleForm.ts`

Gestiona el formulario para agregar nuevos vehículos al inventario.

#### Características

- Gestión de estado (6 campos: brand, model, price, year, image, description)
- Validación completa en tiempo real:
  - Todos los campos requeridos
  - Precio > 0
  - Año entre 1900-2030
- Integración con VehicleContext
- Mensajes de error por campo
- Estado de loading durante envío
- Mensaje de éxito y reset automático (3s)

#### Uso

```typescript
import { useAddVehicleForm } from '@/features/add-vehicle';

const {
  formData,        // { brand, model, price, year, image, description }
  errors,          // { brand?: string, model?: string, ... }
  submitted,       // boolean - éxito
  isSubmitting,    // boolean - loading
  handleChange,    // input change handler
  handleSubmit,    // form submit handler
  resetForm        // reset manual
} = useAddVehicleForm();
```

### useVehicleInventory - Hook de Tabla de Inventario ✨ NUEVO

**Ubicación:** `src/features/vehicle-inventory/hooks/useVehicleInventory.ts`

Gestiona la tabla de inventario con funcionalidades avanzadas.

#### Características

- Integración con VehicleContext
- **Sorting** por columna (brand, model, price, year)
- **Orden** ascendente/descendente
- **Búsqueda** en tiempo real por marca o modelo
- **Confirmación** de eliminación inline
- **Formato** de precios chilenos
- Indicadores visuales de sort (↑/↓)

#### Uso

```typescript
import { useVehicleInventory } from '@/features/vehicle-inventory';

const {
  vehicles,          // Vehículos filtrados y ordenados
  sortField,         // Campo actual de sort
  sortOrder,         // 'asc' | 'desc'
  searchTerm,        // Término de búsqueda
  vehicleToDelete,   // ID pendiente de eliminar
  handleSort,        // (field: SortField) => void
  handleSearch,      // (term: string) => void
  confirmDelete,     // (id: string) => void
  cancelDelete,      // () => void
  handleDelete,      // () => void
  formatPrice,       // (price: number) => string
  getSortIndicator   // (field: SortField) => string
} = useVehicleInventory();
```

#### Tipos

```typescript
type SortField = 'brand' | 'model' | 'price' | 'year';
type SortOrder = 'asc' | 'desc';
```

### useFloatingMenu - Hook de Menú Flotante Radial ✨ NUEVO

**Ubicación:** `src/features/floating-menu/hooks/useFloatingMenu.ts`

Gestiona el menú flotante circular con posicionamiento radial matemático para mobile.

#### Características

- Gestión de estado open/closed
- Navegación con React Router
- **Cálculos matemáticos de posición radial** (conversión polar a cartesiano)
- Posicionamiento en arco semi-circular (180°) hacia arriba
- Radio de 130px para óptima separación visual
- Auto-cierre después de navegación

#### Uso

```typescript
import { useFloatingMenu } from '@/features/floating-menu';

const {
  isOpen,            // boolean - estado del menú
  toggleMenu,        // () => void - toggle open/close
  handleItemClick,   // (path: string) => void - navegar y cerrar
  getItemPosition    // (index: number, total: number) => Position
} = useFloatingMenu();

// Obtener posición de un item
const position = getItemPosition(0, 6); // { x: number, y: number }
```

#### Algoritmo de Posicionamiento

El hook calcula posiciones circulares usando matemáticas polares:

```typescript
// Radio desde el botón central
const radius = 130; // px

// Ángulo para cada item en el arco de 180°
const angleStep = Math.PI / (totalItems + 1);
const angle = angleStep * (index + 1);

// Conversión polar → cartesiano
const x = Math.cos(angle) * radius;
const y = -Math.sin(angle) * radius; // Negativo = hacia arriba
```

#### Tipos

```typescript
interface Position {
  x: number;
  y: number;
}

interface UseFloatingMenuReturn {
  isOpen: boolean;
  toggleMenu: () => void;
  handleItemClick: (path: string) => void;
  getItemPosition: (index: number, totalItems: number) => Position;
}
```

### FloatingMenu Component - Uso ✨ NUEVO

**Ubicación:** `src/features/floating-menu/components/FloatingMenu.tsx`

Componente visual del menú flotante radial.

#### Props Interface

```typescript
interface MenuItem {
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}

interface FloatingMenuProps {
  items: MenuItem[];
}
```

#### Ejemplo de Uso en Layout

```typescript
import { FloatingMenu, type MenuItem } from '@/features/floating-menu';
import { Home, Info, Phone, PlusCircle, List, ShoppingCart } from 'lucide-react';

const menuItems: MenuItem[] = [
  { path: '/', icon: Home, label: 'Inicio' },
  { path: '/quienes-somos', icon: Info, label: 'Quiénes Somos' },
  { path: '/contactanos', icon: Phone, label: 'Contáctanos' },
  { path: '/agregar-vehiculo', icon: PlusCircle, label: 'Agregar' },
  { path: '/inventario', icon: List, label: 'Inventario' },
  { path: '/posibles-compras', icon: ShoppingCart, label: 'Posibles Compras' },
];

<FloatingMenu items={menuItems} />
```

#### Características Visuales

- **Botón Principal**: 64x64px con `bg-gradient-secondary` y sombra premium
- **Botones del Menú**: 56x56px con borde azul y efecto hover dorado
- **Animaciones**: Scale-in escalonado (50ms delay entre items)
- **Backdrop**: Blur semi-transparente cuando está abierto
- **Posición**: `fixed bottom-6` centrado horizontalmente
- **Visibilidad**: Solo mobile (`md:hidden`)
- **Z-Index**: 50 (sobre todo el contenido)

### Beneficios de los Custom Hooks

1. **Separación de responsabilidades** - Lógica separada de presentación
2. **Reutilización** - Hooks usables en múltiples componentes
3. **Testabilidad** - Testeo independiente de lógica
4. **Mantenibilidad** - Cambios en lógica no afectan UI
5. **Legibilidad** - Componentes más limpios
6. **Type Safety** - TypeScript garantiza tipos correctos

## Instalación y Ejecución

### Requisitos Previos
- Node.js 18+ instalado
- npm o yarn

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd duoc_frontend_02_s1
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5173
```

### Comandos Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila TypeScript y genera build de producción
npm run preview  # Vista previa de la build de producción
npm run lint     # Ejecuta el linter ESLint
```

## Rutas de Navegación

- `/` - Página principal (Catálogo de vehículos)
- `/quienes-somos` - Información de la empresa
- `/contactanos` - Formulario de contacto
- `/agregar-vehiculo` - Agregar nuevo vehículo ✨ NUEVO
- `/inventario` - Tabla de inventario de vehículos ✨ NUEVO

## Cumplimiento de la Rúbrica de Evaluación

### Completamente Logrado (100%)

✅ **React Router implementado correctamente**
- Configuración en main.tsx con BrowserRouter
- Routes y Route configurados apropiadamente
- Navegación funcional sin errores
- 5 páginas completamente funcionales

✅ **Componente frontend cumple todos los requerimientos**
- 5 páginas completamente funcionales (3 requeridas + 2 adicionales)
- Menú de navegación inferior fijo y responsive
- Contenido relevante y completo en cada página
- Diseño profesional y responsive
- CRUD completo de vehículos
- Formularios con validación
- Tabla de inventario con funcionalidades avanzadas

## Autor

Franco Castro Villanueva - Desarrollo Frontend II (PFY2202)

## Tecnología Base

Este proyecto fue creado con Vite + React + TypeScript + Tailwind CSS v4, proporcionando:
- Hot Module Replacement (HMR) para desarrollo rápido
- Build optimizado para producción con tree-shaking de CSS
- TypeScript para desarrollo type-safe con path aliases
- Tailwind CSS v4 con CSS-first configuration
- PostCSS para procesamiento de CSS moderno
- Sistema de diseño personalizado para marca automotriz premium
- Arquitectura escalable basada en features de negocio
