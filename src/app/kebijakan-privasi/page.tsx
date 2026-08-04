import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi CV Cakrawala Buana Lestari mengenai penggunaan informasi yang dikirimkan melalui formulir konsultasi.',
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
          title="Kebijakan privasi"
          description="Penjelasan mengenai informasi yang dikumpulkan melalui formulir konsultasi dan cara CBL menggunakannya untuk komunikasi proyek."
          align="left"
          as="h1"
        />

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8 text-sm text-[#475569] leading-relaxed">
          {/* Section 1: Pengumpulan Data */}
          <div>
            <h2 className="text-lg font-bold text-[#0F2942] mb-3 flex items-center gap-2">
              <DynamicIcon name="ShieldCheck" size={20} className="text-[#0E6BA8]" />
              <span>1. Informasi yang dikumpulkan</span>
            </h2>
            <p className="mb-2">
              Saat Anda mengisi formulir konsultasi di situs web kami, data yang dikumpulkan meliputi:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 font-medium text-[#0F2942]">
              <li>Nama lengkap</li>
              <li>Nama perusahaan atau fasilitas</li>
              <li>Jabatan atau divisi (opsional)</li>
              <li>Nomor WhatsApp dan alamat email</li>
              <li>Lokasi pekerjaan atau kota</li>
              <li>Kondisi dan kebutuhan teknis yang disampaikan</li>
            </ul>
          </div>

          {/* Section 2: Penggunaan Data & Bebas Penyimpanan Server */}
          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-lg font-bold text-[#0F2942] mb-3 flex items-center gap-2">
              <DynamicIcon name="Database" size={20} className="text-[#0E6BA8]" />
              <span>2. Penggunaan dan penyimpanan informasi</span>
            </h2>
            <p className="mb-3">
              <strong className="text-[#0F2942]">Formulir ini tidak mengirimkan informasi ke basis data aplikasi CBL.</strong>
            </p>
            <p>
              Informasi yang Anda masukkan disusun menjadi pesan terstruktur, lalu diteruskan melalui WhatsApp atau aplikasi email yang Anda pilih. Informasi tersebut digunakan untuk menanggapi pertanyaan, memahami kebutuhan teknis, dan merencanakan tindak lanjut yang relevan.
            </p>
          </div>

          {/* Section 3: Tanpa Pihak Ketiga */}
          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-lg font-bold text-[#0F2942] mb-3 flex items-center gap-2">
              <DynamicIcon name="Lock" size={20} className="text-[#0E6BA8]" />
              <span>3. Pembatasan penggunaan oleh pihak lain</span>
            </h2>
            <p>
              CBL tidak menggunakan informasi yang dikirimkan untuk diperjualbelikan. Apabila pelaksanaan proyek memerlukan keterlibatan tenaga profesional atau mitra spesialis, kebutuhan penyampaian informasi akan dibahas terlebih dahulu sesuai konteks pekerjaan.
            </p>
          </div>

          {/* Section 4: Hak Pengapusan Data */}
          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-lg font-bold text-[#0F2942] mb-3 flex items-center gap-2">
              <DynamicIcon name="Mail" size={20} className="text-[#0E6BA8]" />
              <span>4. Pertanyaan dan permintaan terkait informasi</span>
            </h2>
            <p className="mb-3">
              Jika Anda memiliki pertanyaan mengenai kebijakan ini atau ingin membahas riwayat korespondensi yang telah dikirimkan melalui WhatsApp atau email, silakan hubungi kami melalui:
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
