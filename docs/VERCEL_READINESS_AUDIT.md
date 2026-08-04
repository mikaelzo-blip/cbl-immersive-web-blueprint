# Audit Kesiapan Vercel — Website CBL

Tanggal audit: 4 Agustus 2026

Branch: `codex/vercel-readiness-audit`

Baseline: `main` pada commit `5707bff`
Keputusan: **CONDITIONAL GO**

## Ringkasan eksekutif

Website secara teknis siap dibuatkan Preview Deployment Vercel sebagai aplikasi **Next.js native**. TypeScript, ESLint, production build, seluruh URL sitemap, browser QA, header keamanan, serta audit Lighthouse lulus. Tidak ada kerentanan dependency produksi yang dilaporkan `npm audit --omit=dev`.

Status belum menjadi GO penuh karena empat keputusan pemilik belum dikonfirmasi: domain produksi, jam layanan publik, alamat email berdomain sendiri, dan persetujuan Company Profile publik yang sudah disanitasi. Audit bukti juga dibatasi karena arsip ZIP dokumen primer/foto yang disebut dalam brief tidak tersedia dalam sesi ini; validasi proyek menggunakan workbook terverifikasi dan Company Profile sebagai sumber tingkat kedua.

Tidak ada deployment, perubahan DNS, push, merge, atau publikasi dokumen yang dilakukan.

## Arsitektur yang dipilih

**Pilih: Next.js native di Vercel.** Seluruh halaman saat ini diprerender (35 halaman/endpoints), namun native runtime mempertahankan `next/image`, security headers, metadata/OG dinamis, Preview Deployment, dan integrasi framework Vercel.

| Opsi | Kelebihan | Kekurangan | Keputusan |
|---|---|---|---|
| Next.js native di Vercel | Dukungan framework penuh, image optimizer, headers, preview/rollback | Memerlukan konfigurasi proyek Vercel | **Dipilih** |
| `output: "export"` | Artefak statis portabel | Default image optimization dan beberapa fitur Next.js tidak tersedia; headers harus dipindah ke platform | Ditolak |
| Migrasi runtime/framework | Tidak memberi manfaat langsung untuk situs ini | Risiko regresi dan scope besar | Ditolak |

Tidak ada Output Directory manual. Vercel harus mendeteksi **Next.js** dan menjalankan `npm run build`.

## Scorecard setelah perbaikan

| Area | Skor | Catatan |
|---|---:|---|
| Akurasi konten | 82 | 18 proyek publik diselaraskan ke workbook; verifikasi primer langsung dibatasi oleh arsip ZIP yang tidak tersedia |
| Positioning B2B | 90 | Fokus kontraktor/penyedia solusi teknis berbasis proyek; klaim distributor resmi dan 24/7 dihilangkan |
| UX & kepercayaan | 92 | CTA jelas, kontak konsisten, legal/privacy tersedia, dokumen sensitif tidak dipublikasikan |
| Responsiveness | 96 | Browser QA 390×844 dan 1440×1000; tidak ada overflow horizontal |
| Kualitas kode | 94 | Typecheck/lint/build lulus; data perusahaan dipusatkan; JSON-LD diserialisasi aman |
| SEO | 100 | Lighthouse seluruh sampel; canonical, sitemap, robots, OG image, Organization schema |
| Performa | 95 | Desktop 100; mobile 94–100, kecuali homepage 97; LCP maksimum 3,1 s pada daftar/detail proyek |
| Aksesibilitas | 100 | Lighthouse seluruh sampel; skip link, fokus menu, kontras, heading, reduced-motion |
| Keamanan & privasi | 91 | Header keamanan dan 0 kerentanan produksi; CSP masih memakai `unsafe-inline` untuk kompatibilitas Next.js |
| Kesiapan Vercel | 96 | Node 24, lockfile, env example, build deterministik, deployment/rollback runbook tersedia |

Skor Lighthouse adalah lab data lokal dan bukan pengganti field data Core Web Vitals setelah produksi.

## Temuan menurut prioritas

### P0 — blocker mutlak

Tidak ada P0 teknis yang tersisa.

### P1 — wajib diputuskan sebelum Production Promotion

1. **Domain dan canonical produksi belum dikonfirmasi.** Owner harus menetapkan domain final dan `NEXT_PUBLIC_SITE_URL` sebelum build produksi.
2. **Jam layanan belum dikonfirmasi.** UI kini menampilkan “Jadwal layanan dikonfirmasi saat konsultasi”; jangan mengaktifkan klaim 24/7 tanpa persetujuan operasional.
3. **Email masih memakai alamat umum.** Tetap berfungsi, tetapi email berdomain sendiri direkomendasikan untuk kepercayaan B2B dan deliverability.
4. **Company Profile publik belum disetujui.** Master mengandung identitas/dokumen sensitif dan metadata lama. Tombol unduh tetap tidak aktif sampai versi sanitasi disetujui.
5. **Arsip bukti primer tidak tersedia dalam sesi audit.** Sebelum memperluas klaim atau menambah proyek publik, lakukan re-check PO/SPK/BAST/Surat Jalan/foto dari ZIP sumber.

### P2 — penting, non-blocking untuk Preview

