import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';
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
    <article className={cn('group flex h-full flex-col border-t border-[#0F2942]/20 bg-transparent pt-4', className)}>
      <Link
        href={`/proyek/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#D8D6D0]"
        aria-label={`Buka studi kasus ${project.title}`}
      >
        <Image
          src={project.images?.cover ?? project.image}
          alt={project.imageAlt}
          fill
          preload={preload}
          quality={68}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]"
        />
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780]">
          <span className="text-[#B34718]">{project.categoryLabel}</span>
          <span aria-hidden="true">/</span>
          <span>{project.sector}</span>
        </div>

        <Heading className="text-2xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#0F2942] sm:text-[1.7rem]">
          <Link href={`/proyek/${project.slug}`} className="transition-colors hover:text-[#B34718]">
            {project.title}
          </Link>
        </Heading>

        <p className="mt-4 text-sm leading-7 text-[#5F6D78]">{project.summary}</p>

        <div className="mt-6 border-t border-[#0F2942]/15 pt-4">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#6B7780]">Cakupan utama</p>
          <p className="mt-2 text-xs leading-6 text-[#0F2942]">{project.scope.slice(0, 3).join(' · ')}</p>
        </div>

        <Link
          href={`/proyek/${project.slug}`}
          className="mt-auto pt-6 text-sm font-semibold text-[#0F2942] underline decoration-[#B34718] decoration-1 underline-offset-4 transition-colors hover:text-[#B34718]"
        >
          Baca studi kasus →
        </Link>
      </div>
    </article>
  );
}
