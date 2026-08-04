import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi perlindungan data pengguna CV Cakrawala Buana Lestari (CBL). Data form hanya diteruskan ke WhatsApp/Email tanpa disimpan di server.',
  alternates: {
    canonical: `${companyInfo.seo.siteUrl}/kebijakan-privasi`,
  },
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="py-10 md:py-20 bg-[#F8FAFC] min-h-screen">
      <Container className="max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0E6BA8] transition-colors">
            Beranda
          </Link>
          <DynamicIcon name="ChevronRight" size={14} className="text-[#475569]/50" />
          <span className="text-[#0F2942] font-semibold">
            Kebijakan Privasi
          </span>
        </nav>

        <SectionHeading
          badge="Perlindungan Data"
          title="Kebijakan Privasi Pengguna"
          description="Komitmen CV Cakrawala Buana Lestari (CBL) dalam menjaga kerahasiaan dan privasi data komunikasi teknis Anda."
          align="left"
          as="h1"
        />

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8 text-sm text-[#475569] leading-relaxed">
          {/* Section 1: Pengumpulan Data */}
          <div>
            <h2 className="text-lg font-bold text-[#0F2942] mb-3 flex items-center gap-2">
              <DynamicIcon name="ShieldCheck" size={20} className="text-[#0E6BA8]" />
              <span>1. Pengumpulan Data Informasi Teknis</span>
            </h2>
            <p className="mb-2">
              Saat Anda mengisi formulir konsultasi di situs web kami, data yang dikumpulkan meliputi:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 font-medium text-[#0F2942]">
              <li>Nama Lengkap</li>
              <li>Nama Perusahaan / Fasilitas Operasional</li>
              <li>Jabatan / Divisi (Opsional)</li>
              <li>Nomor WhatsApp &amp; Alamat Email</li>
              <li>Lokasi Pekerjaan / Kota</li>
              <li>Rincian Pesan &amp; Spesifikasi Kebutuhan Teknis</li>
            </ul>
          </div>

          {/* Section 2: Penggunaan Data & Bebas Penyimpanan Server */}
          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-lg font-bold text-[#0F2942] mb-3 flex items-center gap-2">
              <DynamicIcon name="Database" size={20} className="text-[#0E6BA8]" />
              <span>2. Penggunaan Data &amp; Bebas Penampungan Server</span>
            </h2>
            <p className="mb-3">
              <strong className="text-[#0F2942]">Situs ini tidak menyimpan data Anda pada database server, cookie pelacak, atau localStorage browser.</strong>
            </p>
            <p>
              Seluruh data yang Anda masukkan pada formulir konsultasi disusunkandalam format pesan terstruktur yang langsung diteruskan ke aplikasi **WhatsApp Resmi** atau **Email Resmi** milik tim CV Cakrawala Buana Lestari. Data tersebut hanya digunakan semata-mata untuk merespon pertanyaan teknis dan merencanakan survei peninjauan lokasi kerja.
            </p>
          </div>

          {/* Section 3: Tanpa Pihak Ketiga */}
          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-lg font-bold text-[#0F2942] mb-3 flex items-center gap-2">
              <DynamicIcon name="Lock" size={20} className="text-[#0E6BA8]" />
              <span>3. Pembatasan Berbagi ke Pihak Ketiga</span>
            </h2>
            <p>
              Kami menjamin tidak akan pernah menjual, menyewakan, atau membagikan data kontak dan identitas perusahaan Anda kepada pihak ketiga mana pun tanpa persetujuan tertulis resmi dari Anda.
            </p>
          </div>

          {/* Section 4: Hak Pengapusan Data */}
          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-lg font-bold text-[#0F2942] mb-3 flex items-center gap-2">
              <DynamicIcon name="Mail" size={20} className="text-[#0E6BA8]" />
              <span>4. Pertanyaan &amp; Permintaan Penghapusan Data</span>
            </h2>
            <p className="mb-3">
              Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau ingin meminta penghapusan riwayat korespondensi yang dikirimkan via WhatsApp / Email, silakan hubungi kami di:
            </p>
            <div className="p-4 rounded-2xl bg-[#F0F7FD] border border-[#0E6BA8]/20 text-xs font-semibold text-[#0F2942] space-y-1">
              <p>Email: <a href={`mailto:${companyInfo.email}`} className="text-[#0E6BA8] underline">{companyInfo.email}</a></p>
              <p>Telepon: <a href={`tel:${companyInfo.phoneRaw}`} className="text-[#0E6BA8] underline">{companyInfo.phone}</a></p>
              <p>Alamat: {companyInfo.address}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
