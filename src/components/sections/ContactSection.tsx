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
  { id: "healthcare", label: "Medical & Healthcare" },
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
      {/* Section Header with Al Jazeera Signature Eyebrow Lockup */}
      <div className="mb-12">
        <div className="section-eyebrow-lockup">
          <span className="section-eyebrow-bar" />
          <span className="section-eyebrow-text">CONNECT & INITIATE</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000000]">
          Start Your Next Project
        </h2>
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
          Have a website in mind for your school, clinic, business, or personal milestone? Reach out directly to our
          engineers for an honest technical assessment and rapid delivery plan.
        </p>
      </div>

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ===================================================================== */}
        {/* LEFT COLUMN: Direct Touchpoints & Process Transparency (5 Cols) */}
        {/* ===================================================================== */}
        <div className="lg:col-span-5 space-y-6">
          {/* Fastest Way to Connect Cards */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#000000] flex items-center gap-2">
              <span>Direct Communication Lines</span>
              <span className="border border-[#d8d8d8] bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-[#000000] rounded-full">
                ACTIVE
              </span>
            </h3>

            {/* WhatsApp Card */}
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-[#d8d8d8] bg-white p-5 transition-colors hover:border-[#000000]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-[#000000] group-hover:text-[#fa9000] transition-colors">
                      Chat on WhatsApp
                    </h4>
                    <span className="flex items-center gap-1 border border-[#c31833]/30 bg-red-50/50 px-2 py-0.5 font-mono text-[9px] font-bold text-[#c31833] rounded-[2px]">
                      <span className="live-dot !h-1.5 !w-1.5" />
                      FOUNDERS ONLINE
                    </span>
                  </div>
                  <p className="text-xs text-[#595959] mt-0.5">
                    Fastest response • Audio notes & scope sharing welcome
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-[#000000] transition-transform group-hover:translate-x-1" />
            </a>

            {/* Formal RFP Email Card */}
            <a
              href="mailto:hello@orbinest.com?subject=Hi%20Orbinest%20Team%20-%20Project%20Inquiry"
              className="group flex items-center justify-between border border-[#d8d8d8] bg-white p-5 transition-colors hover:border-[#000000]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#000000] group-hover:text-[#fa9000] transition-colors">
                    Send RFP / Official Email
                  </h4>
                  <p className="text-xs text-[#595959] mt-0.5">
                    hello@orbinest.com • PDF scopes & tenders accepted
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-[#000000] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* "What Happens Next?" 3-Step Timeline (Al Jazeera Ranked Numeral Pattern) */}
          <div className="border border-[#d8d8d8] bg-white p-6">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#d8d8d8]">
              <h4 className="text-sm font-bold text-[#000000] flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#000000]" />
                <span>What Happens Next?</span>
              </h4>
              <span className="font-mono text-[10px] text-[#595959]">
                Zero Sales Pressure
              </span>
            </div>

            <div className="divide-y divide-[#d8d8d8]">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                  {/* Oversized Slate Numeral */}
                  <span className="font-sans text-2xl font-bold text-[#595959] shrink-0 leading-none">
                    {step.step}
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h5 className="text-xs font-bold text-[#000000]">{step.title}</h5>
                      <span className="font-mono text-[10px] text-[#595959] font-medium">
                        ({step.timeframe})
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-[#595959]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* SLA Trust Footnote */}
            <div className="mt-5 pt-4 border-t border-[#d8d8d8] flex items-center gap-2 text-[11px] text-[#595959] font-mono">
              <ShieldCheck className="h-3.5 w-3.5 text-[#000000] shrink-0" />
              <span>Direct engineer response SLA guaranteed within 2-4 hours</span>
            </div>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* RIGHT COLUMN: Comprehensive Lead Intake Form (Al Jazeera Soft Panel) */}
        {/* ===================================================================== */}
        <div className="lg:col-span-7">
          <div className="soft-panel p-6 md:p-8">
            <AnimatePresence mode="wait">
              {state.success ? (
                /* Success Confirmation View */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="py-8 text-center space-y-6 bg-white border border-[#d8d8d8] p-6"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#d8d8d8] bg-[#f0f0f0] text-[#000000]">
                    <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-[#000000]">Inquiry Received!</h3>
                    <p className="text-sm text-[#595959] leading-relaxed">
                      Thank you, <span className="font-semibold text-[#000000]">{state.submittedData?.fullName}</span>.
                      Your requirements have been logged directly into our founders&apos; inbox.
                    </p>
                  </div>

                  <div className="border border-[#d8d8d8] bg-[#f0f0f0] p-4 max-w-md mx-auto text-left text-xs space-y-2 font-mono">
                    <div className="flex justify-between text-[#595959]">
                      <span>Target Sector:</span>
                      <span className="text-[#000000] font-semibold capitalize">{state.submittedData?.sector}</span>
                    </div>
                    <div className="flex justify-between text-[#595959]">
                      <span>Investment Budget:</span>
                      <span className="text-[#000000] font-semibold">{state.submittedData?.budget}</span>
                    </div>
                    <div className="flex justify-between text-[#595959]">
                      <span>Founder Response SLA:</span>
                      <span className="text-[#000000] font-semibold">Within 2 – 4 Hours</span>
                    </div>
                  </div>

                  <div className="space-y-3 max-w-md mx-auto pt-2">
                    <a
                      href={generateWhatsAppTransferUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-pill-dark w-full py-3.5 text-xs justify-center"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat Immediately on WhatsApp</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => window.location.reload()}
                      className="inline-flex items-center gap-1.5 text-xs text-[#595959] hover:text-[#000000] transition-colors"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Submit another requirement</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Active Intake Form */
                <form action={formAction} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#d8d8d8] pb-3">
                    <h3 className="text-base font-bold text-[#000000]">Project Scope Intake</h3>
                    <span className="border border-[#d8d8d8] bg-white px-2.5 py-0.5 font-mono text-[10px] text-[#000000] font-semibold rounded-full">
                      100% Free Consultation
                    </span>
                  </div>

                  {state.message && !state.success && (
                    <div className="flex items-center gap-2 border border-[#c31833] bg-red-50 p-3 text-xs text-[#c31833]">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{state.message}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#000000]">
                        Full Name <span className="text-[#c31833]">*</span>
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-[#595959]" />
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Dr. Rajesh Varma"
                          className={cn(
                            "w-full rounded-full border bg-white py-2.5 pl-10 pr-4 text-xs text-[#000000] placeholder:text-[#bebebe] transition-colors focus:outline-none",
                            state.errors?.fullName
                              ? "border-[#c31833]"
                              : "border-[#d8d8d8] focus:border-[#000000]"
                          )}
                        />
                      </div>
                      {state.errors?.fullName && (
                        <p className="text-[11px] text-[#c31833]">{state.errors.fullName}</p>
                      )}
                    </div>

                    {/* WhatsApp / Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#000000]">
                        WhatsApp / Phone <span className="text-[#c31833]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-[#595959]" />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className={cn(
                            "w-full rounded-full border bg-white py-2.5 pl-10 pr-4 text-xs text-[#000000] placeholder:text-[#bebebe] transition-colors focus:outline-none",
                            state.errors?.phone
                              ? "border-[#c31833]"
                              : "border-[#d8d8d8] focus:border-[#000000]"
                          )}
                        />
                      </div>
                      {state.errors?.phone && (
                        <p className="text-[11px] text-[#c31833]">{state.errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-[#000000]">
                      Email Address <span className="text-[#c31833]">*</span>
                    </label>
                    <div className="relative">
                      <AtSign className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-[#595959]" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rajesh@clinic.com"
                        className={cn(
                          "w-full rounded-full border bg-white py-2.5 pl-10 pr-4 text-xs text-[#000000] placeholder:text-[#bebebe] transition-colors focus:outline-none",
                          state.errors?.email
                            ? "border-[#c31833]"
                            : "border-[#d8d8d8] focus:border-[#000000]"
                        )}
                      />
                    </div>
                    {state.errors?.email && (
                      <p className="text-[11px] text-[#c31833]">{state.errors.email}</p>
                    )}
                  </div>

                  {/* Row 3: Target Sector Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#000000]">
                      Target Sector <span className="text-[#c31833]">*</span>
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
                              "rounded-full border p-2 text-center text-xs transition-all",
                              isSelected
                                ? "border-[#000000] bg-[#000000] text-white font-bold"
                                : "border-[#d8d8d8] bg-white text-[#595959] hover:border-[#000000] hover:text-[#000000]"
                            )}
                          >
                            <span className="truncate block">{s.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    <input type="hidden" name="sector" value={sector} />
                    {state.errors?.sector && (
                      <p className="text-[11px] text-[#c31833]">{state.errors.sector}</p>
                    )}
                  </div>

                  {/* Row 4: Estimated Budget Band */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#000000]">
                      Estimated Investment Budget <span className="text-[#c31833]">*</span>
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
                              "rounded-full border p-2 text-center text-xs font-mono transition-all",
                              isSelected
                                ? "border-[#000000] bg-[#000000] text-white font-bold"
                                : "border-[#d8d8d8] bg-white text-[#595959] hover:border-[#000000] hover:text-[#000000]"
                            )}
                          >
                            <span className="truncate block">{b}</span>
                          </button>
                        );
                      })}
                    </div>
                    <input type="hidden" name="budget" value={budget} />
                    {state.errors?.budget && (
                      <p className="text-[11px] text-[#c31833]">{state.errors.budget}</p>
                    )}
                  </div>

                  {/* Row 5: Project Scope Textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="scope" className="block text-xs font-semibold text-[#000000]">
                      Project Scope & Key Features <span className="text-[#c31833]">*</span>
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
                        "w-full rounded-2xl border bg-white p-3 text-xs text-[#000000] placeholder:text-[#bebebe] transition-colors focus:outline-none",
                        state.errors?.scope
                          ? "border-[#c31833]"
                          : "border-[#d8d8d8] focus:border-[#000000]"
                      )}
                    />
                    {state.errors?.scope && (
                      <p className="text-[11px] text-[#c31833]">{state.errors.scope}</p>
                    )}
                  </div>

                  {/* Action Buttons: Submit Scope & Prefer WhatsApp */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isPending}
                      className="button-pill-dark w-full py-3.5 text-xs justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Routing to Founders&apos; Inbox...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Scope for Engineering Assessment</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>

                    {/* "Prefer WhatsApp?" Utility Transfer Button */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#d8d8d8]">
                      <span className="text-[11px] text-[#595959]">
                        Want instant real-time answers?
                      </span>
                      <a
                        href={generateWhatsAppTransferUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#000000] hover:text-[#fa9000] transition-colors"
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
