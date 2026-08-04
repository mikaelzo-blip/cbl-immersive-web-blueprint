import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { serviceDivisions } from '@/data/company';
import { Reveal } from '@/components/ui/Reveal';

export function ServicesSection() {
  return (
    <section id="layanan" className="py-16 md:py-28 bg-[#F7FAFC] border-b border-[#E2E8F0]">
      <Container>
        <Reveal>
          <SectionHeading
            badge="Cakupan Layanan Utama"
            title="Kebutuhan teknis lintas fasilitas dalam satu koordinasi."
            description="Pekerjaan direncanakan berdasarkan hasil survei, kondisi peralatan, prioritas operasional, dan batas pekerjaan yang disepakati."
            align="left"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceDivisions.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 80} className="h-full">
              <ServiceCard service={service} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
