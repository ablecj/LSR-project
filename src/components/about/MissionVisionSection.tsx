// src/components/about/MissionVisionSection.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { Compass, Eye, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal } from "@/lib/animations";

export function MissionVisionSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div
            data-animate="fade-up"
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-brand-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              {t.aboutPage.missionVision.sectionLabel}
            </span>
          </div>
          <h2
            data-animate="fade-up"
            className="font-display text-[clamp(2rem,3.5vw,3.1rem)] text-brand-ink leading-[1.15] tracking-tight mb-4"
          >
            {t.aboutPage.missionVision.headline}
          </h2>
          <p
            data-animate="fade-up"
            className="text-sm sm:text-base text-brand-slate leading-relaxed"
          >
            {t.aboutPage.missionVision.description}
          </p>
        </div>

        {/* Dual Architectural Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Our Mission (Light Editorial Surface) */}
          <article
            data-animate="fade-up"
            className="lg:col-span-6 bg-brand-surface-muted border border-brand-border p-8 sm:p-12 flex flex-col justify-between shadow-subtle"
          >
            <div>
              <div className="flex items-center justify-between border-b border-brand-border pb-5 mb-7">
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-brand-primary font-semibold">
                  {t.aboutPage.missionVision.missionCode}
                </span>
                <div className="w-10 h-10 bg-brand-secondary-light border border-brand-secondary/30 text-brand-primary flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary mb-2">
                {t.aboutPage.missionVision.missionLabel}
              </p>

              <h3 className="font-display text-2xl sm:text-3xl text-brand-ink leading-[1.2] mb-5">
                {t.aboutPage.missionVision.missionHeadline}
              </h3>

              <p className="text-sm sm:text-base text-brand-slate leading-relaxed mb-8">
                {t.aboutPage.missionVision.missionBody}
              </p>
            </div>

            <div className="border-t border-brand-border pt-6">
              <ul className="space-y-3">
                {t.aboutPage.missionVision.missionPillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-start gap-3 text-xs sm:text-sm text-brand-ink/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Card 2: Our Vision (Deep Petrol Architectural Surface) */}
          <article
            data-animate="fade-up"
            className="lg:col-span-6 bg-brand-primary-deep text-white border border-brand-primary-deep p-8 sm:p-12 flex flex-col justify-between shadow-elevated relative overflow-hidden"
          >
            {/* Subtle Orbital Watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -bottom-16 w-64 h-64 opacity-[0.07]"
            >
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  stroke="#10A5AC"
                  strokeWidth="10"
                  strokeDasharray="130 45"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="55"
                  stroke="#FFFFFF"
                  strokeWidth="10"
                  strokeDasharray="90 35"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/15 pb-5 mb-7">
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-brand-secondary font-semibold">
                  {t.aboutPage.missionVision.visionCode}
                </span>
                <div className="w-10 h-10 bg-white/10 border border-white/20 text-brand-secondary flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary mb-2">
                {t.aboutPage.missionVision.visionLabel}
              </p>

              <h3 className="font-display text-2xl sm:text-3xl text-white leading-[1.2] mb-5">
                {t.aboutPage.missionVision.visionHeadline}
              </h3>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                {t.aboutPage.missionVision.visionBody}
              </p>
            </div>

            <div className="relative z-10 border-t border-white/15 pt-6">
              <ul className="space-y-3">
                {t.aboutPage.missionVision.visionPillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-start gap-3 text-xs sm:text-sm text-white/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}