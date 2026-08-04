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
  'Untuk mengurangi risiko penyalahgunaan data, nomor dokumen perusahaan seperti NPWP, NIB, dan perizinan lain tidak ditampilkan pada halaman publik. Ketersediaan salinan dokumen untuk registrasi vendor akan dikonfirmasi setelah permintaan resmi diterima.';

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
    description: 'Nomor Induk Berusaha perusahaan tersedia. Kesesuaian kegiatan usaha dan persyaratan sektoral tetap diperiksa untuk setiap tender atau cakupan pekerjaan.',
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
    title: 'Izin Kerja (Permit to Work / PTW)',
    description: 'Penerbitan dokumen izin kerja aman sebelum memasuki area kerja berisiko tinggi di fasilitas mitra.',
    iconName: 'FileCheck',
  },
  {
    id: 'safety-induction',
    title: 'Induksi & Pengarahan Keselamatan',
    description: 'Pengarahan awal kepada tim teknis mengenai potensi bahaya, ketentuan lokasi, dan rute evakuasi darurat.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'apd-standard',
    title: 'Penggunaan Alat Pelindung Diri (APD)',
    description: 'Penggunaan APD ditentukan oleh bahaya pekerjaan dan persyaratan lokasi, termasuk pelindung kepala, kaki, tangan, dan mata bila relevan.',
    iconName: 'UserCheck',
  },
  {
    id: 'loto-procedure',
    title: 'Prosedur Penguncian dan Penandaan (LOTO)',
    description: 'Penguncian dan penandaan sakelar kelistrikan / katup tekanan sebelum pengerjaan perawatan untuk mencegah penyalaan tak disengaja.',
    iconName: 'Lock',
  },
  {
    id: 'facility-coordination',
    title: 'Koordinasi Tim Fasilitas Setempat',
    description: 'Koordinasi dengan tim engineering atau HSE setempat mengenai akses kerja, jadwal penghentian sistem, dan rencana pengujian.',
    iconName: 'Users',
  },
];

export const handoverDocs = [
  'Surat Pesanan / Order Pekerjaan (PO / SPK)',
  'Berita Acara Serah Terima Pekerjaan (BAST)',
  'Laporan pemeriksaan atau uji fungsi bila dipersyaratkan',
  'Gambar pengawatan atau as-built bila termasuk dalam cakupan pekerjaan',
  'Rekomendasi tindak lanjut bila disepakati',
];

export const vendorRegistrationStatement = 
  'Arsip pekerjaan CBL memuat PO atau SPK, surat jalan, berita acara serah terima, dan dokumen pendukung lainnya. Kelengkapan registrasi vendor akan ditinjau berdasarkan persyaratan calon klien. Dokumen yang memuat data sensitif hanya disampaikan melalui saluran komunikasi resmi.';

export const companyProfileDoc: VendorDocDownload = {
  title: 'Profil Perusahaan CBL (PDF)',
  fileName: 'company-profile.pdf',
  available: false, // Belum ada di repo -> render tombol disabled "menyusul"
  note: 'Dokumen induk tersedia untuk pemeriksaan internal. Versi publik yang telah ditinjau belum tersedia untuk diunduh.',
};
