// src/components/services/ServicesGrid.tsx
"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MALTA_SERVICES_DATA } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal, prefersReducedMotion } from "@/lib/animations";
import { ServiceCard } from "./ServiceCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesGrid() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    createSectionReveal(container);

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const rows = container.querySelectorAll("[data-service-row]");
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 84%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [locale]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="services-collection-heading"
      className="py-24 lg:py-32 bg-brand-surface-muted border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div
            data-animate="fade-up"
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-brand-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              {t.servicesPage.collection.sectionLabel}
            </span>
          </div>

          <h2
            id="services-collection-heading"
            data-animate="fade-up"
            className="font-display text-[clamp(2rem,3.5vw,3.1rem)] text-brand-ink leading-[1.15] tracking-tight mb-4"
          >
            {t.servicesPage.collection.headline}
          </h2>

          <p
            data-animate="fade-up"
            className="text-sm sm:text-base text-brand-slate leading-relaxed"
          >
            {t.servicesPage.collection.description}
          </p>
        </div>

        {/* Art-Directed Alternating Editorial Rows */}
        <div className="space-y-12 lg:space-y-16">
          {MALTA_SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
