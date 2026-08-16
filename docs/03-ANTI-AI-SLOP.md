# 03 — Anti-AI-Slop Guardrails

This file is a hard design guardrail.

## Patterns to reject by default

- pill badge above every heading
- glowing CTA
- purple/blue generic gradients
- glassmorphism panels
- floating decorative cards
- rounded cards everywhere
- Lucide icon in every block
- feature-card grids repeated section after section
- fake statistics
- fake testimonials
- "trusted by 500+ clients"-style claims
- generic hero copy such as "Building the Future"
- hero with multiple decorative widgets
- random orbiting shapes
- excessive blur blobs
- timeline/cards that look copied from a component library demo
- uniform fade-up animation on every element
- excessive parallax that reduces readability

## AI copy red flags

Reject or rewrite copy that is:

- vague
- grandiose
- unprovable
- repetitive
- full of abstract business nouns

Bad:

> Delivering innovative solutions that transform tomorrow.

Better:

> Instalasi, penggantian, pengujian, dan commissioning sistem teknis sesuai kebutuhan fasilitas.

## Visual test

A section should pass these questions:

1. Does it communicate a concrete company capability?
2. Is the composition distinct from the previous section?
3. Could this section belong to any SaaS startup if the logo changed?
4. Are the decorative elements doing useful work?
5. Does photography/3D have a meaningful relationship to the text?
6. Is the mobile state still intentional?

If #3 is yes, redesign it.

## Card budget

Cards are not forbidden, but they require justification.

Use a card only when content truly benefits from being an independent container.

Do not use cards merely to create visual separation. Use typography, whitespace, rules, alignment, scale, and contrast first.

## 3D slop prevention

Do not use:

- meaningless chrome spheres
- holographic wireframes unrelated to CBL
- sci-fi factory scenes
- neon technical HUDs
- particle fields for decoration

Use:

- actual technical objects
- believable materials
- clear relationships between components
- restrained annotations
- real inspection/maintenance narrative

## Motion slop prevention

Avoid animation where every section:

- fades upward
- scales from 0.95
- has identical duration

Motion should respond to the content's physical logic: rotation, alignment, assembly, flow, reveal, inspection, opening, or camera movement.
