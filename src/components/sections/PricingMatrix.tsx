"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Stethoscope,
  Gift,
  Check,
  ArrowRight,
  MessageCircle,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  Clock,
  Layers,
} from "lucide-react";
import {
  SERVICES_DATA,
  CategoryId,
  CATEGORY_IDS,
  ServiceCategory,
  ServiceTier,
  CarePlan,
} from "@/data/servicesData";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Building2,
  Stethoscope,
  Gift,
};

export interface PricingMatrixProps {
  className?: string;
  defaultCategory?: CategoryId;
}

export function PricingMatrix({
  className,
  defaultCategory = "education",
}: PricingMatrixProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>(defaultCategory);

  const activeCategory: ServiceCategory = SERVICES_DATA[activeCategoryId];

  const createWhatsAppUrl = (tierName: string, categoryTitle: string) => {
    const text = `Hi Orbinest team, we are interested in the ${tierName} package for ${categoryTitle}`;
    return `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(text)}`;
  };

  const createCarePlanWhatsAppUrl = (careName: string, categoryTitle: string) => {
    const text = `Hi Orbinest team, we are interested in the ${careName} maintenance plan for ${categoryTitle}`;
    return `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={cn("w-full space-y-12", className)}>
      {/* 1. Category Tab Switcher Bar */}
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-surface-border bg-surface/80 p-1.5 backdrop-blur-xl shadow-lg">
          {CATEGORY_IDS.map((catId) => {
            const cat = SERVICES_DATA[catId];
            const Icon = CATEGORY_ICONS[cat.iconName] || Layers;
            const isActive = activeCategoryId === catId;

            return (
              <button
                key={catId}
                type="button"
                onClick={() => setActiveCategoryId(catId)}
                className={cn(
                  "relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  isActive ? "text-white" : "text-foreground-muted hover:text-white"
                )}
                aria-selected={isActive}
                role="tab"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={cn("h-4 w-4", isActive ? "text-white" : "text-indigo-400")} />
                  <span>{cat.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Description & Sector Badges */}
        <div className="mt-6 text-center max-w-2xl px-4">
          <p className="text-sm text-foreground-muted leading-relaxed">
            {activeCategory.shortDescription}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-300">
              <Sparkles className="h-3 w-3" />
              Tailored Sector Architecture
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
              <ShieldCheck className="h-3 w-3" />
              100% Fixed Quote
            </span>
            {activeCategory.id === "personal" ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[11px] font-medium text-purple-300">
                <Gift className="h-3 w-3" />
                1-Year Hosting Included
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-surface/60 px-3 py-1 text-[11px] font-medium text-foreground-subtle">
                <Clock className="h-3 w-3 text-indigo-400" />
                2 - 4 Weeks Delivery
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Tier Cards Grid (Animated Transition between tabs) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategoryId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 items-stretch"
        >
          {activeCategory.tiers.map((tier: ServiceTier) => {
            const isPopular = Boolean(tier.popular);
            const whatsAppUrl = createWhatsAppUrl(tier.name, activeCategory.title);

            return (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300",
                  isPopular
                    ? "border-2 border-indigo-500/70 bg-surface-elevated/95 shadow-[0_0_40px_rgba(99,102,241,0.22)] md:-translate-y-2"
                    : "border border-surface-border bg-surface/60 hover:border-slate-600 hover:bg-surface/80"
                )}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-indigo-400/80 bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                    {tier.highlights?.[0] || "Most Popular"}
                  </div>
                )}

                <div>
                  {/* Card Header: Tier Name, Scope Pill & Target Audience */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{tier.name}</h3>
                      <p className="mt-1 text-xs text-foreground-subtle leading-tight">
                        {tier.targetAudience}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-surface-border bg-surface px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-400">
                      {tier.pageScope}
                    </span>
                  </div>

                  {/* Pricing Display */}
                  <div className="mt-6 border-b border-surface-border/60 pb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        {tier.priceDisplay}
                      </span>
                      <span className="text-xs text-foreground-subtle font-mono">
                        {activeCategory.id === "personal" ? "one-time" : "flat quote"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-foreground-muted">One-time transparent investment</p>
                  </div>

                  {/* Revision Count Badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-surface-border/80 bg-canvas/60 px-2.5 py-1 text-[11px] text-foreground-muted font-mono">
                    <RotateCcw className="h-3 w-3 text-indigo-400" />
                    <span>{tier.revisionCount}</span>
                  </div>

                  {/* Included Deliverables Checklist */}
                  <div className="mt-6 space-y-3">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-foreground-subtle">
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2.5 text-xs text-foreground-muted">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Notes */}
                  {tier.optionalNotes && (
                    <div className="mt-5 rounded-xl border border-surface-border/60 bg-surface/40 p-3 text-[11px] text-foreground-subtle italic">
                      {tier.optionalNotes}
                    </div>
                  )}
                </div>

                {/* Call to Action Button */}
                <div className="mt-8 pt-4 border-t border-surface-border/50">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all duration-200",
                      isPopular
                        ? "bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)]"
                        : "border border-surface-border bg-surface-elevated text-foreground hover:border-indigo-500/50 hover:bg-surface-hover hover:text-white"
                    )}
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-400 transition-transform group-hover:scale-110" />
                    <span>Select & Inquire</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* 3. Care Plans & Maintenance Retainers (For Education, Business, Healthcare) */}
      {activeCategory.maintenancePlans && activeCategory.maintenancePlans.length > 0 && (
        <div className="mt-16 rounded-3xl border border-surface-border bg-surface/30 p-8 lg:p-10 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-surface-border/60 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs text-indigo-300">
                <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
                Optional Peace-of-Mind
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                Monthly Care & Maintenance Retainers
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-foreground-muted max-w-xl">
                Keep your website fast, updated, and secure without technical headache. Cancel or modify anytime.
              </p>
            </div>
            <span className="font-mono text-xs text-emerald-400">No Long-Term Lock-in</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {activeCategory.maintenancePlans.map((plan: CarePlan) => {
              const isCarePopular = Boolean(plan.popular);
              const careWhatsAppUrl = createCarePlanWhatsAppUrl(plan.name, activeCategory.title);

              return (
                <div
                  key={plan.id}
                  className={cn(
                    "flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200",
                    isCarePopular
                      ? "border-emerald-500/50 bg-surface-elevated shadow-[0_0_25px_rgba(16,185,129,0.12)]"
                      : "border-surface-border bg-surface/50 hover:border-slate-600"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white">{plan.name}</h4>
                      {isCarePopular && (
                        <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                          Recommended
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-2xl font-extrabold text-white">{plan.monthlyPriceDisplay}</span>
                      <span className="text-xs text-foreground-subtle font-mono">billed monthly</span>
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs text-foreground-muted border-t border-surface-border/50 pt-4">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={careWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface py-2.5 text-xs font-medium text-foreground-muted transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Inquire for {plan.name}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Transparent Disclaimers & Sector Notices */}
      <div className="rounded-2xl border border-surface-border/70 bg-canvas/80 p-5 backdrop-blur-md">
        <div className="flex flex-col gap-3 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-foreground-muted">Scope & Third-Party Notice:</strong> Domain registration,
              third-party paid API keys, and specialized custom integrations are billed directly or quoted separately
              in a transparent formal statement of work.
            </p>
          </div>
          {activeCategory.note && (
            <div className="shrink-0 rounded-lg border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5 text-[11px] text-indigo-300">
              {activeCategory.note}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
