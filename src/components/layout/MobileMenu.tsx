'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companyInfo, mainNavItems } from '@/data/company';
import { resolveSectionHref, cn } from '@/lib/utils';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { Button } from '@/components/ui/Button';

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

  // Focus trap & Escape key listener
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

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    const closeBtn = modalRef.current?.querySelector<HTMLElement>('button[aria-label="Tutup menu"]');
    closeBtn?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu Navigasi Seluler"
      id="mobile-navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0F2942]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Content */}
      <div
        ref={modalRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto"
      >
        <div>
          {/* Menu Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/logo/cbl-logo.png"
                  alt="Logo CV Cakrawala Buana Lestari"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-[#0F2942] text-sm">
                CV Cakrawala Buana Lestari
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#475569] hover:text-[#0F2942] hover:bg-[#F8FAFC] rounded-lg focus-visible:outline-[#0E6BA8]"
              aria-label="Tutup menu"
            >
              <DynamicIcon name="X" size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 flex flex-col gap-1" aria-label="Navigasi Seluler">
            {mainNavItems.map((item) => {
              const href = resolveSectionHref(item.href, pathname);
              const isActive = checkIsActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={href}
                  onClick={(e) => {
                    if (handleNavClick) {
                      handleNavClick(e, item.href);
                    }
                    onClose();
                  }}
                  className={cn(
                    'px-4 py-3 text-base font-semibold rounded-xl transition-colors flex items-center justify-between',
                    isActive
                      ? 'text-[#0E6BA8] bg-[#F0F7FD] font-bold'
                      : 'text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#0E6BA8]'
                  )}
                >
                  <span>{item.label}</span>
                  <DynamicIcon name="ChevronRight" size={18} className="text-[#475569]/60" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Menu Footer CTA */}
        <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
          <div className="text-xs text-[#475569] font-medium">
            Konsultasi kebutuhan proyek:
          </div>
          <Button
            href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
              'Halo CBL, saya ingin konsultasi kebutuhan teknik fasilitas kami.'
            )}`}
            external
            variant="whatsapp"
            fullWidth
            onClick={onClose}
          >
            <DynamicIcon name="MessageSquare" size={18} />
            <span>Chat WhatsApp ({companyInfo.whatsappFormatted})</span>
          </Button>

          <Button
            href={`tel:${companyInfo.phoneRaw}`}
            variant="outline"
            fullWidth
            onClick={onClose}
          >
            <DynamicIcon name="Phone" size={18} />
            <span>Hubungi Telepon: {companyInfo.phone}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
