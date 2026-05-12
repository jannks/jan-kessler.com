import { GlobalConfig } from 'payload/types';

const HomePage: GlobalConfig = {
    slug: 'home-page',
    label: 'Home Page',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'meta',
            type: 'group',
            fields: [
                { name: 'title', type: 'text', required: true, localized: true },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                    localized: true,
                },
            ],
        },
        {
            name: 'intro',
            type: 'group',
            fields: [
                { name: 'status', type: 'text', required: true, localized: true },
                {
                    name: 'polaroidAlt',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'polaroidCaption',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'currentlyKicker',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'currentlyRole',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'currentlySuffix',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'currentlyAt',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'asideKicker',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'asideText',
                    type: 'textarea',
                    required: true,
                    localized: true,
                },
                {
                    name: 'freelanceCta',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'scrollHint',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'scrollAria',
                    type: 'text',
                    required: true,
                    localized: true,
                },
            ],
        },
        {
            name: 'projects',
            type: 'group',
            label: 'Projects Section',
            fields: [
                {
                    name: 'titlePrefix',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'titleItalic',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'titleMarker',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'ledePrefix',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'ledeItalic',
                    type: 'text',
                    required: true,
                    localized: true,
                },
            ],
        },
    ],
};

export default HomePage;
