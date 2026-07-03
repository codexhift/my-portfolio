import type { Metadata } from 'next';
import { Cormorant_Garamond, Cormorant_SC, Inter } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const cormorantSC = Cormorant_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant-sc',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Angga Ariya Saputra | Full Stack Developer',
  description:
    'Neo-classical portfolio of Angga Ariya Saputra, a full stack web developer focused on refined interfaces, clean architecture, and modern web technology.',
  keywords: [
    'Angga Ariya Saputra',
    'portfolio',
    'full stack developer',
    'web developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'PHP',
    'Web3',
  ],
  authors: [{ name: 'Angga Ariya Saputra' }],
  openGraph: {
    title: 'Angga Ariya Saputra | Full Stack Developer',
    description: 'Elegant digital experiences crafted with clean code and modern technology.',
    type: 'website',
    images: ['/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${cormorantSC.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
