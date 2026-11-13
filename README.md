# Breeze for Bootstrap 6

The **Breeze** design system as a theme for Bootstrap 6. Classes, components and
JavaScript come from Bootstrap; the look comes from Breeze. The output is one
prebuilt file like `bootstrap.css`, plus the Sass source for projects with
their own build.

> **Built on an alpha.** Bootstrap 6 is currently at 6.0.0-alpha.1
> (October 2026). Its authors warn that things can still change
> significantly before the beta. Breeze is therefore versioned
> `1.0.0-alpha.N` and Bootstrap is pinned to an exact version. For
> production, use Breeze for Tailwind until Bootstrap 6 reaches at least a beta.

- All components, examples and their HTML: open `docs/index.html`
- Tokens (colors, fonts, spacing) and the mapping to Bootstrap: `docs/design-tokens.md`
- Design source of truth: `docs/breeze/` (the original Breeze design system, in Slovak)

## Prebuilt files

| File | Contents |
|---|---|
| `dist/breeze.min.css` | All of Bootstrap 6 with the Breeze theme and additions. Don’t load Bootstrap itself as well. |
| `dist/breeze.css` | The same, unminified, for reading and debugging. |

About 400 kB, about 55 kB gzipped – 4 kB more than Bootstrap 6 on its own.

## Usage A – prebuilt CSS (e.g. Spring Boot + Thymeleaf)

Copy `dist/breeze.min.css` into `src/main/resources/static/css/`.

```html
<!-- layout.html -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Titillium+Web:wght@400;600;700&display=swap">
<link rel="stylesheet" th:href="@{/css/breeze.min.css}">
<link rel="stylesheet" th:href="@{/css/app.css}">
```

```html
<form th:action="@{/vehicles}" th:object="${vehicle}" method="post" class="bz-form" novalidate>
  <div class="alert theme-danger" role="alert" th:if="${#fields.hasErrors('*')}">
    The form has errors. Fix the marked fields.
  </div>

  <div class="form-field">
    <label for="plate" class="form-label">License plate</label>
    <input type="text" class="form-control" th:field="*{plate}" th:errorclass="is-invalid"
           th:attr="aria-invalid=${#fields.hasErrors('plate')}">
    <div class="invalid-feedback" th:if="${#fields.hasErrors('plate')}" th:errors="*{plate}"></div>
  </div>

  <div class="form-field">
    <label for="fuel" class="form-label">Fuel</label>
    <select class="form-control" th:field="*{fuel}">
      <option th:each="f : ${fuels}" th:value="${f.code}" th:text="${f.name}"></option>
    </select>
  </div>

  <footer class="bz-form__footer">
    <div class="bz-form__actions">
      <a th:href="@{/vehicles}" class="btn-outline theme-secondary">Cancel</a>
      <button type="submit" class="btn-solid theme-primary">Save vehicle</button>
    </div>
  </footer>
</form>
```

Things to know:

- **Field errors:** `.is-invalid` (Bootstrap, `th:errorclass`) or
  `aria-invalid="true"`. Breeze recolors the border and focus, and with
  `aria-invalid` it shows `.invalid-feedback` without JavaScript.
- **Utilities, grid and spacing are Bootstrap’s** (`container`, `row`,
  `md:col-6`, `d-flex`, `gap-7` …) – the Breeze design system uses Bootstrap 6 as its
  base. Its guides (`docs/breeze/`) use Tailwind classes; Tailwind `gap-6` (24 px) is `gap-7` here,
  `gap-4` (16 px) is `gap-5` – see the table in `docs/design-tokens.md`.
- **Your own styles win without `!important`.** Both Bootstrap and Breeze
  live in CSS layers. Tokens have the `--bs-` prefix:

  ```css
  .vehicle--inactive {
    color: var(--bs-color-ink-muted);
    border-left: 4px solid var(--bs-color-line);
  }
  ```

- **Keyboard focus** of buttons and links is Bootstrap’s focus ring (3 px,
  1 px offset) in the Breeze focus color; fields keep the Breeze glow.
- **Dark theme:** `data-bs-theme="dark"` on `<html>` (`data-theme="dark"`
  and the `dark` class work too). As in the design system, it does not switch
  automatically with the system – see `$auto-dark-mode` below.
- **JavaScript** (dialog, menu, carousel …) is only needed for Bootstrap’s
  interactive components; take it from the `bootstrap` package
  (`dist/js/`). No Breeze component requires JavaScript.

## Usage B – Sass in a project with a build

```bash
npm install git+https://git.example.com/frontend/breeze-bootstrap.git#v1.0.0-alpha.4
npm install --save-dev sass postcss postcss-prefix-custom-properties
```

```scss
// src/styles.scss
@use "breeze-bootstrap/scss/breeze" with (
  $auto-dark-mode: false,   // true = dark theme also follows the system
);

// The application's own components go into the custom layer
@layer custom {
  .my-panel { background: var(--color-surface-sunken); }
}
```

