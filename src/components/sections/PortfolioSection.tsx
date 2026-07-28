import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { projects } from '@/data/projects';
import { portfolioConfidentialityNotice } from '@/data/company';

export function PortfolioSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="proyek" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="Dokumentasi Proyek"
          title="Portofolio Proyek Unggulan"
          description="Proyek pilihan yang disusun dari arsip PO atau SPK, dokumen penyelesaian, serta dokumentasi lapangan yang tersedia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569] leading-relaxed mb-10 text-center max-w-4xl mx-auto">
          <p>
            <strong className="text-[#0F2942]">Catatan Kerahasiaan Mitra:</strong> {portfolioConfidentialityNotice}
          </p>
        </div>

        {/* CTA to Full Portfolio Index */}
        <div className="text-center">
          <Button href="/proyek" variant="secondary" size="lg">
            <span>Lihat Seluruh Portofolio &amp; Filter Kategori ({projects.length} Proyek)</span>
            <DynamicIcon name="ArrowRight" size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
