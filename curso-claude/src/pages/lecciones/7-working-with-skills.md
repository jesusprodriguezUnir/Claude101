---
layout: ../../layouts/MarkdownLayout.astro
title: "Trabajando con Skills"
---
# 🛠️ Trabajando con Skills
## Automatización y Metodologías Expertas en Claude

---

# 🧠 ¿Qué son las Skills?
Las Skills (Habilidades) son carpetas de instrucciones, scripts y recursos que Claude carga dinámicamente para mejorar su rendimiento en tareas especializadas. Piensa en ellas como **paquetes de experticia**: enseñan a Claude a completar tareas específicas de forma repetible y rigurosa.

*   **Más allá del chat:** Has visto las Skills en acción si has usado a Claude para crear archivos de Excel, PowerPoint, Word o PDF.
*   **Automatización de flujos:** Pueden codificar metodologías completas (ej. análisis de varianza trimestral, revisión de voz de marca o listas de cumplimiento legal).

---

# 📑 Tipos de Skills

### 1. Skills de Anthropic
Creadas y mantenidas por Anthropic.
*   **Capacidades:** Creación y edición avanzada de archivos de **Excel, Word, PowerPoint y PDF**.
*   **Uso:** Disponibles para todos los usuarios de pago. Claude las invoca automáticamente cuando son relevantes.

### 2. Skills Personalizadas
Creadas por ti o tu organización para flujos de trabajo específicos.
*   **Ejemplos:** Aplicar guías de marca a presentaciones, estructurar notas de reuniones en un formato exacto o ejecutar flujos de análisis de datos propios de la empresa.

---

# 🚀 Cómo Habilitar y Usar Skills
Las Skills están en fase de *feature preview* para planes Pro, Max, Team y Enterprise.

### Requisitos:
1.  Ve a **Settings > Capabilities**.
2.  Activa **Code execution and file creation** (las Skills necesitan un entorno seguro de computación para funcionar).
3.  Desplázate a la sección de **Skills** y activa las que necesites.

### En la práctica:
No necesitas invocar las Skills manualmente. Claude detecta tu intención:
*   *"Crea un Excel con los gastos mensuales y fórmulas de totales"*.
*   *"Convierte estas notas en una presentación de PowerPoint"*.
*   *"Genera un informe PDF resumiendo estos datos"*.

---

# ✍️ Creando tus Propias Skills
No necesitas programar. La forma más fácil es conversando con Claude:

1.  **Inicia un chat:** *"Quiero crear una skill para redactar informes de ventas trimestrales"*.
2.  **Entrevista:** Claude te preguntará sobre tu flujo de trabajo: ¿Qué debe hacer la skill? ¿Qué define un buen resultado?
3.  **Sube Referencias:** Adjunta plantillas, guías de estilo o ejemplos de trabajos anteriores de los que estés orgulloso.
4.  **Guarda la Skill:** Claude generará el archivo técnico por ti. Guárdalo y estará listo para usarse. Podrás ver y editar tus habilidades en la pestaña **Customize**.

---

# ⚖️ Skills vs. Proyectos
¿Cuándo usar cada una? Se complementan, pero tienen propósitos distintos:

| Característica | 📁 Proyectos (Conocimiento) | 🛠️ Skills (Proceso) |
| :--- | :--- | :--- |
| **Propósito** | Almacenar información de referencia. | Definir **cómo** ejecutar una tarea. |
| **Mejor para** | Contexto a largo plazo y archivos. | Flujos repetibles y metodologías. |
| **Ejemplo** | Hub de clientes, base de datos. | Revisor de marca, generador de PDFs. |
| **Persistencia** | Disponible en todo el proyecto. | Se invoca cuando la tarea lo requiere. |

> [!TIP]
> **La clave:** El Proyecto proporciona la información (**qué**), mientras que la Skill proporciona el proceso (**cómo**).

---

# 🛡️ Seguridad y Consideraciones
*   **Fuentes Confiables:** Instala solo Skills personalizadas de fuentes en las que confíes.
*   **Privacidad:** Las Skills que subes son privadas de tu cuenta individual.
*   **Sandbox:** Se ejecutan en un entorno contenido y seguro en los servidores de Anthropic.
