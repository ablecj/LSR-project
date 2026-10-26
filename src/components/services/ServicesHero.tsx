// src/components/services/ServicesHero.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { prefersReducedMotion } from "@/lib/animations";

export function ServicesHero() {
  const { locale, t } = useLanguage();
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = heroRef.current;
    if (!container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const bgImage = container.querySelector("[data-services-hero-bg]");
      const breadcrumb = container.querySelector("[data-services-hero-breadcrumb]");
      const eyebrow = container.querySelector("[data-services-hero-eyebrow]");
      const title = container.querySelector("[data-services-hero-title]");
      const subtitle = container.querySelector("[data-services-hero-subtitle]");

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
      if (subtitle) {
        tl.fromTo(
          subtitle,
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65 },
          0.42
        );
      }
    }, container);

    return () => ctx.revert();
  }, [locale]);

  return (
    <section
      ref={heroRef}
      aria-label={t.servicesPage.hero.title}
      className="relative w-full h-[52vh] min-h-[440px] max-h-[600px] bg-brand-primary-deep text-white overflow-hidden flex items-end border-b border-brand-border"
    >
      {/* Background Architectural Image with Subtle Reveal */}
      <div data-services-hero-bg className="absolute inset-0 z-0">
        <Image
          src="/images/hero-2.jpg"
          alt={t.servicesPage.hero.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(5, 44, 54, 0.94) 0%, rgba(11, 92, 112, 0.80) 55%, rgba(5, 44, 54, 0.62) 100%)",
          }}
        />
      </div>

      {/* Subtle Architectural Grid Hairline Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] max-w-editorial mx-auto border-x border-white/10"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-editorial mx-auto w-full px-6 lg:px-12 pt-28 pb-12 sm:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            {/* Breadcrumb: Home / Services */}
            <nav
              aria-label="Breadcrumb"
              data-services-hero-breadcrumb
              className="mb-5"
            >
              <ol className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/70">
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
                <li
                  aria-current="page"
                  className="text-brand-secondary font-semibold"
                >
                  {t.servicesPage.hero.breadcrumbCurrent}
                </li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <div
              data-services-hero-eyebrow
              className="inline-flex items-center gap-3 mb-3"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                {t.servicesPage.hero.eyebrow}
              </span>
            </div>

            {/* Masked Main Page Title */}
            <h1 className="font-display font-medium text-white text-[clamp(2.4rem,4.8vw,4.15rem)] leading-[1.08] tracking-tight overflow-hidden pb-1">
              <span data-services-hero-title className="block">
                {t.servicesPage.hero.title}
              </span>
            </h1>
          </div>

          {/* Supporting Statement */}
          <div data-services-hero-subtitle className="lg:max-w-md lg:pb-1">
            <p className="text-sm sm:text-base text-white/85 leading-relaxed border-l-2 border-brand-secondary pl-4">
              {t.servicesPage.hero.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
