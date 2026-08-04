'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { serviceDivisions } from '@/data/company';
import { Button } from '@/components/ui/Button';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { validateContactForm, type ContactFormData, type ContactFormErrors } from '@/lib/validation';
import { buildWhatsappUrl, buildMailtoUrl } from '@/lib/message';

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

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);

      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorElement = document.getElementById(firstErrorKey);
      errorElement?.focus();
      return;
    }

    setErrors({});
    const waUrl = buildWhatsappUrl(formData, pathname);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  const handleMailtoSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);

      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorElement = document.getElementById(firstErrorKey);
      errorElement?.focus();
      return;
    }

    setErrors({});
    const mailtoUrl = buildMailtoUrl(formData, pathname);
    window.location.href = mailtoUrl;
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleWhatsappSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-5"
      noValidate
      aria-label="Formulir Konsultasi Teknik"
    >
      <div>
        <h3 className="text-xl font-bold text-[#0F2942] tracking-tight">
          Formulir konsultasi teknis
        </h3>
        <p className="text-xs text-[#475569] mt-1">
          Lengkapi informasi berikut agar tim CBL dapat memahami kebutuhan awal Anda. Pesan dapat dikirim melalui WhatsApp atau email.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nama Lengkap */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-[#0F2942] mb-1">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Contoh: Ir. Budi Santoso"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
              errors.name ? 'border-red-500 bg-red-50/30' : 'border-[#E2E8F0] focus:border-[#0E6BA8]'
            } focus:outline-none transition-colors`}
            required
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        {/* Perusahaan / Gedung */}
        <div>
          <label htmlFor="company" className="block text-xs font-bold text-[#0F2942] mb-1">
            Perusahaan atau nama fasilitas <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Contoh: PT Mal Megah Sejahtera"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
              errors.company ? 'border-red-500 bg-red-50/30' : 'border-[#E2E8F0] focus:border-[#0E6BA8]'
            } focus:outline-none transition-colors`}
            required
          />
          {errors.company && (
            <p id="company-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
              {errors.company}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Jabatan (Opsional) */}
        <div>
          <label htmlFor="position" className="block text-xs font-bold text-[#0F2942] mb-1">
            Jabatan atau divisi <span className="text-[#475569] font-normal">(opsional)</span>
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Contoh: Chief Engineering"
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E2E8F0] focus:border-[#0E6BA8] focus:outline-none transition-colors"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="block text-xs font-bold text-[#0F2942] mb-1">
            Nomor WhatsApp aktif <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Contoh: 081234567890"
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
              errors.whatsapp ? 'border-red-500 bg-red-50/30' : 'border-[#E2E8F0] focus:border-[#0E6BA8]'
            } focus:outline-none transition-colors`}
            required
          />
          {errors.whatsapp && (
            <p id="whatsapp-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
              {errors.whatsapp}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email (Opsional) */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-[#0F2942] mb-1">
            Email <span className="text-[#475569] font-normal">(opsional, untuk permintaan penawaran)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="budi@perusahaan.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
              errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#E2E8F0] focus:border-[#0E6BA8]'
            } focus:outline-none transition-colors`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        {/* Jenis Kebutuhan */}
        <div>
          <label htmlFor="serviceInterest" className="block text-xs font-bold text-[#0F2942] mb-1">
            Layanan yang dibutuhkan <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E2E8F0] focus:border-[#0E6BA8] focus:outline-none transition-colors bg-white"
          >
            {serviceDivisions.map((div) => (
              <option key={div.id} value={div.title}>
                {div.title}
              </option>
            ))}
            <option value="Lainnya / Perbaikan Darurat">Layanan lain atau penanganan darurat</option>
          </select>
        </div>
      </div>

      {/* Lokasi Pekerjaan */}
      <div>
        <label htmlFor="location" className="block text-xs font-bold text-[#0F2942] mb-1">
          Lokasi pekerjaan atau kota <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Contoh: Tanjung Priok, Jakarta Utara"
          aria-invalid={!!errors.location}
          aria-describedby={errors.location ? 'location-error' : undefined}
          className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
            errors.location ? 'border-red-500 bg-red-50/30' : 'border-[#E2E8F0] focus:border-[#0E6BA8]'
          } focus:outline-none transition-colors`}
          required
        />
        {errors.location && (
          <p id="location-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
            {errors.location}
          </p>
        )}
      </div>

      {/* Pesan Kebutuhan */}
      <div>
        <label htmlFor="desiredSchedule" className="block text-xs font-bold text-[#0F2942] mb-1">
          Jadwal yang diharapkan <span className="text-[#475569] font-normal">(opsional)</span>
        </label>
        <input
          type="text"
          id="desiredSchedule"
          name="desiredSchedule"
          value={formData.desiredSchedule}
          onChange={handleChange}
          placeholder="Contoh: Survei minggu kedua Agustus 2026"
          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E2E8F0] focus:border-[#0E6BA8] focus:outline-none transition-colors"
        />
      </div>

      {/* Pesan Kebutuhan */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-[#0F2942] mb-1">
          Kondisi dan kebutuhan pekerjaan <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Jelaskan kondisi peralatan, kendala yang terjadi, serta hasil yang Anda harapkan."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
            errors.message ? 'border-red-500 bg-red-50/30' : 'border-[#E2E8F0] focus:border-[#0E6BA8]'
          } focus:outline-none transition-colors`}
          required
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      {/* Checkbox Persetujuan */}
      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            id="agreedToTerms"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            aria-invalid={!!errors.agreedToTerms}
            aria-describedby={errors.agreedToTerms ? 'agreedToTerms-error' : undefined}
            className="mt-1 w-4 h-4 text-[#0E6BA8] border-[#E2E8F0] rounded focus:ring-[#0E6BA8]"
          />
          <span className="text-xs text-[#475569] leading-tight">
            Saya menyetujui penggunaan informasi yang dikirimkan untuk keperluan komunikasi dan konsultasi proyek dengan CV Cakrawala Buana Lestari. Baca <Link href="/kebijakan-privasi" className="text-[#0E6BA8] underline font-semibold">Kebijakan Privasi</Link>. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.agreedToTerms && (
          <p id="agreedToTerms-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
            {errors.agreedToTerms}
          </p>
        )}
      </div>

      {/* Action Buttons: WhatsApp & Mailto */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <Button
          type="submit"
          variant="whatsapp"
          size="lg"
          className="w-full sm:flex-1"
          disabled={isSubmitting}
        >
          <DynamicIcon name="MessageSquare" size={20} />
          <span>Kirim melalui WhatsApp</span>
        </Button>

        <Button
          type="button"
          onClick={handleMailtoSubmit}
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          <DynamicIcon name="Mail" size={20} />
          <span>Kirim melalui email</span>
        </Button>
      </div>
    </form>
  );
}
