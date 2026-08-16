import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { brandItems, brandDisclaimer } from '@/data/company';

export function BrandSection() {
  return (
    <section className="overflow-hidden border-b border-[#0F2942]/15 bg-[#F4F1EA] py-20 md:py-24">
      <Container>
        <SectionHeading
          badge="Cakupan Komponen & Suku Cadang"
          title="Merek dan komponen yang tercatat dalam pekerjaan CBL."
          description="Daftar ini menunjukkan merek dan jenis perangkat yang pernah tercatat dalam pekerjaan CBL. Pencantuman merek tidak menunjukkan hubungan distributor atau kemitraan resmi."
          align="left"
        />
      </Container>

      {/*
        KEEP THIS CONTINUOUS MARQUEE.
        The moving rail is an intentional interaction requested by the owner.
        Styling may be refined, but brand-marquee / brand-marquee-track must remain functional.
      */}
      <div
        className="brand-marquee w-full overflow-hidden border-y border-[#0F2942]/15 py-4"
        role="region"
        aria-label="Daftar merek industri yang pernah ditangani"
      >
        <div className="brand-marquee-track">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex shrink-0 flex-nowrap"
              aria-hidden={copyIndex === 1 ? 'true' : undefined}
            >
              {brandItems.map((brand) => (
                <div
                  key={`${copyIndex}-${brand.id}`}
                  className="group flex h-[112px] w-[210px] shrink-0 flex-col items-center justify-center border-r border-[#0F2942]/15 bg-[#F8F6F1] px-5 text-center min-[390px]:w-[220px] sm:w-[250px] sm:px-6"
                >
                  <div className="flex h-[52px] w-[160px] items-center justify-center overflow-hidden sm:w-[165px]">
                    {brand.logoPath ? (
                      <Image
                        src={brand.logoPath}
                        alt={copyIndex === 0 ? brand.name : ''}
                        width={brand.logoWidth || 160}
                        height={brand.logoHeight || 52}
                        className="max-h-full max-w-full object-contain opacity-80 transition-[opacity,transform] duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                      />
                    ) : (
                      <span className="max-w-full truncate text-xl font-semibold tracking-[-0.02em] text-[#0F2942]">
                        {brand.logoText}
                      </span>
                    )}
                  </div>
                  <span className="mt-3 max-w-full truncate text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-[#6B7780]">
                    {brand.category}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Container>
        <p className="mt-6 max-w-4xl border-l border-[#B34718]/60 pl-4 text-[0.82rem] leading-6 text-[#5F6D78]">
          <strong className="font-semibold text-[#0F2942]">Keterangan merek dagang — </strong>
          {brandDisclaimer}
        </p>
      </Container>
    </section>
  );
}
