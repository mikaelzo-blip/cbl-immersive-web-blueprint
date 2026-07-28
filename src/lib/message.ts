import { companyInfo } from '@/data/company';
import { ContactFormData } from './validation';

export function buildFormattedMessage(data: ContactFormData, pathname: string = '/'): string {
  const lines = [
    `*FORMULIR KONSULTASI TEKNIS — CBL*`,
    `--------------------------------------`,
    `*Nama:* ${data.name.trim()}`,
    `*Perusahaan/Fasilitas:* ${data.company.trim()}`,
    data.position ? `*Jabatan:* ${data.position.trim()}` : null,
    `*No. WhatsApp:* ${data.whatsapp.trim()}`,
    data.email ? `*Email:* ${data.email.trim()}` : null,
    `*Jenis Layanan:* ${data.serviceInterest}`,
    `*Lokasi Pekerjaan:* ${data.location.trim()}`,
    `--------------------------------------`,
    `*Pesan / Deskripsi Kebutuhan:*`,
    `${data.message.trim()}`,
    `--------------------------------------`,
    `*Halaman:* ${pathname}`,
  ].filter(Boolean);

  return lines.join('\n');
}

export function buildWhatsappUrl(data: ContactFormData, pathname: string = '/'): string {
  const targetNumber = companyInfo.whatsappNumber;
  const messageText = buildFormattedMessage(data, pathname);
  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(messageText)}`;
}

export function buildMailtoUrl(data: ContactFormData, pathname: string = '/'): string {
  const targetEmail = companyInfo.email;
  const subject = `Permintaan Konsultasi Teknis — ${data.company.trim()}`;
  const bodyText = buildFormattedMessage(data, pathname);
  return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
}
