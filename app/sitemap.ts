import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sainte-patrie.com'
  const lastModified = new Date('2026-03-16')

  return [
    { url: `${base}/`,         lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/faq`,      lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/founders`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/team`,     lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
