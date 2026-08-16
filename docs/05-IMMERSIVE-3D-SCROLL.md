# 05 — Immersive 3D Scroll

## Core rule

The primary narrative gesture is **scroll down**.

Do not require users to scroll horizontally or discover a sideways timeline to understand the main story.

## Preferred production model

For the approved visual direction, the primary technique is:

**pre-rendered cinematic animation frames controlled by vertical scroll.**

The page may look like realtime 3D, but the browser does not need to reproduce the full 3D scene procedurally.

Recommended structure:

- section height: roughly 350–500vh depending on story length
- viewport stage: `position: sticky; top: 0; height: 100svh`
- one dominant canvas or image stage
- normalized scroll progress `0..1`
- progress selects/interpolates the current frame
- editorial copy changes at deliberate progress ranges
- real project imagery follows the technical explainer

## Frame mapping

Conceptually:

```ts
const progress = clamp(scrolled / scrollableDistance, 0, 1)
const frameIndex = Math.round(progress * (frameCount - 1))
```

Prefer drawing the current frame to a `<canvas>` rather than mounting hundreds of `<img>` elements.

## Story state model

Map normalized progress into a few strong narrative phases.

Example gearbox sequence:

- 0.00–0.18 — assembled hero overview
- 0.18–0.36 — camera/product orientation establishes drivetrain
- 0.36–0.58 — casing separates and internal transmission appears
- 0.58–0.76 — shaft, bearing, gear, coupling relationships become readable
- 0.76–0.90 — controlled exploded/inspection state
- 0.90–1.00 — resolve and transition to real field evidence

Do not create dozens of tiny story beats merely because many frames exist.

## Visual role

The product/system should remain readable throughout the story.

Possible pre-rendered changes:

- camera movement
- product rotation
- component separation
- casing reveal
- exploded assembly
- cutaway state
- selected component emphasis
- lighting emphasis

Text and callouts should support the image rather than compete with it.

## Text behavior

Use 3–5 strong editorial chapters per major sequence.

Good:

- drivetrain relationship
- alignment and bearing points
- internal transmission
- inspection logic
- field execution

Avoid generic marketing statements disconnected from the technical state on screen.

## Pointer behavior

Pointer drag/orbit is no longer required for the primary reference style.

If realtime overlays are added later:

- they remain secondary
- story must still work without dragging
- touch interaction must never hijack vertical scroll

## Mobile behavior

Mobile preserves the vertical story but may simplify:

- fewer frames
- lower-resolution frame set
- shorter sticky duration
- more aggressive preload window
- static keyframe fallback on low capability / reduced-motion devices

Do not force two-finger or horizontal gestures.

## Reduced motion

When `prefers-reduced-motion: reduce`:

- avoid long scroll-bound animation sequences
- show stable key states or a short set of crossfades
- preserve all narrative text
- allow normal page scrolling

## Transition into real evidence

At the end of each major visual sequence, transition to a real project image/case study.

Narrative formula:

**Understand the system -> see how CBL works on real systems.**

## Preloading strategy

Do not load the full website's frame sequences immediately.

Recommended:

- hero: preload enough frames for a smooth first experience
- load near-future frames in chunks
- lazy-load later product chapters
- use responsive sequence resolution where practical
- cache decoded images conservatively on mobile

## Performance

- draw one active frame at a time
- use `requestAnimationFrame` for scroll-driven rendering
- avoid React state updates for every raw scroll event where possible
- cap DPR
- compress frames aggressively without visible banding/artifacts
- test memory pressure on mobile browsers
- pause preloading/render work when far off-screen

## Realtime 3D fallback/augmentation

GLB/WebGL/Three.js/R3F may still be used when it provides a real benefit such as:

- mesh-specific labels
- live highlighting
- user-controlled inspection
- dynamic configuration

But it is not the default production path for matching the approved reference.

See `docs/13-UPLOADED-TUTORIAL-BREAKDOWN.md`.
