import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <main className="flex min-h-[72vh] items-center bg-[#F4F1EA] py-20 text-[#0F2942] md:py-28">
      <Container>
        <div className="grid gap-10 border-t border-[#0F2942]/25 pt-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#B34718]">404 / Not found</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              Halaman ini tidak tersedia.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#5F6D78] sm:text-base sm:leading-8">
              Tautan mungkin telah dipindahkan, berubah jalur, atau belum dipublikasikan. Anda dapat kembali ke beranda atau membuka arsip pekerjaan CBL.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold">
              <Link href="/" className="border-b border-[#B34718] pb-1 text-[#B34718]">Kembali ke beranda →</Link>
              <Link href="/proyek" className="border-b border-[#0F2942]/40 pb-1">Buka portofolio →</Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
