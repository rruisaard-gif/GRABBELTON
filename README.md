# MIEOW Grabbelton

De grabbelton voor **Achievement 2 – Grabbelton Casus** van de expertisetrack in de minor *Marketing in een online wereld* (RBSMOW01).

Studenten kiezen hun expertise (Branding, Content, AI in Marketing of Consumer Behavior), rammen op de knop tot de hand diep in de ton graait, laten los en trekken er een casus uit. Op het briefje staat de datum en tijd van trekken.

## Bestanden

| Bestand | Wat |
|---|---|
| `index.html` | De grabbelton zelf (animatie, interactie, casusweergave) |
| `cases.js` | Alle casussen: 15 per expertise (Branding B01–B15, Content C01–C15, AI in Marketing AI01–AI15, Consumer Behavior CB01–CB15) |
| `wahahauw.mp3` | Geluid dat afspeelt zodra de casus uit de ton komt |

Geen build-stap, geen dependencies. Werkt ook lokaal door `index.html` te openen.

## Online zetten met GitHub Pages

1. Ga naar **Settings → Pages**.
2. Kies bij *Source* voor **Deploy from a branch**, branch `main`, map `/ (root)`, en klik **Save**.
3. Na een minuut staat de ton op `https://rruisaard-gif.github.io/GRABBELTON/`.

## Een casus toevoegen of aanpassen

Open `cases.js`, kopieer een bestaand blok en pas het aan. Elke casus heeft deze velden:

- `id` – uniek, bijv. `B16` of `C16`
- `ton` – `"branding"`, `"content"`, `"ai"` of `"consumer"`
- `naam`, `plaats`, `tagline`
- `wie`, `vraagstuk`, `feiten` (lijst), `eigenaardigheid`, `beperking`, `geprobeerd`
- `uitdaging` – de creatieve push voor de student

Let op komma's tussen de blokken. Het aantal casussen per ton op het startscherm telt automatisch mee.

## Goed om te weten

- **Geen dubbele trekkingen per apparaat:** de ton onthoudt per browser welke casussen al getrokken zijn en trekt pas opnieuw uit dezelfde casus als de hele ton leeg is. Handig als de hele groep op één laptop of het digibord trekt. Op verschillende apparaten kunnen wel dezelfde casussen vallen.
- **Minimaal 12 keer drukken** voordat de hand blijft hangen. Aan te passen via `MIN_PRESSES` in `index.html`.
- Studenten kunnen met **Kopieer casus** de volledige tekst naar hun klembord halen, of een screenshot maken als bewijs van hun trekking (inclusief datum).
- Alle bedrijven en personen in de casussen zijn fictief.
