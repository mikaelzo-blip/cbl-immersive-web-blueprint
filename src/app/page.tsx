import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSummarySection } from '@/components/sections/ExperienceSummarySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { DisciplineBand } from '@/components/sections/DisciplineBand';
import { FieldGallerySection } from '@/components/sections/FieldGallerySection';
import { WorkProcessSection } from '@/components/sections/WorkProcessSection';
import { BrandSection } from '@/components/sections/BrandSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ContactQuickSection } from '@/components/sections/ContactQuickSection';
import { VendorReadinessSection } from '@/components/sections/VendorReadinessSection';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  alternates: {
    canonical: companyInfo.seo.siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSummarySection />
      <DisciplineBand />
      <ServicesSection />
      <PortfolioSection />
      <FieldGallerySection />
      <WhyUsSection />
      <WorkProcessSection />
      <BrandSection />
      <VendorReadinessSection />
      <ContactQuickSection />
    </>
  );
}
