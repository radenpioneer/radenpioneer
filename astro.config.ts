import { defineConfig } from 'astro/config'
import yaml from '@modyfi/vite-plugin-yaml'

// https://astro.build/config
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import { astroImageTools } from 'astro-imagetools'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), astroImageTools],
  vite: {
    plugins: [yaml()],
  },
})
