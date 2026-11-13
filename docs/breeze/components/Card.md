# Card

Biela karta na `bg-canvas` — základný kontajner sekcie formulára alebo kroku pokladne.

**Konzument dodá:** `title`, obsah ako `children`, voliteľne `description`, `actions` (vpravo v hlavičke), `collapsed` (iba hlavička pre budúci krok), `tone="sunken"` (zapustená skupina vnútri karty alebo modálu).

- `rounded-2xl bg-surface shadow-md px-10 py-8` (prepis Breeze pre formuláre), nadpis `font-display text-xl font-semibold`, obsah `flex flex-col gap-6`.
- `sunken`: `rounded-3xl bg-surface-sunken px-8 py-6`, bez tieňa, nadpis `text-base font-semibold`.
- Kroky formulára dávajte ako karty pod sebou s `gap-4`; budúce kroky `collapsed`.
