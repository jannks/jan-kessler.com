import { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        formatOptions: {
            format: 'webp',
        },
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: undefined,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: undefined,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: undefined,
                position: 'centre',
            },
            {
                name: 'desktop',
                width: 1920,
                height: undefined,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
};

export default Media;
