"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Services", href: "#services" },
  { label: "Pricing & Packages", href: "#packages" },
  { label: "Work", href: "#portfolio" },
  { label: "Cost Estimator", href: "#estimator" },
  { label: "Team", href: "#team" },
];

export const WHATSAPP_CTA_URL =
  "https://wa.me/91XXXXXXXXXX?text=Hi%20Orbinest%20team,%20I'd%20like%20to%20discuss%20a%20website%20project";

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initial check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-canvas/80 backdrop-blur-xl border-b border-surface-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3"
          : "bg-transparent border-b border-transparent py-5",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand Logo & Mark */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          aria-label="Orbinest Agency Home"
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

        {/* Desktop Navigation Links */}
        <nav
          className="hidden items-center gap-1 lg:flex rounded-full border border-surface-border/60 bg-surface/40 px-3 py-1.5 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-1.5 text-xs font-medium text-foreground-muted transition-colors duration-200 hover:text-white hover:bg-surface-elevated/70 rounded-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          {/* Quick WhatsApp CTA */}
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Orbinest on WhatsApp"
            className={cn(
              "group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 transition-all duration-200",
              "hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            )}
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className={cn(
              "group inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-all duration-300",
              "bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-emerald-500 bg-[length:200%_auto] hover:bg-right",
              "shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_28px_rgba(99,102,241,0.55)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            )}
          >
            <span>Get a Quote</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile WhatsApp Icon Button */}
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Quick Contact"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 sm:hidden"
          >
            <MessageCircle className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border bg-surface/70 text-foreground-muted transition-colors hover:border-slate-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Sheet Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[65px] z-40 transition-all duration-300 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="mx-4 overflow-hidden rounded-2xl border border-surface-border/80 bg-canvas/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-6">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground-muted transition-colors hover:bg-surface-elevated/80 hover:text-white"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4 text-foreground-subtle opacity-70" />
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-surface-border flex flex-col gap-3">
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Direct WhatsApp Discussion</span>
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all hover:from-indigo-500 hover:to-indigo-400"
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
