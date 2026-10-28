// src/components/services/ServiceDetailHero.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { ServiceData } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { prefersReducedMotion } from "@/lib/animations";

interface ServiceDetailHeroProps {
  service: ServiceData;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const { locale, t } = useLanguage();
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = heroRef.current;
    if (!container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const bgImage = container.querySelector("[data-detail-hero-bg]");
      const breadcrumb = container.querySelector("[data-detail-hero-breadcrumb]");
      const eyebrow = container.querySelector("[data-detail-hero-eyebrow]");
      const title = container.querySelector("[data-detail-hero-title]");
      const meta = container.querySelector("[data-detail-hero-meta]");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (bgImage) {
        tl.fromTo(
          bgImage,
          { scale: 1.07, autoAlpha: 0.7 },
          { scale: 1, autoAlpha: 1, duration: 1.4, ease: "power2.out" },
          0
        );
      }
      if (breadcrumb) {
        tl.fromTo(
          breadcrumb,
          { y: 14, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.55 },
          0.12
        );
      }
      if (eyebrow) {
        tl.fromTo(
          eyebrow,
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          0.2
        );
      }
      if (title) {
        tl.fromTo(
          title,
          { yPercent: 100, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 0.8 },
          0.28
        );
      }
      if (meta) {
        tl.fromTo(
          meta,
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65 },
          0.42
        );
      }
    }, container);

    return () => ctx.revert();
  }, [locale, service.slug]);

  return (
    <section
      ref={heroRef}
      aria-label={service.title[locale]}
      className="relative w-full min-h-[480px] lg:min-h-[540px] bg-brand-primary-deep text-white overflow-hidden flex items-end border-b border-brand-border"
    >
      {/* Background Architectural Image */}
      <div data-detail-hero-bg className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.imageAlt[locale]}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(5, 44, 54, 0.95) 0%, rgba(11, 92, 112, 0.82) 55%, rgba(5, 44, 54, 0.68) 100%)",
          }}
        />
      </div>

      {/* Subtle Architectural Grid Hairline Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] max-w-editorial mx-auto border-x border-white/10"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-editorial mx-auto w-full px-6 lg:px-12 pt-32 pb-12 sm:pb-16">
        {/* Top Row: Breadcrumb & Back Link */}
        <div
          data-detail-hero-breadcrumb
          className="flex flex-wrap items-center justify-between gap-4 mb-6"
        >
          <nav aria-label="Breadcrumb">
            <ol className="inline-flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-secondary transition-colors"
                >
                  {t.servicesPage.hero.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-brand-secondary" />
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-secondary transition-colors"
                >
                  {t.servicesPage.hero.breadcrumbCurrent}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-brand-secondary" />
              </li>
              {/* <li
                aria-current="page"
                className="text-brand-secondary font-semibold"
              >
                {service.abbreviation || service.code}
              </li> */}
            </ol>
          </nav>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white/80 hover:text-brand-secondary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-brand-secondary" />
            <span>{t.servicesPage.detail.backToServices}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            {/* Eyebrow & Code */}
            <div
              data-detail-hero-eyebrow
              className="inline-flex flex-wrap items-center gap-3 mb-4"
            >
              {/* <span className="bg-brand-secondary text-white font-mono text-xs font-semibold px-2.5 py-1 tracking-widest">
                {service.code}
              </span> */}
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
                {service.category[locale]}
              </span>
            </div>

            {/* Masked Main Page Title */}
            <h1 className="font-display font-medium text-white text-[clamp(2.2rem,4.5vw,3.9rem)] leading-[1.1] tracking-tight overflow-hidden pb-1">
              <span data-detail-hero-title className="block">
                {service.title[locale]}
              </span>
            </h1>
          </div>

          {/* Right Column: Official Programme Designation Box */}
          <div data-detail-hero-meta className="lg:col-span-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5">
              <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-brand-secondary mb-1.5">
                {t.servicesPage.detail.officialProgrammeLabel}
              </span>
              <p className="text-sm font-semibold text-white leading-snug">
                {service.officialName}
              </p>
              {/* {service.statutoryBasis && (
                <p className="text-xs text-white/75 mt-2 pt-2 border-t border-white/15">
                  {service.statutoryBasis[locale]}
                </p>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
