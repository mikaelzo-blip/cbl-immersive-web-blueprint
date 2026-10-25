'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { companyInfo } from '@/data/company';
import { cn } from '@/lib/utils';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export function FloatingWhatsapp() {
  const pathname = usePathname();
  // Phones: stay out of the first screen so the button never covers the hero CTAs (they already offer WhatsApp).
  const [isPastFold, setIsPastFold] = useState(false);

  useEffect(() => {
    const update = () => setIsPastFold(window.scrollY > window.innerHeight * 0.6);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  // The consultation page has its own WhatsApp submit; a floating button would sit on top of the form.
  if (pathname === '/kontak') return null;

  const defaultText = 'Halo CBL, saya mau konsultasi kebutuhan teknik fasilitas kami.';
  const waUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat WhatsApp CBL (${companyInfo.whatsappFormatted})`}
      className={cn(
        'fixed bottom-4 right-4 z-40 flex size-12 items-center justify-center gap-2.5 bg-[#C2410C] sm:bottom-6 sm:right-6 sm:size-auto sm:px-4 sm:py-3 text-white font-bold text-sm rounded-full shadow-2xl hover:bg-[#9A3412] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#C2410C] group',
        !isPastFold && 'max-md:invisible max-md:translate-y-24 max-md:opacity-0'
      )}
    >
      <span className="relative hidden h-3 w-3 sm:flex">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <DynamicIcon name="MessageSquare" size={20} />
      <span className="hidden sm:inline">WhatsApp CBL</span>
    </a>
  );
}
