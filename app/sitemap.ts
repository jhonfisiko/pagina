import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tusitio.com', // TU DOMINIO
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si tienes más páginas, añádelas aquí:
    /*
    {
      url: 'https://tusitio.com/servicios',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    */
  ]
}