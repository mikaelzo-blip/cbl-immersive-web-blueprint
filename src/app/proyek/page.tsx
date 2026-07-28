'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { projects, projectCategories } from '@/data/projects';
import { portfolioConfidentialityNotice } from '@/data/company';
import { ProjectCategory } from '@/types/project';

export default function PortfolioIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectCategory>('all');

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="py-12 md:py-20 bg-[#F8FAFC] min-h-screen">
      <Container>
        {/* Header Indeks */}
        <SectionHeading
          badge="Portofolio Terverifikasi"
          title="Portofolio Pekerjaan CBL"
          description="Jelajahi pekerjaan engineering, maintenance, instalasi, perbaikan, dan pengadaan teknis yang didukung arsip internal perusahaan."
          as="h1"
        />

        {/* Filter Bar Interaktif */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter Kategori Portofolio">
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
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
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
