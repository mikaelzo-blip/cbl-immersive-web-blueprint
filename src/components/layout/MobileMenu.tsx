'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companyInfo, mainNavItems } from '@/data/company';
import { resolveSectionHref, cn } from '@/lib/utils';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  activeSection?: string;
  handleNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, itemHref: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  pathname,
  activeSection = '/',
  handleNavClick,
}: MobileMenuProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    modalRef.current?.querySelector<HTMLElement>('button[aria-label="Tutup menu"]')?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const checkIsActive = (itemHref: string) => {
    if (pathname === '/') {
      if (itemHref === '/') return activeSection === '/';
      if (itemHref.startsWith('#')) return activeSection === itemHref;
      return pathname === itemHref;
    }

    if (itemHref === '#layanan' && pathname.startsWith('/layanan/')) return true;
    if (itemHref === '/proyek' && pathname.startsWith('/proyek')) return true;
    return pathname === itemHref;
  };

  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo CBL, saya ingin konsultasi kebutuhan teknik fasilitas kami.'
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu Navigasi Seluler"
      id="mobile-navigation"
    >
      <div
        className="mobile-menu-backdrop fixed inset-0 bg-[#0F2942]/55"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className="mobile-menu-drawer fixed inset-y-0 right-0 z-10 flex w-full max-w-[23rem] flex-col justify-between overflow-y-auto border-l border-[#0F2942]/15 bg-[#F4F1EA] p-5 min-[390px]:p-6"
      >
        <div>
          <div className="flex items-center justify-between border-b border-[#0F2942]/15 pb-5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative h-9 w-9 shrink-0">
                <Image
                  src="/logo/cbl-logo.png"
                  alt="Logo CV Cakrawala Buana Lestari"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <span className="block truncate text-[0.95rem] font-semibold text-[#0F2942]">Cakrawala Buana Lestari</span>
                <span className="mt-0.5 block text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-[#6B7780]">Solusi teknis · Jakarta</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center text-[#0F2942] focus-visible:outline-[#0E6BA8]"
              aria-label="Tutup menu"
            >
              <DynamicIcon name="X" size={23} />
            </button>
          </div>

          <nav className="py-4" aria-label="Navigasi Seluler">
            {mainNavItems.map((item, index) => {
              const href = resolveSectionHref(item.href, pathname);
              const isActive = checkIsActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={href}
                  onClick={(e) => {
                    handleNavClick?.(e, item.href);
                    onClose();
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'grid min-h-12 grid-cols-[2.5rem_1fr_auto] items-center border-b border-[#0F2942]/12 py-3.5 text-[0.95rem] font-semibold transition-colors',
                    isActive ? 'text-[#B34718]' : 'text-[#0F2942] hover:text-[#B34718]'
                  )}
                >
                  <span className="text-[0.64rem] tracking-[0.12em] text-[#7A858D]">{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.label}</span>
                  <span aria-hidden="true">{isActive ? '—' : '→'}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-[#0F2942]/15 pt-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#6B7780]">Konsultasi proyek</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-3 inline-flex border-b border-[#B34718] pb-1 text-[0.95rem] font-semibold text-[#B34718]"
          >
            WhatsApp {companyInfo.whatsappFormatted} ↗
          </a>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            onClick={onClose}
            className="mt-4 block text-sm font-semibold text-[#0F2942]"
          >
            Telepon {companyInfo.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
