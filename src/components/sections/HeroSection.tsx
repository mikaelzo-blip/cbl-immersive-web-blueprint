import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { companyInfo } from '@/data/company';

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden border-b border-[#E2E8F0] bg-white">
      {/* Dokumentasi proyek sebagai latar hero; dioptimalkan oleh next/image. */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <Image
          src="/images/projects/penggantian-dc-drive-motor/01.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        {/* Layer Overlay Putih Transparan (Video Jelas Terlihat & Teks Tetap Tajam) */}
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FD]/30 via-white/45 to-white/90" />
      </div>

      {/* 2. Background Decorative Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-1">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="45" height="45" patternUnits="userSpaceOnUse">
              <path d="M 45 0 L 0 0 0 45" fill="none" stroke="#0E6BA8" strokeWidth="0.5" strokeOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* 3. Hero Content (Jelas, Tajam, & Kontras di Atas Video Latar) */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Rentang pengalaman yang didukung register proyek. */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#0E6BA8]/30 text-[#0E6BA8] text-xs font-bold mb-6 shadow-sm backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span>Rekam pekerjaan terverifikasi 2022-2026</span>
          </div>

          {/* Heading Utama */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2942] tracking-tight leading-[1.15] mb-6 drop-shadow-sm">
            Solusi Engineering, Maintenance &amp; Otomasi Fasilitas
          </h1>

          {/* Subtitle Deskriptif */}
          <p className="text-base sm:text-lg md:text-xl text-[#0F2942] font-semibold leading-relaxed max-w-3xl mb-8 drop-shadow-xs">
            CBL menangani kebutuhan kelistrikan, panel kontrol, otomasi, mekanikal, HVAC, pompa, dan pencahayaan—mulai dari pengadaan, pemasangan, perbaikan, pemeriksaan, hingga serah terima.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Button
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
                'Halo CBL, saya mau konsultasi kebutuhan teknik fasilitas kami.'
              )}`}
              external
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto shadow-md font-bold"
            >
              <DynamicIcon name="MessageSquare" size={20} />
              <span>Minta Survei Lokasi</span>
            </Button>

            <Button
              href="#layanan"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/90 backdrop-blur-xs shadow-xs font-bold"
            >
              <DynamicIcon name="Wrench" size={20} />
              <span>Lihat Layanan Kami</span>
            </Button>
          </div>

          {/* Grid Quick Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 w-full pt-8 border-t border-[#E2E8F0]/80">
            {[
              { label: 'Kelistrikan & Panel', icon: 'Zap' },
              { label: 'Otomasi & PLC', icon: 'Cpu' },
              { label: 'Mekanikal Presisi', icon: 'Wrench' },
              { label: 'HVAC & Refrigerasi', icon: 'Wind' },
              { label: 'Pompa & Perairan', icon: 'Droplets' },
              { label: 'Pencahayaan Show', icon: 'Lightbulb' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-3 rounded-xl bg-white/95 border border-[#E2E8F0] shadow-sm hover:border-[#0E6BA8]/50 backdrop-blur-xs transition-all hover:-translate-y-0.5"
              >
                <DynamicIcon name={item.icon} size={22} className="text-[#0E6BA8] mb-1.5" />
                <span className="text-xs font-bold text-[#0F2942] text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
