// src/components/services/ServiceContent.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle2,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  FileCheck2,
  Landmark,
  FlaskConical,
  Search,
  Trophy,
  Lightbulb,
  Palette,
  Cpu,
  HeartHandshake,
  ChevronDown,
} from "lucide-react";
import {
  ServiceData,
  ServiceEligibleProfile,
  MALTA_SERVICES_DATA,
  BROCHURE_CONTACT_INFO,
} from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal, prefersReducedMotion } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROFILE_ICON_MAP: Record<
  ServiceEligibleProfile["iconKey"],
  React.ElementType
> = {
  flask: FlaskConical,
  search: Search,
  trophy: Trophy,
  lightbulb: Lightbulb,
  palette: Palette,
  cpu: Cpu,
  heartHandshake: HeartHandshake,
};

interface ServiceContentProps {
  service: ServiceData;
}

export function ServiceContent({ service }: ServiceContentProps) {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    createSectionReveal(container);

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const blocks = container.querySelectorAll("[data-detail-block]");
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { y: 32, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [locale, service.slug]);

  const hasEligibilityOrConditions =
    Boolean(service.eligibility?.length) ||
    Boolean(service.conditions?.length) ||
    Boolean(service.taxBenefits?.length);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Structured Programme Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* 1. Editorial Introduction & Official Brochure Summary */}
            <div
              data-detail-block
              className="bg-brand-surface-muted border border-brand-border p-7 sm:p-10 shadow-subtle"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-brand-border">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  {t.servicesPage.detail.editorialIntroLabel}
                </span>
                <span className="font-mono text-xs text-brand-secondary font-semibold">
                  {service.officialName}
                </span>
              </div>

              <p className="font-display text-2xl sm:text-[1.75rem] text-brand-ink leading-[1.3] mb-5">
                {service.shortDescription[locale]}
              </p>

              <p className="text-base text-brand-slate leading-relaxed">
                {service.introduction[locale]}
              </p>
            </div>

            {/* 2. Programme Overview (Rendered Conditionally) */}
            {service.overview && (
              <div data-detail-block className="border-t border-brand-border pt-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-brand-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    {t.servicesPage.detail.overviewSectionLabel}
                  </span>
                </div>

                <h2 className="font-display text-[clamp(1.85rem,3vw,2.6rem)] text-brand-ink leading-[1.16] tracking-tight mb-5">
                  {t.servicesPage.detail.overviewHeadline}
                </h2>

                <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
                  {service.overview[locale]}
                </p>
              </div>
            )}

            {/* 3. Key Information / Highlights */}
            {service.highlights && service.highlights.length > 0 && (
              <div data-detail-block className="border-t border-brand-border pt-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-brand-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    {t.servicesPage.detail.highlightsSectionLabel}
                  </span>
                </div>

                <h2 className="font-display text-[clamp(1.85rem,3vw,2.6rem)] text-brand-ink leading-[1.16] tracking-tight mb-8">
                  {t.servicesPage.detail.highlightsHeadline}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.highlights.map((item, idx) => (
                    <div
                      key={item.label.en}
                      className="bg-brand-surface-muted border border-brand-border p-6 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-border">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary">
                          {item.label[locale]}
                        </span>
                        <span className="font-mono text-xs text-brand-secondary">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="font-display text-xl sm:text-2xl text-brand-ink leading-snug">
                        {item.value[locale]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Eligibility, Tax Benefits & Programme Conditions (Rendered Conditionally) */}
            {hasEligibilityOrConditions && (
              <div data-detail-block className="border-t border-brand-border pt-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-brand-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    {t.servicesPage.detail.eligibilitySectionLabel}
                  </span>
                </div>

                <h2 className="font-display text-[clamp(1.85rem,3vw,2.6rem)] text-brand-ink leading-[1.16] tracking-tight mb-8">
                  {t.servicesPage.detail.eligibilityHeadline}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Eligibility Column */}
                  {service.eligibility && service.eligibility.length > 0 && (
                    <div className="bg-white border border-brand-border p-6 sm:p-8 shadow-subtle">
                      <div className="flex items-center gap-3 pb-4 mb-5 border-b border-brand-border">
                        <div className="w-9 h-9 bg-brand-secondary-light text-brand-primary flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-xl text-brand-ink">
                          {t.servicesPage.detail.eligibilityHeadline}
                        </h3>
                      </div>

                      <ul className="space-y-3.5">
                        {service.eligibility.map((item) => (
                          <li
                            key={item.en}
                            className="flex items-start gap-3 text-sm text-brand-ink/90 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0 mt-1" />
                            <span>{item[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tax Benefits Column (MRP / GRP) */}
                  {service.taxBenefits && service.taxBenefits.length > 0 && (
                    <div className="bg-brand-primary-deep text-white border border-brand-primary-deep p-6 sm:p-8 shadow-subtle">
                      <div className="flex items-center gap-3 pb-4 mb-5 border-b border-white/15">
                        <div className="w-9 h-9 bg-white/10 text-brand-secondary flex items-center justify-center shrink-0">
                          <Landmark className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-xl text-white">
                          {service.taxHeading
                            ? service.taxHeading[locale]
                            : "Tax Treatment"}
                        </h3>
                      </div>

                      <ul className="space-y-3.5">
                        {service.taxBenefits.map((item) => (
                          <li
                            key={item.en}
                            className="flex items-start gap-3 text-sm text-white/90 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0 mt-1" />
                            <span>{item[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Programme Conditions / Obligations Column (MPRP / GRP) */}
                  {service.conditions && service.conditions.length > 0 && (
                    <div
                      className={`bg-brand-surface-muted border border-brand-border p-6 sm:p-8 shadow-subtle ${
                        service.taxBenefits ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 pb-4 mb-5 border-b border-brand-border">
                        <div className="w-9 h-9 bg-white border border-brand-border text-brand-primary flex items-center justify-center shrink-0">
                          <FileCheck2 className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-xl text-brand-ink">
                          {service.conditionsHeading
                            ? service.conditionsHeading[locale]
                            : "Programme Conditions"}
                        </h3>
                      </div>

                      <ul
                        className={`grid grid-cols-1 ${
                          service.taxBenefits ? "sm:grid-cols-3" : ""
                        } gap-3.5`}
                      >
                        {service.conditions.map((item) => (
                          <li
                            key={item.en}
                            className="flex items-start gap-3 text-sm text-brand-ink/90 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0 mt-1" />
                            <span>{item[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 5. Process / Application Steps (Rendered Conditionally — e.g., Citizenship by Merit) */}
            {service.process && service.process.length > 0 && (
              <div data-detail-block className="border-t border-brand-border pt-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-brand-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    {t.servicesPage.detail.processSectionLabel}
                  </span>
                </div>

                <h2 className="font-display text-[clamp(1.85rem,3vw,2.6rem)] text-brand-ink leading-[1.16] tracking-tight mb-8">
                  {t.servicesPage.detail.processHeadline}
                </h2>

                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="bg-brand-surface-muted border border-brand-border p-6 sm:p-7 flex flex-col sm:flex-row sm:items-start gap-5"
                    >
                      <div className="w-12 h-12 bg-brand-primary-deep text-white font-mono text-sm font-semibold flex items-center justify-center shrink-0">
                        {step.stepNumber}
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl text-brand-ink mb-2">
                          {step.title[locale]}
                        </h3>
                        <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                          {step.description[locale]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Eligible Candidate Profiles (Rendered Conditionally — e.g., Citizenship by Merit) */}
            {service.eligibleProfiles && service.eligibleProfiles.length > 0 && (
              <div data-detail-block className="border-t border-brand-border pt-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-brand-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    {t.servicesPage.detail.profilesSectionLabel}
                  </span>
                </div>

                <h2 className="font-display text-[clamp(1.85rem,3vw,2.6rem)] text-brand-ink leading-[1.16] tracking-tight mb-8">
                  {t.servicesPage.detail.profilesHeadline}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {service.eligibleProfiles.map((profile) => {
                    const IconComponent =
                      PROFILE_ICON_MAP[profile.iconKey] || ShieldCheck;
                    return (
                      <div
                        key={profile.id}
                        className="bg-brand-primary text-white p-5 flex flex-col items-start justify-between border border-brand-primary-dark hover:bg-brand-secondary transition-colors duration-300"
                      >
                        <IconComponent className="w-6 h-6 text-brand-secondary-light mb-4" />
                        <span className="text-sm font-semibold leading-snug">
                          {profile.label[locale]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 7. Relevant Supporting Visual Content */}
            <div data-detail-block className="border-t border-brand-border pt-12">
              <div className="bg-brand-surface-muted border border-brand-border p-4 sm:p-6">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-primary-deep">
                  <Image
                    src={service.secondaryImage || service.image}
                    alt={service.imageAlt[locale]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-brand-slate">
                  <span className="font-semibold uppercase tracking-widest text-brand-primary">
                    {t.servicesPage.detail.visualSectionLabel}
                  </span>
                  <span>{t.servicesPage.detail.visualCaption}</span>
                </div>
              </div>
            </div>

            {/* 8. FAQ Section (Rendered Conditionally Only When Verified Answers Exist) */}
            {service.faq && service.faq.length > 0 && (
              <div data-detail-block className="border-t border-brand-border pt-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-brand-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    {t.servicesPage.detail.faqSectionLabel}
                  </span>
                </div>

                <h2 className="font-display text-[clamp(1.85rem,3vw,2.6rem)] text-brand-ink leading-[1.16] tracking-tight mb-8">
                  {t.servicesPage.detail.faqHeadline}
                </h2>

                <div className="space-y-3">
                  {service.faq.map((faqItem, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={faqItem.question.en}
                        className="border border-brand-border bg-brand-surface-muted"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaqIndex(isOpen ? null : idx)
                          }
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-4 p-5 text-left font-medium text-brand-ink hover:text-brand-primary transition-colors"
                        >
                          <span>{faqItem.question[locale]}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-brand-secondary shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-brand-slate leading-relaxed border-t border-brand-border">
                            {faqItem.answer[locale]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 9. Official Programme Information vs. Advisory Notice */}
            <div
              data-detail-block
              className="bg-brand-secondary-light/60 border-l-2 border-brand-secondary p-6"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary mb-2">
                {t.servicesPage.detail.officialNoticeBadge}
              </span>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                {t.servicesPage.detail.officialNoticeBody}
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Consultation & Programme Switcher Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Primary Consultation Card */}
            <div className="bg-brand-primary-deep text-white p-7 sm:p-8 border border-brand-primary-deep shadow-elevated">
              <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] bg-white/10 text-brand-secondary px-2.5 py-1 mb-4">
                {service.code} • {service.abbreviation || "MALTA"}
              </span>

              <h3 className="font-display text-2xl text-white leading-snug mb-3">
                {t.servicesPage.detail.sidebarCardTitle}
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                {t.servicesPage.detail.sidebarCardSubtitle}
              </p>

              <div className="space-y-3">
                <Link
                  href="/#contact"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-secondary hover:bg-white hover:text-brand-primary-deep text-white text-xs font-semibold uppercase tracking-[0.15em] px-5 py-4 transition-colors duration-300"
                >
                  <span>{t.servicesPage.detail.sidebarPrimaryCta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={`mailto:${BROCHURE_CONTACT_INFO.email}?subject=${encodeURIComponent(
                    service.officialName
                  )}`}
                  className="w-full inline-flex items-center justify-center gap-2 border border-white/25 hover:border-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3.5 transition-colors duration-300"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-secondary" />
                  <span>{t.servicesPage.detail.sidebarSecondaryCta}</span>
                </a>
              </div>

              {/* Direct Valletta Coordinates */}
              <div className="mt-7 pt-6 border-t border-white/15 space-y-3 text-xs text-white/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-secondary shrink-0 mt-0.5" />
                  <span>{BROCHURE_CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                  <span>{BROCHURE_CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                  <span>{BROCHURE_CONTACT_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Quick Programme Directory Index */}
            <div className="bg-brand-surface-muted border border-brand-border p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary mb-4">
                {t.servicesPage.collection.sectionLabel}
              </p>
              <ul className="space-y-2">
                {MALTA_SERVICES_DATA.map((item) => {
                  const isCurrent = item.slug === service.slug;
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/services/${item.slug}`}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex items-center justify-between gap-3 px-3.5 py-2.5 text-xs border transition-colors ${
                          isCurrent
                            ? "bg-brand-secondary-light border-brand-secondary text-brand-primary font-semibold"
                            : "bg-white border-brand-border text-brand-ink hover:border-brand-primary"
                        }`}
                      >
                        <span className="truncate">
                          <span className="font-mono text-brand-secondary mr-2">
                            {item.code}
                          </span>
                          {item.title[locale]}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-brand-secondary" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
