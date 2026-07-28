import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { legalDocuments, legalNotice, k3Procedures, handoverDocs, vendorRegistrationStatement, companyProfileDoc } from '@/data/legal';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export const metadata: Metadata = {
  title: `Legalitas & Prosedur K3 | ${companyInfo.shortName}`,
  description: 'Dokumentasi kelayakan legalitas badan usaha, kepatuhan prosedur K3 lapangan, dan kesiapan registrasi vendor CV Cakrawala Buana Lestari (CBL).',
  alternates: {
    canonical: `${companyInfo.seo.siteUrl}/legalitas`,
  },
};

export default function LegalitasPage() {
  return (
    <div className="py-10 md:py-20 bg-[#F8FAFC] min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0E6BA8] transition-colors">
            Beranda
          </Link>
          <DynamicIcon name="ChevronRight" size={14} className="text-[#475569]/50" />
          <span className="text-[#0F2942] font-semibold">
            Legalitas &amp; Prosedur Vendor
          </span>
        </nav>

        {/* Page Header */}
        <SectionHeading
          badge="Informasi Pengadaan &amp; Kepatuhan"
          title="Legalitas Perusahaan &amp; Prosedur K3"
          description="Transparansi kelengkapan administrasi badan usaha dan standar keselamatan kerja lapangan untuk kemudahan proses registrasi vendor."
          as="h1"
        />

        {/* Notice Kerahasiaan Nomor Dokumen */}
        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm mb-12 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center shrink-0 mt-0.5">
            <DynamicIcon name="ShieldCheck" size={22} />
          </div>
          <div className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            <h2 className="font-bold text-[#0F2942] mb-1">
              Pernyataan Kerahasiaan Dokumen Publik:
            </h2>
            <p>{legalNotice}</p>
          </div>
        </div>

        {/* Section 1: Checklist Dokumen Badan Usaha */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F2942] tracking-tight mb-6 flex items-center gap-2">
            <DynamicIcon name="FileText" size={24} className="text-[#0E6BA8]" />
            <span>Checklist Kelengkapan Dokumen Legalitas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F0F7FD] text-[#0E6BA8] border border-[#0E6BA8]/20">
                      {doc.category}
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <DynamicIcon name="CheckCircle2" size={14} />
                      <span>Tersedia Salinan</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F2942] mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Prosedur Keselamatan Kerja K3 */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <DynamicIcon name="ShieldAlert" size={26} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F2942] tracking-tight">
                  Prosedur K3 &amp; Keselamatan Lapangan
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                  Penerapan protokol penanganan berisiko tinggi untuk melindungi personil dan peralatan fasilitas mitra.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {k3Procedures.map((proc, idx) => (
                <div
                  key={proc.id}
                  className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#0F2942] text-[#00A8CC] flex items-center justify-center font-bold text-xs mb-3">
                      0{idx + 1}
                    </div>
                    <h3 className="font-bold text-[#0F2942] text-sm mb-2">
                      {proc.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Dokumen Serah Terima & Registrasi Vendor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Kiri: Dokumen Serah Terima Pekerjaan */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
            <h2 className="text-xl font-bold text-[#0F2942] mb-4 pb-3 border-b border-[#E2E8F0] flex items-center gap-2">
              <DynamicIcon name="CheckSquare" size={20} className="text-[#0E6BA8]" />
              <span>Berkas Dokumentasi Serah Terima</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mb-4 leading-relaxed">
              Setiap penanganan pekerjaan teknis yang diselesaikan akan disertai berkas kelengkapan transparan:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-[#475569]">
              {handoverDocs.map((docName, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <DynamicIcon name="CheckCircle2" size={16} className="text-[#0E6BA8] shrink-0 mt-0.5" />
                  <span className="font-semibold text-[#0F2942]">{docName}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kanan: Registrasi Vendor & Unduh Company Profile PDF */}
          <div className="lg:col-span-6 space-y-6">
            {/* Box Registrasi Vendor */}
            <div className="bg-[#0F2942] text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <h2 className="text-xl font-bold text-white mb-3">
                Kesiapan Registrasi Vendor (Vendor Onboarding)
              </h2>
              <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed mb-6">
                {vendorRegistrationStatement}
              </p>
              <div className="pt-4 border-t border-[#15426B] flex items-center justify-between text-xs text-[#00A8CC] font-semibold">
                <span>Siap memenuhi syarat kualifikasi teknis gedung</span>
                <DynamicIcon name="Check" size={16} />
              </div>
            </div>

            {/* Box Download PDF Company Profile */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <h3 className="font-bold text-[#0F2942] text-base mb-2">
                {companyProfileDoc.title}
              </h3>
              <p className="text-xs text-[#475569] mb-4 leading-relaxed">
                {companyProfileDoc.note}
              </p>

              {companyProfileDoc.available ? (
                <Button href={`/documents/${companyProfileDoc.fileName}`} external variant="primary" fullWidth>
                  <DynamicIcon name="Download" size={18} />
                  <span>Unduh Company Profile PDF</span>
                </Button>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-400 font-semibold text-xs flex items-center justify-center gap-2 cursor-not-allowed border border-gray-200"
                >
                  <DynamicIcon name="Lock" size={16} />
                  <span>Dokumen PDF Menyusul (Versi Cetak Baru)</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* CTA Permintaan Berkas Vendor */}
        <div className="bg-gradient-to-r from-[#0F2942] via-[#15426B] to-[#0E6BA8] text-white rounded-3xl p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">
            Membutuhkan Berkas Salinan Legalitas untuk Vendor Registration?
          </h2>
          <p className="text-xs sm:text-sm text-[#E2E8F0] max-w-xl mx-auto mb-6 leading-relaxed">
            Hubungi bagian administrasi CBL. Kami akan mengirimkan berkas kelengkapan ber-stempel resmi via email atau WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
                'Halo tim CBL, mohon salinan berkas legalitas perusahaan untuk keperluan registrasi vendor.'
              )}`}
              external
              variant="whatsapp"
              size="md"
            >
              <DynamicIcon name="MessageSquare" size={18} />
              <span>Minta Berkas via WhatsApp</span>
            </Button>
            <Button href={`mailto:${companyInfo.email}`} variant="outline" size="md" className="border-white text-white hover:bg-white/10">
              <DynamicIcon name="Mail" size={18} />
              <span>Minta Berkas via Email</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
