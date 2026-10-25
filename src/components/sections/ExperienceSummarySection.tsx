import { Container } from '@/components/ui/Container';
import { CountUp } from '@/components/ui/CountUp';

const experienceRegister = [
  { value: '74', label: 'Pekerjaan tercatat' },
  { value: '22', label: 'Elektrikal & otomasi' },
  { value: '15', label: 'Mekanikal wahana' },
  { value: '14', label: 'Pompa & sistem air' },
  { value: '09', label: 'HVAC & refrigerasi' },
];

export function ExperienceSummarySection() {
  return (
    // Same navy as the bottom of the hero, so the record reads as the hero's last line rather than a new block.
    <section aria-labelledby="experience-title" className="bg-[#081626] pb-12 pt-2 text-white md:pb-16 md:pt-4">
      <Container>
        <h2 id="experience-title" className="sr-only">Rekam proyek CBL 2022–2026</h2>
        <dl data-stagger className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {experienceRegister.map((item) => (
            <div key={item.label} className="flex flex-col-reverse border-t border-white/20 pt-4 first:col-span-2 sm:first:col-span-1">
              <dt className="mt-3 text-sm font-medium text-[#B9C6D1] sm:text-[0.95rem]">{item.label}</dt>
              <dd className="text-[clamp(2.6rem,5vw,4.2rem)] font-semibold leading-none tracking-[-0.04em]">
                <CountUp value={item.value} />
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-[#93A6B6]">Dihitung dari arsip PO, SPK, dan BAST 2022–2026.</p>
      </Container>
    </section>
  );
}
