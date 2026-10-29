import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { companyInfo } from '@/data/company';

// Closing block of the homepage and detail pages: one call to action over a photo, then the direct channels. WhatsApp is the primary button, so it has no row.
export function ContactQuickSection({ whatsappHref }: { whatsappHref?: string }) {
  whatsappHref ??= `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo CBL, saya ingin konsultasi teknis kebutuhan fasilitas operasional kami.'
  )}`;
  const channels = [
    { icon: Phone, label: 'Telepon', value: companyInfo.phone, href: `tel:${companyInfo.phoneRaw}` },
    { icon: Mail, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: MapPin, label: 'Kantor', value: 'Tanjung Priok, Jakarta Utara', href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`, external: true },
  ];

  return (
    <section id="kontak" className="relative isolate overflow-hidden bg-[#0B1E31] py-24 text-white md:py-36">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/stock/gerinda-percikan.webp" alt="" fill data-parallax sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(8,22,38,0.7)_0%,rgba(8,22,38,0.88)_55%,rgba(8,22,38,0.96)_100%)]" />

      <Container>
        <h2 className="max-w-4xl text-[clamp(2.6rem,6.4vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          Ceritakan kondisi di lapangan.
        </h2>
        <p className="mt-5 text-sm text-[#C7D2DB] sm:text-base">{companyInfo.serviceHours}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#B34718] px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-[#8F3413] sm:text-base"
          >
            Konsultasi via WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-white hover:bg-white/10 sm:text-base"
          >
            Isi formulir konsultasi <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <ul data-stagger className="mt-16 border-t border-white/20 md:mt-24">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label} className="border-b border-white/20">
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 py-6 sm:py-7"
              >
                <Icon aria-hidden="true" className="size-6 shrink-0 text-[#F0A16F]" />
                <span className="w-28 shrink-0 text-sm text-[#9FB2C1] max-sm:hidden">{label}</span>
                <span className="min-w-0 flex-1 [overflow-wrap:anywhere] text-[clamp(1.05rem,4.3vw,2.6rem)] font-semibold tracking-[-0.03em] transition-[color,translate] duration-500 group-hover:translate-x-2 group-hover:text-[#F0A16F]">
                  {/* Let the email wrap after "@" instead of mid-domain. */}
                  {value.includes('@') ? value.split('@').map((part, i) => (i ? <span key={i}>@<wbr />{part}</span> : part)) : value}
                </span>
                <ArrowUpRight aria-hidden="true" className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
