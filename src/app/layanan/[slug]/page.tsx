import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceDivisions, companyInfo, workProcessSteps } from '@/data/company';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceDivisions.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDivisions.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Divisi Layanan Tidak Ditemukan',
    };
  }

  return {
    title: `${service.title} | ${companyInfo.shortName}`,
    description: service.longDescription,
    alternates: {
      canonical: `${companyInfo.seo.siteUrl}/layanan/${service.slug}`,
    },
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
  const service = serviceDivisions.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Filter studi kasus terkait dari projects.ts berdasarkan kategori divisi ini
  const relatedProjects = projects.filter((p) => p.category === service.id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.longDescription,
    provider: {
      '@type': 'Organization',
      name: companyInfo.legalName,
      url: companyInfo.seo.siteUrl,
      telephone: companyInfo.phoneRaw,
      email: companyInfo.email,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Jabodetabek & Indonesia',
    },
  };

  const whatsappMessage = `Halo CBL, saya mau konsultasi spesifik layanan: *${service.title}*. Mohon informasi ketersediaan peninjauan teknis lokasi.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-8 md:py-16 bg-[#F8FAFC] min-h-screen">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0E6BA8] transition-colors">
              Beranda
            </Link>
            <DynamicIcon name="ChevronRight" size={14} className="text-[#475569]/50" />
            <Link href="/#layanan" className="hover:text-[#0E6BA8] transition-colors">
              Layanan
            </Link>
            <DynamicIcon name="ChevronRight" size={14} className="text-[#475569]/50" />
            <span className="text-[#0F2942] font-semibold truncate max-w-xs sm:max-w-md">
              {service.title}
            </span>
          </nav>

          {/* Section 1: Hero Divisi Layanan */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm mb-12 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center font-bold shadow-xs">
                <DynamicIcon name={service.iconName} size={32} />
              </div>
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#F0F7FD] text-[#0E6BA8] border border-[#0E6BA8]/20">
                Divisi Spesialisasi Teknik
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2942] tracking-tight mb-4 leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl mb-8">
              {service.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                external
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              >
                <DynamicIcon name="MessageSquare" size={20} />
                <span>Konsultasi Divisi {service.title}</span>
              </Button>

              <Button
                href="/#kontak"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <DynamicIcon name="FileText" size={20} />
                <span>Isi Form Konsultasi</span>
              </Button>
            </div>

            {/* Accent Line Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 accent-line-gradient" />
          </div>

          {/* Section 2: Rincian Lingkup Pekerjaan */}
          <div className="mb-12">
            <SectionHeading
              badge="Cakupan Kapabilitas Teknis"
              title="Lingkup Penanganan &amp; Pekerjaan"
              description="Uraian rinci spesialisasi pekerjaan yang ditangani oleh tim teknisi divisi ini."
              align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.capabilityDetails.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm card-hover-lift flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#0F2942] text-[#00A8CC] flex items-center justify-center font-bold text-sm mb-3">
                      0{idx + 1}
                    </div>
                    <h3 className="font-bold text-[#0F2942] text-base mb-2">
                      {cap.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Kondisi Gejala Lapangan Yang Biasa Ditangani */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <DynamicIcon name="AlertTriangle" size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0F2942] tracking-tight">
                  Kondisi &amp; Gejala Lapangan yang Biasa Kami Tangani
                </h2>
                <p className="text-xs text-[#475569] mt-0.5">
                  Tanda-tanda kendala teknis umum pada fasilitas yang memerlukan evaluasi dan penanganan segera.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.commonConditions.map((condition, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3 text-xs sm:text-sm text-[#475569]"
                >
                  <DynamicIcon name="CheckCircle2" size={18} className="text-[#0E6BA8] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{condition}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Tahapan Alur Kerja Divisi */}
          <div className="mb-12">
            <SectionHeading
              badge="Standar Operasional"
              title="Alur Metodologi Penanganan"
              description="Empat tahap pengerjaan teratur untuk memastikan keamanan isolasi daya dan keandalan uji coba."
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workProcessSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#0E6BA8] uppercase tracking-wider block mb-2">
                      Tahap 0{step.stepNumber}
                    </span>
                    <h3 className="font-bold text-[#0F2942] text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Studi Kasus Terkait (Tautan Silang Dua Arah) */}
          {relatedProjects.length > 0 && (
            <div className="mb-12 pt-8 border-t border-[#E2E8F0]">
              <SectionHeading
                badge="Rekam Jejak Lapangan"
                title={`Studi Kasus Penanganan ${service.title}`}
                description="Dokumentasi teknis pengerjaan riil yang pernah diselesaikan oleh tim CBL pada kategori ini."
                align="left"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((proj) => (
                  <ProjectCard key={proj.slug} project={proj} />
                ))}
              </div>
            </div>
          )}

          {/* Section 6: Closing CTA Penutup */}
          <div className="bg-[#0F2942] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              Butuh Penanganan Teknis untuk {service.title}?
            </h2>
            <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto mb-8 leading-relaxed">
              Tim engineering CBL siap membantu pemeriksaan awal lokasi kerja dan perancangan penanganan teknis fasilitas Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                external
                variant="whatsapp"
                size="lg"
              >
                <DynamicIcon name="MessageSquare" size={20} />
                <span>Hubungi via WhatsApp</span>
              </Button>
              <Button
                href="/#kontak"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <span>Isi Form Konsultasi Lapangan</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
