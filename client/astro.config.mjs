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
    integrations: [sitemap({})],
});
