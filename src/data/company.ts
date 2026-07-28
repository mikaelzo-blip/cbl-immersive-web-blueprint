import { CompanyInfo, ServiceDivision, ExpertiseItem, WorkProcessStep, BrandItem, WhyUsPoint, NavigationItem } from '@/types/company';

// TODO: konfirmasi domain sebelum go-live
// TODO: ganti ke email domain sendiri (mis. marketing@<domain>) begitu domain aktif
export const companyInfo: CompanyInfo = {
  legalName: 'CV Cakrawala Buana Lestari',
  shortName: 'CBL',
  address: 'Jl Papanggo 2C No. 38, Kel. Papanggo, Kec. Tanjung Priok, Jakarta Utara 14340',
  phone: '(021) 2606-3396',
  phoneRaw: '02126063396',
  whatsappNumber: '6285184549522',
  whatsappFormatted: '0851-8454-9522',
  email: 'cvcakrawala.market@gmail.com', // TODO: ganti ke email domain sendiri begitu domain aktif
  serviceHours: '24 jam / 7 hari',
  seo: {
    siteUrl: 'https://cakrawala-buana-lestari.co.id', // TODO: konfirmasi domain sebelum go-live
    defaultTitle: 'CV Cakrawala Buana Lestari (CBL) — Penyedia Jasa Teknik Terpadu',
    defaultDescription: 'Penyedia layanan teknik industri & fasilitas terpadu: kelistrikan & panel kontrol, otomasi PLC/HMI, mekanikal presisi, HVAC refrigerasi, sistem pompa, dan pencahayaan khusus.',
    ogImage: '/images/og-cbl.jpg',
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
    description: 'Perakitan, perbaikan, dan perawatan panel distribusi listrik industri serta sistem proteksi arus daya.',
    longDescription: 'Divisi Kelistrikan & Panel Kontrol CBL melayani perancangan, perakitan baru, hingga troubleshooting panel distribusi listrik utama (PUTR), panel sub-distribusi, dan panel kontrol penggerak motor untuk gedung komersial dan fasilitas industri.',
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
    description: 'Modernisasi sistem kendali otomatisasi proses, migrasi PLC, dan integrasi kendali terpusat.',
    longDescription: 'Divisi Otomasi & Sistem Kontrol CBL menangani pemrograman logika PLC, pembaruan antarmuka layar sentuh HMI, serta integrasi sensor lapangan untuk meningkatkan presisi dan efisiensi urutan operasional fasilitas industri.',
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
    longDescription: 'Divisi Mekanikal & Komponen Presisi CBL menyediakan layanan penataan penyeimbangan poros (alignment), overhaul reducer gearbox, pergantian bearing presisi, dan perawatan rantai konveyor industri.',
    iconName: 'Wrench',
    capabilities: [
      'Pemasangan & penggantian bearing presisi',
      'Perawatan & perbaikan gearbox transmisi',
      'Coupling & shaft alignment',
      'Sistem konveyor & perbaikan rantai penggerak',
      'Laser alignment & penyelarasan mekanikal',
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
        label: 'Laser alignment & penyelarasan mekanikal',
        description: 'Pengukuran penyelarasan dua sumbu presisi tinggi menggunakan perangkat optik laser presisi.',
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
    description: 'Penanganan sistem pengondisian udara skala besar, pendingin proses, dan perpipaan ducting.',
    longDescription: 'Divisi HVAC & Refrigerasi CBL menangani overhaul kompresor pendingin, perawatan berkala AC VRF / Chiller, pembuatan ducting sirkulasi, dan pembersihan sistem refrigeran gedung.',
    iconName: 'Wind',
    capabilities: [
      'Penanganan AC VRF & sistem chiller',
      'Instalasi & perbaikan AC split duct / ceiling',
      'Perancangan & perbaikan fabrikasi ducting',
      'Overhaul & perbaikan kompresor refrigerasi',
      'Sistem pendingin proses industri',
      'Preventive maintenance berkala',
    ],
    capabilityDetails: [
      {
        label: 'Penanganan AC VRF & sistem chiller',
        description: 'Pemantauan tekanan freon siklus kondensasi dan kalibrasi sensor suhu ruangan terpusat.',
      },
      {
        label: 'Instalasi & perbaikan AC split duct / ceiling',
        description: 'Pemasangan unit pendingin tersembunyi ceiling cassette dan perbaikan motor blower penarik udara.',
      },
      {
        label: 'Perancangan & perbaikan fabrikasi ducting',
        description: 'Pembuatan saluran udara BJLS terisolasi dan perbaikan kebocoran sambungan ducting pencabang.',
      },
      {
        label: 'Overhaul & perbaikan kompresor refrigerasi',
        description: 'Bongkar pasang kompresor semi-hermetic, pengujian uji vakum micron, dan pergantian filter drier.',
      },
      {
        label: 'Sistem pendingin proses industri',
        description: 'Penanganan sirkulasi pendingin mesin produksi dan penyesuaian laju aliran refrigeran.',
      },
      {
        label: 'Preventive maintenance berkala',
        description: 'Jadwal pembersihan berkala evaporator/kondensor dan pemeriksaan ketersediaan oli kompresor.',
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
    description: 'Instalasi, overhaul, dan pembuatan otomatisasi sistem pemompaan air gedung serta fasilitas rekreasi.',
    longDescription: 'Divisi Pompa & Sistem Perairan CBL menangani instalasi rangkaian pompa booster bertekanan konstan, otomatisasi pergantian pompa (alternating control), overhaul sentrifugal, dan perbaikan filtrasi air.',
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
    description: 'Perancangan dan pengujian sistem pembagi arus listrik dengan tingkat proteksi isolasi sesuai standar teknis keselamatan.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'pemrograman-plc',
    title: 'Program PLC & Logika Industri',
    description: 'Pengkodean logika kontrol PLC untuk efisiensi urutan kerja mesin dan pencegahan kecelakaan operasional.',
    iconName: 'Code',
  },
  {
    id: 'penyelarasan-mekanikal',
    title: 'Penyelarasan Shaft & Bearing',
    description: 'Toleransi pengukuran presisi tinggi pada pemasangan bearing dan poros untuk meminimalkan getaran dan aus.',
    iconName: 'Activity',
  },
  {
    id: 'termodinamika-hvac',
    title: 'Sirkulasi Termal & HVAC',
    description: 'Pengaturan kesetimbangan tekanan refrigeran dan aliran udara ducting untuk stabilitas suhu ruangan operasional.',
    iconName: 'Thermometer',
  },
  {
    id: 'dinamika-fluida-pompa',
    title: 'Otomatisasi Aliran Fluida',
    description: 'Penyetelan head total dan debit pompa berpasangan dengan pemantauan tekanan otomatis.',
    iconName: 'Gauge',
  },
  {
    id: 'pencahayaan-khusus',
    title: 'Pencahayaan Khusus & Outdoor',
    description: 'Pemasangan armatur lampu kedap air (IP68) dan penataan konsol pengendali ritme pencahayaan pertunjukan.',
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
      'Pengujian simulasi kondisi darurat dan kendali',
      'Instruksi penggunaan kepada staf operasional setempat',
    ],
  },
  {
    stepNumber: 4,
    title: 'Dokumentasi & Serah Terima',
    description: 'Penyusunan berkas hasil pekerjaan secara transparan sebagai referensi perawatan fasilitas di masa mendatang.',
    details: [
      'Penerbitan Berita Acara Serah Terima (BAST)',
      'Penyerahan skema wiring / diagram sistem terbaru',
      'Rekomendasi jadwal perawatan preventif',
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
    title: 'Dukungan Siaga 24 Jam',
    description: 'Tim teknis siap merespon panggilan darurat kendala fasilitas operasional kapan pun terjadi downtime.',
    iconName: 'Clock',
  },
  {
    id: 'pendekatan-teknis',
    title: 'Pendekatan Berbasis Komponen SAH',
    description: 'Penggunaan suku cadang bermerek industri bereputasi untuk menjamin keandalan umur pakai sistem.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'transparansi-kerja',
    title: 'Dokumentasi & Berita Acara Rinci',
    description: 'Setiap tahapan penanganan disertai laporan pengujian parameter teknis dan skema sistem terbarukan.',
    iconName: 'FileText',
  },
];
