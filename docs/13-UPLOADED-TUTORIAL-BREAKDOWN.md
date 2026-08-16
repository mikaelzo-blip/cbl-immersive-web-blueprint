# 13 — Uploaded Tutorial Breakdown

## Source

Uploaded reference video:

`Build $10,000 AI 3D Websites in 10 Minutes (Google Anti-Gravity Full Tutorial).mp4`

Original YouTube reference supplied by the project owner:

https://youtu.be/DJMsXSr1jec?si=mRUueM6leMW4Hme-

The video was directly inspected from the uploaded MP4. This document records observable workflow patterns rather than assumptions from the title alone.

## Key finding

The visual quality target in this tutorial does **not depend primarily on a complex realtime WebGL/Three.js product model**.

The core technique is closer to:

**cinematic pre-rendered product animation -> extracted image frames -> scroll-controlled frame sequence in the website.**

This distinction matters.

The result can look like a high-end interactive 3D product website while the browser is mostly presenting pre-rendered frames synchronized to vertical scroll.

For CBL, this should now be treated as the preferred production direction for the hero and major technical explainers unless testing proves a realtime model provides a clear advantage.

## Observable tutorial workflow

### 1. Establish the final product look

The tutorial starts from a polished dark studio product composition using headphones as the subject.

Visual language:

- black/dark studio environment
- highly controlled product lighting
- premium materials
- large product silhouette
- minimal navigation and typography
- strong product-film feel

The visual asset is designed first. The website layout supports it rather than competing with it.

### 2. Write explicit product visualization prompts

The tutorial prepares structured prompts describing:

- product orientation
- camera view
- material appearance
- studio lighting
- exploded product state
- component positions
- clean background
- premium commercial-product-render quality

This is important for CBL: animation prompts should describe engineering relationships, not only visual style.

### 3. Generate assembled and exploded visual states

The tutorial uses AI image-generation tooling to create multiple states of the same product.

Observed states include:

- complete/assembled headphones
- separated earcup components
- exploded internal assembly
- alternate intermediate compositions

The key is visual consistency between states.

### 4. Generate transition animation

The tutorial then generates video where the product transitions between states, including an assembled-to-exploded transformation.

The animation behaves like a product film:

- parts separate in a controlled direction
- camera remains coherent
- object stays centered/readable
- motion is slow enough to understand
- lighting and material appearance remain stable

### 5. Convert animation into frame assets

The workflow later shows many sequential image files being prepared for the website.

This indicates the animation is converted/extracted into a frame sequence instead of requiring the browser to reproduce every 3D transformation procedurally.

Recommended naming for CBL:

```text
public/sequences/gearbox-hero/
  frame_0001.webp
  frame_0002.webp
  frame_0003.webp
  ...

public/sequences/panel-explode/
  frame_0001.webp
  ...
```

Use zero-padded numbering so loading and sorting are deterministic.

### 6. Map vertical scroll to animation frames

Final website behavior shows the product animation progressing as the page moves through editorial sections.

Implementation concept:

```text
normalized scroll progress 0.00 -> first frame
normalized scroll progress 0.50 -> middle frame
normalized scroll progress 1.00 -> final frame
```

Conceptual mapping:

```ts
frameIndex = Math.round(progress * (frameCount - 1))
```

The current frame can be drawn to a sticky `<canvas>` for efficient image-sequence playback.

### 7. Combine product film with editorial copy

The finished demo does not show animation alone.

It combines product states with short editorial story beats, such as material, audio, and engineering explanations.

The CBL equivalent should not use generic marketing copy. Use real technical themes:

- drivetrain relationship
- alignment and bearing points
- gearbox internal transmission
- inspection logic
- control-panel architecture
- pump flow path

### 8. Multiple visual chapters

The final demo moves through more than one visual treatment/state rather than using one endlessly rotating hero.

For CBL, this suggests a chapter structure:

```text
CHAPTER 1 — gearbox / drivetrain
CHAPTER 2 — real field evidence
CHAPTER 3 — control panel
CHAPTER 4 — real field evidence
CHAPTER 5 — pump / water system
```

