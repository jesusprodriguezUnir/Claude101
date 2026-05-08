# AGENTS

Guia breve para que agentes de codigo sean productivos en este proyecto.

## Alcance y stack

- Proyecto principal en esta carpeta.
- Stack: Astro + Tailwind CSS.
- Sitio de contenido en espanol con rutas estaticas.

## Comandos de trabajo

Ejecutar desde [package.json](package.json):

- `npm run dev` inicia desarrollo.
- `npm run build` genera salida en `dist/`.
- `npm run preview` sirve la build local.

No hay scripts de test/lint definidos actualmente.

## Archivos clave

- [src/layouts/Layout.astro](src/layouts/Layout.astro): layout global, navbar, estilos globales y scripts de animacion.
- [src/pages/index.astro](src/pages/index.astro): pagina principal y estructura de semanas.
- [src/pages/recursos.astro](src/pages/recursos.astro): listado de recursos.
- [src/pages/glosario.astro](src/pages/glosario.astro): terminos y definiciones.
- [tailwind.config.mjs](tailwind.config.mjs): paleta y utilidades visuales personalizadas.
- [astro.config.mjs](astro.config.mjs): integraciones Astro.

## Convenciones del proyecto

- Idioma de UI y contenido: espanol.
- Estilos principalmente con clases Tailwind inline en archivos `.astro`.
- Datos de contenido actualmente en arrays dentro del frontmatter de cada pagina.
- Tema visual oscuro y acentos `amber`/`carbon`.

## Limites y seguridad de edicion

- No editar directorios generados: `dist/`, `.astro/`, `node_modules/`.
- Priorizar cambios minimos y consistentes con el estilo existente.
- Si una tarea requiere datos reutilizables, proponer extraccion a `src/components/` o `src/content/` antes de refactor grande.

## Referencias existentes (enlazar, no duplicar)

- Skill Astro: [.agents/skills/astro/SKILL.md](.agents/skills/astro/SKILL.md)
- Skill Frontend: [.agents/skills/frontend-design/SKILL.md](.agents/skills/frontend-design/SKILL.md)
- Skill SEO: [.agents/skills/seo/SKILL.md](.agents/skills/seo/SKILL.md)

## Flujo recomendado para agentes

1. Revisar primero `Layout.astro` y la pagina objetivo.
2. Confirmar si el cambio es de contenido (datos en frontmatter) o de estructura visual (Tailwind/layout).
3. Ejecutar `npm run build` tras cambios relevantes.
4. Mantener accesibilidad basica (atributos `aria`, contraste, foco visible) en cambios UI.