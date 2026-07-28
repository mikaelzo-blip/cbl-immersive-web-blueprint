# Analisis dan Rekomendasi Website PT Cakrawala Buana Lestari

Repository: `https://github.com/mikaelzo-blip/cakrawala-web-3`

## Ringkasan Eksekutif

Secara keseluruhan, website sudah memiliki fondasi yang cukup matang untuk digunakan sebagai company profile perusahaan kontraktor B2B. Struktur teknis, halaman layanan, data proyek, SEO dasar, serta alur kontak sudah tersedia.

Namun, website belum sepenuhnya siap dipublikasikan karena masih ada beberapa bagian penting yang perlu diperkuat, terutama:

- Kredibilitas bisnis.
- Validasi proyek.
- Dokumentasi lapangan.
- Legalitas.
- Kejelasan positioning.
- Konversi pengunjung menjadi calon pelanggan.
- Kesiapan aset sebelum go-live.

> Catatan: analisis ini berdasarkan source code repository. Karena belum ada URL deployment publik, pengujian tampilan aktual, responsivitas, Core Web Vitals, dan alur pengguna di browser belum dilakukan.

---

## Penilaian Umum

| Area | Nilai | Catatan |
|---|---:|---|
| Struktur teknis | 8/10 | Menggunakan Next.js, TypeScript strict, komponen modular, dan static generation |
| Kelengkapan konten | 8/10 | Layanan dan studi kasus sudah cukup detail |
| Kredibilitas bisnis | 5/10 | Bukti proyek, sertifikasi, dan dokumen belum cukup kuat |
| Potensi konversi | 6/10 | Sudah ada WhatsApp, tetapi CTA belum cukup tersegmentasi |
| SEO | 7/10 | Metadata, sitemap, robots, dan JSON-LD sudah tersedia atau direncanakan |
| Kesiapan go-live | 5/10 | Masih terdapat data draft, placeholder, dan domain yang perlu dikonfirmasi |

Website sudah memiliki beberapa fondasi penting:

- Halaman layanan.
- Halaman proyek.
- Halaman legalitas.
- Kebijakan privasi.
- Sitemap.
- Robots.txt.
- Web manifest.
- Halaman 404.
- Kontak WhatsApp dan email.
- Struktur data terpusat.

---

# Prioritas Perbaikan

## 1. Verifikasi Seluruh Studi Kasus

Ini merupakan prioritas tertinggi.

Pada file data proyek, beberapa portofolio masih berstatus draft dokumentasi internal dan perlu dicocokkan dengan dokumen seperti:

- Purchase Order.
- Berita Acara Serah Terima.
- Invoice.
- Laporan pekerjaan.
- Dokumentasi internal.
- Persetujuan klien untuk publikasi.

Sebelum website dipublikasikan:

- Verifikasi setiap proyek.
- Hapus proyek yang tidak dapat dibuktikan.
- Pisahkan proyek nyata dengan contoh kapabilitas.
- Jangan menyebut contoh solusi sebagai studi kasus nyata.
- Pastikan klien telah memberikan izin apabila nama atau dokumentasinya dipublikasikan.

Struktur data proyek yang disarankan:

```ts
verificationStatus: 'verified' | 'internal-review' | 'sample'
completedAt?: string
evidenceAvailable: boolean
clientApprovalToPublish: boolean
```

Hanya proyek dengan kondisi berikut yang sebaiknya ditampilkan kepada publik:

```ts
verificationStatus === 'verified'
clientApprovalToPublish === true
```

---

## 2. Gunakan Dokumentasi Lapangan Asli

Foto merupakan salah satu bukti terpenting bagi perusahaan kontraktor.

Ganti foto ilustrasi atau placeholder dengan dokumentasi asli, seperti:

