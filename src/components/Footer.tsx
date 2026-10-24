"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Globe, Mail, Phone, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_DATA } from "@/data/siteContent";

export function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer className="relative bg-brand-primary-deep text-white overflow-hidden border-t-2 border-brand-secondary">
      {/* Subtle Oversized Brand Orbital Watermark Inspired by LRS Globe Logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -bottom-28 w-[520px] h-[520px] opacity-[0.06]"
      >
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <circle
            cx="200"
            cy="200"
            r="170"
            stroke="#10A5AC"
            strokeWidth="18"
            strokeDasharray="260 90"
          />
          <circle
            cx="200"
            cy="200"
            r="125"
            stroke="#FFFFFF"
            strokeWidth="22"
            strokeDasharray="210 80"
          />
          <circle
            cx="200"
            cy="200"
            r="78"
            stroke="#10A5AC"
            strokeWidth="16"
            strokeDasharray="150 60"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-editorial mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-block mb-6">
              <Image
                src="/images/lrs-logo-light.png"
                alt="LRS — Legal & Relocation Services"
                width={180}
                height={76}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-sm">
              {t.footer.brandStatement}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                aria-label="LinkedIn Placeholder"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-brand-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Global Network Placeholder"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-brand-secondary transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Email Advisory Desk"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-brand-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary mb-5">
              {t.footer.navigationHeading}
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-brand-secondary transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-secondary transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-brand-secondary transition-colors">
                  {t.nav.team}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-secondary transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary mb-5">
              {t.footer.practiceHeading}
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              {SERVICES_DATA.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-brand-secondary transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{service.title[locale]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary mb-4">
              {t.footer.contactHeading}
            </h3>
            <span className="inline-block text-[10px] uppercase tracking-widest bg-white/10 text-brand-secondary px-2.5 py-1 mb-4">
              {t.footer.placeholderBadge}
            </span>
            <div className="space-y-3 text-sm text-white/80">
              <p className="text-xs leading-relaxed text-white/70">
                {t.contact.officeValue}
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Mail className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                <span>{t.contact.emailValue}</span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Phone className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                <span>{t.contact.phoneValue}</span>
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-secondary hover:text-white transition-colors"
                >
                  <span>{t.nav.inquireCta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {t.footer.termsOfEngagement}
            </a>
          </div>
        </div>
        {/* <p className="mt-4 text-[11px] text-white/45 leading-relaxed">
          {t.footer.disclaimer}
        </p> */}
      </div>
    </footer>
  );
}
