# Entscheidungen & offene Punkte – Blue Olive Lab

## ⚠️ Vor dem Livegang klären
1. **Impressum und Datenschutz fehlen.** In Deutschland Pflicht. Es wurden keine Rechtstexte erfunden. Seiten anlegen als `src/pages/impressum.astro` und `src/pages/datenschutz.astro` (mit `BaseLayout`) und im Footer verlinken (`src/data/site.ts` → `footer.columns`).
2. **E-Mail-Adresse ist ein Platzhalter:** `kontakt@blue-olive.online` in `src/data/site.ts` (`site.email`) – bitte durch die echte Adresse ersetzen. Alle Formulare (Projekt-Check, Schnellanfrage, Erstgespräch) öffnen das E-Mail-Programm mit dieser Adresse.
3. **Preise sind Beispielwerte** (`pricing` in `src/data/site.ts`, mit `TODO` markiert): 1.490 € / 3.490 € / 6.900 € und 39 / 69 / 119 € Betreuung pro Monat.
4. **Social-Media-Profile:** keine angegeben, daher keine Social-Icons im Footer.

## Referenzvideo
- Das Video zeigt eine Landingpage eines Cloud-Anbieters. Nachgebaut wurden **Aufbau, Sektionsfolge, Gestaltungsprinzipien, Effekte und Animationen** (siehe `referenz/VIDEO-ANALYSE.md`).
- **Nicht** übernommen: Name, Logo, Texte, Produktnamen, Preise, Grafiken und Bilder des Anbieters. Alle Texte sind eigene Formulierungen für Blue Olive Lab, alle Grafiken eigene SVG-/CSS-Arbeiten (Platine, Bento-Illustrationen, Branchen-Grafiken, Leuchtbogen). Der Punkte-Globus wird aus gemeinfreien Natural-Earth-Daten (`world-atlas`) erzeugt.

## Inhalte
- Texte in **Sie-Form**, auf Basis der Positionierung (High-End-Webdesign, Figma, Astro/TypeScript/Tailwind, 100/100 Lighthouse, Zero-Jank, Barrierefreiheit).
- **Hero-Kacheln** zeigen Kürzel (Fi, As, TS, Tw, Gs, 100) statt fremder Markenlogos; Klartext per `title`-Attribut.
- **Branchen** (Gastronomie, Handwerk, Immobilien & Gutachter, Fotografie & Kreative, Handel, Startups & Agenturen) sind Vorschläge – in `industries` anpassbar.
- **„Ausprobieren“-Karte** aus dem Video wurde zum **Projekt-Check**: vier Schritte + Eingabefeld, das eine vorbereitete E-Mail öffnet (kein Server nötig).
- **Newsletter-Feld** im Footer wurde zur **Schnellanfrage** (E-Mail-Adresse → vorbereitete E-Mail).
- Ankündigungsleiste und Dropdown-Texte sind eigene Formulierungen.

