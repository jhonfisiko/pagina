import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://smartdicom.com', // CAMBIADO: Tu dominio real
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}