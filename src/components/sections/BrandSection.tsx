import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { brandItems, brandDisclaimer } from '@/data/company';

export function BrandSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden">
      {/* 1. Section Heading */}
      <Container>
        <SectionHeading
          badge="Cakupan Komponen &amp; Suku Cadang"
          title="Merek Industri yang Biasa Ditangani"
          description="Tim teknis kami terbiasa melakukan penanganan, instalasi, dan perbaikan komponen dari berbagai manufaktur komponen industri."
        />
      </Container>

      {/* 2. Full-Bleed Running Marquee Track dengan Warna Logo Asli */}
      <div className="w-full overflow-hidden marquee-mask py-6 mb-8">
        <div className="animate-marquee-track">
          {/* Copy 1: Set Utama */}
          <div className="flex flex-nowrap shrink-0">
            {brandItems.map((brand) => (
              <div
                key={`b1-${brand.id}`}
                className="inline-flex flex-col items-center justify-between w-[240px] sm:w-[260px] h-[130px] sm:h-[140px] p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mr-6 shrink-0 text-center select-none opacity-90 hover:opacity-100 transition-all duration-300 card-hover-lift group"
              >
                {/* Box Logo Besar (Max 170px x 52px) dengan Warna Asli (Tanpa Grayscale) */}
                <div className="w-[170px] h-[52px] flex items-center justify-center overflow-hidden">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
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

                {/* Sub-label Kategori */}
                <span className="text-xs sm:text-sm text-[#475569] font-medium truncate max-w-full">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>

          {/* Copy 2: Duplikasi 1 (-50% seam) */}
          <div className="flex flex-nowrap shrink-0" aria-hidden="true">
            {brandItems.map((brand) => (
              <div
                key={`b2-${brand.id}`}
                className="inline-flex flex-col items-center justify-between w-[240px] sm:w-[260px] h-[130px] sm:h-[140px] p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mr-6 shrink-0 text-center select-none opacity-90 hover:opacity-100 transition-all duration-300 card-hover-lift group"
              >
                <div className="w-[170px] h-[52px] flex items-center justify-center overflow-hidden">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
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

          {/* Copy 3: Duplikasi 2 */}
          <div className="flex flex-nowrap shrink-0" aria-hidden="true">
            {brandItems.map((brand) => (
              <div
                key={`b3-${brand.id}`}
                className="inline-flex flex-col items-center justify-between w-[240px] sm:w-[260px] h-[130px] sm:h-[140px] p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mr-6 shrink-0 text-center select-none opacity-90 hover:opacity-100 transition-all duration-300 card-hover-lift group"
              >
                <div className="w-[170px] h-[52px] flex items-center justify-center overflow-hidden">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
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

          {/* Copy 4: Duplikasi 3 */}
          <div className="flex flex-nowrap shrink-0" aria-hidden="true">
            {brandItems.map((brand) => (
              <div
                key={`b4-${brand.id}`}
                className="inline-flex flex-col items-center justify-between w-[240px] sm:w-[260px] h-[130px] sm:h-[140px] p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mr-6 shrink-0 text-center select-none opacity-90 hover:opacity-100 transition-all duration-300 card-hover-lift group"
              >
                <div className="w-[170px] h-[52px] flex items-center justify-center overflow-hidden">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
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
        </div>
      </div>

      {/* 3. Disclaimer Hak Cipta & Merek Dagang */}
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
