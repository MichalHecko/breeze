# Breeze for Bootstrap 6 – tokens

The Breeze values live in `scss/abstracts/_breeze.scss` (source:
`docs/breeze/tokens.json`). In the prebuilt CSS they are variables with the
`--bs-` prefix and, thanks to `light-dark()`, switch automatically in the dark
theme. In your application's own CSS: `color: var(--bs-color-ink-muted);` (in
your own Sass, without the prefix). Everything that the design system takes from Bootstrap 6
is Bootstrap's own default here – Breeze for Bootstrap does not override it.

Breeze is built in layers: **Bootstrap 6 is the base** (breakpoints, containers,
grid, spacers, radius and type scales, shadow geometry, layers, control sizes,
focus), **Tailwind is the engine** (classes, `p-*`/`m-*`/`gap-*` in 0.25rem
steps), **Breeze is the theme** (colors, fonts, airy forms).

## Colors

| Variable | Light | Dark | Use |
|---|---|---|---|
| `--bs-color-canvas` | `#f5f8fd` | `#0d131e` | Page background behind cards |
| `--bs-color-surface` | `#ffffff` | `#151d2b` | Cards, fields, modals |
| `--bs-color-surface-sunken` | `#eff2f6` | `#1c2534` | Recessed surfaces, segment track, row hover |
| `--bs-color-primary-soft` | `#e8f0fe` | `#142a4d` | Selected row, ghost button hover, primary badge |
| `--bs-color-line` | `#e2e7ef` | `#273246` | Decorative lines and dividers – never the only boundary of a control |
| `--bs-color-line-strong` | `#7d889b` | `#6d7a91` | Field and unselected radio borders (min. 3:1) |
| `--bs-color-ink` | `#1a2438` | `#e8eef8` | Main text and headings |
| `--bs-color-ink-muted` | `#5a667b` | `#9ba8bd` | Secondary text, placeholders, hints |
| `--bs-color-primary` | `#0b63e5` | `#5c9dff` | Main action, current step, selected option |
| `--bs-color-primary-hover` | `#0a55c6` | `#82b4ff` | Primary button hover |
| `--bs-color-on-primary` | `#ffffff` | `#0b1424` | Text on primary – dark in the dark theme |
| `--bs-color-link` | = primary | = primary | Links and inline actions |
| `--bs-color-focus-ring` | `#85b1f2` | `#487ac7` | Keyboard focus of buttons, links and segments (Bootstrap 6) |
| `--bs-color-dusk` | `#5a78a3` | `#809dc8` | Accent for illustrations and backgrounds – not for states |
| `--bs-color-peach` | `#f6dccf` | `#dcae99` | Warm accent for section backgrounds |
| `--bs-color-on-peach` | `#1a2438` | `#1a2438` | Text on peach |
| `--bs-color-success` / `-soft` | `#12795a` / `#e3f4ee` | `#4fc99b` / `#10302a` | Success, discount |
| `--bs-color-warning` / `-soft` | `#955700` / `#fdf1dc` | `#f0b358` / `#33260f` | Warning |
| `--bs-color-danger` / `-soft` | `#c0283a` / `#fde8ea` | `#ff8b95` / `#3a1a20` | Error, destructive action |

State colors always come with a word or an icon, never color alone.

## Fonts and type

| Variable | Value | Use |
|---|---|---|
| `--bs-font-sans` | Figtree | Default font, forms, reading |
| `--bs-font-display` | Titillium Web | Headings and amounts |

