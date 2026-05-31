# 🌐 Alexis Samboy — Portafolio Profesional Cyberpunk

Este es el portafolio profesional e interactivo de **Alexis Samboy**, Especialista en Business Intelligence & Estrategia Digital. La aplicación está diseñada con una estética futurista, cyberpunk y de ciencia ficción, presentando animaciones fluidas, visualizaciones holográficas de datos y una experiencia de usuario premium en modo oscuro.
---

## 🔗 Ver en Vivo

Puedes acceder y ver el portafolio desplegado en vivo a través del siguiente enlace:

👉 **[https://portafolio-alexis.vercel.app](https://portafolio-alexis.vercel.app)** *(Sustituye esta URL con tu enlace final de Vercel/dominio una vez publicado)*

---

## 🛠️ Tecnologías Utilizadas

La arquitectura de la aplicación combina frameworks modernos con herramientas de animación de alto rendimiento para garantizar tiempos de carga ultrarrápidos (100% de puntuación estática) y micro-interacciones inmersivas:

*   **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/) con [React 19](https://react.dev/) para la estructuración por componentes, optimización de fuentes nativas (`next/font`) e infraestructura estática limpia.
*   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) para un tipado seguro y robustez de código.
*   **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) para una gestión unificada del sistema de diseño a través de variables CSS nativas, utilidades de glow neón adaptativas y estilos modulares.
*   **Animaciones Avanzadas e Interactividad**:
    *   [Framer Motion](https://www.framer.com/motion/): Utilizado para la física de resortes (*springs*) en la entrada de textos, el efecto interactivo de zoom y traslación estilo **Dock** en los iconos sociales del Hero, el indicador de radar loop (*ping*) y el efecto 3D *pop-out* del avatar sobre el anillo neón.
    *   [GSAP (GreenSock Animation Platform) + ScrollTrigger](https://gsap.com/): Utilizado para crear el efecto cinemático **Curtain Reveal** (revelación de cortina) del pie de página al hacer scroll.
*   **Iconografía**: [Lucide React](https://lucide.dev/) para iconos vectoriales limpios y consistentes.
*   **Procesamiento de Activos**: Algoritmos de relleno por inundación (*flood-fill*) en Python para purificar los logotipos oficiales de marca, garantizando transparencia nativa y gradientes RGB de alta calidad.

---

## 🌟 Características Destacadas de la Interfaz

1.  **Holographic Hero**: Un reproductor de video en bucle cyberpunk de fondo con tipografía responsiva y animaciones de respiración neón y glitch holográfico en los textos principales.
2.  **3D Pop-out Avatar**: La foto del perfil se desliza y agranda desde dentro de un anillo de energía púrpura. La cabeza sobresale tridimensionalmente del marco circular gracias a una técnica avanzada de doble capa y máscaras `clip-path` en CSS.
3.  **Línea de Tiempo Dinámica**: Un timeline responsivo y ordenado cronológicamente desde la experiencia laboral más antigua a la más reciente con nodos interactivos y tarjetas cyberpunk estructuradas.
4.  **Interactive Portfolio (Bento Grid / Carpetas 3D)**: Los proyectos se agrupan en carpetas interactivas estilo archivador 3D que expanden sus sub-tarjetas y detalles dinámicamente con transiciones fluidas.
5.  **Interactive Credentials Accordion**: Visualizador de certificaciones reales que despliega la documentación oficial y los certificados de Power BI, Python y Liderazgo directamente desde el almacenamiento local.
6.  **Curtain Reveal Footer**: Un pie de página de pantalla completa con efecto magnético en los botones de contacto y redes sociales que se revela de fondo al deslizarse la página principal.

---

## 🚀 Instalación y Desarrollo Local

Sigue estos pasos para clonar el repositorio y ejecutar la aplicación en tu entorno local:

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

3.  **Compilar para producción**:
    ```bash
    npm run build
    ```

4.  **Iniciar producción**:
    ```bash
    npm run start
    ```
