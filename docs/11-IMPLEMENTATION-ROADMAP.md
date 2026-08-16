# 11 — Implementation Roadmap

## Phase 0 — Lock direction

- [x] define anti-AI-slop rules
- [x] choose industrial/editorial direction
- [x] choose vertical immersive scroll
- [x] define first three 3D systems
- [ ] approve production hero visual quality

## Phase 1 — Homepage foundation

- [ ] header/navigation final pass
- [ ] typography scale final pass
- [ ] global spacing/rhythm
- [ ] capability index
- [ ] selected project editorial layout
- [ ] process timeline
- [ ] legal/vendor register
- [ ] contact/inquiry section

Acceptance:

- coherent even with all 3D temporarily disabled
- no card spam
- mobile intentional

## Phase 2 — Gearbox hero production

Prototype exists conceptually/experimentally, but production target is higher.

Tasks:

- [ ] select/create realistic gearbox/drivetrain asset
- [ ] define component hierarchy
- [ ] optimize GLB
- [ ] implement vertical sticky scrollytelling
- [ ] scroll-driven camera choreography
- [ ] component highlight states
- [ ] optional exploded/cutaway state
- [ ] real project transition
- [ ] mobile low-cost mode
- [ ] reduced-motion fallback

## Phase 3 — Control panel story

- [ ] 3D cabinet/model
- [ ] door-open state
- [ ] device hierarchy
- [ ] HMI/PLC/drive highlights
- [ ] signal/wiring abstraction
- [ ] commissioning narrative

## Phase 4 — Pump story

- [ ] pump cutaway asset
- [ ] impeller/shaft state
- [ ] flow visualization
- [ ] service/inspection narrative
- [ ] transition to real project documentation

## Phase 5 — Content + portfolio verification

- [ ] verify every project claim
- [ ] audit project images/captions
- [ ] remove placeholders
- [ ] verify brands/legal information
- [ ] copy edit Indonesian language

## Phase 6 — Performance & accessibility

Targets should be measured, not guessed.

Tasks:

- [ ] audit LCP
- [ ] audit CLS
- [ ] audit INP
- [ ] mobile GPU/FPS check
- [ ] texture/model weight audit
- [ ] keyboard navigation
- [ ] contrast
- [ ] reduced motion
- [ ] WebGL fallback

## Phase 7 — Visual QA

Required viewport review:

- [ ] 1440 desktop
- [ ] 1024 tablet/desktop
- [ ] 768 tablet
- [ ] 430 mobile
- [ ] 390 mobile

Review:

- typography
- crop
- sticky behavior
- scroll rhythm
- 3D visibility
- CTA reachability
- section transitions
- accidental AI-template patterns

## Phase 8 — Production release

- [ ] CI green
- [ ] final human review
- [ ] merge to production branch
- [ ] deployment smoke test
- [ ] analytics/monitoring as appropriate

## Work allocation suggestion

### Claude Code

Primary implementation and visual iteration.

### Codex

Architecture review, code QA, responsive/performance audit.

### 3D specialist agent

Asset pipeline, scene hierarchy, camera/animation choreography, optimization.

### Human/art director

Final approval of taste-level decisions.

No agent should independently redefine the entire art direction during implementation.
