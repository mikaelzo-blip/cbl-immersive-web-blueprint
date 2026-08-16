# 06 — 3D Asset Plan

## Strategy

Do not model everything in 3D.

Use a small number of high-value assets that communicate CBL's technical competence.

## Tier A — Must build well

### A1. Gearbox / drivetrain

Primary hero asset.

Preferred components:

- electric motor
- coupling
- gearbox casing
- internal gears if exploded/cutaway is used
- input shaft
- output shaft
- bearings
- sprocket / chain relation
- conveyor relation where useful

Quality target:

- recognizable industrial form
- believable metal/rubber/painted-steel materials
- clean silhouette
- optimized enough for web
- animation-ready hierarchy

Required states:

1. assembled overview
2. transmission relationship
3. component inspection state
4. optional exploded/cutaway state

### A2. Industrial control panel

Components:

- cabinet body + door
- HMI
- PLC
- inverter / drive
- soft starter
- MCCB
- contactors
- power supply
- DIN rail / wiring abstraction

Required states:

1. closed cabinet
2. door open
3. device highlights
4. control/signal path

### A3. Pump / water system

Components:

- motor
- coupling/shaft
- pump casing
- impeller
- mechanical seal
- suction
- discharge
- optional pipe/valve context

Required states:

1. assembled
2. cutaway
3. flow visualization
4. inspection highlight

## Tier B — Build only after Tier A works

- conveyor segment
- bearing + shaft exploded assembly
- HVAC / VRF outdoor unit
- lighting / DMX fixture

## Source discipline

Whenever possible, base shapes and storytelling on equipment categories CBL actually handles.

Do not imply a specific manufacturer/model unless the source material supports it.

The 3D object may be representative, but labels and claims must remain accurate.

## Modeling style

Target:

- engineering product visualization
- clean realistic proportions
- low visual noise
- restrained bevels
- physically plausible materials

Avoid:

- sci-fi detailing
- cyberpunk emissive materials
- exaggerated floating components
- overcomplicated micro-detail invisible on screen

## Web optimization targets

Use these as initial targets, then measure:

- prefer GLB/GLTF
- Draco or Meshopt compression where compatible
- KTX2/Basis texture compression for large textures
- texture resolution proportional to screen importance
- delete unseen geometry
- merge static meshes when it helps draw-call count
- keep separately animated/highlighted parts separate

## LOD / device strategy

Desktop high capability:

- full hero model
- richer materials
- optional cutaway/explode

Mobile:

- simplified geometry
- fewer texture maps
- lower DPR
- reduced animation complexity

Low capability / reduced motion fallback:

- stable 3D view or pre-rendered still/image sequence

## Naming convention

Recommended scene hierarchy:

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

Use predictable names so frontend code can target parts for highlights/animation.

## Asset acceptance checklist

- scale/origin consistent
- pivots correct
- no broken normals
- materials named clearly
- no unnecessary 8K textures
- animation states testable
- readable at actual website size
- works on representative mobile GPU
