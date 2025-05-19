// @ts-check
import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeMermaid from 'rehype-mermaid';
// https://astro.build/config
export default defineConfig({
  site: 'https://distr.sh',

  integrations: [
    starlight({
      title: 'Distr Docs',
      customCss: ['./src/styles/global.css'],
      editLink: {
        baseUrl: 'https://github.com/glasskube/distr.sh/tree/main',
      },
      head: [
        {
          tag: 'script',
          content: `window.addEventListener('load', () => document.querySelector('.site-title').href += 'docs/')`,
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://p.glasskube.eu',
          },
        },
        {
          tag: 'script',
          content: `
          !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init( 'phc_EloQUW6cgfbTc0pI9c5CXElhQ4gVGRoBsrUAoakJVoQ', { api_host: 'https://p.glasskube.eu', ui_host: 'https://eu.posthog.com', } )
        `,
        },
        {
          tag: 'script',
          content: `(function () { const k = 'ko', i = (window.globalKoalaKey = window.globalKoalaKey || k); if (window[i]) return; const ko = (window[i] = []); [ 'identify', 'track', 'removeListeners', 'on', 'off', 'qualify', 'ready', ].forEach(function (t) { ko[t] = function () { var n = [].slice.call(arguments); return n.unshift(t), ko.push(n), ko; }; }); const n = document.createElement('script'); n.async = !0; n.setAttribute( 'src', 'https://cdn.getkoala.com/v1/pk_65d1fa2b228d1a15e6cbd8f9476a369bb5c1/sdk.js', ); (document.body || document.head).appendChild(n); })();`,
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
        // Override the default `SocialIcons` component.
        SocialIcons: './src/components/NavBarCta.astro',
      },
      sidebar: [
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
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      prerender: true,
      plugins: [starlightLinksValidator()],
    }),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [[rehypeMermaid, {strategy: 'inline-svg'}]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/': '/docs/getting-started/what-is-distr/',
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
