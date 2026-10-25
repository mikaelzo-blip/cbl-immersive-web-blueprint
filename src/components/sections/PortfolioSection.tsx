'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { projects } from '@/data/projects';
import { portfolioConfidentialityNotice } from '@/data/company';
import { cn } from '@/lib/utils';

const RAIL_SIZE = 8;

export function PortfolioSection() {
  const railRef = useRef<HTMLDivElement>(null);
  // Featured first, then the rest, so the rail always has enough work to scroll through.
  const railProjects = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)].slice(0, RAIL_SIZE);

  const scrollRail = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section id="proyek" className="overflow-hidden border-b border-[#D9E1E8] bg-white pb-12 pt-16 text-[#0F2942] md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Proyek pilihan.
          </h2>
          <div className="flex items-center gap-3">
            <Link
              href="/proyek"
              className="mr-3 inline-flex items-center gap-2 hit-area border-b border-[#B34718] pb-1 text-sm font-semibold text-[#B34718] transition-colors hover:text-[#8F3413]"
            >
              Semua {projects.length} studi kasus <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            {[-1, 1].map((direction) => (
              <button
                key={direction}
                type="button"
                onClick={() => scrollRail(direction as 1 | -1)}
                aria-label={direction < 0 ? 'Proyek sebelumnya' : 'Proyek berikutnya'}
                className="hidden size-12 place-items-center rounded-full border border-[#0F2942]/25 transition-colors hover:border-[#0F2942] hover:bg-[#0F2942] hover:text-white md:grid"
              >
                {direction < 0 ? <ArrowLeft aria-hidden="true" className="size-5" /> : <ArrowRight aria-hidden="true" className="size-5" />}
              </button>
            ))}
          </div>
        </div>
      </Container>

      {/* Rail starts on the container's left edge and runs off the right edge of the viewport. */}
      <div
        ref={railRef}
        data-stagger
        className="mt-12 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto scroll-smooth pb-4 pl-4 pr-4 scroll-pl-4 sm:pl-6 sm:scroll-pl-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))] [scrollbar-width:none] md:mt-16 md:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        {railProjects.map((project, index) => {
          const isLead = index === 0;
          return (
            <Link
              key={project.slug}
              href={`/proyek/${project.slug}`}
              className={cn(
                'group shrink-0 snap-start',
                isLead ? 'w-[80vw] sm:w-[34rem] lg:w-[44rem]' : 'w-[80vw] sm:w-[20rem] lg:w-[24rem]',
                // Stagger the vertical line so the rail reads as a sequence, not a row of equal boxes.
                !isLead && index % 2 === 1 && 'md:mt-16'
              )}
            >
              <div className={cn('relative overflow-hidden rounded-md bg-[#D9E1E8]', isLead ? 'aspect-[4/5] sm:aspect-[4/3]' : 'aspect-[4/5] sm:aspect-[3/4]')}>
                <Image
                  src={project.images?.cover ?? project.image}
                  alt={project.imageAlt}
                  fill
                  sizes={isLead ? '(min-width: 1024px) 44rem, 80vw' : '(min-width: 1024px) 24rem, 80vw'}
                  className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
              <p className="mt-4 text-sm text-[#657482]">{project.categoryLabel}</p>
              <h3
                className={cn(
                  'mt-1 font-semibold leading-[1.1] tracking-[-0.02em] transition-colors group-hover:text-[#B34718]',
                  isLead ? 'text-xl sm:text-3xl' : 'text-xl'
                )}
              >
                {project.title}
              </h3>
            </Link>
          );
        })}
      </div>

      <Container>
        {/* Phones skip the notice here; /proyek carries it in full. */}
        <p className="mt-10 hidden max-w-3xl text-xs leading-6 text-[#657482] md:block">{portfolioConfidentialityNotice}</p>
      </Container>
    </section>
  );
}
