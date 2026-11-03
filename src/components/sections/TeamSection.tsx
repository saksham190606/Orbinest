"use client";

import React from "react";
import {
  MessageSquare,
  Zap,
  ShieldCheck,
  Terminal,
  MessageCircle,
  Code2,
  CheckCircle2,
  Heart,
  Coffee,
  Sparkles,
} from "lucide-react";
import { FOUNDING_TEAM, AGENCY_PRINCIPLES, TeamMember } from "@/data/teamData";
import { cn } from "@/lib/utils";

// Custom SVG icon for LinkedIn
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46V10.9M7.85 6.4a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  );
}

const PRINCIPLE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Zap,
  ShieldCheck,
};

export function TeamSection() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-14">
        <div className="section-eyebrow-lockup">
          <span className="section-eyebrow-bar" />
          <span className="section-eyebrow-text">THE COLLECTIVE & TEAM</span>
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#000000]">
          Meet the Three Engineers Building Your Website
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
          Zero account managers, zero sales middlemen, and zero offshore outsourcing. You collaborate directly with Saksham, Ayaan, and Palakshi — the dedicated software engineers who write, review, and ship every single pixel of your digital platform.
        </p>
      </div>

      {/* 3-Column Engineering Collective Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {FOUNDING_TEAM.map((member: TeamMember) => (
          <div
            key={member.id}
            className="group flex flex-col justify-between rounded-3xl bg-white border border-[#e5e5e5] shadow-xs hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Portrait Photo Studio Header */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#f0f0f0]">
              {/* Actual Member Portrait */}
              <img
                src={member.photoUrl}
                alt={member.name}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Top Gradient & Pill Badges */}
              <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/60 via-black/20 to-transparent">
                <span className="inline-flex items-center gap-1.5 border border-white/20 bg-black/75 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold text-white rounded-full">
                  <Terminal className="h-3 w-3 text-[#fa9000]" />
                  <span>{member.roleBadge}</span>
                </span>

                <div className="flex items-center gap-1.5 border border-white/30 bg-white/95 backdrop-blur-md px-2.5 py-1 font-mono text-[10px] font-semibold text-[#c31833] rounded-full shadow-xs">
                  <span className="live-dot !h-1.5 !w-1.5" />
                  <span className="truncate max-w-[130px]">{member.status}</span>
                </div>
              </div>

              {/* Bottom Dateline Terminal Snippet */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between">
                <div className="border border-white/20 bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[10px] text-white/90 max-w-full truncate rounded-lg">
                  <span className="text-[#fa9000] font-bold">$ </span>
                  {member.terminalCommand}
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="flex-1 p-6 space-y-4">
              {/* Member Name Header with Photo Attached in Front */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#f0f0f0]">
                <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border-2 border-[#000000] shadow-xs">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-black text-[#000000] group-hover:text-[#fa9000] transition-colors leading-tight truncate">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-[#595959] mt-0.5 truncate">
                    {member.roleTitle}
                  </p>
                </div>
              </div>

              {/* Editorial Bio */}
              <p className="text-xs sm:text-sm leading-relaxed text-[#595959]">
                {member.bio}
              </p>

              {/* Core Stack & Technical Focus Tags */}
              <div className="space-y-2 pt-3 border-t border-[#f0f0f0]">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#595959] uppercase tracking-wider font-bold">
                  <Code2 className="h-3 w-3 text-[#000000]" />
                  <span>Core Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.technicalFocus.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="border border-[#e5e5e5] bg-[#fafafa] px-2.5 py-0.5 font-mono text-[10px] text-[#333333] rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer: Social & Direct WhatsApp Action */}
            <div className="p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between gap-3">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn Profile`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#e5e5e5] bg-white text-[#000000] hover:bg-[#fafafa] hover:border-[#000000] transition-all cursor-pointer"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>

                <a
                  href={member.directWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-pill-dark flex-1 py-2 text-xs justify-center"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Chat with {member.name.split(" ")[0]}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cute Little Tagline Written Below the Team Section */}
      <div className="mt-10 rounded-3xl border border-[#e5e5e5] bg-white p-6 sm:p-8 text-center shadow-sm relative overflow-hidden">
        <div className="inline-flex items-center gap-2 border border-[#fa9000]/30 bg-[#fa9000]/10 px-3.5 py-1 text-xs font-mono font-bold text-[#b35900] rounded-full mb-3">
          <Coffee className="h-3.5 w-3.5 text-[#fa9000]" />
          <span>BEHIND THE CODE</span>
          <Sparkles className="h-3.5 w-3.5 text-[#fa9000]" />
        </div>

        <p className="text-base sm:text-lg md:text-xl font-bold text-[#000000] max-w-3xl mx-auto leading-relaxed italic">
          “Crafted with obsessive care, fueled by late-night chai & code, and shipped with genuine love by three friends who refuse to build anything mediocre for you.”
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#595959]">
          <span className="font-bold text-[#000000]">Saksham</span>
          <span className="text-[#fa9000]">•</span>
          <span className="font-bold text-[#000000]">Ayaan</span>
          <span className="text-[#fa9000]">•</span>
          <span className="font-bold text-[#000000]">Palakshi</span>
          <span className="hidden sm:inline text-[#e5e5e5]">|</span>
          <span className="inline-flex items-center gap-1 text-[#333333]">
            <Heart className="h-3 w-3 text-[#c31833] fill-[#c31833]" />
            We build websites that make your business proud.
          </span>
        </div>
      </div>

      {/* Agency Operating Principles */}
      <div className="mt-8 rounded-3xl border border-[#e5e5e5] bg-white p-6 md:p-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#e5e5e5]">
          {AGENCY_PRINCIPLES.map((princource, pIdx) => {
            const Icon = PRINCIPLE_ICONS[princource.iconName] || ShieldCheck;

            return (
              <div
                key={pIdx}
                className={cn("flex flex-col justify-between", pIdx > 0 ? "pt-6 md:pt-0 md:pl-8" : "")}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fa9000]/10 text-[#fa9000]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#000000]">{princource.title}</h4>
                      <p className="font-mono text-[10px] text-[#595959] font-bold">
                        {princource.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-[#595959]">
                    {princource.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono text-[#000000] font-bold">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  <span>Guaranteed Studio Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
