import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { companyInfo } from '@/data/company';
import { ContactForm } from '@/components/forms/ContactForm';

export function ContactSection() {
  const contactRows = [
    { label: 'Alamat', value: companyInfo.address, href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`, external: true, wide: true },
    { label: 'Telepon', value: companyInfo.phone, href: `tel:${companyInfo.phoneRaw}` },
    { label: 'WhatsApp', value: companyInfo.whatsappFormatted, href: `https://wa.me/${companyInfo.whatsappNumber}`, external: true },
    { label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}`, wide: true },
    { label: 'Jam layanan', value: companyInfo.serviceHours, wide: true },
  ];

  return (
    <section id="formulir" className="border-b border-[#0F2942]/15 bg-[#F4F1EA] py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-x-6 border-t border-[#0F2942]/25 lg:block">
              {contactRows.map((item) => (
                <div key={item.label} className={`border-b border-[#0F2942]/15 py-4 sm:py-6 ${item.wide ? 'col-span-2' : ''}`}>
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#5F6D78]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="-mb-2 mt-0.5 block py-2 text-[0.95rem] font-semibold leading-7 text-[#0F2942] transition-colors hover:text-[#B34718] sm:text-base"
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

          <div className="order-first lg:order-none lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
