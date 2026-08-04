'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { projects, projectCategories } from '@/data/projects';
import { portfolioConfidentialityNotice } from '@/data/company';
import { ProjectCategory } from '@/types/project';
import { Reveal } from '@/components/ui/Reveal';

export default function PortfolioIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectCategory>('all');

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <section className="relative overflow-hidden bg-[#0F2942] py-14 text-white md:py-20">
        <div className="absolute inset-0 engineering-grid-dark opacity-50" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            badge="Portofolio Terverifikasi"
            title="Pekerjaan teknis dalam konteks yang mudah dipahami."
            description="Jelajahi studi kasus pengadaan, instalasi, penggantian, dan perbaikan yang didukung arsip internal tanpa membuka data transaksi sensitif."
            as="h1"
            align="left"
            light
          />
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 font-semibold">{projects.length} studi kasus publik</span>
            <span className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 font-semibold">6 kategori layanan</span>
          </div>
        </Container>
      </section>

      <Container className="py-10 md:py-14">

        {/* Filter Bar Interaktif */}
        <div className="mb-10 rounded-2xl border border-[#DCE6EE] bg-white p-3 shadow-sm overflow-x-auto" role="group" aria-label="Filter Kategori Portofolio">
          <div className="flex min-w-max items-center gap-2">
          {projectCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as 'all' | ProjectCategory)}
                aria-pressed={isSelected}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  isSelected
                    ? 'bg-[#0F2942] text-white shadow-md scale-105'
                    : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F0F7FD] hover:text-[#0E6BA8]'
                } focus-visible:outline-2 focus-visible:outline-[#0E6BA8]`}
              >
                {cat.label}
              </button>
            );
          })}
          </div>
        </div>

        {/* Announced Result Count (Live Region for Screen Readers) */}
        <div className="mb-6 flex items-center justify-between text-xs sm:text-sm text-[#475569]" aria-live="polite">
          <span>
            Menampilkan <strong className="text-[#0F2942]">{filteredProjects.length}</strong> studi kasus untuk kategori:{' '}
            <strong className="text-[#0E6BA8]">
              {projectCategories.find((c) => c.id === selectedCategory)?.label}
            </strong>
          </span>

          {selectedCategory !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="text-[#0E6BA8] hover:underline font-semibold flex items-center gap-1"
            >
              <DynamicIcon name="X" size={14} />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

        {/* Grid Kartu Proyek */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 3) * 60} className="h-full">
                <ProjectCard project={project} headingLevel="h2" preload={index === 0} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-2xl border border-[#E2E8F0] p-8 mb-12">
            <DynamicIcon name="Filter" size={48} className="text-[#475569]/40 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#0F2942] mb-2">Tidak Ada Studi Kasus Ditemukan</h3>
            <p className="text-sm text-[#475569] max-w-md mx-auto mb-4">
              Belum ada entri studi kasus yang dipublikasikan untuk kategori ini.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="px-4 py-2 text-xs font-semibold bg-[#0E6BA8] text-white rounded-lg hover:bg-[#15426B]"
            >
              Tampilkan Semua Proyek
            </button>
          </div>
        )}

        {/* Confidentiality Notice */}
        <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#475569] leading-relaxed max-w-4xl mx-auto shadow-2xs">
          <p>
            <strong className="text-[#0F2942]">Catatan Kerahasiaan Klien:</strong> {portfolioConfidentialityNotice}
          </p>
        </div>
      </Container>
    </div>
  );
}
