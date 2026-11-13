# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
versions follow semver. While Bootstrap 6 is in alpha, Breeze carries an
`-alpha.N` suffix.

## [1.0.0-alpha.4] – 2026-11-13

The Breeze design system now uses Bootstrap 6 as its general base (update of 13 Nov 2026).
Breeze for Bootstrap therefore drops its own overrides of that base and follows the design system 1:1.

### Added
- `--bs-color-focus-ring` (light `#85b1f2`, dark `#487ac7`); every theme's focus ring uses it.
- Breeze tokens `--bs-text-md`, `--bs-text-5xl`, `--bs-text-6xl`, `--bs-shadow-md`, `--bs-shadow-xl`, `--bs-radius-sm`, `--bs-radius-4xl`.
- `bz-page-title` (page heading, = h1).
- `bz-form` layout (was documented but missing from the build).

### Fixed
- Fields (`form-control`) are 48 px tall as in the design system (were 50 px).

### Changed
- Breakpoints, spacers and heading sizes are Bootstrap 6 defaults again: `sm` is 576 px, `gap-6` is 1.25rem (the design system’s 24 px field gap is `gap-7`), h1 3xl, h2 2xl, h3 xl, h4 lg.
- Type scale `--bs-text-*` follows Bootstrap 6 (fluid from lg up); card title xl, form section title and totals lg; `bz-display` is the larger intro heading.
- Shadows use the Bootstrap 6 geometry, ink-tinted; cards use `shadow-md`.
- Keyboard focus of buttons, links and segments is the Bootstrap 6 focus ring (3 px, 1 px offset) in the Breeze focus color.

### Removed
- Breeze for Bootstrap’s own overrides of the Bootstrap 6 breakpoints, spacers, heading sizes and focus ring.
- The “Deviations from the design system” entries – the button and field radius is now part of the design system.

## [1.0.0-alpha.3] – 2026-11-12

### Changed
- Fields (`form-control` – input, select, textarea) use the Bootstrap 6 default radius, the same as buttons: `--bs-radius-5` (8 px), `--bs-radius-7` (12 px) for `form-control-lg`. The Breeze for Bootstrap override to 12 px was removed. Recorded as a deviation from the design system in `docs/design-tokens.md`.

## [1.0.0-alpha.2] – 2026-11-10

### Changed
- Buttons use the Bootstrap 6 default radius instead of the design system’s pill shape: `--bs-radius-5` (8 px) for default and small buttons, `--bs-radius-7` (12 px) for `btn-lg`. Recorded as a deviation from the design system in `docs/design-tokens.md`.

## [1.0.0-alpha.1] – 2026-11-01

First release, built on Bootstrap 6.0.0-alpha.1.

### Added
- Breeze tokens as the single source of values (`scss/abstracts/_breeze.scss`) and CSS variables `--bs-color-*`, `--bs-text-*`, `--bs-radius-*`, `--bs-shadow-*`.
- Bootstrap themes (primary, success, warning, danger, secondary, info, accent, inverse), backgrounds, text colors and borders derived from Breeze; new utilities `bg-canvas`, `bg-sunken`, `bg-peach`, `fg-muted`, `border-strong`.
- The Breeze spacing scale (number × 4 px) and Breeze breakpoints (sm 640 px).
- The Breeze look for buttons, fields, checkbox, radio, switch, cards, badges, alerts, progress, table and `nav-pills` navigation.
- Breeze components Bootstrap doesn’t have: `bz-segmented`, `bz-radio-card`, `bz-summary`, `bz-steps`, `bz-form`, `bz-app`, `bz-brand`, `bz-page-header`, `bz-split`, `bz-side-nav`, text styles, `bz-optional`, `bz-field-meta`, `bz-counter`, `bz-input-action`, `bz-icon-button`.
- Manual dark theme (`data-bs-theme`, `data-theme`, `.dark`); optionally automatic via `$auto-dark-mode`.
- `dist/breeze.css`, `dist/breeze.min.css`, showcase page `docs/index.html`.
