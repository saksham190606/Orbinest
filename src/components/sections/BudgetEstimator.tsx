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
  FileText,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CreditCard,
  Zap,
  Globe,
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

  // When changing category, reset care plan
  const handleCategoryChange = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setSelectedCarePlanId(null);
  };

  // Check if Payment Gateway is already included in selected tier
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
        <div className="lg:col-span-7 space-y-8">
          {/* STEP 1: Sector Selection */}
          <div className="border border-[#d8d8d8] bg-white p-6 md:p-8">
            <div className="flex items-center justify-between mb-4 border-b border-[#d8d8d8] pb-3">
              <span className="font-mono text-xs text-[#000000] uppercase tracking-wider font-bold">
                Step 1 of 3
              </span>
              <span className="text-xs text-[#595959]">Select Industry Vertical</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#000000] mb-5">Choose Your Sector</h3>

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
                      "flex items-center gap-3.5 p-4 text-left transition-colors border",
                      isSelected
                        ? "border-2 border-[#000000] bg-white shadow-xs"
                        : "border-[#d8d8d8] bg-white hover:border-[#595959]"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center border transition-colors",
                        isSelected
                          ? "border-[#000000] bg-[#000000] text-white"
                          : "border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#000000] truncate">{cat.title}</p>
                      <p className="text-[11px] text-[#595959] truncate mt-0.5">
                        {cat.tiers.length} Tier Options
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Tier Selection */}
          <div className="border border-[#d8d8d8] bg-white p-6 md:p-8">
            <div className="flex items-center justify-between mb-4 border-b border-[#d8d8d8] pb-3">
              <span className="font-mono text-xs text-[#000000] uppercase tracking-wider font-bold">
                Step 2 of 3
              </span>
              <span className="text-xs text-[#595959]">{category.title} Packages</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#000000] mb-2">Select Base Package Tier</h3>
            <p className="text-xs text-[#595959] mb-6">
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
                      "relative flex flex-col justify-between p-5 text-left transition-colors border",
                      isSelected
                        ? "border-2 border-[#000000] bg-white shadow-xs"
                        : "border-[#d8d8d8] bg-white hover:border-[#595959]"
                    )}
                  >
                    {t.popular && (
                      <span className="absolute -top-2.5 right-4 bg-[#000000] text-white px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider rounded-full">
                        POPULAR
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#000000]">{t.name}</h4>
                        {isSelected && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#000000] text-white">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                        )}
                      </div>

                      <div className="mt-3 flex items-baseline gap-1">
                        <span className="text-xl font-extrabold text-[#000000]">{t.priceDisplay}</span>
                      </div>

                      <div className="mt-3 space-y-1 text-[11px] text-[#595959]">
                        <p className="font-medium text-[#000000]">{t.pageScope}</p>
                        <p>{t.revisionCount}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#d8d8d8] text-[10px] text-[#595959]">
                      {t.targetAudience}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: Add-Ons & Maintenance Configurator */}
          <div className="border border-[#d8d8d8] bg-white p-6 md:p-8">
            <div className="flex items-center justify-between mb-4 border-b border-[#d8d8d8] pb-3">
              <span className="font-mono text-xs text-[#000000] uppercase tracking-wider font-bold">
                Step 3 of 3
              </span>
              <span className="text-xs text-[#595959]">Custom Inclusions & Add-Ons</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#000000] mb-2">Tailor Scope & Maintenance</h3>
            <p className="text-xs text-[#595959] mb-6">
              Configure extra pages, express delivery speed, and ongoing maintenance retainers.
            </p>

            <div className="space-y-3">
              {/* Add-on 1: Extra Pages Counter */}
              <div className="flex items-center justify-between border border-[#d8d8d8] bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#000000]">Additional Custom Page(s)</p>
                    <p className="text-[11px] text-[#595959]">
                      +₹1,200 per bespoke page or interactive section
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setExtraPages((prev) => Math.max(0, prev - 1))}
                    disabled={extraPages === 0}
                    className="flex h-8 w-8 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000] transition-colors hover:border-[#000000] disabled:opacity-40"
                    aria-label="Decrease extra pages"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="font-mono text-sm font-bold text-[#000000] w-5 text-center">
                    {extraPages}
                  </span>
                  <button
                    type="button"
                    onClick={() => setExtraPages((prev) => prev + 1)}
                    className="flex h-8 w-8 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000] transition-colors hover:border-[#000000]"
                    aria-label="Increase extra pages"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Add-on 2: Domain Setup */}
              <label className="flex items-center justify-between border border-[#d8d8d8] bg-white p-4 cursor-pointer hover:border-[#595959] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#000000]">Custom Domain & Cloudflare DNS</p>
                    <p className="text-[11px] text-[#595959]">
                      DNS configuration, SSL certificate, and security firewall routing (+₹1,500)
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={domainSetup}
                  onChange={(e) => setDomainSetup(e.target.checked)}
                  className="h-5 w-5 accent-[#000000] border-[#d8d8d8]"
                />
              </label>

              {/* Add-on 3: Fast-Track Express */}
              <label className="flex items-center justify-between border border-[#d8d8d8] bg-white p-4 cursor-pointer hover:border-[#595959] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#000000]">Fast-Track Express Rush</p>
                    <p className="text-[11px] text-[#595959]">
                      High-priority engineering queue with 48h to 72h first staging delivery (+₹2,500)
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={fastTrack}
                  onChange={(e) => setFastTrack(e.target.checked)}
                  className="h-5 w-5 accent-[#000000] border-[#d8d8d8]"
                />
              </label>

              {/* Add-on 4: Payment Gateway Integration */}
              <label
                className={cn(
                  "flex items-center justify-between border border-[#d8d8d8] p-4 transition-colors",
                  isPaymentIncludedInTier
                    ? "bg-[#f0f0f0] cursor-not-allowed opacity-80"
                    : "bg-white cursor-pointer hover:border-[#595959]"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold text-[#000000]">Razorpay / Stripe Gateway Setup</p>
                      {isPaymentIncludedInTier && (
                        <span className="bg-[#000000] text-white px-2 py-0.5 font-mono text-[9px] font-bold rounded-full">
                          INCLUDED IN TIER
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#595959]">
                      Secure UPI, Cards, and Net Banking checkout with automated webhooks (+₹3,500)
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={paymentGateway || isPaymentIncludedInTier}
                  disabled={isPaymentIncludedInTier}
                  onChange={(e) => setPaymentGateway(e.target.checked)}
                  className="h-5 w-5 accent-[#000000] border-[#d8d8d8]"
                />
              </label>

              {/* Add-on 5: Professional Copywriting */}
              <label className="flex items-center justify-between border border-[#d8d8d8] bg-white p-4 cursor-pointer hover:border-[#595959] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                    <Sparkles className="h-5 w-5 text-[#fa9000]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#000000]">Professional Copywriting</p>
                    <p className="text-[11px] text-[#595959]">
                      High-converting headlines, value props, and SEO content ingestion (+₹2,000)
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={copywriting}
                  onChange={(e) => setCopywriting(e.target.checked)}
                  className="h-5 w-5 accent-[#000000] border-[#d8d8d8]"
                />
              </label>

              {/* Add-on 6: Monthly Maintenance Care Selector */}
              {category.maintenancePlans && category.maintenancePlans.length > 0 && (
                <div className="border border-[#d8d8d8] bg-[#f0f0f0] p-4 mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#000000]" />
                      <p className="text-xs font-semibold text-[#000000]">Ongoing Monthly Care Retainer</p>
                    </div>
                    <span className="font-mono text-[10px] text-[#595959]">Optional</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCarePlanId(null)}
                      className={cn(
                        "p-2.5 text-center text-xs transition-colors border",
                        selectedCarePlanId === null
                          ? "border-2 border-[#000000] bg-white text-[#000000] font-bold"
                          : "border-[#d8d8d8] bg-white text-[#595959] hover:border-[#000000]"
                      )}
                    >
                      <span>No Retainer</span>
                      <p className="text-[10px] text-[#595959] mt-0.5">₹0/mo</p>
                    </button>

                    {category.maintenancePlans.map((plan) => {
                      const isCareSelected = selectedCarePlanId === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedCarePlanId(plan.id)}
                          className={cn(
                            "p-2.5 text-center text-xs transition-colors border",
                            isCareSelected
                              ? "border-2 border-[#000000] bg-white text-[#000000] font-bold shadow-xs"
                              : "border-[#d8d8d8] bg-white text-[#595959] hover:border-[#000000]"
                          )}
                        >
                          <span className="truncate block">{plan.name}</span>
                          <p className="text-[10px] text-[#000000] font-semibold mt-0.5">{plan.monthlyPriceDisplay}</p>
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
        {/* RIGHT COLUMN: Sticky Real-Time Price Receipt & CTAs (Al Jazeera Soft Panel) */}
        {/* ===================================================================== */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="soft-panel p-6 md:p-8">
            {/* Receipt Header */}
            <div className="flex items-center justify-between border-b border-[#d8d8d8] pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-[#000000]" />
                <span className="font-mono text-xs font-bold text-[#000000] uppercase tracking-wider">
                  Scope Estimate Receipt
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 rounded-full border border-[#d8d8d8] bg-white px-2 py-0.5 text-[10px] font-mono text-[#595959] transition-colors hover:text-[#000000] hover:border-[#000000]"
                  title="Reset optional add-ons to clean baseline"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset</span>
                </button>
                <span className="border border-[#d8d8d8] bg-white px-2 py-0.5 font-mono text-[10px] text-[#000000] rounded-full">
                  Live Pricing
                </span>
              </div>
            </div>

            {/* Configured Itemization */}
            <div className="py-5 space-y-3.5 text-xs">
              {/* Sector & Base Tier */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-[#000000]">
                    {category.title} — {tier.name}
                  </p>
                  <p className="text-[11px] text-[#595959] mt-0.5">
                    {tier.pageScope} • {tier.revisionCount}
                  </p>
                </div>
                <span className="font-mono font-bold text-[#000000]">
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
                    className="flex items-center justify-between text-[#595959] overflow-hidden"
                  >
                    <span>{extraPages} Extra Custom Page(s)</span>
                    <span className="font-mono font-medium text-[#000000]">
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
                    className="flex items-center justify-between text-[#595959] overflow-hidden"
                  >
                    <span>Custom Domain & Cloudflare DNS</span>
                    <span className="font-mono font-medium text-[#000000]">+₹1,500</span>
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
                    className="flex items-center justify-between text-[#595959] overflow-hidden"
                  >
                    <span>Fast-Track Express Rush (48h)</span>
                    <span className="font-mono font-medium text-[#000000]">+₹2,500</span>
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
                    className="flex items-center justify-between text-[#595959] overflow-hidden"
                  >
                    <span>Payment Gateway Integration</span>
                    <span className="font-mono font-medium text-[#000000]">+₹3,500</span>
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
                    className="flex items-center justify-between text-[#595959] overflow-hidden"
                  >
                    <span>Professional Copywriting</span>
                    <span className="font-mono font-medium text-[#000000]">+₹2,000</span>
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
                    className="flex items-center justify-between border-t border-[#d8d8d8] pt-3 text-[#000000] overflow-hidden"
                  >
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#000000]" />
                      Monthly Retainer ({selectedCarePlan.name})
                    </span>
                    <span className="font-mono font-bold">
                      {selectedCarePlan.monthlyPriceDisplay}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Total Grand Cost Summary */}
            <div className="border-t border-[#d8d8d8] pt-5 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-[#595959] font-bold">
                    Initial Investment
                  </span>
                  <p className="text-[11px] text-[#595959]">One-time transparent fee</p>
                </div>
                <span className="text-3xl font-extrabold text-[#000000] tracking-tight">
                  ₹{totalOneTime.toLocaleString("en-IN")}
                </span>
              </div>

              {recurringMonthly > 0 && (
                <div className="flex items-baseline justify-between text-xs pt-1 border-t border-[#d8d8d8]">
                  <span className="text-[#595959]">Ongoing Maintenance:</span>
                  <span className="font-mono font-bold text-[#000000]">
                    ₹{recurringMonthly.toLocaleString("en-IN")}/month
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between bg-white border border-[#d8d8d8] p-3 text-xs">
                <div className="flex items-center gap-2 text-[#595959]">
                  <Clock className="h-3.5 w-3.5 text-[#000000]" />
                  <span>Target Turnaround:</span>
                </div>
                <span className="font-mono font-semibold text-[#000000]">{turnaround}</span>
              </div>
            </div>

            {/* CTAs: WhatsApp + Copy Breakdown */}
            <div className="mt-6 space-y-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="button-pill-dark w-full py-3.5 text-xs justify-center"
              >
                <MessageCircle className="h-4 w-4 text-white" />
                <span>Send Scope via WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyBreakdown}
                className="button-pill-ghost w-full py-3 text-xs justify-center"
              >
                {copied ? (
                  <>
                    <CheckCheck className="h-4 w-4 text-[#000000]" />
                    <span className="text-[#000000] font-bold">Estimate Copied to Clipboard!</span>
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
            <p className="mt-5 text-[10px] text-[#595959] text-center leading-relaxed">
              *Estimates reflect standard engineering deliverables. Exact requirements formalized in a binding
              Statement of Work (SOW) before development kicks off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
