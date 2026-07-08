'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Ornament from '@/components/ui/Ornament';
import { fadeSlideUp, staggerChildren, staggerItem } from '@/lib/animations';

const selectedWork = [
  {
    id: '01',
    year: '2025',
    category: 'Web3 Infrastructure',
    title: 'Web3 Cloud Storage Protocol',
    meta: 'Web3 • Open Source • Personal Project',
    description:
      'A decentralized storage experience designed around ownership, encrypted access, and wallet-based authentication. The project explores how cloud workflows can feel familiar while moving sensitive data handling closer to the user.',
    technologies: ['Solidity', 'Node.js', 'AES-GCM', 'SIWE'],
    href: 'https://aryadevweb.github.io/web3_cloud_storage/',
  },
  {
    id: '02',
    year: '2026',
    category: 'System Architecture',
    title: 'Headless School Storage Engine',
    meta: 'API Platform • Internal Tooling • Product System',
    description:
      'An API-first file management engine built to support multi-platform clients, scoped organizational drives, and secure operational workflows. Its value sits in the architecture: clear access boundaries, async processing, and maintainable integrations.',
    technologies: ['Laravel', 'PostgreSQL', 'Redis', 'Sanctum'],
    href: 'https://github.com/codexhift/website-cloud-storage',
  },
];

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
          className="mb-16 max-w-3xl md:mb-20"
        >
          <span className="mb-4 block font-cormorant-sc text-[0.65rem] uppercase tracking-[0.35em] text-[--ash]">
            Selected Work
          </span>
          <h2 className="font-cormorant text-[clamp(2.6rem,5vw,4.6rem)] font-light leading-[1.04] text-[--ink]">
            Projects &amp; <em className="italic">Endeavours</em>
          </h2>
          <div className="mt-6">
            <Ornament color="var(--ash)" lineWidth={70} center={false} />
          </div>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="border-t border-[--pearl]"
        >
          {selectedWork.map((project, index) => (
            <CaseStudy key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudy({ project, index }: { project: (typeof selectedWork)[number]; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      variants={staggerItem}
      className="group grid grid-cols-1 gap-8 border-b border-[--pearl] py-12 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16"
      aria-label={project.title}
    >
      <div className={`${reversed ? 'lg:col-start-9' : 'lg:col-start-1'} lg:col-span-2`}>
        <span className="block font-cormorant text-[clamp(3rem,6vw,5.2rem)] font-light leading-none text-[--pearl] transition-colors duration-500 group-hover:text-[--silver]">
          {project.id}
        </span>
      </div>

      <div className={`${reversed ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-4'} lg:col-span-6`}>
        <span className="mb-4 block font-cormorant-sc text-[0.6rem] uppercase tracking-[0.28em] text-[--ash]">
          {project.year} / {project.category}
        </span>
        <h3 className="mb-5 max-w-2xl font-cormorant text-[clamp(2rem,4vw,3.35rem)] font-light leading-[1.05] text-[--ink]">
          {project.title}
        </h3>
        <p className="max-w-2xl font-inter text-[0.98rem] font-light leading-[1.85] text-[--smoke]">
          {project.description}
        </p>
      </div>

      <div className={`${reversed ? 'lg:col-start-9' : 'lg:col-start-10'} lg:col-span-3`}>
        <span className="mb-5 block font-cormorant-sc text-[0.58rem] uppercase tracking-[0.24em] text-[--silver]">
          {project.meta}
        </span>
        <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="font-cormorant-sc text-[0.58rem] uppercase tracking-[0.2em] text-[--ash]"
            >
              {technology}
            </span>
          ))}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-cormorant-sc text-[0.62rem] uppercase tracking-[0.24em] text-[--ink] transition-opacity duration-300 hover:opacity-55"
        >
          <span>View Case Study</span>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}
