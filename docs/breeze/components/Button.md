# Button

Tlačidlo pre akcie so zaoblením ako predvolené v Bootstrap 6; `primary` je hlavná akcia obrazovky a smie byť iba jedna.

**Konzument dodá:** text ako `children`, `onClick`, voliteľne `variant` (`primary` | `secondary` | `ghost`), `size` (`sm` | `md` | `lg`), `block`, `icon` a `type="submit"` vo formulári.

- `primary` — „Použiť túto adresu“, „Vytvoriť účet“. `secondary` — „Zrušiť“, „Späť“, stojí vľavo od primárneho. `ghost` — doplnková textová akcia.
- Text je sloveso, ktoré hovorí, čo sa stane — nie „OK“.
- Výška je prepis Breeze pre vzdušné formuláre: `md` `h-11` (44px), `sm` `h-9`, `lg` `h-13`. Všeobecný základ Bootstrap 6 je 38px (pozri README).
- Fokus z klávesnice: helper `focus-ring` (Bootstrap 6, 3px čiara s odstupom 1px).
- Zaoblenie: `sm` a `md` `rounded-lg` (8px, v Bootstrap 6 `--radius-5`), `lg` `rounded-xl` (12px, `--radius-7`). Platí pre všetky varianty vrátane `ghost`.

**Tailwind bez Reactu**

```html
<button class="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-medium text-on-primary transition-colors hover:bg-primary-hover focus-ring disabled:opacity-45">Pokračovať</button>
<button class="inline-flex h-11 items-center rounded-lg border border-line bg-surface px-6 font-medium text-ink shadow-xs hover:border-line-strong">Zrušiť</button>
<button class="inline-flex h-11 items-center rounded-lg px-3 font-medium text-link hover:bg-primary-soft">Pridať novú adresu</button>
```