- Foto sebelum pekerjaan.
- Foto proses pengerjaan.
- Foto setelah pekerjaan.
- Foto pengujian.
- Foto commissioning.
- Foto teknisi menggunakan APD.
- Foto panel.
- Foto wiring.
- Foto mesin.
- Foto alat ukur.
- Foto komponen secara dekat.

Setiap studi kasus sebaiknya memiliki minimal 4 sampai 8 foto asli.

Tambahkan caption informatif, misalnya:

> Pengujian panel kontrol setelah penggantian komponen dan penataan ulang jalur kabel.

Hindari penggunaan foto stok secara dominan, terutama pada hero section. Pengunjung B2B akan lebih percaya terhadap dokumentasi pekerjaan asli daripada visual generik.

Alternatif hero yang lebih baik:

- Video montage pekerjaan asli berdurasi 10–15 detik.
- Foto teknisi saat bekerja.
- Foto instalasi terbaik.
- Foto panel kontrol.
- Foto aktivitas commissioning.
- Poster image sebagai fallback.

---

## 3. Tambahkan Bukti Kredibilitas di Hero Section

Hero saat ini sudah menjelaskan layanan dan menyediakan tombol WhatsApp, tetapi belum cukup kuat dalam menjawab pertanyaan:

> Mengapa calon pelanggan harus mempercayai perusahaan ini?

Tambahkan indikator kredibilitas yang dapat dibuktikan, seperti:

- Tahun mulai beroperasi.
- Jumlah proyek terverifikasi.
- Area layanan.
- Waktu respons.
- Jumlah teknisi.
- Sertifikasi teknisi.
- Garansi pekerjaan.
- Ketersediaan dukungan darurat.

Contoh:

> 10+ tahun pengalaman · 50+ pekerjaan terselesaikan · Area Jabodetabek · Dukungan teknis 24/7

Jangan menggunakan angka perkiraan. Semua angka harus memiliki dasar dan bukti yang jelas.

---

## 4. Perjelas Positioning Perusahaan

Saat ini website menyebutkan berbagai layanan:

- Kelistrikan.
- PLC.
- Mekanikal.
- HVAC.
- Pompa.
- Pencahayaan.

Daftar ini cukup lengkap, tetapi dapat membuat calon pelanggan sulit memahami spesialisasi utama perusahaan.

Positioning yang disarankan:

> Kontraktor engineering dan maintenance fasilitas untuk gedung komersial, industri, serta fasilitas rekreasi.

Enam layanan utama tetap dapat digunakan sebagai pendukung positioning tersebut.

Contoh judul hero:

> Solusi Engineering, Maintenance, dan Otomasi Fasilitas dalam Satu Tim

Contoh subjudul:

> CBL membantu pengelola gedung dan fasilitas industri menangani kelistrikan, panel kontrol, PLC, mekanikal, HVAC, pompa, dan sistem pencahayaan—mulai dari survei hingga commissioning.

---

## 5. Perbaiki Call-to-Action

CTA saat ini masih cukup umum.

Tambahkan CTA berdasarkan kebutuhan calon pelanggan:

- Minta Survei Lokasi.
- Konsultasikan Gangguan.
- Minta Penawaran Harga.
- Unduh Company Profile.
- Lihat Proyek Sejenis.
- Hubungi Tim Teknis.
- Jadwalkan Preventive Maintenance.

Form kontak sebaiknya memiliki pilihan kebutuhan:

```text
Jenis kebutuhan:
- Gangguan darurat
- Survei proyek baru
- Preventive maintenance
- Permintaan penawaran
- Pengadaan komponen
- Konsultasi teknis
```

Pesan WhatsApp otomatis sebaiknya memuat:

- Nama.
- Nama perusahaan.
- Lokasi pekerjaan.
- Jenis layanan.
- Tingkat urgensi.
- Ringkasan masalah.
- Waktu survei yang diinginkan.

Contoh template:

```text
Halo tim CBL,

Saya ingin berkonsultasi mengenai pekerjaan berikut:

Nama:
Perusahaan:
Lokasi:
Jenis layanan:
Tingkat urgensi:
Ringkasan kebutuhan:
Waktu survei yang diinginkan:
```

