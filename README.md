# Cakrawala Web 3 Refine

Versi refinement website portofolio CBL berdasarkan analisis repository dan arsip proyek internal.

## Perubahan utama

- Enam proyek unggulan berbasis nomor SPK dan dokumen pendukung.
- Foto lapangan asli dalam format WebP.
- Halaman kartu dan detail proyek dengan galeri dokumentasi.
- Copywriting publik yang tidak menampilkan nama klien, nomor dokumen, nilai pekerjaan, atau data sensitif.
- Positioning hero dan CTA permintaan survei yang lebih jelas.
- Metadata proyek tetap dihasilkan melalui Next.js App Router.

## Aturan data proyek

Satu nomor PO atau satu nomor SPK diperlakukan sebagai satu pekerjaan. BAST, surat jalan, BQ, laporan, dan foto digunakan sebagai bukti pendukung. Nomor dokumen disimpan hanya pada arsip internal dan tidak dimasukkan ke source code publik.

---

# CV Cakrawala Buana Lestari (CBL) — Situs Web Perusahaan (B2B)

Situs company profile B2B resmi untuk **CV Cakrawala Buana Lestari (CBL)**, penyedia jasa teknik terpadu: kelistrikan & panel kontrol, otomatisasi PLC/HMI, mekanikal presisi, HVAC refrigerasi, sistem pompa, dan pencahayaan khusus.

---

## Stack Teknologi

- **Framework**: Next.js (App Router, TypeScript mode `strict`)
- **UI & Styling**: React 19, Tailwind CSS v4 (`@theme` directive), `lucide-react`, `clsx` + `tailwind-merge`
- **Deployment Target**: Static Site Generation (SSG / Static Export target)

---

## Panduan Memulai (Quick Start)

### 1. Prasyarat Sistem
- Node.js versi 18+ atau 20+
- npm v9+

### 2. Memasang Dependensi
```bash
npm install
```

### 3. Membuka Mode Pengkodingan / Dev Server
```bash
npm run dev
```
Buka browser pada alamat [http://localhost:3000](http://localhost:3000).

### 4. Melakukan Uji Tipe & Build Produksi
```bash
# Typecheck
npx tsc --noEmit

# Linting
npm run lint

# Build Static Export / SSG
npm run build
```

---

## Peta Struktur Berkas

```
src/
  app/
    layout.tsx            # Root layout: Header, Footer, font Inter, Metadata API, JSON-LD, Skip link
    page.tsx              # Beranda (Hero, Tentang, Layanan, Keahlian, Cara Kerja, Merek, Portofolio, WhyUs, CTA, Kontak)
    globals.css           # Design tokens via @theme, styling dasar & aksen gradient
    sitemap.ts            # Dynamic XML sitemap generator
    robots.ts             # Directives crawler & sitemap pointer
    manifest.ts           # Web App Manifest
    not-found.tsx         # Halaman 404
    legalitas/
      page.tsx            # Halaman legalitas perusahaan & prosedur K3
    kebijakan-privasi/
      page.tsx            # Halaman kebijakan privasi data
    layanan/
      [slug]/
        page.tsx          # Detail divisi layanan (statically generated via generateStaticParams)
    proyek/
      page.tsx            # Indeks portofolio interaktif dengan filter kategori client-side
      [slug]/
        page.tsx          # Detail studi kasus proyek (statically generated via generateStaticParams)
  components/
    layout/               # Header, Footer, MobileMenu
    sections/             # Modular homepage sections
    cards/                # ServiceCard (link ke /layanan/[slug]), ProcessCard, ProjectCard
    forms/                # ContactForm (dual submit: WhatsApp & Mailto)
    ui/                   # Container, Button, SectionHeading, DynamicIcon, Badge, FloatingWhatsapp, BackToTop
  data/
    company.ts            # Seluruh konten naratif legal & kontak perusahaan
    projects.ts           # Dataset 9 entri studi kasus portofolio (dengan header draf wajib)
    legal.ts              # Data legalitas, prosedur K3, dokumen vendor, kualifikasi teknisi
  types/
    company.ts            # Interfaces data perusahaan & komponen UI
    project.ts            # Interfaces data proyek & kategori
    legal.ts              # Interfaces data legalitas & K3
  lib/
    utils.ts              # Class merging (cn) & resolveSectionHref helper
    message.ts            # Shared message builder (WA + Mailto dengan penjejakan Halaman: <pathname>)
    whatsapp.ts           # Generator URL WhatsApp deep-link
    validation.ts         # Validasi formulir kontak
```

---

## Cara Menambah Studi Kasus Proyek Baru

Seluruh data portofolio tersimpan di `src/data/projects.ts`. Untuk menambah proyek baru:

1. Buka `src/data/projects.ts`.
2. Tambahkan objek proyek baru di dalam array `projects`:
   ```typescript
   {
     slug: 'judul-proyek-unik',
     title: 'Judul Pekerjaan Teknis',
     category: 'kelistrikan-panel', // Pilihan: kelistrikan-panel, otomasi-kontrol, mekanikal-presisi, hvac-refrigerasi, pompa-perairan, pencahayaan-show
     categoryLabel: 'Kelistrikan & Panel Kontrol',
     sector: 'Gedung Komersial & Perkantoran', // INGAT: DILARANG menulis nama klien resmi!
     summary: 'Ringkasan singkat pekerjaan...',
     challenge: 'Kondisi awal di lapangan...',
     phases: [
       { title: 'Langkah 1', description: 'Deskripsi langkah...' },
       { title: 'Langkah 2', description: 'Deskripsi langkah...' }
     ],
     results: [
       'Hasil pengerjaan 1',
       'Hasil pengerjaan 2'
     ],
     scope: [
       'Lingkup 1',
       'Lingkup 2'
     ],
     components: [
       'Komponen 1',
       'Komponen 2'
     ],
     icon: 'Zap',
     image: '/images/projects/nama-gambar.jpg',
     imageAlt: 'Deskripsi visual gambar',
     featured: true, // Set true jika ingin tampil di beranda (maksimal 6)
   }
   ```
3. Jalankan `npm run build` untuk memverifikasi bahwa halaman `/proyek/[slug]` baru berhasil ter-prerender secara otomatis.

---

## Daftar TODO Sebelum Go-Live Publik

- [ ] **Konfirmasi Domain Resmi**: Update variabel `seo.siteUrl` di `src/data/company.ts` jika domain publik resmi sudah dibeli.
- [ ] **Konfirmasi Email Domain Resmi**: Update variabel `companyInfo.email` dari Gmail ke email domain (mis. `marketing@<domain>`).
- [ ] **Company Profile PDF**: Masukkan file `company-profile.pdf` resmi ke folder `public/documents/` dan aktifkan flag `available: true` di `src/data/legal.ts`.
