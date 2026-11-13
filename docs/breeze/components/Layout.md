# Layout

Ukážka layoutu podľa Bootstrap 6 v Tailwinde: breakpointy, kontajnery, 12-stĺpcová mriežka, medzery, spacery, rádiusy a tiene.

Nie je to komponent v `bundle.js`. Sú to utility z `assets/Tailwind/theme.css`, ktoré použijete priamo v HTML.

- **Kontajner:** `container` (pevná šírka 540 / 720 / 960 / 1200 / 1440px od `sm` po `2xl`) alebo `container-fluid` (100 %). Padding 0,75rem na stranu. Šírka až od istého breakpointu: `container-fluid md:container`.
- **Mriežka:** `row` a v nej `col`, `col-auto`, `col-1` … `col-12`, `offset-1` … `offset-11`; na riadku `row-cols-1` … `row-cols-6`, `row-cols-auto`. Responzívne s prefixom ako v Bootstrap 6: `col-12 md:col-6 xl:col-4`.
- **Medzery mriežky:** `g-*`, `gx-*`, `gy-*` s kľúčmi spacerov Bootstrap 6 (0–12). Predvolene `gx-7` (1,5rem) a `gy-0`.
- **Pozor na dve škály:** `g-3` je spacer Bootstrap 6 (0,5rem), `gap-3` a `p-3` sú Tailwind (0,75rem). Tabuľka v náhľade ukazuje, ktorá trieda Tailwindu zodpovedá ktorému spaceru.
- **CSS Grid:** keď netreba Bootstrap riadky, použite Tailwind `grid grid-cols-12 gap-6` a `col-span-*`. Do CSS gridu nevkladajte `col-*` z Bootstrap mriežky, Tailwind by im pridal aj `grid-column`.

```html
<main class="container py-8">
  <div class="row gy-7">
    <div class="col-12 lg:col-8">…obsah…</div>
    <aside class="col-12 lg:col-4">…bočný panel…</aside>
  </div>
</main>
```
