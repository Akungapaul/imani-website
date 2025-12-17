import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// Blog Post Queries
export async function getBlogPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(publishedAt desc)`)
}

export async function getBlogPost(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]`,
    { slug }
  )
}

// Testimonial Queries
export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"]`)
}

export async function getFeaturedTestimonials(limit = 3) {
  return client.fetch(
    `*[_type == "testimonial" && featured == true][0...$limit]`,
    { limit: limit - 1 }
  )
}

// Service Queries
export async function getServices() {
  return client.fetch(`*[_type == "service"]`)
}

export async function getService(slug: string) {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0]`,
    { slug }
  )
}

// FAQ Queries
export async function getFAQs() {
  return client.fetch(`*[_type == "faq"] | order(category asc)`)
}

// Site Settings Query
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`)
}
