import { Container } from '@/components/ui/Container';
import { workProcessSteps } from '@/data/company';

export function WorkProcessSection() {
  return (
    <section id="cara-kerja" className="border-b border-[#D9E1E8] bg-[#F4F1EA] py-20 text-[#0F2942] md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-8 border-t border-[#0F2942]/25 pt-5 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#B34718]">Project method</p>
            <p className="mt-3 max-w-[17rem] text-sm leading-6 text-[#657482]">
              Tahapan disesuaikan dengan kondisi fasilitas, batas pekerjaan, risiko, dan persyaratan lokasi.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-4xl text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              Dari klarifikasi kebutuhan sampai dokumentasi dan serah terima.
            </h2>
          </div>
        </div>

        <ol className="mt-14 md:mt-20">
          {workProcessSteps.map((step, index) => (
            <li
              key={step.stepNumber}
              className="grid grid-cols-1 gap-5 border-t border-[#0F2942]/25 py-7 sm:py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
            >
              <div className="lg:col-span-2">
                <span className="text-3xl font-semibold tracking-[-0.04em] text-[#B34718] sm:text-4xl">
                  {String(step.stepNumber).padStart(2, '0')}
                </span>
                <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#8A949C]">
                  Stage {index + 1}
                </p>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-2xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-3xl">{step.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#657482]">{step.description}</p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#657482]">What happens here</p>
                <ul className="mt-3 text-sm leading-6 text-[#0F2942]">
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
