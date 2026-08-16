import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { expertiseItems } from '@/data/company';

export function ExpertiseSection() {
  return (
    <section id="keahlian" className="border-b border-[#0F2942]/15 bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading
              badge="Kompetensi Teknis"
              title="Detail teknis yang lahir dari pekerjaan nyata."
              description="Kompetensi berikut dirangkum dari pengalaman proyek dan digunakan sebagai referensi awal saat kebutuhan baru diklarifikasi."
              align="left"
              className="lg:sticky lg:top-28"
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {expertiseItems.map((item, index) => (
              <article
                key={item.id}
                className="grid gap-4 border-t border-[#0F2942]/20 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6 md:py-8"
              >
                <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-[#B34718]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#0F2942] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5F6D78]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
