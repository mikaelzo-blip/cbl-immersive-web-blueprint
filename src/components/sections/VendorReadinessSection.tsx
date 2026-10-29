import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { legalDocuments } from '@/data/legal';

// Short register names for the four corporate documents, shown large; the full title sits underneath.
const documentCodes: Record<string, string> = {
  'akta-pendirian': 'Akta',
  nib: 'NIB',
  npwp: 'NPWP',
  pkp: 'PKP',
};

export function VendorReadinessSection() {
  const documents = legalDocuments.filter((document) => document.id in documentCodes);

  return (
    <section className="border-b border-[#0F2942]/15 bg-white py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:items-end lg:gap-16">
        <div>
          <h2 className="max-w-md text-[clamp(2.4rem,3vw,2.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#0F2942]">
            Dokumen siap untuk registrasi vendor.
          </h2>
          <Link
            href="/legalitas"
            className="mt-5 inline-flex items-center gap-2 hit-area border-b border-[#B34718] pb-1 text-sm font-semibold text-[#B34718] transition-colors hover:text-[#8F3413]"
          >
            Lihat dokumen legalitas <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <ul data-stagger className="grid grid-cols-2 gap-y-6 border-t border-[#0F2942]/20 sm:grid-cols-4">
          {documents.map((document, index) => (
            <li
              key={document.id}
              // 2×2 on phones (rows start at 0 and 2), one row of four from sm.
              className={`border-l border-[#0F2942]/20 px-4 pt-5 sm:px-5 ${index === 0 ? 'border-l-0 pl-0 sm:pl-0' : index === 2 ? 'max-sm:border-l-0 max-sm:pl-0' : ''}`}
            >
              <span className="block text-[clamp(2rem,3.2vw,2.9rem)] font-semibold leading-none tracking-[-0.04em] text-[#0F2942]">
                {documentCodes[document.id]}
              </span>
              <span className="mt-3 block text-xs leading-snug text-[#536474] sm:text-sm">{document.title}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
