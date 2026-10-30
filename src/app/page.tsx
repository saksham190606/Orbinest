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
        "Tailor-made aesthetic foundations, crisp typography, fluid animations, and accessible component libraries.",
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
    <div className="relative text-[#000000] bg-white overflow-x-clip">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH 3D INTERACTIVE CANVAS (#hero) */}
      {/* ========================================================================= */}
      <Hero />

      {/* ========================================================================= */}
      {/* 2. SERVICES SECTION (#services) */}
      {/* ========================================================================= */}
      <section id="services" className="scroll-mt-24 py-16 md:py-24 border-b border-[#d8d8d8] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            {/* Signature Al Jazeera Section Eyebrow Lockup */}
            <div className="section-eyebrow-lockup">
              <span className="section-eyebrow-bar" />
              <span className="section-eyebrow-text">SERVICES</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000000]">
              End-to-End Web Capabilities
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
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
                  className="news-card flex flex-col justify-between p-6 transition-colors"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-[#000000]">{svc.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#595959]">{svc.description}</p>
                  </div>

                  <ul className="mt-6 space-y-2 border-t border-[#d8d8d8] pt-4 text-xs text-[#595959]">
                    {svc.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#000000] shrink-0" />
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
        className="scroll-mt-24 py-16 md:py-24 border-b border-[#d8d8d8] bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="section-eyebrow-lockup">
              <span className="section-eyebrow-bar" />
              <span className="section-eyebrow-text">PRICING & PACKAGES</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000000]">
              Transparent Tiered Packages
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
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
      <section id="estimator" className="scroll-mt-24 py-16 md:py-24 border-b border-[#d8d8d8] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="section-eyebrow-lockup">
              <span className="section-eyebrow-bar" />
              <span className="section-eyebrow-text">SCOPE & COST ESTIMATOR</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000000]">
              Instant Scope & Cost Calculator
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
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
        className="scroll-mt-24 py-16 md:py-24 border-b border-[#d8d8d8] bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="section-eyebrow-lockup">
              <span className="section-eyebrow-bar" />
              <span className="section-eyebrow-text">FEATURED WORK</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000000]">
              Engineering Projects & Case Studies
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
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
      <section id="team" className="scroll-mt-24 py-16 md:py-24 border-b border-[#d8d8d8] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamSection />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONTACT SECTION (#contact) */}
      {/* ========================================================================= */}
      <section id="contact" className="scroll-mt-24 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
