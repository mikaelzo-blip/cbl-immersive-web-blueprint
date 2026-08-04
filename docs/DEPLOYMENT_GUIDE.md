# Deployment Guide — Vercel

Dokumen ini **prepare-only**. Jangan deploy, promote, mengubah DNS, atau menghapus deployment tanpa persetujuan owner.

## 1. Prasyarat

- Branch audit telah direview dan disetujui.
- P1 pada `VERCEL_READINESS_AUDIT.md` telah diputuskan.
- Domain produksi final tersedia.
- Company Profile publik tetap nonaktif kecuali versi sanitasi sudah disetujui.
- Akun Vercel dan integrasi GitHub menggunakan least privilege.

## 2. Pengaturan proyek Vercel

| Setting | Nilai |
|---|---|
| Framework Preset | Next.js |
| Root Directory | `.` |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | Kosong / default Next.js |
| Node.js Version | 24.x |
| Production Branch | `main` setelah PR di-merge |

Jangan set `output: "export"`; aplikasi menggunakan fitur native Next.js/Vercel seperti image optimization dan headers.

## 3. Environment variables

### Production

```text
NEXT_PUBLIC_SITE_URL=https://domain-final.example
```

Nilai harus:

- memakai `https://`;
- tanpa trailing slash;
- sama dengan domain canonical yang akan dipublikasikan;
- ditetapkan **sebelum** build produksi karena variabel `NEXT_PUBLIC_*` dibundel saat build.

### Preview

Gunakan domain produksi pada `NEXT_PUBLIC_SITE_URL` jika Preview harus menghasilkan canonical ke produksi. Aktifkan Deployment Protection agar preview tidak menjadi salinan publik yang dapat diindeks. Alternatifnya, gunakan environment terpisah yang disengaja dan verifikasi canonical/noindex sebelum dibagikan.

Tidak ada secret aplikasi, database, atau API key yang diperlukan saat ini. Jangan memasukkan NIB, NPWP, nomor dokumen, rekening, atau data identitas ke environment variables.

## 4. Preview Deployment dan UAT

1. Import repository GitHub ke Vercel.
2. Konfigurasikan settings dan environment variables di atas.
3. Buat Preview Deployment dari branch audit/PR.
4. Aktifkan Deployment Protection untuk preview.
5. Catat URL preview dan deployment ID; jangan promote.
6. Jalankan UAT:
   - homepage dan contact section;
   - `/proyek` dan seluruh 18 detail proyek;
   - enam detail layanan;
   - `/legalitas` dan `/kebijakan-privasi`;
   - `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/opengraph-image`;
   - WhatsApp, telepon, email, form kontak, filter proyek, menu mobile, dan tombol back-to-top;
   - viewport mobile 390×844 dan desktop 1440×1000;
   - canonical, OG URL/image, JSON-LD, serta header keamanan.
7. Minta approval owner tertulis untuk Production Promotion.

## 5. Checklist sebelum Production Promotion

- [ ] Domain final dan `NEXT_PUBLIC_SITE_URL` cocok.
- [ ] Jam layanan disetujui.
- [ ] Email publik disetujui.
- [ ] Semua klaim dan foto mendapat persetujuan owner.
- [ ] Tidak ada data sensitif pada source, build output, screenshot, metadata, atau log.
- [ ] `npm ci` lulus.
- [ ] `npm run check` lulus.
- [ ] `npm audit --omit=dev` melaporkan 0 vulnerability.
- [ ] Seluruh sitemap URL 200 dan unknown route 404.
- [ ] Browser/keyboard/mobile QA lulus.
- [ ] Lighthouse dan screenshot preview direview.
- [ ] Deployment Protection preview aktif.
- [ ] Owner menyetujui waktu perubahan DNS dan rollback window.

## 6. Production Promotion

Hanya setelah approval:

1. Merge PR melalui proses review normal.
2. Pastikan production deployment selesai tanpa build warning/error.
3. Verifikasi deployment pada domain `.vercel.app` terlebih dahulu.
4. Hubungkan custom domain; ubah DNS hanya pada change window yang disetujui.
5. Verifikasi sertifikat TLS, redirect canonical (www/non-www), robots, sitemap, OG, JSON-LD, dan header keamanan.
6. Ulangi smoke test CTA/kontak di domain produksi.
7. Simpan deployment ID terakhir yang sehat sebagai titik rollback.

## 7. Rollback

Jika terjadi regresi:

1. Jangan membangun ulang commit bermasalah.
2. Gunakan Vercel **Instant Rollback** atau promote deployment sehat sebelumnya.
3. Jika masalah berasal dari DNS, kembalikan record sesuai change plan dan TTL yang telah disepakati.
4. Verifikasi homepage, kontak, proyek, legal, canonical, dan header pada deployment hasil rollback.
5. Catat insiden dan perbaiki melalui PR baru; jangan memaksa perubahan langsung ke `main`.

## 8. Monitoring setelah rilis

- Pantau build/deployment logs, 4xx/5xx, Web Analytics/Core Web Vitals, dan broken link.
- Target lapangan: LCP ≤2,5 s pada persentil ke-75, CLS ≤0,1, INP ≤200 ms.
- Daftarkan domain ke Google Search Console, kirim sitemap, dan pantau indexing/canonical.
- Tinjau ulang dependency produksi secara berkala; jangan memakai `npm audit fix --force` tanpa review dampak.
- Evaluasi optimasi foto proyek jika LCP project index/detail tetap di atas target.

## 9. Referensi

- [Vercel Production Checklist](https://vercel.com/docs/production-checklist)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Supported Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
- [System environment variables](https://vercel.com/docs/environment-variables/system-environment-variables)
- [Deployment Protection](https://vercel.com/docs/deployment-protection)
- [Promoting and rolling back](https://vercel.com/docs/deployments/promoting-a-deployment)
