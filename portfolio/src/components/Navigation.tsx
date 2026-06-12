'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personal } from '@/lib/data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-500 ${
          scrolled || menuOpen ? 'nav-scrolled' : ''
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 sm:px-8 md:px-12">
          <a
            href="#"
            aria-label={`${personal.name} home`}
            className="font-cormorant-sc text-[0.78rem] uppercase tracking-[0.26em] text-[--ink] transition-opacity duration-300 hover:opacity-55"
          >
            {personal.nameShort}
          </a>

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

          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className="block h-px w-6 origin-center bg-[--ink] transition-all duration-300"
                style={{
                  transform:
                    menuOpen && index === 0
                      ? 'translateY(6px) rotate(45deg)'
                      : menuOpen && index === 2
                        ? 'translateY(-6px) rotate(-45deg)'
                        : menuOpen && index === 1
                          ? 'scaleX(0)'
                          : 'none',
                  opacity: menuOpen && index === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-[--ink]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col items-center gap-10">
                {links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-cormorant-sc text-[1.05rem] uppercase tracking-[0.32em] text-[--platinum] transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
