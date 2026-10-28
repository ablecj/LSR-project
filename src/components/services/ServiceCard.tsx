// src/components/services/ServiceCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ServiceData } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { locale, t } = useLanguage();
  const isReversed = index % 2 === 1;
  const detailHref = `/services/${service.slug}`;

  return (
    <article
      data-service-row
      className="group relative bg-white border border-brand-border hover:border-brand-primary transition-all duration-500 shadow-subtle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Visual Column: Alternates Left/Right on Desktop */}
        <div
          className={`lg:col-span-5 relative min-h-[290px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-brand-primary-deep ${
            isReversed ? "lg:order-2 lg:border-l" : "lg:border-r"
          } border-b lg:border-b-0 border-brand-border`}
        >
          <Link
            href={detailHref}
            aria-label={service.title[locale]}
            className="block w-full h-full relative"
          >
            <Image
              src={service.image}
              alt={service.imageAlt[locale]}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5, 44, 54, 0.25) 0%, rgba(5, 44, 54, 0.72) 100%)",
              }}
            />

            {/* Top Left Number & Code Badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2.5 z-10">
              {/* <span className="bg-brand-primary-deep/95 text-white font-mono text-xs font-semibold px-3 py-1.5 tracking-[0.2em] border border-white/15">
                {service.code}
              </span> */}
              {service.abbreviation && (
                <span className="bg-brand-secondary text-white font-mono text-[11px] font-semibold uppercase px-2.5 py-1.5 tracking-widest">
                  {service.abbreviation}
                </span>
              )}
            </div>

            {/* Bottom Image Overlay Caption & Hover Arrow */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 z-10">
              {service.statutoryBasis && (
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/90 bg-brand-primary-deep/80 backdrop-blur-sm px-3 py-1.5 border border-white/15">
                  {service.statutoryBasis[locale]}
                </span>
              )}
              <span className="w-10 h-10 bg-white text-brand-primary-deep group-hover:bg-brand-secondary group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 ml-auto">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </div>

        {/* Editorial Content Column */}
        <div
          className={`lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between ${
            isReversed ? "lg:order-1" : ""
          }`}
        >
          <div>
            {/* Top Category & Number Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-brand-border">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-brand-secondary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                  {service.category[locale]}
                </span>
              </div>
              {/* <span className="font-mono text-xs text-brand-slate">
                / {service.code}
              </span> */}
            </div>

            {/* Service Title */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.1rem] text-brand-ink leading-[1.16] tracking-tight mb-3 group-hover:text-brand-primary transition-colors">
              <Link href={detailHref} className="focus:outline-none">
                {service.title[locale]}
              </Link>
            </h3>

            {/* Preserve Official English Title when viewing in Malayalam */}
            {locale === "ml" && (
              <p className="text-xs font-mono uppercase tracking-wider text-brand-primary mb-3">
                {service.officialName}
              </p>
            )}

            {/* Brochure Short Description */}
            <p className="text-base text-brand-ink/90 font-medium leading-relaxed mb-3">
              {service.shortDescription[locale]}
            </p>

            {/* Supporting Editorial Context */}
            <p className="text-sm text-brand-slate leading-relaxed mb-7">
              {service.introduction[locale]}
            </p>

            {/* Key Programme Parameters Grid */}
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary mb-3">
                {t.servicesPage.collection.keyParametersLabel}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.highlights.slice(0, 4).map((item) => (
                  <div
                    key={item.label.en}
                    className="bg-brand-surface-muted border border-brand-border p-3.5 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-slate">
                        {item.label[locale]}
                      </span>
                      <span className="block text-xs sm:text-sm font-medium text-brand-ink mt-0.5 leading-snug">
                        {item.value[locale]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-5 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
            <Link
              href={detailHref}
              className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors duration-300"
            >
              <span>{t.servicesPage.collection.viewServiceCta}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary hover:text-brand-secondary transition-colors"
            >
              <span>{t.servicesPage.collection.inquireServiceCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
