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
        "Tailor-made aesthetic foundations, crisp typography, fluid micro-interactions, and accessible component libraries.",
      points: ["Tailwind CSS token systems", "Fluid micro-interactions", "Accessible WCAG compliance"],
    },
    {
      icon: Rocket,
      title: "Lighthouse 100 & Technical SEO",
      description:
        "Sub-second Largest Contentful Paint (LCP), optimized asset delivery, structured data, and aggressive local SEO indexing.",
      points: ["< 0.4s initial load time", "Schema.org structured data", "Core Web Vitals tuned"],
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
    <div className="relative text-[#000000] bg-[#fafafa] overflow-x-clip">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (#hero) */}
      {/* ========================================================================= */}
      <Hero />

      {/* ========================================================================= */}
      {/* 2. SERVICES SECTION (#services) */}
      {/* ========================================================================= */}
      <section id="services" className="scroll-mt-24 py-20 md:py-28 border-b border-[#e5e5e5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-eyebrow-lockup">
              <span className="section-eyebrow-bar" />
              <span className="section-eyebrow-text">CAPABILITIES</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#000000]">
              End-to-End Web Capabilities
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
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
                  className="group flex flex-col justify-between p-6 sm:p-7 bg-[#fafafa] rounded-2xl border border-[#e5e5e5] transition-all duration-300 hover:bg-white hover:border-[#000000] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#e5e5e5] text-[#000000] group-hover:bg-[#fa9000] group-hover:text-white group-hover:border-[#fa9000] transition-colors shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-base sm:text-lg font-bold text-[#000000] tracking-tight">{svc.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#595959]">{svc.description}</p>
                  </div>

                  <ul className="mt-6 space-y-2.5 border-t border-[#e5e5e5] pt-5 text-xs text-[#595959]">
                    {svc.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#fa9000] shrink-0" />
                        <span className="text-[#333333] font-medium">{pt}</span>
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
        className="scroll-mt-24 py-20 md:py-28 border-b border-[#e5e5e5] bg-[#fafafa]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-eyebrow-lockup">
              <span className="section-eyebrow-bar" />
              <span className="section-eyebrow-text">PRICING & PACKAGES</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#000000]">
              Transparent Tiered Packages
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
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
      <section id="estimator" className="scroll-mt-24 py-20 md:py-28 border-b border-[#e5e5e5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="section-eyebrow-lockup">
              <span className="section-eyebrow-bar" />
              <span className="section-eyebrow-text">SCOPE & COST ESTIMATOR</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#000000]">
              Instant Scope & Cost Calculator
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
              Transparent project scope and investment calculation based on your required pages, custom integrations,
              and target delivery timeline.
            </p>
          </div>

          {/* Interactive Budget Estimator Component */}
          <BudgetEstimator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TEAM SECTION (#team) */}
      {/* ========================================================================= */}
      <section id="team" className="scroll-mt-24 py-20 md:py-28 border-b border-[#e5e5e5] bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamSection />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT SECTION (#contact) */}
      {/* ========================================================================= */}
      <section id="contact" className="scroll-mt-24 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
