// Rendert den Punkte-Globus einmalig als transparentes PNG (src/assets/globe-dots.png): pnpm globe
// Weltkarte aus world-atlas (Natural Earth, Public Domain), orthografische Projektion auf Mitteleuropa.
import { readFileSync, writeFileSync } from 'node:fs';
import { geoOrthographic, geoContains } from 'd3-geo';
import { feature } from 'topojson-client';
import sharp from 'sharp';

const topo = JSON.parse(readFileSync('node_modules/world-atlas/land-110m.json', 'utf8'));
const land = feature(topo, topo.objects.land);
const SIZE = 1400;
const R = SIZE / 2 - 8;
const center = [9.05, 48.42]; // Ofterdingen
const projection = geoOrthographic().scale(R).translate([SIZE / 2, SIZE / 2]).rotate([-center[0] + 6, -center[1] + 18]).clipAngle(90);

const dots = [];
const step = 1.6;
for (let lat = -58; lat <= 78; lat += step) {
  const lonStep = step / Math.max(0.25, Math.cos((lat * Math.PI) / 180));
  for (let lon = -180; lon < 180; lon += lonStep) {
    if (!geoContains(land, [lon, lat])) continue;
    const p = projection([lon, lat]);
    if (!p) continue;
    // Punkte zum Rand hin kleiner und blasser (Kugelwirkung)
    const dx = (p[0] - SIZE / 2) / R;
    const dy = (p[1] - SIZE / 2) / R;
    const depth = Math.sqrt(Math.max(0, 1 - dx * dx - dy * dy));
    dots.push(`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${(2.2 + depth * 3).toFixed(2)}" fill-opacity="${(0.25 + depth * 0.75).toFixed(2)}"/>`);
  }
}
const marker = projection(center);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}"><g fill="#d6ecf7">${dots.join('')}</g>${
  marker ? `<circle cx="${marker[0]}" cy="${marker[1]}" r="9" fill="#38bdf8"/>` : ''
}</svg>`;
await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile('src/assets/globe-dots.png');
writeFileSync('src/data/globe-marker.json', JSON.stringify({ x: marker[0] / SIZE, y: marker[1] / SIZE }));
console.log(`${dots.length} Punkte, Marker bei`, marker?.map((v) => (v / SIZE).toFixed(3)));
