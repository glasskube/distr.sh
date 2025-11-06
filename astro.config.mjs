// @ts-check
import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

import preact from '@astrojs/preact';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import tailwindcss from '@tailwindcss/vite';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://distr.sh',

  integrations: [
    starlight({
      title: 'Distr',
      customCss: ['./src/styles/global.css'],
      editLink: {
        baseUrl: 'https://github.com/glasskube/distr.sh/tree/main',
      },
      lastUpdated: true,
      head: [
        {
          tag: 'script',
          content: `window.addEventListener('load', () => document.querySelector('.site-title').href += 'docs/')`,
        },
        {
          tag: 'script',
          attrs: {
            type: 'text/partytown',
          },
          content: `(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://distr.sh/ggg/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-T58STPCJ');
            `,
        },
      ],
      description: 'Open Source Software Distribution Platform',
      logo: {
        src: './src/assets/distr.svg',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/glasskube/distr',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/6qqBSAWZfW',
        },
      ],
      components: {
        // Components can be overwritten here
        PageTitle: './src/components/overwrites/PageTitle.astro',
        ContentPanel: './src/components/overwrites/ContentPanel.astro',
        Footer: './src/components/overwrites/Footer.astro',
        SocialIcons: './src/components/overwrites/SocialIcons.astro',
      },
      sidebar: [
        {
          label: 'Navbar',
          items: [
            {label: 'Home', link: '/'},
            {label: 'Pricing', link: '/pricing/'},
            {label: 'Docs', link: '/docs/getting-started/what-is-distr/'},
            {label: 'Blog', link: '/blog/'},
          ],
        },
        {
          label: 'Getting started',
          autogenerate: {directory: 'docs/getting-started'},
        },
        {
          label: 'Use cases',
          autogenerate: {directory: 'docs/use-cases'},
        },
        {
          label: 'Guides',
          autogenerate: {directory: 'docs/guides'},
        },
        {
          label: 'Product',
          autogenerate: {directory: 'docs/product'},
        },
        {
          label: 'Self hosting',
          autogenerate: {directory: 'docs/self-hosting'},
        },
        {
          label: 'Integrations',
          autogenerate: {directory: 'docs/integrations'},
        },
        {
          label: 'FAQs',
          link: '/docs/faqs',
        },
        {
          label: 'Privacy Policy',
          link: '/docs/privacy-policy',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      prerender: true,
      plugins: [
        starlightLinksValidator(),
        starlightUtils({
          navLinks: {
            leading: {useSidebarLabelled: 'Navbar'},
          },
        }),
      ],
    }),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    preact(),
  ],
  markdown: {
    rehypePlugins: [[rehypeMermaid, {strategy: 'inline-svg'}]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/docs/': '/docs/getting-started/what-is-distr/',
    '/docs/getting-started/about/': '/docs/getting-started/what-is-distr/',
    '/docs/getting-started/how-it-works/':
      '/docs/getting-started/core-concepts/',
    '/docs/product/distr-hub/': '/docs/product/vendor-portal/',
    '/docs/use-cases/self-managed/': '/docs/use-cases/fully-self-managed/',
    '/docs/use-cases/byoc/': '/docs/use-cases/byoc-bring-your-own-cloud/',
    '/docs/product/faqs/': '/docs/faqs/',
  },
});