Bootstrap 6 writes CSS variables **without a prefix**, and the `--bs-`
prefix is added by PostCSS – so write them without a prefix in your own Sass
too (`var(--color-ink)`). Without the prefix, Bootstrap’s JavaScript would not
work. Compile with `loadPaths: ['node_modules']`, then run PostCSS:

```js
// postcss.config.cjs
module.exports = {
  plugins: [require('postcss-prefix-custom-properties')({ prefix: 'bs-' })],
};
```

`build.mjs` is a complete example of the whole pipeline.

## Classes

Design system component → what to use in Breeze for Bootstrap. Components that
Bootstrap doesn’t have are added with the same `bz-*` classes as
Breeze for Tailwind.

| Design system | Breeze for Bootstrap |
|---|---|
| Button primary / secondary / ghost | `btn-solid theme-primary`, `btn-outline theme-secondary`, `btn-text theme-primary`; sizes `btn-sm`, `btn-lg` |
| Badge | `badge`, `badge theme-success` (primary, warning, danger) |
| Card, sunken | `card` > `card-body` > `card-title`, `card-subtitle`; `card-footer`; recessed `card card-subtle` |
| TextField, Select, Textarea | `form-field` > `form-label` + `form-control` + `form-text` / `invalid-feedback` |
| “(optional)”, counter, button in a field | `bz-optional`, `bz-field-meta` + `bz-counter`, `bz-input-action` + `bz-icon-button` |
| Checkbox, radio | `form-field` > `input.check` / `input.radio` + `label` |
| Switch | `form-field` > `div.switch` > `input[role=switch]` + `label` |
| RadioCard | `bz-radio-card` (Breeze) with `input.radio` |
| Segmented | `bz-segmented` (Breeze); navigation `nav nav-pills` |
| Progress | `progress` > `progress-bar` (`theme-success` …) |
| Steps | `bz-steps` (Breeze) |
| SummaryList | `bz-summary` (Breeze) |
| Table | `table`, numbers `text-end`, total `bz-table-total` |
| Alert | `alert theme-danger` (success, warning), heading `alert-heading` |
| Layout | Bootstrap `container`, `row`, `col-*`, `offset-*`, `row-cols-*`, `g-*` |
| Form, application shell | `bz-form`, `bz-app`, `bz-brand`, `bz-page-header`, `bz-split`, `bz-side-nav` (Breeze) |
| Text | `bz-display` (intro), `bz-page-title` (= h1), `bz-title` (= h2), `bz-heading` (= h3), `bz-section-title` (= h4), `bz-subheading`, `bz-lead`, `bz-icon`; headings h1–h4 use the Bootstrap 6 sizes |

## Browser support

Same as Bootstrap 6: Chrome and Edge 130+, Firefox 132+, Safari 18+.

## Architecture

Based on the [Sass Guidelines](https://sass-guidelin.es/#architecture),
trimmed to what a theme needs. No `@import`, only `@use` / `@forward`.

```
breeze-bootstrap/
├── scss/
│   ├── abstracts/                  # no CSS output
│   │   ├── _breeze.scss            # Breeze tokens – the single source of values
│   │   ├── _bootstrap-config.scss  # Bootstrap token maps derived from Breeze
│   │   ├── _settings.scss          # $auto-dark-mode
│   │   └── _mixins.scss            # dark
│   ├── base/_page.scss             # color mode, background, headings
│   ├── components/                 # Bootstrap adjustments + Breeze components
│   └── breeze.scss                 # entry: abstracts → Bootstrap with (…) → base → components
├── dist/                           # built CSS – committed to git
├── docs/                           # examples, tokens, copy of the design system
├── build.mjs                       # Sass → PostCSS (--bs- prefix)
├── CHANGELOG.md
├── CLAUDE.md                       # instructions for Claude Code
└── package.json
```

Values flow one way: `_breeze.scss` → CSS variables `--bs-color-*` →
Bootstrap themes (`--bs-primary-bg` = `var(--bs-color-primary)`). Changing a
color at runtime (`--bs-color-primary`) therefore carries over to Bootstrap’s
components too. All Breeze CSS lives in `@layer custom`, which Bootstrap
reserves for it.

## Development

```bash
npm install
npm run build    # dist/breeze.css and dist/breeze.min.css
npm run watch    # rebuilds on every change in scss/
```

Then open `docs/index.html`.

**New Bootstrap version:** change the exact version in `package.json`, run
`npm install` and `npm run build`, and go through `docs/index.html` in the
light and dark theme. Alphas can change token names and markup (for example,
the switch is a `div.switch` wrapper around the input).

**Releasing:** version in `package.json` and in the header of
`scss/breeze.scss`, `CHANGELOG.md`, `npm run build`, git tag. The package
name stays lowercase (`breeze-bootstrap`) because npm does not allow capitals.
