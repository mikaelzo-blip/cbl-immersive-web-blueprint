import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { legalDocuments, legalNotice, k3Procedures, handoverDocs, vendorRegistrationStatement, companyProfileDoc } from '@/data/legal';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Legalitas & Prosedur K3',
  description: 'Informasi badan usaha, pendekatan K3 berbasis proyek, dan proses permintaan dokumen vendor CV Cakrawala Buana Lestari.',
  alternates: { canonical: `${companyInfo.seo.siteUrl}/legalitas` },
};

// Short register names, shown large; the homepage vendor strip uses the same three.
const documentCodes: Record<string, string> = {
  'akta-pendirian': 'Akta',
  nib: 'NIB',
  npwp: 'NPWP',
  pkp: 'PKP',
};

export default function LegalitasPage() {
  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo tim CBL, mohon salinan berkas legalitas perusahaan untuk keperluan registrasi vendor.'
  )}`;

  return (
    <div className="bg-[#F4F1EA] text-[#0F2942]">
      <PageHero
        label="Legalitas"
        titleLines={['Legalitas', 'dan prosedur kerja.']}
        lead="Dokumen badan usaha, prosedur K3, dan berkas serah terima untuk registrasi vendor."
      />

      {/* Corporate documents: register names large, details beneath. */}
      <section className="border-b border-[#0F2942]/15 bg-white py-16 md:py-28" aria-labelledby="legal-register-title">
        <Container>
          <h2 id="legal-register-title" className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Dokumen badan usaha.
          </h2>
          <ul data-stagger className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#0F2942]/20 md:mt-16 md:gap-x-10 md:gap-y-10 lg:grid-cols-4 lg:gap-x-0">
            {legalDocuments.map((document) => (
              <li key={document.id} className="pt-6 lg:border-l lg:border-[#0F2942]/20 lg:px-6 lg:first:border-l-0 lg:first:pl-0">
                <span className="block text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.045em]">
                  {documentCodes[document.id] ?? document.category}
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-snug md:mt-5 md:text-lg">{document.title}</h3>
                <p className="mt-2 hidden text-sm leading-7 text-[#5F6D78] md:block">{document.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-[#5F6D78] md:mt-12">{legalNotice}</p>
        </Container>
      </section>

      {/* K3: a field photo holds the left column while the procedures scroll past. */}
      <section className="border-b border-[#0F2942]/15 py-20 md:py-28" aria-labelledby="k3-title">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-last lg:order-none lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#D9E1E8] lg:aspect-[4/5]">
                <Image
                  src="/images/projects/soft-starter-lift-pompa/04.webp"
                  alt="Teknisi CBL bekerja pada panel drive"
                  fill
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 id="k3-title" className="text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              K3 di lapangan.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#5F6D78]">
              Prosedur disesuaikan dengan risiko pekerjaan dan ketentuan lokasi. Bagian ini bukan klaim sertifikasi K3.
            </p>
            <ol data-stagger className="mt-10 border-t border-[#0F2942]/20">
              {k3Procedures.map((procedure, index) => (
                <li key={procedure.id} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-[#0F2942]/20 py-5 sm:py-7 sm:grid-cols-[5rem_1fr]">
                  <span className="text-3xl font-semibold leading-none tracking-[-0.04em] text-[#B34718] tabular-nums sm:text-4xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] sm:text-2xl">{procedure.title}</h3>
                    <p className="mt-2 hidden text-sm leading-7 text-[#5F6D78] sm:block">{procedure.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Handover documents on navy, heading right-aligned to vary the rhythm. */}
      <section className="bg-[#0F2942] py-20 text-white md:py-28" aria-labelledby="handover-title">
        <Container>
          <h2 id="handover-title" className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] lg:ml-auto lg:text-right">
            Berkas serah terima.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#C7D2DB] lg:ml-auto lg:text-right">
            Kelengkapan dokumen mengikuti cakupan pekerjaan dan persyaratan kontrak.
          </p>
          <ul data-stagger className="mt-12 border-t border-white/20 md:mt-16">
            {handoverDocs.map((document, index) => (
              <li key={document} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-b border-white/20 py-6 sm:grid-cols-[5rem_1fr]">
                <span className="text-sm font-semibold tabular-nums text-[#F0A16F]">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-[clamp(1.2rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.02em]">{document}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Closing request block, same photo language as the homepage contact block. */}
      <section className="relative isolate overflow-hidden bg-[#0B1E31] py-24 text-white md:py-36" aria-labelledby="vendor-title">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/stock/gerinda-percikan.webp" alt="" fill data-parallax sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[rgba(8,22,38,0.8)]" />
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 id="vendor-title" className="text-[clamp(2.4rem,5.4vw,5rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
              Butuh berkas untuk registrasi vendor?
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#E8641B] px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-[#C9530F] sm:text-base"
              >
                Minta berkas via WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-white hover:bg-white/10 sm:text-base"
              >
                Kirim email <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
          <div className="text-sm leading-7 text-[#C7D2DB] lg:col-span-4 lg:col-start-9">
            <p>{vendorRegistrationStatement}</p>
            <p className="mt-5 border-t border-white/20 pt-5">
              <span className="font-semibold text-white">{companyProfileDoc.title}</span>
              {' — '}
              {companyProfileDoc.available ? (
                <a href={`/documents/${companyProfileDoc.fileName}`} target="_blank" rel="noopener noreferrer" className="hit-area font-semibold text-[#F0A16F] underline underline-offset-4">
                  unduh
                </a>
              ) : (
                'versi publik sedang disiapkan.'
              )}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
