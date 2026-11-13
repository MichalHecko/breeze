# Segmented

Segmentový prepínač pre 2–5 vzájomne sa vylučujúcich možností, ktoré chcete ukázať naraz.

**Konzument dodá:** `options` (`{value, label, icon?}`), `label` alebo `aria-label`, `value`/`onChange` alebo `defaultValue`.

- Dráha `rounded-2xl bg-surface-sunken p-1`, segment `h-10 rounded-xl` (sústredne: 16 − 4 = 12px); aktívny `bg-surface border-line shadow-xs text-ink`, ostatné `text-ink-muted`.
- Klávesnica: šípky menia výber (`role="radiogroup"`). Viac ako 5 možností → `Select`.
