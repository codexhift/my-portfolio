'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about',   label: 'About'   },
  { href: '#work',    label: 'Work'    },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body scroll when sidebar is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ══════════════════════════════════════════
          HEADER BAR
          ══════════════════════════════════════════ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !menuOpen ? 'nav-scrolled' : ''
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 sm:px-8 md:px-12">

          {/* Brand */}
          <a
            href="#"
            aria-label="Codexhift — home"
            onClick={closeMenu}
            className="relative z-50 font-cormorant-sc text-[0.85rem] font-bold uppercase tracking-[0.28em] text-[--ink] transition-all duration-300 hover:opacity-50"
          >
            Codexhift
          </a>

          {/* ── Desktop nav (md+) ── */}
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-10">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative pb-1 font-cormorant-sc text-[0.7rem] uppercase tracking-[0.24em] text-[--smoke] transition-colors duration-300 hover:text-[--ink]"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[--ink] transition-[width] duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Hamburger button (mobile only) ── */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
          >
            <span
              className="block h-px w-5 origin-center transition-all duration-300"
              style={{
                backgroundColor: 'var(--ink)',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-px w-5 origin-center transition-all duration-300"
              style={{
                backgroundColor: 'var(--ink)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-5 origin-center transition-all duration-300"
              style={{
                backgroundColor: 'var(--ink)',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>

        </div>
      </header>

      {/* ══════════════════════════════════════════
          MOBILE SIDEBAR  (slide from right)
          ══════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Blurred, dimmed backdrop — hero still visible beneath */}
            <motion.div
              key="sidebar-backdrop"
              className="fixed inset-0 z-30 md:hidden"
              style={{ backgroundColor: 'rgba(248,248,248,0.55)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Sidebar panel */}
            <motion.aside
              key="sidebar-panel"
              className="fixed top-0 right-0 z-40 flex h-full w-64 flex-col bg-[--ink] md:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Mobile navigation"
            >
              {/* Top thin accent line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[--ash] to-transparent" />

              {/* Nav links — vertically centered */}
              <nav className="flex flex-1 flex-col justify-center px-10">
                <ul className="flex flex-col gap-9">
                  {links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.07,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-4"
                      >
                        <span className="h-px w-4 bg-[--ash] transition-all duration-300 group-hover:w-6 group-hover:bg-[--platinum]" />
                        <span className="font-cormorant text-[1.55rem] font-light italic text-[--silver] transition-colors duration-300 group-hover:text-[--platinum]">
                          {link.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="mt-12 h-px w-8 bg-[--ash]" />

                {/* Brand label */}
                <p className="mt-5 font-cormorant-sc text-[0.58rem] uppercase tracking-[0.32em] text-[--ash]">
                  Codexhift
                </p>
              </nav>

              {/* Bottom thin accent line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[--ash] to-transparent" />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
