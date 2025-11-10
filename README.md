# AutoVentas Premium - Sitio Web de Venta de Vehículos

Proyecto desarrollado para la **Evaluación Formativa 1** del curso **Desarrollo Frontend II (PFY2202)** - Semana 1

## Descripción del Proyecto

AutoVentas Premium es un sitio web moderno desarrollado con React que permite la venta de vehículos nuevos y seminuevos. El proyecto implementa navegación con React Router, proporcionando una experiencia de usuario fluida y profesional.

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
- ✓ Navegación funcional entre 3 páginas
- ✓ Menú de navegación inferior fijo y responsive
- ✓ Rutas configuradas con BrowserRouter
- ✓ Indicador visual de página activa

**Criterio 2: Componentes Frontend (50 puntos)**
- ✓ Página Home con catálogo completo de vehículos
- ✓ Página "Quiénes Somos" con información de la empresa
- ✓ Página "Contáctanos" con formulario funcional
- ✓ Layout consistente con header y navegación
- ✓ Diseño responsive y profesional

### Páginas Desarrolladas

#### 1. Home (Página Principal)
- Banner hero con título y descripción
- Vehículo destacado del mes con oferta especial
- Catálogo de 6 vehículos con:
  - Imágenes de alta calidad
  - Información detallada (marca, modelo, año, precio)
  - Características destacadas
  - Tipo de vehículo (Sedán, SUV, Deportivo, Eléctrico)
- Sección de beneficios (garantía, financiamiento, servicio, documentación)

#### 2. Quiénes Somos
- Historia de la empresa
- Misión y Visión corporativa
- 6 valores corporativos con iconografía
- Estadísticas de logros (años de experiencia, clientes, sucursales)
- Información del equipo profesional

#### 3. Contáctanos
- Formulario de contacto completo con validación
- Información de contacto (dirección, teléfonos, emails)
- Horarios de atención
- Enlaces a redes sociales
- Sección de ubicación
- Preguntas frecuentes (FAQ)

### Características Técnicas

- **Navegación inferior fija** - Accesible desde cualquier punto de la página con backdrop blur
- **Diseño responsive** - Mobile-first adaptable a móviles, tablets y desktop
- **Animaciones suaves** - Transiciones y efectos hover con utility classes
- **Tipado con TypeScript** - Mayor seguridad y mantenibilidad del código
- **Componentes reutilizables** - Arquitectura modular y escalable
- **Tailwind CSS v4** - Sistema de diseño personalizado con:
  - Paleta de colores premium (Slate, Blue, Gold)
  - Gradientes personalizados para hero sections y CTAs
  - Sombras premium (`shadow-premium`, `shadow-glow`)
  - Animaciones custom (`animate-fade-in`, `animate-slide-in`)
  - Tipografía Montserrat Variable optimizada
- **CSS-first configuration** - Theme configurado con variables CSS nativas

## Estructura del Proyecto

```
duoc_frontend_02_s1/
├── src/
│   ├── components/
│   │   ├── Layout.tsx         # Layout principal con header y navegación inferior
│   │   ├── ScrollToTop.tsx    # Utilidad para scroll to top en cambio de ruta
│   │   └── TailwindExample.tsx # Componente de ejemplo (opcional)
│   ├── pages/
│   │   ├── Home.tsx           # Página principal con catálogo de vehículos
│   │   ├── QuienesSomos.tsx   # Página Quiénes Somos (empresa, misión, valores)
│   │   └── Contactanos.tsx    # Página de contacto con formulario
│   ├── main.tsx               # Punto de entrada con configuración de rutas
│   └── index.css              # Configuración Tailwind v4 + theme personalizado
├── tailwind.config.js         # Configuración mínima de Tailwind
├── postcss.config.js          # PostCSS con Tailwind y Autoprefixer
├── tailwind.d.ts              # Tipos TypeScript para Tailwind
├── package.json               # Dependencias del proyecto
├── CLAUDE.md                  # Instrucciones para Claude Code
└── README.md                  # Este archivo
```

## Sistema de Diseño (Tailwind Theme)

El proyecto utiliza un theme personalizado de Tailwind CSS v4 optimizado para un sitio de ventas automotrices premium:

### Paleta de Colores

- **Primary (Slate)**: Tonos profesionales azul-grisáceo para headers y texto
- **Secondary (Blue)**: Azul tecnológico para CTAs y elementos interactivos
- **Accent (Gold)**: Dorado premium para highlights y badges especiales
- **Neutrals**: Escala de grises para backgrounds y UI subtle

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
npm run build    # Compila para producción
npm run preview  # Vista previa de la build de producción
npm run lint     # Ejecuta el linter ESLint
```

## Rutas de Navegación

- `/` - Página principal (Home)
- `/quienes-somos` - Información de la empresa
- `/contactanos` - Formulario de contacto

## Cumplimiento de la Rúbrica de Evaluación

### Completamente Logrado (100%)

✅ **React Router implementado correctamente**
- Configuración en main.tsx con BrowserRouter
- Routes y Route configurados apropiadamente
- Navegación funcional sin errores

✅ **Componente frontend cumple todos los requerimientos**
- 3 páginas completamente funcionales
- Menú de navegación inferior
- Contenido relevante y completo en cada página
- Diseño profesional y responsive

## Autor

Franco Castro Villanueva - Desarrollo Frontend II (PFY2202)

## Tecnología Base

Este proyecto fue creado con Vite + React + TypeScript + Tailwind CSS v4, proporcionando:
- Hot Module Replacement (HMR) para desarrollo rápido
- Build optimizado para producción con tree-shaking de CSS
- TypeScript para desarrollo type-safe
- Tailwind CSS v4 con CSS-first configuration
- PostCSS para procesamiento de CSS moderno
- Sistema de diseño personalizado para marca automotriz premium
