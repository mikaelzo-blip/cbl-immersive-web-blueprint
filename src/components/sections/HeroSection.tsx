import { getImageProps } from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { companyInfo } from '@/data/company';

const heroLines = ['Memahami kebutuhan.', 'Menentukan langkah kerja.', 'Menyelesaikan pekerjaan.'];
const heroAlt = 'Teknisi CBL memeriksa jalur conveyor di fasilitas rekreasi air';

const heroImage = { alt: heroAlt, sizes: '100vw', quality: 90, priority: true } as const;
const {
  props: { srcSet: desktopSrcSet },
} = getImageProps({ ...heroImage, src: '/images/hero-2k.webp', width: 2560, height: 1440 });
const {
  props: { srcSet: mobileSrcSet, ...heroImgProps },
} = getImageProps({ ...heroImage, src: '/images/hero-conveyor-maintenance.jpg', width: 3024, height: 4032 });

export function HeroSection() {
  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo CBL, saya ingin mendiskusikan kebutuhan teknis fasilitas kami.'
  )}`;

  return (
    // Full screen: on the homepage the header floats transparent over this photo until the page scrolls.
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#081626] text-white">
      <div className="hero-frame absolute inset-0 -z-10">
        {/* Art direction: a dedicated 2560×1440 crop for wide screens, the full portrait original on phones. No parallax zoom here: it softens the photo. */}
        <picture className="absolute inset-0">
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes="100vw" />
          <source media="(max-width: 767px)" srcSet={mobileSrcSet} sizes="100vw" />
          <img {...heroImgProps} alt={heroAlt} className="hero-zoom h-full w-full object-cover object-[50%_40%] md:object-center" />
        </picture>
        {/* Solid at the bottom so the hero runs straight into the navy record band below; a light scrim on top keeps the header legible. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#081626_0%,rgba(8,22,38,0.82)_30%,rgba(8,22,38,0.25)_62%,rgba(8,22,38,0)_80%)]" />
        <div className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(to_bottom,rgba(8,22,38,0.6),rgba(8,22,38,0))]" />
      </div>

      <Container className="pb-10 pt-36 sm:pb-16 lg:pb-20">
        <h1 className="max-w-[18ch] text-balance text-[clamp(2.35rem,8.6vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.04em] lg:max-w-none lg:text-[clamp(3.6rem,5.4vw,6rem)]">
          {heroLines.map((line, index) => (
            <span key={line} className="hero-line lg:whitespace-nowrap">
              <span style={{ '--i': index } as React.CSSProperties}>{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero-enter hero-enter-delayed mt-8 flex flex-col gap-8 sm:mt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-base leading-7 text-[#D5DEE6] sm:text-lg">
            Kontraktor teknik di Jakarta untuk elektrikal, otomasi, mekanikal, HVAC, pompa, dan pencahayaan fasilitas Anda.
          </p>

          {/* One row on phones: the WhatsApp button takes the width, the project link stays compact beside it. */}
          <div className="flex items-stretch gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#B34718] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#8F3413] sm:flex-none sm:px-6 sm:text-base"
            >
              Konsultasi via WhatsApp
            </a>
            <Link
              href="/proyek"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-4 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 sm:px-6 sm:text-base"
            >
              <span className="sm:hidden">Proyek</span>
              <span className="hidden sm:inline">Lihat proyek</span>
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
