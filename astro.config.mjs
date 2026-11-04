import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL: domínio oficial [CONFIRMAR com o dono]
const site = process.env.SITE_URL || 'https://artesaforneria.com.br';

export default defineConfig({
  site,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  image: { layout: 'constrained' },
});
