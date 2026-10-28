"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Compass, Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal } from "@/lib/animations";

export function AboutSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, []);

  const icons = [Scale, Compass, ShieldCheck];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-7">
            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {t.about.sectionLabel}
              </span>
            </div>

            <h2
              data-animate="fade-up"
              className="font-display text-[clamp(2rem,3.6vw,3.25rem)] text-brand-ink leading-[1.15] tracking-tight mb-6"
            >
              {t.about.headline}
            </h2>

            <p
              data-animate="fade-up"
              className="text-lg sm:text-xl text-brand-ink/90 font-normal leading-relaxed mb-6"
            >
              {t.about.leadParagraph}
            </p>

            <p
              data-animate="fade-up"
              className="text-base text-brand-slate leading-relaxed mb-8"
            >
              {t.about.bodyParagraph}
            </p>

            {/* Transparent Editorial Placeholder Notice (No fabricated statistics) */}
            {/* <div
              data-animate="fade-up"
              className="bg-brand-surface-muted border-l-2 border-brand-secondary p-4 mb-10 text-xs text-brand-slate leading-relaxed"
            >
              {t.about.placeholderNotice}
            </div> */}

            {/* Three Practice Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-brand-border">
              {t.about.pillars.map((pillar, idx) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <div key={pillar.title} data-animate="fade-up" className="pt-2">
                    <div className="w-9 h-9 bg-brand-secondary-light text-brand-primary flex items-center justify-center mb-4">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-brand-ink mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-brand-slate leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div data-animate="fade-up" className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-colors duration-300"
              >
                <span>{t.about.ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Architectural Composition */}
          <div className="lg:col-span-5" data-animate="fade-up">
            <div className="relative bg-brand-surface-muted p-4 sm:p-6 border border-brand-border">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-primary-deep">
                <Image
                  src="/images/about-editorial.webp"
                  alt={t.about.imageCaptionTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-brand-border pt-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                    {t.about.imageCaptionTitle}
                  </p>
                  <p className="text-xs text-brand-slate mt-0.5">
                    {t.about.imageCaptionSubtitle}
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
