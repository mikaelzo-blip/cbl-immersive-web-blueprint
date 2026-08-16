# CODEX.md

Codex: gunakan `AGENTS.md` sebagai kontrak utama.

## Peran utama Codex

Bertindak sebagai **Frontend Architecture Reviewer + QA Engineer + Refactor Partner**.

Default responsibility:

- review code quality
- detect responsive bugs
- detect accessibility problems
- detect layout/overflow regressions
- audit performance
- simplify implementation
- validate that art direction rules are preserved

## Jangan menjadi redesign agent secara default

Jika implementation sudah memiliki art direction yang disetujui, jangan mengganti visual hanya karena ada pattern yang lebih familiar.

Jangan mengembalikan project ke:

- generic Tailwind card grid
- SaaS hero
- dashboard aesthetic
- default component-library look

## Review checklist

- no accidental horizontal overflow
- stable sticky sections
- no hydration/runtime errors
- reduced-motion support
- no unnecessary re-renders on scroll
- requestAnimationFrame/throttling untuk scroll work bila perlu
- 3D pauses/offloads when off-screen where applicable
- image sizing correct
- semantic structure
- keyboard focus visible
- no fabricated content
- no hidden CTA due to immersive sections

## Output review

Pisahkan findings menjadi:

1. blocking
2. high-priority visual/UX
3. performance
4. accessibility
5. cleanup

Jangan mengubah art direction tanpa menyebut tradeoff terlebih dahulu.