## Gestaltung
- **Farben:** exakt die vorgegebenen Tokens (`--color-ink` … `--color-paper-mute`, Status-Farben) in `@theme`. Für die hellen Sektionen wurden passende kühle Off-White-Töne abgeleitet (`--color-light*`).
- **Akzent auf Hell:** `--color-olive-deep` (#0369a1) für Badges/Icons auf hellem Grund (Kontrast ausreichend).
- **Primär-Button:** Cyan-Fläche mit dunkler Schrift (Weiß auf #0ea5e9 hätte zu wenig Kontrast).
- **Kleine graue Texte** auf Dunkel nutzen `--color-paper-soft`, da `--color-paper-mute` (4,1:1) für kleine Schrift unter WCAG AA liegt; `paper-mute` nur für große bzw. dekorative Elemente.
- **Schrift:** Montserrat Variable (400–800), selbst gehostet als Teilmenge (36 KB) + Mini-Datei für latin-ext (türkische u. a. Sonderzeichen, nur bei Bedarf). Kaushan Script, Anton und Bebas Neue aus dem Stack wurden nicht verwendet, da sie nicht zum Stil des Referenzdesigns passen – bei Bedarf über `scripts/subset-fonts.mjs` ergänzbar.
- **Leaflet:** im Stack vorgesehen, aber im Referenzvideo kommt keine interaktive Karte vor → nicht eingebaut (keine unnötigen Abhängigkeiten). Bei Bedarf mit Facade-Pattern nachrüstbar.

## Effekte & Animationen (1:1 nach Referenzvideo, Einzelbild-Analyse mit 5–10 fps)
| Zeit im Video | Effekt | Umsetzung |
|---|---|---|
| 0,0–0,8 s | Ring mit Punkt dreht sich, öffnet sich und wird zum Logo | `Intro.astro`, CSS (SVG-Ring + Oliven-Logo) |
| 0,9–1,6 s | Wortmarke klappt rechts auf, Logo rutscht nach links, Buchstaben einzeln aus der Unschärfe | CSS (`grid-template-columns: 0fr → 1fr`) |
| 1,6–2,0 s | Marke wird leicht größer | CSS |
| 1,95–2,55 s | Vorhang: dunkle Seite schiebt sich von unten ins Bild | CSS `clip-path` |
| ab 2,0 s | Navigationspunkte nacheinander, Logo-Buchstaben in der Navigation einzeln | `anim.ts` (hero-play) + CSS |
| ab 2,1 s | Überschrift Wort für Wort (Unschärfe → scharf, von unten), dann Unterzeile, Buttons, Chip, Kacheln, Leiterbahnen + Lichtimpulse | `data-hero` + CSS |
| beim Scrollen | Nächste Sektion schiebt sich über die stehen bleibende vorige (Hero → hell → Bento → Globus → hell → Branchen → Preise) | `data-stack` (CSS sticky, JS setzt `top`/`z-index`) |
| helle Sektion | Schwarzer Punkt wächst zur Tab-Pille; Fließtext Wort für Wort; Bildkarte steigt hoch; Laufbänder erscheinen | `data-anim="pill"`, `words`, `rise`, `stagger` |
| Bento | Karten tauchen nacheinander aus dem Dunkel auf, Lichter gehen danach an | `data-anim="cards"` + `data-light` |
| Globus | steigt beim Scrollen auf und wächst | Desktop: GSAP ScrollTrigger; Touch: CSS `view-timeline` |
| „Ausprobieren“ | gestrichelte Linien wachsen vom Badge nach außen, Icon-Reihe klappt von links auf, Karte steigt hoch, Inhalt gestaffelt | `lines`, `expand`, `rise`, `data-later` |
| Branchen / Preise / FAQ / Produkte | Elemente gestaffelt von unten | `data-anim="stagger"` |
| Kontakt | Leuchtbogen steigt beim Scrollen auf | Desktop: GSAP; Touch: CSS `view-timeline` |
| Footer | Wortmarke Buchstabe für Buchstabe, Spalten nacheinander | `letters`, `stagger` |
- Alle Überschriften erscheinen Wort für Wort; die Wörter werden beim Build zerlegt (`Words.astro`) – kein Layout-Sprung, Screenreader lesen normal.
- Läuft auf Desktop, Tablet und Handy (CSS + IntersectionObserver, kein GSAP nötig). GSAP nur für die scroll-gekoppelten Effekte auf Desktop mit Maus (Stack-Vorgabe `(min-width: 1024px) and (pointer: fine)`).
- `prefers-reduced-motion`: keine Animationen, kein Intro, kein Stapel-Bewegungseffekt nötig (Inhalte sofort sichtbar).
- Ohne JavaScript sind alle Inhalte sofort sichtbar (Startzustände nur mit `html.js`).
- Nicht übernommen: Inhalte/Grafiken des Anbieters aus dem Video (siehe oben).

## Performance
Gemessen mit Lighthouse lokal über `pnpm serve` (verhält sich wie Apache mit `.htaccess`):
| Variante | Mobil | Desktop |
|---|---|---|
| **mit Intro (aktuell, 1:1 wie Video)** | 98 / 100 / 100 / 100 | 98 / 100 / 100 / 100 |
| ohne Intro | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
- Der einzige Abzug ist der **Speed Index**: Das Intro (ca. 2,5 s) verzögert, wann die Seite optisch fertig ist. Alle anderen Animationen kosten keine Punkte.
- Intro abschalten: in `src/pages/index.astro` bei `<BaseLayout path="/" intro>` das `intro` entfernen.
- Das Intro läuft nur beim ersten Besuch je Sitzung.
- CSS inline, zweistufiges Font-Laden mit maßgleicher Ersatzschrift (Capsize), Webfont erst nach LCP.
- Hero-Text ist beim ersten Bild unter dem Intro bereits gezeichnet (LCP), wird erst beim Vorhang in den Startzustand gesetzt und animiert.
- `content-visibility: auto` bewusst nicht genutzt (Anker-Sprünge werden sonst ungenau).

## Technik
- Stack: Astro 7.3.5 (SSG), Tailwind CSS 4.3.3 (`@tailwindcss/vite`, Tokens in `@theme`), TypeScript 5.9 strict, pnpm, GSAP 3.15, Sharp + astro:assets, @astrojs/sitemap, JSON-LD (`ProfessionalService`, `FAQPage`), OpenGraph.
- `pnpm check` = `astro check && tsc --noEmit` (0 Fehler).
- `sharp`/`esbuild` Build-Skripte in `pnpm-workspace.yaml` freigegeben.
