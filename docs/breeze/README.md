Breeze je dizajn systém pre webové aplikácie postavený na **Tailwind CSS v4** s layoutom a škálami z **Bootstrap 6**. Bootstrap 6 dáva všeobecný základ: breakpointy, kontajnery, 12-stĺpcovú mriežku, medzery, spacery, rádiusy, písmo, tiene, vrstvy a veľkosti ovládacích prvkov. Tailwind je motor tried. Breeze k tomu pridáva tému: pokojné modrasté plochy, jednu sebavedomú modrú pre akciu, teplý broskyňový doplnok a vzdušné formuláre, ktoré niekde zámerne prepisujú Bootstrap.

## Ako Breeze použiť

- Pridajte do projektu `assets/Tailwind/theme.css` (ako `breeze-theme.css`) a importujte ho hneď za Tailwind:

  ```css
  @import "tailwindcss";
  @import "./breeze-theme.css";
  ```

- Písma načítajte v `<head>`: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Titillium+Web:wght@400;600;700&display=swap`.
- Na `<body>` dajte `bg-canvas font-sans text-ink antialiased`.
- Tmavá téma: `data-theme="dark"` alebo `class="dark"` na `<html>`. Sémantické farby sa prepnú samy — `dark:` varianty sú potrebné iba výnimočne.
- React komponenty sú v `components/bundle.js` ako `window.Breeze` (React 18). Ak ich používate s buildom Tailwindu, pridajte súbor do skenovania: `@source "./cesta/k/breeze-bundle.js";`. Každý komponent má v návode aj čisté HTML s triedami Tailwindu.

## Princípy

- **Bootstrap 6 je základ, Tailwind je motor, Breeze je téma.** Rozmery a škály berte z tohto systému (Bootstrap 6), triedy píšte v Tailwinde. Nevymýšľajte vlastné hodnoty v hranatých zátvorkách.
- **Všeobecné pre aplikácie, vzdušné pre formuláre.** Prehľady, tabuľky a panely nástrojov stavajte na všeobecnom základe. Formulárové komponenty Breeze majú vlastné, väčšie rozmery (pozri Prepisy Breeze).
- **Sémantické farby, nie paleta.** Používajte `bg-surface`, `text-ink`, `bg-primary`, nie `bg-white`, `text-slate-900` či `bg-blue-600` — iba sémantické farby fungujú v tmavej téme.
- **Jedna modrá, jedna akcia.** `bg-primary` patrí hlavnej akcii obrazovky, aktuálnemu kroku a zvolenej voľbe — na obrazovke je najviac jedno primárne tlačidlo.
- **Vrstvy namiesto rámikov.** Hierarchiu tvorí `bg-canvas` → `bg-surface` → `bg-surface-sunken` a jemný tieň.

## Layout (Bootstrap 6)

Živá ukážka všetkého v tejto sekcii je v komponente `Layout`.

| Breakpoint | Prefix | Od šírky | `container` |
| --- | --- | --- | --- |
| xs | — | 0 | 100 % |
| sm | `sm:` | 576px | 540px |
| md | `md:` | 768px | 720px |
| lg | `lg:` | 1024px | 960px |
| xl | `xl:` | 1280px | 1200px |
| 2xl | `2xl:` | 1536px | 1440px |

- **Breakpointy** sú mobile-first (min-width). Oproti predvolenému Tailwindu sa líši len `sm` (576px namiesto 640px).
- **Kontajner:** stránku obaľte do `container` (pevná šírka podľa tabuľky) alebo `container-fluid` (100 %). Padding je polovica medzery mriežky, 0,75rem na stranu. Fluidný do istého breakpointu: `container-fluid md:container`.
- **Mriežka:** 12 stĺpcov, `row` a `col`, `col-auto`, `col-1` … `col-12`, `offset-1` … `offset-11`, `row-cols-1` … `row-cols-6`. Responzívne triedy majú prefix ako v Bootstrap 6: `col-12 md:col-6 xl:col-4`.
- **Medzery mriežky:** predvolene 1,5rem vodorovne a 0 zvislo. Menia ich `g-*`, `gx-*`, `gy-*` s kľúčmi spacerov 0–12 (napr. `gx-5` = 1rem, `gy-7` = 1,5rem).
- **Spacery** Bootstrap 6 (`--spacer-0` … `--spacer-12`): 0 · .25 · .375 · .5 · .75 · 1 · 1.25 · 1.5 · 1.75 · 2 · 2.25 · 2.5 · 3rem. Pre `p-*`, `m-*`, `gap-*`, `w-*`, `h-*` ostáva Tailwind (násobky 0,25rem). Každý spacer má presnú triedu: spacer-5 (1rem) = `p-4`, spacer-7 (1,5rem) = `p-6`, spacer-12 (3rem) = `p-12`. Pozor: `g-3` je 0,5rem, ale `gap-3` je 0,75rem.
- **CSS Grid** z Tailwindu (`grid grid-cols-12 gap-6`, `col-span-*`) je v poriadku pre dashboardy. Bootstrap triedy `col-*` používajte iba v `row`.
- **Vrstvy:** `z-menu` 1000 · `z-sticky` 1010 · `z-fixed` 1020 · `z-drawer` 1030 · `z-dialog` 1040 · `z-popover` 1050 · `z-tooltip` 1060 · `z-toast` 1070.

## Obsah a tón

- Píšte vecne a priateľsky, vykajte: „Vytvorte si účet“, „Použiť túto adresu“.
- Vetné písmo (veľké iba prvé písmeno), bez výkričníkov a bez emoji v UI.
- Tlačidlo hovorí, čo sa stane: „Vytvoriť účet“, „Pokračovať“, nie „OK“.
- Nepovinné polia označte „(nepovinné)“ za popiskom; povinné sa neoznačujú.
- Chybová správa hovorí, ako chybu opraviť: „Doplňte celú e-mailovú adresu, napr. jana@example.sk.“
- Sumy po slovensky: `59,07 €`; zľava `−7,95 €`.

## Farby

- Stránka `bg-canvas`, obsah na kartách `bg-surface shadow-md`, zapustené skupiny `bg-surface-sunken`.
- Text `text-ink`; sekundárny text, placeholdery a nápovedy `text-ink-muted`.
- `bg-primary text-on-primary hover:bg-primary-hover` pre hlavné tlačidlo; `text-link` pre odkazy; `bg-primary-soft` pre zvolený riadok.
- Okraje polí `border-line-strong` (3:1); dekoratívne linky a oddeľovače `border-line`.
- `bg-dusk` a `bg-peach` sú dekoratívne doplnky pre ilustrácie a pozadia sekcií, nikdy pre stavy. Text na `bg-peach` je `text-on-peach`.
- Stavy `text-success`, `text-warning`, `text-danger` na `bg-surface` alebo vlastnom `bg-*-soft`, vždy so slovom alebo ikonou.

## Typografia

- `font-sans` = **Figtree** (predvolené písmo), `font-display` = **Titillium Web** pre nadpisy a sumy.
- Škála je z Bootstrap 6: `text-xs` .75 · `text-sm` .875 · `text-md` (= `text-base`) 1 · `text-lg` 1,125–1,25 · `text-xl` 1,5–1,75 · `text-2xl` 1,75–2 · `text-3xl` 2–2,5 · `text-4xl` 2,25–3 · `text-5xl` 3–4 · `text-6xl` 3,75–5rem. Od `text-lg` vyššie veľkosť rastie plynulo so šírkou okna.
- Úvodný nadpis `font-display text-4xl font-semibold tracking-tight`; nadpis stránky `font-display text-3xl font-semibold`; formulára, panelu či dialógu `font-display text-2xl font-semibold`; karty `font-display text-xl font-semibold`; sekcie `font-display text-lg font-semibold`.
- Text `text-md` (aj vo vstupoch — 16px zabráni zoomu na iOS), úvod `text-lg text-ink-muted`, popisky polí `text-sm font-semibold`, nápovedy `text-sm text-ink-muted`, odznaky `text-xs font-semibold tracking-wide`.
- Sumy a čísla v tabuľkách `tabular-nums`.

## Rádiusy a tiene

- Škála Bootstrap 6: `rounded-1` .125 · `rounded-2` .1875 · `rounded-3` .25 · `rounded-4` .375 · `rounded-5` .5 · `rounded-6` .625 · `rounded-7` .75 · `rounded-8` .875 · `rounded-9` 1rem · `rounded-pill`. Názvy Tailwindu sú aliasy: `rounded-lg` = `rounded-5`, `rounded-xl` = `rounded-7`, `rounded-2xl` = `rounded-9`.
- Tlačidlá a polia `rounded-5` (`rounded-lg`), veľké tlačidlo `rounded-7`; riadky výberu a aktívny segment `rounded-xl`; karty a segmentová dráha `rounded-2xl`; checkbox `rounded-md`; odznaky, rádiá a prepínače `rounded-pill`. Modály a zapustené skupiny `rounded-3xl` sú prepis Breeze (Bootstrap 6 takú hodnotu nemá).
- Rohy držte sústredné: `rounded-2xl p-1` dráha nesie segment `rounded-xl`.
- Tiene majú geometriu Bootstrap 6: polia a sekundárne tlačidlá `shadow-xs`, drobné plávajúce prvky `shadow-sm`, karty `shadow-md` (v Bootstrap 6 `.shadow`), menu a vysúvacie panely `shadow-lg`, dialógy `shadow-xl`. Farba je tónovaná ink, v tmavej téme silnejšia.

## Ovládacie prvky a fokus

- **Všeobecný základ (Bootstrap 6):** tlačidlá a polia vysoké 2,375rem (38px), `sm` 2rem, `lg` 2,75rem, `xs` 1,5rem; padding `py-1.5 px-3`; `rounded-5`. Použite ich pre husté rozhrania, tabuľky a panely nástrojov.
- **Fokus z klávesnice** pre tlačidlá, odkazy a segmenty je helper `focus-ring` ako v Bootstrap 6: 3px plná čiara s odstupom 1px vo farbe `color-focus-ring`. Vo svetlej téme má táto farba podľa Bootstrap 6 len 2,2:1 na `bg-surface`; ak potrebujete splniť 3:1, použite `focus-visible:outline-primary`.

## Prepisy Breeze pre formuláre

Formulárové komponenty Breeze zámerne nepoužívajú husté rozmery Bootstrapu:

- Pole (`TextField`, `Select`) `h-12` (48px), `px-4`, `rounded-lg`, `border-line-strong`, `shadow-xs`; `Textarea` `min-h-28 py-3`.
- Tlačidlo `md` `h-11` (44px, = Bootstrap 6 lg), `sm` `h-9`, `lg` `h-13`; padding `px-6`.
- Fokus polí, checkboxov, rádií a prepínačov je mäkká žiara namiesto čiary: `focus:outline-hidden focus:border-primary/60 focus:ring-4 focus:ring-primary/25` (pri chybe `focus:ring-danger/25`), prechod `transition-[border-color,box-shadow] duration-150`.
- Popisok poľa `text-sm font-semibold` (Bootstrap 6 má 500).
- Karta formulára `rounded-2xl px-10 py-8`, sekcie `gap-8` s `border-t border-line pt-8`, polia pod sebou `gap-6`, vedľa seba `gap-4`, popisok → pole `gap-2`.
- Chyba: `border-danger` a správa `text-sm text-danger`; pri odoslaní zhrnutie `rounded-xl bg-danger-soft p-4 text-danger` hore a fokus na prvé chybné pole.
- 2–5 vzájomne sa vylučujúcich možností → `Segmented`; dlhý zoznam → `Select`; voľba s kontextom → `RadioCard`; súhlas → `Checkbox`; nastavenie s okamžitým účinkom → `Switch`.
- Dlhý formulár delte na sekcie s nadpisom `font-display text-lg`; pätička `flex justify-between border-t border-line pt-8` s „Zrušiť“ (`secondary`) vľavo od primárnej akcie. Celý vzor: `RegistrationForm`.

## Prístupnosť

- Text spĺňa 4.5:1 na plochách uvedených v poznámke tokenu, okraje polí a ikony 3:1 — v oboch témach. Výnimka je farba fokusu z Bootstrap 6 vo svetlej téme (pozri vyššie).
- Natívne prvky ostávajú v DOM (`sr-only peer`), takže klávesnica a čítačky fungujú. Neaktívne prvky `opacity-45 cursor-not-allowed`.

## Ikonografia

- Lineárne ikony 16–20px, ťah 1.5px, zaoblené konce, `currentColor` (`text-ink-muted`, aktívne `text-primary`). Žiadne emoji ako dekorácia.
- Systém zatiaľ nemá logo ani vlastnú sadu ikon — názov sa sádza `font-display`.
