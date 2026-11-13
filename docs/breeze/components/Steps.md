# Steps

Číslovaný ukazovateľ krokov viackrokového formulára (pokladňa, sprievodca).

**Konzument dodá:** `steps` (popisky), `current` (index od 0).

- `font-display text-lg font-semibold`, kroky `gap-x-10`. Aktuálny `text-primary` s `border-b-2 border-primary`, hotové `text-ink`, budúce `text-ink-muted`; stav nesie aj podčiarknutie a `aria-current`.
