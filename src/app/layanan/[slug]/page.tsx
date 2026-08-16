import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceDivisions, companyInfo, workProcessSteps } from '@/data/company';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { serializeJsonLd } from '@/lib/json-ld';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceDivisions.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDivisions.find((item) => item.slug === slug);

  if (!service) return { title: 'Divisi Layanan Tidak Ditemukan' };

  return {
    title: service.title,
    description: service.longDescription,
    alternates: { canonical: `${companyInfo.seo.siteUrl}/layanan/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${companyInfo.legalName}`,
      description: service.longDescription,
      type: 'article',
      url: `${companyInfo.seo.siteUrl}/layanan/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceDivisions.find((item) => item.slug === slug);

  if (!service) notFound();

  const relatedProjects = projects.filter((project) => project.category === service.id).slice(0, 3);
  const whatsappMessage = `Halo CBL, saya ingin berkonsultasi mengenai layanan *${service.title}*. Mohon informasi mengenai proses peninjauan awal di lokasi.`;
  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.longDescription,
    provider: { '@id': `${companyInfo.seo.siteUrl}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <main className="min-h-screen bg-[#F4F1EA] text-[#0F2942]">
        <Container className="py-8 md:py-12 lg:py-16">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs text-[#6B7780]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#B34718]">Beranda</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#layanan" className="hover:text-[#B34718]">Layanan</Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-[#0F2942]">{service.title}</span>
          </nav>

          <header className="grid gap-10 border-t border-[#0F2942]/25 pb-16 pt-6 lg:grid-cols-12 lg:gap-12 lg:pb-20">
            <div className="lg:col-span-3">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#B34718]">Service discipline</p>
              <p className="mt-3 text-xs leading-6 text-[#6B7780]">Cakupan ditentukan kembali setelah pemeriksaan kondisi dan kebutuhan proyek.</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <h1 className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#5F6D78] sm:text-lg">{service.longDescription}</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="border-b border-[#B34718] pb-1 text-[#B34718]">
                  Konsultasikan layanan ini ↗
                </a>
                <Link href="/#kontak" className="border-b border-[#0F2942]/40 pb-1">Isi formulir konsultasi →</Link>
              </div>
            </div>
          </header>

          <section className="grid gap-10 border-t border-[#0F2942]/20 py-16 lg:grid-cols-12 lg:gap-12" aria-labelledby="scope-title">
            <div className="lg:col-span-4">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">Scope register</p>
              <h2 id="scope-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Cakupan layanan dan pekerjaan.</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#5F6D78]">Rincian berikut adalah representasi pengalaman yang tersedia dan tetap disesuaikan dengan kondisi aktual di lapangan.</p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {service.capabilityDetails.map((capability, index) => (
                <article key={capability.label} className="grid gap-4 border-t border-[#0F2942]/20 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-[#B34718]">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F2942]">{capability.label}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#5F6D78]">{capability.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-10 border-t border-[#0F2942]/20 py-16 lg:grid-cols-12 lg:gap-12" aria-labelledby="survey-title">
            <div className="lg:col-span-4">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">Survey input</p>
              <h2 id="survey-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Informasi yang perlu diklarifikasi.</h2>
            </div>
            <ul className="lg:col-span-7 lg:col-start-6">
              {service.commonConditions.map((condition, index) => (
                <li key={condition} className="grid gap-3 border-t border-[#0F2942]/20 py-5 sm:grid-cols-[3rem_1fr]">
                  <span className="text-[0.62rem] font-semibold tracking-[0.14em] text-[#6B7780]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm leading-7 text-[#0F2942]">{condition}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-[#0F2942]/20 py-16" aria-labelledby="process-title">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">Work sequence</p>
                <h2 id="process-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Alur penanganan proyek.</h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                {workProcessSteps.map((step) => (
                  <article key={step.stepNumber} className="grid gap-4 border-t border-[#0F2942]/20 py-6 sm:grid-cols-[3rem_1fr]">
                    <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-[#B34718]">{String(step.stepNumber).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#5F6D78]">{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {relatedProjects.length > 0 && (
            <section className="border-t border-[#0F2942]/20 py-16" aria-labelledby="related-projects-title">
              <div className="mb-10 grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">Field evidence</p>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                  <h2 id="related-projects-title" className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Studi kasus {service.title}.</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
              </div>
            </section>
          )}

          <section className="mt-6 bg-[#0F2942] px-6 py-12 text-white sm:px-10 md:py-16">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#F0A16F]">Next step</p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl">Bahas kondisi awal untuk {service.title}.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D7E1E8]">Kirim informasi yang tersedia agar kebutuhan, batas pekerjaan, dan langkah pemeriksaan awal dapat dibahas lebih terarah.</p>
              </div>
              <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex border-b border-[#F0A16F] pb-1 text-sm font-semibold text-[#F0A16F]">Hubungi CBL ↗</a>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
