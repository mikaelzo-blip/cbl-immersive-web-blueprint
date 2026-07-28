import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companyInfo } from '@/data/company';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export function AboutSection() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="Profil Perusahaan"
          title={`Tentang ${companyInfo.legalName}`}
          description="Mitra penyedia jasa teknik terpadu yang berfokus pada keandalan sistem operasional, efisiensi energi, dan penanganan teknis presisi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sisi Kiri: Deskripsi Naratif */}
          <div className="lg:col-span-7 space-y-4 text-base text-[#475569] leading-relaxed">
            <p>
              <strong className="text-[#0F2942]">{companyInfo.legalName} ({companyInfo.shortName})</strong> adalah penyedia jasa teknik terpadu yang bergerak di bidang perakitan panel listrik, otomatisasi proses PLC/HMI, instalasi mekanikal presisi, HVAC refrigerasi, otomatisasi pompa air, dan sistem pencahayaan teknis.
            </p>
            <p>
              Kami melayani manajer fasilitas, engineering manager, dan bagian pengadaan di gedung komersial, fasilitas rekreasi, wahana air, serta infrastruktur operasional di wilayah Jabodetabek dan sekitarnya.
            </p>
            <p>
              Dengan pendekatan penanganan berbasis standar pabrikan dan pengujian uji beban (commissioning) yang ketat, tim CBL memastikan setiap sistem yang ditangani beroperasi secara stabil, efisien, serta aman dari risiko kegagalan mendadak.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F0F7FD] border border-[#0E6BA8]/20">
                <DynamicIcon name="ShieldCheck" size={24} className="text-[#0E6BA8] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F2942] text-sm">Keselamatan &amp; Standar</h4>
                  <p className="text-xs text-[#475569] mt-0.5">Penanganan mengutamakan keamanan isolasi listrik dan APD standar kerja industri.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F0F7FD] border border-[#0E6BA8]/20">
                <DynamicIcon name="FileText" size={24} className="text-[#0E6BA8] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#0F2942] text-sm">Dokumentasi BAST</h4>
                  <p className="text-xs text-[#475569] mt-0.5">Penyerahan Berita Acara Serah Terima pekerjaan dan skema wiring terbarukan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Kartu Informasi Legal & Kontak Ringkas */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F2942] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A8CC]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#15426B]">
                <div className="w-10 h-10 rounded-xl bg-[#0E6BA8] text-white flex items-center justify-center font-bold text-lg">
                  CBL
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-tight">Data Legalitas Perusahaan</h3>
                  <span className="text-xs text-[#00A8CC]">Terdaftar &amp; Beroperasi Resmi</span>
                </div>
              </div>

              <dl className="space-y-4 text-xs sm:text-sm">
                <div>
                  <dt className="text-[#E2E8F0]/70">Nama Badan Hukum:</dt>
                  <dd className="font-semibold text-white mt-0.5">{companyInfo.legalName}</dd>
                </div>
                <div>
                  <dt className="text-[#E2E8F0]/70">Alamat Kantor:</dt>
                  <dd className="font-medium text-[#E2E8F0] mt-0.5">{companyInfo.address}</dd>
                </div>
                <div>
                  <dt className="text-[#E2E8F0]/70">Telepon Layanan:</dt>
                  <dd className="font-mono text-[#00A8CC] mt-0.5">{companyInfo.phone}</dd>
                </div>
                <div>
                  <dt className="text-[#E2E8F0]/70">WhatsApp Resmi:</dt>
                  <dd className="font-mono text-[#25D366] mt-0.5">{companyInfo.whatsappFormatted}</dd>
                </div>
                <div>
                  <dt className="text-[#E2E8F0]/70">Jam Operasional Tim:</dt>
                  <dd className="font-semibold text-white mt-0.5">{companyInfo.serviceHours}</dd>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-[#15426B] text-xs text-[#E2E8F0]/70 flex items-center gap-2">
                <DynamicIcon name="CheckCircle2" size={16} className="text-[#F97316]" />
                <span>Siap menerima panggilan survei teknis di lokasi.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
