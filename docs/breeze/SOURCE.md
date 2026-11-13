# Source of truth: the Breeze design system

This folder is an unmodified copy of the **Breeze** design system from the
“Breeze” artifact on claude.ai (last change 13 Nov 2026: general base from
Bootstrap 6 – breakpoints, containers, grid and gutters, spacers, radii, type,
shadows, layers, focus; Breeze forms as overrides). Breeze for Bootstrap takes its tokens 1:1
and follows its component rules. The design system files are in Slovak and are kept verbatim.

- `README.md` – principles, layout, colors, typography, forms, accessibility, tone of voice
- `tokens.json` – every token for the light and dark theme
- `tailwind-theme.css` – the original Tailwind v4 theme with the Bootstrap 6 layout
- `components/*.md` – component guides (including `Layout.md`)
- `components/bundle.js` – the Breeze React components; the exact Tailwind classes for each component
- `components/RegistrationForm.preview.html` – the long form pattern

When Breeze changes, replace this folder with the new version and carry the
changes over to `scss/abstracts/_breeze.scss` and the affected components.
