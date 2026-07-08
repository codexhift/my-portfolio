'use client';

import { personal } from '@/lib/data';

export default function Footer() {
  return (
    <footer
      className="bg-[--charcoal] border-t border-[--iron] py-10"
      role="contentinfo"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 flex-wrap">

          {/* Logo */}
          <a
            href="#"
            id="footerLogoHome"
            aria-label="Back to top"
            className="font-cormorant-sc text-[0.82rem] tracking-[0.22em] uppercase text-[--ash]
              hover:text-[--platinum] transition-colors duration-300"
          >
            {personal.brandingName}
          </a>

          {/* Copyright */}
          <p className="font-cormorant-sc text-[0.6rem] tracking-[0.2em] uppercase text-[--smoke] text-center">
            &copy; {personal.year} {personal.name}. All Rights Reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-3" aria-label="Social media links">
            {/* GitHub */}
            <a
              href={personal.github}
              id="footerGithub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 border border-[--iron] flex items-center justify-center
                text-[--ash] hover:bg-white hover:text-[--ink] hover:border-white
                hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              id="footerEmail"
              aria-label="Send Email"
              className="w-9 h-9 border border-[--iron] flex items-center justify-center
                text-[--ash] hover:bg-white hover:text-[--ink] hover:border-white
                hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <rect x="0.5" y="0.5" width="13" height="11" stroke="currentColor"/>
                <path d="M0.5 0.5L7 6.5L13.5 0.5" stroke="currentColor"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
