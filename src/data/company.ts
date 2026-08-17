import { CompanyInfo, ServiceDivision, ExpertiseItem, WorkProcessStep, BrandItem, WhyUsPoint, NavigationItem } from '@/types/company';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
const vercelPreviewHost = process.env.NEXT_PUBLIC_VERCEL_URL;
const siteUrl = configuredSiteUrl ?? (vercelPreviewHost ? `https://${vercelPreviewHost}` : 'http://localhost:3000');

export const companyInfo: CompanyInfo = {
  legalName: 'CV Cakrawala Buana Lestari',
  shortName: 'CBL',
  address: 'Jl. Papanggo II C No. 27, Papanggo, Tanjung Priok, Jakarta Utara, DKI Jakarta 14340',
  addressParts: {
    streetAddress: 'Jl. Papanggo II C No. 27',
    addressLocality: 'Jakarta Utara',
    addressRegion: 'DKI Jakarta',
    postalCode: '14340',
    addressCountry: 'ID',
  },
  phone: '(021) 2606-3396',
  phoneRaw: '02126063396',
  whatsappNumber: '6285184549522',
  whatsappFormatted: '0851-8454-9522',
  email: 'cvcakrawala.market@gmail.com',
  serviceHours: 'Senin–Jumat, pukul 07.00–15.00 WIB',
  seo: {
    siteUrl,
    defaultTitle: 'CV Cakrawala Buana Lestari — Solusi Teknik Terpadu',
    defaultDescription: 'Penyedia layanan teknik industri & fasilitas terpadu: kelistrikan & panel kontrol, otomasi PLC/HMI, mekanikal presisi, HVAC refrigerasi, sistem pompa, dan pencahayaan khusus.',
    ogImage: '/opengraph-image',
  },
};

export const mainNavItems: NavigationItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Portofolio', href: '/proyek' },
  { label: 'Legalitas', href: '/legalitas' },
  { label: 'Mengapa CBL', href: '#mengapa-cbl' },
  { label: 'Kontak', href: '#kontak' },
];

