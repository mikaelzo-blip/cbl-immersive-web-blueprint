'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { companyInfo, mainNavItems, serviceDivisions, brandDisclaimer } from '@/data/company';
import { resolveSectionHref } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2942] text-white pt-16 pb-12 border-t border-[#15426B]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#15426B]">
          {/* Kolom 1: Perusahaan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/logo/cbl-logo.png"
                  alt="Logo CV Cakrawala Buana Lestari"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {companyInfo.legalName}
              </span>
            </div>
            <p className="text-sm text-[#E2E8F0] leading-relaxed">
              Penyedia jasa teknik terpadu spesialis kelistrikan, otomatisasi industri, mekanikal presisi, HVAC refrigerasi, sistem pompa, dan pencahayaan khusus.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#15426B] text-[#67E8F9] text-xs font-semibold">
              <DynamicIcon name="Clock" size={14} />
              <span>Jam Operasional: {companyInfo.serviceHours}</span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide border-b border-[#15426B] pb-2">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5 text-sm">
              {mainNavItems.map((item) => {
                const href = resolveSectionHref(item.href, pathname);
                return (
                  <li key={item.label}>
                    <Link
                      href={href}
                      className="text-[#E2E8F0] hover:text-[#00A8CC] transition-colors inline-flex items-center gap-1.5"
                    >
                      <DynamicIcon name="ChevronRight" size={14} className="text-[#0E6BA8]" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Kolom 3: Divisi Layanan */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide border-b border-[#15426B] pb-2">
              Divisi Layanan
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceDivisions.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="text-[#E2E8F0] hover:text-[#00A8CC] transition-colors inline-flex items-center gap-1.5"
                  >
                    <DynamicIcon name="ChevronRight" size={14} className="text-[#0E6BA8]" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak Legal & Dokumen */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide border-b border-[#15426B] pb-2">
              Kontak &amp; Legalitas
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-[#E2E8F0]">
                <DynamicIcon name="MapPin" size={18} className="text-[#00A8CC] shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="flex items-center gap-3 text-[#E2E8F0] hover:text-[#00A8CC] transition-colors"
                >
                  <DynamicIcon name="Phone" size={18} className="text-[#00A8CC] shrink-0" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#E2E8F0] hover:text-[#F97316] transition-colors"
                >
                  <DynamicIcon name="MessageSquare" size={18} className="text-[#F97316] shrink-0" />
                  <span>WhatsApp: {companyInfo.whatsappFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-[#E2E8F0] hover:text-[#00A8CC] transition-colors"
                >
                  <DynamicIcon name="Mail" size={18} className="text-[#00A8CC] shrink-0" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Merek & Hak Cipta */}
        <div className="pt-8 space-y-4 text-xs text-[#E2E8F0]/70">
          <p className="leading-relaxed bg-[#15426B]/50 p-4 rounded-xl border border-[#15426B]">
            <strong className="text-[#67E8F9]">Pemberitahuan Merek:</strong> {brandDisclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#15426B]/40">
            <p>
              &copy; {currentYear} {companyInfo.legalName}. Seluruh Hak Cipta Dilindungi Undang-Undang.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/legalitas" className="hover:text-[#00A8CC] underline">
                Legalitas &amp; Dokumen Vendor
              </Link>
              <span className="text-[#15426B]">•</span>
              <Link href="/kebijakan-privasi" className="hover:text-[#00A8CC] underline">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
