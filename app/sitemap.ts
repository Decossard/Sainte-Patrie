// © DSDC — The Decossard Socio-Economic Development Corporation
// https://sainte-patrie.com

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sainte-patrie.com'
  const lastModified = new Date()

  return [
    { url: `${base}/`,         lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/faq`,      lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/founders`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/team`,     lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/survey`,   lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy`,  lastModified, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
