// src/components/about/AboutUsSection.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal } from "@/lib/animations";

export function AboutUsSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Narrative & Methodology */}
          <div className="lg:col-span-7">
            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {t.aboutPage.overview.sectionLabel}
              </span>
            </div>

            <h2
              data-animate="fade-up"
              className="font-display text-[clamp(2rem,3.6vw,3.25rem)] text-brand-ink leading-[1.14] tracking-tight mb-6"
            >
              {t.aboutPage.overview.headline}
            </h2>

            <p
              data-animate="fade-up"
              className="text-lg sm:text-xl text-brand-ink/90 font-normal leading-relaxed mb-6"
            >
              {t.aboutPage.overview.leadParagraph}
            </p>

            <p
              data-animate="fade-up"
              className="text-base text-brand-slate leading-relaxed mb-5"
            >
              {t.aboutPage.overview.secondaryParagraph}
            </p>

            <p
              data-animate="fade-up"
              className="text-base text-brand-slate leading-relaxed mb-8"
            >
              {t.aboutPage.overview.tertiaryParagraph}
            </p>

            {/* Structured Methodology Breakdown */}
            <div
              data-animate="fade-up"
              className="border-t border-brand-border pt-7 mb-8"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary mb-5">
                {t.aboutPage.overview.methodologyHeading}
              </h3>

              <div className="space-y-4">
                {t.aboutPage.overview.methodologyItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3.5 bg-brand-surface-muted border border-brand-border p-4"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-brand-ink">
                        {item.label}
                      </h4>
                      <p className="text-xs text-brand-slate leading-relaxed mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparent Editorial Placeholder Notice */}
            {/* <div
              data-animate="fade-up"
              className="bg-brand-secondary-light/60 border-l-2 border-brand-secondary p-4 mb-9"
            >
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-brand-primary mb-1">
                {t.aboutPage.overview.editorialNoteBadge}
              </span>
              <p className="text-xs text-brand-slate leading-relaxed">
                {t.aboutPage.overview.editorialNoteText}
              </p>
            </div> */}

            {/* CTAs */}
            <div
              data-animate="fade-up"
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-colors duration-300"
              >
                <span>{t.aboutPage.overview.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-3 border border-brand-border hover:border-brand-primary text-brand-ink hover:text-brand-primary text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-colors duration-300"
              >
                <span>{t.aboutPage.overview.secondaryCta}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Architectural Composition */}
          <div className="lg:col-span-5 lg:sticky lg:top-28" data-animate="fade-up">
            <div className="bg-brand-surface-muted p-4 sm:p-6 border border-brand-border shadow-subtle">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-primary-deep">
                <Image
                  src="/images/about-editorial.jpg"
                  alt={t.aboutPage.overview.imageCaptionTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Secondary Detail Frame */}
              <div className="grid grid-cols-12 gap-4 mt-4 items-center">
                <div className="col-span-5 relative aspect-[4/3] overflow-hidden border border-brand-border bg-brand-primary-deep">
                  <Image
                    src="/images/service-immigration.jpg"
                    alt="LRS Legal Portfolio & Compass"
                    fill
                    sizes="(max-width: 1024px) 40vw, 18vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="col-span-7 pl-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-secondary mb-1">
                    LRS — COUNSEL & MOBILITY
                  </p>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {t.about.imageCaptionSubtitle}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-brand-border pt-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                    {t.aboutPage.overview.imageCaptionTitle}
                  </p>
                  <p className="text-xs text-brand-slate mt-0.5">
                    {t.aboutPage.overview.imageCaptionSubtitle}
                  </p>
                </div>
                <Image
                  src="/images/lrs-logo.png"
                  alt="LRS mark"
                  width={76}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}