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
    defaultTitle: 'CV Cakrawala Buana Lestari (CBL) — Penyedia Jasa Teknik Terpadu',
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
    description: 'Pengadaan, pemasangan, penggantian, wiring, dan pemeriksaan panel serta komponen proteksi sesuai lingkup proyek.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup panel kontrol, MCCB, kontaktor, drive, soft starter, wiring, dan komponen distribusi. Kebutuhan perancangan atau pengujian khusus ditetapkan setelah survei dan telaah dokumen teknis.',
    iconName: 'Zap',
    capabilities: [
      'Panel kontrol & distribusi utama',
      'MCCB & sistem proteksi kelistrikan',
      'Kontaktor & perakitan starter motor',
      'Inverter motor (VFD) & speed controller',
      'Panel view & instrumen pemantauan daya',
      'Troubleshooting kelistrikan & perbaikan darurat',
    ],
    capabilityDetails: [
      {
        label: 'Panel kontrol & distribusi utama',
        description: 'Perakitan busbar tembaga murni, pembagian beban arus antar-fase, dan integrasi penutup enclosure berstandar indeks proteksi IP.',
      },
      {
        label: 'MCCB & sistem proteksi kelistrikan',
        description: 'Penggantian breaker utama Molded Case Circuit Breaker dan kalibrasi pemutus arus hubung singkat untuk keamanan beban lebih.',
      },
      {
        label: 'Kontaktor & perakitan starter motor',
        description: 'Perangkaian kontaktor magnetik, thermal overload relay, dan sistem penguncian (interlock) keselamatan penggerak.',
      },
      {
        label: 'Inverter motor (VFD) & speed controller',
        description: 'Pemasangan penggerak frekuensi variabel untuk efisiensi akselerasi motor listrik dan pengaturan kecepatan putar.',
      },
      {
        label: 'Panel view & instrumen pemantauan daya',
        description: 'Instalasi meter digital arus Volt/Ampere/Hz dan penataan lampu indikator kondisi kerja panel.',
      },
      {
        label: 'Troubleshooting kelistrikan & perbaikan darurat',
        description: 'Pelacakan cepat titik korsleting, ketidakseimbangan fase daya, dan kenaikan suhu panas abnormal pada jaringan listrik.',
      },
    ],
    commonConditions: [
      'Panel utama mengalami trip mendadak tanpa pola jeda waktu yang jelas pada jam operasional puncak.',
      'Suhu panas abnormal pada komponen busbar atau terminal kabel panel distribusi utama.',
      'Ketidakseimbangan pembagian arus beban kelistrikan antar-fase yang berisiko merusak peralatan sensitif.',
      'Motor listrik mengalami kelebihan arus awal (inrush current) saat dijalankan menggunakan metode starter konvensional.',
      'Kebutuhan peremajaan jalur kabel distribusi dan pembaruan komponen breaker berusia lama.',
    ],
  },
  {
    id: 'otomasi-kontrol',
    slug: 'otomasi-kontrol',
    title: 'Otomasi & Sistem Kontrol',
    description: 'Penggantian, migrasi, setting, wiring, dan pengujian PLC/HMI serta perangkat kendali motor sesuai lingkup proyek.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup penggantian panel view dan PLC, inverter, drive, soft starter, sensor, wiring, setting, dan commissioning. Perubahan logika atau integrasi lanjutan hanya ditawarkan setelah data sistem eksisting ditelaah.',
    iconName: 'Cpu',
    capabilities: [
      'Migrasi & pemrograman PLC',
      'Pengembangan antarmuka HMI',
      'Integrasi sensor & aktuator lapangan',
      'Pemasangan & penyetelan Soft Starter',
      'Kontrol motor terintegrasi',
      'Commissioning & kalibrasi kendali',
    ],
    capabilityDetails: [
      {
        label: 'Migrasi & pemrograman PLC',
        description: 'Pembaruan arsitektur modul PLC tipe lama ke generasi terkini serta penulisan ulang diagram logika kontrol (Ladder Diagram).',
      },
      {
        label: 'Pengembangan antarmuka HMI',
        description: 'Perancangan grafik tampilan layar sentuh yang ergonomis untuk memudahkan pemantauan parameter kerja dan penanganan kode alarm.',
      },
      {
        label: 'Integrasi sensor & aktuator lapangan',
        description: 'Pemasangan instrumen ukur tekanan, temperatur, posisi, dan debit arus yang terhubung langsung ke modul I/O PLC.',
      },
      {
        label: 'Pemasangan & penyetelan Soft Starter',
        description: 'Pengaturan waktu peningkatan tegangan gradual untuk memperhalus momen awal putaran motor berkapasitas besar.',
      },
      {
        label: 'Kontrol motor terintegrasi',
        description: 'Sinkronisasi kendali antar-motor penggerak dalam satu alur komunikasi terpusat.',
      },
      {
        label: 'Commissioning & kalibrasi kendali',
        description: 'Pengujian uji coba jalan berurutan (sequence test) dan verifikasi respon pembacaan sensor secara presisi.',
      },
    ],
    commonConditions: [
      'Modul PLC generasi lama mengalami kegagalan fungsi komunikasi atau kelangkaan suku cadang pengganti.',
      'Layar sentuh HMI mengalami penurunan kepekaan responsif atau kerusakan visual grafik pemantauan.',
      'Kebutuhan perubahan urutan kerja otomatis (sequence modification) untuk menyesuaikan kapasitas proses produksi baru.',
      'Kesulitan dalam mendiagnosa titik penyebab kegagalan proses otomatisasi akibat ketiadaan indikasi kode alarm.',
    ],
  },
  {
    id: 'mekanikal-presisi',
    slug: 'mekanikal-presisi',
    title: 'Mekanikal & Komponen Presisi',
    description: 'Instalasi, penggantian, dan alignment unit mekanikal transmisi daya dan konveyor industri.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup pengadaan dan penggantian bearing, gearbox, shaft, roll, rantai, serta pekerjaan conveyor. Metode dan kebutuhan tenaga spesialis ditentukan setelah pemeriksaan lingkup.',
    iconName: 'Wrench',
    capabilities: [
      'Pemasangan & penggantian bearing presisi',
      'Perawatan & perbaikan gearbox transmisi',
      'Coupling & shaft alignment',
      'Sistem konveyor & perbaikan rantai penggerak',
      'Penyelarasan mekanikal sesuai lingkup proyek',
    ],
    capabilityDetails: [
      {
        label: 'Pemasangan & penggantian bearing presisi',
        description: 'Pengangkatan bantalan bola/rol aus dan pemasangan bearing baru menggunakan metode pemanasan induksi termal terukur.',
      },
      {
        label: 'Perawatan & perbaikan gearbox transmisi',
        description: 'Pemeriksaan keausan gigi reducer, penggantian oli pelumas khusus transmisi, dan perbaikan seal minyak pencegah bocor.',
      },
      {
        label: 'Coupling & shaft alignment',
        description: 'Pengukuran ketidaklurusan poros engkol dan penyetelan ulang posisi kopling untuk meminimalkan getaran.',
      },
      {
        label: 'Sistem konveyor & perbaikan rantai penggerak',
        description: 'Penyetelan ketegangan sabuk/rantai konveyor dan penggantian sprocket penggerak yang tererosi.',
      },
      {
        label: 'Penyelarasan mekanikal sesuai lingkup proyek',
        description: 'Pemeriksaan dan penyesuaian posisi komponen dilakukan sesuai dokumen kerja; alat dan mitra spesialis ditentukan setelah survei.',
      },
    ],
    commonConditions: [
      'Tingkat getaran (vibration level) pada unit reducer penggerak melebihi ambang batas toleransi keselamatan.',
      'Kebocoran oli pelumas pada seal rumah gearbox akibat keausan poros transmisi.',
      'Timbul suara bising gesekan berlebih dari rumah bearing saat motor penggerak dijalankan.',
      'Rantai konveyor sering mengalami lompatan sprocket atau ketidaksejajaran pergerakan sabuk pengangkut.',
    ],
  },
  {
    id: 'hvac-refrigerasi',
    slug: 'hvac-refrigerasi',
    title: 'HVAC & Refrigerasi',
    description: 'Perbaikan AC VRF, penggantian instalasi AC split duct, kompresor, dan pekerjaan refrigerasi sesuai lingkup proyek.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup perbaikan AC VRF, penggantian instalasi AC split duct, penggantian kompresor, pemeriksaan tekanan, vacuum, dan pekerjaan refrigerasi sesuai lingkup proyek.',
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
        description: 'Pemeriksaan dan perbaikan unit VRF berdasarkan kondisi, ruang lingkup kerja, dan prosedur lokasi klien.',
      },
      {
        label: 'Instalasi & perbaikan AC split duct / ceiling',
        description: 'Pemasangan unit pendingin tersembunyi ceiling cassette dan perbaikan motor blower penarik udara.',
      },
      {
        label: 'Penggantian instalasi AC split duct',
        description: 'Pembongkaran dan pemasangan instalasi pengganti dilakukan sesuai gambar, spesifikasi, dan batas pekerjaan yang disepakati.',
      },
      {
        label: 'Overhaul & perbaikan kompresor refrigerasi',
        description: 'Bongkar pasang kompresor semi-hermetic, pengujian uji vakum micron, dan pergantian filter drier.',
      },
      {
        label: 'Pemeriksaan tekanan & sistem refrigerasi',
        description: 'Pemeriksaan tekanan, vacuum, sambungan, dan komponen refrigerasi dilaksanakan bila termasuk ruang lingkup proyek.',
      },
    ],
    commonConditions: [
      'Penurunan efisiensi pendinginan ruangan (suhu ruangan tidak mencapai target setpoint meskipun unit menyala penuh).',
      'Kenaikan tekanan freon tinggi abnormal pada unit kondensor outdoor saat cuaca terik.',
      'Kebisingan atau getaran kasar dari unit kompresor outdoor saat beban siklus pendinginan meningkat.',
      'Adanya indikasi kebocoran saluran ducting sirkulasi yang mengganggu keseimbangan aliran udara ruangan.',
    ],
  },
  {
    id: 'pompa-perairan',
    slug: 'pompa-perairan',
    title: 'Pompa & Sistem Perairan',
    description: 'Pengadaan pompa submersible, booster, sentrifugal, filtrasi, dan komponen sistem air sesuai spesifikasi proyek.',
    longDescription: 'Pengalaman terdokumentasi CBL mencakup pengadaan pompa submersible, booster, sentrifugal, pool pump, chlorinator, material plumbing, dan filtrasi. Pemasangan atau otomatisasi ditawarkan setelah survei dan verifikasi kondisi eksisting.',
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
        description: 'Pemasangan unit pompa celup/transfer dan perbaikan mechanical seal pendorong air.',
      },
      {
        label: 'Sistem booster & peningkat tekanan',
        description: 'Rangkaian paralel pompa booster terintegrasi VFD dan pressure transducer untuk tekanan stabil.',
      },
      {
        label: 'Sistem sirkulasi pendingin & wahana',
        description: 'Penanganan laju debit air sirkulasi wahana rekreasi dan pendingin cooling tower.',
      },
      {
        label: 'Filtrasi kolam & pengolahan air bersih',
        description: 'Penggantian pasir kuarsa filter vessel dan pembuatan sistem pencucian balik (backwash) otomatis.',
      },
      {
        label: 'Panel kontrol otomatisasi pompa',
        description: 'Perakitan panel giliran otomatis (duty-standby alternating) serta proteksi jalan kering (dry-run).',
      },
    ],
    commonConditions: [
      'Fluktuasi tekanan air pada jaringan distribusi gedung saat terjadi penggunaan air bersamaan di beberapa titik.',
      'Terjadinya gejala kavitasi atau getaran kencang pada rumah pompa akibat gangguan aliran pasokan masukan.',
      'Pompa booster mengalami pengoperasian nyala-mati terlalu sering (cycling trip) yang merusak kontaktor.',
      'Penurunan kejernihan air filtrasi kolam fasilitas rekreasi akibat kejenuhan media pasir penyaring.',
    ],
  },
  {
    id: 'pencahayaan-show',
    slug: 'pencahayaan-show',
    title: 'Pencahayaan & Sistem Show',
    description: 'Instalasi penerangan teknis area luas, pencahayaan panggung rekreasi, dan underwater lighting.',
    longDescription: 'Divisi Pencahayaan & Sistem Show CBL melayani instalasi armatur lampu bawah air kedap air IP68, penerangan floodlight area luas gedung, dan integrasi konsol pengendali pencahayaan panggung rekreasi (DMX512).',
    iconName: 'Lightbulb',
    capabilities: [
      'Area lighting & floodlight gedung',
      'Stage lighting & sistem lampu pertunjukan',
      'Underwater lighting untuk wahana air',
      'Control lighting & integrasi dimmer',
      'Pencahayaan arsitektural lanskap',
    ],
    capabilityDetails: [
      {
        label: 'Area lighting & floodlight gedung',
        description: 'Pemasangan lampu sorot LED daya besar outdoor dengan penataan jarak pancar cahaya optimal.',
      },
      {
        label: 'Stage lighting & sistem lampu pertunjukan',
        description: 'Penataan lampu moving head, spot light, dan pencahayaan latar panggung pertunjukan.',
      },
      {
        label: 'Underwater lighting untuk wahana air',
        description: 'Instalasi armatur lampu stainless steel kedap air IP68 dengan penutup resin penyekat khusus.',
      },
      {
        label: 'Control lighting & integrasi dimmer',
        description: 'Pengkabelan sinyal kendali DMX512 dan pemrograman modul pengatur intensitas cahaya (dimmer).',
      },
      {
        label: 'Pencahayaan arsitektural lanskap',
        description: 'Pemasangan penerangan dekoratif lanskap bertegangan ekstra rendah aman dari risiko sengatan.',
      },
    ],
    commonConditions: [
      'Pemutus arus ELCB sering trip akibat kebocoran arus listrik pada armatur lampu bawah air eksisting.',
      'Kegagalan sinyal komunikasi kendali DMX antara konsol utama dengan armatur panggung pertunjukan.',
      'Penurunan intensitas pencahayaan lampu sorot area luas atau kerusakan titik modul driver LED outdoor.',
      'Kebutuhan peremajaan instalasi kabel bawah air menggunakan material berstandar IP68 tahan kimiawi kolam.',
    ],
  },
];

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'distribusi-daya',
    title: 'Distribusi & Proteksi Daya',
    description: 'Pengalaman pada panel, MCCB, kontaktor, wiring, drive, dan komponen proteksi yang tercatat dalam dokumen proyek.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'pemrograman-plc',
    title: 'Program PLC & Logika Industri',
    description: 'Penggantian dan migrasi PLC/HMI, wiring, setting, dan pemeriksaan fungsi sesuai kebutuhan sistem eksisting.',
    iconName: 'Code',
  },
  {
    id: 'penyelarasan-mekanikal',
    title: 'Penyelarasan Shaft & Bearing',
    description: 'Pengadaan, penggantian, dan penyelarasan bearing, shaft, roll, gearbox, serta komponen conveyor sesuai lingkup proyek.',
    iconName: 'Activity',
  },
  {
    id: 'termodinamika-hvac',
    title: 'Sirkulasi Termal & HVAC',
    description: 'Perbaikan AC VRF, penggantian AC split duct, pemeriksaan tekanan, vacuum, dan komponen refrigerasi.',
    iconName: 'Thermometer',
  },
  {
    id: 'dinamika-fluida-pompa',
    title: 'Otomatisasi Aliran Fluida',
    description: 'Pengadaan dan penanganan pompa submersible, booster, sentrifugal, filtrasi, serta material plumbing.',
    iconName: 'Gauge',
  },
  {
    id: 'pencahayaan-khusus',
    title: 'Pencahayaan Khusus & Outdoor',
    description: 'Pengadaan dan instalasi lampu show, underwater lighting, jalur daya, kontrol DMX, serta pengujian fungsi.',
    iconName: 'Sparkles',
  },
];

