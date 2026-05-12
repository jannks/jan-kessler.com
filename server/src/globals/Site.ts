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
                {
                    name: 'links',
                    type: 'array',
                    labels: { singular: 'Nav Link', plural: 'Nav Links' },
                    admin: {
                        description:
                            'Textuelle Menüpunkte (z.B. Freelance). Werden als Text gerendert.',
                    },
                    fields: [
                        {
                            name: 'label',
                            type: 'text',
                            required: true,
                            localized: true,
                        },
                        { name: 'href', type: 'text', required: true },
                    ],
                },
                {
                    name: 'socials',
                    type: 'array',
                    labels: { singular: 'Social Link', plural: 'Social Links' },
                    admin: {
                        description:
                            'Social-Profile (werden als Icon gerendert).',
                    },
                    fields: [
                        {
                            name: 'platform',
                            type: 'select',
                            required: true,
                            options: [
                                { label: 'GitHub', value: 'github' },
                                { label: 'LinkedIn', value: 'linkedin' },
                            ],
                        },
                        { name: 'href', type: 'text', required: true },
                    ],
                },
                {
                    name: 'languageAria',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'menuOpenAria',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'menuCloseAria',
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
