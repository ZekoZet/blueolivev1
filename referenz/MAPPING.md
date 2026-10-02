# Mapping Video-Sektion → Blue Olive Lab

Alle Texte sind eigene Formulierungen auf Basis der Positionierung (siehe `content/INHALTE.md`); Grafiken sind eigene SVG/CSS-Arbeiten.

| # | Video-Sektion | Blue Olive Lab | Komponente |
|---|---|---|---|
| 0 | Intro mit Logo-Reveal | Oliven-Logo + Wortmarke „BLUE OLIVE LAB“ | `Intro.astro` |
| 1 | Ankündigungsleiste | Hinweis „100/100 Lighthouse als Standard“ + Standort | `TopBar.astro` |
| 2 | Navigation (Morph zur Pill) | Leistungen (Dropdown) · Ablauf · Branchen · Preise · FAQ + „Kontakt“ / „Projekt starten“ | `Header.astro`, mobil `FloatingMenu.astro` |
| 3 | Hero mit Platine | „Webdesign, das performt.“ – Chip mit Oliven-Logo, 6 Kacheln (Figma, Astro, TypeScript, Tailwind, GSAP, Lighthouse) | `Hero.astro`, `CircuitBoard.astro` |
| 4 | Erklärung mit Tabs + Laufband | Tabs „Was ich mache“ / „Wie ich arbeite“, Leistungs-Chips als Laufband | `ExplainSection.astro` |
| 5 | Bento-Raster | 7 Stärken: Lighthouse 100, UI/UX in Figma, Barrierefreiheit, Zero-Jank, Design-System, Responsive, sauberer Code | `BentoSection.astro` |
| 6 | Globus | „Aus Ofterdingen. Für Projekte überall.“ – Punkte-Globus mit Marker Ofterdingen | `GlobeSection.astro` |
| 7 | „Ausprobieren“-Karte | Projekt-Check: 4 Schritte + Eingabefeld „Projekt in einem Satz“ (öffnet E-Mail) | `ProjectCheck.astro` |
| 8 | Anwendungsfälle | 6 Branchen: Gastronomie, Handwerk, Immobilien & Gutachter, Fotografie & Kreative, Handel, Startups & Agenturen | `IndustriesSection.astro` |
| 9 | Preise | 3 Pakete Onepager / Business / Premium, Umschalter „Einmalig“ / „Mit Betreuung“ | `PricingSection.astro` |
| 10 | FAQ | 6 Fragen zu Ablauf, Technik, Kosten | `FaqSection.astro` |
| 11 | Kontakt-CTA mit Leuchtbogen | „Lassen Sie uns über Ihr Projekt sprechen“ | `CtaSection.astro` |
| 12 | Weitere Produkte | Weitere Leistungen: Relaunch, Landingpages, Performance-Audit, Barrierefreiheits-Check, Wartung, Designsysteme | `ServicesSection.astro` |
| 13 | Footer | Logo, Kurztext, Linkspalten, Badges, Schnellanfrage-Feld, Adresse | `Footer.astro` |

## Farbzuordnung (Video → Blue-Olive-Tokens)
| Rolle im Video | Token |
|---|---|
| Hintergrund fast schwarz | `--color-ink` #030d14 |
| Sektions-/Kartenflächen | `--color-ink-soft` #051421, `--color-ink-card` #081e30 |
| Orange (Glühen, Buttons) | `--color-olive` #0ea5e9 / `--color-olive-bright` #38bdf8 |
| dunkles Orange (Tiefe) | `--color-olive-deep` #0369a1 |
| Weiß / Grau-Texte | `--color-paper` #ffffff, `--color-paper-soft` #a1c2d6, `--color-paper-mute` #54778f |
| helle Sektionen | `--color-light` #f6fafc (abgeleitet, kühles Off-White) |
