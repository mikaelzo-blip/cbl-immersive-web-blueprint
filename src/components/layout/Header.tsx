'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { companyInfo, mainNavItems } from '@/data/company';
import { resolveSectionHref, isNavItemActive, cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { MobileMenu } from './MobileMenu';

// Homepage section id -> nav href it lights up. Nav items link to their own pages but still track the matching homepage section.
const homeSectionNav: Record<string, string> = {
  layanan: '/layanan',
  proyek: '/proyek',
  kontak: '/kontak',
};

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

      if (window.scrollY < 200) {
        setActiveSection('/');
        return;
      }

      // The section crossing a line 40% down the viewport wins; sections without a nav item leave nothing active.
      const line = window.innerHeight * 0.4;
      let current = '';
      for (const [id, navHref] of Object.entries(homeSectionNav)) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (rect && rect.top <= line && rect.bottom > line) {
          current = navHref;
          break;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  const scrollBehavior = (): ScrollBehavior =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, itemHref: string) => {
    if (pathname === '/' && itemHref.startsWith('#')) {
      e.preventDefault();
      const sectionId = itemHref.substring(1);
      const targetEl = document.getElementById(sectionId);
      if (targetEl) {
        // Header clearance comes from `scroll-padding-top` in globals.css.
        targetEl.scrollIntoView({ behavior: scrollBehavior() });
        window.history.pushState(null, '', `/#${sectionId}`);
        setActiveSection(itemHref);
      }
    } else if (pathname === '/' && itemHref === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: scrollBehavior() });
      window.history.pushState(null, '', '/');
      setActiveSection('/');
    }
  };

  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo CBL, saya ingin konsultasi kebutuhan teknik fasilitas kami.'
  )}`;

  // On the homepage the header floats over the full-screen hero photo, transparent with white type, until the page scrolls.
  const isHome = pathname === '/';
  const overHero = isHome && !isScrolled;

  return (
    <>
      <header
        className={cn(
          'top-0 z-40 w-full border-b transition-[padding,border-color,background-color] duration-300',
          isHome ? 'fixed inset-x-0' : 'sticky',
          overHero ? 'bg-transparent' : 'bg-[#F4F1EA]/96',
          isScrolled ? 'border-[#0F2942]/15 py-2.5 backdrop-blur-md' : 'border-transparent py-3.5'
        )}
      >
        <Container className="flex items-center justify-between gap-5 xl:gap-7">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex min-w-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#0E6BA8]"
          >
            <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11 xl:h-12 xl:w-12">
              <Image
                src="/logo/cbl-logo.png"
                alt="Logo CV Cakrawala Buana Lestari"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="min-w-0">
              <span className={cn('block truncate text-[0.9rem] font-semibold tracking-[-0.02em] transition-colors duration-300 sm:text-base xl:text-[1.02rem]', overHero ? 'text-white' : 'text-[#0F2942]')}>
                Cakrawala Buana Lestari
              </span>
              <span className={cn('mt-0.5 hidden text-[0.75rem] font-semibold uppercase tracking-[0.13em] sm:block', overHero ? 'text-white/70' : 'text-[#5F6D78]')}>
                Solusi teknis · Jakarta
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex 2xl:gap-6" aria-label="Navigasi Utama">
            {mainNavItems.map((item) => {
              const href = resolveSectionHref(item.href, pathname);
              const isActive = isNavItemActive(item.href, pathname, activeSection);

              return (
                <Link
                  key={item.label}
                  href={href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? (pathname === '/' && item.href !== '/' ? 'location' : 'page') : undefined}
                  className={cn(
                    'border-b py-1 text-[0.875rem] font-semibold transition-colors duration-150',
                    overHero
                      ? isActive
                        ? 'border-[#F0A16F] text-white'
                        : 'border-transparent text-white/75 hover:border-white/40 hover:text-white'
                      : isActive
                        ? 'border-[#B34718] text-[#0F2942]'
                        : 'border-transparent text-[#5F6D78] hover:border-[#0F2942]/30 hover:text-[#0F2942]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 xl:flex xl:items-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'hit-area border-b pb-1 text-[0.875rem] font-semibold transition-colors',
                overHero ? 'border-[#F0A16F] text-[#F0A16F] hover:text-white' : 'border-[#B34718] text-[#B34718] hover:text-[#8F3413]'
              )}
            >
              Diskusikan proyek ↗
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn('-mr-1 flex h-11 w-11 items-center justify-center transition-colors duration-300 xl:hidden', overHero ? 'text-white' : 'text-[#0F2942]')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Buka menu navigasi"
          >
            <DynamicIcon name="Menu" size={25} />
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
