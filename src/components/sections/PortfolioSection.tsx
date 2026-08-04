import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { projects } from '@/data/projects';
import { portfolioConfidentialityNotice } from '@/data/company';
import { Reveal } from '@/components/ui/Reveal';

export function PortfolioSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="proyek" className="py-16 md:py-28 bg-white border-b border-[#E2E8F0]">
      <Container>
        <Reveal>
          <SectionHeading
            badge="Portofolio Pekerjaan"
            title="Lihat cara kami menangani kebutuhan teknis di lapangan."
            description="Setiap studi kasus merangkum kebutuhan awal, cakupan pekerjaan, tahapan pelaksanaan, dan hasil yang dapat ditelusuri melalui arsip proyek."
            align="left"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 80} className="h-full">
              <ProjectCard project={project} preload={index === 0} />
            </Reveal>
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569] leading-relaxed mb-10 text-center max-w-4xl mx-auto">
          <p>
            <strong className="text-[#0F2942]">Catatan kerahasiaan:</strong> {portfolioConfidentialityNotice}
          </p>
        </div>

        {/* CTA to Full Portfolio Index */}
        <div className="text-center">
          <Button href="/proyek" variant="secondary" size="lg">
            <span>Jelajahi {projects.length} studi kasus berdasarkan kategori</span>
            <DynamicIcon name="ArrowRight" size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
