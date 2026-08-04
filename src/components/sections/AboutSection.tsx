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
          description="Kontraktor dan penyedia solusi teknis berbasis proyek dengan rekam pekerjaan terverifikasi periode 2022-2026."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sisi Kiri: Deskripsi Naratif */}
          <div className="lg:col-span-7 space-y-4 text-base text-[#475569] leading-relaxed">
            <p>
              <strong className="text-[#0F2942]">{companyInfo.legalName} ({companyInfo.shortName})</strong> adalah badan usaha berbentuk Persekutuan Komanditer yang mengelola pengadaan, pemasangan, penggantian, perbaikan, pengujian, dan dokumentasi pekerjaan teknis berbasis proyek.
            </p>
            <p>
              Pengalaman terdokumentasi mencakup fasilitas rekreasi, gedung operasional, wahana, akuarium, kolam, dan utilitas kawasan. Ketersediaan layanan di lokasi lain ditentukan melalui klarifikasi kebutuhan dan kemampuan mobilisasi.
            </p>
            <p>
              CBL menggunakan tim inti dan tenaga profesional berbasis proyek. Metode, personel, pengujian, dan dokumen serah terima disesuaikan dengan lingkup serta persyaratan lokasi klien.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F0F7FD] border border-[#0E6BA8]/20">
                <DynamicIcon name="ShieldCheck" size={24} className="text-[#0E6BA8] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0F2942] text-sm">Keselamatan &amp; Standar</h3>
                  <p className="text-xs text-[#475569] mt-0.5">Penanganan mengutamakan keamanan isolasi listrik dan APD standar kerja industri.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F0F7FD] border border-[#0E6BA8]/20">
                <DynamicIcon name="FileText" size={24} className="text-[#0E6BA8] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0F2942] text-sm">Dokumentasi BAST</h3>
                  <p className="text-xs text-[#475569] mt-0.5">BAST, surat jalan, laporan, atau gambar as-built disiapkan bila termasuk persyaratan pekerjaan.</p>
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
                  <dt className="text-[#E2E8F0]/70">Nama Badan Usaha:</dt>
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
