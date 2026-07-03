// Portfolio data — single source of truth

export const personal = {
  name: 'Angga Ariya Saputra',
  nameShort: 'A · A · S',
  title: 'Full Stack Engineer & Web3 Developer',
  subtitle: 'Architecting secure digital infrastructures and high-throughput systems.',
  bio1: `I am a Software Engineering (RPL) student at SMKN 1 Lumajang and a Full Stack Developer, specialising in building secure, high-performance web applications and decentralized protocols. Guided by a philosophy of strict craftsmanship, I design low-latency API architectures, robust backend systems, and sophisticated, clean interfaces.`,
  bio2: `From engineering headless API-first engines with asynchronous queue pipelines to implementing client-side zero-knowledge encryption models and smart contracts, I focus on systems that are secure by design. I choose the optimal technical stack to address complex engineering challenges and optimize system performance.`,
  email: 'angga.ariya.dev@gmail.com',
  location: 'Lumajang, East Java, Indonesia',
  school: 'SMKN 1 Lumajang — RPL',
  github: 'https://github.com/aryadevweb',
  year: '2026',
};

export const skills = [
  'Laravel 12 (PHP)',
  'Node.js (Express)',
  'Solidity & Hardhat',
  'PostgreSQL & MySQL',
  'Cryptography (AES-GCM)',
  'RESTful API Architecture',
  'Tailwind CSS 4 & ES6',
  'Redis & Queue Jobs',
  'SIWE & JWT Auth',
  'Linux & Git Operations',
];

export const stats = [
  { value: 'E2E', label: 'Zero-Knowledge Crypto' },
  { value: '100%', label: 'API-First Architecture' },
  { value: '∞', label: 'Commitment to Craft' },
];

export const projects = [
  {
    id: '01',
    year: '2025',
    category: 'Decentralized Architecture',
    title: 'Web3 Cloud Storage Protocol',
    description:
      'A hybrid decentralized application (dApp) built on a standalone JavaScript stack. Features end-to-end client-side encryption (AES-256-GCM) using wallet-derived keys, immutable metadata persistence on EVM-compatible blockchains, and secure session management via Sign-In with Ethereum (SIWE) and JSON Web Tokens (JWT).',
    tags: ['Solidity', 'Hardhat', 'Node.js', 'AES-256-GCM', 'SIWE', 'JWT'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/codexhift/web3-cloud-storage' },
      { label: 'Live Demo', url: 'https://aryadevweb.github.io/web3_cloud_storage/' }
    ]
  },
  {
    id: '02',
    year: '2026',
    category: 'System Architecture',
    title: 'Headless School Storage Engine',
    description:
      'An API-first, headless file-management system engineered with Laravel 12 and PostgreSQL for multi-platform client integration. Features role-based access control (RBAC), scoped organizational drives, asynchronous queue processing for media previews, and real-time streaming of dynamic ZIP archives.',
    tags: ['Laravel 12', 'PostgreSQL', 'Sanctum', 'Redis/Queues', 'Tailwind 4'],
    links: [
      { label: 'Web Client', url: 'https://github.com/codexhift/website-cloud-storage' },
      { label: 'Mobile Client', url: 'https://github.com/codexhift/cloud-storage-mobile' }
    ]
  },
];
