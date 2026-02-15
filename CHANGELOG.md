# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-02-15

### Added

- **Hero Section** — Full-viewport landing with name, title, tagline, circular photo placeholder (MB monogram), gradient CTA button, and floating animation
- **About Section** — Professional summary card with glassmorphism styling, 4 highlight badges, and a 12-card tech stack grid (Azure, GCP, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, Azure DevOps, Linux, CI/CD, IaC, Python)
- **Experience Section** — Vertical timeline with glowing dot connectors, 3 role cards (Valtech, Servinformación ×2) each with company, dates badge, description, and bullet-point highlights
- **Education Section** — Card grid with gradient top border accent, populated with Universidad de Buenos Aires (UBA)
- **Certifications Section** — Grid layout with "coming soon" placeholder; ready for data via `data.json`
- **Contact Section** — Two-column layout with "Let's Connect" info card (LinkedIn link) and a contact form (Name, Email, Message) with mailto integration
- **Footer** — Copyright notice and social media icon links
- **Navigation** — Sticky top nav bar with glass blur on scroll, active section highlighting via Intersection Observer, smooth anchor scrolling, and mobile hamburger menu with slide-in drawer
- **Scroll Animations** — Fade-in-on-scroll effect for cards, timeline items, and section titles using Intersection Observer
- **Data-Driven Architecture** — All content sourced from `data.json` for easy updates without touching code
- **Responsive Design** — Mobile-first CSS with breakpoints at 480px, 768px, and 1024px
- **Design System** — CSS custom properties for colors, typography, spacing, and border-radius; dark glassmorphism theme with navy base (`#0a0f1e`) and cyan/teal (`#06b6d4`) + purple (`#8b5cf6`) gradient accents
- **Vite Setup** — Project configured with Vite 6, vanilla JS template, relative base path for flexible deployment
