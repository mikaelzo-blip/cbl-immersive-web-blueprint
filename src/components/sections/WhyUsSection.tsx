import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { whyUsPoints } from '@/data/company';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export function WhyUsSection() {
  return (
    <section id="mengapa-cbl" className="py-16 md:py-24 bg-[#0F2942] text-white border-b border-[#15426B]">
      <Container>
        <SectionHeading
          badge="Nilai Tambah Pelayanan"
          title="Mengapa Memilih CV Cakrawala Buana Lestari"
          description="Komitmen pengerjaan teknis berbasis keandalan operasional, kejelasan komunikasi, dan dokumentasi transparan."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsPoints.map((point) => (
            <div
              key={point.id}
              className="p-6 rounded-2xl bg-[#15426B]/60 border border-[#15426B] hover:border-[#00A8CC]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0E6BA8] text-[#00A8CC] flex items-center justify-center mb-4 shadow-sm">
                  <DynamicIcon name={point.iconName} size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm text-[#E2E8F0] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
