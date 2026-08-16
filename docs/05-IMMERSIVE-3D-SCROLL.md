# 05 — Immersive 3D Scroll

## Core rule

The primary narrative gesture is **scroll down**.

Do not require users to scroll horizontally or discover a sideways timeline to understand the main story.

## Desktop interaction model

Recommended pattern:

- section height: roughly 350–500vh depending on story length
- viewport stage: `position: sticky; top: 0; height: 100svh`
- 3D canvas remains visually dominant
- text stage changes based on normalized vertical scroll progress
- camera/object state can also respond to that progress
- vertical progress indicator may be used sparingly

## Story state model

Map normalized progress `0..1` into discrete narrative phases.

Example:

- 0.00–0.20 — full system overview
- 0.20–0.42 — transmission / coupling relationship
- 0.42–0.66 — shaft, bearing, alignment
- 0.66–0.86 — inspection / wear points
- 0.86–1.00 — transition to field documentation

Transitions should interpolate smoothly instead of snapping violently.

## 3D role

The object should remain readable throughout the story.

Possible scroll-driven changes:

- rotation
- camera distance
- camera target
- component separation
- casing transparency / reveal
- highlighted components
- annotation opacity
- controlled cutaway

Avoid constant autonomous motion that competes with scroll-driven changes.

## Pointer behavior

Pointer drag/orbit is secondary.

Requirements:

- story must still be understandable without dragging
- drag must never hijack vertical page scroll on touch devices
- cursor affordance should be subtle
- optional reset-to-story orientation after inactivity

## Mobile behavior

Mobile should preserve vertical storytelling but may simplify:

- fewer camera states
- no expensive post-processing
- lower DPR cap
- lower-poly model / compressed textures
- shorter sticky duration
- optional static/model-view fallback on low-capability devices

Do not force two-finger or horizontal gestures.

## Reduced motion

When `prefers-reduced-motion: reduce`:

- disable continuous auto-rotation
- reduce camera interpolation
- show stable key states
- preserve all narrative text
- allow user to scroll normally without long motion-dependent waits

## Transition into real evidence

At the end of each major 3D sequence, transition to a real project image/case study.

This is important to avoid the website feeling like a conceptual 3D demo.

Narrative formula:

**Understand the system -> see how CBL works on real systems.**

## Performance

- pause rendering when section is off-screen where practical
- clamp device pixel ratio
- lazy-load non-hero 3D
- avoid per-scroll synchronous heavy calculations
- use requestAnimationFrame for scroll state updates
- keep React state updates coarse; keep frame-by-frame transforms in render loop when possible
