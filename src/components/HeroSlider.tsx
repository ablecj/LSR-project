"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import gsap from "gsap";
import { ArrowUpRight, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

import { HERO_SLIDES } from "@/data/siteContent";
import { useLanguage } from "@/context/LanguageContext";
import { prefersReducedMotion } from "@/lib/animations";

export function HeroSlider() {
  const { locale, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const slideContainerRef = useRef<HTMLDivElement | null>(null);
  const activeTweenRef = useRef<gsap.core.Timeline | null>(null);

  const animateSlideContent = useCallback((index: number) => {
    if (!slideContainerRef.current || prefersReducedMotion()) return;

    if (activeTweenRef.current) {
      activeTweenRef.current.kill();
    }

    const activeSlideEl = slideContainerRef.current.querySelector(
      `[data-hero-slide="${index}"]`
    );
    if (!activeSlideEl) return;

    const eyebrow = activeSlideEl.querySelector("[data-hero-eyebrow]");
    const lines = activeSlideEl.querySelectorAll("[data-hero-line]");
    const desc = activeSlideEl.querySelector("[data-hero-desc]");
    const ctas = activeSlideEl.querySelector("[data-hero-ctas]");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    activeTweenRef.current = tl;

    if (eyebrow) {
      tl.fromTo(
        eyebrow,
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.55 },
        0.1
      );
    }
    if (lines.length) {
      tl.fromTo(
        lines,
        { yPercent: 100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.75, stagger: 0.1 },
        0.2
      );
    }
    if (desc) {
      tl.fromTo(
        desc,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.65 },
        0.45
      );
    }
    if (ctas) {
      tl.fromTo(
        ctas,
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 },
        0.58
      );
    }
  }, []);

  useEffect(() => {
    animateSlideContent(activeIndex);
    return () => {
      if (activeTweenRef.current) {
        activeTweenRef.current.kill();
      }
    };
  }, [activeIndex, locale, animateSlideContent]);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPaused) {
      swiperRef.current.autoplay.start();
      setIsPaused(false);
    } else {
      swiperRef.current.autoplay.stop();
      setIsPaused(true);
    }
  };

  return (
    <section
      id="home"
      aria-label="Featured Legal and Relocation Highlights"
      ref={slideContainerRef}
      className="relative w-full h-[100svh] min-h-[680px] bg-brand-primary-deep text-white overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        loop={true}
        keyboard={{ enabled: true }}
        autoplay={
          prefersReducedMotion()
            ? false
            : {
                delay: 6500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="w-full h-full"
      >
        {HERO_SLIDES.map((slide, idx) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div
              data-hero-slide={idx}
              className="relative w-full h-full flex items-center"
            >
              {/* Full-bleed Architectural Photography */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt[locale]}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover object-center scale-[1.02] transition-transform duration-[7000ms] ease-out"
                />
                {/* Art-directed Petrol & Charcoal Readability Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, rgba(5, 44, 54, 0.90) 0%, rgba(11, 92, 112, 0.72) 52%, rgba(5, 44, 54, 0.45) 100%)",
                  }}
                />
              </div>

              {/* Editorial Content Container */}
              <div className="relative z-10 max-w-editorial mx-auto w-full px-6 lg:px-12 pt-24 pb-16">
                <div className="max-w-3xl">
                  {/* Eyebrow */}
                  <div
                    data-hero-eyebrow
                    className="inline-flex items-center gap-3 mb-6"
                  >
                    <span className="w-8 h-[2px] bg-brand-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                      {slide.eyebrow[locale]}
                    </span>
                  </div>

                  {/* Staggered Editorial Headline Lines */}
                  <h1 className="font-display font-medium text-white text-[clamp(2.35rem,5vw,1.5rem)] leading-[1.08] tracking-tight mb-7">
                    {slide.headline[locale].map((line, lineIdx) => (
                      <span
                        key={lineIdx}
                        className="block overflow-hidden pb-1"
                      >
                        <span data-hero-line className="block">
                          {line}
                        </span>
                      </span>
                    ))}
                  </h1>

                  {/* Supporting Description */}
                  <p
                    data-hero-desc
                    className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed font-normal mb-10"
                  >
                    {slide.description[locale]}
                  </p>

                  {/* Primary & Secondary CTAs */}
                  <div
                    data-hero-ctas
                    className="flex flex-wrap items-center gap-4"
                  >
                    <a
                      href={slide.primaryHref}
                      className="inline-flex items-center gap-3 bg-brand-secondary hover:bg-brand-primary text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-all duration-300"
                    >
                      <span>{slide.primaryCta[locale]}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={slide.secondaryHref}
                      className="inline-flex items-center gap-3 border border-white/35 hover:border-white bg-white/5 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] px-7 py-4 backdrop-blur-sm transition-all duration-300"
                    >
                      <span>{slide.secondaryCta[locale]}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Bar: Slide Counter, Pagination Indicators & Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-brand-primary-deep/65 backdrop-blur-md">
        <div className="max-w-editorial mx-auto px-6 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Slide Counter & Progress Dots */}
          <div className="flex items-center gap-6">
            <div className="text-xs font-mono tracking-widest text-white/90">
              <span className="text-brand-secondary font-semibold">
                0{activeIndex + 1}
              </span>
              <span className="mx-2 text-white/40">/</span>
              <span>0{HERO_SLIDES.length}</span>
            </div>

            <div className="flex items-center gap-2.5" role="tablist">
              {HERO_SLIDES.map((s, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Slide ${idx + 1}`}
                    onClick={() => swiperRef.current?.slideToLoop(idx)}
                    className={`h-1.5 transition-all duration-500 ${
                      isActive
                        ? "w-10 bg-brand-secondary"
                        : "w-4 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleAutoplay}
              aria-label={
                isPaused ? t.hero.resumeAutoplayLabel : t.hero.pauseAutoplayLabel
              }
              className="p-2.5 border border-white/20 text-white/85 hover:text-white hover:border-brand-secondary transition-colors"
            >
              {isPaused ? (
                <Play className="w-3.5 h-3.5" />
              ) : (
                <Pause className="w-3.5 h-3.5" />
              )}
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label={t.hero.prevSlideLabel}
              className="p-2.5 border border-white/20 text-white/85 hover:text-white hover:border-brand-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label={t.hero.nextSlideLabel}
              className="p-2.5 border border-white/20 text-white/85 hover:text-white hover:border-brand-secondary transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
