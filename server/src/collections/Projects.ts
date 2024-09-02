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
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
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
            name: 'textColor',
            type: 'text',
            required: true,
        },
        {
            name: 'backgroundColor',
            type: 'text',
            required: true,
        },
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            filterOptions: {
                or: [
                    { mimeType: { contains: 'image' } },
                    { mimeType: { contains: 'video' } },
                ],
            },
        },
        {
            name: 'role',
            type: 'text',
            required: true,
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
