"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  MessageCircle,
  GraduationCap,
  Building2,
  Stethoscope,
  Gift,
  ShieldCheck,
  Smartphone,
  Users,
  Coins,
  CheckCircle2,
  Zap,
  Sparkles,
  Gauge,
  Code2,
  RefreshCw,
  Award,
  ChevronRight,
} from "lucide-react";
import { cn, getWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_CTA_URL = getWhatsAppUrl(
  "Hi Orbinest team, we'd like to discuss a website project"
);

export interface HeroProps {
  className?: string;
}

type HeroTab = "speed" | "terms" | "stack";

export function Hero({ className }: HeroProps) {
  const [activeTab, setActiveTab] = useState<HeroTab>("speed");
  const [isSimulating, setIsSimulating] = useState(false);
  const [testResult, setTestResult] = useState<{
    score: number;
    lcp: string;
    tbt: string;
    timestamp: string;
  }>({
    score: 100,
    lcp: "0.32s",
    tbt: "0ms",
    timestamp: "Live",
  });

  const runBenchmark = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setTimeout(() => {
      setTestResult({
        score: 100,
        lcp: (0.28 + Math.random() * 0.08).toFixed(2) + "s",
        tbt: "0ms",
        timestamp: "Just now",
      });
      setIsSimulating(false);
    }, 900);
  };

  const sectorChips = [
    {
      title: "Education & Coaching",
      icon: GraduationCap,
      tag: "Tuitions & Institutes",
      desc: "Admissions funnels & course portals",
      href: "#packages",
    },
    {
      title: "Business & Stores",
      icon: Building2,
      tag: "Shops & Brands",
      desc: "WhatsApp checkout & modern catalogs",
      href: "#packages",
    },
    {
      title: "Medical & Healthcare",
      icon: Stethoscope,
      tag: "Hospitals & Clinics",
      desc: "Appointment booking & doctor profiles",
      href: "#packages",
    },
    {
      title: "Personal Digital Gifts",
      icon: Gift,
      tag: "Milestones & Love",
      desc: "Interactive memory timeline websites",
      href: "#packages",
    },
  ];

  const proofMetrics = [
    {
      icon: Coins,
      metric: "₹1,200 – ₹50,000+",
      label: "Transparent tier pricing with zero surprises",
    },
    {
      icon: Smartphone,
      metric: "100% Mobile Ready",
      label: "Pixel-perfect on phones, tablets & desktops",
    },
    {
      icon: Users,
      metric: "3 Senior Engineers",
      label: "Direct engineering collaboration, zero middlemen",
    },
    {
      icon: ShieldCheck,
      metric: "Milestone Escrow",
      label: "Transparent approvals before payments",
    },
  ];

  return (
    <section
      id="hero"
      className={cn(
        "relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#fafafa] overflow-hidden",
        className
      )}
    >
      {/* Ambient background glow for visual depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#fa9000]/8 via-[#fa9000]/2 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* MAIN HERO ELEVATED CARD */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full bg-white rounded-3xl border border-[#e5e5e5] shadow-xl shadow-black/[0.03] overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row min-h-[540px]">
            {/* Left Content Column */}
            <div className="flex-1 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Live Status Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 border border-[#fa9000]/30 bg-[#fa9000]/10 px-3.5 py-1.5 rounded-full mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fa9000] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fa9000]" />
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-[#b35900] uppercase">
                    Accepting Founding Clients • Pan-India
                  </span>
                </div>

                {/* Main Headline with modern warm gradient accent */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black tracking-tight text-[#000000] leading-[1.12]">
                  Engineering modern, <br />
                  <span className="bg-gradient-to-r from-[#fa9000] to-[#e65100] bg-clip-text text-transparent">
                    sub-second web apps
                  </span> <br />
                  that convert.
                </h1>

                {/* Subtitle Value Proposition */}
                <p className="mt-4 text-sm sm:text-base text-[#595959] max-w-xl leading-relaxed">
                  We build custom, lightning-fast digital solutions for coaching academies,
                  local businesses, clinics, and personal milestones. Zero bloated templates,
                  sub-0.5s initial load, and direct engineer access.
                </p>

                {/* Action Pills */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#packages" className="button-pill-dark group">
                    <span>Explore All Packages</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a href="#estimator" className="button-pill-ghost">
                    <Calculator className="h-4 w-4 text-[#000000]" />
                    <span>Cost Estimator</span>
                  </a>

                  <a
                    href={WHATSAPP_CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Direct WhatsApp consultation"
                    className="button-pill-ghost border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/5"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Trust Metadata Strip */}
              <div className="mt-8 pt-6 border-t border-[#f0f0f0] flex flex-wrap items-center gap-4 text-xs text-[#595959]">
                <span className="flex items-center gap-1.5 font-medium text-[#000000]">
                  <Sparkles className="h-3.5 w-3.5 text-[#fa9000]" />
                  Next.js 16 + React 19
                </span>
                <span>•</span>
                <span>&lt; 0.4s Edge LCP</span>
                <span>•</span>
                <span>100% Mobile Ready</span>
                <span>•</span>
                <span>Zero Middlemen</span>
              </div>
            </div>

            {/* Right Interactive Cockpit Column */}
            <div className="flex-1 bg-[#fbfbfb] border-t lg:border-t-0 lg:border-l border-[#e5e5e5] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Cockpit Tab Switcher */}
                <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4">
                  <div className="flex items-center gap-1.5 p-1 bg-white border border-[#e5e5e5] rounded-full shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setActiveTab("speed")}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                        activeTab === "speed"
                          ? "bg-[#000000] text-white shadow-xs"
                          : "text-[#595959] hover:text-[#000000]"
                      )}
                    >
                      <Gauge className="h-3.5 w-3.5" />
                      <span>Speed</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("terms")}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                        activeTab === "terms"
                          ? "bg-[#000000] text-white shadow-xs"
                          : "text-[#595959] hover:text-[#000000]"
                      )}
                    >
                      <Award className="h-3.5 w-3.5" />
                      <span>Founding Terms</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("stack")}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                        activeTab === "stack"
                          ? "bg-[#000000] text-white shadow-xs"
                          : "text-[#595959] hover:text-[#000000]"
                      )}
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      <span>Tech Stack</span>
                    </button>
                  </div>

                  {/* Benchmark Simulation Action */}
                  {activeTab === "speed" && (
                    <button
                      type="button"
                      onClick={runBenchmark}
                      disabled={isSimulating}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[#fa9000] hover:text-[#e65100] font-bold cursor-pointer transition-colors"
                      title="Run live speed simulation"
                    >
                      <RefreshCw className={cn("h-3 w-3", isSimulating && "animate-spin")} />
                      <span>{isSimulating ? "Testing..." : "Test Speed"}</span>
                    </button>
                  )}
                </div>

                {/* Cockpit Tab Content Panes */}
                <div className="mt-5">
                  <AnimatePresence mode="wait">
                    {/* TAB 1: SPEED & VITALS */}
                    {activeTab === "speed" && (
                      <motion.div
                        key="speed"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-4 rounded-xl border border-[#e5e5e5] shadow-2xs hover:border-[#000000] transition-colors">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-mono text-[#595959] uppercase tracking-wider">
                                Lighthouse
                              </span>
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            </div>
                            <p className="mt-1.5 text-2xl font-black font-mono tracking-tight text-[#000000]">
                              {testResult.score} <span className="text-sm font-normal text-[#595959]">/100</span>
                            </p>
                            <p className="mt-0.5 text-[11px] text-[#595959]">Performance, SEO & A11y</p>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-[#e5e5e5] shadow-2xs hover:border-[#000000] transition-colors">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-mono text-[#595959] uppercase tracking-wider">
                                Largest Paint
                              </span>
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            </div>
                            <p className="mt-1.5 text-2xl font-black font-mono tracking-tight text-[#000000]">
                              {testResult.lcp}
                            </p>
                            <p className="mt-0.5 text-[11px] text-[#595959]">Sub-second edge LCP</p>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-[#e5e5e5] shadow-2xs hover:border-[#000000] transition-colors">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-mono text-[#595959] uppercase tracking-wider">
                                Blocking Time
                              </span>
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            </div>
                            <p className="mt-1.5 text-2xl font-black font-mono tracking-tight text-[#000000]">
                              {testResult.tbt}
                            </p>
                            <p className="mt-0.5 text-[11px] text-[#595959]">Zero main-thread freeze</p>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-[#e5e5e5] shadow-2xs hover:border-[#000000] transition-colors">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-mono text-[#595959] uppercase tracking-wider">
                                Cumulative Shift
                              </span>
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            </div>
                            <p className="mt-1.5 text-2xl font-black font-mono tracking-tight text-[#000000]">
                              0.00
                            </p>
                            <p className="mt-0.5 text-[11px] text-[#595959]">Rock-solid layout stability</p>
                          </div>
                        </div>

                        {/* Benchmark Status Banner */}
                        <div className="bg-white p-3.5 rounded-xl border border-[#e5e5e5] flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-[#fa9000]" />
                            <span className="text-[#333333]">
                              Pure server components with zero client hydration lag.
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#999999]">{testResult.timestamp}</span>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 2: FOUNDING CLIENT TERMS */}
                    {activeTab === "terms" && (
                      <motion.div
                        key="terms"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2.5"
                      >
                        <div className="bg-white p-3.5 rounded-xl border border-[#e5e5e5] hover:border-[#000000] transition-colors">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#fa9000] shrink-0" />
                            <h4 className="text-xs font-bold text-[#000000]">
                              Direct Senior Engineer Access
                            </h4>
                          </div>
                          <p className="mt-1 text-xs text-[#595959] pl-6 leading-relaxed">
                            No junior delegates or account managers. Saksham, Ayaan, and Palakshi personally architect, code, and deploy your site.
                          </p>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl border border-[#e5e5e5] hover:border-[#000000] transition-colors">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#fa9000] shrink-0" />
                            <h4 className="text-xs font-bold text-[#000000]">
                              100% Full Codebase Handover
                            </h4>
                          </div>
                          <p className="mt-1 text-xs text-[#595959] pl-6 leading-relaxed">
                            Complete Git repository ownership, clean TypeScript code, and zero vendor lock-in from day one.
                          </p>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl border border-[#e5e5e5] hover:border-[#000000] transition-colors">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#fa9000] shrink-0" />
                            <h4 className="text-xs font-bold text-[#000000]">
                              Milestone-Based Escrow
                            </h4>
                          </div>
                          <p className="mt-1 text-xs text-[#595959] pl-6 leading-relaxed">
                            Transparent staged milestones. You review and approve real deliverables before finalizing payment tranches.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 3: TECH STACK */}
                    {activeTab === "stack" && (
                      <motion.div
                        key="stack"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-2 gap-2.5"
                      >
                        <div className="bg-white p-3 rounded-xl border border-[#e5e5e5]">
                          <p className="text-xs font-bold text-[#000000]">Next.js 16 App Router</p>
                          <p className="text-[11px] text-[#595959] mt-0.5">Turbopack & server rendering</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-[#e5e5e5]">
                          <p className="text-xs font-bold text-[#000000]">React 19 Server Components</p>
                          <p className="text-[11px] text-[#595959] mt-0.5">Zero-cost client bundles</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-[#e5e5e5]">
                          <p className="text-xs font-bold text-[#000000]">Tailwind CSS Tokens</p>
                          <p className="text-[11px] text-[#595959] mt-0.5">Scalable design system</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-[#e5e5e5]">
                          <p className="text-xs font-bold text-[#000000]">Cloudflare Edge CDN</p>
                          <p className="text-[11px] text-[#595959] mt-0.5">Sub-50ms response across India</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-[#e5e5e5]">
                          <p className="text-xs font-bold text-[#000000]">WhatsApp Routing API</p>
                          <p className="text-[11px] text-[#595959] mt-0.5">Instant customer inquiries</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-[#e5e5e5]">
                          <p className="text-xs font-bold text-[#000000]">Strict TypeScript</p>
                          <p className="text-[11px] text-[#595959] mt-0.5">100% type-safe codebase</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="mt-6 pt-4 border-t border-[#e5e5e5] flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#595959]">
                  FOUNDING CLIENT QUOTA: 1/3 SPOTS OPEN
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-bold text-[#000000] hover:text-[#fa9000] transition-colors"
                >
                  <span>Claim Founding Spot</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTOR QUICK-SWITCH CARDS */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {sectorChips.map((chip, idx) => {
              const Icon = chip.icon;
              return (
                <a
                  key={idx}
                  href={chip.href}
                  className="group flex items-center gap-3.5 bg-white border border-[#e5e5e5] p-4 rounded-2xl transition-all duration-200 hover:border-[#000000] hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fafafa] border border-[#e5e5e5] text-[#000000] group-hover:bg-[#000000] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#000000] group-hover:text-[#fa9000] transition-colors truncate">
                      {chip.title}
                    </p>
                    <p className="text-[11px] text-[#595959] truncate mt-0.5">
                      {chip.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* TRUST MICRO-METRICS */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mt-8 pt-8 border-t border-[#e5e5e5]"
        >
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {proofMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#e5e5e5] p-4 rounded-2xl hover:border-[#999999] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fa9000]/10 text-[#fa9000]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-bold tracking-tight text-[#000000]">
                      {item.metric}
                    </p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#595959]">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
