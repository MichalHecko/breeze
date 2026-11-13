# TextField

Jednoriadkové textové pole s popiskom nad ním a nápovedou alebo chybou pod ním.

**Konzument dodá:** `label`, voliteľne `placeholder`, `hint`, `error` (text správy), `optional` (pridá „(nepovinné)“), `trailing` (napr. tlačidlo „zobraziť heslo“), `value`/`onChange` alebo `defaultValue` a natívne atribúty `input` (`type`, `name`, `required`, `autoComplete`).

- Výška `h-12`, `rounded-lg` (8px, rovnako ako tlačidlo), okraj `border-line-strong` (3:1), `shadow-xs`; fokus ako v Bootstrape: `focus:border-primary/60 focus:ring-4 focus:ring-primary/25`, bez outline.
- `error` prefarbí okraj aj správu na `danger` a nastaví `aria-invalid`. Správa hovorí, ako chybu opraviť.
- Placeholder nie je popisok — popisok je vždy viditeľný.

**Tailwind bez Reactu**

```html
<div class="flex flex-col gap-2">
  <label for="email" class="text-sm font-semibold text-ink">E-mail</label>
  <input id="email" type="email" class="block h-12 w-full rounded-lg border border-line-strong bg-surface px-4 text-base text-ink shadow-xs placeholder:text-ink-muted hover:border-ink-muted transition-[border-color,box-shadow] duration-150 focus:border-primary/60 focus:outline-hidden focus:ring-4 focus:ring-primary/25">
  <p class="text-sm text-ink-muted">Pošleme naň potvrdenie registrácie.</p>
</div>
```
