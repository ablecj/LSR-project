// src/components/about/OurValuesSection.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Compass,
  Globe,
  FileCheck2,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import { CORE_VALUES_DATA, CoreValueItem } from "@/data/siteContent";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal } from "@/lib/animations";

const ICON_MAP: Record<CoreValueItem["iconName"], React.ElementType> = {
  scale: Scale,
  shield: ShieldCheck,
  compass: Compass,
  globe: Globe,
  fileCheck: FileCheck2,
  handshake: Handshake,
};

export function OurValuesSection() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-brand-surface-muted border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div
            data-animate="fade-up"
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-brand-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              {t.aboutPage.values.sectionLabel}
            </span>
          </div>
          <h2
            data-animate="fade-up"
            className="font-display text-[clamp(2rem,3.5vw,3.1rem)] text-brand-ink leading-[1.15] tracking-tight mb-4"
          >
            {t.aboutPage.values.headline}
          </h2>
          <p
            data-animate="fade-up"
            className="text-sm sm:text-base text-brand-slate leading-relaxed"
          >
            {t.aboutPage.values.description}
          </p>
        </div>

        {/* 6-Card Editorial Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_VALUES_DATA.map((item) => {
            const IconComponent = ICON_MAP[item.iconName] || Scale;
            return (
              <article
                key={item.id}
                data-animate="fade-up"
                className="group bg-white border border-brand-border hover:border-brand-primary transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between shadow-subtle"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-border">
                    <span className="font-mono text-xs font-semibold tracking-widest text-brand-secondary">
                      / {item.number}
                    </span>
                    <div className="w-9 h-9 bg-brand-surface-muted group-hover:bg-brand-secondary-light text-brand-primary flex items-center justify-center transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Value Title */}
                  <h3 className="font-display text-2xl text-brand-ink group-hover:text-brand-primary transition-colors mb-3">
                    {item.title[locale]}
                  </h3>

                  {/* Value Description */}
                  <p className="text-sm text-brand-slate leading-relaxed mb-6">
                    {item.description[locale]}
                  </p>
                </div>

                {/* Principle Tag Footer */}
                {/* <div className="pt-4 border-t border-brand-border">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-brand-primary">
                    {item.principleTag[locale]}
                  </span>
                </div> */}
              </article>
            );
          })}
        </div>

        {/* Bottom Consultation Strip */}
        <div
          data-animate="fade-up"
          className="mt-14 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-sm font-medium text-brand-ink">
            {t.aboutPage.values.bottomCtaPrompt}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-colors"
          >
            <span>{t.aboutPage.values.bottomCtaButton}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}