Not every chapter needs the same length or the same animation technique.

## What this means for the CBL project

### Preferred hero technique

Use a **pre-rendered cinematic sequence** as the first-choice method for the hero.

Recommended sequence:

1. gearbox/drivetrain assembled
2. subtle camera move / product orientation
3. casing begins to separate
4. internal gear + shaft + bearing relationships become visible
5. coupling/output relation becomes clear
6. controlled exploded state
7. selected parts highlighted through composition/callouts
8. animation resolves into a final technical state
9. transition to real CBL project photography

### Why this is preferred over the earlier procedural WebGL prototype

The procedural WebGL experiment was useful to validate interaction structure, but it does not meet the visual reference quality by itself.

Pre-rendered sequences offer:

- much higher realism
- cinematic lighting
- complex exploded motion without browser-side rigging
- predictable art direction
- easier consistency across devices
- no need to model every detail as optimized realtime geometry

Tradeoff:

- less free camera interaction
- more image assets
- requires careful preload/compression

For this project those tradeoffs are acceptable because **storytelling quality matters more than free orbit control**.

## Recommended production asset pipeline

### Step A — reference collection

Use verified CBL photos/equipment categories as visual reference.

### Step B — create clean hero keyframe

Generate or render a representative industrial gearbox/drivetrain composition.

Target:

- believable engineering form
- dark or neutral premium studio lighting
- CBL palette accents only where appropriate
- no fictional brand logos
- no sci-fi detailing

### Step C — create exploded keyframe

Generate a coherent exploded state preserving the same object, camera identity, material language, and lighting.

### Step D — animate between states

Use image-to-video/video-generation tooling to create a stable assembled-to-exploded product animation.

Requirements:

- no morphing into impossible geometry
- no disappearing/reappearing components
- stable camera unless movement is intentional
- mechanical relationships remain plausible

### Step E — extract frames

Convert final animation to optimized frame sequence.

Initial recommendation:

- 24–30 source fps
- select/downsample only as many frames as needed for smooth scroll
- WebP or AVIF where decoding reliability/performance is acceptable
- preload upcoming frames in chunks

Do not blindly ship hundreds of full-resolution PNG files.

### Step F — implement scroll canvas

Use:

- sticky canvas
- `requestAnimationFrame`
- normalized section scroll progress
- image preloading queue
- responsive `cover/contain` calculation
- DPR cap
- reduced-motion fallback

### Step G — add story copy and annotations

Copy should change at specific frame/progress ranges.

Do not bind every sentence to a tiny motion change. Use a small number of strong chapters.

## Real-time 3D is now secondary, not mandatory

Realtime GLB/Three.js/R3F remains useful when the project needs:

- interactive part highlighting
- user-controlled orbit
- dynamic configuration
- live labels tied to mesh coordinates
- responsive camera views impossible to pre-render economically

But do not select realtime 3D just because the site is described as a "3D website".

For matching this reference, **cinematic frame-sequence scrollytelling is the primary path**.

## Performance targets

Frame-sequence implementation must avoid replacing 3D complexity with download bloat.

Required strategies:

- render only one canvas frame at a time
- preload near-future frames, not the entire website immediately
- use responsive sequence resolution where practical
- lazy-load later chapters
- cap canvas DPR
- pause work when off-screen
- test memory usage on mobile
- provide still/keyframe fallback if loading is slow

## Mobile adaptation

Mobile should keep the same vertical story but may use:

- fewer frames
- lower-resolution sequence
- shorter chapter duration
- more aggressive preload limits
- stable stills under reduced-motion/data-saving conditions

No horizontal-scroll requirement.

## Acceptance test

The implementation passes the reference test only if it feels like:

**a premium engineering product film controlled by vertical scroll.**

It fails if it feels like:

- a Three.js primitive demo
- an auto-rotating object
- a basic image slideshow
- a giant video autoplaying independently of scroll
- a conventional corporate page with a 3D object pasted into one column

## Locked lesson

For this project:

**"3D website" describes the visual experience, not necessarily the browser rendering technology.**

Choose the technique that produces the strongest credible engineering story with the best visual quality and acceptable performance.
