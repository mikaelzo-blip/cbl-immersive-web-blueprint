import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { Reveal } from '@/components/ui/Reveal';
import { legalDocuments } from '@/data/legal';

export function VendorReadinessSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F3F7FA] border-y border-[#E2E8F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow-label">Kelengkapan Administrasi Vendor</span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight text-[#0F2942] leading-tight">
              Informasi legal untuk mendukung proses pengadaan dan registrasi vendor.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569]">
              Jenis dokumen perusahaan ditampilkan secara ringkas. Salinan yang memuat data sensitif hanya disampaikan melalui permintaan resmi untuk keperluan registrasi vendor.
            </p>
            <Link
              href="/legalitas"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0F2942] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#15426B] hover:shadow-lg"
            >
              Lihat informasi legalitas
              <DynamicIcon name="ArrowUpRight" size={17} />
            </Link>
          </Reveal>

          <div className="lg:col-span-7 grid gap-4">
            {legalDocuments.map((document, index) => (
              <Reveal key={document.id} delay={index * 80}>
                <div className="group flex items-start gap-4 rounded-2xl border border-[#D9E5EF] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0E6BA8]/35 hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F7FD] text-[#0E6BA8] transition-colors group-hover:bg-[#0E6BA8] group-hover:text-white">
                    <DynamicIcon name="FileCheck2" size={21} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0E6BA8]">{document.category}</span>
                    <h3 className="mt-1 text-base font-bold text-[#0F2942]">{document.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#475569]">Dapat ditinjau sesuai kebutuhan proses registrasi resmi.</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
