// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://distr.sh',
  integrations: [starlight({
    title: 'distr.sh Docs',
    editLink:  {
      baseUrl: 'https://github.com/glasskube/distr.sh/tree/main'
    },
    head: [
      {
        tag: 'script',
        content: `window.addEventListener('load', () => document.querySelector('.site-title').href += 'docs/')`,
      },
    ],
    description: 'Open Source Software Distribution Platform',
    logo: {
      src: './src/assets/distr.svg',
    },
    social: {
      github: 'https://github.com/glasskube/distr',
      discord: 'https://discord.gg/6qqBSAWZfW',
    },
    sidebar: [
      {
        label: 'Guides',
        items: [
          // Each item here is one entry in the navigation menu.
          {label: 'Example Guide', slug: 'docs/guides/example'},
        ],
      },
      {
        label: 'Reference',
        autogenerate: {directory: 'reference'},
      },
    ],
    prerender: true,
  }), tailwind()],
});