---

## 6. Sediakan Company Profile PDF

Company profile merupakan dokumen penting untuk perusahaan kontraktor, terutama untuk:

- Procurement.
- Vendor registration.
- Tender.
- Facility management.
- Kerja sama B2B.
- Pengajuan proposal.

Isi company profile yang disarankan:

- Profil perusahaan.
- Visi dan misi.
- Legalitas.
- Bidang layanan.
- Area layanan.
- Pengalaman atau studi kasus.
- Struktur tim.
- Sertifikasi.
- Peralatan kerja.
- Prosedur K3.
- Proses kerja.
- Kontak perusahaan.
- QR WhatsApp.
- URL website.

Letakkan tombol **Unduh Company Profile** di:

- Header.
- Hero section.
- Halaman legalitas.
- Halaman tentang perusahaan.
- Footer.

---

## 7. Perkuat Halaman Legalitas dan K3

Untuk calon klien B2B, halaman legalitas sering lebih penting daripada animasi atau desain visual.

Tambahkan informasi atau dokumen yang aman untuk dipublikasikan:

- NIB.
- NPWP perusahaan.
- Akta pendirian.
- Akta perubahan.
- KBLI.
- Domisili.
- Sertifikasi teknisi.
- Sertifikat K3.
- Kebijakan HSE.
- SOP izin kerja.
- Prosedur Lockout Tagout.
- Daftar APD.
- Garansi pekerjaan.
- Status PKP apabila relevan.

Nomor sensitif dapat disamarkan sebagian.

Tambahkan tombol:

> Minta Dokumen Vendor Lengkap

Dokumen lengkap sebaiknya tidak langsung tersedia secara publik. Pengiriman dapat dilakukan setelah permintaan calon pelanggan diverifikasi.

---

## 8. Gunakan Email Domain Perusahaan

Email bisnis sebaiknya menggunakan domain perusahaan, bukan email gratis.

Contoh:

```text
marketing@cakrawala-buana-lestari.co.id
project@cakrawala-buana-lestari.co.id
procurement@cakrawala-buana-lestari.co.id
```

Manfaat email domain:

- Meningkatkan kepercayaan.
- Terlihat lebih profesional.
- Lebih sesuai untuk tender.
- Memudahkan pembagian fungsi tim.
- Lebih baik untuk komunikasi vendor dan procurement.

Pastikan domain utama website juga sudah final dan konsisten pada:

- Metadata.
- Sitemap.
- Canonical URL.
- JSON-LD.
- Email.
- Company profile.
- Media sosial.

---

## 9. Perbaiki Copywriting dan Istilah

Beberapa teks masih terlalu teknis, panjang, atau kurang natural untuk pengunjung umum.

Contoh yang perlu diperiksa:

- `penganti` menjadi `pengganti`.
- `stainles steel` menjadi `stainless steel`.
- `terpogram` menjadi `terprogram`.
- `diagram skema penataan kabel terbarukan` menjadi `diagram wiring terbaru`.
- `suku cadang bermerek industri bereputasi` menjadi `komponen sesuai spesifikasi dan dapat ditelusuri`.

Frasa seperti:

> Pendekatan Berbasis Komponen SAH

perlu diperiksa kembali karena kemungkinan salah ketik atau kurang jelas.

Alternatif:

- Menggunakan komponen asli.
- Menggunakan komponen terverifikasi.
- Menggunakan komponen sesuai spesifikasi.
- Menggunakan komponen yang dapat ditelusuri.

Untuk halaman depan, gunakan struktur copywriting:

> Masalah → Solusi → Hasil → CTA

Contoh:

> Gangguan panel dapat menyebabkan operasional berhenti. Tim kami melakukan pemeriksaan, perbaikan, penggantian komponen, dan pengujian hingga sistem kembali siap digunakan.

