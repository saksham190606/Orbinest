"use client";

import React, { useState, useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  Send,
  Loader2,
  Sparkles,
  ShieldCheck,
  Calendar,
  Layers,
  FileCheck,
  User,
  Phone,
  AtSign,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { submitLead, LeadFormState, ProjectSector } from "@/app/actions/leadAction";
import { cn, getWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_CTA_URL = getWhatsAppUrl(
  "Hi Orbinest team, I'd like to discuss a website project"
);

const SECTORS: { id: ProjectSector; label: string }[] = [
  { id: "education", label: "Education & Coaching" },
  { id: "business", label: "Business & E-Commerce" },
  { id: "healthcare", label: "Clinics & Healthcare" },
  { id: "personal", label: "Personal Digital Gifts" },
  { id: "custom", label: "Custom Engineering" },
];

const BUDGET_BANDS = [
  "₹1,200 - ₹5,000",
  "₹8,000 - ₹18,000",
  "₹18,000 - ₹35,000",
  "₹35,000+",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Scope & Architecture Review",
    timeframe: "Within 2 – 4 Hours",
    description: "One of our 3 founding engineers reviews your requirements, assesses technical feasibility, and prepares preliminary scope notes.",
    icon: Layers,
  },
  {
    step: "02",
    title: "15-Minute Strategy Sync",
    timeframe: "Same Day / Next Morning",
    description: "Quick chat via WhatsApp or Google Meet to align on page counts, design direction, turnaround speed, and integration needs.",
    icon: Calendar,
  },
  {
    step: "03",
    title: "Fixed-Price Proposal & Staging",
    timeframe: "Day 1 Kickoff",
    description: "We issue a binding Statement of Work with transparent milestone pricing and deploy a private staging URL within 48 hours.",
    icon: FileCheck,
  },
];

const initialState: LeadFormState = {
  success: false,
  message: "",
};

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);

  // Local state to power "Prefer WhatsApp?" auto-generation
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sector, setSector] = useState<ProjectSector>("business");
  const [budget, setBudget] = useState(BUDGET_BANDS[1]);
  const [scope, setScope] = useState("");

  // Dynamically generate WhatsApp message with currently typed form data
  const generateWhatsAppTransferUrl = () => {
    let msg = `Hi Orbinest team, I would like to discuss a website project:\n\n`;
    if (fullName) msg += `👤 Name: ${fullName}\n`;
    if (phone) msg += `📱 Phone: ${phone}\n`;
    if (email) msg += `📧 Email: ${email}\n`;
    msg += `📂 Sector: ${sector}\n`;
    msg += `💰 Target Budget: ${budget}\n`;
    if (scope) msg += `📝 Scope: ${scope}\n`;
    msg += `\nCould we review this scope and discuss next steps?`;

    return getWhatsAppUrl(msg);
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span>Connect</span>
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Start Your Next Project
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-foreground-muted leading-relaxed">
          Have a website in mind for your school, clinic, business, or personal milestone? Reach out directly to our
          engineers for an honest technical assessment and rapid delivery plan.
        </p>
      </div>

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* ===================================================================== */}
        {/* LEFT COLUMN: Direct Touchpoints & Process Transparency (5 Cols) */}
        {/* ===================================================================== */}
        <div className="lg:col-span-5 space-y-8">
          {/* Fastest Way to Connect Cards */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Fastest Direct Channels</span>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                Direct Line
              </span>
            </h3>

            {/* WhatsApp Card */}
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 transition-all duration-200 hover:bg-emerald-500/20 hover:border-emerald-400/80 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Chat on WhatsApp
                    </h4>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[9px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Founders Online
                    </span>
                  </div>
                  <p className="text-xs text-foreground-subtle mt-0.5">
                    Fastest response • Audio notes & scope sharing welcome
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-emerald-400 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Formal RFP Email Card */}
            <a
              href="mailto:hello@orbinest.com?subject=Hi%20Orbinest%20Team%20-%20Project%20Inquiry"
              className="group flex items-center justify-between rounded-2xl border border-surface-border bg-surface/60 p-5 transition-all duration-200 hover:border-indigo-500/50 hover:bg-surface-elevated hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 group-hover:scale-105 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">
                    Send RFP / Official Email
                  </h4>
                  <p className="text-xs text-foreground-subtle mt-0.5">
                    hello@orbinest.com • PDF scopes & tenders accepted
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-foreground-subtle transition-transform group-hover:text-indigo-400 group-hover:translate-x-1" />
            </a>
          </div>

          {/* "What Happens Next?" 3-Step Timeline */}
          <div className="rounded-3xl border border-surface-border bg-surface/40 p-6 md:p-7 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-surface-border/60">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="h-4 w-4 text-indigo-400" />
                <span>What Happens Next?</span>
              </h4>
              <span className="font-mono text-[10px] text-foreground-subtle">
                Zero Sales Pressure
              </span>
            </div>

            <div className="space-y-6">
              {PROCESS_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-canvas text-indigo-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h5 className="text-xs font-bold text-white">{step.title}</h5>
                        <span className="font-mono text-[10px] text-emerald-400 font-semibold">
                          ({step.timeframe})
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-foreground-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SLA Trust Footnote */}
            <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center gap-2 text-[11px] text-foreground-subtle font-mono">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Direct engineer response SLA guaranteed within 2-4 hours</span>
            </div>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* RIGHT COLUMN: Comprehensive Lead Intake Form (7 Cols) */}
        {/* ===================================================================== */}
        <div className="lg:col-span-7">
          <div className="glass-panel-elevated relative overflow-hidden rounded-3xl border border-surface-border p-6 md:p-8 shadow-2xl">
            {/* Ambient subtle glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />

            <AnimatePresence mode="wait">
              {state.success ? (
                /* Success Confirmation View */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 text-center space-y-6"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="h-9 w-9 stroke-[2.5]" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      Thank you, <span className="font-semibold text-white">{state.submittedData?.fullName}</span>.
                      Your requirements have been logged directly into our founders&apos; inbox.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-surface-border bg-surface/60 p-4 max-w-md mx-auto text-left text-xs space-y-2 font-mono">
                    <div className="flex justify-between text-foreground-subtle">
                      <span>Target Sector:</span>
                      <span className="text-white capitalize">{state.submittedData?.sector}</span>
                    </div>
                    <div className="flex justify-between text-foreground-subtle">
                      <span>Investment Budget:</span>
                      <span className="text-emerald-400 font-semibold">{state.submittedData?.budget}</span>
                    </div>
                    <div className="flex justify-between text-foreground-subtle">
                      <span>Founder Response SLA:</span>
                      <span className="text-indigo-300">Within 2 – 4 Hours</span>
                    </div>
                  </div>

                  <div className="space-y-3 max-w-md mx-auto pt-2">
                    <a
                      href={generateWhatsAppTransferUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-3.5 text-xs font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:from-emerald-500 hover:to-emerald-400"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat Immediately on WhatsApp</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => window.location.reload()}
                      className="inline-flex items-center gap-1.5 text-xs text-foreground-subtle hover:text-white transition-colors"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Submit another requirement</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Active Intake Form */
                <form action={formAction} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-surface-border/60 pb-3">
                    <h3 className="text-lg font-bold text-white">Project Scope Intake</h3>
                    <span className="rounded bg-indigo-500/10 px-2 py-0.5 font-mono text-[10px] text-indigo-300 border border-indigo-500/20">
                      100% Free Consultation
                    </span>
                  </div>

                  {state.message && !state.success && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-300">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{state.message}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-semibold text-white">
                        Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-foreground-subtle" />
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Dr. Rajesh Varma"
                          className={cn(
                            "w-full rounded-xl border bg-surface-elevated/70 py-2.5 pl-10 pr-3 text-xs text-white placeholder:text-foreground-subtle/50 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500",
                            state.errors?.fullName
                              ? "border-rose-500/80 focus:border-rose-500"
                              : "border-surface-border focus:border-indigo-500"
                          )}
                        />
                      </div>
                      {state.errors?.fullName && (
                        <p className="text-[11px] text-rose-400">{state.errors.fullName}</p>
                      )}
                    </div>

                    {/* WhatsApp / Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold text-white">
                        WhatsApp / Phone <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-foreground-subtle" />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className={cn(
                            "w-full rounded-xl border bg-surface-elevated/70 py-2.5 pl-10 pr-3 text-xs text-white placeholder:text-foreground-subtle/50 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500",
                            state.errors?.phone
                              ? "border-rose-500/80 focus:border-rose-500"
                              : "border-surface-border focus:border-indigo-500"
                          )}
                        />
                      </div>
                      {state.errors?.phone && (
                        <p className="text-[11px] text-rose-400">{state.errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-white">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <div className="relative">
                      <AtSign className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-foreground-subtle" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rajesh@clinic.com"
                        className={cn(
                          "w-full rounded-xl border bg-surface-elevated/70 py-2.5 pl-10 pr-3 text-xs text-white placeholder:text-foreground-subtle/50 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500",
                          state.errors?.email
                            ? "border-rose-500/80 focus:border-rose-500"
                            : "border-surface-border focus:border-indigo-500"
                        )}
                      />
                    </div>
                    {state.errors?.email && (
                      <p className="text-[11px] text-rose-400">{state.errors.email}</p>
                    )}
                  </div>

                  {/* Row 3: Target Sector Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white">
                      Target Sector <span className="text-emerald-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SECTORS.map((s) => {
                        const isSelected = sector === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setSector(s.id)}
                            className={cn(
                              "rounded-xl border p-2.5 text-center text-xs transition-all",
                              isSelected
                                ? "border-indigo-500 bg-indigo-500/20 text-white font-semibold shadow-sm"
                                : "border-surface-border bg-surface/50 text-foreground-muted hover:border-slate-600 hover:text-white"
                            )}
                          >
                            <span className="truncate block">{s.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {/* Hidden input to pass sector to Server Action */}
                    <input type="hidden" name="sector" value={sector} />
                    {state.errors?.sector && (
                      <p className="text-[11px] text-rose-400">{state.errors.sector}</p>
                    )}
                  </div>

                  {/* Row 4: Estimated Budget Band */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white">
                      Estimated Investment Budget <span className="text-emerald-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_BANDS.map((b) => {
                        const isSelected = budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={cn(
                              "rounded-xl border p-2 text-center text-xs font-mono transition-all",
                              isSelected
                                ? "border-emerald-500 bg-emerald-500/20 text-emerald-300 font-bold shadow-sm"
                                : "border-surface-border bg-surface/50 text-foreground-muted hover:border-slate-600 hover:text-white"
                            )}
                          >
                            <span className="truncate block">{b}</span>
                          </button>
                        );
                      })}
                    </div>
                    {/* Hidden input to pass budget to Server Action */}
                    <input type="hidden" name="budget" value={budget} />
                    {state.errors?.budget && (
                      <p className="text-[11px] text-rose-400">{state.errors.budget}</p>
                    )}
                  </div>

                  {/* Row 5: Project Scope Textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="scope" className="block text-xs font-semibold text-white">
                      Project Scope & Key Features <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="scope"
                      name="scope"
                      rows={3}
                      required
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      placeholder="e.g., We need a clinic website with doctor qualifications, appointment booking via WhatsApp, and patient treatment guides before next month..."
                      className={cn(
                        "w-full rounded-xl border bg-surface-elevated/70 p-3 text-xs text-white placeholder:text-foreground-subtle/50 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500",
                        state.errors?.scope
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-surface-border focus:border-indigo-500"
                      )}
                    />
                    {state.errors?.scope && (
                      <p className="text-[11px] text-rose-400">{state.errors.scope}</p>
                    )}
                  </div>

                  {/* Action Buttons: Submit Proposal & Prefer WhatsApp */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isPending}
                      className={cn(
                        "group flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-semibold text-white transition-all duration-300",
                        "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400",
                        "shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)]",
                        "disabled:opacity-60 disabled:cursor-not-allowed"
                      )}
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Routing to Founders&apos; Inbox...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          <span>Submit Scope for Engineering Assessment</span>
                          <ArrowRight className="h-3.5 w-3.5 opacity-80 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    {/* "Prefer WhatsApp?" Utility Transfer Button */}
                    <div className="flex items-center justify-between pt-2 border-t border-surface-border/50">
                      <span className="text-[11px] text-foreground-subtle">
                        Want instant real-time answers?
                      </span>
                      <a
                        href={generateWhatsAppTransferUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>Send Form via WhatsApp Instead &rarr;</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
