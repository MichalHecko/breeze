# RegistrationForm

Ukážka kompletného registračného formulára poskladaného z komponentov Breeze a utilít Tailwindu — vzor pre dlhé formuláre.

Nie je to komponent v `bundle.js`, ale vzor, ktorý skopírujete a upravíte. Konzument dodá vlastnú validáciu na serveri a odoslanie dát.

- **Rozloženie:** `grid grid-cols-[15rem_1fr] gap-2 rounded-3xl bg-surface-sunken p-2`. Vľavo lepiaci bočný panel s navigáciou sekcií (aktívna `bg-surface shadow-xs`) a priebehom `Progress` „Vyplnené X z 6 povinných“. Vpravo formulár `rounded-2xl bg-surface px-10 py-10 shadow-sm`.
- **Sekcie:** Osobné údaje (`Segmented` oslovenie, meno a priezvisko vedľa seba, dátum narodenia z troch `Select`), Kontakt (e-mail, predvoľba + telefón, krajina + mesto), Prihlásenie (heslo s tlačidlom zobraziť a silou hesla, zopakovanie), Profil a nastavenia (`RadioCard` typ účtu, pri firemnom zapustená karta s fakturačnými údajmi, `Textarea` s počítadlom, jazyk, `Switch` upozornenia) a Súhlasy (`Checkbox`).
- **Validácia:** chyby sa ukážu až po prvom odoslaní; nezhoda hesiel hneď počas písania. Pri odoslaní s chybami sa hore zobrazí zhrnutie `bg-danger-soft` a fokus skočí na prvé chybné pole. Po úspechu sa zobrazí `role="status"` hlásenie v `bg-success-soft`.
- **Pätička:** odkaz „Prihláste sa“ vľavo, „Zrušiť“ (`secondary`) a „Vytvoriť účet“ (`type="submit"`) vpravo.
- Na úzkych obrazovkách zmeňte mriežky na `grid-cols-1 md:grid-cols-[15rem_1fr]` a `sm:grid-cols-2`.
