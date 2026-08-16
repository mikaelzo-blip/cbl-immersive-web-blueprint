import { Container } from '@/components/ui/Container';
import { companyInfo } from '@/data/company';

export function ClosingCtaSection() {
  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo CBL, saya ingin konsultasi teknis kebutuhan fasilitas operasional kami.'
  )}`;

  return (
    <section className="border-b border-white/10 bg-[#0F2942] py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-10 border-t border-white/25 pt-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#F0A16F]">
              Konsultasi proyek
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-4xl text-[clamp(2.45rem,6vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.048em]">
              Mulai dari kondisi yang ada di lapangan.
            </h2>
            <p className="mt-6 max-w-2xl text-[0.98rem] leading-7 text-[#D7E1E8] sm:text-base sm:leading-8">
              Ceritakan kondisi awal, lokasi, spesifikasi yang tersedia, dan target pekerjaan. CBL akan membantu memperjelas kebutuhan sebelum menentukan langkah berikutnya.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[#F0A16F] pb-1 text-[#F0A16F] transition-colors hover:text-white"
              >
                Diskusikan melalui WhatsApp ↗
              </a>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="border-b border-white/40 pb-1 text-white transition-colors hover:border-white"
              >
                Hubungi {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
