'use client';

import { motion } from 'framer-motion';
import Ornament from '@/components/ui/Ornament';
import { heroText } from '@/lib/animations';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[--ivory] px-5 pb-24 pt-24 text-center"
      aria-label="Introduction"
    >
      {/* Subtle editorial dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--ink) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Structural lines */}
      <div className="absolute inset-x-8 top-24 h-px bg-[--pearl] opacity-40" />
      <div className="absolute inset-y-24 left-12 hidden w-px bg-[--pearl] opacity-25 md:block" />
      <div className="absolute inset-y-24 right-12 hidden w-px bg-[--pearl] opacity-25 md:block" />

      <div className="relative z-10 w-full max-w-7xl">

        {/* ── Profession Label ── */}
        <motion.p
          variants={heroText}
          custom={0.08}
          initial="hidden"
          animate="visible"
          className="mb-10 font-cormorant-sc text-[0.67rem] font-semibold uppercase tracking-[0.46em] text-[--ash]"
        >
          Full Stack • Web3
        </motion.p>

        {/* ── Hero Name Typography ── */}
        <div className="overflow-visible mb-10">
          <motion.h1
            variants={heroText}
            custom={0.25}
            initial="hidden"
            animate="visible"
            className="font-cormorant tracking-[-0.01em]"
            aria-label="Angga Arya Saputra"
          >

            {/* ─────────────────────────────────────────────────────────
                MOBILE & TABLET  (< lg)
                Line 1: "Angga Arya"   Line 2: "Saputra"
                ───────────────────────────────────────────────────────── */}
            <span className="block lg:hidden leading-[1.04]">
              {/* Line 1 */}
              <span className="block text-[clamp(3rem,11.5vw,5.2rem)] font-extralight tracking-tight text-[--ash]">
                Angga{' '}
                <span className="name-gradient-mask font-semibold italic tracking-normal">
                  Ariya
                </span>
              </span>
              {/* Line 2 */}
              <span className="block text-[clamp(3rem,11.5vw,5.2rem)] font-extralight tracking-tight text-[--ash] mt-0.5">
                Saputra
              </span>
            </span>

            {/* ─────────────────────────────────────────────────────────
                DESKTOP & LAPTOP  (lg+)
                Single line: "Angga Arya Saputra"
                Uses whitespace-nowrap + vw sizing so it never wraps.
                ───────────────────────────────────────────────────────── */}
            <span
              className="hidden lg:block whitespace-nowrap leading-[1.02]"
              style={{ fontSize: 'clamp(4rem, 5.6vw, 8rem)' }}
            >
              <span className="font-extralight tracking-tight text-[--ash]">Angga </span>
              <span className="name-gradient-mask font-semibold italic tracking-normal">Ariya</span>
              <span className="font-extralight tracking-tight text-[--ash]"> Saputra</span>
            </span>

          </motion.h1>
        </div>

        {/* ── Ornament divider ── */}
        <motion.div
          variants={heroText}
          custom={0.5}
          initial="hidden"
          animate="visible"
          className="mt-10"
        >
          <Ornament color="var(--pearl)" lineWidth={100} />
        </motion.div>

      </div>

      {/* ── Elegant Scroll Indicator ── */}
      <motion.button
        type="button"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer bg-transparent border-none outline-none group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to About section"
      >
        <span className="font-cormorant-sc text-[0.58rem] font-medium uppercase tracking-[0.36em] text-[--ash] transition-colors duration-300 group-hover:text-[--ink]">
          Scroll
        </span>
        {/* Animated line with sliding dash */}
        <div className="relative w-[1px] h-14 bg-[--pearl] overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-5 bg-[--ink]/30"
            animate={{ y: [0, 36, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.button>

    </section>
  );
}
