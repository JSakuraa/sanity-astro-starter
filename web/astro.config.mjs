// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'a3c826n7',
      dataset: 'production',
      useCdn: false,
  }),
  react()
  ],
});