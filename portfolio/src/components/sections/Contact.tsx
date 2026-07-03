'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeSlideLeft, fadeSlideRight, staggerChildren, staggerItem } from '@/lib/animations';
import { personal } from '@/lib/data';

const contactItems = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="14" height="10" rx="0" stroke="currentColor" strokeWidth="1"/>
        <path d="M1 3L8 9L15 3" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
    label: 'Electronic Mail',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1C5.239 1 3 3.239 3 6c0 4 5 9 5 9s5-5 5-9c0-2.761-2.239-5-5-5z" stroke="currentColor" strokeWidth="1"/>
        <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
    label: 'Location',
    value: personal.location,
    href: null,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1L2 5v9h4V9h4v5h4V5L8 1z" stroke="currentColor" strokeWidth="1" strokeLinejoin="square"/>
      </svg>
    ),
    label: 'Education',
    value: personal.school,
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[--ink] py-32 md:py-40 overflow-hidden"
      aria-label="Contact"
    >
      {/* Architrave top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--iron] to-transparent" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

          {/* Left — CTA */}
          <motion.div
            variants={fadeSlideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <span className="font-cormorant-sc text-[0.65rem] tracking-[0.35em] uppercase text-[--ash] block mb-5">
              Let&apos;s Collaborate
            </span>

            <h2 className="font-cormorant font-light text-[clamp(2.5rem,4vw,4rem)] leading-[1.1] text-[--platinum] mb-6">
              Begin a <em className="italic">conversation</em>
            </h2>

            <p className="font-inter font-light text-[1rem] leading-[1.85] text-[--ash] mb-10 max-w-md">
              Whether you have a project in mind, a question to ask, or simply wish
              to connect — I would be delighted to hear from you.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href={`mailto:${personal.email}`}
                id="ctaEmailDirect"
                className="inline-flex items-center gap-3 font-cormorant-sc text-[0.68rem] tracking-[0.28em] uppercase
                  px-8 py-4 border border-[--platinum] bg-[--platinum] text-[--ink] rounded-[6px]
                  hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]
                  transition-all duration-300"
              >
                Send a Message
              </a>
              <a
                href={personal.github}
                id="ctaGithub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-cormorant-sc text-[0.68rem] tracking-[0.28em] uppercase
                  px-8 py-4 border border-[--ash] text-[--silver] rounded-[6px]
                  hover:text-[--platinum] hover:border-[--platinum] hover:-translate-y-0.5
                  transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right — Contact details */}
          <motion.div
            variants={fadeSlideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="pt-2"
          >
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem}
                  className={`flex gap-5 py-6 transition-colors duration-300 group
                    ${i === 0 ? 'border-t border-[--iron]' : ''}
                    border-b border-[--iron]
                  `}
                >
                  {/* Icon box */}
                  <div className="w-10 h-10 border border-[--iron] rounded-[6px] flex items-center justify-center
                    text-[--ash] flex-shrink-0 group-hover:bg-[--platinum] group-hover:text-[--ink]
                    group-hover:border-[--platinum] transition-all duration-300">
                    {item.icon}
                  </div>

                  <div>
                    <span className="font-cormorant-sc text-[0.6rem] tracking-[0.28em] uppercase text-[--ash] block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        id={`contact-${item.label.toLowerCase().replace(/\s/g,'-')}`}
                        className="font-cormorant font-light text-[1rem] text-[--platinum]
                          hover:text-[--silver] transition-colors duration-300 no-underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-cormorant font-light text-[1rem] text-[--platinum]">
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
