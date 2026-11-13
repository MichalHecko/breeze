# Select

Natívny rozbaľovací výber so vzhľadom poľa a šípkou vpravo — pre dlhšie zoznamy možností.

**Konzument dodá:** `options` (reťazce, čísla alebo `{value, label, disabled}`), `label` alebo `aria-label`, voliteľne `placeholder`, `hint`, `error`, `optional`, `value`/`onChange` alebo `defaultValue`.

- Vyzerá ako `TextField` (`h-12 rounded-lg border-line-strong`), navyše `appearance-none pr-11` a šípka `text-ink-muted`.
- 2–5 vzájomne sa vylučujúcich možností → `Segmented`; voľba s kontextom → `RadioCard`.
- Súvisiace výbery (deň / mesiac / rok) dajte do mriežky `grid grid-cols-3 gap-4`.
