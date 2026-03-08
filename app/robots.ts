import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Aquí puedes bloquear carpetas que no quieras en Google
    },
    sitemap: 'https://tusitio.com/sitemap.xml', // TU DOMINIO
  }
}