import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { companyInfo } from '@/data/company';

export function ClosingCtaSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#0F2942] via-[#15426B] to-[#0E6BA8] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00A8CC]/20 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A8CC]/20 text-[#67E8F9] text-xs font-semibold mb-6">
          <DynamicIcon name="Zap" size={14} />
          <span>Respon Konsultasi Langsung Tim Engineering</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
          Butuh Penanganan Kelistrikan, Otomasi, atau Perawatan Peralatan Fasilitas?
        </h2>

        <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed max-w-2xl mx-auto mb-8">
          Diskusikan gejala kerusakan atau rencana penambahan kapasitas dengan tim CBL. Kami siap melakukan peninjauan teknis awal di lokasi kerja Anda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
              'Halo CBL, saya ingin konsultasi teknis kebutuhan fasilitas operasional kami.'
            )}`}
            external
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          >
            <DynamicIcon name="MessageSquare" size={20} />
            <span>Chat WhatsApp Fast Response</span>
          </Button>

          <Button
            href={`tel:${companyInfo.phoneRaw}`}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10"
          >
            <DynamicIcon name="Phone" size={20} />
            <span>Telepon Langsung ({companyInfo.phone})</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
