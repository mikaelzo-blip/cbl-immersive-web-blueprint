import React from 'react';
import Link from 'next/link';
import { ServiceDivision } from '@/types/company';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: ServiceDivision;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between p-6 sm:p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm card-hover-lift overflow-hidden h-full',
        className
      )}
    >
      <div>
        {/* Header Kartu: Ikon & Judul */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center group-hover:bg-[#0E6BA8] group-hover:text-white transition-colors duration-200 shadow-xs shrink-0">
            <DynamicIcon name={service.iconName} size={26} />
          </div>
          <h3 className="text-xl font-bold text-[#0F2942] tracking-tight group-hover:text-[#0E6BA8] transition-colors leading-snug">
            <Link href={`/layanan/${service.slug}`} className="focus-visible:outline-none">
              {service.title}
            </Link>
          </h3>
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-[#475569] leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Daftar Kapabilitas */}
        <div className="border-t border-[#E2E8F0] pt-4 mb-6">
          <span className="text-xs font-bold text-[#0F2942] uppercase tracking-wider block mb-3">
            Cakram Kapabilitas Teknis:
          </span>
          <ul className="space-y-2 text-xs text-[#475569]">
            {service.capabilities.map((capability, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <DynamicIcon name="CheckCircle2" size={15} className="text-[#0E6BA8] shrink-0 mt-0.5" />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Link ke Halaman Layanan Detail */}
      <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between mt-auto">
        <Link
          href={`/layanan/${service.slug}`}
          className="text-xs font-bold text-[#0E6BA8] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
        >
          <span>Detail Layanan &amp; Penanganan</span>
          <DynamicIcon name="ArrowRight" size={14} />
        </Link>
      </div>

      {/* Visual Accent Line Gradient di tepi bawah kartu */}
      <div className="absolute bottom-0 left-0 right-0 h-1 accent-line-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
