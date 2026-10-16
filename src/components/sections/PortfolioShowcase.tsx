"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  MessageCircle,
  Clock,
  Layers,
  Sparkles,
  CheckCircle2,
  X,
  Code2,
  TrendingUp,
  Cpu,
  ArrowRight,
  Globe,
  Smartphone,
  Lock,
} from "lucide-react";
import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_FILTERS,
  PortfolioProject,
  ProjectCategory,
} from "@/data/portfolioData";
import { cn, getWhatsAppUrl } from "@/lib/utils";

export function PortfolioShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | ProjectCategory>('all');
  const [activeProjectForModal, setActiveProjectForModal] = useState<PortfolioProject | null>(null);

  // Filter projects based on active tab
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  // Counts for filter pills
  const counts = useMemo(() => {
    const map: Record<string, number> = { all: PORTFOLIO_PROJECTS.length };
    PORTFOLIO_PROJECTS.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, []);

  const generateWhatsAppUrl = (project: PortfolioProject) => {
    return getWhatsAppUrl(
      `Hi Orbinest team, I saw your case study for ${project.title} and want something similar for my project. Could we discuss technical scope and pricing?`
    );
  };

  return (
    <div className="w-full">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-surface-border bg-surface/50 p-1.5 backdrop-blur-md">
          {PORTFOLIO_FILTERS.map((filter) => {
            const isActive = selectedFilter === filter.id;
            const count = counts[filter.id] || 0;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={cn(
                  "relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-colors duration-200",
                  isActive
                    ? "text-white"
                    : "text-foreground-muted hover:text-white hover:bg-surface/60"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/90 to-indigo-500 shadow-md shadow-indigo-500/25"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                  />
                )}
                <span className="relative z-10 font-semibold">{filter.label}</span>
                <span
                  className={cn(
                    "relative z-10 rounded-full px-1.5 py-0.2 font-mono text-[10px]",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-surface-elevated text-foreground-subtle"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with Smooth Layout Transitions */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="glass-panel group flex flex-col justify-between overflow-hidden rounded-3xl border border-surface-border transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]"
            >
              {/* Card Top: Browser / Device Mockup Header */}
              <div className="relative overflow-hidden border-b border-surface-border/70 bg-canvas/80">
                {/* Browser Traffic Lights & Address Bar Simulation */}
                <div className="flex items-center justify-between border-b border-surface-border/40 bg-surface/80 px-4 py-2.5 text-[11px] backdrop-blur-md">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex items-center gap-1 rounded-md bg-canvas/60 px-2.5 py-0.5 font-mono text-[10px] text-foreground-subtle border border-surface-border/50">
                    <Lock className="h-2.5 w-2.5 text-emerald-400" />
                    <span className="truncate max-w-[130px] sm:max-w-[170px]">
                      orbinest.preview/{project.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live</span>
                    </div>
                    <a
                      href={project.liveUrl || "#contact"}
                      aria-label={`View ${project.title} live preview`}
                      className="text-foreground-subtle hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Simulated Device Screen Canvas */}
                <div
                  className={cn(
                    "relative flex h-48 w-full flex-col justify-between p-5 bg-gradient-to-br transition-all duration-500 group-hover:scale-[1.02]",
                    project.mockPreview.gradient
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-md">
                      {project.mockPreview.deviceType === "mobile" ? (
                        <Smartphone className="h-3 w-3 text-purple-300" />
                      ) : (
                        <Globe className="h-3 w-3 text-indigo-300" />
                      )}
                      <span>{project.categoryLabel}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-300 backdrop-blur-md">
                      <Clock className="h-3 w-3" />
                      <span>{project.turnaround}</span>
                    </span>
                  </div>

                  <div className="space-y-1.5 rounded-xl bg-canvas/60 p-3.5 backdrop-blur-md border border-white/10 shadow-lg">
                    {project.mockPreview.badgeText && (
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-indigo-300">
                        {project.mockPreview.badgeText}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-white tracking-tight leading-snug line-clamp-1">
                      {project.mockPreview.mockHeadline}
                    </h4>
                    <p className="text-[11px] text-foreground-muted line-clamp-1">
                      {project.mockPreview.mockSubtext}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body: Project Info & Performance Badges */}
              <div className="flex-1 p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-foreground-subtle font-mono">
                    <span>Client: {project.clientName}</span>
                    <span>{project.deliveryYear}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-indigo-300/90 font-medium">
                    {project.tagline}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-foreground-muted line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Performance Metrics Glass Strip */}
                <div className="space-y-2 pt-2 border-t border-surface-border/60">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-semibold">
                    <TrendingUp className="h-3 w-3" />
                    <span>Verified Outcomes</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-xl border border-surface-border bg-surface/70 p-2 text-center"
                      >
                        <p className="font-mono text-xs font-bold text-emerald-400">
                          {metric.value}
                        </p>
                        <p className="text-[10px] text-foreground-subtle mt-0.5 truncate">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground-subtle border border-surface-border/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action CTAs */}
              <div className="p-6 pt-0 space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveProjectForModal(project)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-surface-border bg-surface/60 py-2.5 text-xs font-semibold text-white transition-all hover:border-slate-500 hover:bg-surface-elevated"
                  >
                    <Layers className="h-3.5 w-3.5 text-indigo-400" />
                    <span>Architecture</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-500/20 transition-all hover:from-emerald-500 hover:to-emerald-400"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Build Similar</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Architecture Deep-Dive Modal */}
      <AnimatePresence>
        {activeProjectForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectForModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-surface-border bg-surface-elevated p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProjectForModal(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-surface-border bg-surface text-foreground-muted hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-indigo-400">
                    {activeProjectForModal.categoryLabel}
                  </span>
                  <span className="font-mono text-xs text-foreground-subtle">
                    {activeProjectForModal.turnaround} • Delivered {activeProjectForModal.deliveryYear}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeProjectForModal.title}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-300 font-medium">
                  {activeProjectForModal.tagline}
                </p>
              </div>

              {/* Key Achievements Grid */}
              <div className="my-6 grid grid-cols-3 gap-3">
                {activeProjectForModal.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-surface-border bg-surface/80 p-3 text-center"
                  >
                    <p className="font-mono text-sm sm:text-base font-bold text-emerald-400">
                      {metric.value}
                    </p>
                    <p className="text-[11px] text-foreground-subtle mt-0.5">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Architecture & Engineering Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Cpu className="h-4 w-4 text-indigo-400" />
                  <span>Engineering Decisions & Architecture</span>
                </div>
                <ul className="space-y-2.5">
                  {activeProjectForModal.architectureHighlights?.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2.5 rounded-xl border border-surface-border/60 bg-surface/40 p-3 text-xs leading-relaxed text-foreground-muted"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills in Modal */}
              <div className="space-y-2 mb-8">
                <p className="flex items-center gap-1.5 text-[11px] font-mono text-foreground-subtle uppercase tracking-wider">
                  <Code2 className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Verified Tech Stack</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProjectForModal.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg border border-surface-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-surface-border/80">
                <a
                  href={generateWhatsAppUrl(activeProjectForModal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-3 text-xs font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-500 hover:to-emerald-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Request Similar Architecture via WhatsApp</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href="#estimator"
                  onClick={() => setActiveProjectForModal(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface/80 px-4 py-3 text-xs font-semibold text-foreground-muted hover:text-white transition-colors"
                >
                  <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Estimate Cost</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
