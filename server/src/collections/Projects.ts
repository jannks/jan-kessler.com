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
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
    ],
};

export default Projects;
