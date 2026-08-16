'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { companyInfo, mainNavItems, serviceDivisions, brandDisclaimer } from '@/data/company';
import { resolveSectionHref } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0B2238] py-14 text-white md:py-16 lg:py-20">
      <Container>
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-12 lg:gap-10 lg:pb-14">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0">
                <Image
                  src="/logo/cbl-logo.png"
                  alt="Logo CV Cakrawala Buana Lestari"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-[1.02rem] font-semibold tracking-[-0.02em]">{companyInfo.legalName}</p>
                <p className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#9FB2C1]">Solusi teknis · Jakarta</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-7 text-[#C7D2DB]">
              Kontraktor dan penyedia solusi teknis berbasis proyek untuk elektrikal, otomasi, mekanikal, HVAC, sistem air, pencahayaan, dan pengadaan teknis.
            </p>
            <p className="mt-5 text-[0.82rem] leading-6 text-[#9FB2C1]">{companyInfo.serviceHours}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[#F0A16F]">Navigasi</p>
              <ul className="mt-4 space-y-3 text-[0.92rem] text-[#D7E1E8]">
                {mainNavItems.map((item) => (
                  <li key={item.label}>
                    <Link href={resolveSectionHref(item.href, pathname)} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[#F0A16F]">Layanan</p>
              <ul className="mt-4 space-y-3 text-[0.92rem] leading-6 text-[#D7E1E8]">
                {serviceDivisions.map((service) => (
                  <li key={service.id}>
                    <Link href={`/layanan/${service.slug}`} className="transition-colors hover:text-white">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[#F0A16F]">Kontak</p>
            <address className="mt-4 space-y-3.5 text-[0.92rem] not-italic leading-6 text-[#D7E1E8]">
              <p>{companyInfo.address}</p>
              <p><a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-white">{companyInfo.phone}</a></p>
              <p><a href={`https://wa.me/${companyInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp {companyInfo.whatsappFormatted}</a></p>
              <p><a href={`mailto:${companyInfo.email}`} className="break-all hover:text-white">{companyInfo.email}</a></p>
            </address>
          </div>
        </div>

        <div className="grid gap-7 pt-7 text-[0.8rem] leading-6 text-[#93A6B6] lg:grid-cols-12 lg:pt-8">
          <p className="max-w-4xl lg:col-span-7">
            <strong className="font-semibold text-[#C7D2DB]">Keterangan merek — </strong>{brandDisclaimer}
          </p>
          <div className="lg:col-span-4 lg:col-start-9 lg:text-right">
            <p>© {currentYear} {companyInfo.legalName}</p>
            <div className="mt-2.5 flex gap-4 lg:justify-end">
              <Link href="/legalitas" className="underline underline-offset-4 hover:text-white">Legalitas</Link>
              <Link href="/kebijakan-privasi" className="underline underline-offset-4 hover:text-white">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
