import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { serviceDivisions } from '@/data/company';

export function ServicesSection() {
  return (
    <section id="layanan" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="Cakupan Layanan Utama"
          title="6 Divisi Layanan Teknik Terpadu"
          description="Pengalaman terdokumentasi dan cakupan layanan yang dapat ditawarkan setelah survei, verifikasi kondisi, serta penetapan tenaga yang sesuai."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceDivisions.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
