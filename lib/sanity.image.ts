import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'

// Only create builder if client is configured
const builder = client ? imageUrlBuilder(client) : null

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder) {
    // Return a placeholder or empty string when Sanity is not configured
    return {
      url: () => '/placeholder.jpg',
      width: () => ({ url: () => '/placeholder.jpg' }),
      height: () => ({ url: () => '/placeholder.jpg' }),
    }
  }
  return builder.image(source)
}
