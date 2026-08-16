# AGENTS.md — CBL Immersive Web

Dokumen ini adalah kontrak kerja lintas-agent.

Semua AI agent yang membaca repository ini harus mengikuti aturan berikut sebelum membuat perubahan desain atau kode.

## 1. Mission

Membangun website CV Cakrawala Buana Lestari yang terasa seperti hasil kerja **senior digital design studio + engineering visualization team**, bukan website generator AI.

Prioritas urutan:

1. credibility
2. clarity
3. art direction
4. responsive UX
5. motion/3D immersion
6. implementation convenience

Jangan membalik urutan tersebut hanya karena sebuah efek lebih mudah dibuat.

## 2. Mandatory reading

Sebelum coding, baca:

- `README.md`
- `docs/01-PROJECT-VISION.md`
- `docs/02-DESIGN-DIRECTION.md`
- `docs/03-ANTI-AI-SLOP.md`
- file domain yang relevan dengan task

Untuk 3D/motion wajib juga baca:

- `docs/05-IMMERSIVE-3D-SCROLL.md`
- `docs/06-3D-ASSET-PLAN.md`
- `docs/07-MOTION-SYSTEM.md`

## 3. Non-negotiable design rules

- primary storytelling scroll = vertical
- no horizontal page scrolling as the main interaction
- no component/card spam
- no invented metrics, testimonials, certifications, project facts, or client claims
- no decorative 3D without a technical storytelling purpose
- real project photography is evidence, not background filler
- typography + composition should carry the visual identity
- every section must have a deliberate reason to exist
- mobile is a designed state, not compressed desktop

## 4. AI-slop detection

Sebelum menyelesaikan sebuah section, tanyakan:

- apakah layout ini mirip template SaaS generik?
- apakah terlalu banyak card/pill/icon?
- apakah gradient/glow digunakan tanpa alasan?
- apakah semua elemen menggunakan fade-up yang sama?
- apakah copy terdengar seperti placeholder marketing AI?
- apakah 3D hanya gimmick?
- apakah section masih menarik jika seluruh decoration dihapus?

Jika jawaban bermasalah, redesign sebelum menyerahkan.

## 5. Working method

Jangan generate seluruh website sekaligus.

Gunakan loop:

1. inspect current implementation
2. define section goal
3. implement one coherent section/system
4. run typecheck/lint/build
5. capture desktop + mobile screenshot
6. visually critique
7. refine
8. commit with a narrow message

## 6. Source of truth hierarchy

Jika terjadi konflik:

1. explicit latest human decision
2. this blueprint repository
3. verified company/project data
4. implementation repository current state
5. agent preference

Agent preference berada di urutan terakhir.

## 7. Content integrity

Jangan menulis fakta perusahaan baru tanpa sumber.

Allowed:

- menyederhanakan copy
- memperjelas istilah
- mengubah hierarchy
- merangkum informasi yang telah diverifikasi

Not allowed:

- menambah angka marketing
- membuat testimonial
- mengklaim client/brand/project baru
- mengarang sertifikasi
- menyebut performance outcome yang tidak didokumentasikan

## 8. 3D principles

3D harus menjawab pertanyaan teknis.

Contoh:

- gearbox: hubungan drivetrain dan inspection logic
- control panel: bagaimana control architecture tersusun
- pump: bagaimana flow dan internal components bekerja

3D hero harus menjadi **scroll-driven technical story**, bukan product configurator penuh.

Pointer drag/orbit adalah optional secondary interaction.

## 9. Responsive

Desktop dapat menggunakan sticky scrollytelling yang panjang.

Mobile harus:

- tetap vertical
- tidak memerlukan drag untuk memahami cerita
- mengurangi particle/post-processing
- menggunakan geometry/texture lebih ringan bila diperlukan
- menjaga CTA tetap reachable
- tidak menyebabkan scroll jank

## 10. Performance discipline

Agent dilarang menambah dependency berat hanya untuk satu efek kecil.

Sebelum menambah library:

- jelaskan alasan
- cek apakah native CSS/Web APIs cukup
- cek impact bundle
- lazy-load 3D jika tidak critical untuk initial render
- pause animation ketika off-screen

## 11. Accessibility

Wajib:

- semantic HTML
- keyboard-safe navigation
- sufficient contrast
- descriptive alt/caption untuk project imagery
- `prefers-reduced-motion` fallback
- focus states
- 3D canvas tidak boleh menjadi satu-satunya cara memahami content

## 12. Completion report

Saat selesai, agent harus melaporkan:

- files changed
- visual behavior changed
- responsive behavior
- performance implications
- tests run
- unresolved visual/product decisions

Jangan bilang "done" jika visual QA belum dilakukan.
