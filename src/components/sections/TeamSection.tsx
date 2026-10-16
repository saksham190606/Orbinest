"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Zap,
  ShieldCheck,
  Terminal,
  MessageCircle,
  Code2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { FOUNDING_TEAM, AGENCY_PRINCIPLES, TeamMember } from "@/data/teamData";
import { cn } from "@/lib/utils";

// Custom SVG icons for Github & LinkedIn to ensure clean vector styling
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
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-medium text-indigo-300">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          <span>The Collective</span>
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Direct Access to the Engineers Who Build Your Site
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-foreground-muted leading-relaxed">
          Zero account managers, zero sales fluff, and zero outsourcing. You communicate directly with the three
          founding developer engineers who write, review, and deploy every line of your codebase.
        </p>
      </div>

      {/* 3-Column Founding Engineers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {FOUNDING_TEAM.map((member: TeamMember, idx: number) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
            className="glass-panel group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-surface-border transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]"
          >
            {/* Ambient card top backdrop */}
            <div
              className={cn(
                "relative flex h-48 w-full flex-col justify-between p-6 bg-gradient-to-br border-b border-surface-border/70",
                member.avatarGradient
              )}
            >
              {/* Header: Role badge and live status */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] font-semibold text-white backdrop-blur-md">
                  <Terminal className="h-3 w-3 text-indigo-400" />
                  <span>{member.roleBadge}</span>
                </span>

                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="truncate max-w-[130px]">{member.status}</span>
                </div>
              </div>

              {/* Avatar Initial Circle & Terminal Command Snippet */}
              <div className="flex items-end justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-canvas/80 font-mono text-xl font-extrabold text-white shadow-xl backdrop-blur-xl group-hover:scale-105 transition-transform duration-300">
                  <span className="bg-gradient-to-br from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                    {member.initials}
                  </span>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[10px] text-foreground-subtle backdrop-blur-md max-w-[180px] truncate">
                  <span className="text-emerald-400">$ </span>
                  {member.terminalCommand}
                </div>
              </div>
            </div>

            {/* Card Body: Name, Bio, and Technical Focus */}
            <div className="flex-1 p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-xs font-semibold text-emerald-400">
                  {member.roleTitle}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
                  {member.bio}
                </p>
              </div>

              {/* Core Stack & Technical Focus Tags */}
              <div className="space-y-2 pt-3 border-t border-surface-border/60">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-foreground-subtle uppercase tracking-wider">
                  <Code2 className="h-3 w-3 text-indigo-400" />
                  <span>Core Stack & Specialization</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.technicalFocus.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg border border-surface-border bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground-subtle transition-colors group-hover:border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer: Social & Direct WhatsApp Action */}
            <div className="p-6 pt-0 border-t border-surface-border/40 mt-auto">
              <div className="pt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s GitHub Profile`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface-border bg-surface/60 text-foreground-muted transition-colors hover:border-slate-500 hover:text-white hover:bg-surface-elevated"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface-border bg-surface/60 text-foreground-muted transition-colors hover:border-slate-500 hover:text-white hover:bg-surface-elevated"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>

                <a
                  href={member.directWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-surface-elevated/80 border border-surface-border px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Direct Chat</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Trust Banner: Agency Operating Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-14 md:mt-20 glass-panel-elevated relative overflow-hidden rounded-3xl border border-surface-border p-6 md:p-10 shadow-xl"
      >
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-surface-border/60">
          {AGENCY_PRINCIPLES.map((principle, pIdx) => {
            const Icon = PRINCIPLE_ICONS[principle.iconName] || ShieldCheck;

            return (
              <div
                key={pIdx}
                className={cn("flex flex-col justify-between", pIdx > 0 ? "pt-6 md:pt-0 md:pl-8" : "")}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-canvas text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{principle.title}</h4>
                      <p className="font-mono text-[10px] text-emerald-400 font-semibold">
                        {principle.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground-muted">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono text-indigo-300">
                  <CheckCircle2 className="h-3 w-3 text-indigo-400" />
                  <span>Guaranteed Studio Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
