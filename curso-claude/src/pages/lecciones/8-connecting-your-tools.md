---
layout: ../../layouts/MarkdownLayout.astro
title: "Conectando tus Herramientas"
---
# 🔗 Conectando tus Herramientas
## Tu Ecosistema de Trabajo Integrado con Claude

---

# 🚀 ¿Qué son los Conectores?
Los conectores transforman a Claude de un asistente en un colaborador informado al darle acceso a las mismas herramientas, datos y contexto que usas cada día. En lugar de empezar cada conversación desde cero, Claude puede trabajar directamente con tu información real.

### Puntos Clave:
*   **Lectura y Acción:** Claude puede buscar archivos, recuperar documentos, analizar datos, crear nuevo contenido y ejecutar tareas en tus aplicaciones conectadas.
*   **Protocolo MCP:** El *Model Context Protocol* es como el "USB-C para la IA"—un estándar universal que permite a Claude conectarse a muchas aplicaciones diferentes mediante una única interfaz consistente.
*   **Código Abierto:** Los desarrolladores pueden crear conectores para cualquier herramienta, y estos funcionarán sin problemas con Claude.

---

# 🛠️ Tipos de Conectores

### 🌐 Conectores Web (Nube)
Enlazan Claude con servicios en la nube como **Google Drive, Notion, Slack, Asana, Linear, Stripe** y muchos más.

### 🖥️ Extensiones de Escritorio
Se ejecutan localmente en tu ordenador a través de la **Claude Desktop App**, permitiendo a Claude acceder a:
*   Archivos locales.
*   Control del navegador para tareas automatizadas.
*   Integración con aplicaciones nativas (ej. Figma).

---

# 📋 Cómo Conectar tus Herramientas
Anthropic mantiene un directorio oficial en `claude.ai/directory`.

### Pasos para Conectores Web:
1.  **Busca el Conector:** Ve al directorio o pulsa el botón `+ > Connectors` en cualquier chat.
2.  **Conecta y Autentica:** Inicia sesión con tus credenciales habituales del servicio.
3.  **Otorga Permisos:** Revisa qué puede ver y hacer Claude y autoriza el acceso.
4.  **Prueba:** Haz una petición simple: *"¿Puedes acceder a mi Google Drive?"*.

---

# 💡 Casos de Uso Prácticos

*   **📅 Gestión de Proyectos (Asana/Jira):** "¿Cuáles son mis tareas prioritarias para esta semana?" o "Crea una nueva tarea para revisar el presupuesto".
*   **✉️ Comunicación (Slack/Gmail):** "Busca el hilo de correos sobre el contrato del proveedor" o "Redacta una respuesta al último mensaje de #marketing".
*   **📄 Documentación (Notion/Drive):** "Busca en nuestra documentación las guías de voz de marca" o "Resume las notas de la reunión de ayer".
*   **📊 Herramientas de Negocio (Stripe/Salesforce):** "Muestra las tendencias de ingresos del último trimestre" o "¿Cuál es el estado de la oportunidad Acme Corp?".

---

# 🛡️ Seguridad y Permisos
Conectar Claude es potente, pero se hace con seguridad:

*   **Acceso Limitado:** Los permisos son específicos para lo que el conector necesita. Puedes activarlos o desactivarlos individualmente.
*   **Claude ve lo que tú ves:** Claude solo accede a los datos a los que tú ya tienes acceso. No puede ver el correo de tu jefe si tú no puedes verlo.
*   **Control Total:** Puedes desconectar un servicio en cualquier momento desde los ajustes de Claude o desde la configuración de seguridad del tercero.

> [!CAUTION]
> Al igual que con las "Skills", instala solo conectores de fuentes confiables.
