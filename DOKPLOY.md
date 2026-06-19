# 🚀 Guía de Despliegue en Dokploy

Esta guía explica los pasos necesarios para desplegar este portafolio en tu servidor utilizando **Dokploy**. Gracias a la optimización multi-etapa del `Dockerfile`, el despliegue será rápido, ligero y seguro.

---

## 🛠️ Requisitos Previos

1. Tener una instancia de **Dokploy** instalada y accesible en tu servidor.
2. Tener tu repositorio de GitHub conectado en Dokploy.

---

## 📋 Pasos para el Despliegue

Sigue estos sencillos pasos en el panel web de Dokploy:

### 1. Crear una Nueva Aplicación
1. Ve a tu panel de **Dokploy**.
2. Selecciona tu **Proyecto** (o crea uno nuevo).
3. Crea un **Servicio** de tipo **Application**.

### 2. Configurar el Origen del Código (Repository)
1. Configura el **Provider** como **GitHub**.
2. Selecciona tu repositorio (ej. `portafolio-alexis`).
3. Define la rama de despliegue (normalmente `main`).

### 3. Configurar el Método de Construcción (Build Config)
1. En la pestaña **Build**, cambia la configuración del build:
   - **Build Type**: Selecciona **Dockerfile** (en lugar de Nixpacks o Heroku Buildpacks).
   - **Dockerfile Path**: Escribe `Dockerfile` (es el archivo que acabamos de crear en la raíz del proyecto).
2. Guarda los cambios.

### 4. Configurar Puertos
1. En la pestaña **Network** o configuración de puertos de Dokploy:
   - Configura el puerto interno (**Container Port**) en `3000`.
   - Dokploy mapeará automáticamente este puerto a tu reverse proxy (Nginx/Traefik).

### 5. Configurar Variables de Entorno (Opcional)
Si necesitas variables de entorno dinámicas en producción (por ejemplo, para el asistente de IA o integraciones de WhatsApp):
1. Ve a la pestaña **Environment**.
2. Añade tus variables (por ejemplo: `API_KEY`, `NEXT_PUBLIC_API_URL`, etc.).
   > ⚠️ **Nota**: No es necesario que configures `STATIC_EXPORT` en Dokploy, ya que por defecto compilará en modo **standalone** (servidor Node.js), que es la opción recomendada para Dokploy.

### 6. Configurar Dominio
1. Ve a la pestaña **Domains**.
2. Haz clic en **Add Domain**.
3. Escribe tu dominio o subdominio personalizado (ej. `portafolio.alexissamboy.dev` o `alexissamboy.dev`).
4. Configura el puerto para redirigir al puerto `3000` de tu aplicación.
5. Habilita **SSL/HTTPS** (Let's Encrypt se gestiona automáticamente por Dokploy).

### 7. Desplegar
1. Haz clic en **Deploy**.
2. Puedes seguir el progreso de la compilación en vivo desde la pestaña de **Logs**.
3. Una vez finalizado, tu sitio estará en línea en tu dominio asignado.

---

## ⚡ Ventajas de esta Configuración

- **Tamaño Ultraligero**: Usamos compilación multi-etapa y Next.js Standalone. Esto significa que todo el código fuente y las herramientas de desarrollo no se incluyen en la imagen final. El tamaño pasa de ~1.5 GB a unos ~120 MB.
- **Servidor Independiente**: La aplicación corre en un mini servidor Node.js independiente, lo que permite en el futuro usar rutas API, llamadas dinámicas a bases de datos o Server Actions sin cambiar de servidor.
- **Preservación de GitHub Pages**: Gracias a la variable dinámica en `next.config.ts`, tu antiguo flujo de despliegue automático en GitHub Pages seguirá funcionando en paralelo.