---

## 10. Hindari Kesan sebagai Distributor Resmi

Website menampilkan beberapa merek teknologi atau komponen.

Judul yang aman:

> Merek dan Sistem yang Biasa Kami Tangani

Hindari judul:

> Partner Kami

Kata “partner” dapat menimbulkan kesan bahwa perusahaan memiliki hubungan resmi dengan merek tersebut.

Tambahkan disclaimer:

> Nama dan logo merek merupakan milik masing-masing pemegang hak. Penyebutan merek hanya menunjukkan pengalaman teknis dalam menangani produk atau sistem terkait dan bukan merupakan klaim sebagai distributor atau mitra resmi.

Pastikan penggunaan logo mengikuti pedoman merek masing-masing.

---

# Fitur Tambahan yang Disarankan

## 1. Form Estimasi Awal

Buat form untuk menyaring calon pelanggan sebelum tim melakukan survei.

Data yang dikumpulkan:

```text
Jenis layanan
Lokasi proyek
Jenis fasilitas
Kondisi sistem
Kapasitas atau spesifikasi peralatan
Tingkat urgensi
Foto pendukung
Dokumen pendukung
Jadwal survei
```

Setelah dikirim, sistem dapat menghasilkan nomor permintaan:

```text
CBL-REQ-20260728-0012
```

Manfaat:

- Mempermudah pencatatan lead.
- Membuat proses terlihat profesional.
- Mengurangi pertanyaan berulang.
- Membantu tim mempersiapkan survei.

---

## 2. Halaman Berdasarkan Sektor Industri

Saat ini website lebih berfokus pada jenis layanan.

Tambahkan halaman berdasarkan sektor calon pelanggan:

- Gedung komersial.
- Manufaktur.
- Hotel dan hospitality.
- Fasilitas rekreasi.
- Perkantoran.
- Pergudangan.
- Properti residensial skala besar.

Contoh URL:

```text
/industri/gedung-komersial
/industri/manufaktur
/industri/fasilitas-rekreasi
```

Setiap halaman dapat menjelaskan:

- Masalah umum di sektor tersebut.
- Layanan yang relevan.
- Contoh proyek.
- Proses kerja.
- CTA khusus.

---

## 3. Paket Preventive Maintenance

Tambahkan halaman khusus untuk kontrak pemeliharaan berkala.

Contoh layanan:

- Inspeksi bulanan.
- Preventive maintenance triwulanan.
- Emergency support.
- Laporan kondisi aset.
- Rekomendasi penggantian komponen.
- SLA respons.
- Riwayat maintenance.
- Pemeriksaan panel.
- Pemeriksaan HVAC.
- Pemeriksaan pompa.
- Pemeriksaan sistem kontrol.

Manfaat:

- Menghasilkan pendapatan berulang.
- Meningkatkan retensi pelanggan.
- Mengurangi ketergantungan pada proyek satu kali.
- Membantu pelanggan mencegah kerusakan.

---

## 4. FAQ Bisnis dan Teknis

Pertanyaan yang disarankan:

- Apakah survei dikenakan biaya?
- Area layanan CBL di mana saja?
- Apakah menerima pekerjaan darurat?
- Apakah perusahaan menyediakan material?
- Apakah pekerjaan mendapatkan garansi?
- Dokumen apa yang dibutuhkan sebelum survei?
- Berapa lama penerbitan quotation?
- Apakah pekerjaan dapat dilakukan di luar jam operasional?
- Apakah tersedia kontrak maintenance?
- Apakah menerima pekerjaan di luar Jabodetabek?

Tambahkan schema `FAQPage` hanya apabila FAQ benar-benar ditampilkan pada halaman.

---

## 5. Testimoni Terverifikasi

Testimoni sebaiknya memuat:

- Jabatan pemberi testimoni.
- Jenis industri.
- Lingkup pekerjaan.
- Tahun atau bulan pekerjaan.
- Persetujuan publikasi.

