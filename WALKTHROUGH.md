# Walkthrough — Personal Portfolio Website

## Overview

This document walks through the architecture, design decisions, and final result of the personal portfolio website for Mauricio Benavides.

## Architecture

```
data.json  ──→  main.js  ──→  index.html (DOM)
                   │
                   ├── Fetches JSON at load
                   ├── Renders all sections dynamically
                   ├── Sets up Intersection Observers (nav + animations)
                   └── Handles contact form submission
```

**Key decision:** All content lives in `data.json` so the site can be updated without touching HTML/JS/CSS. This makes it easy to add new experience, education, certifications, or change the photo.

## Sections

### 1. Hero
- Full-viewport landing with floating photo circle (gradient border + glow shadow)
- Animated scroll indicator arrow at the bottom
- "Get in Touch" CTA smooth-scrolls to Contact section
- "Download CV" button appears only when `resumeUrl` is set in data.json

### 2. About
- Two-column layout: professional summary card (glass effect) + tech stack grid
- 4 highlight badges with cyan dot indicators
- 12 skill cards with emoji icons, hover glow animation

### 3. Experience
- Vertical timeline with glowing dot connectors and gradient line
- Each role card shows: title, company (+ former name), date badge, description, bullet highlights
- Cards have hover border glow effect

### 4. Education
- Card grid with gradient top-border accent
- Gracefully handles missing fields (degree, dates, description)

### 5. Certifications
- Grid layout ready for certification cards
- Shows "coming soon" placeholder when the array is empty
- Each cert card: badge emoji, name, issuer, date

### 6. Contact
- Split layout: info card + contact form
- Form uses mailto link as submission method
- Visual feedback on submit (button text changes to "Message Sent! ✓")

### 7. Navigation
- Sticky with transparent-to-blurred background transition on scroll
- Active section auto-highlighted via Intersection Observer
- Mobile: hamburger icon toggles slide-in drawer

## Design System

| Token | Value |
|-------|-------|
| Background | `#0a0f1e` (deep navy) |
| Cards | `rgba(15,23,42,0.6)` + `backdrop-filter: blur(16px)` |
| Accent | `#06b6d4` (cyan) → `#8b5cf6` (purple) gradient |
| Font | Inter, 300–800 weights |
| Radius | 0.5rem – 1.5rem |

## Testing Results

All sections verified in browser at `http://localhost:5173/`:

- ✅ Hero renders with correct data from JSON
- ✅ Navigation smooth-scrolls and highlights active section
- ✅ About section shows summary + 12 skill cards
- ✅ Experience timeline renders 3 role cards with highlights
- ✅ Education card displays UBA
- ✅ Certifications shows placeholder (empty array)
- ✅ Contact form and LinkedIn link functional
- ✅ Frosted glass navbar on scroll
- ✅ No visual glitches or broken layouts
