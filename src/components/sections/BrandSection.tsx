import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { brandItems } from '@/data/company';

// Every wordmark renders with the same cap height; icons and taglines grow around it. Caps keep icon-heavy and very wide logos in the row.
const CAP_HEIGHT = 26;
const MAX_HEIGHT = 60;
const MAX_WIDTH = 360;
const logoHeight = (aspectRatio: number, capRatio = 1) =>
  Math.round(Math.min(CAP_HEIGHT / capRatio, MAX_HEIGHT, MAX_WIDTH / aspectRatio));

// The trademark disclaimer lives in the footer on every page; no need to repeat it here.
export function BrandSection() {
  return (
    <section className="overflow-hidden border-b border-[#0F2942]/15 bg-[#F4F1EA] py-14 md:py-16">
      <Container>
        <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#0F2942] sm:text-3xl">
          Cakupan komponen &amp; suku cadang.
        </h2>
      </Container>

      {/*
        KEEP THIS CONTINUOUS MARQUEE.
        The moving rail is an intentional interaction requested by the owner.
        Styling may be refined, but brand-marquee / brand-marquee-track must remain functional.
      */}
      <div
        className="brand-marquee mt-8 w-full overflow-hidden md:mt-10"
        role="region"
        aria-label="Daftar merek industri yang pernah ditangani"
      >
        <div className="brand-marquee-track">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex shrink-0 flex-nowrap items-center"
              aria-hidden={copyIndex === 1 ? 'true' : undefined}
            >
              {brandItems.map((brand) => (
                <div
                  key={`${copyIndex}-${brand.id}`}
                  title={brand.category}
                  className="flex h-24 shrink-0 items-center justify-center px-7 sm:px-11"
                >
                  {brand.logoPath && brand.logoWidth && brand.logoHeight ? (
                    <Image
                      src={brand.logoPath}
                      alt={copyIndex === 0 ? `${brand.name} — ${brand.category}` : ''}
                      width={brand.logoWidth}
                      height={brand.logoHeight}
                      style={{ '--logo-h': logoHeight(brand.logoWidth / brand.logoHeight, brand.logoCapRatio) } as React.CSSProperties}
                      className="h-[calc(var(--logo-h)*0.78px)] w-auto sm:h-[calc(var(--logo-h)*1px)]"
                    />
                  ) : (
                    <span className="max-w-full truncate text-xl font-semibold tracking-[-0.02em] text-[#0F2942]">
                      {brand.logoText}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
