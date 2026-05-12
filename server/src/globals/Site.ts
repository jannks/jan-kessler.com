import { GlobalConfig } from 'payload/types';

const Site: GlobalConfig = {
    slug: 'site',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'nav',
            type: 'group',
            fields: [
                { name: 'freelance', type: 'text', required: true, localized: true },
                { name: 'github', type: 'text', required: true, localized: true },
                {
                    name: 'languageAria',
                    type: 'text',
                    required: true,
                    localized: true,
                },
            ],
        },
        {
            name: 'footer',
            type: 'group',
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    required: true,
                    localized: true,
                    admin: {
                        description:
                            'Use {year} as a placeholder for the current year.',
                    },
                },
            ],
        },
        {
            name: 'stack',
            type: 'array',
            labels: { singular: 'Technology', plural: 'Tech Stack' },
            fields: [{ name: 'name', type: 'text', required: true }],
        },
    ],
};

export default Site;
