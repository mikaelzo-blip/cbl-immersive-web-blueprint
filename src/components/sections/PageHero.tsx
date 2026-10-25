import Link from 'next/link';
import { Container } from '@/components/ui/Container';

type PageHeroProps = {
  /** Breadcrumb label for the current page. */
  label: string;
  /** Optional middle breadcrumb, for detail pages under an index. */
  parent?: { href: string; label: string };
  /** Each entry is one masked line of the h1, like the homepage hero. */
  titleLines: string[];
  lead?: string;
  children?: React.ReactNode;
};

// Inner-page title block: no photo, just the homepage's masked headline, one short sentence and optional actions.
export function PageHero({ label, parent, titleLines, lead, children }: PageHeroProps) {
  return (
    <section className="border-b border-[#0F2942]/15 bg-[#F4F1EA] text-[#0F2942]">
      <Container className="pb-12 pt-12 md:pb-16 md:pt-20">
        <nav aria-label="Breadcrumb" className="hero-enter mb-8 flex items-center gap-2 text-sm text-[#5F6D78]">
          <Link href="/" className="hover:text-[#B34718]">Beranda</Link>
          <span aria-hidden="true">/</span>
          {parent && (
            <>
              <Link href={parent.href} className="hover:text-[#B34718]">{parent.label}</Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span className="min-w-0 truncate font-semibold text-[#0F2942]">{label}</span>
        </nav>

        <h1 className="max-w-5xl text-[clamp(2.6rem,7.4vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
          {titleLines.map((line, index) => (
            <span key={line} className="hero-line">
              <span style={{ '--i': index } as React.CSSProperties}>{line}</span>
            </span>
          ))}
        </h1>

        {lead && <p className="hero-enter hero-enter-delayed mt-7 max-w-xl text-base leading-7 text-[#5F6D78] sm:text-lg">{lead}</p>}
        {children && <div className="hero-enter hero-enter-delayed mt-9">{children}</div>}
      </Container>
    </section>
  );
}
