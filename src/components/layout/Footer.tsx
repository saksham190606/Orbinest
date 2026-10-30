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
  { label: "Interactive Budget Estimator", href: "#estimator", badge: "LIVE" },
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
        "relative border-t border-[#d8d8d8] bg-white text-[#595959]",
        className
      )}
    >
      {/* Main Four-Column Directory (Al Jazeera Editorial Footer Style) */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <Link
              href="/"
              className="group flex items-center gap-3 outline-none"
              aria-label="Orbinest Studio Home"
            >
              {/* Al Jazeera Signature Orange Square */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#fa9000] text-white">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-lg font-black tracking-tight text-[#000000] leading-none">
                  ORBINEST
                </span>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#595959] mt-0.5">
                  STUDIO
                </span>
              </div>
            </Link>

            {/* Mission Tagline */}
            <p className="text-xs sm:text-sm leading-relaxed text-[#595959] max-w-sm">
              High-performance web architecture & tailored 3D digital experiences engineered directly by full-stack developers.
            </p>

            {/* Live Status Indicator Badge */}
            <div className="live-badge border border-[#c31833]/30 bg-red-50/50 px-3 py-1 rounded-[2px] text-[11px]">
              <span className="live-dot" />
              <span>Pan-India Delivery • Available for New Projects</span>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#595959]">
              <span className="flex items-center gap-1.5 font-medium text-[#000000]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#000000]" />
                Verified Quality
              </span>
              <span className="flex items-center gap-1.5 font-medium text-[#000000]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#000000]" />
                SLA Retainers
              </span>
            </div>
          </div>

          {/* Column 2: Solutions & Sectors */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#000000] font-bold mb-4">
              Solutions & Sectors
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              {SOLUTIONS_LINKS.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[#595959] hover:text-[#000000] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3 w-3 text-[#595959]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tools & Exploration */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#000000] font-bold mb-4">
              Tools & Exploration
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              {TOOLS_LINKS.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[#595959] hover:text-[#000000] transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="live-badge !text-[9px] border border-[#c31833]/30 px-1.5 py-0.2 rounded-[2px]">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Channels */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#000000] font-bold mb-1">
              Direct Channels
            </h3>

            {/* WhatsApp Link Card */}
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp channel with Orbinest team"
              className="flex items-center justify-between border border-[#d8d8d8] bg-white p-3.5 transition-colors hover:border-[#000000]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#000000]">
                    Chat on WhatsApp
                  </p>
                  <p className="font-mono text-[10px] text-[#595959]">
                    Direct line with engineers
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#000000]" />
            </a>

            {/* Direct Inquiries Email */}
            <a
              href={`mailto:${INQUIRY_EMAIL}?subject=Hi%20Orbinest%20Team%20-%20Project%20Inquiry`}
              aria-label={`Send project email to ${INQUIRY_EMAIL}`}
              className="flex items-center justify-between border border-[#d8d8d8] bg-white p-3.5 transition-colors hover:border-[#000000]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#000000]">
                    {INQUIRY_EMAIL}
                  </p>
                  <p className="font-mono text-[10px] text-[#595959]">
                    General & RFPs
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#000000]" />
            </a>

            {/* Response Time Note */}
            <div className="flex items-center gap-2 border border-[#d8d8d8] bg-[#f0f0f0] px-3 py-2 text-[11px] text-[#595959]">
              <Clock className="h-3.5 w-3.5 text-[#000000] shrink-0" />
              <span>Replies typically within 2-4 hours</span>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="mt-14 pt-8 border-t border-[#d8d8d8] flex flex-col items-center justify-between gap-4 text-xs text-[#595959] sm:flex-row">
          <p className="text-center sm:text-left">
            © {currentYear} Orbinest Studio. All rights reserved.
          </p>

          <p className="font-mono text-[11px] text-[#595959] text-center">
            Engineered with Next.js 16, React 19 & Tailwind CSS
          </p>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="#privacy"
              className="text-[#595959] hover:text-[#000000] transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-[#d8d8d8]">•</span>
            <a
              href="#terms"
              className="text-[#595959] hover:text-[#000000] transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-[#d8d8d8]">•</span>
            <a
              href="#contact"
              className="text-[#000000] font-bold hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
