import type { SchemaTypeDefinition } from 'sanity'
import { blogPost } from './schemas/blogPost'
import { testimonial } from './schemas/testimonial'
import { service } from './schemas/service'
import { faq } from './schemas/faq'
import { siteSettings } from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, testimonial, service, faq, siteSettings],
}
