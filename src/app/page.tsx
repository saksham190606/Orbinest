import {
  Code2,
  Layers,
  Rocket,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { PricingMatrix } from "@/components/sections/PricingMatrix";
import { Hero } from "@/components/sections/Hero";
import { BudgetEstimator } from "@/components/sections/BudgetEstimator";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Web Engineering",
      description:
        "Modern web platforms built on Next.js 16, TypeScript, and React 19 Server Components for instant responsiveness.",
      points: ["Zero-bloat architecture", "API & Database integrations", "Type-safe scalability"],
    },
    {
      icon: Layers,
      title: "Bespoke UI/UX & Design Systems",
      description:
        "Tailor-made aesthetic foundations, dark-mode elegance, fluid animations, and accessible component libraries.",
      points: ["Tailwind CSS token systems", "Fluid micro-interactions", "Accessible WCAG compliance"],
    },
    {
      icon: Rocket,
      title: "Lighthouse 100 & Technical SEO",
      description:
        "Sub-second Largest Contentful Paint (LCP), optimized asset delivery, structured data, and aggressive local SEO indexing.",
      points: ["< 0.5s initial load time", "Schema.org structured data", "Core Web Vitals tuned"],
    },
    {
      icon: ShieldCheck,
      title: "Cloud Deployment & Ongoing SLA",
      description:
        "Continuous delivery pipelines, edge caching, SSL protection, automated backups, and dedicated maintenance retainers.",
      points: ["Edge CDN deployment", "99.9% uptime assurance", "Dedicated maintenance SLAs"],
    },
  ];



  return (
    <div className="relative text-foreground overflow-x-clip">
      {/* Background Glows & Pattern */}
      <div className="pointer-events-none absolute inset-0 radial-glow-hero opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-grid-slate opacity-70" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (#hero) */}
      {/* ========================================================================= */}
      <Hero />

      {/* ========================================================================= */}
      {/* 2. SERVICES SECTION (#services) */}
      {/* ========================================================================= */}
      <section id="services" className="scroll-mt-32 py-20 md:py-28 border-b border-surface-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center md:text-left">
            <span className="inline-block rounded-md border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-medium text-indigo-300">
              Services
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              End-to-End Web Capabilities
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-foreground-muted leading-relaxed">
              Our tech-first delivery model combines React 19 and Next.js 16 full-stack engineering with pixel-precise
              UI/UX, sub-second performance, and cloud scalability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:border-indigo-500/50 hover:shadow-[0_12px_32px_rgba(99,102,241,0.18)]"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 transition-colors group-hover:border-indigo-400 group-hover:bg-indigo-500/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{svc.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{svc.description}</p>
                  </div>

                  <ul className="mt-6 space-y-2 border-t border-surface-border/60 pt-4 text-[11px] text-foreground-subtle">
                    {svc.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PACKAGES SECTION (#packages) */}
      {/* ========================================================================= */}
      <section
        id="packages"
        className="scroll-mt-32 py-20 md:py-28 border-b border-surface-border/50 bg-surface/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300">
              Pricing & Packages
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Transparent Tiered Packages
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-foreground-muted">
              Explore specialized delivery tiers configured specifically for Education institutes, local businesses,
              healthcare clinics, and bespoke milestone websites.
            </p>
          </div>

          <PricingMatrix />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ESTIMATOR SECTION (#estimator) */}
      {/* ========================================================================= */}
      <section id="estimator" className="scroll-mt-32 py-20 md:py-28 border-b border-surface-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left">
            <span className="inline-block rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300">
              Calculator
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Instant Scope & Cost Estimator
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-foreground-muted leading-relaxed">
              Transparent project scope and investment calculation based on your required pages, custom integrations,
              and target delivery timeline.
            </p>
          </div>

          {/* Interactive Budget Estimator Component */}
          <BudgetEstimator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PORTFOLIO SECTION (#portfolio) */}
      {/* ========================================================================= */}
      <section
        id="portfolio"
        className="scroll-mt-32 py-20 md:py-28 border-b border-surface-border/50 bg-surface/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center md:text-left">
            <span className="inline-block rounded-md border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-medium text-indigo-300">
              Work
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Featured Engineering Projects
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-foreground-muted leading-relaxed">
              Real-world client web applications and high-impact digital portals engineered with speed, security,
              and conversion in mind.
            </p>
          </div>

          <PortfolioShowcase />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TEAM SECTION (#team) */}
      {/* ========================================================================= */}
      <section id="team" className="scroll-mt-32 py-20 md:py-28 border-b border-surface-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamSection />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONTACT SECTION (#contact) */}
      {/* ========================================================================= */}
      <section id="contact" className="scroll-mt-32 py-20 md:py-28 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
