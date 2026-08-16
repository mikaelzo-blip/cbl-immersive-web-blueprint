# 08 — Mobile & Responsive Strategy

## Principle

Mobile is not desktop scaled down.

The page should preserve hierarchy and storytelling while reducing visual/technical load.

## Breakpoint behavior

### Large desktop

- full immersive 3D stage
- larger type
- sticky scrollytelling may span multiple viewport heights
- more detailed annotations

### Tablet

- preserve vertical story
- reduce hero text scale
- reduce overlapping text/3D zones
- simplify metadata

### Mobile

- vertical only
- 3D remains visible but should not require drag
- shorten sticky section length if needed
- keep text readable over/around 3D
- hide nonessential annotation layers
- ensure CTA remains accessible

## Horizontal overflow

Zero tolerance.

Audit:

- canvas width
- transformed objects
- negative margins
- oversized typography
- sticky containers
- absolute positioned labels
- logo rows

Use `overflow-x-clip` only as a safety net, not as a substitute for fixing broken layout.

## 3D on mobile

Recommended optimizations:

- cap DPR around 1–1.5 depending on renderer/performance
- lower geometry complexity
- reduce texture size
- reduce shadows/post-processing
- pause rendering when off-screen
- prefer fewer simultaneously animated meshes

## Touch interaction

Do not hijack one-finger vertical scroll.

If orbit/drag is enabled:

- it should be optional
- activate only when intent is clear
- avoid preventing normal page scroll

## Typography

Avoid headings so large that a single word becomes an accidental horizontal scroll surface.

Allow deliberate line breaks rather than shrinking typography until it loses character.

## Mobile QA widths

At minimum inspect:

- ~390px
- ~430px
- ~768px
- ~1024px
- ~1440px desktop

Also inspect browser zoom and text wrapping around Indonesian copy, which can produce long words/phrases.
