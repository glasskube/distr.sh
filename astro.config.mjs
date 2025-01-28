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
        label: 'Getting started',
        autogenerate: {directory: 'docs/getting-started'},
      },
      // {
      //   label: 'Guides',
      //   autogenerate: {directory: 'guides'},
      // },
      // {
      //   label: 'Use cases',
      //   autogenerate: {directory: 'use-cases'},
      // },
      // {
      //   label: 'Product',
      //   autogenerate: {directory: 'product'},
      // },
      {
        label: 'Self hosting',
        autogenerate: {directory: 'docs/self-hosting'},
      },
      {
        label: 'Integrations',
        autogenerate: {directory: 'integrations'},
      },
    ],
    prerender: true,
  }), tailwind()],
});
