import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { companyInfo, serviceDivisions } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { ProjectRail } from '@/components/sections/ProjectRail';
import { ContactQuickSection } from '@/components/sections/ContactQuickSection';
import { buildProjectWhatsappUrl } from '@/lib/whatsapp';
import { serializeJsonLd } from '@/lib/json-ld';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: 'Studi Kasus Tidak Ditemukan' };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `${companyInfo.seo.siteUrl}/proyek/${project.slug}` },
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
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const matchedService = serviceDivisions.find((service) => service.id === project.category);
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug && item.category === project.category)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: `${companyInfo.seo.siteUrl}/proyek/${project.slug}`,
    image: `${companyInfo.seo.siteUrl}${project.images?.cover ?? project.image}`,
    author: { '@id': `${companyInfo.seo.siteUrl}/#organization` },
    publisher: { '@id': `${companyInfo.seo.siteUrl}/#organization` },
    genre: project.categoryLabel,
  };

  const whatsappCtaUrl = buildProjectWhatsappUrl(project.title, `/proyek/${project.slug}`);
  const meta = [project.categoryLabel, project.sector, project.period].filter(Boolean).join(' · ');

  return (
    <div className="bg-[#F4F1EA] text-[#0F2942]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <PageHero label={project.title} parent={{ href: '/proyek', label: 'Portofolio' }} titleLines={[project.title]} lead={project.summary}>
        <p className="text-sm text-[#5F6D78]">{meta}</p>
        {matchedService && (
          <Link
            href={`/layanan/${matchedService.slug}`}
            className="mt-5 inline-flex items-center gap-2 hit-area border-b border-[#B34718] pb-1 text-sm font-semibold text-[#B34718] transition-colors hover:text-[#8F3413]"
          >
            Layanan {matchedService.title} <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        )}
      </PageHero>

      {/* Cover photo full-bleed: tall on phones, a wide band on desktop. */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#D9E1E8] sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image src={project.images?.cover ?? project.image} alt={project.imageAlt} fill priority sizes="100vw" className="object-cover" />
      </div>

      {/* The starting condition as one large statement, then scope and components as plain lists. */}
      <section className="border-b border-[#0F2942]/15 bg-white py-16 md:py-28" aria-labelledby="project-context-title">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
            <h2 id="project-context-title" className="text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] lg:col-span-5">
              Kondisi awal.
            </h2>
            <p className="text-xl font-medium leading-snug tracking-[-0.015em] sm:text-2xl lg:col-span-7">{project.challenge}</p>
          </div>

          <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-[#5F6D78]">Cakupan pekerjaan</h3>
              <ul className="mt-4 border-t border-[#0F2942]/20">
                {project.scope.map((item) => (
                  <li key={item} className="border-b border-[#0F2942]/15 py-3.5 text-base font-semibold">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#5F6D78]">Komponen utama</h3>
              <ul className="mt-4 border-t border-[#0F2942]/20">
                {project.components.map((component) => (
                  <li key={component} className="border-b border-[#0F2942]/15 py-3.5 text-base font-semibold">{component}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Field photos: a swipeable rail on phones, a two-column grid from sm. */}
      {project.gallery.length > 0 && (
        <section className="overflow-hidden border-b border-[#0F2942]/15 py-16 md:py-28" aria-labelledby="project-gallery-title">
          <Container>
            <h2 id="project-gallery-title" className="text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              Dokumentasi lapangan.
            </h2>
            <ul
              data-stagger
              className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scroll-pl-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 md:mt-14 [&::-webkit-scrollbar]:hidden"
            >
              {project.gallery.map((image, index) => (
                <li key={`${image.src}-${index}`} className="w-[80vw] shrink-0 snap-start sm:w-auto">
                  <figure>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#D9E1E8] sm:aspect-[4/3]">
                      <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 50vw, 80vw" className="object-cover" />
                    </div>
                    <figcaption className="mt-3 text-sm leading-6 text-[#5F6D78]">{image.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="border-b border-[#0F2942]/15 py-16 md:py-28" aria-labelledby="project-phases-title">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 id="project-phases-title" className="text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] lg:col-span-5">
            Tahapan pelaksanaan.
          </h2>
          <ol data-stagger className="border-t border-[#0F2942]/20 lg:col-span-7">
            {project.phases.map((phase, index) => (
              <li key={`${phase.title}-${index}`} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-[#0F2942]/20 py-5 sm:grid-cols-[5rem_1fr] sm:py-7">
                <span className="text-3xl font-semibold leading-none tracking-[-0.04em] text-[#B34718] tabular-nums sm:text-4xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] sm:text-2xl">{phase.title}</h3>
                  <p className="mt-2 hidden text-sm leading-7 text-[#5F6D78] sm:block">{phase.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Results on navy, heading right-aligned like the legalitas handover block. */}
      <section className="bg-[#0F2942] py-16 text-white md:py-28" aria-labelledby="project-results-title">
        <Container>
          <h2 id="project-results-title" className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] lg:ml-auto lg:text-right">
            Hasil pekerjaan.
          </h2>
          <ul data-stagger className="mt-10 border-t border-white/20 md:mt-16">
            {project.results.map((result, index) => (
              <li key={`${result}-${index}`} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-b border-white/20 py-5 sm:grid-cols-[5rem_1fr] sm:py-6">
                <span className="text-sm font-semibold tabular-nums text-[#F0A16F]">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-[clamp(1.1rem,2.2vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em]">{result}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="overflow-hidden border-b border-[#0F2942]/15 bg-white py-16 md:py-28" aria-labelledby="related-projects-title">
          <Container>
            <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
              <h2 id="related-projects-title" className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                Proyek serupa.
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

      <ContactQuickSection whatsappHref={whatsappCtaUrl} />
    </div>
  );
}
