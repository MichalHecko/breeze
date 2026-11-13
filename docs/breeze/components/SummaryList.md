# SummaryList

Zoznam párov popis – suma so zvýraznenou celkovou sumou — súhrn objednávky alebo kalkulácia.

**Konzument dodá:** `items` (`{label, value, tone?: 'discount'}`) s naformátovanými sumami, voliteľne `total` (`{label, value, note}`).

- `dl flex flex-col gap-5`; popisky `text-ink-muted`, sumy `text-ink tabular-nums`, zľava `text-success` so znamienkom „−“.
- Celková suma `mt-6 border-t border-line pt-6 font-display text-lg font-semibold`; poznámka `text-sm text-ink-muted`.
