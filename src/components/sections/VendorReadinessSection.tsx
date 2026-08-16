import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { legalDocuments } from '@/data/legal';

export function VendorReadinessSection() {
  return (
    <section className="border-b border-[#0F2942]/15 bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-10 border-t border-[#0F2942]/25 pt-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#B34718]">
              Kelengkapan Administrasi Vendor
            </p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.4rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#0F2942]">
              Legalitas disajikan sebagai informasi yang dapat ditelusuri.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#5F6D78] sm:text-base">
              Jenis dokumen perusahaan ditampilkan secara ringkas. Salinan yang memuat data sensitif disampaikan melalui permintaan resmi untuk kebutuhan registrasi vendor.
            </p>
            <Link
              href="/legalitas"
              className="mt-7 inline-flex border-b border-[#B34718] pb-1 text-sm font-semibold text-[#B34718] transition-colors hover:text-[#8F3413]"
            >
              Buka register legalitas →
            </Link>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-[#0F2942]/20">
              {legalDocuments.map((document, index) => (
                <article
                  key={document.id}
                  className="grid gap-3 border-b border-[#0F2942]/15 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-5"
                >
                  <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-[#B34718]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780]">
                      {document.category}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-[#0F2942]">{document.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-[#5F6D78]">{document.description}</p>
                  </div>
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#5F6D78] sm:text-right">
                    Register
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
