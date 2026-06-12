'use client';

import { motion } from 'framer-motion';
import Ornament from '@/components/ui/Ornament';
import { heroText } from '@/lib/animations';
import { personal } from '@/lib/data';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[--ink] px-5 pb-16 pt-24 text-center"
      aria-label="Introduction"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-x-8 top-24 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-y-24 left-5 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />
      <div className="absolute inset-y-24 right-5 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />

      <div className="relative z-10 w-full max-w-6xl">
        <motion.p
          variants={heroText}
          custom={0.08}
          initial="hidden"
          animate="visible"
          className="mb-8 font-cormorant-sc text-[0.66rem] uppercase tracking-[0.36em] text-[--silver] sm:mb-10"
        >
          {personal.title}
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            variants={heroText}
            custom={0.25}
            initial="hidden"
            animate="visible"
            className="font-cormorant text-[clamp(3.6rem,12vw,8.7rem)] font-light leading-[0.94] text-white"
          >
            Angga
            <br />
            <em className="font-light italic">Ariya</em>
            <br />
            Saputra
          </motion.h1>
        </div>

        <motion.div
          variants={heroText}
          custom={0.55}
          initial="hidden"
          animate="visible"
          className="my-8 sm:my-10"
        >
          <Ornament color="rgba(229,229,229,0.38)" lineWidth={86} />
        </motion.div>

        <motion.p
          variants={heroText}
          custom={0.7}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-xl font-cormorant-sc text-[0.7rem] uppercase tracking-[0.26em] text-[--ash] sm:tracking-[0.34em]"
        >
          {personal.subtitle}
        </motion.p>

        <motion.div
          variants={heroText}
          custom={0.9}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#work"
            className="inline-flex min-h-12 items-center justify-center border border-white bg-white px-7 py-4 font-cormorant-sc text-[0.66rem] uppercase tracking-[0.24em] text-[--ink] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center border border-white/20 px-7 py-4 font-cormorant-sc text-[0.66rem] uppercase tracking-[0.24em] text-[--silver] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/55 hover:text-white"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35, duration: 0.7 }}
        aria-hidden="true"
      >
        <span className="font-cormorant-sc text-[0.58rem] uppercase tracking-[0.3em] text-[--ash]">
          Scroll
        </span>
        <motion.div
          className="w-px bg-gradient-to-b from-[--ash] to-transparent"
          animate={{ height: [34, 58, 34] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
