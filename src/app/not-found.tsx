import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

export default function NotFound() {
  return (
    <div className="py-20 md:py-32 bg-[#F8FAFC] min-h-[70vh] flex items-center justify-center">
      <Container className="text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center mx-auto mb-6 shadow-sm">
          <DynamicIcon name="AlertTriangle" size={32} />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-[#0E6BA8] bg-[#F0F7FD] px-3 py-1 rounded-full border border-[#0E6BA8]/20 mb-3 inline-block">
          Error 404 — Halaman Tidak Ditemukan
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight mb-4 mt-2">
          Halaman yang Anda Cari Tidak Tersedia
        </h1>

        <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-8">
          Tautan yang Anda tuju mungkin telah dipindahkan, diubah jalurnya, atau belum dipublikasikan. Silakan kembali ke Beranda atau jelajahi indeks studi kasus proyek CBL.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            <DynamicIcon name="ChevronRight" size={16} className="rotate-180" />
            <span>Kembali ke Beranda</span>
          </Button>

          <Button href="/proyek" variant="outline" size="md">
            <DynamicIcon name="Folder" size={16} />
            <span>Jelajahi Indeks Portofolio</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
