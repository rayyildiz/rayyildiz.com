import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rayyildiz.com',

  integrations: [
    sitemap()
  ],

  markdown: {
      shikiConfig: {
          theme: 'github-dark'
      }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});