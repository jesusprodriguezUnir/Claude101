---
layout: ../../layouts/MarkdownLayout.astro
title: "Introducción a Proyectos"
---
# 📁 Introducción a Proyectos
## Espacios de Trabajo con Memoria y Contexto Compartido

---

# 🚀 ¿Qué son los Proyectos?
Los Proyectos son entornos de trabajo autocontenidos que cuentan con su propia memoria, historial de chat, base de conocimiento e instrucciones personalizadas. Piensa en ellos como **entornos dedicados** para flujos de trabajo específicos.

### Beneficios Clave:
*   **Conocimiento Persistente:** Claude consulta los documentos cargados en todos los chats del proyecto. No más re-subir los mismos archivos.
*   **Instrucciones a Medida:** Guían el comportamiento de Claude (tono, estilo, nivel de experticia) en cada conversación dentro del proyecto.
*   **Escalabilidad (RAG):** Cuando la base de conocimiento es muy grande, Claude activa el modo **RAG** (Retrieval Augmented Generation), ampliando la capacidad hasta 10 veces sin perder calidad.
*   **Colaboración:** (Planes Team/Enterprise) Comparte proyectos con tu equipo para que todos trabajen sobre la misma base.

---

# 🏗️ Creando tu Primer Proyecto
Configurar un proyecto toma solo unos minutos:

### Paso 1: Configuración Inicial
1.  Haz clic en **"Projects"** en la barra lateral o ve a `claude.ai/projects`.
2.  Pulsa **"+ New Project"**.
3.  Asigna un **Nombre descriptivo** (ej. "Campaña Q4" o "Documentación de Producto").
4.  Añade una descripción (opcional) y configura la visibilidad (Privado o para la Organización).

---

# 📜 Paso 2: Instrucciones del Proyecto
Las instrucciones le dicen a Claude cómo comportarse en este espacio específico. Haz clic en **"Instructions"** para definirlas.

### Qué incluir en unas buenas instrucciones:
*   **Contexto del Trabajo:** *"Este proyecto es para crear contenido de marketing B2B"*.
*   **Instrucciones de Proceso:** *"Primero esboza la estructura del blog, luego redacta el borrador"*.
*   **Tono y Estilo:** *"Usa un tono profesional pero conversacional. Evita tecnicismos"*.
*   **Requisitos Específicos:** *"Siempre incluye una llamada a la acción (CTA) al final"*.

> [!TIP]
> Puedes usar las instrucciones para **automatizar flujos**: *"Cuando suba una transcripción de reunión, genera un resumen estructurado usando esta plantilla"*.

---

# 📚 Paso 3: Construir la Base de Conocimiento
Aquí es donde subes los documentos de referencia (PDF, DOCX, CSV, TXT, HTML, etc.).

### Qué subir:
*   **Documentos de Referencia:** Guías de marca, manuales de estilo, plantillas.
*   **Material de Fondo:** Informes de investigación, notas de reuniones, requisitos.
*   **Ejemplos:** Trabajos anteriores que quieres que Claude emule.
*   **Conectividad:** Enlaza directamente desde **Google Drive**.

> [!IMPORTANT]
> **Nombra tus archivos de forma descriptiva.** Claude usa los nombres para entender la relevancia. `Guia-Marca-2025.pdf` es mejor que `documento1.pdf`.

---

# 👥 Colaboración y Permisos
(Para usuarios de Claude for Work)

*   **👁️ Can View:** Los miembros pueden ver el contenido y chatear, pero no editar nada.
*   **✏️ Can Edit:** Poder total para modificar instrucciones, actualizar documentos y gestionar miembros.
*   **👑 Owner:** Creador del proyecto con control total sobre la visibilidad y eliminación.

### Cómo compartir:
Pulsa el botón **"Share project"** e invita a miembros por nombre/email o hazlo visible para toda la organización.

---

# 💡 Inspiración: Tipos de Proyectos
*   **🚀 Lanzamiento de Producto:** Especificaciones, análisis competitivo y notas de lluvia de ideas.
*   **🔬 Soporte a la Investigación:** Centraliza datos de usuarios y feedback para sintetizar informes.
*   **💼 Hub de Clientes:** Guías de estilo del cliente, entregables pasados e historial para mantener la consistencia.
*   **📅 Eventos:** Contratos de sedes, bios de ponentes y cronogramas.
*   **📝 Generador de Vacantes:** Historial de descripciones de puesto y cultura de equipo.
