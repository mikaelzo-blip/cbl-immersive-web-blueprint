import { Container } from '@/components/ui/Container';
import { workProcessSteps } from '@/data/company';

export function WorkProcessSection() {
  return (
    <section id="cara-kerja" className="border-b border-[#D9E1E8] bg-[#F4F1EA] py-20 text-[#0F2942] md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-7 border-t border-[#0F2942]/25 pt-5 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#B34718]">Metode proyek</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.45rem,4.2vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              Dari klarifikasi kebutuhan sampai dokumentasi dan serah terima.
            </h2>
          </div>

          <p className="max-w-md text-[0.95rem] leading-7 text-[#657482] lg:col-span-4 lg:col-start-9 lg:pb-1">
            Tahapan disesuaikan dengan kondisi fasilitas, batas pekerjaan, risiko, dan persyaratan lokasi.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 md:mt-20 lg:grid-cols-2 lg:gap-x-14">
          {workProcessSteps.map((step, index) => (
            <li
              key={step.stepNumber}
              className="border-t border-[#0F2942]/25 py-8 sm:py-10 lg:min-h-[28rem]"
            >
              <div className="flex items-end justify-between gap-6">
                <span className="text-5xl font-semibold tracking-[-0.055em] text-[#B34718] sm:text-6xl">
                  {String(step.stepNumber).padStart(2, '0')}
                </span>
                <span className="pb-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8A949C]">
                  Tahap {index + 1}
                </span>
              </div>

              <h3 className="mt-8 max-w-lg text-2xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-[#657482]">
                {step.description}
              </p>

              <div className="mt-8 border-t border-[#0F2942]/15 pt-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#657482]">Yang dilakukan</p>
                <ul className="mt-3 text-[0.95rem] leading-6 text-[#0F2942]">
                  {step.details.map((detail) => (
                    <li key={detail} className="border-t border-[#0F2942]/12 py-2.5 first:border-t-0 first:pt-0">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
