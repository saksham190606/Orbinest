import { getWhatsAppUrl } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  roleTitle: string;
  roleBadge: string;
  status: string;
  initials: string;
  bio: string;
  technicalFocus: string[];
  githubUrl: string;
  linkedinUrl: string;
  directWhatsApp: string;
  avatarGradient: string;
  terminalCommand: string;
}

export interface AgencyPrinciple {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const FOUNDING_TEAM: TeamMember[] = [
  {
    id: "aarav",
    name: "Aarav Sharma",
    roleTitle: "Lead Architect & Full-Stack Engineer",
    roleBadge: "Systems & APIs",
    status: "Active on Core Systems",
    initials: "AS",
    bio: "Final-year software engineering student passionate about robust system architecture. Directs full-stack Next.js App Router engineering, type-safe API schemas, database indexing, and performance tuning.",
    technicalFocus: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "PostgreSQL / Supabase",
      "REST & Edge APIs",
      "Performance Profiling",
    ],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    directWhatsApp: getWhatsAppUrl(
      "Hi Aarav, I'd like to discuss backend architecture for my website project"
    ),
    avatarGradient: "from-indigo-600/30 via-blue-600/20 to-slate-900/80",
    terminalCommand: "git commit -m 'feat: type-safe edge handlers'",
  },
  {
    id: "rohan",
    name: "Rohan Mehta",
    roleTitle: "UI/UX & Frontend Design Engineer",
    roleBadge: "Design Systems & Motion",
    status: "Tuning Lighthouse 100",
    initials: "RM",
    bio: "Design-focused engineer specializing in modern dark aesthetics, responsive Tailwind layouts, and fluid Framer Motion micro-interactions engineered specifically for client conversion.",
    technicalFocus: [
      "Tailwind CSS",
      "Framer Motion",
      "Design Systems",
      "WCAG Accessibility",
      "Mobile-First UI",
      "Fluid Animations",
    ],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    directWhatsApp: getWhatsAppUrl(
      "Hi Rohan, I'd like to discuss frontend design and UI/UX for my website project"
    ),
    avatarGradient: "from-emerald-600/30 via-teal-600/20 to-slate-900/80",
    terminalCommand: "pnpm test:ux --report=lighthouse-100",
  },
  {
    id: "devon",
    name: "Devon Vance",
    roleTitle: "DevOps, Security & Cloud Engineer",
    roleBadge: "Cloudflare & Gateways",
    status: "Maintaining 99.9% SLAs",
    initials: "DV",
    bio: "Infrastructure-minded developer specializing in edge cloud delivery, automated SSL/DNS routing, Razorpay/Stripe checkout webhook security, and cross-browser QA pipelines.",
    technicalFocus: [
      "Cloudflare CDN",
      "Vercel CI/CD",
      "Razorpay / Stripe",
      "Automated DNS & SSL",
      "Security Headers",
      "Cross-Device QA",
    ],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    directWhatsApp: getWhatsAppUrl(
      "Hi Devon, I'd like to discuss hosting, DNS and cloud deployment for my project"
    ),
    avatarGradient: "from-purple-600/30 via-indigo-600/20 to-slate-900/80",
    terminalCommand: "deploy --prod --cloudflare-edge=synced",
  },
];

export const AGENCY_PRINCIPLES: AgencyPrinciple[] = [
  {
    title: "Direct Engineer Access",
    subtitle: "Zero Middlemen",
    description:
      "You collaborate directly in a dedicated WhatsApp/Slack channel with the 3 engineers coding your website. No project managers or account executives.",
    iconName: "MessageSquare",
  },
  {
    title: "Rapid Turnaround",
    subtitle: "4 to 10 Days Shipped",
    description:
      "Student agility combined with production discipline. We deliver completed bespoke websites in days, not months, with daily live staging links.",
    iconName: "Zap",
  },
  {
    title: "Zero Outsourcing",
    subtitle: "100% In-House Code",
    description:
      "Every single line of TypeScript, CSS, and component logic is authored and peer-reviewed in-house. No bloated WordPress themes or offshore outsourcing.",
    iconName: "ShieldCheck",
  },
];
