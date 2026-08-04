# Verifikasi Konten dan Privasi

Tanggal verifikasi: 4 Agustus 2026

## Aturan sumber

Hierarki bukti yang digunakan:

1. **Level 1 — dokumen primer:** PO/SPK/BAST/Surat Jalan/BQ/foto asli. Arsip ZIP primer yang disebut dalam brief tidak tersedia dalam sesi ini, sehingga tidak dilakukan klaim verifikasi primer langsung.
2. **Level 2 — workbook verifikasi:** sumber utama audit proyek pada sesi ini. Workbook mencatat 76 proyek unik, 436 baris item, dan 204 dokumen; README workbook menyatakan data telah diverifikasi visual terhadap dokumen sumber oleh penyusunnya.
3. **Level 3 — Company Profile:** digunakan untuk identitas perusahaan, alamat, kontak, positioning, media, dan kebijakan publikasi dokumen.
4. **Level 4 — inferensi:** tidak dipublikasikan sebagai fakta. Klaim tanpa dukungan eksplisit dihapus, dipersempit, atau ditandai untuk konfirmasi.

Dokumen ini sengaja tidak memuat nomor PO/SPK/BAST/SJ, nilai transaksi, rekening, NPWP/NIB, nomor akta/izin, pajak, atau identitas personal.

## Hasil verifikasi 18 proyek publik

Seluruh entri mempunyai foto publik di repo dan dipadankan ke ringkasan workbook. Kolom BAST/SJ di bawah hanya menyatakan ketersediaan kategori bukti menurut workbook; tidak mempublikasikan nomor atau isi dokumen.

| Proyek publik | BAST/BA | SJ | Status |
|---|---:|---:|---|
| Penggantian Soft Starter pada Sistem Lift dan Pompa | Ada | Ada | Selaras |
| Penyetelan Roll dan Komponen Penahan Sistem Conveyor | Ada | Ada | Selaras |
| Penggantian Lampu Show pada Panggung Fasilitas Rekreasi | Ada | Ada | Judul dan status SJ dikoreksi |
| Perbaikan Sistem AC VRF pada Gedung Operasional | Ada | Tidak tercatat | Selaras |
| Penggantian Instalasi AC Split Duct | Ada | Ada | Status SJ dikoreksi |
| Penggantian Panel View dan PLC MicroLogix pada Sistem Kontrol | Ada | Ada | Dipadankan ke entri workbook yang tepat |
| Penggantian DC Drive pada Sistem Penggerak Motor | Ada | Ada | Selaras |
| Pengadaan Pompa Submersible untuk Sistem Fasilitas | Ada | Ada | Selaras |
| Pengadaan Kompresor Piston 1,5 kW untuk Peralatan Wahana | Ada | Ada | Spesifikasi dipersempit; sumber PO primer tidak tersedia menurut workbook |
| Pengadaan Shaft, Roda Transisi, dan Gearbox Sistem Penggerak | Ada | Ada | Selaras |
| Pengadaan Inverter untuk Sistem Penggerak Kereta | Ada | Tidak tercatat | Selaras |
| Penggantian Karet Conveyor Lift pada Fasilitas Rekreasi Air | Ada | Ada | Judul diperjelas |
| Instalasi Sistem Lighting Underwater | Ada | Ada | Status SJ dikoreksi |
| Pengadaan dan Instalasi Sistem Penerangan Kolam | Ada | Ada | Selaras |
| Pengadaan Bearing Roda untuk Sistem Kereta | Ada | Ada | Selaras |
| Pengadaan Tiga Unit Gearbox Industri | Ada | Ada | Selaras |
| Pengadaan Pompa Booster untuk Sistem Air Bersih | Tidak tercatat | Ada | Selaras |
| Pengadaan UPS untuk Sistem Operasional | Tidak tercatat | Ada | Selaras |

## Anomali sumber yang tidak disembunyikan

