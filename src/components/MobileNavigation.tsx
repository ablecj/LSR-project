"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navItems = [
    { label: t.nav.home, href: "#home", num: "01" },
    { label: t.nav.about, href: "#about", num: "02" },
    { label: t.nav.services, href: "#services", num: "03" },
    { label: t.nav.team, href: "#team", num: "04" },
    { label: t.nav.contact, href: "#contact", num: "05" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 bg-brand-primary-deep text-white flex flex-col justify-between p-6 sm:p-10 transition-opacity duration-300"
    >
      <div className="flex items-center justify-between border-b border-white/15 pb-5">
        <a href="#home" onClick={onClose} className="inline-flex items-center">
          <Image
            src="/images/lrs-logo-light.png"
            alt="LRS — Legal & Relocation Services"
            width={150}
            height={64}
            className="h-10 w-auto object-contain"
          />
        </a>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.nav.closeMenuLabel}
          className="p-2.5 border border-white/20 text-white hover:border-brand-secondary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="my-auto py-8">
        <ul className="space-y-5">
          {navItems.map((item) => (
            <li key={item.href} className="border-b border-white/10 pb-4">
              <a
                href={item.href}
                onClick={onClose}
                className="group flex items-baseline justify-between text-2xl sm:text-3xl font-display tracking-tight text-white hover:text-brand-secondary transition-colors"
              >
                <span className="inline-flex items-baseline gap-4">
                  <span className="text-xs font-sans uppercase tracking-widest text-brand-secondary">
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </span>
                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-brand-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-brand-secondary" />
          <span className="text-xs uppercase tracking-widest text-white/70 mr-2">
            {t.nav.languageSelectorLabel}:
          </span>
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
              locale === "en"
                ? "bg-brand-secondary text-white border-brand-secondary"
                : "border-white/20 text-white/80 hover:border-white/50"
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLocale("ml")}
            className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
              locale === "ml"
                ? "bg-brand-secondary text-white border-brand-secondary"
                : "border-white/20 text-white/80 hover:border-white/50"
            }`}
          >
            മലയാളം
          </button>
        </div>

        <a
          href="#contact"
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-primary text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 transition-colors"
        >
          <span>{t.nav.inquireCta}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
