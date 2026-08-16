# 00 — Current Decisions

This file records decisions already made so future agents do not reopen them without a concrete reason.

## Locked direction

### Website character

- industrial
- editorial
- architectural
- premium corporate
- technically credible
- restrained, not flashy

### Anti-template stance

The website must not look like a generic AI-generated SaaS template.

### Primary interaction

**Vertical immersive scrolling.**

Do not turn the main experience into horizontal scrolling.

### 3D usage

3D is a technical storytelling tool, not decorative filler.

Priority:

1. gearbox / drivetrain hero
2. industrial control panel
3. pump / water system

### Preferred production technique

After direct inspection of the uploaded tutorial reference, the preferred hero/explainer technique is now:

**cinematic pre-rendered product animation -> extracted frame sequence -> sticky canvas controlled by vertical scroll.**

This is the primary path for matching the approved visual reference.

Realtime GLB/WebGL/Three.js remains optional and secondary when true mesh interaction is materially useful.

Do not assume a "3D website" must use realtime 3D rendering in the browser.

### Evidence

Use real project photography to show actual field work.

Formula:

**3D explains -> real project documentation proves.**

### Hero behavior

Preferred production direction:

- full-screen/sticky stage
- product/system visually dominant
- scroll down advances the pre-rendered animation sequence
- text/annotations change at deliberate story beats
- no need to drag horizontally
- pointer inspection is optional and not required for comprehension

### Homepage visual rhythm

Alternate:

- immersive system story
- quiet editorial/company information
- structured capability index
- real project imagery
- second technical story

Do not repeat the same card grid pattern.

### Content integrity

No fabricated:

- metrics
- testimonials
- clients
- certifications
- project outcomes
- capabilities

## Implementation reference

Existing experimental implementation:

- `mikaelzo-blip/cakrawala-web-3-refine-2`
- branch `design/human-art-direction`

This implementation is a prototype/reference. It is not automatically the final visual quality bar.

## Important lesson from prototype

A layout can be cleaner than the old website and still be insufficient.

The desired result is not merely "less AI slop". It must also feel immersive, visually authored, and technically relevant.

A 3D canvas that technically exists but is visually weak/hidden is not success.

The earlier procedural WebGL gearbox is now considered an interaction prototype, not the production visual target.

## Primary visual reference

The uploaded tutorial video was directly inspected.

See:

- `docs/12-VISUAL-REFERENCES.md`
- `docs/13-UPLOADED-TUTORIAL-BREAKDOWN.md`

The key reference lesson is that the premium 3D effect is achieved through cinematic rendered states and scroll-controlled frame sequences, not necessarily realtime browser 3D.

## Open questions

These still require visual testing:

- exact AI/render pipeline for the gearbox keyframes
- best tool for assembled -> exploded animation
- exact number and resolution of frames shipped per device class
- whether some later sections benefit from realtime GLB overlays
- exact sticky duration on mobile
- final typeface selection
- final motion curve/timing
- how much of control-panel and pump stories should also be full-screen immersive

Agents may prototype these, but should preserve all locked decisions above.
