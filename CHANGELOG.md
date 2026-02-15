# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.1.0] - 2026-02-15

### Added

- **Categorized Tech Stack** — Skills are now grouped into 4 categories: Software Development, Cloud, DevOps, and Data
- **SVG Brand Logos** — Technology logos from the Devicon CDN replace emoji icons (Python, Node.js, Docker, Kubernetes, Azure, GCP, Terraform, Jenkins, etc.)
- **Dark-Logo Handling** — CSS filter automatically inverts dark logos (Next.js, Vercel, GitHub Actions) for the dark theme
- **New Skills** — Added Microservices, Node.js, Next.js, Vercel, Fabric, and Synapse
- **`.gitignore`** — Standard Vite project gitignore

### Changed

- **Education Section** — Populated with Universidad de Buenos Aires (Telecommunications) and Universidad Nacional de Colombia (Electronic Engineering)
- **Certifications Section** — Populated with Google Cloud Professional Cloud Architect, Azure Administrator Associate, and DevOps Bootcamp
- **Section Spacing** — Reduced vertical padding between sections for a tighter layout

### Removed

- **IaC** skill removed from the tech stack

## [1.0.0] - 2026-02-15

### Added

- **Hero Section** — Full-viewport landing with name, title, tagline, circular profile photo, gradient CTA button, and floating animation
- **About Section** — Professional summary card with glassmorphism styling, highlight badges, and tech stack grid
- **Experience Section** — Vertical timeline with glowing dot connectors, 3 role cards (Valtech, Servinformación ×2) with descriptions and bullet highlights
- **Education Section** — Card grid with gradient top border accent
- **Certifications Section** — Grid layout for certification cards
- **Contact Section** — Two-column layout with info card and contact form with mailto integration
- **Footer** — Copyright notice and social media icon links
- **Navigation** — Sticky nav bar with glass blur on scroll, active section highlighting via Intersection Observer, smooth scrolling, and mobile hamburger menu
- **Scroll Animations** — Fade-in-on-scroll effect using Intersection Observer
- **Data-Driven Architecture** — All content sourced from `data.json` for easy updates
- **Responsive Design** — Mobile-first CSS with breakpoints at 480px, 768px, and 1024px
- **Design System** — CSS custom properties; dark glassmorphism theme with navy base and cyan/purple gradient accents
- **Vite Setup** — Vite 6, vanilla JS template, relative base path for flexible deployment

