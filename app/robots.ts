// https://sainte-patrie.com

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/survey', '/privacy'],
    },
    sitemap: 'https://sainte-patrie.com/sitemap.xml',
  }
}
