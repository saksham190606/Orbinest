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
      {/* Category Filter Bar - Al Jazeera Capsule Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 border border-[#d8d8d8] bg-white p-1.5 rounded-full">
          {PORTFOLIO_FILTERS.map((filter) => {
            const isActive = selectedFilter === filter.id;
            const count = counts[filter.id] || 0;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors duration-200",
                  isActive
                    ? "bg-[#000000] text-white"
                    : "text-[#595959] hover:text-[#000000] hover:bg-[#f0f0f0]"
                )}
              >
                <span className="font-semibold">{filter.label}</span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.2 font-mono text-[10px]",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#f0f0f0] text-[#595959]"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid (Al Jazeera News-Card / Media-Thumb Architecture) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="news-card flex flex-col justify-between transition-colors"
            >
              {/* Card Top: Browser / Device Mockup Header */}
              <div className="relative overflow-hidden border-b border-[#d8d8d8] bg-white">
                {/* Browser Traffic Lights & Address Bar Simulation */}
                <div className="flex items-center justify-between border-b border-[#d8d8d8] bg-[#f0f0f0] px-4 py-2 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#595959]" />
                    <span className="h-2 w-2 rounded-full bg-[#595959]/60" />
                    <span className="h-2 w-2 rounded-full bg-[#595959]/40" />
                  </div>

                  <div className="flex items-center gap-1 rounded bg-white px-2.5 py-0.5 font-mono text-[10px] text-[#595959] border border-[#d8d8d8]">
                    <Lock className="h-2.5 w-2.5 text-[#000000]" />
                    <span className="truncate max-w-[130px] sm:max-w-[170px]">
                      orbinest.preview/{project.id}
                    </span>
                  </div>

                  {/* Al Jazeera Live Status Tag */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#c31833] font-bold">
                    <span className="live-dot !h-1.5 !w-1.5" />
                    <span>LIVE</span>
                    <a
                      href={project.liveUrl || "#contact"}
                      aria-label={`View ${project.title} live preview`}
                      className="text-[#595959] hover:text-[#000000] ml-1 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Simulated Device Screen Canvas */}
                <div
                  className={cn(
                    "relative flex h-48 w-full flex-col justify-between p-5 bg-gradient-to-br transition-all duration-300",
                    project.mockPreview.gradient
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/60 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-md">
                      {project.mockPreview.deviceType === "mobile" ? (
                        <Smartphone className="h-3 w-3" />
                      ) : (
                        <Globe className="h-3 w-3" />
                      )}
                      <span>{project.categoryLabel}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#000000] shadow-xs">
                      <Clock className="h-3 w-3 text-[#595959]" />
                      <span>{project.turnaround}</span>
                    </span>
                  </div>

                  <div className="space-y-1.5 rounded-md bg-white/95 p-3.5 border border-[#d8d8d8] shadow-xs">
                    {project.mockPreview.badgeText && (
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#fa9000]">
                        {project.mockPreview.badgeText}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-[#000000] tracking-tight leading-snug line-clamp-1">
                      {project.mockPreview.mockHeadline}
                    </h4>
                    <p className="text-[11px] text-[#595959] line-clamp-1">
                      {project.mockPreview.mockSubtext}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body: Project Info & Performance Badges */}
              <div className="flex-1 p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#595959] font-mono">
                    <span>Client: {project.clientName}</span>
                    <span>{project.deliveryYear}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-[#000000] group-hover:text-[#fa9000] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#000000] font-medium">
                    {project.tagline}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#595959] line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Performance Metrics Data Strip */}
                <div className="space-y-2 pt-3 border-t border-[#d8d8d8]">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#000000] font-bold">
                    <TrendingUp className="h-3 w-3 text-[#000000]" />
                    <span>Verified Outcomes</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="border border-[#d8d8d8] bg-[#f0f0f0] p-2 text-center"
                      >
                        <p className="font-mono text-xs font-bold text-[#000000]">
                          {metric.value}
                        </p>
                        <p className="text-[10px] text-[#595959] mt-0.5 truncate">
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
                      className="border border-[#d8d8d8] bg-white px-2 py-0.5 font-mono text-[10px] text-[#595959]"
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
                    className="button-pill-ghost py-2 text-xs justify-center"
                  >
                    <Layers className="h-3.5 w-3.5 text-[#000000]" />
                    <span>Architecture</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-pill-dark py-2 text-xs justify-center"
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

      {/* Architecture Deep-Dive Modal (Al Jazeera Clean Paper Dialog) */}
      <AnimatePresence>
        {activeProjectForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectForModal(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 14 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden border border-[#d8d8d8] bg-white p-6 sm:p-8 shadow-dropdown"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProjectForModal(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center border border-[#d8d8d8] bg-white text-[#000000] hover:bg-[#f0f0f0] transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="border border-[#d8d8d8] bg-[#f0f0f0] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#000000]">
                    {activeProjectForModal.categoryLabel}
                  </span>
                  <span className="font-mono text-xs text-[#595959]">
                    {activeProjectForModal.turnaround} • Delivered {activeProjectForModal.deliveryYear}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#000000]">
                  {activeProjectForModal.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#595959] font-medium">
                  {activeProjectForModal.tagline}
                </p>
              </div>

              {/* Key Achievements Grid */}
              <div className="my-6 grid grid-cols-3 gap-3">
                {activeProjectForModal.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="border border-[#d8d8d8] bg-[#f0f0f0] p-3 text-center"
                  >
                    <p className="font-mono text-sm sm:text-base font-bold text-[#000000]">
                      {metric.value}
                    </p>
                    <p className="text-[11px] text-[#595959] mt-0.5">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Architecture & Engineering Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#000000]">
                  <Cpu className="h-4 w-4 text-[#fa9000]" />
                  <span>Engineering Decisions & Architecture</span>
                </div>
                <ul className="space-y-2.5">
                  {activeProjectForModal.architectureHighlights?.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2.5 border border-[#d8d8d8] bg-white p-3 text-xs leading-relaxed text-[#333333]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#000000] mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills in Modal */}
              <div className="space-y-2 mb-8">
                <p className="flex items-center gap-1.5 text-[11px] font-mono text-[#595959] uppercase tracking-wider font-bold">
                  <Code2 className="h-3.5 w-3.5 text-[#000000]" />
                  <span>Verified Tech Stack</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProjectForModal.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="border border-[#d8d8d8] bg-[#f0f0f0] px-2.5 py-1 font-mono text-xs text-[#333333]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#d8d8d8]">
                <a
                  href={generateWhatsAppUrl(activeProjectForModal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-pill-dark w-full sm:flex-1 py-3 text-xs justify-center"
                >
                  <MessageCircle className="h-4 w-4 text-white" />
                  <span>Request Similar Architecture via WhatsApp</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href="#estimator"
                  onClick={() => setActiveProjectForModal(null)}
                  className="button-pill-ghost w-full sm:w-auto px-5 py-3 text-xs justify-center"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#fa9000]" />
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
