import { Container } from '@/components/ui/Container';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';
import { serviceDivisions } from '@/data/company';

const summaryItems = [
  { value: '2022–2026', label: 'Periode pekerjaan terdokumentasi', icon: 'CalendarDays' },
  { value: `${projects.length}`, label: 'Studi kasus yang dipublikasikan', icon: 'BriefcaseBusiness' },
  { value: `${serviceDivisions.length}`, label: 'Bidang layanan teknis', icon: 'Layers3' },
  { value: 'Berbasis proyek', label: 'Tenaga profesional sesuai kebutuhan', icon: 'Users' },
];

export function ExperienceSummarySection() {
  return (
    <section aria-label="Ringkasan pengalaman CBL" className="relative z-20 -mt-8 pb-14 md:-mt-12 md:pb-20">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl border border-[#D9E5EF] bg-white shadow-[0_24px_70px_-34px_rgba(15,41,66,0.4)]">
            {summaryItems.map((item, index) => (
              <div
                key={item.label}
                className="relative p-5 sm:p-6 lg:p-7 border-b border-r border-[#E2E8F0] even:border-r-0 lg:border-b-0 lg:even:border-r lg:last:border-r-0 last:border-b-0"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F7FD] text-[#0E6BA8]">
                  <DynamicIcon name={item.icon} size={20} />
                </div>
                <div className="text-xl sm:text-2xl font-black tracking-tight text-[#0F2942]">{item.value}</div>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#475569]">{item.label}</p>
                <span className="absolute right-4 top-4 text-[10px] font-bold text-[#0E6BA8]/35">0{index + 1}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
