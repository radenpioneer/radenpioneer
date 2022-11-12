import { defineConfig } from 'astro/config'
import yaml from '@modyfi/vite-plugin-yaml'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'
import Icons from 'unplugin-icons/vite'
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  site: 'https://radenpioneer.blog/',
  integrations: [
    react(),
    mdx(),
    sitemap(),
    prefetch(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
  ],
  vite: {
    plugins: [
      yaml(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    ],
  },
})
