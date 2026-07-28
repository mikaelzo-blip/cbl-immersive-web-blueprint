import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { WorkProcessSection } from '@/components/sections/WorkProcessSection';
import { BrandSection } from '@/components/sections/BrandSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ClosingCtaSection } from '@/components/sections/ClosingCtaSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExpertiseSection />
      <WorkProcessSection />
      <BrandSection />
      <PortfolioSection />
      <WhyUsSection />
      <ClosingCtaSection />
      <ContactSection />
    </>
  );
}
