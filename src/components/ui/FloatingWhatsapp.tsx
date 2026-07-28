'use client';

import React from 'react';
import { companyInfo } from '@/data/company';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export function FloatingWhatsapp() {
  const defaultText = 'Halo CBL, saya mau konsultasi kebutuhan teknik fasilitas kami.';
  const waUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat WhatsApp Siaga 24 Jam (${companyInfo.whatsappFormatted})`}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#F97316] text-white font-bold text-sm rounded-full shadow-2xl hover:bg-[#EA580C] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#F97316] group"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <DynamicIcon name="MessageSquare" size={20} />
      <span className="hidden sm:inline">WhatsApp 24/7</span>
    </a>
  );
}
