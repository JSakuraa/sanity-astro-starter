// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite"

import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
  integrations: [
    sanity({
      projectId: 'a3c826n7',
      dataset: 'production',
      useCdn: false,
  }),
  react()
  ],
});