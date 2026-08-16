import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companyInfo } from '@/data/company';
import { ContactForm } from '@/components/forms/ContactForm';

export function ContactSection() {
  const contactRows = [
    { label: 'Alamat', value: companyInfo.address, href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`, external: true },
    { label: 'Telepon', value: companyInfo.phone, href: `tel:${companyInfo.phoneRaw}` },
    { label: 'WhatsApp', value: companyInfo.whatsappFormatted, href: `https://wa.me/${companyInfo.whatsappNumber}`, external: true },
    { label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { label: 'Jam layanan', value: companyInfo.serviceHours },
  ];

  return (
    <section id="kontak" className="border-b border-[#0F2942]/15 bg-[#F4F1EA] py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeading
          badge="Hubungi CBL"
          title="Ceritakan kebutuhan teknis fasilitas Anda."
          description="Informasi awal mengenai kondisi peralatan, lokasi, spesifikasi, dan target pekerjaan membantu pembahasan menjadi lebih terarah sebelum peninjauan lapangan."
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="border-t border-[#0F2942]/25">
              {contactRows.map((item) => (
                <div key={item.label} className="border-b border-[#0F2942]/15 py-5 sm:py-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="mt-2.5 block text-[0.95rem] font-semibold leading-7 text-[#0F2942] transition-colors hover:text-[#B34718] sm:text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2.5 text-[0.95rem] font-semibold leading-7 text-[#0F2942] sm:text-base">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-sm text-[0.85rem] leading-6 text-[#5F6D78]">
              Membutuhkan informasi untuk registrasi vendor atau dokumen badan usaha?{' '}
              <Link href="/legalitas" className="font-semibold text-[#B34718] underline underline-offset-4">
                Buka halaman legalitas
              </Link>
              .
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