Apabila nama perusahaan tidak boleh disebutkan:

> Facility Manager — Gedung Komersial, Jakarta

Hindari testimoni yang terlalu umum, seperti:

> Pelayanannya sangat memuaskan.

Testimoni yang lebih kredibel:

> Tim menyelesaikan perbaikan panel sesuai jadwal dan memberikan laporan pengujian yang jelas setelah commissioning.

---

# Rekomendasi Teknis

## 1. Quality Assurance

Tambahkan script berikut:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "lint": "eslint .",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "check": "npm run typecheck && npm run lint && npm run test && npm run build"
  }
}
```

Pengujian yang disarankan:

- Validasi form.
- Generator URL WhatsApp.
- Semua slug proyek.
- Semua slug layanan.
- Broken internal links.
- Metadata setiap halaman.
- Halaman 404.
- Navigasi keyboard.
- Form submission.
- Responsive layout.

---

## 2. CI/CD GitHub Actions

Setiap push atau pull request sebaiknya menjalankan:

```text
npm ci
npm run typecheck
npm run lint
npm run test
npm run build
```

Tambahkan pengecekan:

- Build gagal apabila terdapat TypeScript error.
- Build gagal apabila terdapat lint error.
- Build gagal apabila test gagal.
- Deploy hanya dilakukan dari branch utama.
- Preview deployment dibuat untuk pull request.

---

## 3. Analytics dan Konversi

Jangan hanya memantau page view.

Event yang sebaiknya diukur:

```text
whatsapp_click
request_survey_click
quotation_request
company_profile_download
project_view
service_view
phone_click
email_click
form_submit_success
form_submit_error
```

Tujuan utama analytics:

- Mengetahui halaman yang menghasilkan lead.
- Mengetahui layanan yang paling diminati.
- Mengetahui CTA yang paling efektif.
- Mengukur rasio pengunjung menjadi calon pelanggan.
- Mengetahui titik pengguna meninggalkan form.

---

## 4. Optimasi Hero Video

Hero video sudah menjadi elemen visual yang menarik, tetapi perlu dioptimalkan.

Rekomendasi:

- Kompres ke format WebM dan MP4.
- Sediakan poster image.
- Batasi ukuran ideal di bawah 2–3 MB.
- Nonaktifkan animasi untuk `prefers-reduced-motion`.
- Gunakan gambar statis pada koneksi lambat.
- Pastikan teks tetap terbaca ketika video gagal dimuat.
- Jangan memutar audio secara otomatis.
- Pastikan overlay memiliki kontras yang cukup.

---

## 5. Keamanan Form

Apabila form dikirim ke backend, tambahkan:

- Server-side validation.
- Rate limiting.
- Honeypot field.
- CAPTCHA apabila diperlukan.
- Sanitasi input.
- Pembatasan ukuran file.
- Validasi tipe file.
- Penyimpanan log.
- Proteksi spam.
- Notifikasi kegagalan pengiriman.

Jangan menyimpan data sensitif tanpa kebijakan privasi yang jelas.

---

# Urutan Pengerjaan

## Prioritas 1 — Wajib Sebelum Go-Live

1. Verifikasi seluruh proyek.
2. Ganti foto placeholder dengan dokumentasi asli.
3. Konfirmasi domain.
4. Gunakan email domain perusahaan.
5. Unggah company profile.
6. Audit legalitas.
7. Audit klaim bisnis.
8. Koreksi typo dan istilah.
9. Pastikan nomor WhatsApp benar.
10. Pastikan alamat dan jam layanan benar.
11. Pastikan klaim dukungan 24/7 memang dapat dipenuhi.
12. Pastikan semua halaman dapat diakses dengan baik.

---

## Prioritas 2 — Meningkatkan Konversi

1. Tambahkan CTA Minta Survei.
2. Tambahkan CTA Minta Penawaran.
3. Tambahkan bukti kredibilitas di hero.
4. Buat form lead yang lebih terstruktur.
5. Tambahkan testimoni terverifikasi.
6. Buat halaman preventive maintenance.
7. Tambahkan halaman sektor industri.
8. Tambahkan tombol company profile pada beberapa area penting.

---

## Prioritas 3 — SEO dan Operasional

1. Tambahkan FAQ.
2. Tambahkan event analytics.
3. Tambahkan automated test.
4. Tambahkan CI/CD.
5. Optimalkan video.
6. Optimalkan gambar.
7. Tambahkan CRM sederhana.
8. Tambahkan pencatatan nomor permintaan.
9. Tambahkan monitoring error.
10. Tambahkan monitoring uptime.

---

# Checklist Go-Live

## Konten

- [ ] Semua proyek sudah diverifikasi.
- [ ] Semua foto sudah menggunakan dokumentasi asli.
- [ ] Semua typo sudah diperbaiki.
- [ ] Semua klaim bisnis dapat dibuktikan.
- [ ] Company profile sudah tersedia.
- [ ] Testimoni sudah mendapat izin publikasi.

## Legalitas

- [ ] Data legalitas sudah benar.
- [ ] Dokumen sensitif sudah disamarkan.
- [ ] Kebijakan privasi sudah tersedia.
- [ ] Disclaimer merek sudah tersedia.
- [ ] Form memiliki persetujuan pemrosesan data.

## Kontak

- [ ] Nomor WhatsApp sudah benar.
- [ ] Nomor telepon sudah benar.
- [ ] Email domain sudah aktif.
- [ ] Alamat sudah benar.
- [ ] Jam operasional sudah benar.
- [ ] Form sudah diuji.

## Teknis

- [ ] Build berhasil.
- [ ] Tidak ada TypeScript error.
- [ ] Tidak ada broken link.
- [ ] Sitemap dapat diakses.
- [ ] Robots.txt dapat diakses.
- [ ] Canonical URL sudah benar.
- [ ] Open Graph sudah benar.
- [ ] Favicon sudah tersedia.
- [ ] Website responsif.
- [ ] Gambar sudah dikompres.
- [ ] Video sudah dikompres.
- [ ] Analytics sudah aktif.
- [ ] Error monitoring sudah aktif.

## SEO

- [ ] Setiap halaman memiliki title unik.
- [ ] Setiap halaman memiliki meta description.
- [ ] Heading tersusun dengan benar.
- [ ] Alt text gambar sudah tersedia.
- [ ] Structured data valid.
- [ ] Halaman proyek memiliki metadata.
- [ ] Halaman layanan memiliki metadata.
- [ ] Google Search Console sudah terhubung.

---

# Kesimpulan

Kekuatan utama website ini adalah:

- Struktur teknis yang baik.
- Konten layanan yang cukup lengkap.
- Arsitektur data yang terorganisir.
- Fondasi SEO yang sudah tersedia.
- Halaman bisnis yang cukup lengkap.

Kekurangan utama bukan pada jumlah halaman atau animasi, tetapi pada bukti nyata dan kredibilitas.

Untuk website perusahaan kontraktor, urutan kepercayaan calon pelanggan biasanya:

> Foto proyek asli → Legalitas → Pengalaman → Proses kerja → Respons cepat → Desain visual

Karena itu, pengembangan berikutnya sebaiknya tidak berfokus terlebih dahulu pada penambahan animasi atau efek visual.

Fokus utama yang disarankan:

1. Portofolio terverifikasi.
2. Dokumentasi lapangan asli.
3. Company profile.
4. Legalitas.
5. Kejelasan positioning.
6. Form permintaan survei.
7. CTA yang lebih spesifik.
8. Pengukuran lead dan konversi.

Dengan menyelesaikan bagian-bagian tersebut, website akan lebih siap digunakan sebagai alat pemasaran, validasi vendor, dan sumber lead untuk perusahaan.
