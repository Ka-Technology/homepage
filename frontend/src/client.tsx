import {createClient, type ClientConfig} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


const config:ClientConfig = {
    projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-07-23',
    token: import.meta.env.VITE_APP_SANITY_TOKEN,
}

export const client = createClient(config)

export const urlFor = (source: any) => imageUrlBuilder(client).image(source);

// const data = await client.fetch<number>(`count(*)`)

// console.log(`Number of documents: ${data}`)