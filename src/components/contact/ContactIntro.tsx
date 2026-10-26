// src/components/contact/ContactIntro.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal, prefersReducedMotion } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ContactIntro() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    createSectionReveal(container);

    if (prefersReducedMotion() || !imageFrameRef.current) return;

    const ctx = gsap.context(() => {
      const primaryImg = imageFrameRef.current?.querySelector(
        "[data-contact-intro-image]"
      );
      if (primaryImg) {
        gsap.fromTo(
          primaryImg,
          { scale: 1.06, autoAlpha: 0.85 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageFrameRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [locale]);

  const intro = t.contactPage.intro;

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow, Heading, Paragraph & Verified Contact Coordinates */}
          <div className="lg:col-span-7">
            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {intro.eyebrow}
              </span>
            </div>

            <h2
              data-animate="fade-up"
              className="font-display text-[clamp(2rem,3.6vw,3.25rem)] text-brand-ink leading-[1.14] tracking-tight mb-6"
            >
              {intro.headline}
            </h2>

            <p
              data-animate="fade-up"
              className="font-sans text-[16px] sm:text-lg font-normal text-brand-ink/90 leading-[28px] mb-[15px]"
            >
              {intro.leadParagraph}
            </p>

            <p
              data-animate="fade-up"
              className="font-sans text-[16px] font-normal text-brand-slate leading-[28px] mb-8"
            >
              {intro.secondaryParagraph}
            </p>

            {/* Verified Advisory Coordinates Block */}
            <div
              data-animate="fade-up"
              className="border-t border-brand-border pt-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                  {intro.coordinatesHeading}
                </h3>
                <span className="inline-block bg-brand-secondary-light text-brand-primary text-[10px] font-mono font-semibold uppercase tracking-widest px-3 py-1 border border-brand-secondary/30">
                  {intro.coordinatesBadge}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Office Address */}
                <div className="bg-brand-surface-muted border border-brand-border p-5 flex items-start gap-4">
                  <div className="w-9 h-9 bg-white border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin className="w-4 h-4 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">
                      {intro.officeLabel}
                    </p>
                    <p className="text-sm text-brand-slate leading-relaxed mt-1">
                      {intro.officeValue}
                    </p>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="bg-brand-surface-muted border border-brand-border p-5 flex items-start gap-4">
                  <div className="w-9 h-9 bg-white border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                    <Mail className="w-4 h-4 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">
                      {intro.emailLabel}
                    </p>
                    <a
                      href={`mailto:${intro.emailValue}`}
                      className="inline-block text-sm text-brand-slate hover:text-brand-primary transition-colors mt-1 break-all"
                    >
                      {intro.emailValue}
                    </a>
                  </div>
                </div>

                {/* Direct Telephone */}
                <div className="bg-brand-surface-muted border border-brand-border p-5 flex items-start gap-4">
                  <div className="w-9 h-9 bg-white border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                    <Phone className="w-4 h-4 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">
                      {intro.phoneLabel}
                    </p>
                    <a
                      href={`tel:${intro.phoneValue.replace(/\s+/g, "")}`}
                      className="inline-block text-sm text-brand-slate hover:text-brand-primary transition-colors mt-1"
                    >
                      {intro.phoneValue}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-brand-surface-muted border border-brand-border p-5 flex items-start gap-4">
                  <div className="w-9 h-9 bg-white border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                    <Clock className="w-4 h-4 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">
                      {intro.hoursLabel}
                    </p>
                    <p className="text-sm text-brand-slate leading-relaxed mt-1">
                      {intro.hoursValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Architectural Image Composition */}
          <div
            ref={imageFrameRef}
            className="lg:col-span-5 lg:sticky lg:top-28"
            data-animate="fade-up"
          >
            <div className="bg-brand-surface-muted p-4 sm:p-6 border border-brand-border shadow-subtle">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-primary-deep">
                <div data-contact-intro-image className="relative w-full h-full">
                  <Image
                    src="/images/about-editorial.jpg"
                    alt={intro.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-3 left-3 bg-brand-primary-deep/90 text-white text-[10px] font-mono uppercase tracking-[0.18em] px-3 py-1.5 border border-white/15">
                  {intro.imageCaptionBadge}
                </div>
              </div>

              {/* Secondary Detail Frame */}
              <div className="grid grid-cols-12 gap-4 mt-4 items-center">
                <div className="col-span-5 relative aspect-[4/3] overflow-hidden border border-brand-border bg-brand-primary-deep">
                  <Image
                    src="/images/service-immigration.jpg"
                    alt={intro.secondaryImageAlt}
                    fill
                    sizes="(max-width: 1024px) 40vw, 18vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="col-span-7 pl-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-secondary mb-1">
                    {intro.secondaryFrameLabel}
                  </p>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {intro.secondaryFrameDescription}
                  </p>
                </div>
              </div>

              {/* Bottom Caption Bar */}
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-brand-border pt-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                    {intro.imageCaptionTitle}
                  </p>
                  <p className="text-xs text-brand-slate mt-0.5">
                    {intro.imageCaptionSubtitle}
                  </p>
                </div>
                <Image
                  src="/images/lrs-logo.png"
                  alt="LRS — Legal & Relocation Services"
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