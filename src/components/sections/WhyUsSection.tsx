import { Container } from '@/components/ui/Container';
import { whyUsPoints } from '@/data/company';

export function WhyUsSection() {
  return (
    <section id="mengapa-cbl" className="border-b border-white/10 bg-[#102A43] py-20 text-white md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-8 border-t border-white/25 pt-5 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#F0A06B]">Operating model</p>
            <p className="mt-3 max-w-[17rem] text-sm leading-6 text-white/60">
              Nilai CBL datang dari cara pekerjaan dikendalikan, bukan dari slogan yang sulit dibuktikan.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-4xl text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              Satu pengendali proyek. Keahlian dimobilisasi sesuai kebutuhan.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Struktur inti tetap mengendalikan koordinasi, mutu, jadwal, dokumentasi, dan hasil akhir; tenaga profesional atau mitra spesialis dilibatkan sesuai disiplin dan kompleksitas pekerjaan.
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          {whyUsPoints.map((point, index) => (
            <article
              key={point.id}
              className="grid grid-cols-1 gap-4 border-t border-white/20 py-7 md:grid-cols-12 md:gap-8 md:py-9"
            >
              <div className="md:col-span-2">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#F0A06B]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-2xl font-semibold leading-[1.05] tracking-[-0.03em] md:col-span-4 sm:text-3xl">
                {point.title}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-white/65 md:col-span-5 md:col-start-8 sm:text-base">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