Loading: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Titillium+Web:wght@400;600;700&display=swap`

Bootstrap 6 type scale (`--bs-font-size-*`; Breeze aliases `--bs-text-*`): `xs` .75 · `sm` .875 · `md` (= `base`) 1 ·
`lg` 1.125–1.25 · `xl` 1.5–1.75 · `2xl` 1.75–2 · `3xl` 2–2.5 · `4xl` 2.25–3 ·
`5xl` 3–4 · `6xl` 3.75–5rem. From `lg` up the size grows with the viewport.

| Style | Class / element | Size | Weight |
|---|---|---|---|
| Intro heading | `.bz-display` | `4xl`, tracking −0.025 em | display 600 |
| Page heading | `.bz-page-title`, `h1` | `3xl` | display 600 |
| Form, panel, dialog | `.bz-title`, `h2` | `2xl` | display 600 |
| Card | `.bz-heading`, `h3`, `.card-title` | `xl` | display 600 |
| Section, total | `.bz-section-title`, `h4`, `.bz-form__section-title`, totals | `lg` | display 600 |
| Subheading | `.bz-subheading` | `md` | sans 600 |
| Lead | `.bz-lead` | `lg`, ink-muted | sans 400 |
| Body | text | `md` 16 px (inputs too – no iOS zoom) | sans 400 |
| Label | `.form-label` | `sm` | sans 600 (Bootstrap 6 uses 500) |
| Hint | `.form-text`, `.invalid-feedback` | `sm` | sans 400 |
| Caption | `.bz-caption`, `.badge` | `xs`, tracking 0.025 em | sans 600 |

## Layout (Bootstrap 6)

| Breakpoint | Prefix | From | `container` |
|---|---|---|---|
| xs | – | 0 | 100 % |
| sm | `sm:` | 576 px | 540 px |
| md | `md:` | 768 px | 720 px |
| lg | `lg:` | 1024 px | 960 px |
| xl | `xl:` | 1280 px | 1200 px |
| 2xl | `2xl:` | 1536 px | 1440 px |

- Containers: `container` (fixed width per the table) or `container-fluid` (100 %), 0.75rem padding per side; `container-fluid md:container`.
- Grid: `row` with `col`, `col-auto`, `col-1` … `col-12`, `offset-0` … `offset-11`, `row-cols-1` … `row-cols-6`, `row-cols-auto`; responsive with a prefix: `col-12 md:col-6 xl:col-4`.
- Gutters: 1.5rem horizontal, 0 vertical by default; `g-*`, `gx-*`, `gy-*` with spacer keys 0–12.
- These are Bootstrap's own classes, including the responsive prefix syntax (`md:col-6`).

## Spacing

All spacing utilities here – `p-*`, `m-*`, `gap-*` and the grid gutters `g-*` –
use the **Bootstrap 6 spacers**, which Breeze adopted as its base:
`--bs-spacer-0` … `--bs-spacer-12` = 0 · .25 · .375 · .5 · .75 · 1 · 1.25 · 1.5 ·
1.75 · 2 · 2.25 · 2.5 · 3rem. Breeze components use `--bs-spacing` (0.25rem)
internally, exactly like the design system's Tailwind classes.

The design system guides (`docs/breeze/`) are written with Tailwind classes. Their equivalents here:

| Design system (Tailwind) | Size | Breeze for Bootstrap |
|---|---|---|
| `gap-1` | 4 px | `gap-1` |
| `gap-2` | 8 px | `gap-3` |
| `gap-3` | 12 px | `gap-4` |
| `gap-4` | 16 px | `gap-5` |
| `gap-6` | 24 px | `gap-7` |
| `gap-8` | 32 px | `gap-9` |
| `gap-12` | 48 px | `gap-12` |

Form rules (Breeze): label → field 8 px, field → field 24 px (`gap-7`), fields
side by side 16 px (`gap-5`), buttons and options 12 px (`gap-4`), form sections
32 px with a line; form card 32 px vertical, 40 px horizontal padding.

## Radii

Bootstrap 6 scale `--bs-radius-0` … `--bs-radius-9` (0 · .125 · .1875 · .25 · .375 ·
.5 · .625 · .75 · .875 · 1rem) and `--bs-radius-pill`. Tailwind names are aliases:
`--bs-radius-lg` = `--bs-radius-5`, `--bs-radius-xl` = `--bs-radius-7`, `--bs-radius-2xl` = `--bs-radius-9`.

| Variable | Value | Use |
|---|---|---|
| `--bs-radius-md` | 6 px | Checkbox |
| `--bs-radius-lg` (`5`) | 8 px | Buttons (sm, md) and fields, icon button |
| `--bs-radius-xl` (`7`) | 12 px | Large button, selection row, active segment, alert |
| `--bs-radius-2xl` (`9`) | 16 px | Cards, segment track |
| `--bs-radius-3xl` | 24 px | Modals, recessed groups (Breeze override – not in Bootstrap 6) |
| `--bs-radius-pill` | – | Badges, radios, switches |

Keep corners concentric: inner radius = outer radius − padding.

## Shadows

Bootstrap 6 geometry, ink-tinted, stronger in the dark theme.

| Variable | Use |
|---|---|
| `--bs-shadow-xs` | Fields, secondary button, active segment |
| `--bs-shadow-sm` | Small floating elements, switch thumb |
| `--bs-shadow-md` | Cards (Bootstrap 6 `.shadow`) |
| `--bs-shadow-lg` | Menus, drawers |
| `--bs-shadow-xl` | Dialogs |

## Controls and focus

- **General base (Bootstrap 6)** for dense UIs, tables and toolbars:
  `--bs-btn-input-min-height` 2.375rem (38 px), `-sm-` 2rem, `-lg-` 2.75rem,
  `-xs-` 1.5rem; padding `--bs-btn-input-padding-y` .375rem / `-x` .75rem; radius `--bs-radius-5`.
- **Breeze form overrides**: fields (`form-control`) 48 px via
  `--bs-control-min-height`; buttons (`btn-*`) are the Breeze Button – 44 px,
  `btn-sm` 36 px, `btn-lg` 52 px – via `--bs-btn-input-min-height` and its
  `-sm-`/`-lg-` variants. For a dense toolbar use `btn-sm`.
- **Keyboard focus** of buttons, links and segments: the Bootstrap 6 focus ring –
  `--bs-focus-ring-width` 3 px solid `--bs-color-focus-ring`, `--bs-focus-ring-offset` 1 px
  (Bootstrap's own focus styles; `--bs-focus-ring-color` = `--bs-color-focus-ring`). In the light theme this color has only 2.2:1 on
  `surface` (as in Bootstrap 6); where you need 3:1, use the primary color.
- **Fields, checkboxes, radios, switches** keep the Breeze glow: primary/60 border
  + 4 px primary/25 ring (danger/25 on error).

## Layers

Bootstrap 6 layer values (z-index): menu 1000 · sticky 1010 · fixed 1020 ·
drawer 1030 · dialog 1040 · popover 1050 · tooltip 1060 · toast 1070.

## Deviations from the design system

None. Breeze for Bootstrap follows the Breeze design system 1:1. (The button
and field radius introduced here in alpha.2–alpha.3 is now part of the design
system itself.) If you add a
deliberate deviation, list it here – `CLAUDE.md` tells Claude Code to keep it.

## Mapping to Bootstrap

| Breeze | Bootstrap token |
|---|---|
| primary, primary-hover, primary-soft, on-primary | `--bs-primary-bg` / `-fg`, `-fg-emphasis`, `-bg-subtle`, `-contrast` |
| success, warning, danger (+ `-soft`) | `--bs-{success,warning,danger}-bg` / `-fg`, `-bg-subtle` |
| surface-sunken, line, ink (neutral) | the `secondary` theme (secondary button, neutral badge) |
| dusk | the `info` and `accent` themes |
| surface | `--bs-bg-body` (cards, fields), `--bs-card-bg`, `--bs-control-bg` |
| canvas | `body` background, `--bs-bg-1`, utility `bg-canvas` |
| ink, ink-muted | `--bs-fg-body`, `--bs-fg-2`, utility `fg-muted` |
| line, line-strong | `--bs-border-color`, `--bs-control-border-color`, utility `border-strong` |
| focus-ring | `--bs-focus-ring-color` and every theme's `focus-ring` |
| shadow-md | `--bs-card-box-shadow` |

## UI copy

Breeze is written for Slovak user interfaces. Its copy rules:

- Factual and friendly, formal address (“vy”): „Vytvorte si účet“ (Create your account).
- Sentence case, no exclamation marks or emoji.
- The button says what will happen: „Uložiť vozidlo“ (Save vehicle), not “OK”.
- Optional fields: „(nepovinné)“ (optional) after the label; required fields are not marked.
- An error says how to fix it: „Zadajte celé EČV, napr. TN123AB.“ (Enter the full license plate, e.g. TN123AB.)
- Amounts in Slovak format: `59,07 €`, discount `−7,95 €`.
