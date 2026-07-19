// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const tabNav = document.querySelector('.tab-nav');

if (navToggle && tabNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = tabNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav after clicking a link
  tabNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      tabNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal for sections
const revealTargets = document.querySelectorAll(
  '.about-block, .ops-card, .record-col, .hero-copy, .hero-photo-wrap, .contact-inner'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// Remove boot screen from tab order once its animation ends
const bootScreen = document.getElementById('bootScreen');
if (bootScreen) {
  setTimeout(() => { bootScreen.style.display = 'none'; }, 3000);
}
