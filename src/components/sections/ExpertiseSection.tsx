import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { expertiseItems } from '@/data/company';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { Reveal } from '@/components/ui/Reveal';

export function ExpertiseSection() {
  return (
    <section id="keahlian" className="py-16 md:py-28 bg-white border-b border-[#E2E8F0]">
      <Container>
        <Reveal>
          <SectionHeading
            badge="Kompetensi Teknis"
            title="Kompetensi yang dibentuk dari kebutuhan lapangan."
            description="Bidang pengalaman berikut tercatat dalam dokumen proyek; metode dan personel ditentukan menurut lingkup setiap pekerjaan."
            align="left"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 70} className="h-full">
            <div className="p-6 rounded-3xl bg-[#F7FAFC] border border-[#DCE6EE] card-hover-lift flex flex-col justify-between h-full">
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
