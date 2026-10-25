import type { Metadata } from 'next';
import { ArrowUpRight, Phone } from 'lucide-react';
import { ContactSection } from '@/components/sections/ContactSection';
import { PageHero } from '@/components/sections/PageHero';
import { Container } from '@/components/ui/Container';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Formulir Konsultasi',
  description: 'Kirim ringkasan kebutuhan teknis fasilitas Anda ke CV Cakrawala Buana Lestari melalui WhatsApp atau email.',
  alternates: { canonical: `${companyInfo.seo.siteUrl}/kontak` },
};

export default function KontakPage() {
  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo CBL, saya ingin konsultasi teknis kebutuhan fasilitas operasional kami.'
  )}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address)}`;

  return (
    <>
      <PageHero
        label="Kontak"
        titleLines={['Ceritakan kebutuhan', 'teknis Anda.']}
        lead="Isi formulir di bawah, atau hubungi kami langsung lewat WhatsApp."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#B34718] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#8F3413] sm:text-base"
          >
            Konsultasi via WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="hidden items-center gap-2 rounded-md border border-[#0F2942]/30 sm:inline-flex px-6 py-3.5 text-sm font-semibold text-[#0F2942] transition-colors hover:border-[#0F2942] hover:bg-[#0F2942]/5 sm:text-base"
          >
            <Phone aria-hidden="true" className="size-4" /> {companyInfo.phone}
          </a>
        </div>
      </PageHero>
      <ContactSection />

      {/* Office location: keyless Google Maps embed of the street address, loaded only when scrolled near. */}
      <section aria-labelledby="map-title" className="bg-[#F4F1EA] text-[#0F2942]">
        <Container className="flex flex-col gap-4 pb-8 pt-12 sm:flex-row sm:items-end sm:justify-between md:pb-10 md:pt-16">
          <div>
            <h2 id="map-title" className="text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1] tracking-[-0.04em]">
              Kantor kami.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#5F6D78] sm:text-base">{companyInfo.address}</p>
          </div>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start hit-area border-b border-[#B34718] pb-1 text-sm font-semibold text-[#B34718] transition-colors hover:text-[#8F3413] sm:self-auto"
          >
            Buka di Google Maps <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </Container>
        <iframe
          title={`Peta lokasi kantor ${companyInfo.legalName}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&hl=id&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[24rem] w-full border-0 sm:h-[30rem] lg:h-[34rem]"
        />
      </section>
    </>
  );
}
