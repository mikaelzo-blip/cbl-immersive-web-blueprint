import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { legalDocuments, legalNotice, k3Procedures, handoverDocs, vendorRegistrationStatement, companyProfileDoc } from '@/data/legal';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Legalitas & Prosedur K3',
  description: 'Informasi badan usaha, pendekatan K3 berbasis proyek, dan proses permintaan dokumen vendor CV Cakrawala Buana Lestari.',
  alternates: { canonical: `${companyInfo.seo.siteUrl}/legalitas` },
};

export default function LegalitasPage() {
  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo tim CBL, mohon salinan berkas legalitas perusahaan untuk keperluan registrasi vendor.'
  )}`;

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#0F2942]">
      <Container className="py-8 md:py-12 lg:py-16">
        <nav className="mb-10 flex items-center gap-2 text-xs text-[#6B7780]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#B34718]">Beranda</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-[#0F2942]">Legalitas & Prosedur Vendor</span>
        </nav>

        <header className="grid gap-10 border-t border-[#0F2942]/25 pb-16 pt-6 lg:grid-cols-12 lg:gap-12 lg:pb-20">
          <div className="lg:col-span-3">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#B34718]">Administrasi perusahaan</p>
            <p className="mt-3 max-w-xs text-xs leading-6 text-[#6B7780]">Ringkasan publik. Salinan dokumen sensitif hanya diberikan sesuai kebutuhan resmi.</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h1 className="max-w-4xl text-[clamp(2.65rem,6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
              Legalitas perusahaan dan kesiapan administrasi proyek.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5F6D78] sm:text-lg">
              Informasi badan usaha, pendekatan keselamatan berbasis risiko, dokumentasi serah terima, dan mekanisme permintaan berkas untuk registrasi vendor.
            </p>
          </div>
        </header>

        <aside className="mb-16 grid gap-4 border-y border-[#0F2942]/20 py-5 sm:grid-cols-[10rem_1fr]" aria-label="Catatan perlindungan data">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#B34718]">Perlindungan data</p>
          <p className="max-w-4xl text-sm leading-7 text-[#5F6D78]">{legalNotice}</p>
        </aside>

        <section className="grid gap-10 py-8 lg:grid-cols-12 lg:gap-12" aria-labelledby="legal-register-title">
          <div className="lg:col-span-4">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">01 / Dokumen badan usaha</p>
            <h2 id="legal-register-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Dokumen badan usaha.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {legalDocuments.map((document, index) => (
              <article key={document.id} className="grid gap-4 border-t border-[#0F2942]/20 py-6 sm:grid-cols-[3rem_1fr]">
                <span className="text-[0.62rem] font-semibold tracking-[0.14em] text-[#B34718]">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780]">{document.category}</p>
                  <h3 className="mt-1 text-lg font-semibold">{document.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5F6D78]">{document.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-[#0F2942]/20 py-16 lg:grid-cols-12 lg:gap-12" aria-labelledby="k3-title">
          <div className="lg:col-span-4">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">02 / Prosedur lapangan</p>
            <h2 id="k3-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">K3 dan keselamatan lapangan.</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#5F6D78]">Prosedur disesuaikan dengan risiko pekerjaan dan ketentuan lokasi. Bagian ini bukan klaim sertifikasi K3.</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {k3Procedures.map((procedure, index) => (
              <article key={procedure.id} className="grid gap-4 border-t border-[#0F2942]/20 py-6 sm:grid-cols-[3rem_1fr]">
                <span className="text-[0.62rem] font-semibold tracking-[0.14em] text-[#B34718]">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-lg font-semibold">{procedure.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5F6D78]">{procedure.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-[#0F2942]/20 py-16 lg:grid-cols-12 lg:gap-12" aria-labelledby="handover-title">
          <div className="lg:col-span-4">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">03 / Serah terima</p>
            <h2 id="handover-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Dokumentasi serah terima.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="mb-5 text-sm leading-7 text-[#5F6D78]">Kelengkapan dokumen mengikuti cakupan pekerjaan dan persyaratan kontrak.</p>
            <ul className="border-t border-[#0F2942]/20">
              {handoverDocs.map((document, index) => (
                <li key={document} className="grid gap-3 border-b border-[#0F2942]/15 py-4 sm:grid-cols-[3rem_1fr]">
                  <span className="text-[0.6rem] font-semibold tracking-[0.14em] text-[#6B7780]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-semibold">{document}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-10 border-t border-[#0F2942]/20 py-16 lg:grid-cols-12 lg:gap-12" aria-labelledby="vendor-title">
          <div className="lg:col-span-4">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">04 / Kesiapan vendor</p>
            <h2 id="vendor-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Registrasi dan profil perusahaan.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-sm leading-7 text-[#5F6D78]">{vendorRegistrationStatement}</p>

            <div className="mt-8 border-y border-[#0F2942]/20 py-5">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780]">{companyProfileDoc.title}</p>
              <p className="mt-2 text-sm leading-7 text-[#5F6D78]">{companyProfileDoc.note}</p>
              {companyProfileDoc.available ? (
                <a href={`/documents/${companyProfileDoc.fileName}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex border-b border-[#B34718] pb-1 text-sm font-semibold text-[#B34718]">
                  Unduh profil perusahaan ↗
                </a>
              ) : (
                <p className="mt-4 text-xs font-semibold text-[#6B7780]">Versi publik sedang disiapkan.</p>
              )}
            </div>
          </div>
        </section>

        <section className="mt-6 bg-[#0F2942] px-6 py-12 text-white sm:px-10 md:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#F0A16F]">Permintaan dokumen</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl">Membutuhkan berkas untuk registrasi vendor?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D7E1E8]">Konfirmasikan daftar dokumen yang diminta. Salinan disampaikan melalui jalur resmi setelah kebutuhan registrasi diverifikasi.</p>
            </div>
            <div className="flex flex-wrap gap-5 lg:col-span-3 lg:col-start-10 lg:flex-col lg:items-end">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="border-b border-[#F0A16F] pb-1 text-sm font-semibold text-[#F0A16F]">WhatsApp ↗</a>
              <a href={`mailto:${companyInfo.email}`} className="border-b border-white/40 pb-1 text-sm font-semibold text-white">Email →</a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
