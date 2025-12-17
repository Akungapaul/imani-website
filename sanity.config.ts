'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema'

export default defineConfig({
  name: 'imani-website',
  title: 'Imani Website',
  projectId: 'r6kxcauy',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema,
})
