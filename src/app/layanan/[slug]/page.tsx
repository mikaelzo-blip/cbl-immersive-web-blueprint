import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { serviceDivisions, companyInfo } from '@/data/company';
import { serviceImages } from '@/data/service-images';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/sections/PageHero';
import { ProjectRail } from '@/components/sections/ProjectRail';
import { WorkProcessSection } from '@/components/sections/WorkProcessSection';
import { ContactQuickSection } from '@/components/sections/ContactQuickSection';
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

  const image = serviceImages[service.slug];
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
    <div className="bg-[#F4F1EA] text-[#0F2942]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <PageHero label={service.title} parent={{ href: '/layanan', label: 'Layanan' }} titleLines={[service.title]} lead={service.description}>
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#E8641B] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C9530F] sm:text-base"
          >
            Konsultasikan layanan ini <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          <Link
            href="/kontak"
            className="hidden items-center gap-2 rounded-md border border-[#0F2942]/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[#0F2942] hover:bg-[#0F2942]/5 sm:inline-flex sm:text-base"
          >
            Isi formulir konsultasi <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </PageHero>

      {/* Full-bleed photo right under the title: tall on phones, a wide band on desktop. */}
      {image && (
        <div className="relative aspect-[4/5] overflow-hidden bg-[#D9E1E8] sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
        </div>
      )}

      {/* Capabilities: big numbers and titles, the explanation from sm up. */}
      <section className="border-b border-[#0F2942]/15 bg-white py-16 md:py-28" aria-labelledby="scope-title">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 id="scope-title" className="text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                Cakupan pekerjaan.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#5F6D78] sm:text-base">{service.longDescription}</p>
            </div>
          </div>
          <ol data-stagger className="border-t border-[#0F2942]/20 lg:col-span-7">
            {service.capabilityDetails.map((capability, index) => (
              <li key={capability.label} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-[#0F2942]/20 py-5 sm:grid-cols-[5rem_1fr] sm:py-7">
                <span className="text-3xl font-semibold leading-none tracking-[-0.04em] text-[#B34718] tabular-nums sm:text-4xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] sm:text-2xl">{capability.label}</h3>
                  <p className="mt-2 hidden text-sm leading-7 text-[#5F6D78] sm:block">{capability.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What the survey has to clarify, on navy to break the rhythm. */}
      <section className="bg-[#0F2942] py-16 text-white md:py-28" aria-labelledby="survey-title">
        <Container>
          <h2 id="survey-title" className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] lg:ml-auto lg:text-right">
            Yang kami periksa di lokasi.
          </h2>
          <ul data-stagger className="mt-10 border-t border-white/20 md:mt-16">
            {service.commonConditions.map((condition, index) => (
              <li key={condition} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-b border-white/20 py-5 sm:grid-cols-[5rem_1fr] sm:py-6">
                <span className="text-sm font-semibold tabular-nums text-[#F0A16F]">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-[clamp(1.1rem,2.2vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em]">{condition}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <WorkProcessSection />

      {relatedProjects.length > 0 && (
        <section className="overflow-hidden border-b border-[#0F2942]/15 bg-white py-16 md:py-28" aria-labelledby="related-projects-title">
          <Container>
            <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
              <h2 id="related-projects-title" className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                Proyek di bidang ini.
              </h2>
              <Link
                href="/proyek"
                className="inline-flex items-center gap-2 self-start hit-area border-b border-[#B34718] pb-1 text-sm font-semibold text-[#B34718] transition-colors hover:text-[#8F3413]"
              >
                Semua studi kasus <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <ProjectRail projects={relatedProjects} />
          </Container>
        </section>
      )}

      <ContactQuickSection whatsappHref={whatsappHref} />
    </div>
  );
}
