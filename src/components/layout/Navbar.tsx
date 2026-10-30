"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn, getWhatsAppUrl } from "@/lib/utils";

export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "3D Studio", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Pricing & Packages", href: "#packages" },
  { label: "Work", href: "#portfolio" },
  { label: "Cost Estimator", href: "#estimator" },
  { label: "Team", href: "#team" },
];

const TRENDING_TOPICS = [
  { label: "Next.js 16 Full-Stack", href: "#services" },
  { label: "React 19 3D Mesh", href: "#hero" },
  { label: "Tiered Pricing", href: "#packages" },
  { label: "Instant Calculator", href: "#estimator" },
  { label: "Founding Engineers", href: "#team" },
  { label: "WhatsApp Routing", href: "#contact" },
];

export const WHATSAPP_CTA_URL = getWhatsAppUrl(
  "Hi Orbinest team, I'd like to discuss a website project"
);

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 border-b border-[#d8d8d8]",
        isScrolled ? "py-2 shadow-xs" : "py-3",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Al Jazeera Style Logo-Block (Solid Primary Orange Square with Mark) */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3 outline-none"
            aria-label="Orbinest Studio Home"
          >
            {/* The Signature Orange Logo Block */}
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center bg-[#fa9000] text-white transition-transform group-hover:scale-105 shadow-xs">
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

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm font-medium text-[#000000] hover:text-[#fa9000] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Cluster: Live Badge, WhatsApp & Pill CTA */}
          <div className="hidden items-center gap-3 sm:flex">
            {/* Al Jazeera Live Badge */}
            <div className="live-badge border border-[#c31833]/25 px-2.5 py-1 rounded-[2px] bg-red-50/50">
              <span className="live-dot" />
              <span>LIVE</span>
            </div>

            {/* Quick WhatsApp Ghost Pill */}
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Orbinest on WhatsApp"
              className="button-pill-ghost text-xs py-1.5 px-3.5"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#000000]" />
              <span>WhatsApp</span>
            </a>

            {/* Signature Button-Pill-Dark */}
            <a
              href="#contact"
              className="button-pill-dark text-xs py-1.5 px-4"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="live-badge border border-[#c31833]/30 px-2 py-0.5 rounded-[2px] text-[10px]">
              <span className="live-dot !h-1.5 !w-1.5" />
              <span>LIVE</span>
            </div>

            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Quick Contact"
              className="flex h-9 w-9 items-center justify-center border border-[#d8d8d8] bg-white text-[#000000] sm:hidden"
            >
              <MessageCircle className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center border border-[#d8d8d8] bg-white text-[#000000] focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Al Jazeera Signature Trending Strip (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 pt-2 pb-0.5 border-t border-[#d8d8d8] text-xs">
          <div className="flex items-center gap-1.5 font-black text-[#000000] tracking-wider uppercase shrink-0 text-[11px]">
            <span className="w-1.5 h-3 bg-[#fa9000]" />
            <span>TOPICS:</span>
          </div>
          <div className="flex items-center gap-4 text-[#595959] overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
            {TRENDING_TOPICS.map((topic, idx) => (
              <a
                key={idx}
                href={topic.href}
                className="hover:text-[#000000] hover:underline transition-colors text-[11px]"
              >
                {topic.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] z-40 transition-all duration-200 lg:hidden border-b border-[#d8d8d8] bg-white shadow-lg",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="px-6 py-5 max-w-lg mx-auto">
          <nav className="flex flex-col divide-y divide-[#d8d8d8]" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-3.5 text-sm font-semibold text-[#000000] hover:text-[#fa9000]"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4 text-[#595959]" />
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#d8d8d8] flex flex-col gap-2.5">
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="button-pill-ghost w-full py-3 text-xs justify-center"
            >
              <MessageCircle className="h-4 w-4 text-[#000000]" />
              <span>Direct WhatsApp Discussion</span>
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="button-pill-dark w-full py-3 text-xs justify-center"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
