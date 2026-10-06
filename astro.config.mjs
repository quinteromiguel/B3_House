// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://quinteromiguel.github.io',
  base: '/B3_House/',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});