// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site. If you move to a custom domain,
// set `site` to that domain and remove `base`.
export default defineConfig({
  site: 'https://erol1210.github.io',
  base: '/erol-blog',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
    },
  },
});
