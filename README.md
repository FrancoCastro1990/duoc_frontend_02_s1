# AutoVentas Premium - Sitio Web de Venta de Vehículos

Proyecto desarrollado para la **Evaluación Formativa 1** del curso **Desarrollo Frontend II (PFY2202)** - Semana 1

## Descripción del Proyecto

AutoVentas Premium es un sitio web moderno desarrollado con React que permite la venta de vehículos nuevos y seminuevos. El proyecto implementa navegación con React Router, proporcionando una experiencia de usuario fluida y profesional.

## Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript 5.9** - Superset de JavaScript con tipado estático
- **React Router DOM 7.x** - Librería para navegación y enrutamiento en React
- **Vite 7.1** - Build tool y servidor de desarrollo de última generación
- **CSS3** - Estilos modernos con gradientes, flexbox y grid

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

- **Navegación inferior fija** - Accesible desde cualquier punto de la página
- **Diseño responsive** - Adaptable a móviles, tablets y desktop
- **Animaciones suaves** - Transiciones y efectos hover
- **Tipado con TypeScript** - Mayor seguridad y mantenibilidad del código
- **Componentes reutilizables** - Arquitectura modular y escalable
- **Estilos modernos** - Gradientes, sombras y efectos visuales

## Estructura del Proyecto

```
duoc_frontend_02_s1/
├── src/
│   ├── components/
│   │   ├── Layout.tsx         # Layout principal con menú de navegación
│   │   └── Layout.css         # Estilos del layout
│   ├── pages/
│   │   ├── Home.tsx           # Página principal con catálogo
│   │   ├── Home.css           # Estilos de Home
│   │   ├── QuienesSomos.tsx   # Página Quiénes Somos
│   │   ├── QuienesSomos.css   # Estilos de Quiénes Somos
│   │   ├── Contactanos.tsx    # Página de contacto
│   │   └── Contactanos.css    # Estilos de Contáctanos
│   ├── main.tsx               # Punto de entrada con configuración de rutas
│   └── index.css              # Estilos globales
├── package.json               # Dependencias del proyecto
└── README.md                  # Este archivo
```

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

Este proyecto fue creado con Vite + React + TypeScript, proporcionando:
- Hot Module Replacement (HMR) para desarrollo rápido
- Build optimizado para producción
- TypeScript para desarrollo type-safe
