import { Container } from '@/components/ui/Container';

const experienceRegister = [
  { value: '74', label: 'pekerjaan unik dapat ditelusuri dari arsip proyek' },
  { value: '22', label: 'pekerjaan dengan disiplin dominan elektrikal & otomasi' },
  { value: '15', label: 'pekerjaan dengan disiplin dominan mekanikal wahana' },
  { value: '14', label: 'pekerjaan dengan disiplin dominan pompa / plumbing / sistem air' },
  { value: '09', label: 'pekerjaan dengan disiplin dominan HVAC & refrigerasi' },
];

export function ExperienceSummarySection() {
  return (
    <section aria-label="Ringkasan pengalaman CBL" className="border-b border-[#D9E1E8] bg-white py-16 text-[#0F2942] md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-t border-[#0F2942]/25 pt-5 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[#B34718]">Rekam proyek terverifikasi · 2022–2026</p>
            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-4xl">
              Pengalaman yang tercatat dalam arsip proyek.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-[#5F6D78] sm:text-base">
              Ringkasan ini disusun dari PO, SPK, BAST, surat jalan, laporan, dan dokumentasi proyek. Kategori menunjukkan disiplin utama; satu pekerjaan dapat melibatkan beberapa bidang sekaligus.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {experienceRegister.map((item, index) => (
              <div
                key={item.label}
                className="grid grid-cols-[4.5rem_1fr] gap-5 border-t border-[#0F2942]/18 py-5 first:border-t-0 first:pt-0 sm:grid-cols-[6rem_1fr] sm:gap-7 sm:py-6"
              >
                <span className="text-3xl font-semibold tracking-[-0.04em] text-[#0F2942] sm:text-4xl">{item.value}</span>
                <div className="flex items-start justify-between gap-6">
                  <p className="max-w-xl text-[0.95rem] leading-6 text-[#5F6D78] sm:text-base">{item.label}</p>
                  <span className="hidden text-[0.66rem] font-semibold tracking-[0.15em] text-[#8A949C] sm:block">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
