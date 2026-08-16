'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { companyInfo, mainNavItems } from '@/data/company';
import { resolveSectionHref, cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('/');
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname !== '/') return;

      const sections = ['layanan', 'keahlian', 'cara-kerja', 'mengapa-cbl', 'kontak'];

      if (window.scrollY < 200) {
        setActiveSection('/');
        return;
      }

      const scrollPosition = window.scrollY + 140;
      let current = '/';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const checkIsActive = (itemHref: string) => {
    if (pathname === '/') {
      if (itemHref === '/') return activeSection === '/';
      if (itemHref.startsWith('#')) return activeSection === itemHref;
      return pathname === itemHref;
    }
    return pathname === itemHref;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, itemHref: string) => {
    if (pathname === '/' && itemHref.startsWith('#')) {
      e.preventDefault();
      const sectionId = itemHref.substring(1);
      const targetEl = document.getElementById(sectionId);
      if (targetEl) {
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        window.history.pushState(null, '', `/#${sectionId}`);
        setActiveSection(itemHref);
      }
    } else if (pathname === '/' && itemHref === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      setActiveSection('/');
    }
  };

  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo CBL, saya ingin konsultasi kebutuhan teknik fasilitas kami.'
  )}`;

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full border-b bg-[#F4F1EA]/96 transition-[padding,border-color,background-color] duration-200',
          isScrolled ? 'border-[#0F2942]/15 py-3 backdrop-blur-md' : 'border-transparent py-4'
        )}
      >
        <Container className="flex items-center justify-between gap-8">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex min-w-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#0E6BA8]"
          >
            <div className="relative h-9 w-9 shrink-0 sm:h-10 sm:w-10">
              <Image
                src="/logo/cbl-logo.png"
                alt="Logo CV Cakrawala Buana Lestari"
                width={40}
                height={40}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[-0.02em] text-[#0F2942] sm:text-base">
                Cakrawala Buana Lestari
              </span>
              <span className="mt-0.5 hidden text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780] sm:block">
                Technical solutions · Jakarta
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Navigasi Utama">
            {mainNavItems.map((item) => {
              const href = resolveSectionHref(item.href, pathname);
              const isActive = checkIsActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'border-b py-1 text-xs font-semibold transition-colors duration-150',
                    isActive
                      ? 'border-[#B34718] text-[#0F2942]'
                      : 'border-transparent text-[#5F6D78] hover:border-[#0F2942]/30 hover:text-[#0F2942]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 lg:flex lg:items-center lg:gap-5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[#B34718] pb-1 text-xs font-semibold text-[#B34718] transition-colors hover:text-[#8F3413]"
            >
              Diskusikan proyek ↗
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-[#0F2942] lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Buka menu navigasi"
          >
            <DynamicIcon name="Menu" size={24} />
          </button>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        pathname={pathname}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />
    </>
  );
}
