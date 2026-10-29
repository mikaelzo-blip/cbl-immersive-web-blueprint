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

// Each rail gets its own logos so the same brand never shows on both rows at once.
const rows = [brandItems.filter((_, i) => i % 2 === 0), brandItems.filter((_, i) => i % 2 === 1)];

// Rails differ in length, so duration scales with width to keep both moving at the same px/s.
// shortcut: width estimated from the desktop layout (88px padding, text logos ~120px); mobile scales all rails equally.
const PX_PER_SECOND = 124;
const COPIES = 4; // animation moves half the track (2 copies), which must stay wider than wide screens
const railDuration = (row: typeof brandItems) =>
  (row.reduce(
    (sum, b) => sum + 88 + (b.logoWidth && b.logoHeight ? logoHeight(b.logoWidth / b.logoHeight, b.logoCapRatio) * (b.logoWidth / b.logoHeight) : 120),
    0,
  ) * (COPIES / 2)) / PX_PER_SECOND;

// The trademark disclaimer lives in the footer on every page; no need to repeat it here.
export function BrandSection() {
  return (
    <section className="overflow-hidden border-b border-[#0F2942]/15 bg-[#F4F1EA] py-14 md:py-16">
      <Container>
        <h2 className="text-[clamp(2.4rem,3vw,2.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#0F2942]">
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
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`brand-marquee-track${rowIndex === 1 ? ' is-reverse' : ''}`}
            style={{ '--marquee-duration': `${railDuration(row).toFixed(1)}s` } as React.CSSProperties}
          >
            {Array.from({ length: COPIES }, (_, copyIndex) => (
              <div
                key={copyIndex}
                className="flex shrink-0 flex-nowrap items-center"
                aria-hidden={copyIndex > 0 ? 'true' : undefined}
              >
                {row.map((brand) => (
                  <div
                    key={`${copyIndex}-${brand.id}`}
                    title={brand.category}
                    className="flex h-20 shrink-0 items-center justify-center px-7 sm:h-24 sm:px-11"
                  >
                    {brand.logoPath && brand.logoWidth && brand.logoHeight ? (
                      <Image
                        src={brand.logoPath}
                        alt={copyIndex === 0 ? `${brand.name} — ${brand.category}` : ''}
                        width={brand.logoWidth}
                        height={brand.logoHeight}
                        // Off-screen rail items never cross the lazy-load threshold until they slide in, so logos popped in late on mobile.
                        loading="eager"
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
        ))}
      </div>
    </section>
  );
}
