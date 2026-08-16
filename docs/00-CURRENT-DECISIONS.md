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

## CURRENT PHASE OVERRIDE — NON-3D FIRST

As of August 2026, the implementation priority is **a polished non-3D corporate portfolio first**.

This overrides the earlier requirement to lead the production homepage with 3D.

For the current phase:

- do **not** build, generate, commission, or integrate new 3D assets
- do **not** make the hero depend on WebGL, GLB, Blender renders, frame sequences, or 3D scrollytelling
- use authentic CBL project photography, typography, spacing, editorial composition, technical metadata, and restrained motion as the primary visual system
- preserve the existing production website as the functional/content baseline and improve it section-by-section
- prioritize visual authorship and credibility over novelty
- keep performance and mobile simplicity high

3D remains a possible **future phase**, not a current dependency. Existing 3D research may be preserved in this blueprint for later use, but agents must not reintroduce it into the current redesign unless the owner explicitly asks to resume 3D work.

### Primary interaction — current phase

**Normal vertical page scrolling with restrained editorial motion.**

Do not use horizontal page scrolling, scroll-jacking, or long sticky sequences merely to create spectacle.

### Evidence

Use real project photography to show actual field work.

Current formula:

**clear capability framing -> real project documentation -> technical detail -> verified company/process evidence.**

### Hero behavior — current phase

Preferred production direction:

- editorial typography-first composition
- one strong authentic project image or a deliberately composed real-photo sequence
- concise company positioning
- direct project inquiry and portfolio actions
- subtle entrance/image motion only where useful
- no floating decorative cards
- no badge/chip cloud
- no fake metrics
- no decorative 3D object

### Homepage visual rhythm

Alternate:

- strong editorial hero with real project evidence
- quiet company/credibility information
- structured capability index
- large real project imagery
- process / technical detail
- legal/vendor readiness
- direct contact

Do not repeat the same card grid pattern.

### Content integrity

No fabricated:

- metrics
- testimonials
- clients
- certifications
- project outcomes
- capabilities

## Future 3D direction — parked, not deleted

The previous 3D research remains useful for a later phase. If 3D is explicitly resumed, treat it as technical storytelling, not decorative filler.

Previous priority concepts:

1. gearbox / drivetrain
2. industrial control panel
3. pump / water system

Previous preferred technique:

**cinematic pre-rendered product animation -> extracted frame sequence -> sticky canvas controlled by vertical scroll.**

Realtime GLB/WebGL/Three.js remains optional and secondary when true mesh interaction is materially useful.

Do not resume this work automatically.

## Implementation reference

Production/reference implementation:

- `mikaelzo-blip/cakrawala-web-3-refine-2`
- default branch remains the stable baseline

Old experimental 3D/design branches are prototypes/references only and are not automatically the production visual quality bar.

## Important lesson from prototype

A layout can be cleaner than the old website and still be insufficient.

The desired result is not merely "less AI slop". It must feel visually authored, specific to CBL, technically relevant, and based on real work.

Likewise, technical complexity does not equal design quality. A simpler photography-led website is preferred over an ambitious 3D experience if the simpler version communicates CBL more clearly and credibly.

## Primary source hierarchy

For current implementation decisions, use this order:

1. verified CBL company/project data and supplied documents
2. authentic CBL project photography
3. this blueprint's design and anti-AI-slop rules
4. current production website content/behavior that remains useful
5. external visual references only as inspiration, never as generic template patterns

## Open questions

These still require visual testing:

- final typeface selection
- exact photography crops and image rhythm
- how much motion improves the page without making it feel generated
- best balance between warm editorial neutrals and existing CBL navy/orange identity
- exact homepage section density on mobile
- whether 3D should return in a later dedicated technical-story page rather than the homepage

Agents may prototype these, but must preserve all current-phase constraints above.
