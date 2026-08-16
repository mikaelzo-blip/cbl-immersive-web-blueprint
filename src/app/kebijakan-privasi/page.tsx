import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi CV Cakrawala Buana Lestari mengenai penggunaan informasi yang dikirimkan melalui formulir konsultasi.',
  alternates: { canonical: `${companyInfo.seo.siteUrl}/kebijakan-privasi` },
};

export default function KebijakanPrivasiPage() {
  const sections = [
    {
      title: 'Informasi yang dikumpulkan',
      body: (
        <>
          <p>Saat formulir konsultasi digunakan, informasi yang dapat dimasukkan meliputi:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#0F2942]">
            <li>Nama lengkap</li>
            <li>Nama perusahaan atau fasilitas</li>
            <li>Jabatan atau divisi, bila diisi</li>
            <li>Nomor WhatsApp dan alamat email</li>
            <li>Lokasi pekerjaan atau kota</li>
            <li>Kondisi dan kebutuhan teknis yang disampaikan</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Penggunaan dan penyimpanan informasi',
      body: (
        <>
          <p><strong className="font-semibold text-[#0F2942]">Formulir situs tidak mengirimkan informasi ke basis data aplikasi CBL.</strong></p>
          <p className="mt-3">Informasi yang diisi disusun menjadi pesan terstruktur lalu diteruskan melalui WhatsApp atau aplikasi email yang dipilih pengguna. Informasi digunakan untuk menanggapi pertanyaan, memahami kebutuhan teknis, dan merencanakan tindak lanjut yang relevan.</p>
        </>
      ),
    },
    {
      title: 'Pembatasan penggunaan oleh pihak lain',
      body: (
        <p>CBL tidak menggunakan informasi yang dikirimkan untuk diperjualbelikan. Jika pekerjaan memerlukan tenaga profesional atau mitra spesialis, kebutuhan penyampaian informasi dibahas sesuai konteks pekerjaan.</p>
      ),
    },
    {
      title: 'Pertanyaan dan permintaan terkait informasi',
      body: (
        <p>Untuk pertanyaan mengenai kebijakan ini atau riwayat korespondensi yang telah dikirim melalui WhatsApp atau email, hubungi CBL melalui informasi kontak resmi di bawah.</p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#0F2942]">
      <Container className="max-w-5xl py-8 md:py-12 lg:py-16">
        <nav className="mb-10 flex items-center gap-2 text-xs text-[#6B7780]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#B34718]">Beranda</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-[#0F2942]">Kebijakan Privasi</span>
        </nav>

        <header className="grid gap-8 border-t border-[#0F2942]/25 pb-14 pt-6 md:pb-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">Privacy notice</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.05em]">Kebijakan privasi.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F6D78]">Penjelasan mengenai informasi yang digunakan saat calon klien menghubungi CBL melalui formulir konsultasi, WhatsApp, atau email.</p>
          </div>
        </header>

        <div className="border-t border-[#0F2942]/20">
          {sections.map((section, index) => (
            <section key={section.title} className="grid gap-6 border-b border-[#0F2942]/15 py-8 md:grid-cols-[4rem_1fr] md:gap-8">
              <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-[#B34718]">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.025em] sm:text-2xl">{section.title}</h2>
                <div className="mt-4 max-w-3xl text-sm leading-7 text-[#5F6D78]">{section.body}</div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 grid gap-5 border-t border-[#0F2942]/20 pt-6 sm:grid-cols-[10rem_1fr]">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780]">Kontak resmi</p>
          <address className="space-y-2 text-sm not-italic leading-6">
            <p><a href={`mailto:${companyInfo.email}`} className="font-semibold text-[#B34718] underline underline-offset-4">{companyInfo.email}</a></p>
            <p><a href={`tel:${companyInfo.phoneRaw}`} className="font-semibold">{companyInfo.phone}</a></p>
            <p className="text-[#5F6D78]">{companyInfo.address}</p>
          </address>
        </section>
      </Container>
    </main>
  );
}
