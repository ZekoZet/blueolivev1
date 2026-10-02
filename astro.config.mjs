// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://blue-olive.online',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // CSS direkt ins HTML: kein render-blockierender Request (PageSpeed)
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
