'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects, projectCategories } from '@/data/projects';
import { portfolioConfidentialityNotice } from '@/data/company';
import { ProjectCategory } from '@/types/project';
import { cn } from '@/lib/utils';

export default function PortfolioIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectCategory>('all');

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const activeLabel = projectCategories.find((category) => category.id === selectedCategory)?.label ?? 'Semua';
  const [featuredProject, ...archiveProjects] = filteredProjects;

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#0F2942]">
      <section className="border-b border-[#0F2942]/15 bg-[#0F2942] py-14 text-white sm:py-16 md:py-24">
        <Container>
          <div className="grid gap-8 border-t border-white/25 pt-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#F0A16F]">Arsip proyek</p>
              <p className="mt-3 text-sm leading-6 text-[#B8C8D4]">{projects.length} studi kasus dipublikasikan</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <SectionHeading
                badge="Portofolio pekerjaan"
                title="Rekam pekerjaan teknis yang dapat ditelusuri dari dokumentasi proyek."
                description="Jelajahi pekerjaan pengadaan, pemasangan, penggantian, dan perbaikan berdasarkan arsip internal CBL. Informasi sensitif tidak ditampilkan pada versi publik."
                as="h1"
                align="left"
                light
                className="mb-0"
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-9 sm:py-10 md:py-14 lg:py-16">
        <div className="border-y border-[#0F2942]/20" role="tablist" aria-label="Filter kategori portofolio">
          <div className="flex overflow-x-auto overscroll-x-contain">
            {projectCategories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category.id as 'all' | ProjectCategory)}
                  className={`relative min-h-12 shrink-0 px-3 py-4 text-[0.78rem] font-semibold transition-colors sm:px-5 sm:text-sm ${
                    isSelected ? 'text-[#0F2942]' : 'text-[#6B7780] hover:text-[#0F2942]'
                  }`}
                >
                  {category.label}
                  {isSelected && <span className="absolute inset-x-3 bottom-0 h-px bg-[#B34718] sm:inset-x-5" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-9 mt-5 flex flex-wrap items-center justify-between gap-4 text-sm text-[#5F6D78]" aria-live="polite">
          <p>
            <span className="font-semibold text-[#0F2942]">{filteredProjects.length}</span> studi kasus · {activeLabel}
          </p>
          {selectedCategory !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="font-semibold text-[#B34718] underline underline-offset-4"
            >
              Tampilkan semua
            </button>
          )}
        </div>

        {featuredProject ? (
          <>
            <article className="border-t border-[#0F2942]/25 pt-6 sm:pt-7">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#B34718]">01 / Sorotan arsip</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#657482]">
                    {featuredProject.categoryLabel} · {featuredProject.sector}
                  </p>
                </div>
                <Link
                  href={`/proyek/${featuredProject.slug}`}
                  className="hidden border-b border-[#0F2942]/40 pb-1 text-sm font-semibold transition-colors hover:border-[#B34718] hover:text-[#B34718] sm:inline-flex"
                >
                  Buka studi kasus →
                </Link>
              </div>

              <div className="grid gap-7 lg:grid-cols-12 lg:gap-10">
                <Link
                  href={`/proyek/${featuredProject.slug}`}
                  className="group relative block aspect-[16/10] overflow-hidden bg-[#D8D6D0] lg:col-span-8"
                  aria-label={`Buka studi kasus ${featuredProject.title}`}
                >
                  <Image
                    src={featuredProject.archivePresentation?.image ?? featuredProject.images?.cover ?? featuredProject.image}
                    alt={featuredProject.imageAlt}
                    fill
                    priority
                    quality={72}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className={cn(
                      'transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]',
                      featuredProject.archivePresentation?.aspect === 'portrait' ? 'object-contain' : 'object-cover',
                    )}
                    style={{ objectPosition: featuredProject.archivePresentation?.objectPosition ?? 'center' }}
                  />
                </Link>

                <div className="flex flex-col lg:col-span-4 lg:py-2">
                  <h2 className="max-w-xl text-3xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[2.8rem]">
                    <Link href={`/proyek/${featuredProject.slug}`} className="transition-colors hover:text-[#B34718]">
                      {featuredProject.title}
                    </Link>
                  </h2>
                  <p className="mt-5 text-[0.95rem] leading-7 text-[#5F6D78] sm:text-base">{featuredProject.summary}</p>
                  <div className="mt-7 border-t border-[#0F2942]/15 pt-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#657482]">Cakupan utama</p>
                    <p className="mt-2 text-sm leading-6 text-[#0F2942]">{featuredProject.scope.slice(0, 3).join(' · ')}</p>
                  </div>
                  <Link
                    href={`/proyek/${featuredProject.slug}`}
                    className="mt-7 inline-flex w-fit border-b border-[#B34718] pb-1 text-sm font-semibold text-[#B34718] sm:hidden"
                  >
                    Buka studi kasus →
                  </Link>
                </div>
              </div>
            </article>

            <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-20 md:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
              {archiveProjects.map((project, index) => {
                const projectNumber = String(index + 2).padStart(2, '0');
                const isWide = index % 5 === 2;

                if (isWide) {
                  return (
                    <article key={project.slug} className="border-t border-[#0F2942]/25 pt-5 md:col-span-2">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#B34718]">{projectNumber}</p>
                        <p className="text-xs uppercase tracking-[0.12em] text-[#657482]">{project.categoryLabel}</p>
                      </div>
                      <div className="grid gap-7 md:grid-cols-12 md:gap-9">
                        <Link
                          href={`/proyek/${project.slug}`}
                          className="group relative block aspect-[16/9] overflow-hidden bg-[#D8D6D0] md:col-span-7"
                          aria-label={`Buka studi kasus ${project.title}`}
                        >
                          <Image
                            src={project.archivePresentation?.image ?? project.images?.cover ?? project.image}
                            alt={project.imageAlt}
                            fill
                            quality={68}
                            sizes="(max-width: 768px) 100vw, 58vw"
                            className={cn(
                              'transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]',
                              project.archivePresentation?.aspect === 'portrait' ? 'object-contain' : 'object-cover',
                            )}
                            style={{ objectPosition: project.archivePresentation?.objectPosition ?? 'center' }}
                          />
                        </Link>
                        <div className="md:col-span-4 md:col-start-9 md:self-center">
                          <p className="text-xs uppercase tracking-[0.12em] text-[#657482]">{project.sector}</p>
                          <h2 className="mt-3 text-2xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-3xl">
                            <Link href={`/proyek/${project.slug}`} className="transition-colors hover:text-[#B34718]">
                              {project.title}
                            </Link>
                          </h2>
                          <p className="mt-4 text-[0.95rem] leading-7 text-[#5F6D78]">{project.summary}</p>
                          <Link
                            href={`/proyek/${project.slug}`}
                            className="mt-5 inline-flex border-b border-[#0F2942]/40 pb-1 text-sm font-semibold transition-colors hover:border-[#B34718] hover:text-[#B34718]"
                          >
                            Lihat studi kasus →
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                }

                return (
                  <article key={project.slug} className="border-t border-[#0F2942]/25 pt-5">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#B34718]">{projectNumber}</p>
                      <p className="text-xs uppercase tracking-[0.12em] text-[#657482]">{project.categoryLabel}</p>
                    </div>
                    <Link
                      href={`/proyek/${project.slug}`}
                      className={cn(
                        'group relative block overflow-hidden bg-[#D8D6D0]',
                        project.archivePresentation?.aspect === 'portrait'
                          ? 'aspect-[4/3]'
                          : 'aspect-[16/10]',
                      )}
                      aria-label={`Buka studi kasus ${project.title}`}
                    >
                      <Image
                        src={project.archivePresentation?.image ?? project.images?.cover ?? project.image}
                        alt={project.imageAlt}
                        fill
                        quality={68}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={cn(
                          'transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]',
                          project.archivePresentation?.aspect === 'portrait' ? 'object-contain' : 'object-cover',
                        )}
                        style={{ objectPosition: project.archivePresentation?.objectPosition ?? 'center' }}
                      />
                    </Link>
                    <p className="mt-5 text-xs uppercase tracking-[0.12em] text-[#657482]">{project.sector}</p>
                    <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-3xl">
                      <Link href={`/proyek/${project.slug}`} className="transition-colors hover:text-[#B34718]">
                        {project.title}
                      </Link>
                    </h2>
                    <Link
                      href={`/proyek/${project.slug}`}
                      className="mt-5 inline-flex border-b border-[#0F2942]/40 pb-1 text-sm font-semibold transition-colors hover:border-[#B34718] hover:text-[#B34718]"
                    >
                      Lihat studi kasus →
                    </Link>
                  </article>
                );
              })}
            </div>
          </>
        ) : (
          <div className="border-t border-[#0F2942]/20 py-16">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Belum ada studi kasus pada kategori ini.</h2>
            <p className="mt-3 text-sm leading-7 text-[#5F6D78]">Pilih kategori lain atau tampilkan seluruh arsip proyek.</p>
          </div>
        )}

        <p className="mt-16 max-w-4xl border-t border-[#0F2942]/20 pt-5 text-sm leading-7 text-[#5F6D78]">
          <strong className="font-semibold text-[#0F2942]">Catatan kerahasiaan — </strong>
          {portfolioConfidentialityNotice}
        </p>
      </Container>
    </main>
  );
}
