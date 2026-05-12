import { Field, GlobalConfig } from 'payload/types';

const text = (name: string): Field => ({
    name,
    type: 'text',
    required: true,
    localized: true,
});

const textarea = (name: string): Field => ({
    name,
    type: 'textarea',
    required: true,
    localized: true,
});

const FreelancePage: GlobalConfig = {
    slug: 'freelance-page',
    label: 'Freelance Page',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'meta',
            type: 'group',
            fields: [text('title'), textarea('description')],
        },
        {
            name: 'hero',
            type: 'group',
            fields: [
                text('availabilityTag'),
                text('titleLine1'),
                text('titleScript'),
                text('titleLine3'),
                textarea('pitchPrefix'),
                text('pitchMarker'),
                textarea('pitchSuffix'),
                text('pitchItalic'),
                text('ctaPrimary'),
                text('ctaSecondary'),
                text('availableLabel'),
                text('availableSub'),
                text('basedInKicker'),
                text('basedInValue'),
                text('workingWithKicker'),
                text('workingWithValue'),
                text('replyTimeKicker'),
                text('replyTimeValue'),
            ],
        },
        {
            name: 'chapter01',
            type: 'group',
            label: 'Chapter 01 — Services',
            fields: [
                text('titlePrefix'),
                text('titleMarker'),
                text('titleSuffix'),
                {
                    name: 'services',
                    type: 'array',
                    localized: true,
                    minRows: 1,
                    fields: [
                        { name: 'title', type: 'text', required: true },
                        { name: 'description', type: 'textarea', required: true },
                    ],
                },
            ],
        },
        {
            name: 'chapter02',
            type: 'group',
            label: 'Chapter 02 — Stack',
            fields: [
                text('titlePrefix'),
                text('titleScript'),
                text('titleSuffix'),
                textarea('lede'),
            ],
        },
        {
            name: 'chapter03',
            type: 'group',
            label: 'Chapter 03 — Contact',
            fields: [
                text('titlePrefix'),
                text('titleMarker'),
                textarea('text'),
            ],
        },
    ],
};

export default FreelancePage;
