import Image from 'next/image';
import { Container } from '@/components/ui/Container';

type Photo = { src: string; width: number; height: number; alt: string };

// CBL field documentation only — no stock here.
const rows: Photo[][] = [
  [
    { src: '/images/projects/penggantian-conveyor-lift/cover.jpeg', width: 3024, height: 4032, alt: 'Penggantian conveyor lift di fasilitas rekreasi air' },
    { src: '/images/projects/instalasi-ac-split-duct/03.webp', width: 1280, height: 960, alt: 'Wiring MCB pada panel' },
    { src: '/images/projects/soft-starter-lift-pompa/03.webp', width: 900, height: 1200, alt: 'Teknisi memeriksa panel soft starter' },
    { src: '/images/projects/soft-starter-lift-pompa/04.webp', width: 900, height: 1200, alt: 'Teknisi merapikan wiring pada panel drive' },
    { src: '/images/projects/penyetelan-roll-conveyor/01.webp', width: 1448, height: 1086, alt: 'Penyetelan roll conveyor di area kolam' },
  ],
  [
    { src: '/images/projects/penggantian-dc-drive-motor/03.webp', width: 640, height: 1200, alt: 'Perbaikan board DC drive motor' },
    { src: '/images/projects/instalasi-ac-split-duct/04.webp', width: 736, height: 551, alt: 'Kompresor unit AC split duct' },
    { src: '/images/projects/pencahayaan-area-rekreasi/02.webp', width: 488, height: 1032, alt: 'Teknisi memasang lampu pertunjukan pada rigging' },
    { src: '/images/projects/perbaikan-ac-vrf/04.webp', width: 900, height: 1200, alt: 'Pemeriksaan board kontrol unit AC VRF' },
    { src: '/images/projects/perbaikan-ac-vrf/02.webp', width: 900, height: 1200, alt: 'Teknisi memeriksa unit AC outdoor' },
    { src: '/images/projects/panel-kontrol-mccb-distribusi/wiring-terminal-panel-01.webp', width: 1280, height: 960, alt: 'Wiring terminal panel' },
  ],
];

export function FieldGallerySection() {
  return (
    <section aria-labelledby="field-title" className="overflow-hidden border-b border-[#D9E1E8] bg-[#0F2942] py-20 text-white md:py-28">
      {/* Centered, oversized and half-outlined so this heading breaks the left-aligned rhythm of the other sections. */}
      <Container className="text-center">
        <h2 id="field-title" className="text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
          <span className="text-outline [--outline-color:#F4F1EA]">Dari</span> lapangan.
        </h2>
      </Container>

      <div className="mt-12 flex flex-col gap-3 md:mt-16 lg:gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="loop-strip">
            <div className={rowIndex % 2 ? 'loop-track is-reverse' : 'loop-track'} style={{ '--loop-duration': '70s' } as React.CSSProperties}>
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 gap-3 pr-3 lg:gap-4 lg:pr-4" aria-hidden={copy === 1 ? 'true' : undefined}>
                  {row.map((photo) => (
                    <Image
                      key={`${copy}-${photo.src}`}
                      src={photo.src}
                      alt={copy === 0 ? photo.alt : ''}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 360px, 240px"
                      className="h-48 w-auto rounded-md object-cover sm:h-64 lg:h-80"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
