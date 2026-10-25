import type { Metadata } from 'next';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkProcessSection } from '@/components/sections/WorkProcessSection';
import { ContactQuickSection } from '@/components/sections/ContactQuickSection';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Layanan',
  description:
    'Enam bidang layanan teknik CV Cakrawala Buana Lestari: kelistrikan & panel kontrol, otomasi, mekanikal, HVAC, pompa, dan pencahayaan teknis.',
  alternates: { canonical: `${companyInfo.seo.siteUrl}/layanan` },
};

export default function LayananPage() {
  return (
    <>
      <ServicesSection headingAs="h1" />
      <WorkProcessSection />
      <ContactQuickSection />
    </>
  );
}
