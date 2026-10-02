# Video-Analyse – Referenzvideo (48 s, 770 × 674 px)

Quelle: `Bildschirmaufnahme 2026-10-02 001030.mp4` – Bildschirmaufnahme einer Produkt-Landingpage eines Cloud-Anbieters (Gcore, „Inference at the Edge“).
Übernommen werden **Aufbau, Sektionsfolge, Gestaltungsprinzipien, Effekte und Animationen**. **Nicht** übernommen werden Name, Logo,
Texte, Produktnamen, Preise, Grafiken oder Bilder des Anbieters – alle Inhalte und Grafiken sind eigene Arbeiten für Blue Olive Lab.

Einzelbilder (1 fps) wurden mit ffmpeg extrahiert und ausgewertet.

## Sektionen oben → unten (Zeitstempel im Video)
| # | Zeit | Typ | Hintergrund | Aufbau | Effekte |
|---|---|---|---|---|---|
| 0 | 0–2 s | Intro | dunkel | Logo-Icon mittig, danach Wortmarke Buchstabe für Buchstabe | Fade/Scale des Icons, Buchstaben-Reveal, Overlay blendet aus |
| 1 | – | Ankündigungsleiste | schwarz | schmale Leiste: Hinweistext + Pfeil links, Meta-Links rechts | – |
| 2 | – | Navigation | dunkel, später „Pill“ | Start: volle Breite (Logo links, Menü Mitte, 2 Buttons rechts). Beim Scrollen: zentrierte, abgerundete Leiste (Icon, Menü, 1 heller Button) | Morph beim Scrollen, Dropdown-Pfeile |
| 3 | 3–8 s | Hero | fast schwarz | Badge, große Headline (Wörter erscheinen nacheinander), Unterzeile, Primär- + Textbutton; darunter Platinen-Illustration: Chip in der Mitte, 6 Icon-Kacheln, Leiterbahnen | Lichtimpulse laufen über die Leiterbahnen, diagonaler Lichtstrahl oben rechts, Wort-Reveal |
| 4 | 8–11 s | Erklärung | hell (Off-White) | 2 Tab-Pills über der Headline, große zweizeilige Headline; Karte links (dunkles Bild mit Lichtstreifen + Text unten), Karte rechts (Leadtext + Fließtext) mit 3 Zeilen Fähigkeits-Chips als Laufband | Laufbänder in Gegenrichtung, Text-Reveal |
| 5 | 12–17 s | Bento-Raster | dunkel | Badge, Headline, 7 Karten im Raster (2 / 3 / 2) mit kleinen Illustrationen (Globus, Chip, Würfelraster, Linien, Code) | Karten blenden gestaffelt ein, Glühen in Akzentfarbe |
| 6 | 18–22 s | Netzwerk / Globus | schwarz mit Sternen | Badge, Headline, Unterzeile; Punkte-Globus mit leuchtendem Rand steigt von unten ins Bild | Scroll-Zoom/Anheben des Globus, Text-Reveal |
| 7 | 23–27 s | „Ausprobieren“ | hell | Badge links/rechts gestrichelt, Headline, Unterzeile, Icon-Reihe, große Karte: Halbkreis-Verlauf mit Icon + Titel, 4 Funktionspunkte (2 × 2), Eingabefeld mit Senden-Pfeil, Hinweiszeile | Karte schiebt sich hoch, Text-Reveal |
| 8 | 28–31 s | Anwendungsfälle | hell | Badge, Headline, 6 Karten (3 × 2): Illustration oben, Titel, Stichpunkte | gestaffeltes Einblenden |
| 9 | 32–35 s | Preise | dunkel | Umschalter (Pfeile), Headline, 3 Preiskarten (mittlere hervorgehoben, Button in Akzentfarbe), Fußnoten | Einblenden |
| 10 | 35–37 s | FAQ | dunkel | Headline, Akkordeon (erste Frage offen) | Auf-/Zuklappen |
| 11 | 37–38 s | Kontakt-CTA | dunkel | gerundete Karte, Headline, Text, heller Button; unten großer leuchtender Bogen (Akzent → Weiß) | Bogen leuchtet auf |
| 12 | 39–42 s | Weitere Produkte | dunkel | Headline, 6 Karten (3 × 2): Icon, Titel, Text, „Mehr erfahren →“ | gestaffeltes Einblenden |
| 13 | 43–45 s | Footer | dunkel mit Lichtverlauf oben rechts | Logo + Text + Social-Icons, 4 Linkspalten, Siegel-Reihe, Newsletter-Feld, Rechtliches, Zahlungslogos | – |

## Gestaltung
- **Raster:** max. ~1200 px Inhaltsbreite, großzügiges Weißraum-Spiel, Karten-Radius ~20–24 px, Buttons vollrund (Pill).
- **Typografie:** geometrische Grotesk, Headlines 600, enge Laufweite; Unterzeilen klein und grau.
- **Farbe:** fast schwarzer Grund, eine Akzentfarbe für Glühen/Buttons, helle Sektionen in Off-White.
- **Dunkle Karten:** sehr dunkles Grau mit 1 px heller Kontur (~6 % Weiß), weiches Innenglühen in Akzentfarbe.
- **Badges:** kleine Pills mit Punkt/Icon über jeder Headline.
- **Bewegung:** Wort-für-Wort-Aufhellung der Headlines beim Scrollen, Laufbänder, Lichtimpulse auf Leiterbahnen, Globus-Zoom, Nav-Morph.

## Responsive (abgeleitet, Video zeigt nur Desktop)
| Sektion | < 1024 px | < 480 px |
|---|---|---|
| Navigation | Floating-Menu-Button (Handy/Tablet) | dito |
| Hero-Platine | verkleinert, Kacheln reduziert | nur Chip + 4 Kacheln |
| Erklärung | Karten untereinander | dito |
| Bento | 2 Spalten | 1 Spalte |
| Anwendungsfälle / Produkte | 2 Spalten | 1 Spalte |
| Preise | Karten untereinander, mittlere zuerst sichtbar hervorgehoben | dito |
