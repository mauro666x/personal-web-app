# Mauricio Benavides — Personal Portfolio

A modern, minimalist personal portfolio website built with **Vite**, **vanilla JavaScript**, and **CSS**. Features a dark glassmorphism design with cyan/teal accents, smooth scroll navigation, and data-driven content.

## ✨ Features

- **Dark Glassmorphism Design** — Navy background with frosted glass cards and cyan/teal gradients
- **Single-Page Scroll** — 6 sections: Home, About, Experience, Education, Certifications, Contact
- **Data-Driven Content** — All resume data lives in `data.json` — no code changes needed to update
- **Responsive** — Mobile-first with hamburger menu, adapts to all screen sizes
- **Scroll Animations** — Fade-in effects on cards and sections via Intersection Observer
- **Active Nav Highlighting** — Sticky nav bar highlights current section as you scroll
- **Contact Form** — Sends emails directly via [EmailJS](https://www.emailjs.com/) — no redirect to external mail apps

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173/`.

## 📁 Project Structure

```
personal-webapp/
├── public/
│   └── assets/          # Profile photo, resume PDF
├── data.json            # ← All resume content (edit this!)
├── index.html           # Semantic HTML with section landmarks
├── style.css            # Design system & responsive styles
├── main.js              # Data rendering, nav, animations
├── vite.config.js       # Vite configuration
├── package.json
├── .gitignore
├── CHANGELOG.md
├── WALKTHROUGH.md
└── README.md
```

## 🛠️ Customization

Edit **`data.json`** to update all website content:

| Field | Description |
|-------|-------------|
| `personal.name` | Your full name |
| `personal.title` | Job title / headline |
| `personal.tagline` | Short tagline for the hero section |
| `personal.photo` | Path to profile photo (e.g., `"assets/profile.jpg"`) |
| `personal.resumeUrl` | Path to downloadable CV (e.g., `"assets/resume.pdf"`) |
| `personal.email` | Contact email |
| `about.summary` | Professional summary paragraph |
| `about.highlights` | Array of key strength areas |
| `skillCategories` | Array of `{ category, skills: [{ name, logo, icon, dark }] }` grouped by domain |
| `experience` | Array of `{ company, role, startDate, endDate, description, highlights }` |
| `education` | Array of `{ institution, degree, field, startDate, endDate, description }` |
| `certifications` | Array of `{ name, issuer, date, badgeEmoji }` |
| `contact.linkedin` | LinkedIn profile URL |
| `contact.github` | GitHub profile URL |
| `contact.email` | Contact email |

### Adding Your Photo

1. Place your photo in `public/assets/profile.jpg`
2. Set `"photo": "assets/profile.jpg"` in `data.json`

### Adding Certifications

Add entries to the `certifications` array in `data.json`:

```json
{
  "name": "AWS Solutions Architect",
  "issuer": "Amazon Web Services",
  "date": "2024",
  "badgeEmoji": "🏆"
}
```

## 🎨 Design Tokens

The design system uses CSS custom properties defined in `style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0f1e` | Page background |
| `--bg-secondary` | `#0f172a` | Card backgrounds |
| `--accent` | `#06b6d4` | Primary accent (cyan) |
| `--gradient-accent` | `135deg, #06b6d4 → #8b5cf6` | Gradient highlights |
| `--font` | `Inter` | Typography |

## 📦 Tech Stack

- **Vite 6** — Build tool & dev server
- **Vanilla JavaScript** — No frameworks, ES modules
- **CSS3** — Custom properties, Grid, Flexbox, backdrop-filter
- **EmailJS** — Client-side email delivery for the contact form
- **Google Fonts** — Inter typeface

## 📄 License

MIT
