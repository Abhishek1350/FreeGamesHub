import { MetadataRoute } from 'next'
import { currentSiteUrl } from '@/lib/env'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/studio/',
    },
    sitemap: `${currentSiteUrl}/sitemap.xml`,
  }
}