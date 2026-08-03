# سيد التقنية — Mr.Tech | Brand Guidelines

**Creator:** Sayed (@sayedtechs)
**Brand:** سيد التقنية — Mr.Tech
**Pillars:** Technology · Engineering · Gaming · AI · Automotive Tech · Electronics
**Region:** Bahrain / GCC · Bilingual AR–EN
**Version:** 1.0 · 2026

> This system documents an existing logo design. No design elements were altered —
> only formalized into a complete, scalable identity system.

---

## 1. The Mark

The identity is built on two stacked geometric **arrow-bar forms** (the icon) — signalling
momentum and signal/transmission. The wordmark sets **سيد** in solid weight above an
**outlined** **التقنية**, both drawn in the **Mawzoon** typeface (cyber-Kufic).

**Construction:**
- Wordmark left, **sharp badge with a bottom-right document-fold cut** (no rounded corners), black icon, right
- سيد = filled (justified with tatweel to **equal width** with التقنية); التقنية = light outline/stroke (≈9 units) so letters never collide — this contrast is core and must never be swapped
- Pure monochrome foundation

**Variations provided:**
| Variant | File | Use |
|---|---|---|
| Horizontal · Reversed | `logo-horizontal-reversed.svg` | Primary, dark backgrounds |
| Horizontal · Black | `logo-horizontal-black.svg` | Light backgrounds |
| Stacked | `logo-stacked-reversed.svg` | Square/vertical spaces |
| Wordmark | `wordmark-reversed.svg` / `-black.svg` | Text-only contexts |
| Icon · Badge | `icon-badge.svg` | Avatars, app icons, favicon |
| Icon · Transparent | `icon-reversed.svg` / `icon-black.svg` | Standalone mark |
| Editable Master | `wordmark-MASTER-editable.svg` | Editing (Mawzoon embedded) |

---

## 2. Color

Monochrome is the foundation. The accent system is GCC-rooted.

| Name | HEX | RGB | CMYK | Use |
|---|---|---|---|---|
| **Ink Black** | `#0A0A0A` | 10,10,10 | 0,0,0,96 | Primary background, ink |
| **Pure White** | `#FFFFFF` | 255,255,255 | 0,0,0,0 | Reverse ink, badge fill |
| **Barzakh Teal** | `#00B5A5` | 0,181,165 | 100,0,9,29 | Primary accent (Gulf sea/pearl) |
| **Desert Gold** | `#C9A24B` | 201,162,75 | 0,19,63,21 | Secondary accent (GCC warmth) |
| **Midnight** | `#0E1B2A` | 14,27,42 | 67,36,0,84 | Depth, gradients |

Use accent **sparingly** — hairlines, highlights, a single gesture. Never tint the logo itself.

---

## 3. Typography

**Mawzoon is reserved for branding only** — the logo and wordmark. All other text
(headings, body, captions, posts, subtitles, UI) uses the body system below. This keeps
the brand mark distinctive and running text legible.

| Role | Font | Source | Notes |
|---|---|---|---|
| **Branding (Arabic)** | **Mawzoon** | (provided OTF) | **Logo & wordmark ONLY.** Geometric cyber-Kufic. Never body/UI. |
| Body & Headings (Arabic) | **Tajawal** | Google Fonts | **All Arabic text outside the logo.** Headings, captions, posts, UI. Weights 300–700. |
| Display/Technical (Latin) | **IBM Plex Mono** | Google Fonts | Handles, code, labels, eyebrows |
| Body (Latin) | **IBM Plex Sans** | Google Fonts | Long-form English, captions, UI |

> Rule: only the logo/wordmark is Mawzoon. Every other Arabic string is Tajawal.
> Download Tajawal & IBM Plex free from Google Fonts.

---

## 4. Clear Space & Minimum Size

- **Clear space:** ≥ the height of the icon mark on all sides.
- **Minimum size — Horizontal lockup:** 120px wide (digital), 30mm (print).
- **Minimum size — Icon:** 24px. Favicon tested legible to **16px**.

---

## 5. Usage Rules

**Do**
- Use approved SVG/PNG files only
- Keep monochrome as default
- Preserve the سيد(fill) / التقنية(outline) relationship
- Give the mark generous clear space
- Use the badge icon for avatars & favicons
- Use Mawzoon for the logo/wordmark only
- Use Tajawal for all other Arabic text
- Apply accent teal sparingly

**Don't**
- Recolor, fill, or outline-swap the wordmark
- Stretch, skew, or rotate any element
- Set body or caption text in Mawzoon
- Re-typeset the name in another font
- Add shadows, bevels, or gradients to the mark
- Round the badge corners (keep sharp + single document-fold cut)
- Crowd the logo or shrink below minimums
- Place on low-contrast or busy backgrounds

---

## 6. File Index

```
SayedTech-Logo-System/
├── SVG/          Vector masters (delivery outlines + editable master)
├── PNG/          Pre-rendered transparent logos (256–2048px)
├── Favicon/      Web icon package (16–512px, ICO, SVG, maskable, manifest)
├── Social-Media/ Platform templates (YT, IG, TikTok, X, LinkedIn)
└── Guidelines/   This document + HTML specimen + color palette JSON
```

---

## 7. Web Installation

Add to `<head>`:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
<link rel="manifest" href="/site.webmanifest">
```

---

*Branding: Mawzoon · Body Arabic: Tajawal · Latin: IBM Plex · Accent: Barzakh Teal #00B5A5 · Hamad Town, Bahrain · 2026*
