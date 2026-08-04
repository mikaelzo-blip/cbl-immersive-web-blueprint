export interface ContactFormData {
  name: string;
  company: string;
  position?: string;
  whatsapp: string;
  email?: string;
  serviceInterest: string;
  location: string;
  desiredSchedule?: string;
  message: string;
  agreedToTerms: boolean;
}

export interface ContactFormErrors {
  name?: string;
  company?: string;
  whatsapp?: string;
  email?: string;
  location?: string;
  message?: string;
  agreedToTerms?: string;
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Wajib mengisi nama lengkap (minimal 2 karakter).';
  }

  if (!data.company || data.company.trim().length < 2) {
    errors.company = 'Wajib mengisi nama perusahaan atau fasilitas.';
  }

  const phoneDigits = data.whatsapp.replace(/\D/g, '');
  if (!phoneDigits || phoneDigits.length < 9 || phoneDigits.length > 15) {
    errors.whatsapp = 'Masukkan nomor WhatsApp valid (minimal 9-15 digit angka).';
  }

  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Format alamat email tidak valid.';
    }
  }

  if (!data.location || data.location.trim().length < 2) {
    errors.location = 'Wajib mengisi lokasi pekerjaan atau kota.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Wajib menjelaskan pesan kebutuhan (minimal 10 karakter).';
  }

  if (!data.agreedToTerms) {
    errors.agreedToTerms = 'Anda wajib menyetujui persetujuan komunikasi.';
  }

  return errors;
}
