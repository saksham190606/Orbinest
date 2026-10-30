"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Zap,
  ArrowRight,
  ShieldCheck,
  MousePointerClick,
  Code2,
} from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { cn, getWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_CTA_URL = getWhatsAppUrl(
  "Hi Orbinest team, I saw the interactive 3D demo and want to build a similar experience for our website"
);

export interface SplineShowcaseProps {
  className?: string;
}

export function SplineShowcase({ className }: SplineShowcaseProps) {
  const capabilities = [
    {
      icon: Zap,
      title: "Sub-Second Load Time",
      desc: "Lazy-loaded 3D runtime with zero impact on initial Core Web Vitals.",
    },
    {
      icon: Layers,
      title: "Bespoke 3D UI & Shaders",
      desc: "Custom Spline scenes tailored to your brand identity and product narrative.",
    },
    {
      icon: Code2,
      title: "Next.js 16 & React 19",
      desc: "Clean client-side component boundaries with full server-side SEO preservation.",
    },
    {
      icon: ShieldCheck,
      title: "Cross-Device Fluidity",
      desc: "Optimized touch & pointer gestures across mobile, tablet, and ultra-wide screens.",
    },
  ];

  return (
    <section
      id="interactive-3d"
      className={cn(
        "relative py-16 md:py-24 border-b border-[#d8d8d8] bg-white overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <div className="section-eyebrow-lockup">
            <span className="section-eyebrow-bar" />
            <span className="section-eyebrow-text">NEXT-GEN 3D IMMERSION</span>
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#000000] sm:text-4xl md:text-5xl">
            Interactive 3D Web Experiences That Captivate & Convert
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#595959] leading-relaxed max-w-2xl">
            At Orbinest, we don&apos;t build static brochure sites. We craft interactive digital
            destinations combining cutting-edge 3D modeling, fluid physics, and sub-second
            responsiveness.
          </p>
        </div>

        {/* Interactive 3D Spline Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full min-h-[580px] lg:h-[600px] bg-white border border-[#d8d8d8] relative overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full min-h-[580px] lg:min-h-full">
              {/* Left Column: Brand & Agency Details */}
              <div className="flex-1 p-6 sm:p-10 lg:p-12 relative z-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 border border-[#d8d8d8] bg-[#f0f0f0] px-3 py-1 text-xs font-mono text-[#000000] rounded-full">
                    <span className="live-dot !h-1.5 !w-1.5" />
                    <span>Real-Time 3D Mesh Engine</span>
                  </div>

                  <h3 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000] leading-tight">
                    Bring Your Brand to Life in Three Dimensions
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-[#595959] leading-relaxed max-w-xl">
                    Give your clients an unforgettable interactive experience. Whether you operate an
                    educational institute, medical clinic, modern e-commerce storefront, or high-end
                    portfolio, our 3D integrations elevate your brand prestige instantly.
                  </p>

                  {/* Feature checklist grid */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {capabilities.map((cap, idx) => {
                      const Icon = cap.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-3 border border-[#d8d8d8] bg-white p-3 hover:border-[#595959] transition-colors"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#000000]">{cap.title}</h4>
                            <p className="mt-0.5 text-[11px] leading-tight text-[#595959]">
                              {cap.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 pt-6 border-t border-[#d8d8d8] flex flex-wrap items-center gap-3">
                  <a
                    href="#estimator"
                    className="button-pill-dark"
                  >
                    <span>Estimate Your 3D Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href={WHATSAPP_CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-pill-ghost"
                  >
                    <span>Discuss Architecture</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Spline 3D Scene */}
              <div className="flex-1 relative min-h-[360px] sm:min-h-[420px] lg:min-h-[600px] flex items-center justify-center bg-[#f8f8f8] border-t lg:border-t-0 lg:border-l border-[#d8d8d8]">
                {/* Visual hint badge for user interaction */}
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 border border-[#d8d8d8] bg-white px-3 py-1 text-[11px] font-medium text-[#000000] shadow-xs">
                    <MousePointerClick className="h-3.5 w-3.5 text-[#000000] animate-bounce" />
                    <span>Click & Drag 3D Model</span>
                  </div>
                </div>

                {/* Spline 3D Scene Canvas */}
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[600px]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
