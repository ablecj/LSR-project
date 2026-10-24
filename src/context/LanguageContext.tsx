"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Locale } from "@/data/siteContent";
import { TRANSLATIONS, TranslationDictionary } from "@/data/translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "lrs_preferred_locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryLang = urlParams.get("lang");
      if (queryLang === "en" || queryLang === "ml") {
        setLocaleState(queryLang);
        document.documentElement.lang = queryLang;
        return;
      }
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "ml") {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Fallback safely if localStorage is restricted
    }
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", nextLocale);
      window.history.replaceState({}, "", url.toString());
    } catch {
      // Ignore storage or history errors in restricted environments
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: TRANSLATIONS[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
