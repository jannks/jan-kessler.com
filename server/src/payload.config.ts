import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import Users from './collections/Users';
import Projects from './collections/Projects';
import Media from './collections/Media';
import Site from './globals/Site';
import HomePage from './globals/HomePage';
import FreelancePage from './globals/FreelancePage';
import { seedGlobals } from './globals/seed';

export default buildConfig({
    admin: {
        user: Users.slug,
        bundler: webpackBundler(),
    },
    editor: slateEditor({}),
    collections: [Users, Projects, Media],
    globals: [Site, HomePage, FreelancePage],
    onInit: async (payload) => {
        await seedGlobals(payload);
    },
    localization: {
        locales: ['de', 'en'],
        defaultLocale: 'de',
        fallback: true,
    },
    upload: {
        limits: {
            fileSize: 10000000, // 10MB, written in bytes
        },
    },
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
        declare: false,
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [payloadCloud()],
    db: mongooseAdapter({
        url: process.env.DATABASE_URI,
    }),
});
