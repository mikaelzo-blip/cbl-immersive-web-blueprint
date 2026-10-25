'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { serviceDivisions } from '@/data/company';
import { serviceImages } from '@/data/service-images';
import { cn } from '@/lib/utils';

export function ServicesSection({ headingAs: Heading = 'h2' }: { headingAs?: 'h1' | 'h2' }) {
  const [active, setActive] = useState(0);

  return (
    <section id="layanan" className="border-b border-[#D9E1E8] bg-[#F4F1EA] py-16 text-[#0F2942] md:py-28">
      <Container>
        <Heading className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          Enam bidang pekerjaan. Satu koordinasi.
        </Heading>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12">
          <ul className="lg:col-span-7">
            {serviceDivisions.map((service, index) => {
              const image = serviceImages[service.slug];
              const isActive = index === active;

              return (
                <li key={service.id} className="border-t border-[#0F2942]/20 last:border-b">
                  <Link
                    href={`/layanan/${service.slug}`}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className="group flex items-center gap-4 py-4 sm:gap-5 sm:py-6"
                  >
                    {/* Mobile has no hover: each row carries its own photo. */}
                    {image && (
                      <span className="relative h-[4.5rem] w-24 shrink-0 overflow-hidden rounded-sm sm:h-24 sm:w-32 lg:hidden">
                        <Image src={image.src} alt="" fill sizes="128px" className="object-cover" />
                      </span>
                    )}
                    <span
                      className={cn(
                        'flex-1 text-[clamp(1.35rem,3.6vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.035em] transition-[color,translate] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] lg:text-[#0F2942]/55',
                        isActive && 'lg:translate-x-3 lg:text-[#0F2942]'
                      )}
                    >
                      {service.title}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className={cn(
                        'size-6 shrink-0 text-[#B34718] transition-[opacity,translate] duration-500 lg:-translate-x-3 lg:opacity-0',
                        isActive && 'lg:translate-x-0 lg:opacity-100'
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-md">
              {serviceDivisions.map((service, index) => {
                const image = serviceImages[service.slug];
                if (!image) return null;
                return (
                  <Image
                    key={service.id}
                    src={image.src}
                    alt={index === active ? image.alt : ''}
                    fill
                    sizes="40vw"
                    className={cn(
                      'object-cover transition-[opacity,scale] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]',
                      index === active ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    )}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
