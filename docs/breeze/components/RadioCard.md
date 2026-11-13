# RadioCard

Riadok výberu s rádiom, popisom a voliteľnou akciou vpravo — pre voľby s kontextom (adresa, typ účtu, doprava).

**Konzument dodá:** `name` (rovnaké pre celú skupinu), `label`, voliteľne `description`, `action` + `onAction` (napr. „Upraviť“), `checked`/`onChange` alebo `defaultChecked`, `disabled`.

- Riadok `rounded-xl px-5 py-4`, hover `bg-surface-sunken`, zvolený `has-checked:bg-primary-soft`.
- Rádio `size-5.5 rounded-full border-2 border-line-strong`, zvolené `peer-checked:border-7 border-primary` (hrubý modrý prstenec).
- Skupinu zabaľte do `fieldset` s `legend`; riadky pod sebou s `gap-2`. Akcia je samostatné tlačidlo v `text-link` a nemení výber.
