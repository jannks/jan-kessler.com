import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://jan-kessler.com',
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [sitemap({ i18n: { defaultLocale: 'de', locales: { de: 'de', en: 'en' } } })],
});
