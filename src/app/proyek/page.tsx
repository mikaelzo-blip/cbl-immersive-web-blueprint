'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { projects, projectCategories } from '@/data/projects';
import { portfolioConfidentialityNotice } from '@/data/company';
import { ProjectCategory } from '@/types/project';

export default function PortfolioIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectCategory>('all');

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const activeLabel = projectCategories.find((category) => category.id === selectedCategory)?.label ?? 'Semua';

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#0F2942]">
      <section className="border-b border-[#0F2942]/15 bg-[#0F2942] py-16 text-white md:py-24">
        <Container>
          <div className="grid gap-10 border-t border-white/25 pt-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#F0A16F]">Project archive</p>
              <p className="mt-3 text-xs leading-6 text-[#B8C8D4]">{projects.length} studi kasus dipublikasikan</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <SectionHeading
                badge="Portofolio Pekerjaan"
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

      <Container className="py-10 md:py-14 lg:py-16">
        <div className="border-y border-[#0F2942]/20" role="tablist" aria-label="Filter kategori portofolio">
          <div className="flex overflow-x-auto">
            {projectCategories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category.id as 'all' | ProjectCategory)}
                  className={`relative shrink-0 px-4 py-4 text-xs font-semibold transition-colors sm:px-5 sm:text-sm ${
                    isSelected ? 'text-[#0F2942]' : 'text-[#6B7780] hover:text-[#0F2942]'
                  }`}
                >
                  {category.label}
                  {isSelected && <span className="absolute inset-x-4 bottom-0 h-px bg-[#B34718]" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-8 mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#5F6D78]" aria-live="polite">
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

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} headingLevel="h2" preload={index === 0} />
            ))}
          </div>
        ) : (
          <div className="border-t border-[#0F2942]/20 py-16">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Belum ada studi kasus pada kategori ini.</h2>
            <p className="mt-3 text-sm leading-7 text-[#5F6D78]">Pilih kategori lain atau tampilkan seluruh arsip proyek.</p>
          </div>
        )}

        <p className="mt-16 max-w-4xl border-t border-[#0F2942]/20 pt-5 text-xs leading-6 text-[#5F6D78]">
          <strong className="font-semibold text-[#0F2942]">Catatan kerahasiaan — </strong>
          {portfolioConfidentialityNotice}
        </p>
      </Container>
    </main>
  );
}
