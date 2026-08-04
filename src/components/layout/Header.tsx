'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { companyInfo, mainNavItems } from '@/data/company';
import { resolveSectionHref, cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
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
      
      // If near top of page, active section is home '/'
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
      if (itemHref === '/') {
        return activeSection === '/';
      }
      if (itemHref.startsWith('#')) {
        return activeSection === itemHref;
      }
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

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
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

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md border-b',
          isScrolled ? 'border-[#E2E8F0] shadow-sm py-3' : 'border-transparent py-4'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo Perusahaan */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#0E6BA8] rounded-lg"
          >
            <div className="relative w-10 h-10 shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/logo/cbl-logo.png"
                alt="Logo CV Cakrawala Buana Lestari"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[#0F2942] tracking-tight text-base sm:text-lg leading-none">
                {companyInfo.legalName}
              </span>
              <span className="text-xs text-[#475569] font-medium tracking-wide mt-1">
                Jasa Teknik &amp; Otomasi Terpadu
              </span>
            </div>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi Utama">
            {mainNavItems.map((item) => {
              const href = resolveSectionHref(item.href, pathname);
              const isActive = checkIsActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150',
                    isActive
                      ? 'text-[#0E6BA8] bg-[#F0F7FD] font-bold shadow-2xs'
                      : 'text-[#0F172A] hover:text-[#0E6BA8] hover:bg-[#F8FAFC]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
                'Halo CBL, saya ingin konsultasi kebutuhan teknik fasilitas kami.'
              )}`}
              external
              variant="whatsapp"
              size="sm"
            >
              <DynamicIcon name="MessageSquare" size={16} />
              <span>{companyInfo.whatsappFormatted}</span>
            </Button>
          </div>

          {/* Tombol Hamburger Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#0F2942] hover:bg-[#F8FAFC] rounded-lg focus-visible:outline-[#0E6BA8]"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Buka menu navigasi"
          >
            <DynamicIcon name="Menu" size={24} />
          </button>
        </Container>
      </header>

      {/* Menu Mobile */}
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
