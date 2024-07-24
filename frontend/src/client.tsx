import {createClient, type ClientConfig} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config:ClientConfig = {
    projectId: 'jf93t9bi',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-07-23',
}

export const client = createClient(config)

export const urlFor = (source: any) => imageUrlBuilder(client).image(source);

// const data = await client.fetch<number>(`count(*)`)

// console.log(`Number of documents: ${data}`)