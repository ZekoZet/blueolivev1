# Blue Olive Lab – Website

Webdesign & Creative Development · Panajotis Zekos · Ofterdingen · blue-olive.online

Aufbau, Effekte und Animationen nach dem Referenzvideo (`referenz/VIDEO-ANALYSE.md`), mit eigenen Inhalten und Grafiken.

## Stack
Astro 7.3.5 (SSG) · Tailwind CSS 4.3.3 (`@tailwindcss/vite`, Tokens in `src/styles/global.css` unter `@theme`) · TypeScript 5.9 strict · pnpm · GSAP 3.15 (nur Desktop mit Maus) · Sharp + astro:assets · @astrojs/sitemap · JSON-LD · OpenGraph · Montserrat Variable (selbst gehostet)

## Start

```bash
pnpm install
pnpm dev
```

Prüfen und bauen:

```bash
pnpm check
pnpm build
```

Lokal wie auf dem Webspace testen (gzip, Cache-Header, 404 – wie STRATO/IONOS mit `.htaccess`):

```bash
pnpm serve
```

→ http://localhost:4323

## Inhalte ändern
Alle Texte, Preise und Kontaktdaten stehen zentral in `src/data/site.ts`. Platzhalter sind mit `TODO` markiert (E-Mail-Adresse, Preise).

## Upload auf STRATO / IONOS (FTP)
1. `pnpm build` → im Ordner `dist/` liegt nur, was auf den Server gehört.
2. Im FTP-Programm versteckte Dateien anzeigen (FileZilla: Server → „Anzeigen versteckter Dateien erzwingen“), sonst fehlt `.htaccess`.
3. Den **Inhalt** von `dist/` (nicht den Ordner selbst) in das Webverzeichnis der Domain hochladen.
4. SSL-Zertifikat im Kundenbereich aktivieren – die `.htaccess` leitet auf HTTPS um.

## Hilfsskripte
| Befehl | Zweck |
|---|---|
| `pnpm fonts` | Montserrat-Teilmengen neu erzeugen (`scripts/subset-fonts.mjs`) |
| `pnpm globe` | Punkte-Globus neu rendern (`scripts/build-globe.mjs`, Natural-Earth-Daten) |
| `pnpm serve` | Testserver für `dist/` |

## Dokumentation
- `referenz/VIDEO-ANALYSE.md` – Sektionen, Gestaltung, Effekte aus dem Video
- `referenz/MAPPING.md` – Video-Sektion → Blue-Olive-Inhalt → Komponente
- `content/INHALTE.md` – Marke, Positionierung, Farben, Inhaltsübersicht
- `ENTSCHEIDUNGEN.md` – Entscheidungen und **offene Punkte (Impressum/Datenschutz, E-Mail, Preise)**
