# CBL Immersive Web Blueprint

Blueprint lintas-agent untuk redesign website **CV Cakrawala Buana Lestari (CBL)**.

Repository ini **bukan repository production website**. Fungsinya adalah menjadi **single source of truth** untuk art direction, UX, 3D, motion, content rules, technical architecture, dan cara kerja AI agent yang ikut mengembangkan website CBL.

## Tujuan utama

Membangun website perusahaan engineering/contractor yang terasa **dirancang oleh studio profesional**, bukan hasil generator template AI.

Website harus terasa:

- industrial
- editorial
- architectural
- technically credible
- premium tetapi restrained
- berbasis dokumentasi proyek nyata
- immersive tanpa menjadi gimmick

Website **tidak boleh** terasa seperti SaaS landing page, crypto dashboard, template Webflow generik, atau "AI slop".

## Konsep inti

CBL memiliki kompetensi utama pada:

- electrical & automation
- mechanical systems
- conveyor / gearbox / drivetrain
- pump & water systems
- HVAC
- lighting / DMX
- technical procurement

Strategi visual:

**3D menjelaskan sistem. Foto proyek nyata membuktikan pekerjaan.**

3D bukan dekorasi. Setiap objek 3D harus membantu user memahami kapabilitas teknis CBL.

## Immersive interaction model

Arah yang sudah diputuskan:

- navigasi cerita utama menggunakan **vertical scroll**
- **tidak ada horizontal page scroll** untuk mengikuti cerita
- section 3D boleh menggunakan sticky/full-screen scrollytelling
- saat user scroll ke bawah, objek 3D tetap dominan dan teks/narasi berubah per tahap
- 3D dapat merespons pointer/drag sebagai interaksi sekunder
- pada mobile, interaksi harus tetap ringan, jelas, dan tidak memaksa gesture rumit
- `prefers-reduced-motion` wajib dihormati

Contoh pola hero:

1. system overview
2. transmission / component relationship
3. inspection logic
4. field execution
5. transition ke dokumentasi proyek nyata

## Tiga objek 3D prioritas

### 1. Gearbox / drivetrain — prioritas tertinggi

Hero / flagship technical story.

Komponen yang dapat divisualkan:

`motor -> coupling -> gearbox -> shaft -> bearing -> sprocket/chain -> conveyor`

Potensi interaction:

- orbit ringan
- exploded view
- casing reveal / cutaway
- component highlights
- scroll-driven camera progression
- callout teknis minimal

### 2. Industrial control panel

Untuk menjelaskan automation dan electrical integration.

Elemen:

- HMI
- PLC
- inverter / drive
- soft starter
- contactor
- MCCB
- power supply
- wiring / signal flow

Potensi interaction:

- cabinet door open
- highlight per device
- signal path
- commissioning story

### 3. Pump / water system

Untuk menjelaskan pump, plumbing, filtration, dan flow.

Elemen:

- motor
- shaft
- impeller
- mechanical seal
- housing
- suction
- discharge

Potensi interaction:

- cutaway
- impeller rotation
- flow visualization
- callout komponen

## Asset 3D tier berikutnya

- conveyor system
- bearing + shaft exploded view
- HVAC / VRF system
- lighting / DMX fixture

## Homepage direction

Urutan konseptual:

1. **Immersive 3D hero** — gearbox/drivetrain
2. **Credibility / company overview** — editorial, bukan card dashboard
3. **Services / capability index** — structured list, bukan card spam
4. **Control panel technical story**
5. **Selected projects** — foto nyata, case-study editorial
6. **Pump / water-system story**
7. **Expertise / technical index**
8. **Process / timeline**
9. **Brands / technical ecosystem**
10. **Vendor/legal readiness** — document register
11. **Contact / project inquiry**

## Design language

Gunakan:

- strong typography
- whitespace
- asymmetrical composition
- restrained palette
- technical grids hanya bila punya fungsi
- real project photography
- precise labels / metadata
- subtle rules / borders
- motion dengan easing dan timing yang tenang

Hindari:

- card di setiap section
- rounded rectangle berlebihan
- pill badge berlebihan
- glassmorphism
- neon glow
- purple/blue SaaS gradient
- floating decorative cards
- fake stats
- fake testimonials
- fake client logos
- generic stock construction imagery
- icon di setiap heading
- fade-up untuk semua elemen
- animasi hanya karena bisa
- copy seperti "Building Tomorrow, Today"

Lihat aturan lengkap di [`docs/03-ANTI-AI-SLOP.md`](docs/03-ANTI-AI-SLOP.md).

## Prinsip konten

Semua klaim harus berasal dari data perusahaan atau dokumentasi proyek yang dapat dipertanggungjawabkan.

Jangan membuat:

- jumlah client palsu
- persentase kepuasan palsu
- tahun pengalaman yang tidak terverifikasi
- testimonial fiktif
- daftar brand/client tanpa sumber
- capability yang sebenarnya belum pernah dikerjakan

Bahasa website harus spesifik, teknis, dan mudah dipahami calon klien non-engineer.

## Repository implementasi saat blueprint ini dibuat

Reference implementation saat ini:

- repo: `mikaelzo-blip/cakrawala-web-3-refine-2`
- experimental redesign branch: `design/human-art-direction`
- stack yang ditemukan: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- prototype 3D awal: native WebGL

Repository blueprint ini tetap menjadi sumber keputusan desain, meskipun implementation repo atau stack dapat berubah.

## Cara agent mulai bekerja

**Wajib baca sebelum coding:**

1. `AGENTS.md`
2. `docs/01-PROJECT-VISION.md`
3. `docs/02-DESIGN-DIRECTION.md`
4. `docs/03-ANTI-AI-SLOP.md`
5. dokumen khusus area yang sedang dikerjakan

Jangan langsung "generate homepage" dari satu prompt. Kerjakan section-by-section, screenshot, review, refine.

## Agent roles

- **Art Direction / UX:** menjaga composition, visual hierarchy, typography, rhythm
- **Frontend Agent:** implementasi UI, responsive behavior, accessibility, performance
- **3D Agent:** model pipeline, WebGL/WebGPU/Three.js strategy, animation, optimization
- **QA Agent:** visual regression, responsive, keyboard, performance, copy consistency

Prompt dan kontrak per-role ada di folder [`prompts/`](prompts/).

## Definition of done

Sebuah section belum dianggap selesai hanya karena "jalan".

Minimum acceptance:

- visually intentional desktop layout
- intentionally designed mobile layout
- tidak ada horizontal overflow
- no fabricated content
- keyboard/accessibility baseline aman
- reduced-motion fallback
- image/3D asset optimized
- motion tidak mengganggu readability
- TypeScript/lint/build lulus
- screenshot review dilakukan
- tidak melanggar anti-AI-slop rules

## Status

Blueprint aktif. Agent boleh mengusulkan perubahan, tetapi keputusan besar terkait art direction, struktur homepage, 3D interaction model, atau content claims harus dicatat di repository ini agar agent berikutnya tidak kehilangan konteks.
