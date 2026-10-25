import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { whyUsPoints } from '@/data/company';

export function WhyUsSection() {
  return (
    <section id="mengapa-cbl" className="border-b border-[#D9E1E8] bg-white text-[#0F2942]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[26rem] overflow-hidden sm:min-h-[28rem] lg:min-h-full">
          <Image
            src="/images/why-us-panel-plc.webp"
            alt="Dua teknisi CBL memasang perangkat pada panel kontrol"
            fill
            data-parallax
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <Container className="py-16 sm:py-20 lg:max-w-2xl lg:px-14 lg:py-28 xl:px-20">
          <h2 className="text-[clamp(2.3rem,4.4vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
            Satu tim inti. Spesialis saat dibutuhkan.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#536474]">
            Tim inti CBL memegang koordinasi, mutu, jadwal, dan dokumentasi. Tenaga profesional atau mitra spesialis dilibatkan sesuai kebutuhan pekerjaan.
          </p>

          <ul data-stagger className="mt-10 border-t border-[#0F2942]/15">
            {whyUsPoints.map((point, index) => (
              <li key={point.id} className="grid grid-cols-[2.5rem_1fr] items-baseline border-b border-[#0F2942]/15 py-5 text-lg font-semibold tracking-[-0.015em] sm:grid-cols-[3.5rem_1fr] sm:text-xl">
                <span className="text-sm tabular-nums text-[#B34718]">{String(index + 1).padStart(2, '0')}</span>
                <span>{point.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
