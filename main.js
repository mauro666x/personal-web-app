/* ══════════════════════════════════════════════════
   MAIN.JS — Personal Portfolio
   ══════════════════════════════════════════════════ */

import './style.css';

// ── State ──
let data = null;

// ── Helpers ──
function esc(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Bootstrap ──
async function init() {
  try {
    const res = await fetch('/data.json');
    data = await res.json();
    render();
    setupNavigation();
    setupScrollAnimations();
    setupContactForm();
  } catch (err) {
    console.error('Failed to load data:', err);
  }
}

// ══════════════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════════════

function render() {
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderContact();
  renderFooter();
}

// ── Hero ──
function renderHero() {
  const { personal } = data;

  document.getElementById('heroName').textContent = personal.name;
  document.getElementById('heroTitle').textContent = personal.title;
  document.getElementById('heroTagline').textContent = personal.tagline;

  // Photo
  const photoEl = document.getElementById('heroPhoto');
  if (personal.photo) {
    const img = document.createElement('img');
    img.src = personal.photo;
    img.alt = personal.name;
    img.loading = 'eager';
    photoEl.replaceChildren(img);
  }

  // LinkedIn button
  const linkedinBtn = document.getElementById('viewLinkedin');
  if (personal.resumeUrl) {
    linkedinBtn.href = personal.resumeUrl;
    linkedinBtn.style.display = 'inline-flex';
  }
}

// ── About ──
function renderAbout() {
  const { about } = data;

  document.getElementById('aboutSummary').textContent = about.summary;

  const highlightsEl = document.getElementById('aboutHighlights');
  highlightsEl.replaceChildren(...about.highlights.map(h => {
    const div = document.createElement('div');
    div.className = 'highlight-item';
    div.textContent = h;
    return div;
  }));
}

// ── Skills ──
function renderSkills() {
  const container = document.getElementById('skillsCategories');
  container.innerHTML = data.skillCategories
    .map(cat => `
      <div class="skill-category fade-in">
        <h4 class="skill-category-label">${esc(cat.category)}</h4>
        <div class="skills-grid">
          ${cat.skills.map(s => `
            <div class="skill-card">
              <div class="skill-icon">
                ${s.logo
        ? `<img src="${esc(s.logo)}" alt="${esc(s.name)}" loading="lazy" class="skill-logo${s.dark ? ' dark-logo' : ''}" />`
        : `<span>${esc(s.icon || '⚙️')}</span>`
      }
              </div>
              <div class="skill-name">${esc(s.name)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `)
    .join('');
}

// ── Experience ──
function renderExperience() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = data.experience
    .map(exp => `
      <div class="timeline-item fade-in">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div>
              <div class="timeline-role">${esc(exp.role)}</div>
              <div class="timeline-company">
                ${esc(exp.company)}
                ${exp.previousName ? `<span class="timeline-company-prev"> (${esc(exp.previousName)})</span>` : ''}
              </div>
            </div>
            <span class="timeline-dates">${esc(exp.startDate)} — ${esc(exp.endDate)}</span>
          </div>
          <p class="timeline-description">${esc(exp.description)}</p>
          <ul class="timeline-highlights">
            ${exp.highlights.map(h => `<li>${esc(h)}</li>`).join('')}
          </ul>
        </div>
      </div>
    `)
    .join('');
}

// ── Education ──
function renderEducation() {
  const grid = document.getElementById('educationGrid');
  if (!data.education || data.education.length === 0) {
    grid.innerHTML = `
      <div class="empty-state glass-card">
        <span class="empty-icon">🎓</span>
        <p>Education details coming soon</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = data.education
    .map(edu => `
      <div class="education-card fade-in">
        <div class="education-icon">${edu.logo
        ? `<img src="${esc(edu.logo)}" alt="${esc(edu.institution)}" loading="lazy" class="education-logo${edu.dark ? ' dark-logo' : ''}" />`
        : '🎓'
      }</div>
        <div class="education-info">
          <div class="education-degree">${esc(edu.degree || 'Degree')}</div>
          <div class="education-institution">${esc(edu.institution)}</div>
          ${edu.startDate || edu.endDate
        ? `<div class="education-dates">${esc(edu.startDate || '')} ${edu.startDate && edu.endDate ? '—' : ''} ${esc(edu.endDate || '')}</div>`
        : ''
      }
          ${edu.description ? `<p class="education-description">${esc(edu.description)}</p>` : ''}
        </div>
      </div>
    `)
    .join('');
}

// ── Certifications ──
function renderCertifications() {
  const grid = document.getElementById('certsGrid');
  if (!data.certifications || data.certifications.length === 0) {
    grid.innerHTML = `
      <div class="empty-state glass-card">
        <span class="empty-icon">🏅</span>
        <p>Certifications coming soon</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = data.certifications
    .map(cert => `
      <div class="cert-card fade-in">
        <div class="cert-badge">${cert.badgeLogo
        ? `<img src="${esc(cert.badgeLogo)}" alt="${esc(cert.issuer)}" loading="lazy" class="cert-logo" />`
        : esc(cert.badgeEmoji || '🏆')
      }</div>
        <div class="cert-info">
          <div class="cert-name">${esc(cert.name)}</div>
          <div class="cert-issuer">${esc(cert.issuer)}</div>
          ${cert.date ? `<div class="cert-date">${esc(cert.date)}</div>` : ''}
        </div>
      </div>
    `)
    .join('');
}

// ── Contact ──
function renderContact() {
  const linksEl = document.getElementById('contactLinks');
  const { contact } = data;
  const links = [];

  if (contact.email) {
    links.push(`
      <a href="mailto:${esc(contact.email)}" class="contact-link">
        <span class="contact-link-icon">✉️</span>
        <span>${esc(contact.email)}</span>
      </a>
    `);
  }
  if (contact.linkedin) {
    links.push(`
      <a href="${esc(contact.linkedin)}" target="_blank" rel="noopener" class="contact-link">
        <span class="contact-link-icon">💼</span>
        <span>LinkedIn</span>
      </a>
    `);
  }
  if (contact.github) {
    links.push(`
      <a href="${esc(contact.github)}" target="_blank" rel="noopener" class="contact-link">
        <span class="contact-link-icon">💻</span>
        <span>GitHub</span>
      </a>
    `);
  }

  linksEl.innerHTML = links.join('');
}

// ── Footer ──
function renderFooter() {
  const socialsEl = document.getElementById('footerSocials');
  const { contact } = data;
  const socials = [];

  if (contact.linkedin) {
    socials.push(`<a href="${esc(contact.linkedin)}" target="_blank" rel="noopener" class="footer-social-link" aria-label="LinkedIn">💼</a>`);
  }
  if (contact.github) {
    socials.push(`<a href="${esc(contact.github)}" target="_blank" rel="noopener" class="footer-social-link" aria-label="GitHub">💻</a>`);
  }
  if (contact.email) {
    socials.push(`<a href="mailto:${esc(contact.email)}" class="footer-social-link" aria-label="Email">✉️</a>`);
  }

  socialsEl.innerHTML = socials.join('');
}

// ══════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════

function setupNavigation() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const navAnchors = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  // Scroll → frosted nav background
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close mobile nav on link click
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  // Active section highlighting (Intersection Observer)
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

// ══════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ══════════════════════════════════════════════════

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all fade-in elements (initial + dynamically created)
  const observeAll = () => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  };

  // Run after render
  observeAll();

  // Also observe section titles and cards
  document.querySelectorAll('.glass-card, .section-title, .timeline-item, .education-card, .cert-card, .skill-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// ══════════════════════════════════════════════════
// CONTACT FORM
// ══════════════════════════════════════════════════

function setupContactForm() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) return;

    // If user has an email, open mailto
    const toEmail = data.contact.email || 'hello@example.com';
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:${toEmail}?subject=${subject}&body=${body}`, '_self');

    // Visual feedback
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent! ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

// ── Go ──
document.addEventListener('DOMContentLoaded', init);
