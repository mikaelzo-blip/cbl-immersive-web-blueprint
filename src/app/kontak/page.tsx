import type { Metadata } from 'next';
import { ArrowUpRight, Phone } from 'lucide-react';
import { ContactSection } from '@/components/sections/ContactSection';
import { PageHero } from '@/components/sections/PageHero';
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
            className="inline-flex items-center gap-2 rounded-md bg-[#E8641B] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C9530F] sm:text-base"
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
    </>
  );
}
