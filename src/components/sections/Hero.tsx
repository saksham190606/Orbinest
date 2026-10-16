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
      accent: "hover:border-indigo-500/50 hover:text-indigo-300",
    },
    {
      title: "Business & E-Commerce",
      icon: Building2,
      tag: "Shops & Brands",
      href: "#packages",
      accent: "hover:border-emerald-500/50 hover:text-emerald-300",
    },
    {
      title: "Clinics & Healthcare",
      icon: Stethoscope,
      tag: "Doctors & Centers",
      href: "#packages",
      accent: "hover:border-indigo-500/50 hover:text-indigo-300",
    },
    {
      title: "Personal Digital Gifts",
      icon: Gift,
      tag: "Milestones & Love",
      href: "#packages",
      accent: "hover:border-emerald-500/50 hover:text-emerald-300",
    },
  ];

  const proofMetrics = [
    {
      icon: Coins,
      metric: "₹1,200 – ₹50,000+",
      label: "Transparent, predictable tier pricing",
      color: "text-emerald-400",
    },
    {
      icon: Smartphone,
      metric: "100% Mobile Ready",
      label: "Tested across all device viewports",
      color: "text-indigo-400",
    },
    {
      icon: Users,
      metric: "3 Founding Engineers",
      label: "Direct technical collaboration with zero middlemen",
      color: "text-emerald-400",
    },
    {
      icon: ShieldCheck,
      metric: "Zero Hidden Fees",
      label: "Clear scopes & proposals before we write a line of code",
      color: "text-indigo-400",
    },
  ];

  return (
    <section
      id="hero"
      className={cn(
        "relative pt-28 pb-20 md:pt-40 md:pb-28 border-b border-surface-border/50 overflow-hidden",
        className
      )}
    >
      {/* Dynamic Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 radial-glow-hero opacity-85" />
      <div className="pointer-events-none absolute inset-0 bg-grid-slate opacity-70" />

      {/* Ambient gradient spheres */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-indigo-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* 1. Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Engineered by 3 Full-Stack Developers • Pan-India Delivery</span>
          </div>
        </motion.div>

        {/* 2. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08]"
        >
          Engineering Practical, <br className="hidden sm:inline" />
          <span className="text-gradient-accent">High-Performance Websites</span> <br className="hidden sm:inline" />
          That Convert.
        </motion.h1>

        {/* 3. Subtitle Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-3xl text-base text-foreground-muted sm:text-lg lg:text-xl leading-relaxed"
        >
          We design, code, and deploy mobile-ready web experiences tailored for education institutes, local
          businesses, medical clinics, and personal digital memories. Transparent pricing, modern engineering,
          and zero hidden costs.
        </motion.p>

        {/* 4. Multi-Action CTA Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary Action: Explore All Packages */}
          <a
            href="#packages"
            className={cn(
              "group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white",
              "bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400",
              "shadow-[0_0_30px_-5px_rgba(99,102,241,0.55)] transition-all duration-300 hover:scale-[1.02]"
            )}
          >
            <span>Explore All Packages</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Secondary Action: Instant Cost Estimator */}
          <a
            href="#estimator"
            className={cn(
              "inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface/70 px-7 py-3.5 text-sm font-semibold text-foreground-muted backdrop-blur-md",
              "transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-surface-elevated hover:scale-[1.02]"
            )}
          >
            <Calculator className="h-4 w-4 text-emerald-400" />
            <span>Instant Cost Estimator</span>
          </a>

          {/* WhatsApp Quick Action Pill */}
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp consultation"
            className={cn(
              "inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 text-sm font-medium text-emerald-400 backdrop-blur-md",
              "transition-all duration-200 hover:bg-emerald-500/20 hover:border-emerald-400/70 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            )}
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>WhatsApp Quick Chat</span>
          </a>
        </motion.div>

        {/* 5. Sector Quick-Switch Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {sectorChips.map((chip, idx) => {
              const Icon = chip.icon;
              return (
                <a
                  key={idx}
                  href={chip.href}
                  className={cn(
                    "glass-panel group flex items-center gap-3 rounded-2xl p-3.5 text-left transition-all duration-200",
                    "border border-surface-border/80 bg-surface/60 hover:bg-surface-elevated/90",
                    chip.accent
                  )}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canvas border border-surface-border text-indigo-400 transition-colors group-hover:scale-105 group-hover:text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold text-white group-hover:text-white transition-colors truncate">
                      {chip.title}
                    </p>
                    <p className="font-mono text-[10px] text-foreground-subtle uppercase tracking-wider truncate">
                      {chip.tag}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* 6. Agency Proof Strip / Micro-Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16 lg:mt-24 pt-8 border-t border-surface-border/60"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {proofMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel group relative rounded-2xl border border-surface-border/70 bg-surface/40 p-5 transition-all duration-200 hover:border-slate-600 hover:bg-surface-elevated/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-canvas border border-surface-border/80 text-foreground-muted group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className={cn("text-base font-extrabold tracking-tight", item.color)}>
                      {item.metric}
                    </p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
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