export const serviceDivisions: ServiceDivision[] = [
  {
    id: 'kelistrikan-panel',
    slug: 'kelistrikan-panel',
    title: 'Kelistrikan & Panel Kontrol',
    description: 'Pengadaan, pemasangan, penggantian, pengawatan, dan pemeriksaan panel serta komponen proteksi sesuai kebutuhan proyek.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup panel kontrol, MCCB, kontaktor, pengendali motor, soft starter, pengawatan, dan komponen distribusi. Kebutuhan perancangan atau pengujian khusus ditentukan setelah survei dan penelaahan dokumen teknis.',
    iconName: 'Zap',
    capabilities: [
      'Panel kontrol & distribusi utama',
      'MCCB & sistem proteksi kelistrikan',
      'Kontaktor & perakitan starter motor',
      'Inverter motor (VFD) & pengendali kecepatan',
      'Panel HMI & instrumen pemantauan daya',
      'Penelusuran gangguan kelistrikan',
    ],
    capabilityDetails: [
      {
        label: 'Panel kontrol & distribusi utama',
        description: 'Perakitan dan penataan komponen panel, busbar, pembagian beban antar-fase, serta enclosure sesuai spesifikasi pekerjaan.',
      },
      {
        label: 'MCCB & sistem proteksi kelistrikan',
        description: 'Pemeriksaan dan penggantian MCCB atau pemutus utama sesuai kapasitas, karakteristik proteksi, dan kebutuhan sistem.',
      },
      {
        label: 'Kontaktor & perakitan starter motor',
        description: 'Perangkaian kontaktor, relai beban lebih termal, dan sistem interlock untuk pengendalian motor.',
      },
      {
        label: 'Inverter motor (VFD) & pengendali kecepatan',
        description: 'Pemasangan dan penyetelan VFD untuk mengatur percepatan, perlambatan, dan kecepatan putar motor.',
      },
      {
        label: 'Panel HMI & instrumen pemantauan daya',
        description: 'Pemasangan panel HMI, meter digital, dan indikator untuk membantu pemantauan kondisi kerja sistem.',
      },
      {
        label: 'Penelusuran gangguan kelistrikan',
        description: 'Pemeriksaan sumber gangguan seperti hubung singkat, ketidakseimbangan fase, sambungan longgar, atau kenaikan suhu pada komponen.',
      },
    ],
    commonConditions: [
      'Panel utama sering trip saat beban operasional meningkat atau tanpa pola yang mudah dikenali.',
      'Busbar, terminal, atau kabel pada panel distribusi menunjukkan kenaikan suhu yang tidak normal.',
      'Pembagian beban antar-fase tidak seimbang dan perlu diperiksa sebelum memengaruhi peralatan lain.',
      'Arus awal motor terlalu tinggi ketika dijalankan menggunakan starter konvensional.',
      'Jalur distribusi dan pemutus arus lama perlu diperiksa untuk menentukan kebutuhan penggantian.',
    ],
  },
  {
    id: 'otomasi-kontrol',
    slug: 'otomasi-kontrol',
    title: 'Otomasi & Sistem Kontrol',
    description: 'Penggantian, migrasi, konfigurasi, pengawatan, dan pengujian PLC/HMI serta perangkat kendali motor sesuai kebutuhan proyek.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup penggantian HMI dan PLC, inverter, drive, soft starter, sensor, pengawatan, konfigurasi, dan uji fungsi. Perubahan logika atau integrasi lanjutan hanya ditawarkan setelah data sistem yang ada ditelaah.',
    iconName: 'Cpu',
    capabilities: [
      'Migrasi & pemrograman PLC',
      'Pengembangan antarmuka HMI',
      'Integrasi sensor & aktuator lapangan',
      'Pemasangan & penyetelan Soft Starter',
      'Kontrol motor terintegrasi',
      'Uji fungsi & pemeriksaan kendali',
    ],
    capabilityDetails: [
      {
        label: 'Migrasi & pemrograman PLC',
        description: 'Penggantian atau migrasi PLC lama, termasuk penyesuaian program dan diagram logika bila data sistem tersedia.',
      },
      {
        label: 'Pengembangan antarmuka HMI',
        description: 'Penataan tampilan HMI untuk membantu operator memantau parameter, status peralatan, dan informasi alarm.',
      },
      {
        label: 'Integrasi sensor & aktuator lapangan',
        description: 'Pemasangan serta pemeriksaan sensor dan aktuator yang terhubung ke modul masukan dan keluaran PLC.',
      },
      {
        label: 'Pemasangan & penyetelan Soft Starter',
        description: 'Pemasangan dan penyetelan parameter soft starter untuk membantu mengendalikan proses awal putaran motor.',
      },
      {
        label: 'Kontrol motor terintegrasi',
        description: 'Penyelarasan urutan kendali beberapa motor sesuai kebutuhan proses dan arsitektur sistem.',
      },
      {
        label: 'Uji fungsi & pemeriksaan kendali',
        description: 'Uji urutan kerja, pemeriksaan respons sensor, dan verifikasi fungsi kendali sebelum serah terima.',
      },
    ],
    commonConditions: [
      'PLC lama mengalami gangguan komunikasi atau suku cadangnya semakin sulit diperoleh.',
      'Layar HMI tidak lagi responsif atau tidak dapat menampilkan informasi pemantauan dengan baik.',
      'Urutan kerja otomatis perlu disesuaikan dengan perubahan proses atau kebutuhan operasional.',
      'Penyebab gangguan sulit ditelusuri karena informasi alarm dan dokumentasi sistem tidak memadai.',
    ],
  },
  {
    id: 'mekanikal-presisi',
    slug: 'mekanikal-presisi',
    title: 'Mekanikal & Komponen Presisi',
    description: 'Pemasangan, penggantian, dan penyelarasan komponen mekanikal pada sistem transmisi daya dan conveyor.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup pengadaan dan penggantian bearing, gearbox, shaft, roll, rantai, serta pekerjaan conveyor. Metode kerja dan kebutuhan tenaga spesialis ditentukan setelah cakupan pekerjaan diperiksa.',
    iconName: 'Wrench',
    capabilities: [
      'Pemasangan & penggantian bearing presisi',
      'Perawatan & perbaikan gearbox transmisi',
      'Penyelarasan coupling & shaft',
      'Sistem konveyor & perbaikan rantai penggerak',
      'Penyelarasan mekanikal sesuai cakupan proyek',
    ],
    capabilityDetails: [
      {
        label: 'Pemasangan & penggantian bearing presisi',
        description: 'Pembongkaran bearing lama dan pemasangan unit pengganti dengan metode yang disesuaikan dengan jenis serta kondisi komponen.',
      },
      {
        label: 'Perawatan & perbaikan gearbox transmisi',
        description: 'Pemeriksaan gearbox, kondisi pelumas, seal, dan komponen transmisi sesuai kebutuhan pekerjaan.',
      },
      {
        label: 'Penyelarasan coupling & shaft',
        description: 'Pemeriksaan dan penyetelan posisi poros serta coupling untuk membantu menjaga keselarasan sistem penggerak.',
      },
      {
        label: 'Sistem konveyor & perbaikan rantai penggerak',
        description: 'Penyetelan sabuk atau rantai conveyor serta pemeriksaan roll, sprocket, dan komponen penahan.',
      },
      {
        label: 'Penyelarasan mekanikal sesuai cakupan proyek',
        description: 'Posisi komponen diperiksa dan disesuaikan berdasarkan dokumen kerja. Kebutuhan alat serta tenaga spesialis ditentukan setelah survei.',
      },
    ],
    commonConditions: [
      'Unit reducer atau penggerak menunjukkan getaran yang meningkat saat dioperasikan.',
      'Oli pelumas bocor dari area seal atau rumah gearbox.',
      'Bearing menimbulkan bunyi atau gesekan yang tidak biasa ketika motor dijalankan.',
      'Rantai, sprocket, atau belt conveyor bergerak tidak sejajar dan memerlukan penyetelan.',
    ],
  },
  {
    id: 'hvac-refrigerasi',
    slug: 'hvac-refrigerasi',
    title: 'HVAC & Refrigerasi',
    description: 'Perbaikan AC VRF, penggantian instalasi AC split duct, kompresor, dan pekerjaan refrigerasi sesuai kebutuhan proyek.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup perbaikan AC VRF, penggantian instalasi AC split duct, penggantian kompresor, pemeriksaan tekanan, proses vakum, dan pekerjaan refrigerasi sesuai cakupan proyek.',
    iconName: 'Wind',
    capabilities: [
      'Perbaikan sistem AC VRF',
      'Instalasi & perbaikan AC split duct / ceiling',
      'Penggantian instalasi AC split duct',
      'Overhaul & perbaikan kompresor refrigerasi',
      'Pemeriksaan tekanan & sistem refrigerasi',
    ],
    capabilityDetails: [
      {
        label: 'Perbaikan sistem AC VRF',
        description: 'Pemeriksaan dan perbaikan unit VRF berdasarkan kondisi, cakupan pekerjaan, dan prosedur di lokasi klien.',
      },
      {
        label: 'Instalasi & perbaikan AC split duct / ceiling',
        description: 'Pemasangan dan perbaikan unit AC split duct atau ceiling sesuai kondisi unit serta instalasi yang tersedia.',
      },
      {
        label: 'Penggantian instalasi AC split duct',
        description: 'Pembongkaran dan pemasangan instalasi pengganti dilakukan sesuai gambar, spesifikasi, dan batas pekerjaan yang disepakati.',
      },
      {
        label: 'Overhaul & perbaikan kompresor refrigerasi',
        description: 'Pembongkaran, pemasangan, dan pemeriksaan kompresor serta komponen refrigerasi sesuai kebutuhan pekerjaan.',
      },
      {
        label: 'Pemeriksaan tekanan & sistem refrigerasi',
        description: 'Pemeriksaan tekanan, proses vakum, sambungan, dan komponen refrigerasi dilakukan bila termasuk dalam cakupan proyek.',
      },
    ],
    commonConditions: [
      'Suhu ruangan tidak mencapai target meskipun unit pendingin telah beroperasi.',
      'Tekanan refrigeran menunjukkan nilai yang tidak normal pada kondisi operasi tertentu.',
      'Unit kompresor luar ruangan menimbulkan bunyi atau getaran yang tidak biasa.',
      'Saluran udara diduga bocor sehingga distribusi udara di dalam ruangan tidak merata.',
    ],
  },
  {
    id: 'pompa-perairan',
    slug: 'pompa-perairan',
    title: 'Pompa & Sistem Perairan',
    description: 'Pengadaan pompa submersible, booster, sentrifugal, sistem filtrasi, dan komponen perpipaan sesuai spesifikasi proyek.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup pengadaan pompa submersible, booster, sentrifugal, pompa kolam, chlorinator, material perpipaan, dan sistem filtrasi. Pemasangan atau otomatisasi ditawarkan setelah survei dan pemeriksaan kondisi yang ada.',
    iconName: 'Droplets',
    capabilities: [
      'Pompa air transfer & submersible',
      'Sistem booster & peningkat tekanan',
      'Sistem sirkulasi pendingin & wahana',
      'Filtrasi kolam & pengolahan air bersih',
      'Panel kontrol otomatisasi pompa',
    ],
    capabilityDetails: [
      {
        label: 'Pompa air transfer & submersible',
        description: 'Pengadaan, pemasangan, dan pemeriksaan pompa celup atau pompa transfer beserta komponen pendukungnya.',
      },
      {
        label: 'Sistem booster & peningkat tekanan',
        description: 'Penanganan sistem pompa booster dan perangkat kendalinya untuk mendukung kebutuhan tekanan air fasilitas.',
      },
      {
        label: 'Sistem sirkulasi pendingin & wahana',
        description: 'Penanganan pompa dan komponen sirkulasi air pada fasilitas rekreasi atau sistem pendingin.',
      },
      {
        label: 'Filtrasi kolam & pengolahan air bersih',
        description: 'Pemeriksaan media filtrasi, filter vessel, serta proses pencucian balik sesuai kebutuhan sistem.',
      },
      {
        label: 'Panel kontrol otomatisasi pompa',
        description: 'Perakitan atau penyesuaian panel kontrol pompa, termasuk urutan operasi dan proteksi sesuai spesifikasi.',
      },
    ],
    commonConditions: [
      'Tekanan air berfluktuasi ketika beberapa titik pemakaian digunakan secara bersamaan.',
      'Pompa menunjukkan gejala kavitasi, bunyi, atau getaran yang tidak biasa.',
      'Pompa booster terlalu sering menyala dan berhenti dalam waktu singkat.',
      'Kualitas hasil filtrasi menurun dan media penyaring perlu diperiksa.',
    ],
  },
  {
    id: 'pencahayaan-show',
    slug: 'pencahayaan-show',
    title: 'Pencahayaan Teknis & Pertunjukan',
    description: 'Pemasangan penerangan area, pencahayaan panggung, dan sistem lampu bawah air sesuai kebutuhan proyek.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup pemasangan lampu bawah air, penerangan area, lampu panggung, jalur daya, serta sistem kendali pencahayaan DMX. Spesifikasi akhir ditentukan berdasarkan kondisi lokasi dan kebutuhan proyek.',
    iconName: 'Lightbulb',
    capabilities: [
      'Penerangan area & floodlight gedung',
      'Pencahayaan panggung & pertunjukan',
      'Pencahayaan bawah air',
      'Kendali pencahayaan & integrasi dimmer',
      'Pencahayaan arsitektural lanskap',
    ],
    capabilityDetails: [
      {
        label: 'Penerangan area & floodlight gedung',
        description: 'Pemasangan lampu sorot dan penerangan area berdasarkan titik pemasangan, kebutuhan cahaya, dan kondisi lingkungan.',
      },
      {
        label: 'Pencahayaan panggung & pertunjukan',
        description: 'Pemasangan serta penataan lampu moving head, spotlight, dan pencahayaan latar sesuai kebutuhan acara atau fasilitas.',
      },
      {
        label: 'Pencahayaan bawah air',
        description: 'Pemasangan armatur, kabel, konektor, dan dudukan lampu bawah air sesuai spesifikasi lingkungan pemasangan.',
      },
      {
        label: 'Kendali pencahayaan & integrasi dimmer',
        description: 'Pengawatan sinyal DMX dan konfigurasi perangkat pengendali intensitas cahaya sesuai kebutuhan sistem.',
      },
      {
        label: 'Pencahayaan arsitektural lanskap',
        description: 'Pemasangan penerangan dekoratif lanskap bertegangan ekstra rendah aman dari risiko sengatan.',
      },
    ],
    commonConditions: [
      'ELCB sering trip dan perlu diperiksa kemungkinan kebocoran arus pada lampu bawah air.',
      'Sinyal DMX antara konsol dan perangkat pencahayaan tidak bekerja secara konsisten.',
      'Intensitas lampu sorot menurun atau sebagian modul LED luar ruang tidak berfungsi.',
      'Kabel, konektor, atau armatur bawah air lama perlu diperiksa untuk menentukan kebutuhan penggantian.',
    ],
  },
];

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'distribusi-daya',
    title: 'Distribusi & Proteksi Daya',
    description: 'Pengalaman pada panel, MCCB, kontaktor, pengawatan, pengendali motor, dan komponen proteksi yang tercatat dalam dokumen proyek.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'pemrograman-plc',
    title: 'Pemrograman PLC & Logika Kontrol',
    description: 'Penggantian dan migrasi PLC/HMI, pengawatan, konfigurasi, serta pemeriksaan fungsi sesuai kebutuhan sistem yang ada.',
    iconName: 'Code',
  },
  {
    id: 'penyelarasan-mekanikal',
    title: 'Penyelarasan Shaft & Bearing',
    description: 'Pengadaan, penggantian, dan penyelarasan bearing, shaft, roll, gearbox, serta komponen conveyor sesuai cakupan proyek.',
    iconName: 'Activity',
  },
  {
    id: 'termodinamika-hvac',
    title: 'Sirkulasi Termal & HVAC',
    description: 'Perbaikan AC VRF, penggantian AC split duct, pemeriksaan tekanan, proses vakum, dan komponen refrigerasi.',
    iconName: 'Thermometer',
  },
  {
    id: 'dinamika-fluida-pompa',
    title: 'Sistem Pompa & Aliran Fluida',
    description: 'Pengadaan dan penanganan pompa submersible, booster, sentrifugal, sistem filtrasi, serta material perpipaan.',
    iconName: 'Gauge',
  },
  {
    id: 'pencahayaan-khusus',
    title: 'Pencahayaan Khusus & Luar Ruang',
    description: 'Pengadaan dan pemasangan lampu pertunjukan, lampu bawah air, jalur daya, kendali DMX, serta pengujian fungsi.',
    iconName: 'Sparkles',
  },
];

