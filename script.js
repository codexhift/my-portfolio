/* ============================================================
   ANGGA ARIYA SAPUTRA — PORTFOLIO SCRIPT
   Neo-Classical Monochrome Edition
   ============================================================ */

'use strict';

// ===== CUSTOM CURSOR =====
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
});

// Smooth trailing ring
(function animateCursorRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateCursorRing);
})();

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity     = '0';
    cursorRing.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
    cursor.style.opacity     = '1';
    cursorRing.style.opacity = '1';
});

// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ===== MOBILE MENU =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu          = document.getElementById('navMenu');
const navLinks         = document.querySelectorAll('.nav-link');

mobileMenuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active', isOpen);
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeMenu() {
    navMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

navLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        closeMenu();
    }
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.08
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== ANIMATED COUNTER =====
const counters = document.querySelectorAll('[data-target]');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const step   = Math.max(1, Math.floor(target / 60));
        let current  = 0;

        const tick = () => {
            current = Math.min(current + step, target);
            el.textContent = current + (target > 3 ? '+' : '');
            if (current < target) requestAnimationFrame(tick);
        };

        // Small delay for elegance
        setTimeout(tick, 300);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.5 });

counters.forEach(el => counterObserver.observe(el));

// ===== SMOOTH SCROLL (for browsers without CSS support) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetY = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
});

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id], div[id="about"]');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                const href = link.getAttribute('href').replace('#', '');
                link.style.color = href === id ? 'var(--black)' : '';
            });
        }
    });
}, {
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
});

document.querySelectorAll('section[id]').forEach(s => navObserver.observe(s));
