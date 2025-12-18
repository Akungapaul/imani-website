import { createClient, type SanityClient } from 'next-sanity'
import type { BlogPost, Testimonial, Service, FAQ, SiteSettings } from '@/types/sanity'

// Check if Sanity is configured
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Only create client if projectId is configured
export const client: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null

// Helper to safely fetch from Sanity
async function safeFetch<T>(query: string, params?: Record<string, string | number>): Promise<T | null> {
  if (!client) {
    console.warn('Sanity client not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID.')
    return null
  }
  try {
    return await client.fetch<T>(query, params || {})
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null
  }
}

// Blog Post Queries
export async function getBlogPosts(): Promise<BlogPost[]> {
  return (await safeFetch<BlogPost[]>(`*[_type == "blogPost"] | order(publishedAt desc)`)) || []
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return safeFetch<BlogPost>(
    `*[_type == "blogPost" && slug.current == $slug][0]`,
    { slug }
  )
}

// Testimonial Queries
export async function getTestimonials(): Promise<Testimonial[]> {
  return (await safeFetch<Testimonial[]>(`*[_type == "testimonial"]`)) || []
}

export async function getFeaturedTestimonials(limit = 3): Promise<Testimonial[]> {
  return (await safeFetch<Testimonial[]>(
    `*[_type == "testimonial" && featured == true][0...$limit]`,
    { limit: limit - 1 }
  )) || []
}

// Service Queries
export async function getServices(): Promise<Service[]> {
  return (await safeFetch<Service[]>(`*[_type == "service"]`)) || []
}

export async function getService(slug: string): Promise<Service | null> {
  return safeFetch<Service>(
    `*[_type == "service" && slug.current == $slug][0]`,
    { slug }
  )
}

// FAQ Queries
export async function getFAQs(): Promise<FAQ[]> {
  return (await safeFetch<FAQ[]>(`*[_type == "faq"] | order(category asc)`)) || []
}

// Site Settings Query
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch<SiteSettings>(`*[_type == "siteSettings"][0]`)
}
