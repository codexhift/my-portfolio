'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Ornament from '@/components/ui/Ornament';
import { fadeSlideLeft, fadeSlideRight, staggerChildren, staggerItem } from '@/lib/animations';
import { personal, skills } from '@/lib/data';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="bg-[--ivory] py-28 sm:py-32 md:py-40" aria-label="About">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] xl:gap-24">
          <motion.div variants={fadeSlideLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="mx-auto max-w-[410px] lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden bg-[--pearl] shadow-[0_28px_80px_rgba(10,10,10,0.13)]">
                <div className="absolute inset-3 z-10 border border-white/70" />
                <div className="absolute inset-5 z-10 border border-black/10" />
                <div className="portrait-corner tl" />
                <div className="portrait-corner tr" />
                <div className="portrait-corner bl" />
                <div className="portrait-corner br" />
                <Image
                  src="/profile.png"
                  alt={`${personal.name}, full stack web developer`}
                  fill
                  sizes="(max-width: 768px) 90vw, 410px"
                  className="object-cover object-top grayscale contrast-[1.08]"
                  priority
                />
              </div>

              <div className="mt-6 text-center">
                <Ornament color="var(--ash)" lineWidth={54} />
                <span className="mt-3 block font-cormorant-sc text-[0.62rem] uppercase tracking-[0.28em] text-[--ash]">
                  {personal.school}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeSlideRight} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <span className="mb-5 block font-cormorant-sc text-[0.65rem] uppercase tracking-[0.35em] text-[--ash]">
              About the Developer
            </span>

            <h2 className="mb-6 font-cormorant text-[clamp(2.35rem,5vw,4rem)] font-light leading-[1.06] text-[--ink]">
              Crafting the web with
              <br />
              <em className="italic">precision and purpose</em>
            </h2>

            <div className="mb-8">
              <Ornament color="var(--iron)" lineWidth={58} center={false} />
            </div>

            <p className="mb-5 max-w-2xl font-inter text-[1rem] font-light leading-[1.9] text-[--smoke]">
              {personal.bio1}
            </p>
            <p className="mb-10 max-w-2xl font-inter text-[1rem] font-light leading-[1.9] text-[--smoke]">
              {personal.bio2}
            </p>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 border border-[--pearl] sm:grid-cols-2"
              role="list"
              aria-label="Technical skills"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={staggerItem}
                  role="listitem"
                  className={`flex min-h-12 items-center gap-3 px-5 py-3.5 transition-colors duration-300 hover:bg-[--alabaster] ${
                    index % 2 === 0 ? 'sm:border-r sm:border-[--pearl]' : ''
                  } ${index < skills.length - 1 ? 'border-b border-[--pearl]' : ''} ${
                    index === skills.length - 2 ? 'sm:border-b-0' : ''
                  }`}
                >
                  <span className="h-1.5 w-1.5 rotate-45 bg-[--ink]" aria-hidden="true" />
                  <span className="font-cormorant-sc text-[0.68rem] uppercase tracking-[0.2em] text-[--smoke]">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
