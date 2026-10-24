// src/components/about/OurHistorySection.tsx
"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HISTORY_MILESTONES } from "@/data/siteContent";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal, prefersReducedMotion } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function OurHistorySection() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    createSectionReveal(container);

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = container.querySelectorAll("[data-history-card]");
      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 32, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container.querySelector("[data-history-timeline]"),
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [locale]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-brand-surface-muted border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {t.aboutPage.history.sectionLabel}
              </span>
            </div>
            <h2
              data-animate="fade-up"
              className="font-display text-[clamp(2rem,3.5vw,3.1rem)] text-brand-ink leading-[1.15] tracking-tight mb-4"
            >
              {t.aboutPage.history.headline}
            </h2>
            <p
              data-animate="fade-up"
              className="text-sm sm:text-base text-brand-slate leading-relaxed"
            >
              {t.aboutPage.history.description}
            </p>
          </div>

          {/* <div data-animate="fade-up">
            <span className="inline-block bg-brand-secondary-light text-brand-primary text-[11px] font-semibold uppercase tracking-widest px-3.5 py-2 border border-brand-secondary/30">
              {t.aboutPage.history.placeholderBanner}
            </span>
          </div> */}
        </div>

        {/* Responsive Timeline: Vertical on Mobile, Alternating Editorial Grid on Desktop */}
        <div
          data-history-timeline
          className="relative pl-6 sm:pl-8 lg:pl-0"
        >
          {/* Vertical Spine Line */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 lg:left-1/2 w-[1px] bg-brand-border lg:-translate-x-1/2"
          />

          <div className="space-y-10 lg:space-y-12">
            {HISTORY_MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={milestone.id}
                  data-history-card
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
                >
                  {/* Timeline Node Marker */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-6 sm:-left-8 lg:left-1/2 top-7 w-3.5 h-3.5 bg-brand-secondary border-[3px] border-white shadow-sm -translate-x-1/2 z-10"
                  />

                  {/* Left Side (or Right Side on Odd items) */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven
                        ? "lg:pr-12 lg:text-right"
                        : "lg:order-2 lg:pl-12 lg:text-left"
                    }`}
                  >
                    <article className="bg-white border border-brand-border hover:border-brand-primary transition-colors duration-300 p-6 sm:p-8 shadow-subtle text-left">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-brand-border">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                          {milestone.phase[locale]}
                        </span>
                        <span className="text-xs font-mono text-brand-primary bg-brand-surface-muted border border-brand-border px-2.5 py-1">
                          {milestone.period[locale]}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl text-brand-ink leading-snug mb-3">
                        {milestone.title[locale]}
                      </h3>

                      <p className="text-sm text-brand-slate leading-relaxed mb-5">
                        {milestone.description[locale]}
                      </p>

                      <div className="pt-3 border-t border-brand-border flex items-center justify-between text-xs">
                        <span className="font-mono uppercase tracking-wider text-brand-slate">
                          {t.aboutPage.history.deliverablePrefix}
                        </span>
                        <span className="font-semibold text-brand-primary">
                          {milestone.deliverableHighlight[locale]}
                        </span>
                      </div>
                    </article>
                  </div>

                  {/* Opposite Column Spacer with Index Watermark on Desktop */}
                  <div
                    className={`hidden lg:flex lg:col-span-6 items-center pt-5 ${
                      isEven
                        ? "lg:order-2 lg:pl-12 justify-start"
                        : "lg:order-1 lg:pr-12 justify-end"
                    }`}
                  >
                    <span className="font-display text-5xl text-brand-primary/15 select-none">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}