import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { companyInfo, serviceDivisions } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { buildProjectWhatsappUrl } from '@/lib/whatsapp';
import { serializeJsonLd } from '@/lib/json-ld';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Studi Kasus Tidak Ditemukan',
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${companyInfo.seo.siteUrl}/proyek/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${companyInfo.shortName}`,
      description: project.summary,
      type: 'article',
      url: `${companyInfo.seo.siteUrl}/proyek/${project.slug}`,
      images: [{ url: project.images?.cover ?? project.image, alt: project.imageAlt }],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Cari divisi layanan terkait untuk tautan silang dua arah
  const matchedService = serviceDivisions.find((s) => s.id === project.category);

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: `${companyInfo.seo.siteUrl}/proyek/${project.slug}`,
    image: `${companyInfo.seo.siteUrl}${project.images?.cover ?? project.image}`,
    author: {
      '@id': `${companyInfo.seo.siteUrl}/#organization`,
    },
    publisher: {
      '@id': `${companyInfo.seo.siteUrl}/#organization`,
    },
    genre: project.categoryLabel,
  };

  const whatsappCtaUrl = buildProjectWhatsappUrl(project.title);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="py-8 md:py-16 bg-[#F8FAFC] min-h-screen">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0E6BA8] transition-colors">
              Beranda
            </Link>
            <DynamicIcon name="ChevronRight" size={14} className="text-[#475569]/50" />
            <Link href="/proyek" className="hover:text-[#0E6BA8] transition-colors">
              Portofolio
            </Link>
            <DynamicIcon name="ChevronRight" size={14} className="text-[#475569]/50" />
            <span className="text-[#0F2942] font-semibold truncate max-w-xs sm:max-w-md">
              {project.title}
            </span>
          </nav>

          {/* Project hero */}
          <div className="relative min-h-[520px] rounded-[2rem] overflow-hidden border border-[#DCE6EE] shadow-[0_28px_80px_-38px_rgba(15,41,66,0.55)] mb-10 bg-[#E2E8F0] flex items-end">
            <Image
              src={project.images?.cover ?? project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942] via-[#0F2942]/65 to-[#0F2942]/10" />
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                {matchedService ? (
                  <Link href={`/layanan/${matchedService.slug}`}>
                    <Badge variant="primary" className="bg-white text-[#0E6BA8] border-white hover:bg-[#F0F7FD] transition-colors cursor-pointer">
                      {project.categoryLabel} &rarr;
                    </Badge>
                  </Link>
                ) : (
                  <Badge variant="primary">{project.categoryLabel}</Badge>
                )}
                <Badge variant="ghost" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                  {project.sector}
                </Badge>
              </div>
              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.025em] mb-5 leading-[1.08]">
                {project.title}
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-[#E2E8F0] leading-relaxed">
                {project.summary}
              </p>
            </div>
          </div>

          {/* Main Grid: Detail Konten (Kiri) vs Sidebar (Kanan) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Sisi Kiri: Narasi Teknis & Langkah Penanganan */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Kondisi Awal di Lapangan / Tantangan */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-[#0F2942]">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    <DynamicIcon name="Activity" size={20} />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">
                    1. Kebutuhan dan Kondisi Awal
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-[#E2E8F0]">
                  {project.challenge}
                </p>
              </div>

              {/* 2. Lingkup pekerjaan */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-3 mb-6 text-[#0F2942]">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center font-bold">
                    <DynamicIcon name="Layers3" size={20} />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">2. Cakupan Pekerjaan</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.scope.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-sm text-[#475569]">
                      <DynamicIcon name="CheckCircle2" size={17} className="text-[#0E6BA8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Langkah Penanganan Bernomor */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-3 mb-6 text-[#0F2942]">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center font-bold">
                    <DynamicIcon name="Wrench" size={20} />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">
                    3. Tahapan Pelaksanaan
                  </h2>
                </div>

                <div className="space-y-4">
                  {project.phases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-4 hover:border-[#0E6BA8]/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0F2942] text-[#00A8CC] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0F2942] text-base mb-1">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-[#475569] leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Galeri dokumentasi */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm" aria-labelledby="galeri-proyek">
                <div className="mb-6">
                  <h2 id="galeri-proyek" className="text-xl font-bold text-[#0F2942]">4. Galeri Dokumentasi</h2>
                  <p className="text-sm text-[#475569] mt-2">Dokumentasi lapangan dipilih dari arsip proyek tanpa menampilkan identitas klien atau data transaksi yang bersifat sensitif.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((image) => (
                    <figure key={image.src} className="group overflow-hidden rounded-2xl bg-white border border-[#E2E8F0]">
                      <div className="relative aspect-[4/3] bg-[#E2E8F0] overflow-hidden">
                        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                      </div>
                      <figcaption className="p-4 text-sm text-[#475569]">{image.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              {/* 5. Hasil Pekerjaan */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-3 mb-6 text-[#0F2942]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <DynamicIcon name="CheckCircle2" size={20} />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">
                    5. Hasil yang Dapat Diverifikasi
                  </h2>
                </div>

                <ul className="space-y-3">
                  {project.results.map((result, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#475569]"
                    >
                      <DynamicIcon name="CheckCircle2" size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium text-[#0F2942]">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sisi Kanan: Sidebar Lingkup, Komponen & CTA */}
            <div className="lg:col-span-4 space-y-6">
              {/* Tautan Silang ke Divisi Layanan */}
              {matchedService && (
                <div className="bg-[#F0F7FD] rounded-2xl p-5 border border-[#0E6BA8]/20 shadow-2xs">
                  <span className="text-xs font-bold text-[#0E6BA8] uppercase tracking-wider block mb-1">
                    Layanan terkait
                  </span>
                  <h2 className="font-bold text-[#0F2942] text-base mb-2">
                    {matchedService.title}
                  </h2>
                  <p className="text-xs text-[#475569] mb-4 leading-relaxed">
                    {matchedService.description}
                  </p>
                  <Link
                    href={`/layanan/${matchedService.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E6BA8] hover:underline"
                  >
                    <span>Pelajari layanan {matchedService.title}</span>
                    <DynamicIcon name="ArrowRight" size={14} />
                  </Link>
                </div>
              )}

              {/* Komponen utama */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <h3 className="text-base font-bold text-[#0F2942] mb-4 pb-2 border-b border-[#E2E8F0] flex items-center gap-2">
                  <DynamicIcon name="Cpu" size={18} className="text-[#0E6BA8]" />
                  <span>Komponen utama</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#475569]">
                  {project.components.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <DynamicIcon name="Check" size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA WhatsApp Spesifik Studi Kasus */}
              <div className="bg-[#0F2942] text-white rounded-2xl p-6 shadow-md relative overflow-hidden space-y-4">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Menghadapi kebutuhan teknis yang serupa?
                </h3>
                <p className="text-xs text-[#E2E8F0] leading-relaxed">
                  Sampaikan kondisi peralatan dan target pekerjaan Anda. Tim CBL akan membantu menilai kebutuhan awal sebelum peninjauan lapangan.
                </p>
                <Button
                  href={whatsappCtaUrl}
                  external
                  variant="whatsapp"
                  fullWidth
                >
                  <DynamicIcon name="MessageSquare" size={18} />
                  <span>Konsultasi melalui WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Proyek Lain yang Relevan */}
          <div className="pt-12 border-t border-[#E2E8F0]">
            <h2 className="text-2xl font-bold text-[#0F2942] tracking-tight mb-8">
              Studi kasus lain dalam bidang yang sama
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relProject) => (
                <ProjectCard key={relProject.slug} project={relProject} />
              ))}
            </div>
          </div>
</Container>
      </div>
    </>
  );
}
