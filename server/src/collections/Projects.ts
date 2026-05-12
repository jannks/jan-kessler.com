import { CollectionConfig } from 'payload/types';

const Projects: CollectionConfig = {
    slug: 'projects',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },

    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
            localized: true,
        },
        {
            name: 'projectUrl',
            type: 'text',
            required: true,
        },
        {
            name: 'copmanyName',
            type: 'text',
            required: true,
        },
        {
            name: 'copmanyUrl',
            type: 'text',
            required: true,
        },
        {
            name: 'stamp',
            type: 'text',
            localized: true,
        },
        {
            name: 'technologies',
            type: 'select',
            hasMany: true,
            required: true,
            options: [
                {
                    label: 'Angular',
                    value: 'Angular',
                },
                {
                    label: 'Node.js',
                    value: 'Node.js',
                },
                {
                    label: 'NestJs',
                    value: 'NestJs',
                },
                {
                    label: 'MongoDB',
                    value: 'MongoDB',
                },
                {
                    label: 'Docker',
                    value: 'Docker',
                },
                {
                    label: 'Kubernetes',
                    value: 'Kubernetes',
                },
                {
                    label: 'iOS (Swift)',
                    value: 'iOS (Swift)',
                },
                {
                    label: 'Android (Kotlin)',
                    value: 'Android (Kotlin)',
                },
            ],
        },
    ],
};

export default Projects;
