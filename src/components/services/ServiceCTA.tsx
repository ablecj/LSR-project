// src/components/services/ServiceCTA.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Phone, ShieldAlert } from "lucide-react";
import { BROCHURE_CONTACT_INFO } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal } from "@/lib/animations";

export function ServiceCTA() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, [locale]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        <div
          data-animate="fade-up"
          className="relative bg-brand-primary-deep text-white border border-brand-primary-deep p-8 sm:p-12 lg:p-16 shadow-elevated overflow-hidden"
        >
          {/* Subtle Architectural Orbital Watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 w-[380px] h-[380px] opacity-[0.07]"
          >
            <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
              <circle
                cx="200"
                cy="200"
                r="170"
                stroke="#10A5AC"
                strokeWidth="18"
                strokeDasharray="260 90"
              />
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="#FFFFFF"
                strokeWidth="18"
                strokeDasharray="200 75"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Consultation Narrative & Actions */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-brand-secondary" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
                  {t.servicesPage.cta.sectionLabel}
                </span>
              </div>

              <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] text-white leading-[1.15] tracking-tight mb-5">
                {t.servicesPage.cta.headline}
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-2xl">
                {t.servicesPage.cta.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 bg-brand-secondary hover:bg-white hover:text-brand-primary-deep text-white text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-colors duration-300"
                >
                  <span>{t.servicesPage.cta.primaryButton}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2.5 border border-white/25 hover:border-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-4 transition-colors duration-300"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-secondary" />
                  <span>{BROCHURE_CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Verified Brochure Advisory Coordinates */}
            <div className="lg:col-span-5 bg-white/5 border border-white/15 p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-brand-secondary mb-5">
                {BROCHURE_CONTACT_INFO.officeName[locale]}
              </p>

              <div className="space-y-4 text-sm text-white/85">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-1" />
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-white/60">
                      {t.servicesPage.cta.officeLabel}
                    </span>
                    <span className="block text-xs sm:text-sm text-white mt-0.5">
                      {BROCHURE_CONTACT_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-brand-secondary shrink-0 mt-1" />
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-white/60">
                      {t.servicesPage.cta.emailLabel}
                    </span>
                    <a
                      href={`mailto:${BROCHURE_CONTACT_INFO.email}`}
                      className="block text-xs sm:text-sm text-white hover:text-brand-secondary transition-colors mt-0.5"
                    >
                      {BROCHURE_CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-brand-secondary shrink-0 mt-1" />
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-white/60">
                      {t.servicesPage.cta.phoneLabel}
                    </span>
                    <a
                      href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                      className="block text-xs sm:text-sm text-white hover:text-brand-secondary transition-colors mt-0.5"
                    >
                      {BROCHURE_CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Regulatory Distinction Footnote */}
          <div className="relative z-10 mt-10 pt-6 border-t border-white/15 flex items-start gap-3 text-xs text-white/65 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
            <p>{t.servicesPage.cta.regulatoryNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
