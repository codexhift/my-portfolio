'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Ornament from '@/components/ui/Ornament';
import { fadeSlideUp, staggerItem } from '@/lib/animations';
import { projects } from '@/lib/data';

type Project = (typeof projects)[number];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" ref={ref} className="bg-[--ivory] py-28 sm:py-32 md:py-40" aria-label="Selected work">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 md:px-12">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16 text-center md:mb-20"
        >
          <span className="mb-4 block font-cormorant-sc text-[0.65rem] uppercase tracking-[0.35em] text-[--ash]">
            Selected Work
          </span>
          <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4.35rem)] font-light leading-[1.06] text-[--ink]">
            Projects &amp; <em className="italic">Endeavours</em>
          </h2>
          <div className="mt-6">
            <Ornament color="var(--ash)" lineWidth={70} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 border border-[--pearl] md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const content = (
    <>
      <motion.div
        className="project-card-fill"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col">
        <span className="mb-8 font-cormorant text-[5.3rem] font-light leading-none text-[--pearl] transition-colors duration-500 group-hover:text-white/20">
          {project.id}
        </span>

        <span className="mb-3 font-cormorant-sc text-[0.6rem] uppercase tracking-[0.22em] text-[--silver] transition-colors duration-500 group-hover:text-white/55">
          {project.year} / {project.category}
        </span>

        <h3 className="mb-4 font-cormorant text-[2rem] font-light leading-[1.12] text-[--ink] transition-colors duration-500 group-hover:text-white">
          {project.title}
        </h3>

        <p className="mb-7 flex-grow font-inter text-[0.92rem] font-light leading-[1.85] text-[--ash] transition-colors duration-500 group-hover:text-white/68">
          {project.description}
        </p>

        <div className="mb-9 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[--pearl] px-3 py-1.5 font-cormorant-sc text-[0.56rem] uppercase tracking-[0.18em] text-[--silver] transition-all duration-500 group-hover:border-white/15 group-hover:text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4">
          <span className="font-cormorant-sc text-[0.64rem] uppercase tracking-[0.25em] text-[--smoke] transition-colors duration-500 group-hover:text-white/75">
            {project.live ? 'View Project' : 'In Development'}
          </span>
          <span className="flex h-10 w-10 items-center justify-center border border-[--pearl] text-[--smoke] transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[--ink]">
            {project.live ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
                <path d="M7 3.8V7L9.2 9.1" stroke="currentColor" strokeWidth="1" />
              </svg>
            )}
          </span>
        </div>
      </div>
    </>
  );

  const className = `group relative min-h-[560px] overflow-hidden p-7 sm:p-9 md:p-11 ${
    index % 2 === 0 ? 'md:border-r md:border-[--pearl]' : ''
  } ${index < projects.length - 1 ? 'border-b border-[--pearl] md:border-b-0' : ''}`;

  if (project.live) {
    return (
      <motion.a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        variants={staggerItem}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: index * 0.12 }}
        className={`${className} block no-underline`}
        aria-label={`View ${project.title}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.article
      variants={staggerItem}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.12 }}
      className={className}
      aria-label={`${project.title}, in development`}
    >
      {content}
    </motion.article>
  );
}
