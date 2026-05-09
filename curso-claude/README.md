# 🤖 Claude 101 — Portal de Formación en Español

![Claude 101 Banner](https://img.shields.io/badge/Curso-Claude%20101-amber?style=for-the-badge&logo=anthropic)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Este repositorio contiene el código fuente de **Claude 101**, un portal educativo dedicado a democratizar el acceso al conocimiento sobre Claude AI en español. El proyecto está basado en el currículo oficial de la **Anthropic Academy** y ha sido diseñado con una estética moderna, minimalista y de alto rendimiento.

## 🚀 Propósito del Proyecto

El objetivo es proporcionar una plataforma estructurada y visualmente atractiva donde estudiantes y profesionales puedan:
- Seguir un **plan de estudio de 6 semanas**.
- Acceder a las **13 lecciones oficiales** traducidas y adaptadas al español.
- Descargar materiales complementarios (Manuales PDF, PPTX y Guías visuales).
- Explorar recursos curados (videos, artículos y tutoriales avanzados).

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) (Static Site Generation para máxima velocidad).
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) con una paleta personalizada (`amber`, `carbon`).
- **Iconografía**: Lucide Icons y SVGs personalizados.
- **Contenido**: Markdown para las lecciones dinámicas.
- **Despliegue**: Optimizado para Vercel/Netlify.

## 📂 Estructura del Proyecto

```bash
├── src/
│   ├── components/      # Componentes reutilizables (UI, Layout)
│   ├── layouts/         # Layout global y para Markdown
│   ├── pages/           # Rutas principales (.astro)
│   │   ├── lecciones/   # Contenido de las 13 lecciones (.md)
│   │   ├── manual.astro # Vista de módulos del manual
│   │   └── recursos.astro # Listado de materiales externos
│   └── public/          # Activos estáticos (PDFs, PPTX, imágenes)
├── tailwind.config.mjs   # Configuración del sistema de diseño
└── astro.config.mjs     # Configuración de integraciones
```

## ⚙️ Configuración Local

Para ejecutar este proyecto en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/curso-claude.git
   cd curso-claude
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:4321`.

4. **Generar la build de producción:**
   ```bash
   npm run build
   ```

## 🎨 Diseño y Estética

El proyecto utiliza un sistema de diseño "Premium Dark" inspirado en la identidad visual de Anthropic y herramientas de IA de vanguardia:
- **Efectos de Glassmorphism**: Tarjetas con desenfoque de fondo y bordes sutiles.
- **Mesh Gradients**: Fondos dinámicos con gradientes de ámbar.
- **Tipografía**: Jerarquía clara para facilitar el aprendizaje técnico.

## 🤝 Créditos

Este proyecto es un esfuerzo comunitario para traducir y adaptar el contenido original de **Anthropic Academy**.
- **Contenido Original**: [Anthropic Academy](https://anthropic.skilljar.com/)
- **Desarrollo y Adaptación**: [Jesús Rodríguez](https://github.com/jesusprodriguezUnir)
- **Recursos Adicionales**: Daniel Avila, Germán Martínez (AprendiendoIA), y otros expertos de la comunidad.

---
*Este proyecto no es un producto oficial de Anthropic, sino una iniciativa educativa independiente.*
