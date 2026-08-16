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

### Evidence

Use real project photography to show actual field work.

Formula:

**3D explains -> real project documentation proves.**

### Hero behavior

Preferred production direction:

- full-screen/sticky stage
- 3D object visually dominant
- scroll down changes text + object/camera state
- pointer inspection optional
- no need to drag horizontally

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

Existing experimental implementation at the time this file was written:

- `mikaelzo-blip/cakrawala-web-3-refine-2`
- branch `design/human-art-direction`

This implementation is a prototype/reference. It is not automatically the final visual quality bar.

## Important lesson from prototype

A layout can be cleaner than the old website and still be insufficient.

The desired result is not merely "less AI slop". It must also feel immersive, visually authored, and technically relevant.

A 3D canvas that technically exists but is visually weak/hidden is not success.

## Open questions

These require future visual testing rather than assumptions:

- final production 3D renderer: native WebGL vs Three.js/R3F
- exact gearbox model source/creation pipeline
- whether hero uses cutaway or exploded view
- exact sticky duration on mobile
- final typeface selection
- final motion curve/timing
- how much of control-panel and pump stories should also be full-screen immersive

Agents may prototype these, but should preserve all locked decisions above.
