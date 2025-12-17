import type { PortableTextBlock } from '@portabletext/types'

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  featuredImage?: SanityImage
  content?: PortableTextBlock[]
  category?: 'vocal-training' | 'choir-tips' | 'music-production' | 'ministry'
  publishedAt?: string
}

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  quote: string
  name: string
  role?: string
  image?: SanityImage
  type: 'individual' | 'church'
  featured: boolean
}

export interface ServicePricing {
  tier: string
  price: string
  description?: string
  features?: string[]
}

export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: {
    current: string
  }
  description?: string
  fullDescription?: PortableTextBlock[]
  image?: SanityImage
  features?: string[]
  pricing?: ServicePricing[]
  order?: number
}

export interface FAQ {
  _id: string
  _type: 'faq'
  question: string
  answer: PortableTextBlock[]
  category: 'general' | 'pricing' | 'sessions' | 'getting-started'
  order?: number
}

export interface SocialLinks {
  instagram?: string
  facebook?: string
  youtube?: string
  twitter?: string
  tiktok?: string
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  siteName: string
  siteDescription?: string
  contactEmail?: string
  phone?: string
  address?: string
  socialLinks?: SocialLinks
  logo?: SanityImage
  favicon?: SanityImage
}
