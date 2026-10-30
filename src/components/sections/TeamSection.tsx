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

// Custom SVG icons for Github & LinkedIn
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

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
      {/* Section Header with Al Jazeera Signature Eyebrow Lockup */}
      <div className="mb-12">
        <div className="section-eyebrow-lockup">
          <span className="section-eyebrow-bar" />
          <span className="section-eyebrow-text">THE COLLECTIVE & TEAM</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000000]">
          Meet the Three Engineers Building Your Website
        </h2>
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#595959] leading-relaxed">
          Zero account managers, zero sales middlemen, and zero offshore outsourcing. You collaborate directly with Saksham, Ayaan, and Palakshi — the dedicated software engineers who write, review, and ship every single pixel of your digital platform.
        </p>
      </div>

      {/* 3-Column Engineering Collective Grid (Al Jazeera Leader Card Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {FOUNDING_TEAM.map((member: TeamMember) => (
          <div
            key={member.id}
            className="news-card group flex flex-col justify-between transition-all duration-200 hover:border-[#000000] bg-white"
          >
            {/* Portrait Photo Studio Header */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#f0f0f0] border-b border-[#d8d8d8]">
              {/* Actual Member Portrait */}
              <img
                src={member.photoUrl}
                alt={member.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />

              {/* Top Gradient & Pill Badges */}
              <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/60 via-black/20 to-transparent">
                <span className="inline-flex items-center gap-1.5 border border-white/20 bg-black/70 backdrop-blur-xs px-2.5 py-0.5 font-mono text-[10px] font-bold text-white rounded-full">
                  <Terminal className="h-3 w-3 text-[#fa9000]" />
                  <span>{member.roleBadge}</span>
                </span>

                <div className="flex items-center gap-1.5 border border-white/20 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#c31833] rounded-full shadow-xs">
                  <span className="live-dot !h-1.5 !w-1.5" />
                  <span className="truncate max-w-[130px]">{member.status}</span>
                </div>
              </div>

              {/* Bottom Dateline Terminal Snippet */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between">
                <div className="border border-white/20 bg-black/60 backdrop-blur-xs px-2.5 py-1 font-mono text-[10px] text-white/90 max-w-full truncate rounded-xs">
                  <span className="text-[#fa9000] font-bold">$ </span>
                  {member.terminalCommand}
                </div>
              </div>
            </div>

            {/* Card Body: Photo Attached in Front of Name + Bio + Stack */}
            <div className="flex-1 p-6 space-y-4">
              {/* Member Name Header with Photo Attached in Front */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#d8d8d8]">
                {/* Photo attached in front of name */}
                <div className="relative h-13 w-13 shrink-0 rounded-full overflow-hidden border-2 border-[#000000] shadow-xs">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#000000] group-hover:text-[#fa9000] transition-colors leading-tight truncate">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-[#595959] mt-0.5 truncate">
                    {member.roleTitle}
                  </p>
                </div>
              </div>

              {/* Editorial Bio */}
              <p className="text-xs leading-relaxed text-[#333333]">
                {member.bio}
              </p>

              {/* Core Stack & Technical Focus Tags */}
              <div className="space-y-2 pt-3 border-t border-[#d8d8d8]">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#595959] uppercase tracking-wider font-bold">
                  <Code2 className="h-3 w-3 text-[#000000]" />
                  <span>Core Stack & Specialization</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.technicalFocus.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="border border-[#d8d8d8] bg-[#f0f0f0] px-2 py-0.5 font-mono text-[10px] text-[#333333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer: Social & Direct WhatsApp Action */}
            <div className="p-6 pt-0 border-t border-[#d8d8d8] mt-auto">
              <div className="pt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s GitHub Profile`}
                    className="flex h-9 w-9 items-center justify-center border border-[#d8d8d8] bg-white text-[#000000] hover:bg-[#f0f0f0] transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                    className="flex h-9 w-9 items-center justify-center border border-[#d8d8d8] bg-white text-[#000000] hover:bg-[#f0f0f0] transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>

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
      <div className="mt-10 border border-[#d8d8d8] bg-[#f0f0f0] p-6 sm:p-8 text-center rounded-2xl relative overflow-hidden">
        {/* Subtle decorative background detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-24 bg-[#fa9000]" />
        
        <div className="inline-flex items-center gap-2 border border-[#d8d8d8] bg-white px-3.5 py-1 text-xs font-mono font-bold text-[#000000] rounded-full shadow-xs mb-3">
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
          <span className="hidden sm:inline text-[#d8d8d8]">|</span>
          <span className="inline-flex items-center gap-1 text-[#333333]">
            <Heart className="h-3 w-3 text-[#c31833] fill-[#c31833]" />
            We build websites that make your business proud.
          </span>
        </div>
      </div>

      {/* Agency Operating Principles (Al Jazeera Soft Panel) */}
      <div className="mt-8 soft-panel p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#d8d8d8]">
          {AGENCY_PRINCIPLES.map((princource, pIdx) => {
            const Icon = PRINCIPLE_ICONS[princource.iconName] || ShieldCheck;

            return (
              <div
                key={pIdx}
                className={cn("flex flex-col justify-between", pIdx > 0 ? "pt-6 md:pt-0 md:pl-8" : "")}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d8d8d8] bg-white text-[#000000]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#000000]">{princource.title}</h4>
                      <p className="font-mono text-[10px] text-[#595959] font-bold">
                        {princource.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-[#333333]">
                    {princource.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono text-[#000000] font-bold">
                  <CheckCircle2 className="h-3 w-3 text-[#000000]" />
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
