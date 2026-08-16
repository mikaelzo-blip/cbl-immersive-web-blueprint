'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { serviceDivisions } from '@/data/company';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { validateContactForm, type ContactFormData, type ContactFormErrors } from '@/lib/validation';
import { buildWhatsappUrl, buildMailtoUrl } from '@/lib/message';

const fieldClass = 'w-full border-0 border-b border-[#0F2942]/25 bg-transparent px-0 py-3 text-sm text-[#0F2942] outline-none transition-colors placeholder:text-[#8A949B] focus:border-[#B34718]';
const errorFieldClass = 'w-full border-0 border-b border-red-500 bg-transparent px-0 py-3 text-sm text-[#0F2942] outline-none placeholder:text-[#8A949B]';

export function ContactForm() {
  const pathname = usePathname();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    position: '',
    whatsapp: '',
    email: '',
    serviceInterest: serviceDivisions[0].title,
    location: '',
    desiredSchedule: '',
    message: '',
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const focusFirstError = (validationErrors: ContactFormErrors) => {
    const firstErrorKey = Object.keys(validationErrors)[0];
    document.getElementById(firstErrorKey)?.focus();
  };

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      focusFirstError(validationErrors);
      return;
    }

    setErrors({});
    window.open(buildWhatsappUrl(formData, pathname), '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  const handleMailtoSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      focusFirstError(validationErrors);
      return;
    }

    setErrors({});
    window.location.href = buildMailtoUrl(formData, pathname);
    setIsSubmitting(false);
  };

  const labelClass = 'mb-1 block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#5F6D78]';
  const errorClass = 'mt-1 text-xs font-medium text-red-600';

  return (
    <form
      onSubmit={handleWhatsappSubmit}
      className="border-t border-[#0F2942]/25 pt-5"
      noValidate
      aria-label="Formulir Konsultasi Teknik"
    >
      <div className="mb-8">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#B34718]">Project brief</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0F2942] sm:text-3xl">Formulir konsultasi teknis.</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5F6D78]">Isi informasi yang tersedia. Pesan dapat diteruskan melalui WhatsApp atau email tanpa disimpan ke basis data aplikasi CBL.</p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Nama lengkap <span className="text-red-600">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nama Anda"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={errors.name ? errorFieldClass : fieldClass}
            required
          />
          {errors.name && <p id="name-error" role="alert" className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>Perusahaan atau fasilitas <span className="text-red-600">*</span></label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nama perusahaan / fasilitas"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={errors.company ? errorFieldClass : fieldClass}
            required
          />
          {errors.company && <p id="company-error" role="alert" className={errorClass}>{errors.company}</p>}
        </div>

        <div>
          <label htmlFor="position" className={labelClass}>Jabatan atau divisi <span className="normal-case tracking-normal text-[#7A858D]">(opsional)</span></label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Contoh: Engineering"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className={labelClass}>Nomor WhatsApp aktif <span className="text-red-600">*</span></label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="0812..."
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
            className={errors.whatsapp ? errorFieldClass : fieldClass}
            required
          />
          {errors.whatsapp && <p id="whatsapp-error" role="alert" className={errorClass}>{errors.whatsapp}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email <span className="normal-case tracking-normal text-[#7A858D]">(opsional)</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nama@perusahaan.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={errors.email ? errorFieldClass : fieldClass}
          />
          {errors.email && <p id="email-error" role="alert" className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="serviceInterest" className={labelClass}>Layanan yang dibutuhkan <span className="text-red-600">*</span></label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className={`${fieldClass} appearance-none`}
          >
            {serviceDivisions.map((division) => (
              <option key={division.id} value={division.title}>{division.title}</option>
            ))}
            <option value="Lainnya / Perbaikan Darurat">Layanan lain atau penanganan darurat</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className={labelClass}>Lokasi pekerjaan atau kota <span className="text-red-600">*</span></label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Contoh: Jakarta Utara"
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? 'location-error' : undefined}
            className={errors.location ? errorFieldClass : fieldClass}
            required
          />
          {errors.location && <p id="location-error" role="alert" className={errorClass}>{errors.location}</p>}
        </div>

        <div>
          <label htmlFor="desiredSchedule" className={labelClass}>Jadwal yang diharapkan <span className="normal-case tracking-normal text-[#7A858D]">(opsional)</span></label>
          <input
            type="text"
            id="desiredSchedule"
            name="desiredSchedule"
            value={formData.desiredSchedule}
            onChange={handleChange}
            placeholder="Perkiraan jadwal survei / pekerjaan"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="message" className={labelClass}>Kondisi dan kebutuhan pekerjaan <span className="text-red-600">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Jelaskan kondisi peralatan, kendala, spesifikasi yang tersedia, dan hasil yang diharapkan."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={errors.message ? errorFieldClass : fieldClass}
          required
        />
        {errors.message && <p id="message-error" role="alert" className={errorClass}>{errors.message}</p>}
      </div>

      <div className="mt-7 border-t border-[#0F2942]/15 pt-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            id="agreedToTerms"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            aria-invalid={!!errors.agreedToTerms}
            aria-describedby={errors.agreedToTerms ? 'agreedToTerms-error' : undefined}
            className="mt-1 h-4 w-4 rounded-sm border-[#0F2942]/30 text-[#B34718] focus:ring-[#B34718]"
          />
          <span className="text-xs leading-6 text-[#5F6D78]">
            Saya menyetujui penggunaan informasi yang dikirimkan untuk komunikasi dan konsultasi proyek dengan CV Cakrawala Buana Lestari. Baca{' '}
            <Link href="/kebijakan-privasi" className="font-semibold text-[#B34718] underline underline-offset-4">Kebijakan Privasi</Link>. <span className="text-red-600">*</span>
          </span>
        </label>
        {errors.agreedToTerms && <p id="agreedToTerms-error" role="alert" className={errorClass}>{errors.agreedToTerms}</p>}
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-[#0F2942]/15 pt-6 sm:flex-row">
        <Button type="submit" variant="whatsapp" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
          <DynamicIcon name="MessageSquare" size={18} />
          <span>Kirim melalui WhatsApp</span>
        </Button>
        <Button type="button" onClick={handleMailtoSubmit} variant="outline" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
          <DynamicIcon name="Mail" size={18} />
          <span>Kirim melalui email</span>
        </Button>
      </div>
    </form>
  );
}
