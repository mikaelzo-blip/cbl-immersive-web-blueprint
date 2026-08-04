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
  'Demi menjaga keamanan data legalitas badan usaha dari penyalahgunaan di publik, nomor fisik dokumen perusahaan (NPWP, NIB, SIUP) tidak tercantum di halaman ini. Ketersediaan dan bentuk salinan berkas untuk registrasi vendor akan dikonfirmasi setelah permintaan resmi diterima.';

export const legalDocuments: LegalDocumentItem[] = [
  {
    id: 'akta-pendirian',
    title: 'Akta Pendirian dan Pendaftaran Badan Usaha',
    category: 'Legalitas Badan Usaha',
    description: 'Akta pendirian Persekutuan Komanditer dan bukti pendaftarannya pada Sistem Administrasi Badan Usaha telah diverifikasi secara internal.',
    availableOnRequest: true,
  },
  {
    id: 'nib',
    title: 'Nomor Induk Berusaha (NIB)',
    category: 'Perizinan Berusaha',
    description: 'Nomor Induk Berusaha perusahaan tersedia. Kesesuaian kegiatan dan persyaratan sektoral tetap diperiksa untuk setiap tender atau lingkup pekerjaan.',
    availableOnRequest: true,
  },
  {
    id: 'npwp-pkp',
    title: 'NPWP Perusahaan & Status Perpajakan',
    category: 'Kepatuhan Pajak',
    description: 'Dokumen NPWP dan pengukuhan PKP perusahaan telah diverifikasi secara internal; status pelaporan berkala tidak dinyatakan pada halaman publik.',
    availableOnRequest: true,
  },
];

export const k3Procedures: K3ProcedureStep[] = [
  {
    id: 'work-permit',
    title: 'Izin Kerja (Work Permit / PTW)',
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
    description: 'Penggunaan APD ditentukan oleh bahaya pekerjaan dan persyaratan lokasi, termasuk pelindung kepala, kaki, tangan, dan mata bila relevan.',
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
  'Laporan pengujian atau commissioning bila dipersyaratkan',
  'Gambar wiring / as-built bila termasuk ruang lingkup',
  'Rekomendasi tindak lanjut bila disepakati',
];

export const vendorRegistrationStatement = 
  'Arsip pekerjaan CBL memuat PO/SPK, surat jalan, BAST/BA, dan dokumen pendukung lain. Kelengkapan untuk registrasi vendor akan ditinjau terhadap persyaratan calon klien; dokumen sensitif disampaikan melalui kanal resmi, bukan halaman publik.';

export const companyProfileDoc: VendorDocDownload = {
  title: 'Company Profile & Dokumen Pengenalan CBL (PDF)',
  fileName: 'company-profile.pdf',
  available: false, // Belum ada di repo -> render tombol disabled "menyusul"
  note: 'Master company profile tersedia untuk verifikasi internal. Versi publik yang telah disanitasi dan disetujui belum tersedia untuk diunduh.',
};
