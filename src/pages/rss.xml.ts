import rss from '@astrojs/rss'
import site from '~/site.yml'

const postsData = import.meta.glob('./blog/**/*.{md,mdx}', { eager: true })
const posts: any = Object.values(postsData)

export const get = () =>
  rss({
    title: site.name,
    description: site.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
    })),
    stylesheet: '/rss.xsl',
  })
