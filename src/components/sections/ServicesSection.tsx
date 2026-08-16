import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { serviceDivisions } from '@/data/company';

export function ServicesSection() {
  return (
    <section id="layanan" className="border-b border-[#D9E1E8] bg-[#F4F1EA] py-20 text-[#0F2942] md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-8 border-t border-[#0F2942]/25 pt-5 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#B34718]">Indeks layanan</p>
            <p className="mt-3 max-w-[18rem] text-[0.95rem] leading-7 text-[#657482]">
              Layanan disusun dari pekerjaan yang telah terdokumentasi, bukan daftar kemampuan generik.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-4xl text-[clamp(2.45rem,5vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
              Satu koordinasi untuk pekerjaan teknis lintas disiplin.
            </h2>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          {serviceDivisions.map((service, index) => {
            const number = String(index + 1).padStart(2, '0');

            return (
              <article
                key={service.id}
                className="grid grid-cols-1 gap-5 border-t border-[#0F2942]/25 py-7 sm:py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
              >
                <div className="flex items-start justify-between lg:col-span-2 lg:block">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#B34718]">{number}</span>
                  <span className="text-[0.68rem] uppercase tracking-[0.13em] text-[#8A949C] lg:mt-3 lg:block">Layanan teknis</span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-3xl">
                    <Link href={`/layanan/${service.slug}`} className="transition-colors duration-200 hover:text-[#B34718]">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-[#657482]">{service.description}</p>
                </div>

                <div className="lg:col-span-4 lg:col-start-8">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#657482]">Contoh lingkup</p>
                  <ul className="mt-3 space-y-2 text-[0.95rem] leading-6 text-[#0F2942]">
                    {service.capabilities.slice(0, 3).map((capability) => (
                      <li key={capability} className="border-t border-[#0F2942]/12 pt-2 first:border-t-0 first:pt-0">
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-1 lg:text-right">
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="inline-flex border-b border-[#0F2942]/35 pb-1 text-sm font-semibold transition-colors duration-200 hover:border-[#B34718] hover:text-[#B34718]"
                    aria-label={`Pelajari ${service.title}`}
                  >
                    Detail →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
