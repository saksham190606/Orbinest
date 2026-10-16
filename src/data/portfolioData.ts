export type ProjectCategory = 'education' | 'business' | 'healthcare' | 'personal';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface MockPreview {
  gradient: string;
  accentColor: string;
  deviceType: 'browser' | 'mobile';
  badgeText?: string;
  mockHeadline: string;
  mockSubtext: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientName: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  turnaround: string;
  deliveryYear: string;
  metrics: ProjectMetric[];
  tags: string[];
  mockPreview: MockPreview;
  liveUrl?: string;
  demoUrl?: string;
  architectureHighlights?: string[];
}

export interface PortfolioCategoryFilter {
  id: 'all' | ProjectCategory;
  label: string;
  count?: number;
}

export const PORTFOLIO_FILTERS: PortfolioCategoryFilter[] = [
  { id: 'all', label: 'All Work' },
  { id: 'education', label: 'Education' },
  { id: 'business', label: 'Business' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'personal', label: 'Personal Gifts' },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'apex-academy',
    title: 'Apex IIT-JEE & Medical Academy',
    clientName: 'Apex Education Trust',
    category: 'education',
    categoryLabel: 'Education & Coaching',
    tagline: 'High-converting admissions engine and automated counseling funnel',
    description:
      'Engineered a sub-second institutional admissions portal with course exploration, faculty credentials, downloadable syllabi, and direct WhatsApp routing for counselor appointments.',
    turnaround: 'Delivered in 10 Days',
    deliveryYear: '2025',
    metrics: [
      { label: 'Inquiries', value: '3.4x Growth' },
      { label: 'Lighthouse', value: '100 / 100' },
      { label: 'First Load', value: '0.38s LCP' },
    ],
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'WhatsApp API', 'Cloudflare Edge'],
    mockPreview: {
      gradient: 'from-blue-600/30 via-indigo-600/20 to-slate-900/60',
      accentColor: 'indigo',
      deviceType: 'browser',
      badgeText: 'Admissions Open 2025-26',
      mockHeadline: 'Apex IIT-JEE & NEET Academy',
      mockSubtext: 'Top 1% Results • Dedicated Faculty • Kota Methodology',
    },
    liveUrl: '#contact',
    demoUrl: '#estimator',
    architectureHighlights: [
      'Static page generation with Turbopack for instant page loads across Tier 2/3 mobile networks',
      'Dynamic WhatsApp webhook triggers passing batch preferences directly to academic counselors',
      'Zero-layout-shift course comparison tables optimized for low-end mobile devices',
    ],
  },
  {
    id: 'velvet-thread',
    title: 'Velvet & Thread Fashion House',
    clientName: 'Velvet & Thread Atelier',
    category: 'business',
    categoryLabel: 'Business & E-Commerce',
    tagline: 'Luxury retail showroom with zero-latency WhatsApp cart checkout',
    description:
      'Created an ultra-minimalist catalog experience with client-side attribute filtering, high-resolution lookbooks, and single-tap checkout directing product SKU selections directly to sales reps on WhatsApp.',
    turnaround: 'Delivered in 7 Days',
    deliveryYear: '2025',
    metrics: [
      { label: 'Mobile Sales', value: '+185%' },
      { label: 'Cart Abandonment', value: '-42%' },
      { label: 'Load Time', value: '0.45s' },
    ],
    tags: ['React 19', 'Next.js App Router', 'Tailwind CSS', 'Framer Motion', 'Image Edge CDN'],
    mockPreview: {
      gradient: 'from-amber-600/20 via-rose-600/20 to-slate-900/60',
      accentColor: 'rose',
      deviceType: 'browser',
      badgeText: 'Autumn Collection 2025',
      mockHeadline: 'Handcrafted Heritage Silks',
      mockSubtext: 'Contemporary Silhouettes • Artisanal Weaving • Pan-India Courier',
    },
    liveUrl: '#contact',
    demoUrl: '#estimator',
    architectureHighlights: [
      'Edge image optimization delivering WebP/AVIF variants below 40kb per apparel photograph',
      'Direct WhatsApp deep link formatting with selected sizes, colors, and auto-generated order IDs',
      'Smooth layout animations for category filtering without triggering DOM reflows',
    ],
  },
  {
    id: 'dr-varma-dental',
    title: 'Dr. Varma Advanced Dental Clinic',
    clientName: 'Dr. R. Varma, MDS',
    category: 'healthcare',
    categoryLabel: 'Clinics & Healthcare',
    tagline: 'Patient trust portal with instant slot scheduling and treatment guides',
    description:
      'Built an accessible, sterile-aesthetic medical practice website featuring interactive dental treatment breakdowns, doctor credential verifications, clinic tour galleries, and one-touch appointment booking.',
    turnaround: 'Delivered in 5 Days',
    deliveryYear: '2025',
    metrics: [
      { label: 'Appointment Rate', value: '+210%' },
      { label: 'Local SEO Rank', value: '#1 in City' },
      { label: 'Accessibility', value: '100 WCAG' },
    ],
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Google Maps API'],
    mockPreview: {
      gradient: 'from-emerald-600/25 via-teal-600/20 to-slate-900/60',
      accentColor: 'emerald',
      deviceType: 'browser',
      badgeText: 'ISO 9001 Certified Clinic',
      mockHeadline: 'Painless Digital Dentistry',
      mockSubtext: 'Microscopic Endodontics • Laser Whitening • Aligners',
    },
    liveUrl: '#contact',
    demoUrl: '#estimator',
    architectureHighlights: [
      'Comprehensive Schema.org MedicalClinic metadata ensuring high-visibility Google Map pack rankings',
      'Zero-friction appointment form dispatching synchronized SMS & WhatsApp reminders to receptionists',
      'High-contrast accessible color scheme certified compliant with WCAG 2.1 AAA contrast guidelines',
    ],
  },
  {
    id: 'aarav-meera-wedding',
    title: 'Aarav & Meera: 5 Years of Us',
    clientName: 'Private Couple Commission',
    category: 'personal',
    categoryLabel: 'Personal Digital Gifts',
    tagline: 'Emotional interactive love story timeline with secret message reveals',
    description:
      'Crafted a cinematic, password-protected anniversary milestone website featuring a chronologically synchronized photo stream, personalized audio soundtrack, and interactive scratch-reveal love notes.',
    turnaround: 'Delivered in 48 Hours',
    deliveryYear: '2024',
    metrics: [
      { label: 'Client Feedback', value: '10/10 Emotional' },
      { label: 'Media Assets', value: '120+ Curated' },
      { label: 'Turnaround', value: '48h Rush' },
    ],
    tags: ['Next.js App Router', 'Framer Motion', 'Web Audio API', 'Tailwind CSS', 'Canvas Confetti'],
    mockPreview: {
      gradient: 'from-pink-600/25 via-purple-600/20 to-slate-900/60',
      accentColor: 'purple',
      deviceType: 'mobile',
      badgeText: '5th Anniversary Edition',
      mockHeadline: 'Aarav & Meera: Our Journey',
      mockSubtext: 'From Bombay Cafés to London Rain • Tap to Unfold Memories',
    },
    liveUrl: '#contact',
    demoUrl: '#estimator',
    architectureHighlights: [
      'Custom Web Audio background player with gentle fade-in on user scroll gesture',
      'Encrypted passcode lock protecting intimate family photos and anniversary voice memos',
      'Framer Motion physical spring transitions replicating realistic photo album page flips',
    ],
  },
  {
    id: 'craftroast-coffee',
    title: 'CraftRoast Artisan Coffee Roasters',
    clientName: 'CraftRoast Specialty Estates',
    category: 'business',
    categoryLabel: 'Business & E-Commerce',
    tagline: 'Specialty bean e-commerce storefront with Razorpay checkout',
    description:
      'Engineered an ultra-fast specialty single-origin coffee portal featuring brew method guides, grind-size customizer, subscription recurring orders, and automated payment gateway integration.',
    turnaround: 'Delivered in 12 Days',
    deliveryYear: '2025',
    metrics: [
      { label: 'Subscription Retention', value: '88%' },
      { label: 'Avg Order Value', value: '₹1,450' },
      { label: 'Mobile Speed', value: '99 Score' },
    ],
    tags: ['Next.js 16', 'Razorpay SDK', 'Tailwind CSS', 'TypeScript', 'Edge Handlers'],
    mockPreview: {
      gradient: 'from-amber-700/25 via-orange-600/20 to-slate-900/60',
      accentColor: 'amber',
      deviceType: 'browser',
      badgeText: 'Single-Origin Chikmagalur',
      mockHeadline: 'Freshly Roasted Specialty Beans',
      mockSubtext: 'Roasted on Demand • Aeropress to Espresso Grinds',
    },
    liveUrl: '#contact',
    demoUrl: '#estimator',
    architectureHighlights: [
      'Serverless Razorpay webhook verification with automated order receipt dispatching via WhatsApp',
      'Dynamic grind-size selector recalculating bean extraction guidelines in real time',
      'Aggressive static asset preloading minimizing shop checkout friction to under 3 clicks',
    ],
  },
  {
    id: 'st-xaviers-school',
    title: "St. Xavier's International School",
    clientName: "St. Xavier's Education Society",
    category: 'education',
    categoryLabel: 'Education & Coaching',
    tagline: 'Comprehensive school portal with academic calendars and department directories',
    description:
      'Modernized an institutional school website with interactive academic calendars, downloadable student handbooks, faculty directories, sports house rankings, and online transfer certificate verification.',
    turnaround: 'Delivered in 14 Days',
    deliveryYear: '2024',
    metrics: [
      { label: 'Parent Engagement', value: '+310%' },
      { label: 'Paper Forms Saved', value: '15,000+' },
      { label: 'Server Uptime', value: '99.98%' },
    ],
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'PDF Generation', 'Algolia Search'],
    mockPreview: {
      gradient: 'from-indigo-700/25 via-blue-600/20 to-slate-900/60',
      accentColor: 'blue',
      deviceType: 'browser',
      badgeText: 'CBSE Affiliated • Estd. 1994',
      mockHeadline: "St. Xavier's International School",
      mockSubtext: 'Excellence in Academics, Sports & Moral Leadership',
    },
    liveUrl: '#contact',
    demoUrl: '#estimator',
    architectureHighlights: [
      'Instant client-side prospectus search with zero-lag document downloads',
      'Multi-department directory with filtered contacts for admissions, transport, and administration',
      'Automated parent announcement banner synchronized across all dynamic route pages',
    ],
  },
];
