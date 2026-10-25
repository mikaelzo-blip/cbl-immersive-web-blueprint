import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { workProcessSteps } from '@/data/company';

// Real CBL field photos, one per step, in step order.
const stepImages = [
  { src: '/images/projects/perbaikan-ac-vrf/02.webp', alt: 'Teknisi memeriksa unit AC outdoor di lokasi' },
  { src: '/images/projects/penyetelan-roll-conveyor/01.webp', alt: 'Tim menyetel roll conveyor di area kolam' },
  { src: '/images/projects/panel-view-hmi/02.webp', alt: 'Uji fungsi tombol dan layar HMI pada panel kontrol' },
  { src: '/images/projects/panel-view-hmi/01.webp', alt: 'Teknisi mencatat hasil pekerjaan di laptop' },
];

export function WorkProcessSection() {
  return (
    <section id="cara-kerja" className="overflow-hidden border-b border-[#D9E1E8] bg-[#F4F1EA] py-20 text-[#0F2942] md:py-28">
      <Container>
        {/* Right-aligned on desktop: the staircase below starts top-left, so the heading balances it from the other side. */}
        <h2 className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] lg:ml-auto lg:text-right">
          Dari survei sampai serah terima.
        </h2>

        {/* Steps descend like a staircase on desktop so the sequence reads left to right. */}
        <ol className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:mt-16 lg:grid-cols-4">
          {workProcessSteps.map((step, index) => (
            <li key={step.stepNumber} className="lg:[margin-top:calc(var(--step)*2rem)]" style={{ '--step': index } as React.CSSProperties}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#D9E1E8]">
                <Image
                  src={stepImages[index].src}
                  alt={stepImages[index].alt}
                  fill
                  sizes="(min-width: 1024px) 18rem, 45vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-[#F4F1EA] px-2 py-1 text-sm font-semibold tabular-nums text-[#B34718] sm:text-base">
                  {String(step.stepNumber).padStart(2, '0')}
                </span>
              </div>
              <span aria-hidden="true" className="process-line mt-5 block h-0.5 bg-[#0F2942]" />
              <h3 className="mt-4 text-base font-semibold leading-[1.15] tracking-[-0.02em] sm:text-2xl">{step.title}</h3>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
