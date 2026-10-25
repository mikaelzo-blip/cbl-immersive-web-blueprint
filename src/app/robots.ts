import { MetadataRoute } from 'next';
import { companyInfo } from '@/data/company';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // Keep Vercel preview deployments out of search results.
      ...(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production' ? { disallow: '/' } : { allow: '/' }),
    },
    sitemap: `${companyInfo.seo.siteUrl}/sitemap.xml`,
  };
}
