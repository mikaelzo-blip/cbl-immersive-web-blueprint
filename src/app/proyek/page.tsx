'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/sections/PageHero';
import { projects, projectCategories } from '@/data/projects';
import { portfolioConfidentialityNotice } from '@/data/company';
import { ProjectCategory } from '@/types/project';
import { cn } from '@/lib/utils';

type Project = (typeof projects)[number];

// Photo with the title laid over it; used for the lead project and the periodic wide entries.
function OverlayEntry({ project, className, sizes, priority }: { project: Project; className: string; sizes: string; priority?: boolean }) {
  return (
    <Link href={`/proyek/${project.slug}`} className={cn('group relative block overflow-hidden rounded-md bg-[#D8D6D0] text-white', className)}>
      <Image
        src={project.images?.cover ?? project.image}
        alt={project.imageAlt}
        fill
        priority={priority}
        quality={75}
        sizes={sizes}
        className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,22,38,0.9)_0%,rgba(8,22,38,0.35)_45%,transparent_75%)]" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
        <p className="text-sm text-[#D5DEE6]">{project.categoryLabel} · {project.sector}</p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-5xl">{project.title}</h2>
      </div>
    </Link>
  );
}

export default function PortfolioIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectCategory>('all');

  const filteredProjects = projects.filter((project) => selectedCategory === 'all' || project.category === selectedCategory);
  const activeLabel = projectCategories.find((category) => category.id === selectedCategory)?.label ?? 'Semua';
  const [featuredProject, ...archiveProjects] = filteredProjects;

  return (
    <div className="bg-[#F4F1EA] text-[#0F2942]">
      <PageHero
        label="Portofolio"
        titleLines={['Proyek yang', 'sudah kami kerjakan.']}
        lead={`${projects.length} studi kasus dari arsip pekerjaan CBL 2022–2026.`}
      />

      {/* Filter stays reachable while scrolling the archive. */}
      <div className="sticky top-16 z-30 border-b border-[#0F2942]/15 bg-[#F4F1EA]">
        <Container>
          <div className="flex overflow-x-auto overscroll-x-contain pr-10 [scrollbar-width:none] [mask-image:linear-gradient(to_right,#000_80%,transparent)] md:pr-0 md:[mask-image:none]" role="tablist" aria-label="Filter kategori portofolio">
            {projectCategories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category.id as 'all' | ProjectCategory)}
                  className={cn(
                    'relative min-h-12 shrink-0 px-3 py-4 text-sm font-semibold transition-colors sm:px-5',
                    isSelected ? 'text-[#0F2942]' : 'text-[#6B7780] hover:text-[#0F2942]'
                  )}
                >
                  {category.label}
                  {isSelected && <span className="absolute inset-x-3 bottom-0 h-0.5 bg-[#B34718] sm:inset-x-5" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      <Container className="py-10 md:py-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-sm text-[#5F6D78]" aria-live="polite">
          <p>
            <span className="font-semibold text-[#0F2942]">{filteredProjects.length}</span> studi kasus · {activeLabel}
          </p>
          {selectedCategory !== 'all' && (
            <button type="button" onClick={() => setSelectedCategory('all')} className="font-semibold text-[#B34718] underline underline-offset-4">
              Tampilkan semua
            </button>
          )}
        </div>

        {featuredProject ? (
          <>
            <OverlayEntry
              project={featuredProject}
              priority
              className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
              sizes="(min-width: 1280px) 80rem, 100vw"
            />

            {/* Editorial rhythm: two-column masonry of portrait and landscape entries; every fifth entry runs full width (column-span: all). */}
            <div className="mt-14 gap-8 md:mt-20 md:columns-2 lg:gap-12">
              {archiveProjects.map((project, index) => {
                if (index % 5 === 2) {
                  return (
                    <OverlayEntry
                      key={project.slug}
                      project={project}
                      className="mb-14 aspect-[4/3] [column-span:all] md:aspect-[16/7] lg:mb-20"
                      sizes="(min-width: 1280px) 80rem, 100vw"
                    />
                  );
                }

                return (
                  <Link key={project.slug} href={`/proyek/${project.slug}`} className="group mb-14 block break-inside-avoid lg:mb-20">
                    <div className={cn('relative overflow-hidden rounded-md bg-[#D8D6D0]', index % 2 && index > 1 ? 'aspect-[4/3]' : 'aspect-[4/5]')}>
                      <Image
                        src={project.images?.cover ?? project.image}
                        alt={project.imageAlt}
                        fill
                        quality={70}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <p className="mt-4 text-sm text-[#657482]">{project.categoryLabel}</p>
                    <h2 className="mt-1 max-w-xl text-2xl font-semibold leading-[1.08] tracking-[-0.03em] transition-colors group-hover:text-[#B34718] sm:text-3xl">
                      {project.title}
                    </h2>
                  </Link>
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

        <p className="mt-20 max-w-3xl border-t border-[#0F2942]/20 pt-5 text-xs leading-6 text-[#657482]">{portfolioConfidentialityNotice}</p>
      </Container>
    </div>
  );
}
