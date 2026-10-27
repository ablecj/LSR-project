// src/components/services/ServicesIntro.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal } from "@/lib/animations";

export function ServicesIntro() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, [locale]);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-7">
            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {t.servicesPage.intro.sectionLabel}
              </span>
            </div>

            <h2
              data-animate="fade-up"
              className="font-display text-[clamp(2rem,3.6vw,3.2rem)] text-brand-ink leading-[1.14] tracking-tight mb-6"
            >
              {t.servicesPage.intro.headline}
            </h2>

            <p
              data-animate="fade-up"
              className="text-base sm:text-lg text-brand-ink/90 leading-relaxed mb-5"
            >
              {t.servicesPage.intro.leadParagraph}
            </p>

            <p
              data-animate="fade-up"
              className="text-sm sm:text-base text-brand-slate leading-relaxed mb-9"
            >
              {t.servicesPage.intro.secondaryParagraph}
            </p>

            {/* Architectural Metadata Strip */}
            <div
              data-animate="fade-up"
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-7 border-t border-brand-border"
            >
              {/* {t.servicesPage.intro.metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="bg-brand-surface-muted border border-brand-border p-4"
                >
                  <div className="font-display text-2xl sm:text-3xl text-brand-primary font-semibold tracking-tight mb-1">
                    {metric.value}
                  </div>
                  <p className="text-xs text-brand-slate leading-snug">
                    {metric.label}
                  </p>
                </div>
              ))} */}
            </div>
          </div>

          {/* Right Column: Supporting Architectural Frame */}
          <div className="lg:col-span-5" data-animate="fade-up">
            <div className="bg-brand-surface-muted p-4 sm:p-6 border border-brand-border shadow-subtle">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-primary-deep">
                <Image
                  src="/images/about-editorial.jpg"
                  alt={t.servicesPage.intro.captionTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                {/* <div className="absolute top-3 left-3 bg-brand-primary-deep/90 text-white text-[10px] font-mono uppercase tracking-[0.18em] px-3 py-1.5">
                  {t.servicesPage.intro.captionBadge}
                </div> */}
              </div>

              <div className="mt-5 flex items-start justify-between gap-4 border-t border-brand-border pt-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                    {t.servicesPage.intro.captionTitle}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-brand-slate mt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                    <span>{t.servicesPage.intro.captionLocation}</span>
                  </p>
                </div>
                <Image
                  src="/images/lrs-logo.png"
                  alt="LRS mark"
                  width={76}
                  height={32}
                  className="h-7 w-auto object-contain shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
