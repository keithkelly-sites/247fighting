import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://247fighting.keithkelly.dev',
  output: 'static',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Oswald',
      cssVariable: '--font-display',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      fallbacks: ['Impact', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Sans 3',
      cssVariable: '--font-body',
      weights: [300, 400, 600, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Barlow Condensed',
      cssVariable: '--font-accent',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      fallbacks: ['Arial Narrow', 'sans-serif'],
    },
  ],
});
