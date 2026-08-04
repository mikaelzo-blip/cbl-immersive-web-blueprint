import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProcessCard } from '@/components/cards/ProcessCard';
import { workProcessSteps } from '@/data/company';

export function WorkProcessSection() {
  return (
    <section id="cara-kerja" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="Alur Pengerjaan Sistematis"
          title="4 Tahap Metodologi Kerja CBL"
          description="Alur kerja disusun dari pemeriksaan awal, penetapan lingkup, pelaksanaan, hingga dokumentasi serah terima sesuai kebutuhan proyek."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workProcessSteps.map((step, idx) => (
            <ProcessCard key={step.stepNumber} step={step} isLast={idx === workProcessSteps.length - 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
