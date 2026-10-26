// src/app/services/[slug]/not-found.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceNotFound() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-brand-ink flex flex-col justify-between">
      <Navbar />

      <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-brand-primary-deep text-white border-b border-brand-border flex-1 flex items-center">
        <div className="max-w-editorial mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-brand-secondary mb-4">
              404 / PROGRAMME NOT FOUND
            </span>
            <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-5">
              {t.servicesPage.detail.notFoundTitle}
            </h1>
            <p className="text-base text-white/80 leading-relaxed mb-8">
              {t.servicesPage.detail.notFoundDescription}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 bg-brand-secondary hover:bg-white hover:text-brand-primary-deep text-white text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.servicesPage.detail.backToServices}</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 border border-white/25 hover:border-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 transition-colors"
              >
                <span>{t.servicesPage.cta.primaryButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
