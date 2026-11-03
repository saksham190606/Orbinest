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
  Calculator,
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
      {/* 1. Category Tab Switcher Bar */}
      <div className="flex flex-col items-center">
        <div className="inline-flex p-1.5 bg-white border border-[#e5e5e5] rounded-full shadow-xs gap-1.5 max-w-full overflow-x-auto">
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
                  "relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap z-10",
                  isActive ? "text-white" : "text-[#595959] hover:text-[#000000]"
                )}
                aria-selected={isActive}
                role="tab"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-[#000000] rounded-full -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <Icon className="h-4 w-4 shrink-0" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description & Sector Highlights */}
        <div className="mt-5 text-center max-w-2xl px-4">
          <p className="text-sm text-[#595959] leading-relaxed">
            {activeCategory.shortDescription}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#fa9000]/10 border border-[#fa9000]/25 px-3 py-0.5 text-[11px] font-semibold text-[#b35900] rounded-full">
              <Sparkles className="h-3 w-3 text-[#fa9000]" />
              Tailored Architecture
            </span>
            <span className="inline-flex items-center gap-1 bg-white border border-[#e5e5e5] px-3 py-0.5 text-[11px] font-semibold text-[#333333] rounded-full">
              <ShieldCheck className="h-3 w-3 text-emerald-600" />
              100% Fixed Quote
            </span>
            {activeCategory.id === "personal" ? (
              <span className="inline-flex items-center gap-1 bg-white border border-[#e5e5e5] px-3 py-0.5 text-[11px] font-semibold text-[#333333] rounded-full">
                <Gift className="h-3 w-3 text-[#fa9000]" />
                1-Year Hosting Included
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-white border border-[#e5e5e5] px-3 py-0.5 text-[11px] font-semibold text-[#333333] rounded-full">
                <Clock className="h-3 w-3 text-[#595959]" />
                2 - 3 Weeks Delivery
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Tier Cards Grid */}
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
                  "relative flex flex-col justify-between p-7 rounded-2xl bg-white transition-all duration-300",
                  isPopular
                    ? "border-2 border-[#000000] shadow-xl shadow-black/5 md:-translate-y-2 ring-4 ring-[#000000]/5"
                    : "border border-[#e5e5e5] hover:border-[#000000] hover:shadow-lg hover:-translate-y-1"
                )}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-6 bg-[#000000] text-white px-3.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-full shadow-xs">
                    {tier.highlights?.[0] || "RECOMMENDED"}
                  </div>
                )}

                <div>
                  {/* Card Header: Tier Name, Scope Pill & Target Audience */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-black text-[#000000] tracking-tight">{tier.name}</h3>
                      <p className="mt-1 text-xs text-[#595959] leading-tight">
                        {tier.targetAudience}
                      </p>
                    </div>
                    <span className="shrink-0 bg-[#f5f5f5] border border-[#e5e5e5] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#000000] rounded-full">
                      {tier.pageScope}
                    </span>
                  </div>

                  {/* Pricing Display */}
                  <div className="mt-6 border-b border-[#f0f0f0] pb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black tracking-tight text-[#000000] sm:text-4xl">
                        {tier.priceDisplay}
                      </span>
                      <span className="text-xs text-[#595959] font-mono">
                        {activeCategory.id === "personal" ? "all-inclusive" : "fixed quote"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#595959]">Zero hidden fees or surprise costs</p>
                  </div>

                  {/* Revision Count Badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 bg-[#fbfbfb] border border-[#e5e5e5] px-2.5 py-1 text-[11px] text-[#595959] font-mono rounded-full">
                    <RotateCcw className="h-3 w-3 text-[#000000]" />
                    <span>{tier.revisionCount}</span>
                  </div>

                  {/* Included Deliverables Checklist */}
                  <div className="mt-6 space-y-3">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#000000] font-bold">
                      Included Deliverables:
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#333333]">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mt-0.5">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Notes */}
                  {tier.optionalNotes && (
                    <div className="mt-5 border border-[#e5e5e5] bg-[#fafafa] rounded-xl p-3 text-[11px] text-[#595959] leading-relaxed">
                      💡 {tier.optionalNotes}
                    </div>
                  )}
                </div>

                {/* Call to Action Button */}
                <div className="mt-8 pt-5 border-t border-[#f0f0f0] flex flex-col gap-2">
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

                  <a
                    href="#estimator"
                    className="button-pill-ghost w-full py-2 text-xs justify-center text-[#595959]"
                  >
                    <Calculator className="h-3.5 w-3.5 text-[#595959]" />
                    <span>Customize in Estimator</span>
                  </a>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* 3. Care Plans & Maintenance Retainers */}
      {activeCategory.maintenancePlans && activeCategory.maintenancePlans.length > 0 && (
        <div className="mt-14 rounded-3xl border border-[#e5e5e5] bg-white p-6 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#f0f0f0] pb-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#f5f5f5] border border-[#e5e5e5] px-3 py-1 font-mono text-xs font-semibold text-[#000000] rounded-full">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Optional Peace-of-Mind</span>
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-[#000000]">
                Monthly Care & Maintenance Retainers
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#595959] max-w-xl leading-relaxed">
                Keep your website fast, updated, and secure with direct engineer supervision. Cancel or pause anytime.
              </p>
            </div>
            <span className="font-mono text-xs font-bold text-[#fa9000] bg-[#fa9000]/10 px-3 py-1 rounded-full">
              Zero Long-Term Lock-In
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {activeCategory.maintenancePlans.map((plan: CarePlan) => {
              const isCarePopular = Boolean(plan.popular);
              const careWhatsAppUrl = createCarePlanWhatsAppUrl(plan.name, activeCategory.title);

              return (
                <div
                  key={plan.id}
                  className={cn(
                    "flex flex-col justify-between p-6 rounded-2xl bg-white transition-all duration-200",
                    isCarePopular
                      ? "border-2 border-[#000000] shadow-md"
                      : "border border-[#e5e5e5] hover:border-[#000000]"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#000000]">{plan.name}</h4>
                      {isCarePopular && (
                        <span className="bg-[#000000] text-white px-2 py-0.5 font-mono text-[10px] font-bold rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-2xl font-extrabold text-[#000000]">{plan.monthlyPriceDisplay}</span>
                      <span className="text-xs text-[#595959] font-mono">/month</span>
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs text-[#595959] border-t border-[#f0f0f0] pt-4">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
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

      {/* 4. Transparent Scope Assurance Notice */}
      <div className="rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-2xs">
        <div className="flex flex-col gap-3 text-xs text-[#595959] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#000000]">Transparent Quote Guarantee:</strong> All hosting, domain setup,
              and third-party API configurations are explicitly outlined before coding begins. Zero unexpected invoices.
            </p>
          </div>
          {activeCategory.note && (
            <div className="shrink-0 bg-[#fafafa] border border-[#e5e5e5] rounded-lg px-3 py-1.5 text-[11px] font-semibold text-[#000000]">
              {activeCategory.note}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
