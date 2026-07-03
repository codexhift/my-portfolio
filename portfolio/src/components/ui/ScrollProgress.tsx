'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 156]);
  const smoothY = useSpring(y, {
    damping: 30,
    restDelta: 0.001,
    stiffness: 200,
  });

  return (
    <div
      className="fixed right-6 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 pointer-events-none"
      aria-hidden="true"
    >
      <span className="font-cormorant text-[0.6rem] text-[--ash] tracking-wider uppercase leading-none">01</span>

      <div className="relative h-40 w-5">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[--pearl]" />
        <motion.div
          className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full border border-[--ink] bg-[--ivory] shadow-[0_0_0_4px_rgba(250,249,246,0.84)]"
          style={{ y: smoothY }}
        />
      </div>

      <span className="font-cormorant text-[0.6rem] text-[--ash] tracking-wider uppercase leading-none">04</span>
    </div>
  );
}
