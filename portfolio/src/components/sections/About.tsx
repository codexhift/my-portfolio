'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Ornament from '@/components/ui/Ornament';
import { fadeSlideUp, staggerChildren, staggerItem } from '@/lib/animations';

const principles = [
  {
    title: 'Craftsmanship',
    description: 'Every interface and system boundary is shaped with discipline, restraint, and care for the smallest details.',
  },
  {
    title: 'Performance',
    description: 'Architecture should feel fast by design, from lean client experiences to efficient backend execution paths.',
  },
  {
    title: 'Security',
    description: 'Reliable software treats trust as a first-class concern through clear permissions, safe defaults, and resilient data flow.',
  },
];

const technologies = [
  'Laravel',
  'Node.js',
  'React',
  'Next.js',
  'TypeScript',
  'PostgreSQL',
  'Redis',
  'Solidity',
  'Tailwind CSS',
  'Linux',
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="bg-[--ivory] py-28 sm:py-32 md:py-40" aria-label="Engineering philosophy">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[980px]">
          <motion.div variants={fadeSlideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <span className="mb-5 block font-cormorant-sc text-[0.65rem] uppercase tracking-[0.35em] text-[--ash]">
              About the Developer
            </span>

            <h2 className="mb-6 max-w-3xl font-cormorant text-[clamp(2.55rem,5vw,4.45rem)] font-light leading-[1.04] text-[--ink]">
              Engineering with
              <br />
              <em className="italic">clarity and intention.</em>
            </h2>

            <div className="mb-8">
              <Ornament color="var(--iron)" lineWidth={58} center={false} />
            </div>

            <p className="mb-12 max-w-2xl font-inter text-[1rem] font-light leading-[1.9] text-[--smoke]">
              I build software around mature architecture, deliberate details, and long-term maintainability.
              The work is guided by performance, security, and clean systems that stay understandable as they scale.
            </p>

            <div className="mb-12">
              <span className="mb-5 block font-cormorant-sc text-[0.62rem] uppercase tracking-[0.3em] text-[--ash]">
                Core Principles
              </span>
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="grid grid-cols-1 border-y border-[--pearl] md:grid-cols-3"
              >
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    variants={staggerItem}
                    className={`py-6 md:px-6 ${
                      index < principles.length - 1 ? 'border-b border-[--pearl] md:border-b-0 md:border-r' : ''
                    }`}
                  >
                    <span className="mb-3 block font-cormorant text-[1.55rem] font-light text-[--ink]">
                      {principle.title}
                    </span>
                    <p className="font-inter text-[0.86rem] font-light leading-[1.75] text-[--ash]">
                      {principle.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <span className="mb-5 block font-cormorant-sc text-[0.62rem] uppercase tracking-[0.3em] text-[--ash]">
                Technologies I Work With
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Selected technologies">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="font-cormorant-sc text-[0.68rem] uppercase tracking-[0.22em] text-[--smoke]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
