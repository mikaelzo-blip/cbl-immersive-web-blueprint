import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/project';

// Phones swipe through the photos edge to edge; from md the same cards sit in a row of three.
export function ProjectRail({ projects }: { projects: Project[] }) {
  return (
    <ul
      data-stagger
      className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scroll-pl-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 sm:scroll-pl-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {projects.map((project) => (
        <li key={project.slug} className="w-[80vw] shrink-0 snap-start md:w-auto">
          <Link href={`/proyek/${project.slug}`} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#D9E1E8] md:aspect-[4/3]">
              <Image
                src={project.images?.cover ?? project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 80vw"
                className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
            <p className="mt-4 text-sm text-[#657482]">{project.categoryLabel}</p>
            <h3 className="mt-1 text-xl font-semibold leading-[1.1] tracking-[-0.02em] transition-colors group-hover:text-[#B34718]">
              {project.title}
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
