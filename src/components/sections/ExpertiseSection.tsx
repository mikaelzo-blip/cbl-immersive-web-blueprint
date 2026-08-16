import React from 'react';
import { Container } from '@/components/ui/Container';
import { expertiseItems } from '@/data/company';

export function ExpertiseSection() {
  return (
    <section id="keahlian" className="border-b border-[#0F2942]/15 bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#B34718]">
                <span className="h-px w-8 bg-[#B34718]/45" aria-hidden="true" />
                <span>Kompetensi teknis</span>
              </div>
              <h2 className="max-w-[11ch] text-[clamp(2.65rem,4.6vw,4.9rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#0F2942]">
                Keahlian teknis yang terbentuk dari pengalaman lapangan.
              </h2>
              <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-[#5F6D78] sm:text-base sm:leading-8">
                Daftar ini merangkum bidang teknis yang pernah ditangani dalam proyek CBL dan menjadi acuan awal saat kebutuhan baru dibahas.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {expertiseItems.map((item, index) => (
              <article
                key={item.id}
                className="grid gap-4 border-t border-[#0F2942]/20 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-7 md:py-8"
              >
                <span className="text-[0.72rem] font-semibold tracking-[0.16em] text-[#B34718]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#0F2942] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-[#5F6D78] sm:text-base">
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
