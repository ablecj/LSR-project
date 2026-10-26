"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowUpRight, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import "swiper/css";

import { MALTA_SERVICES_DATA } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal, prefersReducedMotion } from "@/lib/animations";

export function ServicesCarousel() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const carouselWrapperRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [equalizedHeight, setEqualizedHeight] = useState<number | null>(null);

  /**
   * Dynamically measures all service cards (including Swiper loop clones)
   * by resetting their inline heights to "auto", finding the maximum natural
   * content height, and applying that uniform pixel height across all slides.
   */
  const equalizeSlideHeights = useCallback(() => {
    const container = carouselWrapperRef.current;
    if (!container) return;

    const slides = Array.from(
      container.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-service-card]")
    );

    if (!cards.length) return;

    slides.forEach((slide) => {
      slide.style.height = "auto";
    });
    cards.forEach((card) => {
      card.style.height = "auto";
    });

    let maxHeight = 0;
    cards.forEach((card) => {
      const naturalHeight = Math.ceil(card.getBoundingClientRect().height);
      if (naturalHeight > maxHeight) {
        maxHeight = naturalHeight;
      }
    });

    if (maxHeight > 0) {
      const heightPx = `${maxHeight}px`;
      slides.forEach((slide) => {
        slide.style.height = heightPx;
      });
      cards.forEach((card) => {
        card.style.height = heightPx;
      });
      setEqualizedHeight(maxHeight);
      swiperRef.current?.updateAutoHeight?.();
    }
  }, []);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, []);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      equalizeSlideHeights();
    });

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        equalizeSlideHeights();
      });
    }

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        equalizeSlideHeights();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(rafId);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [locale, equalizeSlideHeights]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-brand-surface-muted border-b border-brand-border overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {t.services.sectionLabel}
              </span>
            </div>
            <h2
              data-animate="fade-up"
              className="font-display text-[clamp(2rem,3.5vw,3.1rem)] text-brand-ink leading-[1.15] tracking-tight mb-4"
            >
              {t.services.headline}
            </h2>
            <p
              data-animate="fade-up"
              className="text-sm sm:text-base text-brand-slate leading-relaxed"
            >
              {t.services.description}
            </p>
          </div>

          {/* Carousel Controls */}
          <div
            data-animate="fade-up"
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label={t.services.prevLabel}
                className="p-3 bg-white border border-brand-border text-brand-ink hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label={t.services.nextLabel}
                className="p-3 bg-white border border-brand-border text-brand-ink hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Autoplay Infinite Loop Carousel with Dynamic Equal-Height Slides */}
        <div ref={carouselWrapperRef} data-animate="fade-up">
          <Swiper
            modules={[Autoplay, Navigation, Keyboard, A11y]}
            loop={true}
            speed={850}
            spaceBetween={24}
            slidesPerView={1}
            keyboard={{ enabled: true }}
            autoplay={
              prefersReducedMotion()
                ? false
                : {
                    delay: 4200,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            breakpoints={{
              640: { slidesPerView: 1.4, spaceBetween: 24 },
              1024: { slidesPerView: 2.4, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              window.requestAnimationFrame(() => equalizeSlideHeights());
            }}
            onInit={() => equalizeSlideHeights()}
            onResize={() => equalizeSlideHeights()}
            onBreakpoint={() => equalizeSlideHeights()}
            onSlideChangeTransitionEnd={() => equalizeSlideHeights()}
            className="!overflow-visible"
          >
            {MALTA_SERVICES_DATA.map((service) => (
              <SwiperSlide
                key={service.id}
                style={
                  equalizedHeight ? { height: `${equalizedHeight}px` } : undefined
                }
              >
                <article
                  data-service-card
                  style={
                    equalizedHeight
                      ? { height: `${equalizedHeight}px` }
                      : undefined
                  }
                  className="group h-full bg-white border border-brand-border hover:border-brand-primary transition-all duration-300 flex flex-col justify-between shadow-subtle"
                >
                  <div>
                    {/* Service Visual */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="block relative aspect-[4/3] w-full overflow-hidden bg-brand-primary-deep"
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt[locale]}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={() => equalizeSlideHeights()}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-brand-primary-deep/90 text-white text-[11px] font-mono px-2.5 py-1 tracking-widest">
                        {service.code}
                      </div>
                    </Link>

                    {/* Service Body */}
                    <div className="p-6 sm:p-7">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-secondary mb-2">
                        {service.category[locale]}
                      </p>
                      <h3 className="font-display text-2xl text-brand-ink leading-snug mb-3 group-hover:text-brand-primary transition-colors">
                        <Link href={`/services/${service.slug}`}>
                          {service.title[locale]}
                        </Link>
                      </h3>
                      <p className="text-sm text-brand-slate leading-relaxed mb-5">
                        {service.shortDescription[locale]}
                      </p>

                      <ul className="space-y-2 border-t border-brand-border pt-4">
                        {service.highlights.slice(0, 3).map((item) => (
                          <li
                            key={item.label.en}
                            className="flex items-start gap-2 text-xs text-brand-ink/85"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary shrink-0 mt-0.5" />
                            <span>{item.value[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="px-6 sm:px-7 pb-6 pt-2 mt-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary group-hover:text-brand-secondary transition-colors"
                    >
                      <span>{t.services.exploreLink}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div
          data-animate="fade-up"
          className="mt-14 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-xs uppercase tracking-widest text-brand-slate">
            LRS — LEGAL & RELOCATION SERVICES
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-colors"
          >
            <span>{t.services.viewAllCta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