export const workProcessSteps: WorkProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Konsultasi & Pemeriksaan Lapangan',
    description: 'Kondisi fasilitas diperiksa untuk memahami kebutuhan, mencatat spesifikasi yang ada, dan menyusun cakupan penanganan awal.',
    details: [
      'Inspeksi fisik dan pengukuran parameter operasional',
      'Diskusi teknis dengan tim engineering / fasilitas',
      'Perumusan temuan awal dan pilihan tindak lanjut',
    ],
  },
  {
    stepNumber: 2,
    title: 'Perencanaan & Pelaksanaan',
    description: 'Material, metode, jadwal, dan kebutuhan tenaga disiapkan sebelum pekerjaan dilaksanakan sesuai kesepakatan proyek.',
    details: [
      'Verifikasi spesifikasi material dan komponen',
      'Pemasangan komponen serta penataan kabel atau perpipaan',
      'Penerapan APD dan prosedur pengamanan energi',
    ],
  },
  {
    stepNumber: 3,
    title: 'Pemeriksaan & Uji Fungsi',
    description: 'Hasil pekerjaan diperiksa dan diuji secara bertahap sesuai fungsi serta kriteria penerimaan yang disepakati.',
    details: [
      'Uji jalan dan pemeriksaan sensor atau proteksi',
      'Pengujian fungsi sesuai kriteria penerimaan proyek',
      'Instruksi penggunaan bila termasuk dalam cakupan pekerjaan',
    ],
  },
  {
    stepNumber: 4,
    title: 'Dokumentasi & Serah Terima',
    description: 'Dokumen hasil pekerjaan disusun sesuai persyaratan proyek sebagai bukti penyelesaian dan referensi tindak lanjut.',
    details: [
      'BAST atau dokumen penerimaan sesuai persyaratan',
      'Gambar pengawatan atau as-built bila termasuk dalam cakupan pekerjaan',
      'Rekomendasi tindak lanjut bila disepakati',
    ],
  },
];

