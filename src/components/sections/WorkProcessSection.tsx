import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProcessCard } from '@/components/cards/ProcessCard';
import { workProcessSteps } from '@/data/company';
import { Reveal } from '@/components/ui/Reveal';

export function WorkProcessSection() {
  return (
    <section id="cara-kerja" className="py-16 md:py-28 bg-[#F7FAFC] border-b border-[#E2E8F0]">
      <Container>
        <Reveal>
          <SectionHeading
            badge="Alur Kerja"
            title="Proses yang jelas, dari pemeriksaan awal hingga serah terima."
            description="Tahapan kerja disesuaikan dengan kondisi fasilitas, batas pekerjaan, risiko, dan persyaratan di lokasi proyek."
            align="left"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workProcessSteps.map((step, idx) => (
            <Reveal key={step.stepNumber} delay={idx * 80} className="h-full">
              <ProcessCard step={step} isLast={idx === workProcessSteps.length - 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
