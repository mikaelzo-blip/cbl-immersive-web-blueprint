import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { companyInfo, serviceDivisions } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/cards/ProjectCard';
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

  const whatsappCtaUrl = buildProjectWhatsappUrl(project.title);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <main className="min-h-screen bg-[#F4F1EA] text-[#0F2942]">
        <Container className="py-8 md:py-12 lg:py-16">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs text-[#6B7780]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#B34718]">Beranda</Link>
            <span aria-hidden="true">/</span>
            <Link href="/proyek" className="hover:text-[#B34718]">Portofolio</Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[55vw] truncate font-semibold text-[#0F2942]">{project.title}</span>
          </nav>

          <header className="grid gap-10 border-t border-[#0F2942]/25 pb-12 pt-6 lg:grid-cols-12 lg:gap-12 lg:pb-16">
            <div className="lg:col-span-3">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.17em] text-[#B34718]">Studi kasus</p>
              <div className="mt-4 space-y-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#6B7780]">
                <p>{project.categoryLabel}</p>
                <p>{project.sector}</p>
                {project.period && <p>{project.period}</p>}
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h1 className="max-w-5xl text-[clamp(2.65rem,6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#5F6D78] sm:text-lg">{project.summary}</p>
              {matchedService && (
                <Link
                  href={`/layanan/${matchedService.slug}`}
                  className="mt-7 inline-flex border-b border-[#B34718] pb-1 text-sm font-semibold text-[#B34718]"
                >
                  Lihat layanan {matchedService.title} →
                </Link>
              )}
            </div>
          </header>

          <figure className="border-y border-[#0F2942]/20 py-5">
            <div className="relative min-h-[420px] overflow-hidden bg-[#D8D6D0] sm:min-h-[560px] lg:min-h-[690px]">
              <Image
                src={project.images?.cover ?? project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="grid gap-2 pt-4 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#6B7780] sm:grid-cols-2">
              <span className="text-[#0F2942]">Dokumentasi proyek CBL</span>
              <span className="sm:text-right">{project.categoryLabel} · {project.sector}</span>
            </figcaption>
          </figure>

          <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
            <div className="lg:col-span-8">
              <section className="grid gap-6 border-t border-[#0F2942]/20 py-8 md:grid-cols-[4rem_1fr]" aria-labelledby="project-context-title">
                <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-[#B34718]">01</span>
                <div>
                  <h2 id="project-context-title" className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Kebutuhan dan kondisi awal.</h2>
                  <p className="mt-4 text-sm leading-7 text-[#5F6D78] sm:text-base sm:leading-8">{project.challenge}</p>
                </div>
              </section>

              <section className="grid gap-6 border-t border-[#0F2942]/20 py-8 md:grid-cols-[4rem_1fr]" aria-labelledby="project-scope-title">
                <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-[#B34718]">02</span>
                <div>
                  <h2 id="project-scope-title" className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Cakupan pekerjaan.</h2>
                  <ul className="mt-5 border-t border-[#0F2942]/15">
                    {project.scope.map((item, index) => (
                      <li key={item} className="grid gap-3 border-b border-[#0F2942]/12 py-4 sm:grid-cols-[2.5rem_1fr]">
                        <span className="text-[0.58rem] font-semibold tracking-[0.12em] text-[#6B7780]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-sm leading-7 text-[#0F2942]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="grid gap-6 border-t border-[#0F2942]/20 py-8 md:grid-cols-[4rem_1fr]" aria-labelledby="project-phases-title">
                <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-[#B34718]">03</span>
                <div>
                  <h2 id="project-phases-title" className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Tahapan pelaksanaan.</h2>
                  <div className="mt-5 border-t border-[#0F2942]/15">
                    {project.phases.map((phase, index) => (
                      <article key={`${phase.title}-${index}`} className="grid gap-3 border-b border-[#0F2942]/12 py-5 sm:grid-cols-[2.5rem_1fr]">
                        <span className="text-[0.58rem] font-semibold tracking-[0.12em] text-[#B34718]">{String(index + 1).padStart(2, '0')}</span>
                        <div>
                          <h3 className="text-base font-semibold text-[#0F2942]">{phase.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-[#5F6D78]">{phase.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section className="border-t border-[#0F2942]/20 py-8" aria-labelledby="project-gallery-title">
                <div className="grid gap-6 md:grid-cols-[4rem_1fr]">
                  <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-[#B34718]">04</span>
                  <div>
                    <h2 id="project-gallery-title" className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Galeri dokumentasi.</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5F6D78]">Dokumentasi lapangan dipilih dari arsip proyek tanpa menampilkan data transaksi yang bersifat sensitif.</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <figure key={`${image.src}-${index}`} className="group">
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#D8D6D0]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]"
                        />
                      </div>
                      <figcaption className="border-b border-[#0F2942]/15 py-3 text-xs leading-6 text-[#5F6D78]">{image.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="grid gap-6 border-t border-[#0F2942]/20 py-8 md:grid-cols-[4rem_1fr]" aria-labelledby="project-results-title">
                <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-[#B34718]">05</span>
                <div>
                  <h2 id="project-results-title" className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Hasil yang dapat diverifikasi.</h2>
                  <ul className="mt-5 border-t border-[#0F2942]/15">
                    {project.results.map((result, index) => (
                      <li key={`${result}-${index}`} className="grid gap-3 border-b border-[#0F2942]/12 py-4 sm:grid-cols-[2.5rem_1fr]">
                        <span className="text-[0.58rem] font-semibold tracking-[0.12em] text-[#6B7780]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-sm font-medium leading-7 text-[#0F2942]">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-3 lg:col-start-10">
              <div className="space-y-8 lg:sticky lg:top-28">
                {matchedService && (
                  <section className="border-t border-[#0F2942]/25 pt-5">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#B34718]">Layanan terkait</p>
                    <h2 className="mt-2 text-lg font-semibold">{matchedService.title}</h2>
                    <p className="mt-3 text-xs leading-6 text-[#5F6D78]">{matchedService.description}</p>
                    <Link href={`/layanan/${matchedService.slug}`} className="mt-4 inline-flex text-xs font-semibold text-[#B34718] underline underline-offset-4">Pelajari layanan →</Link>
                  </section>
                )}

                <section className="border-t border-[#0F2942]/25 pt-5">
                  <h2 className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780]">Komponen utama</h2>
                  <ul className="mt-3 space-y-2 text-xs leading-6 text-[#0F2942]">
                    {project.components.map((component) => <li key={component}>{component}</li>)}
                  </ul>
                </section>

                <section className="border-t border-[#0F2942]/25 pt-5">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780]">Konsultasi proyek</p>
                  <h2 className="mt-2 text-lg font-semibold">Menghadapi kebutuhan teknis yang serupa?</h2>
                  <p className="mt-3 text-xs leading-6 text-[#5F6D78]">Sampaikan kondisi peralatan dan target pekerjaan untuk pembahasan awal sebelum peninjauan lapangan.</p>
                  <a href={whatsappCtaUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex border-b border-[#B34718] pb-1 text-xs font-semibold text-[#B34718]">Diskusikan via WhatsApp ↗</a>
                </section>
              </div>
            </aside>
          </div>

          {relatedProjects.length > 0 && (
            <section className="border-t border-[#0F2942]/20 py-16" aria-labelledby="related-projects-title">
              <div className="mb-10 grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#B34718]">Studi kasus terkait</p>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                  <h2 id="related-projects-title" className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Studi kasus lain dalam bidang yang sama.</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((relatedProject) => (
                  <ProjectCard key={relatedProject.slug} project={relatedProject} />
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>
    </>
  );
}
