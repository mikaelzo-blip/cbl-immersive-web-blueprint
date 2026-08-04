import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
  headingLevel?: 'h2' | 'h3';
  preload?: boolean;
}

export function ProjectCard({ project, className, headingLevel = 'h3', preload = false }: ProjectCardProps) {
  const Heading = headingLevel;
  return (
    <article className={cn(
      'group relative flex flex-col bg-white rounded-3xl border border-[#DCE6EE] shadow-[0_18px_45px_-32px_rgba(15,41,66,0.4)] card-hover-lift overflow-hidden h-full',
      className
    )}>
      <Link href={`/proyek/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-[#E2E8F0]">
        <Image
          src={project.images?.cover ?? project.image}
          alt={project.imageAlt}
          fill
          preload={preload}
          quality={65}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/45 to-transparent" />
        <div className="absolute left-4 bottom-4 flex flex-wrap gap-2">
          <Badge variant="primary">{project.categoryLabel}</Badge>
          <Badge variant="ghost" className="bg-white/90 border-white/70">{project.sector}</Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Heading className="text-xl font-extrabold text-[#0F2942] tracking-tight group-hover:text-[#0E6BA8] transition-colors mb-3 leading-snug">
          <Link href={`/proyek/${project.slug}`}>{project.title}</Link>
        </Heading>
        <p className="text-sm text-[#475569] leading-relaxed mb-5">{project.summary}</p>

        <div className="pt-4 border-t border-[#E2E8F0] mb-5">
          <span className="text-xs font-bold text-[#0F2942] uppercase tracking-wider block mb-2">Cakupan pekerjaan utama</span>
          <ul className="space-y-1.5 text-xs text-[#475569]">
            {project.scope.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <DynamicIcon name="CheckCircle2" size={14} className="text-[#0E6BA8] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
          <span className="text-xs font-bold text-[#0E6BA8] inline-flex items-center gap-1.5">
            Baca studi kasus <DynamicIcon name="ArrowUpRight" size={14} />
          </span>
          <DynamicIcon name={project.icon} size={18} className="text-[#0E6BA8]" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 accent-line-gradient" />
    </article>
  );
}
