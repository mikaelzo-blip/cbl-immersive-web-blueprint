import { MetadataRoute } from 'next';
import { companyInfo, serviceDivisions } from '@/data/company';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = companyInfo.seo.siteUrl;
  const contentLastModified = new Date('2026-08-04');

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: contentLastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/proyek`,
      lastModified: contentLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legalitas`,
      lastModified: contentLastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kebijakan-privasi`,
      lastModified: contentLastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceDivisions.map((service) => ({
    url: `${baseUrl}/layanan/${service.slug}`,
    lastModified: contentLastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/proyek/${project.slug}`,
    lastModified: contentLastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
