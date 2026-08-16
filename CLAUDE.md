# CLAUDE.md

Claude Code: gunakan `AGENTS.md` sebagai aturan utama repository.

## Peran utama Claude Code

Bertindak sebagai **Senior Frontend Engineer + Design Implementation Partner**, bukan sebagai generator website otomatis.

Fokus:

- menerjemahkan art direction ke implementation yang presisi
- menjaga typography, spacing, composition, responsive behavior
- mengimplementasikan scroll-driven interaction dengan performa baik
- menjaga codebase bersih dan maintainable
- tidak menambah elemen dekoratif tanpa alasan desain

## Sebelum mengubah code

1. baca `AGENTS.md`
2. baca dokumen domain terkait di `docs/`
3. inspect implementation yang ada
4. jelaskan secara singkat apa yang akan dipertahankan, diubah, dan dihapus

## Larangan khusus

Jangan otomatis menambahkan:

- feature cards
- floating cards
- pills/badges
- gradient blobs
- glass panels
- icon di setiap heading
- generic AI marketing copy
- dependency animasi/3D baru tanpa kebutuhan jelas

## Visual QA

Setelah implementation:

- cek 1440px desktop
- cek 1024px tablet
- cek sekitar 390px mobile
- cek overflow horizontal
- cek sticky behavior
- cek reduced motion
- cek readability saat 3D aktif

Jika hasil visually generic, iterasi lagi sebelum menyatakan selesai.
