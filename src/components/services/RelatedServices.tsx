// src/components/services/RelatedServices.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceData } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal } from "@/lib/animations";

interface RelatedServicesProps {
  services: ServiceData[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, [locale]);

  if (!services || services.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-brand-surface-muted border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {t.servicesPage.detail.relatedSectionLabel}
              </span>
            </div>

            <h2
              data-animate="fade-up"
              className="font-display text-[clamp(1.9rem,3.3vw,2.9rem)] text-brand-ink leading-[1.15] tracking-tight"
            >
              {t.servicesPage.detail.relatedHeadline}
            </h2>
          </div>

          <Link
            href="/services"
            data-animate="fade-up"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary hover:text-brand-secondary transition-colors"
          >
            <span>{t.servicesPage.detail.backToServices}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map((item) => (
            <article
              key={item.id}
              data-animate="fade-up"
              className="group bg-white border border-brand-border hover:border-brand-primary transition-all duration-300 flex flex-col justify-between shadow-subtle"
            >
              <div>
                <Link
                  href={`/services/${item.slug}`}
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-brand-primary-deep"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary-deep/90 text-white text-[11px] font-mono px-2.5 py-1 tracking-widest">
                    {item.code}
                  </div>
                </Link>

                <div className="p-6 sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-secondary mb-2">
                    {item.category[locale]}
                  </p>
                  <h3 className="font-display text-2xl text-brand-ink leading-snug mb-3 group-hover:text-brand-primary transition-colors">
                    <Link href={`/services/${item.slug}`}>
                      {item.title[locale]}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-slate leading-relaxed">
                    {item.shortDescription[locale]}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-brand-border mt-auto">
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary group-hover:text-brand-secondary transition-colors"
                >
                  <span>{t.servicesPage.collection.viewServiceCta}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
