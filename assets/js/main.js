const copyYear = document.getElementById('copy-year');
if (copyYear) copyYear.textContent = new Date().getFullYear();

// Highlight current page in nav with btn-nav class (only one active at a time)
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links > li > a').forEach(link => {
  link.classList.remove('btn-nav');
  const parentLi = link.closest('li');
  const isDropdown = parentLi && parentLi.classList.contains('nav-dropdown');
  if (isDropdown) {
    const activeChild = parentLi.querySelector(`.dropdown-menu a[href="${currentPage}"]`);
    if (activeChild) link.classList.add('btn-nav');
  } else if (link.getAttribute('href') === currentPage) {
    link.classList.add('btn-nav');
  }
});

// ── Language switcher ─────────────────────────
function setLang(lang) {
  document.body.setAttribute('data-active-lang', lang);
  document.querySelectorAll('.lang-switcher button').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`.lang-switcher button[data-lang-btn="${lang}"]`);
  if (btn) btn.classList.add('active');
  try { localStorage.setItem('lang', lang); } catch(e) {}
}

// ── Mobile hamburger ──────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ── Scroll fade-in ────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Stagger service cards ─────────────────────
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});

// ── Restore saved language ────────────────────
(function () {
  try {
    const saved = localStorage.getItem('lang');
    if (saved && ['fi', 'en', 'sv'].includes(saved)) setLang(saved);
  } catch(e) {}
})();