1. LCP mobile daftar proyek dan detail proyek terbesar terukur 3,1 s; target baik adalah ≤2,5 s. Preload gambar pertama dan quality adaptif sudah diterapkan, tetapi optimasi foto sumber masih dapat dilakukan.
2. CSP masih mengizinkan inline script/style yang dibutuhkan implementasi Next.js saat ini. Evaluasi nonce/hash hanya bila siap menerima dynamic rendering atau perubahan arsitektur.
3. Audit lengkap dependency menandai rantai development-only ESLint/minimatch/brace-expansion sebagai high dan belum memiliki fix upstream. Dependency produksi tetap 0 vulnerability.
4. Hak penggunaan logo merek pada bagian “merek yang biasa ditangani” perlu dikonfirmasi pemilik; disclaimer non-afiliasi sudah ditampilkan.

### P3 — penyempurnaan

1. Tambahkan monitoring Core Web Vitals setelah produksi dan optimalkan gambar berdasarkan data pengguna nyata.
2. Tambahkan email berdomain sendiri, halaman kontak terpisah bila kebutuhan SEO lokal meningkat, dan Search Console setelah domain aktif.
3. Tinjau foto yang mirip/duplikat hanya setelah arsip foto primer tersedia; aset valid tidak dihapus tanpa bukti.

## Perbaikan yang diterapkan

- Upgrade aman `next` dan `eslint-config-next` dari 16.2.12 ke 16.3.0 untuk menutup advisory produksi, tanpa upgrade mayor/broad dependency.
- Pin Node 24 (`.nvmrc` dan `engines`) dan tambahkan `.env.example`.
- Ganti video hero generik 10,4 MB dengan foto proyek yang relevan; video dihapus dari branch dan tetap dapat dipulihkan melalui Git.
- Pusatkan alamat, kontak, jam layanan, dan site URL; alamat diselaraskan dengan Company Profile.
- Hapus/neutralisasi klaim 24/7, distributor resmi, badan hukum, sertifikasi/izin/kepatuhan yang tidak didukung, serta janji deliverable universal.
- Selaraskan beberapa judul/status bukti proyek dengan workbook; tidak menampilkan klien, nomor dokumen, nilai, pajak, rekening, atau identitas personal.
- Tambahkan canonical, OG image 1200×630, sitemap/robots konsisten, Organization JSON-LD, serta serializer JSON-LD aman.
- Tambahkan CSP, HSTS, `nosniff`, anti-framing, referrer policy, permissions policy, dan hapus `X-Powered-By`.
- Perbaiki keyboard focus menu mobile, skip link, reduced motion, alt image, kontras warna, dan urutan heading.
- Tambahkan waktu/jadwal pilihan pada form kontak tanpa menyimpan data di server.

## Bukti pengujian

### Build dan dependency

- `npm ci`: lulus.
- `npm run check` (`typecheck`, `lint`, `build`): lulus.
- Next.js 16.3.0 menghasilkan 35 halaman/endpoints statis/SSG.
- `npm audit --omit=dev`: 0 vulnerability.
- `git diff --check`: lulus.

### Route dan browser QA

- 31 URL dari sitemap plus robots, manifest, dan OG image: HTTP 200.
- Unknown route: diuji sebagai 404 pada smoke test awal.
- Enam halaman representatif: satu `h1`, `lang="id"`, tidak ada gambar rusak, tidak ada overflow horizontal, dan tidak ada error/warning konsol.
- Menu mobile membuka dialog berlabel, memindahkan fokus, dapat ditutup, dan mengembalikan fokus ke pemicu.

### Lighthouse 13.4.1 — Performance / Accessibility / Best Practices / SEO

| Halaman | Mobile | Desktop | LCP mobile | TBT mobile | CLS |
|---|---:|---:|---:|---:|---:|
| Homepage + contact section | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 2,6 s | 60 ms | 0 |
| Project index | 94 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 3,1 s | 50 ms | 0 |
| Detail proyek terbesar dalam workbook | 94 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 3,1 s | 50 ms | 0 |
| Service detail | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1,8 s | 40 ms | 0 |
| Legalitas | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1,8 s | 50 ms | 0 |

## Header keamanan terverifikasi

- `Content-Security-Policy`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`

## Referensi resmi

Diakses 4 Agustus 2026.

- [Next.js Production Checklist](https://nextjs.org/docs/pages/guides/production-checklist)
- [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js Headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers)
- [Next.js Metadata and OG Images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Vercel Production Checklist](https://vercel.com/docs/production-checklist)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Supported Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
- [Vercel System Environment Variables](https://vercel.com/docs/environment-variables/system-environment-variables)
- [Vercel Deployment Protection](https://vercel.com/docs/deployment-protection)
- [Promoting and rolling back deployments](https://vercel.com/docs/deployments/promoting-a-deployment)
- [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [web.dev Core Web Vitals](https://web.dev/articles/vitals?hl=en)
- [web.dev LCP](https://web.dev/articles/lcp?hl=en)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [AHU pencarian badan usaha non-badan-hukum](https://ahu.go.id/pencarian/profil-badan-usaha)
- [GHSA-mh99-v99m-4gvg](https://github.com/advisories/GHSA-mh99-v99m-4gvg) dan [GHSA-rgw5-rvv9-x895](https://github.com/advisories/GHSA-rgw5-rvv9-x895)

## Verdict

**CONDITIONAL GO untuk Preview Deployment dan UAT.**

**NO-GO untuk Production Promotion** sampai P1 nomor 1–4 diputuskan owner dan checklist deployment ditandatangani. Keterbatasan bukti primer (P1 nomor 5) wajib ditutup sebelum menambah atau memperluas klaim proyek, tetapi konten publik saat ini sudah dibatasi ke pernyataan yang didukung workbook/Profile dan tidak membuka data transaksi sensitif.
