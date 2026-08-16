# 07 — Motion System

## Principle

Motion must express technical logic, not decorate empty space.

Preferred motion vocabulary:

- rotate
- align
- assemble / explode
- reveal
- open / close
- track / follow
- flow
- focus / isolate
- transition camera target

## Timing character

Target:

- restrained
- deliberate
- smooth
- mechanical rather than playful

Avoid default spring/bounce for core content.

## Page load

Minimal entrance behavior.

Suggested:

- navigation settles quickly
- hero typography can reveal with subtle opacity/clip motion
- 3D should appear without a long cinematic delay

User must be able to start scrolling immediately.

## Scroll-driven motion

Use scroll to drive meaningful state changes.

Examples:

- object rotates to reveal service side
- casing separates
- bearing area highlights
- camera shifts from overview to component detail
- annotation changes as the system story advances

Do not tie every pixel of scroll to large transforms; preserve stability.

## Image motion

Project photography:

- subtle scale from ~1.02/1.03 to 1.00 may be used
- crop transitions should be restrained
- avoid aggressive parallax

## Hover

Use small changes:

- 2–6px text/arrow movement
- image crop shift
- rule/underline extension
- minor opacity change

No bouncy cards.

## Section transitions

Prefer changes in:

- background tone
- scale
- whitespace
- image dominance
- sticky release

rather than decorative wipes everywhere.

## Reduced motion

When reduced motion is requested:

- disable auto-rotation
- reduce transform distance
- remove nonessential parallax
- make sticky narrative readable without animated interpolation

## Motion QA

Reject if:

- animation hides content for too long
- scroll feels trapped
- user loses orientation
- mobile FPS drops visibly
- CTA moves away while trying to tap
- motion causes horizontal overflow
