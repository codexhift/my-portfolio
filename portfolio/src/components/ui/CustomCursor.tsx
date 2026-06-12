'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const dotX   = useMotionValue(0);
  const dotY   = useMotionValue(0);
  const ringX  = useSpring(dotX, { stiffness: 120, damping: 18, mass: 0.6 });
  const ringY  = useSpring(dotY, { stiffness: 120, damping: 18, mass: 0.6 });

  const visible = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible.current) visible.current = true;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [dotX, dotY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        aria-hidden="true"
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        aria-hidden="true"
      />
    </>
  );
}
