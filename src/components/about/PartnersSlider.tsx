// src/components/about/PartnersSlider.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

import { PARTNER_SLOTS_DATA } from "@/data/siteContent";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal, prefersReducedMotion } from "@/lib/animations";

export function PartnersSlider() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        {/* Header & Navigation Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {t.aboutPage.partners.sectionLabel}
              </span>
            </div>
            <h2
              data-animate="fade-up"
              className="font-display text-[clamp(1.85rem,3.2vw,2.85rem)] text-brand-ink leading-[1.15] tracking-tight mb-4"
            >
              {t.aboutPage.partners.headline}
            </h2>
            <p
              data-animate="fade-up"
              className="text-sm sm:text-base text-brand-slate leading-relaxed"
            >
              {t.aboutPage.partners.description}
            </p>
          </div>

          <div
            data-animate="fade-up"
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            {/* <span className="inline-flex items-center px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest bg-brand-secondary-light text-brand-primary border border-brand-secondary/30">
              {t.aboutPage.partners.placeholderBadge}
            </span> */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label={t.aboutPage.partners.prevPartnerLabel}
                className="p-3 bg-white border border-brand-border text-brand-ink hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label={t.aboutPage.partners.nextPartnerLabel}
                className="p-3 bg-white border border-brand-border text-brand-ink hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Partner Showcase Carousel */}
        <div data-animate="fade-up">
          <Swiper
            modules={[Autoplay, Navigation, Keyboard, A11y]}
            loop={PARTNER_SLOTS_DATA.length >= 4}
            watchOverflow={true}
            speed={750}
            spaceBetween={20}
            slidesPerView={1.15}
            keyboard={{ enabled: true }}
            autoplay={
              prefersReducedMotion()
                ? false
                : {
                    delay: 3600,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {PARTNER_SLOTS_DATA.map((partner) => (
              <SwiperSlide key={partner.id} className="!h-auto">
                <div className="group h-full min-h-[210px] bg-brand-surface-muted border border-brand-border hover:border-brand-primary transition-all duration-300 p-6 flex flex-col justify-between">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-2 border-b border-brand-border pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-primary">
                      {partner.code}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-secondary">
                      {partner.category[locale]}
                    </span>
                  </div>

                  {/* Logo Lockup Container Maintaining Original Aspect Ratio */}
                  <div className="py-6 flex flex-col items-center justify-center text-center">
                    <div className="relative h-9 w-36 mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <Image
                        src="/images/lrs-logo.png"
                        alt={partner.name[locale]}
                        fill
                        sizes="150px"
                        className="object-contain"
                      />
                    </div>
                    <p className="font-display text-lg text-brand-ink leading-snug">
                      {partner.name[locale]}
                    </p>
                  </div>

                  {/* Editable Slot Caption */}
                  <div className="border-t border-brand-border pt-3 text-[11px] text-brand-slate text-center">
                    {partner.subtitle[locale]}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footnote Disclaimer */}
        {/* <p
          data-animate="fade-up"
          className="mt-8 text-xs text-brand-slate leading-relaxed"
        >
          {t.aboutPage.partners.footnote}
        </p> */}
      </div>
    </section>
  );
}