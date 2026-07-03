'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '@/lib/data';
import { staggerChildren, staggerItem } from '@/lib/animations';

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div
      ref={ref}
      className="bg-[--ink] border-y border-[--iron] py-16"
      aria-label="Statistics"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className={`text-center px-8 py-6 ${
                i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-[--iron]' : ''
              }`}
            >
              <span className="font-cormorant font-light text-[clamp(2.5rem,4vw,3.5rem)] text-[--platinum] leading-none block mb-2">
                {stat.value}
              </span>
              <span className="font-cormorant-sc text-[0.62rem] tracking-[0.3em] uppercase text-[--ash]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
