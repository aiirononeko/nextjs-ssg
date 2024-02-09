import { createClient } from "microcms-js-sdk";

export const microCmsClient = createClient({
  serviceDomain: 'miuxhkwug8',
  apiKey: process.env.API_KEY ?? ''
})
