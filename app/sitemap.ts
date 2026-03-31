// https://sainte-patrie.com

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sainte-patrie.com'
  const lastModified = new Date()

  return [
    { url: `${base}/`,        lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/survey`,  lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy`, lastModified, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
