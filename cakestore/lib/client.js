import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'0iq7zeju',
    dataset: 'production',
    apiVersion: '2023-08-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source).url();