import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companyInfo } from '@/data/company';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { ContactForm } from '@/components/forms/ContactForm';
import { Reveal } from '@/components/ui/Reveal';

export function ContactSection() {
  return (
    <section id="kontak" className="py-16 md:py-28 bg-white border-b border-[#E2E8F0]">
      <Container>
        <Reveal>
          <SectionHeading
            badge="Hubungi Tim Teknis"
            title="Ceritakan kebutuhan teknis fasilitas Anda."
            description="Sampaikan kondisi peralatan, lokasi, dan target pekerjaan agar pembahasan awal lebih terarah sebelum peninjauan lapangan."
            align="left"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Kolom Kiri: Detail Informasi Kontak Legal Perusahaan */}
          <Reveal className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#0F2942] tracking-tight border-b border-[#E2E8F0] pb-4">
                Informasi kontak perusahaan
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center shrink-0">
                    <DynamicIcon name="MapPin" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">Alamat kantor:</h3>
                    <p className="text-sm text-[#475569] mt-1 leading-relaxed">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center shrink-0">
                    <DynamicIcon name="Phone" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">Telepon Kantor:</h3>
                    <a href={`tel:${companyInfo.phoneRaw}`} className="text-sm font-semibold text-[#0E6BA8] hover:underline mt-1 block">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#C2410C] flex items-center justify-center shrink-0">
                    <DynamicIcon name="MessageSquare" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">WhatsApp:</h3>
                    <a
                      href={`https://wa.me/${companyInfo.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#C2410C] hover:underline mt-1 block"
                    >
                      {companyInfo.whatsappFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center shrink-0">
                    <DynamicIcon name="Mail" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">Email permintaan penawaran:</h3>
                    <a href={`mailto:${companyInfo.email}`} className="text-sm font-medium text-[#0E6BA8] hover:underline mt-1 block">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center shrink-0">
                    <DynamicIcon name="Clock" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">Jam Layanan:</h3>
                    <p className="text-sm font-semibold text-[#0F2942] mt-1">{companyInfo.serviceHours}</p>
                  </div>
                </div>
              </div>

              {/* Tautan Legalitas & Maps */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0E6BA8] text-xs font-semibold text-[#0E6BA8] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <DynamicIcon name="MapPin" size={16} />
                    <span>Lihat lokasi di Google Maps</span>
                  </span>
                  <DynamicIcon name="ExternalLink" size={14} />
                </a>

                <Link
                  href="/legalitas"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F0F7FD] border border-[#0E6BA8]/20 hover:bg-[#0E6BA8] hover:text-white text-xs font-semibold text-[#0E6BA8] transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <DynamicIcon name="FileCheck" size={16} />
                    <span>Informasi legalitas dan registrasi vendor</span>
                  </span>
                  <DynamicIcon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Kolom Kanan: Formulir Konsultasi (WA + Mailto) */}
          <Reveal className="lg:col-span-7" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
