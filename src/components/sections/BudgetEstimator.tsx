"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Stethoscope,
  Gift,
  Check,
  Calculator,
  MessageCircle,
  Copy,
  CheckCheck,
  Clock,
  Plus,
  Minus,
  Globe,
  Zap,
  CreditCard,
  FileText,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  SERVICES_DATA,
  CategoryId,
  TierId,
  CATEGORY_IDS,
  ServiceCategory,
  ServiceTier,
  CarePlan,
} from "@/data/servicesData";
import { cn, getWhatsAppUrl } from "@/lib/utils";

const SECTOR_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Building2,
  Stethoscope,
  Gift,
};

export interface BudgetEstimatorProps {
  className?: string;
  defaultCategory?: CategoryId;
}

export function BudgetEstimator({
  className,
  defaultCategory = "business",
}: BudgetEstimatorProps) {
  // Step 1: Sector
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(defaultCategory);

  // Step 2: Tier
  const [selectedTierId, setSelectedTierId] = useState<TierId>("professional");

  // Step 3: Add-Ons State
  const [domainSetup, setDomainSetup] = useState(false);
  const [fastTrack, setFastTrack] = useState(false);
  const [extraPages, setExtraPages] = useState(0);
  const [paymentGateway, setPaymentGateway] = useState(false);
  const [copywriting, setCopywriting] = useState(false);
  const [selectedCarePlanId, setSelectedCarePlanId] = useState<string | null>(null);

  // Copy to clipboard state
  const [copied, setCopied] = useState(false);

  // Active Category & Tier
  const category: ServiceCategory = SERVICES_DATA[selectedCategory];
  const tier: ServiceTier =
    category.tiers.find((t) => t.id === selectedTierId) || category.tiers[0];

  // When changing category, if tier doesn't exist, reset to starter/professional
  const handleCategoryChange = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setSelectedCarePlanId(null); // Reset care plan when switching category
  };

  // Check if Payment Gateway is already included in selected tier (e.g., Business Premium)
  const isPaymentIncludedInTier = useMemo(() => {
    return selectedCategory === "business" && selectedTierId === "premium";
  }, [selectedCategory, selectedTierId]);

  // Selected Care Plan
  const selectedCarePlan: CarePlan | undefined = useMemo(() => {
    if (!selectedCarePlanId || !category.maintenancePlans) return undefined;
    return category.maintenancePlans.find((p) => p.id === selectedCarePlanId);
  }, [selectedCarePlanId, category.maintenancePlans]);

  // Reset all optional add-ons to clean baseline
  const handleReset = () => {
    setDomainSetup(false);
    setFastTrack(false);
    setExtraPages(0);
    setPaymentGateway(false);
    setCopywriting(false);
    setSelectedCarePlanId(null);
  };

  // Financial Computations
  const baseCost = tier.price;
  const domainCost = domainSetup ? 1500 : 0;
  const fastTrackCost = fastTrack ? 2500 : 0;
  const extraPagesCost = extraPages * 1200;
  const paymentCost = paymentGateway && !isPaymentIncludedInTier ? 3500 : 0;
  const copyCost = copywriting ? 2000 : 0;

  const totalOneTime =
    baseCost + domainCost + fastTrackCost + extraPagesCost + paymentCost + copyCost;

  const recurringMonthly = selectedCarePlan ? selectedCarePlan.monthlyPrice : 0;

  // Turnaround Estimation
  const turnaround = useMemo(() => {
    if (fastTrack) return "48 – 72 Hours (Express Rush)";
    if (selectedCategory === "personal") return "3 – 5 Business Days";
    if (selectedTierId === "starter") return "7 – 10 Business Days";
    if (selectedTierId === "professional") return "2 – 3 Weeks";
    return "3 – 4 Weeks";
  }, [fastTrack, selectedCategory, selectedTierId]);

  // Build the WhatsApp message
  const generateWhatsAppUrl = () => {
    const addOnsList: string[] = [];
    if (extraPages > 0) {
      addOnsList.push(`${extraPages} Extra Page(s) (+₹${(extraPages * 1200).toLocaleString("en-IN")})`);
    }
    if (domainSetup) addOnsList.push("Custom Domain & Cloudflare DNS (+₹1,500)");
    if (fastTrack) addOnsList.push("48-Hour Fast-Track (+₹2,500)");
    if (paymentGateway && !isPaymentIncludedInTier) {
      addOnsList.push("Payment Gateway Setup (+₹3,500)");
    }
    if (copywriting) addOnsList.push("Professional Copywriting (+₹2,000)");
    if (selectedCarePlan) {
      addOnsList.push(`Monthly Care: ${selectedCarePlan.name} (${selectedCarePlan.monthlyPriceDisplay})`);
    }

    const addOnsText = addOnsList.length > 0 ? addOnsList.join("\n   • ") : "None";

    let text = `Hi Orbinest Team, I configured a custom website scope on your estimator:\n\n`;
    text += `📂 Sector: ${category.title}\n`;
    text += `📦 Package Tier: ${tier.name} (₹${tier.price.toLocaleString("en-IN")})\n`;
    text += `⚡ Add-ons Configured:\n   • ${addOnsText}\n\n`;
    text += `💰 Estimated Total: ₹${totalOneTime.toLocaleString("en-IN")} One-time`;
    if (recurringMonthly > 0) {
      text += ` + ₹${recurringMonthly.toLocaleString("en-IN")}/mo ongoing`;
    }
    text += `\n⏱️ Target Timeline: ${turnaround}\n\n`;
    text += `Could we discuss starting this project and booking a development slot?`;

    return getWhatsAppUrl(text);
  };

  // Copy breakdown text to clipboard
  const handleCopyBreakdown = () => {
    const addOnsList: string[] = [];
    if (extraPages > 0) {
      addOnsList.push(`${extraPages} Extra Page(s): ₹${(extraPages * 1200).toLocaleString("en-IN")}`);
    }
    if (domainSetup) addOnsList.push("Custom Domain & Cloudflare DNS: ₹1,500");
    if (fastTrack) addOnsList.push("48-Hour Priority Fast-Track: ₹2,500");
    if (paymentGateway && !isPaymentIncludedInTier) {
      addOnsList.push("Payment Gateway Setup: ₹3,500");
    }
    if (copywriting) addOnsList.push("Professional Copywriting: ₹2,000");
    if (selectedCarePlan) {
      addOnsList.push(`Monthly Care (${selectedCarePlan.name}): ${selectedCarePlan.monthlyPriceDisplay}`);
    }

    let summary = `ORBINEST STUDIO — PROJECT SCOPE ESTIMATE\n`;
    summary += `----------------------------------------\n`;
    summary += `Sector: ${category.title}\n`;
    summary += `Package: ${tier.name} (${tier.pageScope})\n`;
    summary += `Base Investment: ₹${tier.price.toLocaleString("en-IN")}\n`;
    summary += `Revisions: ${tier.revisionCount}\n\n`;
    summary += `Selected Add-ons:\n`;
    if (addOnsList.length > 0) {
      summary += addOnsList.map((a) => `• ${a}`).join("\n") + "\n";
    } else {
      summary += `• None (Standard tier inclusions only)\n`;
    }
    summary += `\n----------------------------------------\n`;
    summary += `Total Initial Investment: ₹${totalOneTime.toLocaleString("en-IN")}\n`;
    if (recurringMonthly > 0) {
      summary += `Ongoing Maintenance: ₹${recurringMonthly.toLocaleString("en-IN")}/month\n`;
    }
    summary += `Estimated Delivery: ${turnaround}\n`;
    summary += `----------------------------------------\n`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ===================================================================== */}
        {/* LEFT COLUMN: 3-Step Interactive Configurator (7 Cols on LG) */}
        {/* ===================================================================== */}
        <div className="lg:col-span-7 space-y-10">
          {/* STEP 1: Sector Selection */}
          <div className="rounded-3xl border border-surface-border bg-surface/40 p-6 md:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider font-semibold">
                Step 1 of 3
              </span>
              <span className="text-xs text-foreground-subtle">Select Industry Vertical</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-5">Choose Your Sector</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CATEGORY_IDS.map((catId) => {
                const cat = SERVICES_DATA[catId];
                const Icon = SECTOR_ICONS[cat.iconName] || GraduationCap;
                const isSelected = selectedCategory === catId;

                return (
                  <button
                    key={catId}
                    type="button"
                    onClick={() => handleCategoryChange(catId)}
                    className={cn(
                      "flex items-center gap-3.5 rounded-2xl p-4 text-left transition-all duration-200 border",
                      isSelected
                        ? "border-indigo-500/80 bg-indigo-500/15 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                        : "border-surface-border bg-surface/50 hover:border-slate-600 hover:bg-surface-elevated/80"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors",
                        isSelected
                          ? "border-indigo-400 bg-indigo-500 text-white"
                          : "border-surface-border bg-canvas text-foreground-muted"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">{cat.title}</p>
                      <p className="text-[11px] text-foreground-subtle truncate mt-0.5">
                        {cat.tiers.length} Tier Options
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Tier Selection */}
          <div className="rounded-3xl border border-surface-border bg-surface/40 p-6 md:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                Step 2 of 3
              </span>
              <span className="text-xs text-foreground-subtle">{category.title} Packages</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Select Base Package Tier</h3>
            <p className="text-xs text-foreground-muted mb-6">
              Each tier includes clean responsive engineering, foundational SEO, and revision rounds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {category.tiers.map((t) => {
                const isSelected = selectedTierId === t.id;

                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTierId(t.id)}
                    className={cn(
                      "relative flex flex-col justify-between rounded-2xl p-5 text-left transition-all duration-200 border",
                      isSelected
                        ? "border-emerald-500/80 bg-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                        : "border-surface-border bg-surface/50 hover:border-slate-600 hover:bg-surface-elevated/70"
                    )}
                  >
                    {t.popular && (
                      <span className="absolute -top-2.5 right-4 rounded-full bg-indigo-600 px-2.5 py-0.5 font-mono text-[9px] font-bold text-white uppercase tracking-wider">
                        Popular
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">{t.name}</h4>
                        {isSelected && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-canvas">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                        )}
                      </div>

                      <div className="mt-3 flex items-baseline gap-1">
                        <span className="text-xl font-extrabold text-white">{t.priceDisplay}</span>
                      </div>

                      <div className="mt-3 space-y-1 text-[11px] text-foreground-subtle">
                        <p className="font-medium text-foreground-muted">{t.pageScope}</p>
                        <p>{t.revisionCount}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-surface-border/50 text-[10px] text-foreground-subtle">
                      {t.targetAudience}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: Add-Ons & Maintenance Configurator */}
          <div className="rounded-3xl border border-surface-border bg-surface/40 p-6 md:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider font-semibold">
                Step 3 of 3
              </span>
              <span className="text-xs text-foreground-subtle">Custom Inclusions & Add-Ons</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Tailor Scope & Maintenance</h3>
            <p className="text-xs text-foreground-muted mb-6">
              Configure extra pages, express delivery speed, and ongoing maintenance retainers.
            </p>

            <div className="space-y-3.5">
              {/* Add-on 1: Extra Pages Counter */}
              <div className="flex items-center justify-between rounded-2xl border border-surface-border bg-surface/60 p-4 transition-colors hover:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas border border-surface-border text-indigo-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Additional Custom Page(s)</p>
                    <p className="text-[11px] text-foreground-subtle">
                      +₹1,200 per bespoke page or interactive section
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setExtraPages((prev) => Math.max(0, prev - 1))}
                    disabled={extraPages === 0}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-canvas text-foreground-muted transition-colors hover:text-white disabled:opacity-40"
                    aria-label="Decrease extra pages"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="font-mono text-sm font-bold text-white w-5 text-center">
                    {extraPages}
                  </span>
                  <button
                    type="button"
                    onClick={() => setExtraPages((prev) => prev + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-canvas text-foreground-muted transition-colors hover:text-white"
                    aria-label="Increase extra pages"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Add-on 2: Custom Domain & Cloudflare DNS */}
              <label className="flex items-center justify-between rounded-2xl border border-surface-border bg-surface/60 p-4 transition-colors hover:border-slate-700 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas border border-surface-border text-emerald-400">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Custom Domain & Cloudflare DNS</p>
                    <p className="text-[11px] text-foreground-subtle">
                      Complete .com/.in setup, DNS routing & automated SSL (+₹1,500)
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={domainSetup}
                  onChange={(e) => setDomainSetup(e.target.checked)}
                  className="h-5 w-5 rounded border-slate-700 bg-canvas text-emerald-500 focus:ring-emerald-500"
                />
              </label>

              {/* Add-on 3: Fast-Track 48-Hour Priority Delivery */}
              <label className="flex items-center justify-between rounded-2xl border border-surface-border bg-surface/60 p-4 transition-colors hover:border-slate-700 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas border border-surface-border text-indigo-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Fast-Track Express Rush</p>
                    <p className="text-[11px] text-foreground-subtle">
                      48-72 Hour dedicated priority sprint (+₹2,500)
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={fastTrack}
                  onChange={(e) => setFastTrack(e.target.checked)}
                  className="h-5 w-5 rounded border-slate-700 bg-canvas text-indigo-500 focus:ring-indigo-500"
                />
              </label>

              {/* Add-on 4: Payment Gateway Integration */}
              <label
                className={cn(
                  "flex items-center justify-between rounded-2xl border bg-surface/60 p-4 transition-colors",
                  isPaymentIncludedInTier
                    ? "opacity-60 border-surface-border cursor-not-allowed"
                    : "border-surface-border hover:border-slate-700 cursor-pointer"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas border border-surface-border text-emerald-400">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold text-white">Payment Gateway Integration</p>
                      {isPaymentIncludedInTier && (
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[9px] text-emerald-400">
                          Included in Tier
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-foreground-subtle">
                      Razorpay / Stripe / UPI checkout & automated receipts (+₹3,500)
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  disabled={isPaymentIncludedInTier}
                  checked={isPaymentIncludedInTier || paymentGateway}
                  onChange={(e) => setPaymentGateway(e.target.checked)}
                  className="h-5 w-5 rounded border-slate-700 bg-canvas text-emerald-500 focus:ring-emerald-500 disabled:opacity-50"
                />
              </label>

              {/* Add-on 5: Professional Copywriting */}
              <label className="flex items-center justify-between rounded-2xl border border-surface-border bg-surface/60 p-4 transition-colors hover:border-slate-700 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas border border-surface-border text-indigo-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Professional Copywriting</p>
                    <p className="text-[11px] text-foreground-subtle">
                      High-converting headlines, value props, and SEO content ingestion (+₹2,000)
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={copywriting}
                  onChange={(e) => setCopywriting(e.target.checked)}
                  className="h-5 w-5 rounded border-slate-700 bg-canvas text-indigo-500 focus:ring-indigo-500"
                />
              </label>

              {/* Add-on 6: Monthly Maintenance Care Selector */}
              {category.maintenancePlans && category.maintenancePlans.length > 0 && (
                <div className="rounded-2xl border border-surface-border/80 bg-surface/40 p-4 mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      <p className="text-xs font-semibold text-white">Ongoing Monthly Care Retainer</p>
                    </div>
                    <span className="font-mono text-[10px] text-foreground-subtle">Optional</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCarePlanId(null)}
                      className={cn(
                        "rounded-xl border p-2.5 text-center text-xs transition-colors",
                        selectedCarePlanId === null
                          ? "border-emerald-500/70 bg-emerald-500/10 text-emerald-300 font-semibold"
                          : "border-surface-border bg-surface/50 text-foreground-muted hover:border-slate-600"
                      )}
                    >
                      <span>No Retainer</span>
                      <p className="text-[10px] text-foreground-subtle mt-0.5">₹0/mo</p>
                    </button>

                    {category.maintenancePlans.map((plan) => {
                      const isCareSelected = selectedCarePlanId === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedCarePlanId(plan.id)}
                          className={cn(
                            "rounded-xl border p-2.5 text-center text-xs transition-colors",
                            isCareSelected
                              ? "border-emerald-500/70 bg-emerald-500/10 text-emerald-300 font-semibold shadow-sm"
                              : "border-surface-border bg-surface/50 text-foreground-muted hover:border-slate-600"
                          )}
                        >
                          <span className="truncate block">{plan.name}</span>
                          <p className="text-[10px] text-emerald-400 mt-0.5">{plan.monthlyPriceDisplay}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* RIGHT COLUMN: Sticky Real-Time Price Receipt & CTAs (5 Cols on LG) */}
        {/* ===================================================================== */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="glass-panel-elevated relative overflow-hidden rounded-3xl border border-surface-border p-6 md:p-8 shadow-2xl">
            {/* Ambient receipt glow */}
            <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-indigo-500/10 blur-2xl" />

            {/* Receipt Header */}
            <div className="flex items-center justify-between border-b border-surface-border/60 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-emerald-400" />
                <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                  Scope Estimate Receipt
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-mono text-foreground-subtle transition-colors hover:bg-surface hover:text-white"
                  title="Reset optional add-ons to clean baseline"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset</span>
                </button>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                  Live Pricing
                </span>
              </div>
            </div>

            {/* Configured Itemization */}
            <div className="py-5 space-y-3.5 text-xs">
              {/* Sector & Base Tier */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-white">
                    {category.title} — {tier.name}
                  </p>
                  <p className="text-[11px] text-foreground-subtle mt-0.5">
                    {tier.pageScope} • {tier.revisionCount}
                  </p>
                </div>
                <span className="font-mono font-bold text-white">
                  ₹{tier.price.toLocaleString("en-IN")}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {/* Extra Pages */}
                {extraPages > 0 && (
                  <motion.div
                    key="extra-pages"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between text-foreground-muted overflow-hidden"
                  >
                    <span>{extraPages} Extra Custom Page(s)</span>
                    <span className="font-mono font-medium text-white">
                      +₹{extraPagesCost.toLocaleString("en-IN")}
                    </span>
                  </motion.div>
                )}

                {/* Domain & Cloudflare */}
                {domainSetup && (
                  <motion.div
                    key="domain-setup"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between text-foreground-muted overflow-hidden"
                  >
                    <span>Custom Domain & Cloudflare DNS</span>
                    <span className="font-mono font-medium text-white">+₹1,500</span>
                  </motion.div>
                )}

                {/* Fast-Track Delivery */}
                {fastTrack && (
                  <motion.div
                    key="fast-track"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between text-foreground-muted overflow-hidden"
                  >
                    <span>Fast-Track Express Rush (48h)</span>
                    <span className="font-mono font-medium text-white">+₹2,500</span>
                  </motion.div>
                )}

                {/* Payment Gateway */}
                {paymentGateway && !isPaymentIncludedInTier && (
                  <motion.div
                    key="payment-gateway"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between text-foreground-muted overflow-hidden"
                  >
                    <span>Payment Gateway Integration</span>
                    <span className="font-mono font-medium text-white">+₹3,500</span>
                  </motion.div>
                )}

                {/* Copywriting */}
                {copywriting && (
                  <motion.div
                    key="copywriting"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between text-foreground-muted overflow-hidden"
                  >
                    <span>Professional Copywriting</span>
                    <span className="font-mono font-medium text-white">+₹2,000</span>
                  </motion.div>
                )}

                {/* Care Plan Retainer */}
                {selectedCarePlan && (
                  <motion.div
                    key="care-plan"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between border-t border-surface-border/50 pt-3 text-emerald-300 overflow-hidden"
                  >
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      Monthly Retainer ({selectedCarePlan.name})
                    </span>
                    <span className="font-mono font-medium">
                      {selectedCarePlan.monthlyPriceDisplay}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Total Grand Cost Summary */}
            <div className="border-t border-surface-border/80 pt-5 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-foreground-subtle">
                    Initial Investment
                  </span>
                  <p className="text-[11px] text-foreground-muted">One-time transparent fee</p>
                </div>
                <span className="text-3xl font-extrabold text-white tracking-tight">
                  ₹{totalOneTime.toLocaleString("en-IN")}
                </span>
              </div>

              {recurringMonthly > 0 && (
                <div className="flex items-baseline justify-between text-xs pt-1">
                  <span className="text-foreground-muted">Ongoing Maintenance:</span>
                  <span className="font-mono font-bold text-emerald-400">
                    ₹{recurringMonthly.toLocaleString("en-IN")}/month
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between rounded-xl bg-surface/60 border border-surface-border p-3 text-xs">
                <div className="flex items-center gap-2 text-foreground-muted">
                  <Clock className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Target Turnaround:</span>
                </div>
                <span className="font-mono font-semibold text-white">{turnaround}</span>
              </div>
            </div>

            {/* CTAs: WhatsApp + Copy Breakdown */}
            <div className="mt-6 space-y-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-semibold text-white transition-all duration-300",
                  "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400",
                  "shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_32px_rgba(16,185,129,0.5)]"
                )}
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Send Scope via WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-80 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={handleCopyBreakdown}
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface/70 py-3 text-xs font-semibold text-foreground-muted transition-all",
                  "hover:border-slate-500 hover:text-white hover:bg-surface-elevated"
                )}
              >
                {copied ? (
                  <>
                    <CheckCheck className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Estimate Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Itemized Breakdown</span>
                  </>
                )}
              </button>
            </div>

            {/* Legal / SOW footnote */}
            <p className="mt-5 text-[10px] text-foreground-subtle text-center leading-relaxed">
              *Estimates reflect standard engineering deliverables. Exact requirements formalized in a binding
              Statement of Work (SOW) before development kicks off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
