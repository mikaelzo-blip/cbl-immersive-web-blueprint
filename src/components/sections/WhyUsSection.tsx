import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { whyUsPoints } from '@/data/company';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { Reveal } from '@/components/ui/Reveal';

export function WhyUsSection() {
  return (
    <section id="mengapa-cbl" className="relative py-16 md:py-28 bg-[#0F2942] text-white border-b border-[#15426B] overflow-hidden">
      <div className="absolute inset-0 engineering-grid-dark opacity-40" aria-hidden="true" />
      <Container>
        <Reveal className="relative">
          <SectionHeading
            badge="Cara Kami Memberikan Nilai"
            title="Koordinasi teknis yang jelas untuk setiap pekerjaan."
            description="CBL mengutamakan kejelasan kebutuhan, kesesuaian spesifikasi, koordinasi lapangan, dan dokumentasi pada setiap tahap proyek."
            align="left"
            light
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsPoints.map((point, index) => (
            <Reveal key={point.id} delay={index * 80} className="h-full">
            <div className="p-6 rounded-3xl bg-white/[0.06] border border-white/10 hover:border-[#67E8F9]/35 hover:bg-white/[0.09] transition-all flex flex-col justify-between h-full">
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