export const brandItems: BrandItem[] = [
  {
    id: 'allen-bradley',
    name: 'Allen-Bradley',
    category: 'Otomasi & PLC',
    logoText: 'Allen-Bradley',
    logoPath: '/logo/brands/allen-bradley.svg',
    logoWidth: 160,
    logoHeight: 48,
  },
  {
    id: 'schneider',
    name: 'Schneider Electric',
    category: 'Kelistrikan & Kontrol',
    logoText: 'Schneider',
    logoPath: '/logo/brands/schneider.svg',
    logoWidth: 160,
    logoHeight: 48,
    logoScale: 0.88,
  },
  {
    id: 'sew-eurodrive',
    name: 'SEW Eurodrive',
    category: 'Gearbox & Motor',
    logoText: 'SEW-Eurodrive',
    logoPath: '/logo/brands/sew-eurodrive.svg',
    logoWidth: 160,
    logoHeight: 48,
    logoScale: 1.06,
  },
  {
    id: 'rexnord',
    name: 'Rexnord',
    category: 'Coupling & Transmisi',
    logoText: 'Rexnord',
    logoPath: '/logo/brands/rexnord.svg',
    logoWidth: 160,
    logoHeight: 48,
    logoScale: 0.98,
  },
  {
    id: 'skf',
    name: 'SKF',
    category: 'Bearing Presisi',
    logoText: 'SKF',
    logoPath: '/logo/brands/skf.svg',
    logoWidth: 130,
    logoHeight: 48,
    logoScale: 0.92,
  },
  {
    id: 'timken',
    name: 'Timken',
    category: 'Bearing Industri',
    logoText: 'Timken',
    logoPath: '/logo/brands/timken.svg',
    logoWidth: 150,
    logoHeight: 48,
    logoScale: 0.92,
  },
  {
    id: 'fenner',
    name: 'Fenner',
    category: 'Sabuk & Transmisi',
    logoText: 'Fenner',
    logoPath: '/logo/brands/fenner.svg',
    logoWidth: 130,
    logoHeight: 48,
    logoScale: 0.88,
  },
  {
    id: 'renold',
    name: 'Renold',
    category: 'Rantai Transmisi',
    logoText: 'Renold',
    logoPath: '/logo/brands/renold.svg',
    logoWidth: 160,
    logoHeight: 48,
    logoScale: 0.9,
  },
  {
    id: 'grundfos',
    name: 'Grundfos',
    category: 'Pompa & Perairan',
    logoText: 'Grundfos',
    logoPath: '/logo/brands/grundfos-official.svg',
    logoWidth: 160,
    logoHeight: 48,
    logoScale: 1,
  },
  {
    id: 'pentair',
    name: 'Pentair',
    category: 'Pompa & Filtrasi',
    logoText: 'Pentair',
    logoPath: '/logo/brands/sta-rite.svg',
    logoWidth: 150,
    logoHeight: 48,
    logoScale: 1.65,
  },
  {
    id: 'in-lite',
    name: 'in-Lite',
    category: 'Pencahayaan LED',
    logoText: 'in-Lite',
    logoPath: '/logo/brands/in-lite.svg',
    logoWidth: 150,
    logoHeight: 48,
    logoScale: 0.96,
    logoYOffset: -1,
  },
  {
    id: 'orphek',
    name: 'Orphek',
    category: 'Pencahayaan Khusus & LED',
    logoText: 'Orphek',
    logoPath: '/logo/brands/orphek.svg',
    logoWidth: 160,
    logoHeight: 48,
  },
  {
    id: 'philips',
    name: 'Philips',
    category: 'Pencahayaan & Armatur',
    logoText: 'Philips',
    logoPath: '/logo/brands/philips.svg',
    logoWidth: 160,
    logoHeight: 48,
  },
];

