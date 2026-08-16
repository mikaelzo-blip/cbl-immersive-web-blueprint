# 10 — Technical Architecture

## Current reference implementation

At blueprint creation time, the experimental implementation uses:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- native WebGL prototype for the first 3D gearbox

This is reference context, not an immutable stack mandate.

## Architecture principles

- server-render/static-render ordinary content where possible
- isolate browser-only 3D and scroll logic into client components
- keep 3D rendering state out of React where frame-by-frame React updates would be wasteful
- lazy-load non-critical 3D sections
- progressively enhance rather than making the entire page depend on WebGL

## 3D renderer options

### Native WebGL

Good for:

- lightweight procedural prototype
- zero large renderer dependency

Weaknesses:

- high implementation cost for complex GLB assets, camera choreography, materials, loaders, animation mixers

### Three.js / React Three Fiber

Likely preferred for production-quality imported 3D if complexity grows.

Benefits:

- GLTF/GLB ecosystem
- animation support
- material/lighting tooling
- easier component targeting
- established optimization patterns

Do not add it solely because 3D exists. Add when imported asset complexity justifies it.

## Scroll architecture

For immersive sections:

- normalize section scroll progress to `0..1`
- avoid unthrottled state updates on every scroll event
- use requestAnimationFrame or motion value approach
- keep section layout vertical
- map progress to story phases and camera/object transforms

## CSS / layout

Prefer CSS Grid/Flex and sticky positioning.

Avoid JS measuring for layout where CSS can solve it.

## Asset loading

- use optimized real project images
- define intrinsic sizes or responsive image behavior
- prioritize only above-the-fold critical visual assets
- defer secondary project images and non-hero 3D

## Error/fallback strategy

If WebGL is unavailable:

- show a high-quality static render or project image
- keep narrative copy fully available
- never render an empty hero

## Security/content policy

Maintain sensible CSP and avoid injecting arbitrary remote scripts for decorative effects.

Prefer self-hosted/static assets where practical.

## Testing baseline

Every meaningful change should pass:

- TypeScript check
- lint
- production build
- desktop visual inspection
- mobile visual inspection
- runtime console check
- horizontal-overflow check

3D-specific:

- WebGL context available
- canvas resizes correctly
- renderer cleanup on unmount
- animation pauses/offloads when off-screen if applicable
- reduced-motion behavior tested
