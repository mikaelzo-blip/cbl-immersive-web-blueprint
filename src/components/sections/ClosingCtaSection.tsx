import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { companyInfo } from '@/data/company';
import { Reveal } from '@/components/ui/Reveal';

export function ClosingCtaSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#0F2942] via-[#15426B] to-[#0E6BA8] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00A8CC]/20 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10 text-center max-w-5xl mx-auto">
        <Reveal>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A8CC]/20 text-[#67E8F9] text-xs font-semibold mb-6">
          <DynamicIcon name="Zap" size={14} />
          <span>Mulai dari kondisi yang Anda hadapi</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
          Mari tentukan langkah penanganan yang sesuai untuk fasilitas Anda.
        </h2>

        <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed max-w-2xl mx-auto mb-8">
          Ceritakan kondisi awal, lokasi, serta target pekerjaan. Tim CBL akan membantu memperjelas kebutuhan dan menyusun pilihan tindak lanjut yang relevan.
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
            <span>Konsultasi melalui WhatsApp</span>
          </Button>

          <Button
            href={`tel:${companyInfo.phoneRaw}`}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10"
          >
            <DynamicIcon name="Phone" size={20} />
            <span>Hubungi {companyInfo.phone}</span>
          </Button>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
