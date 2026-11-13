# Checkbox

Zaškrtávacie políčko s popiskom a voliteľným popisom — pre súhlasy a nezávislé voľby.

**Konzument dodá:** `label`, voliteľne `description`, `error`, `checked`/`onChange` alebo `defaultChecked`, `name`, `required`, `disabled`.

- Štvorček `size-5 rounded-md border-2 border-line-strong`; zaškrtnutý `bg-primary border-primary` s fajkou v `text-on-primary`.
- Natívny `input` je `sr-only peer` — klávesnica aj čítačky fungujú, fokus je jemná žiara `ring-4 ring-primary/25` na štvorčeku (ako v Bootstrape).
- Na zapnutie nastavenia s okamžitým účinkom použite `Switch`; checkbox je pre veci, ktoré sa potvrdia odoslaním formulára.
