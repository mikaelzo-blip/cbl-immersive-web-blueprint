import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { companyInfo } from '@/data/company';

const capabilityTags = ['Kelistrikan', 'Otomasi', 'Mekanikal', 'HVAC', 'Pompa', 'Pencahayaan'];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] border-b border-[#E2E8F0]">
      <div className="absolute inset-0 engineering-grid opacity-55" aria-hidden="true" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#0E6BA8]/8 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C2410C]/7 blur-3xl" aria-hidden="true" />

      <Container className="relative z-10 grid min-h-[720px] grid-cols-1 items-center gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <div className="hero-enter lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0E6BA8]/25 bg-white px-3.5 py-2 text-xs font-bold text-[#0E6BA8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C2410C]" />
            Pengalaman terdokumentasi 2022–2026
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.035em] text-[#0F2942] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Penanganan teknis fasilitas, dari kebutuhan lapangan hingga serah terima.
          </h1>

          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-[#475569] sm:text-lg">
            CBL mendukung pekerjaan kelistrikan, panel kontrol, otomasi, mekanikal, HVAC, pompa, dan pencahayaan melalui tenaga profesional berbasis kebutuhan proyek.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Halo CBL, saya ingin mendiskusikan kebutuhan teknis fasilitas kami.')}`}
              external
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
            >
              <DynamicIcon name="MessageSquareText" size={20} />
              Minta konsultasi awal
            </Button>
            <Button href="/proyek" variant="outline" size="lg" className="w-full bg-white sm:w-auto">
              Lihat pengalaman proyek
              <DynamicIcon name="ArrowRight" size={19} />
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-2" aria-label="Cakupan layanan">
            {capabilityTags.map((tag) => (
              <span key={tag} className="rounded-lg border border-[#D9E5EF] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#475569]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-enter hero-enter-delayed relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-h-[610px] max-w-[520px] overflow-hidden rounded-[2rem] border border-white/80 bg-[#D9E5EF] shadow-[0_32px_90px_-32px_rgba(15,41,66,0.5)]">
            <Image
              src="/images/hero-conveyor-maintenance.jpg"
              alt="Dokumentasi pekerjaan teknis pada sistem conveyor"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/80 via-[#0F2942]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md">
                <DynamicIcon name="ShieldCheck" size={22} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#67E8F9]">Berdasarkan dokumentasi pekerjaan</p>
              <p className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
                Ruang lingkup pekerjaan, tahapan pelaksanaan, dan hasil disajikan tanpa mengungkap data transaksi sensitif.
              </p>
            </div>
          </div>

          <div className="absolute -left-3 top-10 hidden rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:block lg:-left-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F7FD] text-[#0E6BA8]"><DynamicIcon name="ClipboardCheck" size={20} /></div>
              <div><p className="text-xs text-[#475569]">Pendekatan kerja</p><p className="text-sm font-bold text-[#0F2942]">Survei • Perencanaan • Pelaksanaan</p></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
