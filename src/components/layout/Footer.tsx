"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Sparkles,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { cn, getWhatsAppUrl } from "@/lib/utils";

export const WHATSAPP_CTA_URL = getWhatsAppUrl(
  "Hi Orbinest team, I'd like to discuss a website project"
);

export const INQUIRY_EMAIL = "hello@orbinest.com";

interface FooterLinkItem {
  label: string;
  href: string;
  badge?: string;
}

const SOLUTIONS_LINKS: FooterLinkItem[] = [
  { label: "Education & Coaching", href: "#packages" },
  { label: "Business & E-Commerce", href: "#packages" },
  { label: "Clinics & Healthcare", href: "#packages" },
  { label: "Personal & Digital Gifts", href: "#packages" },
];

const TOOLS_LINKS: FooterLinkItem[] = [
  { label: "Interactive Budget Estimator", href: "#estimator", badge: "Live" },
  { label: "Featured Projects", href: "#portfolio" },
  { label: "Transparent Pricing", href: "#packages" },
  { label: "Founding Engineers", href: "#team" },
];

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setCurrentYear(new Date().getFullYear());
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <footer
      className={cn(
        "relative border-t border-surface-border bg-[#070A12] text-foreground overflow-hidden",
        className
      )}
    >
      {/* Background radial ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/5 blur-[100px]" />

      {/* Main Four-Column Directory */}
      <div className="container mx-auto relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Mission (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-5">
            {/* Brand Logo matching Navbar */}
            <Link
              href="/"
              className="group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
              aria-label="Orbinest Studio Home"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-emerald-400 p-[1px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-canvas transition-colors group-hover:bg-surface-elevated">
                  <Sparkles className="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                  ORBINEST
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-foreground-subtle">
                  STUDIO
                </span>
              </div>
            </Link>

            {/* Mission Tagline */}
            <p className="text-sm leading-relaxed text-foreground-muted max-w-sm">
              High-performance web architecture & tailored digital experiences built by engineers.
            </p>

            {/* Live Status Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Pan-India Service • Available for Q4 Projects</span>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-2 flex items-center gap-4 text-xs text-foreground-subtle">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Verified Production Quality
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
                SLA Retainers
              </span>
            </div>
          </div>

          {/* Column 2: Solutions & Sectors (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-4">
              Solutions & Sectors
            </h3>
            <ul className="space-y-3 text-sm">
              {SOLUTIONS_LINKS.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-foreground-muted transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-indigo-500/40 transition-colors group-hover:bg-indigo-400" />
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-indigo-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tools & Exploration (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-4">
              Tools & Exploration
            </h3>
            <ul className="space-y-3 text-sm">
              {TOOLS_LINKS.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-foreground-muted transition-colors duration-200 hover:text-white"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Channels & Inquiries (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-foreground-subtle font-semibold mb-1">
              Direct Channels
            </h3>

            {/* WhatsApp Link Card */}
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp channel with Orbinest team"
              className={cn(
                "group flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3.5 transition-all duration-200",
                "hover:bg-emerald-500/15 hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    Chat on WhatsApp
                  </p>
                  <p className="font-mono text-[11px] text-foreground-subtle">
                    Direct line with engineers
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Direct Inquiries Email */}
            <a
              href={`mailto:${INQUIRY_EMAIL}?subject=Hi%20Orbinest%20Team%20-%20Project%20Inquiry`}
              aria-label={`Send project email to ${INQUIRY_EMAIL}`}
              className={cn(
                "group flex items-center justify-between rounded-xl border border-surface-border bg-surface/40 p-3.5 transition-all duration-200",
                "hover:border-indigo-500/40 hover:bg-surface-elevated/70 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white group-hover:text-indigo-200 transition-colors">
                    {INQUIRY_EMAIL}
                  </p>
                  <p className="font-mono text-[11px] text-foreground-subtle">
                    General & RFPs
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-foreground-subtle transition-transform group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Response Time Note */}
            <div className="flex items-center gap-2 rounded-lg border border-surface-border/60 bg-surface/20 px-3 py-2 text-[11px] text-foreground-muted">
              <Clock className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              <span>Replies typically within 2-4 hours</span>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="mt-14 pt-8 border-t border-surface-border/80 flex flex-col items-center justify-between gap-4 text-xs text-foreground-subtle sm:flex-row">
          <p className="text-center sm:text-left">
            © {currentYear} Orbinest Studio. All rights reserved.
          </p>

          <p className="font-mono text-[11px] text-foreground-muted text-center">
            Engineered with Next.js, TypeScript & Tailwind CSS
          </p>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="#privacy"
              className="text-foreground-subtle transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <span className="text-surface-border">•</span>
            <a
              href="#terms"
              className="text-foreground-subtle transition-colors hover:text-white"
            >
              Terms of Service
            </a>
            <span className="text-surface-border">•</span>
            <a
              href="#contact"
              className="text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
