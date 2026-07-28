import { MetadataRoute } from 'next';
import { companyInfo } from '@/data/company';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: companyInfo.legalName,
    short_name: companyInfo.shortName,
    description: companyInfo.seo.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#0F2942',
    theme_color: '#0F2942',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
