/**
 * ============================================================================
 * CATATAN DRAF LEGALITAS & K3 — CV CAKRAWALA BUANA LESTARI (CBL)
 * ============================================================================
 * STATUS: DRAF DOKUMENTASI REGISTRASI VENDOR INTERNAL
 * 
 * ATURAN KERAHASIAAN & PRIVASI (STRIKT PATUHI SPEC.md §9 & §14):
 * 1. DILARANG MENULISKAN NOMOR NIB, NPWP, AKTA, ATAU NOMOR IZIN KELIKATAN DI REPO PUBLIC.
 * 2. Seluruh perincian dokumen umum hanya menyebutkan *jenis* berkas yang dimiliki.
 * 3. Salinan berkas fisik ber-stempel legalitas hanya dikirimkan atas permintaan resmi
 *    untuk keperluan proses Registrasi Vendor (Vendor Onboarding).
 * 4. Kualifikasi teknisi dan sertifikasi yang belum dikonfirmasi dibiarkan kosong/draf.
 * ============================================================================
 */

import { LegalDocumentItem, K3ProcedureStep, VendorDocDownload } from '@/types/legal';

export const legalNotice = 
  'Demi menjaga keamanan data legalitas badan usaha dari penyalahgunaan di publik, nomor fisik dokumen perusahaan (NPWP, NIB, SIUP) tidak tercantum di halaman ini. Salinan berkas lengkap yang telah dilegalisir dapat kami kirimkan atas permintaan resmi untuk keperluan registrasi vendor (Vendor Registration / Procurement Onboarding).';

export const legalDocuments: LegalDocumentItem[] = [
  {
    id: 'akta-pendirian',
    title: 'Akta Pendirian Perusahaan & Perubahan',
    category: 'Legalitas Badan Usaha',
    description: 'Dokumen pendirian badan hukum CV Cakrawala Buana Lestari terdaftar resmi di Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia.',
    availableOnRequest: true,
  },
  {
    id: 'nib',
    title: 'Nomor Induk Berusaha (NIB)',
    category: 'Perizinan Berusaha',
    description: 'NIB resmi sebagai identitas pelaku usaha di bidang jasa teknik, kelistrikan, perdagangan suku cadang, dan pemeliharaan fasilitas.',
    availableOnRequest: true,
  },
  {
    id: 'npwp-pkp',
    title: 'NPWP Perusahaan & Status Perpajakan',
    category: 'Kepatuhan Pajak',
    description: 'Kartu Pokok Wajib Pajak atas nama CV Cakrawala Buana Lestari dengan kepatuhan pelaporan kewajiban perpajakan berkala.',
    availableOnRequest: true,
  },
  {
    id: 'domisili-izin',
    title: 'Surat Keterangan Domisili & Izin Operasional',
    category: 'Kelayakan Tempat Usaha',
    description: 'Keterangan domisili kantor resmi di Tanjung Priok, Jakarta Utara, dilengkapi izin operasional tempat kerja.',
    availableOnRequest: true,
  },
];

export const k3Procedures: K3ProcedureStep[] = [
  {
    id: 'work-permit',
    title: 'Ijin Kerja (Work Permit / PTW)',
    description: 'Penerbitan dokumen izin kerja aman sebelum memasuki area kerja berisiko tinggi di fasilitas mitra.',
    iconName: 'FileCheck',
  },
  {
    id: 'safety-induction',
    title: 'Safety Induction & Briefing',
    description: 'Pengarahan keselamatan awal bagi tim teknis mengenai potensi bahaya lokasi dan rute evakuasi darurat.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'apd-standard',
    title: 'Penggunaan APD Lengkap (PPE)',
    description: 'Wajib mengggunakan Helm K3, Sepatu Safety Insulated (tahan listrik), Sarung Tangan Isolasi, dan Kacamata Pelindung.',
    iconName: 'UserCheck',
  },
  {
    id: 'loto-procedure',
    title: 'Prosedur LOTO (Lockout / Tagout)',
    description: 'Penguncian dan penandaan sakelar kelistrikan / katup tekanan sebelum pengerjaan perawatan untuk mencegah penyalaan tak disengaja.',
    iconName: 'Lock',
  },
  {
    id: 'facility-coordination',
    title: 'Koordinasi Tim Fasilitas Setempat',
    description: 'Komunikasi berkelanjutan dengan Chief Engineering / HSE gedung mengenai jadwal pemadaman bergilir atau pengujian beban.',
    iconName: 'Users',
  },
];

export const handoverDocs = [
  'Surat Pesanan / Order Pekerjaan (PO / SPK)',
  'Berita Acara Serah Terima Pekerjaan (BAST)',
  'Laporan Pengujian Parameter Teknis (Test & Commissioning Report)',
  'Skema Wiring Terbarukan / As-Built Drawing Diagram',
  'Rekomendasi Pemeliharaan Preventif Berkala',
];

export const vendorRegistrationStatement = 
  'CV Cakrawala Buana Lestari menyatakan siap dan berpengalaman mengikuti prosedur Registrasi Vendor (Vendor Registration / Procurement Onboarding) pada gedung komersial, pengelola area rekreasi, serta perusahaan manufaktur. Kami menyediakan seluruh berkas administrasi pendukung yang disyaratkan oleh tim pengadaan (procurement).';

export const companyProfileDoc: VendorDocDownload = {
  title: 'Company Profile & Dokumen Pengenalan CBL (PDF)',
  fileName: 'company-profile.pdf',
  available: false, // Belum ada di repo -> render tombol disabled "menyusul"
  note: 'Berkas digital Company Profile dalam bentuk dokumen PDF sedang dalam tahap penyelarasan versi cetak terbaru (Menyusul).',
};
