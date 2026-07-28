import { companyInfo } from '@/data/company';
import { ContactFormData } from './validation';
import { buildWhatsappUrl as buildWaFromMessage } from './message';

export function buildWhatsappUrl(data: ContactFormData, pathname: string = '/'): string {
  return buildWaFromMessage(data, pathname);
}

export function buildProjectWhatsappUrl(projectTitle: string, pathname: string = '/proyek'): string {
  const targetNumber = companyInfo.whatsappNumber;
  const text = `Halo CBL, saya berminat berkonsultasi mengenai studi kasus penanganan teknis: *${projectTitle}*. Mohon informasi ketersediaan peninjauan di lokasi kami.\n\nHalaman: ${pathname}`;
  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
}
