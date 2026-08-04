import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { brandItems, brandDisclaimer } from '@/data/company';
import { Reveal } from '@/components/ui/Reveal';

export function BrandSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7FAFC] border-b border-[#E2E8F0] overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeading
            badge="Cakupan Komponen &amp; Suku Cadang"
            title="Merek industri yang biasa ditangani."
            description="Logo menjelaskan pengalaman penanganan komponen dan tidak menyatakan hubungan distributor atau kemitraan resmi."
            align="left"
          />
        </Reveal>
      </Container>

      <div
        className="brand-marquee w-full overflow-hidden py-6 mb-8"
        role="region"
        aria-label="Daftar merek industri yang biasa ditangani"
        tabIndex={0}
      >
        <div className="brand-marquee-track">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex flex-nowrap shrink-0 gap-6 pr-6"
              aria-hidden={copyIndex === 1 ? 'true' : undefined}
            >
              {brandItems.map((brand) => (
                <div
                  key={`${copyIndex}-${brand.id}`}
                  className="brand-marquee-card inline-flex flex-col items-center justify-between w-[240px] sm:w-[260px] h-[130px] sm:h-[140px] p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs shrink-0 text-center select-none opacity-90 hover:opacity-100 transition-all duration-300 card-hover-lift group"
                >
                  <div className="w-[170px] h-[52px] flex items-center justify-center overflow-hidden">
                    {brand.logoPath ? (
                      <Image
                        src={brand.logoPath}
                        alt={copyIndex === 0 ? brand.name : ''}
                        width={brand.logoWidth || 160}
                        height={brand.logoHeight || 52}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <span className="font-black text-xl sm:text-2xl text-[#0F2942] tracking-tight truncate max-w-full leading-none">
                        {brand.logoText}
                      </span>
                    )}
                  </div>

                  <span className="text-xs sm:text-sm text-[#475569] font-medium truncate max-w-full">
                    {brand.category}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div className="p-4 sm:p-5 rounded-xl bg-[#F0F7FD] border border-[#0E6BA8]/20 text-xs text-[#475569] leading-relaxed">
          <p>
            <strong className="text-[#0F2942] font-semibold">Pernyataan Batasan Merek Dagang &amp; Kerja Sama:</strong> {brandDisclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}
