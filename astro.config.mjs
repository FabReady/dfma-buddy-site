import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://FabReady.github.io',
  base: '/dfma-buddy-site',
  integrations: [tailwind()],
});