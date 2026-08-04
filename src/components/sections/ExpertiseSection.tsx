import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { expertiseItems } from '@/data/company';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export function ExpertiseSection() {
  return (
    <section id="keahlian" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="Kompetensi Teknis"
          title="Bidang Keahlian &amp; Spesialisasi Lapangan"
          description="Bidang pengalaman yang tercatat dalam dokumen proyek; metode dan personel ditentukan menurut lingkup setiap pekerjaan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] card-hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0F2942] text-[#00A8CC] flex items-center justify-center mb-4 shadow-2xs">
                  <DynamicIcon name={item.iconName} size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0F2942] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
