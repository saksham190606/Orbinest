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
import { cn, getWhatsAppUrl } from "@/lib/utils";

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
    return getWhatsAppUrl(
      `Hi Orbinest team, we are interested in the ${tierName} package for ${categoryTitle}`
    );
  };

  const createCarePlanWhatsAppUrl = (careName: string, categoryTitle: string) => {
    return getWhatsAppUrl(
      `Hi Orbinest team, we are interested in the ${careName} maintenance plan for ${categoryTitle}`
    );
  };

  return (
    <div className={cn("w-full space-y-10", className)}>
      {/* 1. Category Tab Switcher Bar - Al Jazeera Capsule Selector */}
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-2 border border-[#d8d8d8] bg-white p-1.5 rounded-full">
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
                  "relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors duration-200",
                  isActive
                    ? "bg-[#000000] text-white"
                    : "text-[#595959] hover:text-[#000000] hover:bg-[#f0f0f0]"
                )}
                aria-selected={isActive}
                role="tab"
              >
                <Icon className={cn("h-4 w-4", isActive ? "text-white" : "text-[#595959]")} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description & Sector Wire Badges */}
        <div className="mt-6 text-center max-w-2xl px-4">
          <p className="text-sm text-[#595959] leading-relaxed">
            {activeCategory.shortDescription}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 border border-[#d8d8d8] bg-[#f0f0f0] px-3 py-1 text-[11px] font-medium text-[#333333] rounded-full">
              <Sparkles className="h-3 w-3 text-[#fa9000]" />
              Tailored Sector Architecture
            </span>
            <span className="inline-flex items-center gap-1 border border-[#d8d8d8] bg-[#f0f0f0] px-3 py-1 text-[11px] font-medium text-[#333333] rounded-full">
              <ShieldCheck className="h-3 w-3 text-[#000000]" />
              100% Fixed Quote
            </span>
            {activeCategory.id === "personal" ? (
              <span className="inline-flex items-center gap-1 border border-[#d8d8d8] bg-[#f0f0f0] px-3 py-1 text-[11px] font-medium text-[#333333] rounded-full">
                <Gift className="h-3 w-3 text-[#fa9000]" />
                1-Year Hosting Included
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 border border-[#d8d8d8] bg-[#f0f0f0] px-3 py-1 text-[11px] font-medium text-[#333333] rounded-full">
                <Clock className="h-3 w-3 text-[#595959]" />
                2 - 4 Weeks Delivery
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Tier Cards Grid (Al Jazeera News-Card / Pricing Chrome) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategoryId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 items-stretch"
        >
          {activeCategory.tiers.map((tier: ServiceTier) => {
            const isPopular = Boolean(tier.popular);
            const whatsAppUrl = createWhatsAppUrl(tier.name, activeCategory.title);

            return (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col justify-between p-7 bg-white transition-colors",
                  isPopular
                    ? "border-2 border-[#000000] shadow-sm md:-translate-y-1"
                    : "border border-[#d8d8d8] hover:border-[#595959]"
                )}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-6 bg-[#000000] text-white px-3 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-full">
                    {tier.highlights?.[0] || "MOST POPULAR"}
                  </div>
                )}

                <div>
                  {/* Card Header: Tier Name, Scope Pill & Target Audience */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-[#000000] tracking-tight">{tier.name}</h3>
                      <p className="mt-1 text-xs text-[#595959] leading-tight">
                        {tier.targetAudience}
                      </p>
                    </div>
                    <span className="shrink-0 border border-[#d8d8d8] bg-[#f0f0f0] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#000000] rounded-full">
                      {tier.pageScope}
                    </span>
                  </div>

                  {/* Pricing Display */}
                  <div className="mt-6 border-b border-[#d8d8d8] pb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold tracking-tight text-[#000000] sm:text-4xl">
                        {tier.priceDisplay}
                      </span>
                      <span className="text-xs text-[#595959] font-mono">
                        {activeCategory.id === "personal" ? "one-time" : "flat quote"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#595959]">One-time transparent investment</p>
                  </div>

                  {/* Revision Count Badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 border border-[#d8d8d8] bg-white px-2.5 py-1 text-[11px] text-[#595959] font-mono rounded-full">
                    <RotateCcw className="h-3 w-3 text-[#000000]" />
                    <span>{tier.revisionCount}</span>
                  </div>

                  {/* Included Deliverables Checklist */}
                  <div className="mt-6 space-y-3">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#000000] font-bold">
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#333333]">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="flex h-4 w-4 shrink-0 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000] mt-0.5">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Notes */}
                  {tier.optionalNotes && (
                    <div className="mt-5 border border-[#d8d8d8] bg-[#f0f0f0] p-3 text-[11px] text-[#595959] italic">
                      {tier.optionalNotes}
                    </div>
                  )}
                </div>

                {/* Call to Action Button - Al Jazeera Button-Pill-Dark */}
                <div className="mt-8 pt-4 border-t border-[#d8d8d8]">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-pill-dark w-full py-3 text-xs justify-center"
                  >
                    <MessageCircle className="h-4 w-4 text-white" />
                    <span>Select & Inquire</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* 3. Care Plans & Maintenance Retainers */}
      {activeCategory.maintenancePlans && activeCategory.maintenancePlans.length > 0 && (
        <div className="mt-14 border border-[#d8d8d8] bg-[#f0f0f0] p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d8d8d8] pb-5 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 border border-[#d8d8d8] bg-white px-2.5 py-0.5 font-mono text-xs font-semibold text-[#000000] rounded-full">
                <ShieldCheck className="h-3.5 w-3.5 text-[#000000]" />
                Optional Peace-of-Mind
              </div>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-[#000000]">
                Monthly Care & Maintenance Retainers
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#595959] max-w-xl">
                Keep your website fast, updated, and secure without technical headache. Cancel or modify anytime.
              </p>
            </div>
            <span className="font-mono text-xs font-bold text-[#000000]">No Long-Term Lock-in</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {activeCategory.maintenancePlans.map((plan: CarePlan) => {
              const isCarePopular = Boolean(plan.popular);
              const careWhatsAppUrl = createCarePlanWhatsAppUrl(plan.name, activeCategory.title);

              return (
                <div
                  key={plan.id}
                  className={cn(
                    "flex flex-col justify-between p-6 bg-white transition-colors",
                    isCarePopular
                      ? "border-2 border-[#000000]"
                      : "border border-[#d8d8d8] hover:border-[#595959]"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#000000]">{plan.name}</h4>
                      {isCarePopular && (
                        <span className="bg-[#000000] text-white px-2 py-0.5 font-mono text-[10px] font-bold rounded-full">
                          RECOMMENDED
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-2xl font-extrabold text-[#000000]">{plan.monthlyPriceDisplay}</span>
                      <span className="text-xs text-[#595959] font-mono">billed monthly</span>
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs text-[#595959] border-t border-[#d8d8d8] pt-4">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-[#000000] shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-relaxed text-[#333333]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={careWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-pill-ghost mt-6 py-2.5 text-xs justify-center"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#000000]" />
                    <span>Inquire for {plan.name}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Transparent Disclaimers & Sector Notices */}
      <div className="border border-[#d8d8d8] bg-white p-5">
        <div className="flex flex-col gap-3 text-xs text-[#595959] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="h-4 w-4 text-[#000000] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#000000]">Scope & Third-Party Notice:</strong> Domain registration,
              third-party paid API keys, and specialized custom integrations are billed directly or quoted separately
              in a transparent formal statement of work.
            </p>
          </div>
          {activeCategory.note && (
            <div className="shrink-0 border border-[#d8d8d8] bg-[#f0f0f0] px-3 py-1.5 text-[11px] font-semibold text-[#000000]">
              {activeCategory.note}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
