import { defineConfig } from 'astro/config'
import yaml from '@modyfi/vite-plugin-yaml'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import { astroImageTools } from 'astro-imagetools'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

export default defineConfig({
  site: 'https://radenpioneer.blog/',
  integrations: [react(), mdx(), astroImageTools, sitemap(), prefetch()],
  vite: {
    plugins: [yaml()],
  },
})
