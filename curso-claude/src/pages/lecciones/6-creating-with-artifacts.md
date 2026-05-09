---
layout: ../../layouts/MarkdownLayout.astro
title: "Creación con Artefactos"
---
# 🎨 Creación con Artefactos
## Salidas Interactivas y Colaboración Visual en Tiempo Real

---

# ✨ ¿Qué son los Artefactos?
Los Artefactos son salidas independientes e interactivas que Claude crea en una ventana dedicada al lado de tu conversación. En lugar de recibir un bloque largo de código o texto enterrado en el chat, verás tu contenido renderizado y listo para usar: ya sea un sitio web funcional, un gráfico interactivo o un documento que puedes descargar de inmediato.

### ¿Cuándo crea Claude un Artefacto?
Claude detecta automáticamente cuándo el contenido cumple ciertos criterios:
*   Es **significativo y autocontenido** (típicamente más de 15 líneas).
*   Es algo que probablemente querrás **editar, iterar o reutilizar**.
*   Representa contenido complejo que se sostiene por sí mismo sin el resto de la charla.

---

# 📦 Tipos Comunes de Artefactos

*   **📄 Documentos:** Markdown, Texto plano, Word, PDF, PPT y Excel. Ideal para informes, planes de proyecto y borradores que requieren edición o exportación.
*   **💻 Snippets de Código:** Código funcional en cualquier lenguaje (Python, JS, C++, etc.). Puedes copiarlo o descargarlo directamente.
*   **🌐 Páginas HTML:** Sitios web completos (HTML/CSS/JS). Perfecto para landing pages, demos interactivas o prototipos rápidos.
*   **🖼️ Imágenes SVG:** Gráficos vectoriales (logos, iconos) que se renderizan directamente en la ventana.
*   **📊 Diagramas Mermaid:** Flujogramas, diagramas de secuencia, Gantt y organigramas basados en descripción textual.
*   **⚛️ Componentes React:** Elementos de UI interactivos con lógica real (calculadoras, dashboards, juegos). No son solo maquetas; responden al usuario.

---

# 🛠️ Trabajando con tu Primer Artefacto
Crear un artefacto es tan simple como pedirlo. Puedes decir:
*   *"Crea un flujograma de nuestro proceso de onboarding de clientes"*.
*   *"Construye un dashboard interactivo para mis gastos mensuales"*.
*   *"Escribe una plantilla de informe de proyecto que pueda reutilizar"*.

> [!TIP]
> Si Claude responde en el chat normal pero tú quieres un artefacto, simplemente di: **"Muestra esto como un artefacto"**.

### En la ventana de Artefactos puedes:
*   **Alternar Vistas:** Cambia entre "Preview" (resultado final) y "Code" (código fuente).
*   **Copiar y Descargar:** Botones rápidos para llevarte el trabajo a tu equipo.
*   **Versiones:** Navega entre las diferentes iteraciones que has hecho con Claude.

---

# 🌍 Compartir y Publicar
Una vez que has creado algo útil, tienes varias opciones:

1.  **Copiar o Descargar:** Para uso personal.
2.  **Compartir Internamente (Claude for Work):** Los usuarios de Team y Enterprise pueden compartir artefactos de forma segura con sus colegas. Requiere autenticación de equipo.
3.  **Publicar Públicamente:** Disponible para todos los planes.
    *   Solo la versión seleccionada se hace pública (tu chat sigue siendo privado).
    *   Cualquiera con el enlace puede verlo e interactuar con él (incluso sin cuenta de Claude).
    *   **Remix:** Otros pueden abrir tu artefacto en su propio chat para modificarlo.

---

# 🚀 Consejos para el Éxito
*   **Sé Específico:** En lugar de "haz un tracker", di "haz un tracker mensual donde pueda meter gastos por categoría y ver un gráfico de tarta".
*   **Describe al Usuario Final:** "Este flujograma es para nuevos empleados" ayuda a Claude a tomar mejores decisiones de diseño.
*   **Iteración Incremental:** Pide añadir una función o cambio a la vez. Es más fácil identificar qué funciona y corregir errores temprano.
