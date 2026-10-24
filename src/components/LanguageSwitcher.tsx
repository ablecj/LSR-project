"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/data/siteContent";

interface LanguageSwitcherProps {
  isScrolled: boolean;
}

const LANGUAGES: { code: Locale; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English (EN)" },
  { code: "ml", label: "Malayalam", nativeLabel: "മലയാളം (ML)" },
];

export function LanguageSwitcher({ isScrolled }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.languageSelectorLabel}
        className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300 border ${
          isScrolled
            ? "border-brand-border text-brand-ink hover:border-brand-primary bg-brand-surface-muted/70"
            : "border-white/25 text-white hover:border-white/60 bg-white/10 backdrop-blur-sm"
        }`}
      >
        <Globe className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
        <span>{currentLang.code === "en" ? "EN • English" : "ML • മലയാളം"}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.nav.languageSelectorLabel}
          className="absolute right-0 mt-2 w-52 bg-white border border-brand-border shadow-elevated py-1.5 z-50"
        >
          {LANGUAGES.map((lang) => {
            const active = lang.code === locale;
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                  active
                    ? "bg-brand-secondary-light text-brand-primary font-semibold"
                    : "text-brand-ink hover:bg-brand-surface-muted"
                }`}
              >
                <div>
                  <div className="leading-tight">{lang.nativeLabel}</div>
                  <div className="text-[11px] text-brand-slate mt-0.5">
                    {lang.label}
                  </div>
                </div>
                {active && <Check className="w-4 h-4 text-brand-secondary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