export const workProcessSteps: WorkProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Konsultasi & Survei Lapangan',
    description: 'Pemeriksaan teknis langsung di lokasi fasilitas untuk mengidentifikasi gejala kerusakan, mengukur spesifikasi eksisting, dan merumuskan lingkup penanganan.',
    details: [
      'Inspeksi fisik dan pengukuran parameter operasional',
      'Diskusi teknis dengan tim engineering / fasilitas',
      'Penyusunan laporan temuan dan opsi solutif',
    ],
  },
  {
    stepNumber: 2,
    title: 'Pengadaan & Pemasangan',
    description: 'Pemilihan suku cadang sesuai spesifikasi teknis dan pelaksanaan pekerjaan teknis dengan standar keselamatan kerja ketat.',
    details: [
      'Penyediaan komponen bermerek dan terverifikasi',
      'Pemasangan komponen presisi dan perakitan kabel/perpipaan',
      'Penerapan APD dan prosedur isolasi energi aman',
    ],
  },
  {
    stepNumber: 3,
    title: 'Commissioning & Pelatihan',
    description: 'Pengujian beban sistem secara bertahap untuk memastikan kesesuaian parameter teknis sebelum pengoperasian penuh.',
    details: [
      'Test run dan kalibrasi sensor / proteksi',
      'Pengujian fungsi sesuai kriteria penerimaan proyek',
      'Instruksi penggunaan bila termasuk ruang lingkup',
    ],
  },
  {
    stepNumber: 4,
    title: 'Dokumentasi & Serah Terima',
    description: 'Penyusunan berkas hasil pekerjaan secara transparan sebagai referensi perawatan fasilitas di masa mendatang.',
    details: [
      'BAST atau dokumen penerimaan sesuai persyaratan',
      'Gambar wiring / as-built bila termasuk ruang lingkup',
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
    logoPath: '/logo/brands/allen-bradley.png',
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
  },
  {
    id: 'sew-eurodrive',
    name: 'SEW Eurodrive',
    category: 'Gearbox & Motor',
    logoText: 'SEW-Eurodrive',
    logoPath: '/logo/brands/sew-eurodrive.svg',
    logoWidth: 160,
    logoHeight: 48,
  },
  {
    id: 'rexnord',
    name: 'Rexnord',
    category: 'Coupling & Transmisi',
    logoText: 'Rexnord',
    logoPath: '/logo/brands/rexnord.svg',
    logoWidth: 160,
    logoHeight: 48,
  },
  {
    id: 'skf',
    name: 'SKF',
    category: 'Bearing Presisi',
    logoText: 'SKF',
    logoPath: '/logo/brands/skf.svg',
    logoWidth: 130,
    logoHeight: 48,
  },
  {
    id: 'timken',
    name: 'Timken',
    category: 'Bearing Industri',
    logoText: 'Timken',
    logoPath: '/logo/brands/timken.svg',
    logoWidth: 150,
    logoHeight: 48,
  },
  {
    id: 'fenner',
    name: 'Fenner',
    category: 'Sabuk & Transmisi',
    logoText: 'Fenner',
    logoPath: '/logo/brands/fenner.svg',
    logoWidth: 130,
    logoHeight: 48,
  },
  {
    id: 'renold',
    name: 'Renold',
    category: 'Rantai Transmisi',
    logoText: 'Renold',
    logoPath: '/logo/brands/renold.svg',
    logoWidth: 160,
    logoHeight: 48,
  },
  {
    id: 'grundfos',
    name: 'Grundfos',
    category: 'Pompa & Perairan',
    logoText: 'Grundfos',
    logoPath: '/logo/brands/grundfos.svg',
    logoWidth: 160,
    logoHeight: 48,
  },
  {
    id: 'sta-rite',
    name: 'Sta-Rite',
    category: 'Pompa & Filtrasi',
    logoText: 'Sta-Rite',
    logoPath: '/logo/brands/sta-rite.svg',
    logoWidth: 150,
    logoHeight: 48,
  },
  {
    id: 'in-lite',
    name: 'in-Lite',
    category: 'Pencahayaan LED',
    logoText: 'in-Lite',
    logoPath: '/logo/brands/in-lite.svg',
    logoWidth: 150,
    logoHeight: 48,
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
  'Merek dan logo yang tercantum adalah milik dari masing-masing pemegang hak merek. Ditampilkan semata-mata untuk menjelaskan cakupan spesifikasi suku cadang dan komponen teknis yang biasa ditangani oleh tim CBL. CV Cakrawala Buana Lestari bukan merupakan distributor resmi atau authorized partner dari merek-merek tersebut.';

export const portfolioConfidentialityNotice = 
  'Demi menjaga kerahasiaan dan privasi operasional mitra, nama spesifik perusahaan dan lokasi rinci tidak dipublikasikan. Studi kasus di atas menyajikan gambaran teknis objektif dari proyek penanganan yang telah direalisasikan oleh CBL.';

export const whyUsPoints: WhyUsPoint[] = [
  {
    id: 'multi-disiplin',
    title: 'Layanan Teknik Terpadu',
    description: 'Satu pintu penanganan untuk masalah kelistrikan, mekanikal, otomatisasi, dan HVAC tanpa perlu koordinasi banyak sub-kontraktor.',
    iconName: 'Layers',
  },
  {
    id: 'reaksi-cepat',
    title: 'Respons Berbasis Kebutuhan Proyek',
    description: 'Permintaan ditelaah untuk menentukan lingkup, jadwal, akses lokasi, material, dan tenaga yang sesuai sebelum pekerjaan dimulai.',
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
    title: 'Dokumentasi & Berita Acara Rinci',
    description: 'Dokumen pengiriman, pemeriksaan, pengujian, dan serah terima disiapkan sesuai persyaratan setiap proyek.',
    iconName: 'FileText',
  },
];
