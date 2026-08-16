# 14 — Storyboard Production Spec

This file converts the approved visual storyboard into a production-ready implementation map.

## 1. Core sequence: Gearbox chapter

Primary interaction: vertical scroll only.

Recommended desktop section length: 420–520vh.
Recommended mobile section length: 280–340vh.

### Scroll map

| Phase | Scroll | Visual state | Camera state | Technical message |
|---|---:|---|---|---|
| 01 | 0–12% | Assembled gearbox | Wide 3/4 hero | Complete system overview |
| 02 | 12–26% | Surface detail | Slow push-in | Housing and construction |
| 03 | 26–40% | Casing begins opening | Slight orbit / closer target | Access to internal transmission |
| 04 | 40–58% | Internal gears/shafts visible | Macro-medium view | Gear, shaft, bearing relationship |
| 05 | 58–72% | Drive connection emphasized | Side / output-axis framing | Coupling, sprocket, chain, output relation |
| 06 | 72–88% | Controlled exploded view | Centered technical composition | Full component structure |
| 07 | 88–96% | Components reassemble | Slow pull-back | System integrity / completion |
| 08 | 96–100% | Transition to real project photo | Match-cut or dissolve | 3D explains; field evidence proves |

## 2. Required component callouts

Use labels only when useful. Avoid diagram clutter.

Gearbox chapter preferred labels:

- input shaft
- gear set
- bearing
- output shaft
- coupling
- sprocket / chain
- housing / cover

Callouts should appear one group at a time and fade or mask cleanly between phases.

## 3. Camera behavior

Camera motion must feel like a premium engineering film, not a 3D viewer.

Rules:

- no constant orbit
- no fast spins
- no abrupt FOV jumps
- subject must remain readable during every transition
- camera and object motion should support the current technical message
- final composition should align naturally with the real project transition

## 4. Frame-sequence production target

Do **not** default to 900–1200 unoptimized 4K frames.

Initial target:

- desktop: 180–300 optimized frames
- mobile: 90–160 optimized frames or a reduced keyframe sequence
- preferred delivery: WebP first; AVIF only after browser/device testing
- use zero-padded names such as `frame_0001.webp`
- preload near-future frames progressively instead of blocking on the full set
- use a sticky canvas or equivalent single rendering surface

Increase frame count only if motion quality measurably benefits and performance remains acceptable.

## 5. Suggested player architecture

```text
scroll section
  -> normalized progress 0..1
  -> timeline phase
  -> frame index
  -> draw selected frame to sticky canvas
  -> synchronize editorial copy/callouts
```

Conceptual mapping:

```ts
const frame = Math.round(progress * (frameCount - 1));
```

Use `requestAnimationFrame` for scroll-driven updates.
Avoid expensive React state updates for every frame.

## 6. Mobile production state

Mobile is not a compressed desktop version.

Recommended behavior:

- full-width portrait-safe composition
- fewer labels visible at once
- shorter sticky duration
- reduced frame count
- no hover dependency
- no pointer-drag requirement
- keep the product large enough to read internal states
- editorial copy may move below the product instead of overlapping it

Target QA widths:

- 390px
- 430px
- 768px
- 1024px
- 1440px

## 7. Reduced-motion / low-capability fallback

When reduced motion is requested or device capability is insufficient:

- replace long sequence with 4–7 static key states
- preserve the same technical story
- maintain all labels and copy
- skip long interpolation
- transition normally into real field imagery

The sequence is enhancement, not the only way to understand the content.

## 8. Chapter 2 — Control panel

Preferred sequence:

1. closed cabinet
2. door opens
3. main power section revealed
4. MCCB / contactor / protection highlighted
5. inverter / drive highlighted
6. PLC / HMI / control layer highlighted
7. simplified signal / power path visualization
8. transition to verified CBL panel/control project imagery

Avoid fake wiring complexity. Use abstraction where necessary.

## 9. Chapter 3 — Pump / water system

Preferred sequence:

1. assembled pump system
2. camera establishes suction/discharge relationship
3. casing cutaway
4. shaft / seal / impeller revealed
5. flow direction visualized
6. inspection points highlighted
7. assembly resolves
8. transition to verified CBL pump project imagery

## 10. Homepage chapter order

Recommended macro structure:

```text
01 Gearbox immersive hero
02 Company / capability orientation
03 Real mechanical project evidence
04 Services index
05 Control panel immersive chapter
06 Real electrical / automation evidence
07 Why CBL / process / expertise
08 Pump immersive chapter
09 Real pump / utilities evidence
10 Vendor readiness / legal confidence
11 Contact / project inquiry
```

Do not make every section immersive. Contrast is part of the art direction.

## 11. Storyboard annotation vocabulary

Preferred CBL editorial terms:

- Transmission
- Alignment
- Bearing condition
- Internal components
- Drive connection
- Inspection logic
- Field execution
- Control architecture
- Flow path
- Project evidence

Avoid generic slogans such as:

- Innovation redefined
- Building tomorrow
- Future-ready solutions
- Excellence delivered

## 12. Acceptance criteria

The chapter is not accepted unless:

- no horizontal page scroll is required
- object remains visible/readable during the key phases
- progress maps consistently to the intended frame
- scroll up reverses the animation smoothly
- technical labels match the visual state
- transition to actual project photography is clear
- mobile is independently QA'd
- reduced-motion fallback works
- frame loading does not create obvious blank flashes
- the result does not resemble a generic Three.js demo
