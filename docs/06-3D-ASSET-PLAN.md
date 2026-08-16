# 06 — 3D Asset Plan

## Strategy

Do not model everything in realtime 3D.

Use a small number of high-value **cinematic product/system sequences** that communicate CBL's technical competence.

The approved reference demonstrates that a premium "3D website" can be produced from pre-rendered assembled/exploded animation converted to scroll-controlled frame sequences.

This is now the preferred production path for major hero explainers.

## Tier A — Must build well

### A1. Gearbox / drivetrain

Primary hero asset.

Visual content should communicate:

- electric motor
- coupling
- gearbox casing
- internal gears where exploded/cutaway is used
- input shaft
- output shaft
- bearings
- sprocket / chain relation
- conveyor relation where useful

Quality target:

- recognizable industrial form
- believable metal/rubber/painted-steel materials
- clean silhouette
- studio-grade lighting
- coherent assembled and exploded states
- technically plausible component relationships

Required key states:

1. assembled overview
2. transmission relationship
3. casing/open reveal
4. shaft/bearing/gear inspection state
5. controlled exploded state
6. resolved transition into real field evidence

Preferred deliverable:

- master animation clip with coherent assembled -> exploded behavior
- optimized frame sequence for desktop
- lighter frame sequence for mobile
- 2–4 stable keyframe stills for reduced-motion/fallback use

### A2. Industrial control panel

Visual content:

- cabinet body + door
- HMI
- PLC
- inverter / drive
- soft starter
- MCCB
- contactors
- power supply
- DIN rail / wiring abstraction

Required key states:

1. closed cabinet
2. door opening/reveal
3. internal architecture
4. device highlights
5. control/signal path story

Preferred animation style:

- disciplined technical reveal
- no impossible floating parts
- clean camera
- wiring simplified enough to stay readable

### A3. Pump / water system

Visual content:

- motor
- coupling/shaft
- pump casing
- impeller
- mechanical seal
- suction
- discharge
- optional pipe/valve context

Required key states:

1. assembled
2. casing cutaway/reveal
3. impeller/shaft relationship
4. flow visualization
5. inspection state

## Tier B — Build only after Tier A works

- conveyor segment
- bearing + shaft exploded assembly
- HVAC / VRF outdoor unit
- lighting / DMX fixture

## Source discipline

Whenever possible, base visual shapes and storytelling on equipment categories CBL actually handles.

Do not imply a specific manufacturer/model unless the source material supports it.

The visual may be representative, but labels and claims must remain accurate.

## Visual generation style

Target:

- engineering product visualization
- premium commercial studio render
- clean realistic proportions
- low visual noise
- restrained industrial detailing
- physically plausible materials
- consistent camera identity across states

Avoid:

- sci-fi detailing
- cyberpunk emissive materials
- impossible exploded geometry
- arbitrary floating components
- fictional brand logos
- material/style drift between assembled and exploded states

## Preferred asset pipeline

### 1. Reference board

Collect verified CBL/equipment imagery for shape, context, and technical plausibility.

### 2. Assembled hero keyframe

Create a polished master product/system render.

### 3. Exploded/cutaway keyframe

Create the same system in a coherent separated state while preserving:

- camera identity
- material language
- lighting direction
- component identity

### 4. Image-to-video transition

Animate between the key states.

Acceptance requirements:

- no geometry morphing into unrelated parts
- no disappearing components
- no duplicate components appearing unexpectedly
- camera motion controlled
- product remains readable

### 5. Frame extraction

Extract final animation to sequential frames.

Recommended folder structure:

```text
public/sequences/gearbox-hero/
  desktop/
    frame_0001.webp
    frame_0002.webp
    ...
  mobile/
    frame_0001.webp
    ...
  fallback/
    assembled.webp
    exploded.webp
```

### 6. Optimization

Do not ship raw production PNGs blindly.

Measure and optimize:

- frame dimensions
- frame count
- WebP/AVIF quality
- decode performance
- preload window
- mobile memory use

## Frame count guidance

Do not optimize for a fixed number before testing.

Start from a smooth source animation, then downsample until scroll still feels continuous.

A shorter, well-directed 60–120-frame sequence can be better than hundreds of redundant frames.

For mobile, fewer frames may be appropriate.

## Realtime model assets

GLB/GLTF assets are **optional secondary assets**, not mandatory for every hero.

Use realtime models only where needed for:

- mesh-targeted annotations
- interactive inspection
- configurable states
- dynamic camera behavior not practical as pre-rendered frames

If used:

- Draco or Meshopt compression where compatible
- KTX2/Basis textures
- delete unseen geometry
- keep animated/highlightable parts separate
- clamp complexity to measured device performance

## Mobile strategy

Primary sequence can use:

- reduced resolution
- reduced frame count
- shorter scroll duration
- tighter preloading

Low capability / reduced motion fallback:

- stable keyframe stills
- simple crossfade between technical states

## Naming convention

Frame sequences:

```text
frame_0001.webp
frame_0002.webp
frame_0003.webp
```

Optional realtime scene hierarchy:

```text
gearbox_root
  motor
  coupling
  gearbox_body
  gearbox_cover
  input_shaft
  output_shaft
  bearing_input
  bearing_output
  sprocket
  chain
```

## Asset acceptance checklist

For frame sequence:

- assembled/exploded identity consistent
- no AI morphing artifacts
- technical relationships plausible
- lighting consistent
- framing works at actual website viewport
- transitions are readable when scrubbed by scroll
- frames compressed and preload-tested
- mobile memory acceptable

For optional realtime assets:

- scale/origin consistent
- pivots correct
- no broken normals
- materials named clearly
- no unnecessary 8K textures
- animation states testable

See `docs/13-UPLOADED-TUTORIAL-BREAKDOWN.md` for the inspected reference workflow.