- Workbook mencatat satu perbedaan aritmetika sumber sekitar 1,87% dan dua perbedaan hitung baris; website tidak menampilkan nilai transaksi sehingga anomali tersebut tidak diteruskan ke publik.
- Satu proyek kompresor tidak mempunyai PO primer dalam arsip yang dirujuk workbook; judul/spesifikasi dibatasi pada data yang didukung BQ/BAST/SJ dalam workbook.
- Dua proyek tidak mempunyai dokumen turunan pada register dan beberapa folder sumber kosong/duplikat menurut workbook. Tidak ada klaim kelengkapan universal di website.
- Company Profile menyebut 74 pengalaman, sedangkan workbook yang lebih baru memuat 76 proyek. Website menggunakan frasa periode pengalaman, bukan klaim jumlah total.

## Identitas dan positioning

| Elemen | Keputusan |
|---|---|
| Bentuk usaha | “Persekutuan Komanditer” / badan usaha, bukan “badan hukum” |
| Alamat | Diselaraskan ke alamat Company Profile dengan nomor 27 |
| Periode rekam pekerjaan | 2022–2026 |
| Tim | Tim inti dan tenaga profesional berbasis proyek; tidak mengklaim headcount |
| Area layanan | Ditentukan setelah klarifikasi kebutuhan dan kemampuan mobilisasi |
| Jam layanan | “Jadwal layanan dikonfirmasi saat konsultasi” |
| Merek | Ditampilkan sebagai komponen yang biasa ditangani; ada disclaimer bukan distributor/authorized partner |
| Sertifikasi/SBU/SKK | Tidak diklaim karena tidak tersedia dalam sumber |
| Garansi/respons SLA | Tidak dijanjikan secara universal |

## Pemetaan foto

- Foto proyek yang sudah ada dipertahankan; tidak ada foto valid yang dihapus.
- Hero memakai foto proyek yang relevan, bukan video stok/generik.
- Setiap foto publik mempunyai alt text deskriptif tanpa nama klien, nomor dokumen, atau nilai transaksi.
- Pemeriksaan browser pada enam halaman representatif menemukan 0 gambar rusak.
- Verifikasi byte-by-byte terhadap ZIP foto primer belum dapat dilakukan karena ZIP tidak tersedia. Foto yang mirip/duplikat sengaja tidak dihapus tanpa bukti primer.

## Privasi dan dokumen publik

- Master Company Profile mengandung informasi legal/identitas yang tidak layak dipublikasikan langsung.
- Tidak ada dokumen sumber pengguna yang disalin ke `public/`, asset publik, metadata halaman, JSON-LD, atau teks repo.
- Halaman legalitas hanya menyebut **jenis dokumen** dan mekanisme permintaan resmi.
- Tombol unduh Company Profile publik tetap tidak aktif sampai versi sanitasi disetujui.
- Form kontak tidak mempunyai backend/database; data dibentuk lokal lalu diteruskan ke WhatsApp/email atas tindakan pengguna.

## Keterbatasan pemeriksaan file sumber

- Workbook dibaca seluruh sheet dengan urutan README terlebih dahulu.
- Company Profile berhasil diekstrak secara terstruktur, termasuk tabel dan media.
- LibreOffice tidak tersedia pada environment audit, sehingga Company Profile tidak dapat dirender ke halaman gambar untuk visual QA. Tidak ada klaim bahwa layout DOCX sudah diperiksa secara visual.
- Arsip ZIP dokumen/foto tidak ditemukan pada Desktop atau workspace sesi ini.

## Konfirmasi owner yang masih diperlukan

- [ ] Domain produksi final.
- [ ] Jam layanan publik dan apakah ada dukungan darurat di luar jam tersebut.
- [ ] Email berdomain sendiri atau persetujuan tetap memakai email saat ini.
- [ ] Versi Company Profile sanitasi yang boleh dipublikasikan.
- [ ] Izin penggunaan logo merek/manufaktur.
- [ ] Akses arsip ZIP primer untuk audit ulang dokumen dan kecocokan foto.
