# Dubai Elite Estates

Una landing page de ultra-lujo para bienes raíces en Dubái, diseñada para transmitir exclusividad, elegancia y prestigio. Este proyecto utiliza tecnologías modernas para garantizar un rendimiento óptimo, una estética premium y una experiencia de usuario fluida en todos los dispositivos.

## 📋 Descripción del Proyecto

Esta landing page sirve como punto de entrada para inversores de alto patrimonio interesados en el mercado inmobiliario de Dubái. La filosofía de diseño se centra en el "Less is More" (Menos es Más), con un uso intensivo de espacios negativos, tipografía serif elegante (Cormorant Garamond) y una paleta de colores sofisticada (Negro, Zinc y Ámbar/Oro).

### Características Principales

1.  **Navegación Intuitiva con Scroll-Snap**:

    - La página principal utiliza un efecto de "scroll snapping" (desplazamiento magnético) para guiar al usuario sección por sección, creando una experiencia similar a una presentación de diapositivas de alta gama.

2.  **Diseño Responsivo y Adaptable**:

    - **Escritorio**: Diseño de ancho completo que aprovecha imágenes de alta resolución y layouts asimétricos.
    - **Móvil/Tablet**: Adaptación inteligente donde las secciones de contenido denso (sección "About", cuadrícula de propiedades, lista de agentes) permiten un desplazamiento interno (`internal scrolling`). Esto asegura que el usuario pueda explorar todo el contenido sin romper el flujo principal de la página.

3.  **Secciones Detalladas**:

    - **Hero Section**: Video de fondo inmersivo con superposiciones de texto animadas.
    - **About/Philosophy**: Diseño dividido (Split-screen) con imagen y texto narrativo sobre la filosofía de inversión.
    - **Exclusive Portfolio**: Carrusel de propiedades destacadas con funcionalidad de comparación y detalles rápidos. Esta sección se centra verticalmente en tablets para una mejor visualización.
    - **Our Experts**: Cuadrícula de agentes inmobiliarios con efectos hover elegantes y proporciones cuidadosamente ajustadas (70% imagen, 30% información) para mantener el foco visual.
    - **Footer**: Sección final separada e informativa con enlaces sociales y branding.

4.  **Interacciones y Animaciones**:
    - Uso de `framer-motion` para animaciones de entrada suaves (fade-in, slide-up) que se activan al hacer scroll.
    - Micro-interacciones en botones y tarjetas (hover effects, cambios de color, escalas sutiles).
    - **LeadModal**: Un formulario de contacto modal rectangular con estilo "glassmorphism", diseñado para captar leads de manera elegante.

## 🛠 Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz.
- **TypeScript**: Para un código robusto y tipado estático, mejorando la mantenibilidad.
- **Tailwind CSS**: Framework de utilidad para un estilizado rápido y consistente.
- **Framer Motion**: Librería potente para gestionar todas las animaciones y transiciones complejas.
- **Lucide React**: Conjunto de iconos ligeros y consistentes.
- **Vite**: Empaquetador (bundler) de próxima generación para un desarrollo rápido.

## 📂 Estructura del Proyecto

- **`App.tsx`**: Componente principal que orquesta todas las secciones y la lógica de navegación.
- **`constants.tsx`**: Archivo centralizado que contiene todo el contenido estático (textos, títulos, rutas de imágenes). Esto facilita la actualización de la información sin tocar el código de la interfaz.
- **`types.ts`**: Definiciones de TypeScript para garantizar la integridad de los datos (interfaces para Propiedades, Agentes, Contenido).
- **`components/LeadModal.tsx`**: Componente independiente para el formulario de captura de clientes potenciales.

## 📱 Funcionamiento en Móvil

Para garantizar la mejor experiencia en dispositivos móviles:

- Las secciones como **About**, **Properties** y **Experts** detectan cuando el contenido excede el alto de la pantalla.
- Se habilita automáticamente un scroll interno vertical dentro de esas secciones.
- Esto permite al usuario leer todo el texto o ver todas las tarjetas sin verse forzado a saltar prematuramente a la siguiente sección principal.

## 🎨 Estilos y Tipografía

- **Fuente Principal (Serif)**: _Cormorant Garamond_ - Usada para títulos y encabezados para evocar lujo y tradición.
- **Fuente Secundaria (Sans-Serif)**: _Inter_ - Usada para cuerpos de texto, etiquetas y botones para máxima legibilidad.
- **Colores**:
  - Fondo: `bg-zinc-950` / `bg-black`
  - Acentos: `text-amber-500` - `text-amber-600` (Tonos dorados)
  - Texto Secundario: `text-zinc-400` / `text-zinc-500`

## Sobre el Desarrollador 👨‍💻

**Yoshua Soto** (Dann Falcon Dev)  
_Fullstack Developer | Especialista en TypeScript_

Creador apasionado por construir aplicaciones que no solo funcionan, sino que asombran. Utilizando la potencia de la IA (Gemini) y tecnologías web modernas, me enfoco en entregar experiencias de usuario (UX) memorables e inmersivas.

📫 **Contacto**

- **Email**: yoshuasoto54@gmail.com
- **WhatsApp**: +58 0422 033 1995

##

![Falcon Studio Dev](banner.png)

© 2026 Dann Falcon Media. Todos los derechos reservados.
