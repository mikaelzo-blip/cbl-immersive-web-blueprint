# 12 — Visual References

Dokumen ini menyimpan reference visual yang secara eksplisit dipilih oleh pemilik proyek.

Tujuannya bukan untuk menyalin satu website atau video secara literal. Tujuannya adalah mengunci **kelas pengalaman, bahasa interaksi, dan standar kualitas** yang diinginkan.

## Primary reference — YouTube

URL:

https://youtu.be/DJMsXSr1jec?si=mRUueM6leMW4Hme-

Status:

- disetujui manusia sebagai contoh yang sangat baik untuk web 3D
- digunakan sebagai target untuk **3D product storytelling**
- agent yang memiliki kemampuan membuka/menonton video harus memeriksanya sebelum mengubah sistem 3D utama
- jangan mengarang detail spesifik video jika belum benar-benar melihatnya

### What we are taking from this reference

Arah yang dikunci oleh keputusan manusia:

- 3D bukan sekadar dekorasi atau model yang berputar sendiri
- objek/sistem menjadi fokus visual utama
- 3D menjelaskan produk atau sistem secara bertahap
- navigasi cerita menggunakan **scroll vertikal ke bawah**
- pengalaman harus terasa immersive dan cinematic, tetapi tetap mudah dipahami
- kamera, posisi objek, scale, assembly state, dan annotation dapat berubah mengikuti progress scroll
- user tidak boleh dipaksa horizontal-scroll untuk mengikuti cerita
- drag/orbit boleh tersedia hanya sebagai secondary interaction

### Desired storytelling pattern for CBL

Contoh target untuk mechanical story:

1. complete gearbox / drivetrain appears as hero object
2. camera establishes the complete assembly
3. scroll moves closer to the transmission area
4. casing or outer assembly can separate/reveal
5. shaft, bearing, gear, coupling, sprocket/chain relationships become understandable
6. annotation/callout appears only when needed
7. assembly returns or camera transitions naturally
8. scene gives way to verified real project photography

Equivalent stories should later be created for:

- industrial control panel
- pump / water system

The experience should feel like an **engineering product film controlled by scroll**, not an e-commerce model viewer.

## Secondary reference — Instagram

URL:

https://www.instagram.com/p/DZdOFrNDx4i/

Human intent associated with this reference:

> "web seperti ini — 3D animasi menjelaskan product"

Use this as supporting evidence for the same product-explainer direction.

## Reference usage rules

When an agent can access the reference video, first perform a shot/interactivity breakdown before implementation:

1. opening composition
2. camera path
3. object transforms
4. explode/reveal/cutaway behavior
5. scroll-to-timeline mapping
6. text/annotation placement
7. lighting/material language
8. transitions between story beats
9. mobile adaptation
10. performance implications

Then compare the observed behavior against:

- `docs/05-IMMERSIVE-3D-SCROLL.md`
- `docs/06-3D-ASSET-PLAN.md`
- `docs/07-MOTION-SYSTEM.md`

If the reference suggests a better interaction pattern, document the proposal before changing the locked project behavior.

## Do not copy blindly

Never copy:

- brand identity
- logos
- proprietary text
- exact composition solely to imitate another company
- product geometry unrelated to CBL

Translate the quality and interaction principles into CBL's own industrial identity.

## Quality bar

If the CBL implementation feels like:

- a generic Three.js demo
- a basic 360-degree viewer
- a floating primitive object
- a model with auto-rotation and no story
- a conventional website with a 3D object pasted on the side

then it has **not** met this reference standard.

The target is a cohesive, vertically scroll-driven product/system explanation where the 3D scene and editorial narrative behave as one designed experience.
