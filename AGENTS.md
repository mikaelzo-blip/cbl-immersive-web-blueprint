<!-- BEGIN:nextjs-agent-rules -->
# Next.js & AI Agent Guidelines for CV Cakrawala Buana Lestari (CBL)

This file contains critical documentation, architectural patterns, and guidelines for AI agents working on this repository (`web-cakrawala-3`).

---

## Current Design Source of Truth

Art direction and UX decisions are maintained in:

- `mikaelzo-blip/cbl-immersive-web-blueprint`
- especially `docs/00-CURRENT-DECISIONS.md`, `docs/02-DESIGN-DIRECTION.md`, `docs/03-ANTI-AI-SLOP.md`, and `docs/04-HOMEPAGE-ARCHITECTURE.md`

### Current phase — NO NEW 3D

The owner has explicitly paused 3D work for the current redesign phase.

Do not introduce or depend on:
- WebGL / Three.js / GLB hero assets
- Blender render pipelines
- frame-sequence 3D scrollytelling
- decorative 3D objects
- long sticky scroll scenes

Current priority is a polished photography-led corporate portfolio using authentic project documentation, strong typography, editorial composition, technical metadata, clear hierarchy, restrained motion, and intentional mobile layouts.

### Approved motion that MUST remain

The continuous moving rail in **`Cakupan Komponen & Suku Cadang`** is an explicit owner-approved interaction.

Implementation reference: `src/components/sections/BrandSection.tsx` using `brand-marquee` and `brand-marquee-track` with duplicated tracks for a continuous loop.

Rules:
- do **not** remove the marquee animation
- do **not** replace it with a static logo grid unless the owner explicitly changes this decision
- styling, spacing, cell treatment, speed, and responsive tuning may be refined
- keep the brand list subordinate to project evidence
- preserve an accessible reduced-motion behavior; reduced motion may slow or simplify the movement without deleting the section

### Locked visual refinements — August 2026

These decisions are based on the owner-approved visual review and should not be reopened casually:

- **Primary UI language is Indonesian.** English is reserved for unavoidable brand/product/technical terminology; do not use decorative English labels merely to make the site look premium.
- **Hero scale is controlled, not poster-like.** On large screens the headline should read as three deliberate statements rather than a six-line oversized wall of text.
- Do not use self-conscious AI/stock disclaimers such as **“Project evidence, not stock imagery”** in visitor-facing UI. Use factual archive/date/location metadata instead.
- **Project Archive must not revert to a uniform 3-column card wall.** Keep a varied editorial rhythm: featured project, two-column entries, and periodic wide entries. Project imagery should dominate; archive cards should not repeat summary + scope + CTA in every item.
- Repetition is itself an AI-slop risk. Do not make every section use the exact same `small label + huge heading + horizontal rows` composition. Controlled variation is required.
- **390px is a mandatory mobile QA width.** At 390px: no horizontal page overflow, header brand + menu must fit, portfolio filter tabs may scroll horizontally, forms are one column, editorial grids collapse cleanly, and project imagery remains readable.
- Header/navigation text must remain readable; do not shrink desktop nav or mobile controls into decorative microtype.

### Anti-AI-slop guardrails

Reject by default:
- pill badge above every section title
- repeated rounded feature-card grids
- glassmorphism
- gradient blobs / neon glow
- floating decorative cards
- icon in every content block
- fake stats/testimonials/clients/certifications
- generic SaaS hero composition
- generic marketing copy such as “Building the Future”
- identical fade-up animation on every element

Prefer typography, whitespace, rules, image composition, asymmetric layouts, technical registers, project evidence, and content-specific interaction.

---

## 🏢 Corporate Brand & Design System

- **Company Name**: **CV Cakrawala Buana Lestari (CBL)** - Jasa Teknik Terpadu & Otomasi Fasilitas Industri.
- **Primary Brand Color**: **CBL Orange (`#F97316`)**
  - Use as an accent/action color, not a background treatment for every section.
- **Secondary Brand Colors**:
  - **CBL Navy (`#0F2942`)**: Main headings, dark containers, footer background.
  - **Engineering Blue (`#0E6BA8` / `#15426B`)**: Secondary links and technical accents.
- **Official Logo**: `/logo/cbl-logo.png` & `/logo/cbl-logo.webp`.

---

## 📞 Official Corporate Contact Details

Centralized in `src/data/company.ts`:
- **WhatsApp Fast Response**: `0851-8454-9522` / `+62 851-8454-9522` (URL: `https://wa.me/6285184549522`).
- **Office Telephone**: `(021) 2606-3396` (URL: `tel:02126063396`).
- **Office Address**: Jl. Papanggo II C No. 27, Papanggo, Tanjung Priok, Jakarta Utara, DKI Jakarta 14340.
- **Service Hours**: Senin–Jumat, pukul 07.00–15.00 WIB.

---

## Content Integrity

Use verified company/project data only. The supplied company profile and project register are the factual baseline.

Important public-claim rules:
- brand names indicate project/equipment experience, not official distributorship unless separately proven
- do not present ISO, SMK3, SBU, SKK, zero-accident figures, testimonials, or other certifications/claims as active without current supporting documents
- project photography is evidence and should be preferred to generic stock imagery
- preserve confidentiality rules already used by the project data layer

---

## 🛠️ Key Components & Implementation Patterns

1. **Header & Navigation (`src/components/layout/Header.tsx` & `MobileMenu.tsx`)**:
   - Uses ScrollSpy (`activeSection`) as the user scrolls through homepage sections.
   - Uses `window.history.pushState` on hash clicks to prevent double-hash URL bugs.
   - Nested service and project routes must keep the corresponding top-level navigation state active.

2. **Hero (`src/components/sections/HeroSection.tsx`)**:
   - Use authentic local project documentation through `next/image`.
   - Current hero must be editorial and photography-led, without decorative 3D or generic SaaS UI chrome.
   - Keep the approved restrained three-statement desktop headline rhythm.

3. **Project Archive (`src/app/proyek/page.tsx`)**:
   - Preserve category tabs and accessible active state.
   - Keep the non-uniform editorial archive composition; do not revert to identical 3-column cards.

4. **Brand Section (`src/components/sections/BrandSection.tsx`)**:
   - Only show brands supported by real project/equipment data.
   - Keep the owner-approved continuous marquee animation.
   - Presentation should remain subordinate to actual project work.

5. **Floating Action Controls**:
   - `FloatingWhatsapp.tsx`: fixed quick contact.
   - `BackToTop.tsx`: stacked above WhatsApp to prevent overlap.

---

## 📋 Verification & Build Checklist for AI Agents

Before declaring any task complete or committing code:
1. **Typecheck**: `npx tsc --noEmit` must pass cleanly with 0 errors.
2. **Linting**: `npm run lint` must pass cleanly with 0 errors.
3. **Build**: `npm run build` must complete successfully.
4. **Responsive review**: review at minimum 1440px, 1024px, and 390px.
5. **Visual review**: explicitly check for repeated card patterns and generic AI/SaaS visual language.
6. **Interaction review**: verify homepage scrollspy, nested-route nav states, portfolio filter tabs, mobile menu, and the `Cakupan Komponen & Suku Cadang` marquee.
7. **Git**: use descriptive conventional commit messages (`feat`, `fix`, `perf`, `chore`, `style`).

<!-- END:nextjs-agent-rules -->