export const brandDisclaimer = 
  'Seluruh merek dan logo merupakan milik pemegang hak masing-masing. Pencantumannya hanya untuk menjelaskan pengalaman CBL dalam menangani spesifikasi suku cadang dan komponen terkait. CV Cakrawala Buana Lestari bukan distributor resmi atau mitra resmi dari merek-merek tersebut.';

export const portfolioConfidentialityNotice = 
  'Untuk menjaga kerahasiaan operasional mitra, nama perusahaan, lokasi terperinci, nilai transaksi, dan nomor dokumen tidak dipublikasikan. Studi kasus hanya menampilkan informasi teknis yang relevan dan dapat didukung oleh arsip pekerjaan CBL.';

export const whyUsPoints: WhyUsPoint[] = [
  {
    id: 'multi-disiplin',
    title: 'Layanan Teknik Terpadu',
    description: 'Kebutuhan kelistrikan, mekanikal, otomasi, HVAC, pompa, dan pencahayaan dapat dibahas melalui satu jalur koordinasi.',
    iconName: 'Layers',
  },
  {
    id: 'reaksi-cepat',
    title: 'Respons Berbasis Kebutuhan Proyek',
    description: 'Setiap permintaan ditelaah untuk menentukan cakupan pekerjaan, jadwal, akses lokasi, material, dan tenaga yang diperlukan.',
    iconName: 'Clock',
  },
  {
    id: 'pendekatan-teknis',
    title: 'Verifikasi Spesifikasi Komponen',
    description: 'Merek, tipe, kapasitas, dimensi, dan jumlah diperiksa terhadap dokumen kebutuhan sebelum pengadaan atau pemasangan.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'transparansi-kerja',
    title: 'Dokumentasi & Serah Terima',
    description: 'Dokumen pengiriman, pemeriksaan, pengujian, dan serah terima disiapkan sesuai persyaratan proyek.',
    iconName: 'FileText',
  },
];
