import { getWhatsAppUrl } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  roleTitle: string;
  roleBadge: string;
  status: string;
  initials: string;
  photoUrl: string;
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

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "saksham",
    name: "Saksham Shrivastava",
    roleTitle: "Lead Full-Stack Architect & Systems Engineer",
    roleBadge: "Systems & APIs",
    status: "Active on Core Codebase",
    initials: "SS",
    photoUrl: "/team/saksham.jpg",
    bio: "Full-stack architect & systems engineer obsessed with sub-second performance, bulletproof Next.js App Router engineering, type-safe API schemas, and high-conversion system architecture.",
    technicalFocus: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "System Architecture",
      "Edge APIs",
      "Performance Tuning",
    ],
    githubUrl: "https://github.com/saksham190606",
    linkedinUrl: "https://linkedin.com",
    directWhatsApp: getWhatsAppUrl(
      "Hi Saksham, I'd like to discuss a web engineering project with Orbinest"
    ),
    avatarGradient: "from-indigo-600/30 via-blue-600/20 to-slate-900/80",
    terminalCommand: "git commit -m 'feat: sub-second edge pipeline'",
  },
  {
    id: "ayaan",
    name: "Ayaan Siddiqui",
    roleTitle: "Cloud & DevOps Infrastructure Engineer",
    roleBadge: "Cloud & Infrastructure",
    status: "Maintaining 99.9% SLAs",
    initials: "AS",
    photoUrl: "/team/ayaan.jpg",
    bio: "Specializes in high-availability cloud delivery, Cloudflare Edge routing, automated CI/CD deployment pipelines, Razorpay/Stripe checkout webhook security, and cross-browser QA.",
    technicalFocus: [
      "Cloudflare Edge",
      "Vercel CI/CD",
      "Security & DNS",
      "Razorpay / Stripe",
      "Production QA",
      "Database Scaling",
    ],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    directWhatsApp: getWhatsAppUrl(
      "Hi Ayaan, I'd like to discuss cloud infrastructure and deployment for my project"
    ),
    avatarGradient: "from-purple-600/30 via-indigo-600/20 to-slate-900/80",
    terminalCommand: "deploy --prod --cloudflare-edge=synced",
  },
  {
    id: "palakshi",
    name: "Palakshi Sharma",
    roleTitle: "UI/UX & Frontend Design Engineer",
    roleBadge: "Design Systems & Motion",
    status: "Tuning Lighthouse 100",
    initials: "PS",
    photoUrl: "/team/palakshi.jpg",
    bio: "Creative technologist and frontend engineer shaping pixel-perfect design systems, responsive layouts, fluid Framer Motion micro-interactions, WCAG accessibility, and high-conversion UX.",
    technicalFocus: [
      "Tailwind CSS",
      "Design Systems",
      "Framer Motion",
      "Lighthouse 100",
      "WCAG Accessibility",
      "Conversion UX",
    ],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    directWhatsApp: getWhatsAppUrl(
      "Hi Palakshi, I'd like to discuss UI/UX design and aesthetics for my website"
    ),
    avatarGradient: "from-emerald-600/30 via-teal-600/20 to-slate-900/80",
    terminalCommand: "pnpm test:ux --report=lighthouse-100",
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

export const FOUNDING_TEAM = TEAM_MEMBERS;

