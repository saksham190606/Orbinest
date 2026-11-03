"use client";

import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { cn, getWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_CTA_URL = getWhatsAppUrl(
  "Hi Orbinest team, we'd like to discuss a website project"
);

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const sectorChips = [
    {
      title: "Education & Coaching",
      icon: GraduationCap,
      tag: "Tuitions & Institutes",
      href: "#packages",
    },
    {
      title: "Business & E-Commerce",
      icon: Building2,
      tag: "Shops & Brands",
      href: "#packages",
    },
    {
      title: "Medical & Healthcare",
      icon: Stethoscope,
      tag: "Hospitals & Clinics",
      href: "#packages",
    },
    {
      title: "Personal Digital Gifts",
      icon: Gift,
      tag: "Milestones & Love",
      href: "#packages",
    },
  ];

  const proofMetrics = [
    {
      icon: Coins,
      metric: "₹1,200 – ₹50,000+",
      label: "Transparent, predictable tier pricing with zero surprises",
    },
    {
      icon: Smartphone,
      metric: "100% Mobile Ready",
      label: "Responsive testing across desktop, tablet, and mobile viewports",
    },
    {
      icon: Users,
      metric: "3 Dedicated Engineers",
      label: "Direct technical collaboration with zero agency middlemen",
    },
    {
      icon: ShieldCheck,
      metric: "Zero Hidden Fees",
      label: "Binding quotes and milestone schedules before code is written",
    },
  ];

  return (
    <section
      id="hero"
      className={cn(
        "relative pt-28 pb-16 md:pt-36 md:pb-20 border-b border-[#d8d8d8] bg-white overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* MAIN EDITORIAL HERO CARD (AL JAZEERA FLAT EDITORIAL CHROME) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <div className="w-full min-h-[520px] lg:h-[580px] bg-white relative overflow-hidden border border-[#d8d8d8]">
            <div className="flex flex-col lg:flex-row h-full min-h-[520px] lg:min-h-[580px]">
              {/* Left Content Column */}
              <div className="flex-1 p-6 sm:p-10 lg:p-12 relative z-10 flex flex-col justify-between">
                <div>
                  {/* Al Jazeera Section Eyebrow Lockup */}
                  <div className="section-eyebrow-lockup mb-4">
                    <span className="section-eyebrow-bar" />
                    <span className="section-eyebrow-text">WEB ARCHITECTURE & ENGINEERING STUDIO</span>
                  </div>

                  {/* Live Updates Status Band */}
                  <div className="inline-flex items-center gap-2 border border-[#d8d8d8] bg-[#f0f0f0] px-3 py-1 mb-5 rounded-full text-xs">
                    <span className="live-badge text-[11px]">
                      <span className="live-dot" /> LIVE UPDATES
                    </span>
                    <span className="text-[#bebebe]">|</span>
                    <span className="text-xs text-[#333333] font-normal">
                      Pan-India Delivery • Direct Engineer Collaboration
                    </span>
                  </div>

                  {/* Main Headline - Bold Black Editorial Type */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold tracking-tight text-[#000000] leading-[1.15]">
                    Engineering Modern, <br />
                    High-Performance Web <br />
                    That Converts.
                  </h1>

                  {/* Subtitle Value Proposition */}
                  <p className="mt-4 text-sm sm:text-base text-[#595959] max-w-lg leading-relaxed">
                    We design, build, and deploy sub-second web platforms tailored for education
                    institutes, local businesses, medical clinics, and personal milestones.
                    Zero bloat, pure speed, and direct engineering collaboration.
                  </p>

                  {/* Al Jazeera Action Pill Cluster */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {/* Primary Button-Pill-Dark */}
                    <a
                      href="#packages"
                      className="button-pill-dark"
                    >
                      <span>Explore All Packages</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    {/* Secondary Ghost Button */}
                    <a
                      href="#estimator"
                      className="button-pill-ghost"
                    >
                      <Calculator className="h-4 w-4 text-[#000000]" />
                      <span>Cost Estimator</span>
                    </a>

                    {/* WhatsApp Action */}
                    <a
                      href={WHATSAPP_CTA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Direct WhatsApp consultation"
                      className="button-pill-ghost"
                    >
                      <MessageCircle className="h-4 w-4 text-[#000000]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Wire-Style Metadata Line */}
                <div className="mt-8 pt-5 border-t border-[#d8d8d8] flex flex-wrap items-center gap-4 text-xs text-[#595959]">
                  <span className="flex items-center gap-1.5 font-medium text-[#000000]">
                    <Sparkles className="h-3.5 w-3.5 text-[#fa9000]" />
                    React 19 & Next.js 16
                  </span>
                  <span>•</span>
                  <span>Sub-0.5s Initial Load</span>
                  <span>•</span>
                  <span>100% Mobile Ready</span>
                  <span>•</span>
                  <span>Zero Hidden Fees</span>
                </div>
              </div>

              {/* Right Content Column: Sub-Second Performance & Founding Client Benchmark Card */}
              <div className="flex-1 relative min-h-[400px] sm:min-h-[460px] lg:min-h-full flex flex-col justify-between bg-[#fbfbfb] border-t lg:border-t-0 lg:border-l border-[#d8d8d8] p-6 sm:p-8 lg:p-10">
                <div>
                  {/* Top Bar: Terminal Dateline */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#d8d8d8]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#fa9000]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#d8d8d8]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#d8d8d8]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#000000] tracking-wider ml-1">
                        ENGINEERING BENCHMARK // SUB-SECOND
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 border border-[#d8d8d8] bg-white px-2.5 py-1 text-[11px] font-mono text-[#000000]">
                      <Zap className="h-3 w-3 text-[#fa9000]" />
                      <span className="font-bold">100 / 100</span>
                      <span className="text-[#595959]">LIGHTHOUSE</span>
                    </div>
                  </div>

                  {/* Metric Grid: 4 Core Performance Indicators */}
                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <div className="border border-[#d8d8d8] bg-white p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-[#595959] uppercase">First Paint</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="mt-1 text-2xl font-bold font-mono tracking-tight text-[#000000]">
                        &lt; 0.4s
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#595959]">Sub-second edge LCP</p>
                    </div>

                    <div className="border border-[#d8d8d8] bg-white p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-[#595959] uppercase">Blocking Time</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="mt-1 text-2xl font-bold font-mono tracking-tight text-[#000000]">
                        0 ms
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#595959]">Zero main-thread lag</p>
                    </div>

                    <div className="border border-[#d8d8d8] bg-white p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-[#595959] uppercase">Tech Stack</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#fa9000]" />
                      </div>
                      <p className="mt-1 text-base sm:text-lg font-bold tracking-tight text-[#000000]">
                        Next 16 + React 19
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#595959]">Server components</p>
                    </div>

                    <div className="border border-[#d8d8d8] bg-white p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-[#595959] uppercase">Architecture</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="mt-1 text-base sm:text-lg font-bold tracking-tight text-[#000000]">
                        Zero Bloat
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#595959]">Pure speed & SEO</p>
                    </div>
                  </div>

                  {/* Founding Client Banner */}
                  <div className="mt-5 border border-[#d8d8d8] bg-white p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="live-dot !h-2 !w-2" />
                      <span className="font-mono text-xs font-bold text-[#000000] uppercase tracking-wider">
                        Founding Client Commitment
                      </span>
                    </div>
                    <p className="text-xs text-[#595959] leading-relaxed">
                      We are currently taking on our inaugural client cohort with 100% direct founder attention: zero account managers, zero markup, and complete source code ownership.
                    </p>
                    <div className="mt-3 pt-3 border-t border-[#d8d8d8] grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#000000]">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#fa9000] shrink-0" />
                        <span>Full Git Repo Handover</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#fa9000] shrink-0" />
                        <span>Direct Founder WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Strip */}
                <div className="mt-6 pt-4 border-t border-[#d8d8d8] flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[#595959]">
                    STATUS: ACCEPTING CLIENT #1
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-bold text-[#000000] hover:text-[#fa9000] transition-colors"
                  >
                    <span>Claim Founding Spot</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* SECTOR QUICK-SWITCH RIBBON (AL JAZEERA FLAT CHROME) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-6"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {sectorChips.map((chip, idx) => {
              const Icon = chip.icon;
              return (
                <a
                  key={idx}
                  href={chip.href}
                  className="group flex items-center gap-3 border border-[#d8d8d8] bg-white p-3.5 text-left transition-colors hover:border-[#000000]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000] group-hover:bg-[#000000] group-hover:text-white transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold text-[#000000] group-hover:text-[#fa9000] transition-colors truncate">
                      {chip.title}
                    </p>
                    <p className="font-mono text-[10px] text-[#595959] uppercase tracking-wider truncate">
                      {chip.tag}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* AGENCY PROOF STRIP / MICRO-METRICS (RANKED LIST / DATA TABLE STYLE) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mt-8 pt-8 border-t border-[#d8d8d8]"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {proofMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="border border-[#d8d8d8] bg-white p-5 hover:border-[#595959] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-base font-bold tracking-tight text-[#000000]">
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
