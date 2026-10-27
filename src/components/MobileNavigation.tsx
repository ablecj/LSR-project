"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight, Globe, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { getAllServices } from "@/lib/services";
import { prefersReducedMotion } from "@/lib/animations";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  const services = getAllServices();
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const submenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setServicesExpanded(
        pathname === "/services" || pathname.startsWith("/services/")
      );
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const submenuEl = submenuRef.current;
    if (!submenuEl || !servicesExpanded || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const items = submenuEl.querySelectorAll("[data-mobile-service-item]");
      gsap.fromTo(
        submenuEl,
        { autoAlpha: 0, y: -6 },
        { autoAlpha: 1, y: 0, duration: 0.22, ease: "power2.out" }
      );
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { autoAlpha: 0, x: -6 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.18,
            stagger: 0.03,
            ease: "power2.out",
            clearProps: "transform",
          }
        );
      }
    }, submenuEl);

    return () => ctx.revert();
  }, [servicesExpanded]);

  if (!isOpen) return null;

  const navItems = [
    {
      label: t.nav.home,
      href: isHomePage ? "#home" : "/",
      num: "01",
      active: pathname === "/",
    },
    {
      label: t.nav.about,
      href: "/about",
      num: "02",
      active: pathname === "/about",
    },
    {
      label: t.nav.services,
      href: "/services",
      num: "03",
      active: isServicesActive,
      hasSubmenu: true,
    },
    {
      label: t.nav.team,
      href: isHomePage ? "#team" : "/#team",
      num: "04",
      active: false,
    },
    {
      label: t.nav.contact,
      href: "/contact",
      num: "05",
      active: isContactPage,
    },
  ];

  const submenuToggleAriaLabel = servicesExpanded
    ? t.nav.closeServicesSubmenuLabel ||
      (locale === "ml"
        ? "സേവനങ്ങളുടെ ഉപമെനു അടയ്ക്കുക"
        : "Close Services submenu")
    : t.nav.openServicesSubmenuLabel ||
      (locale === "ml"
        ? "സേവനങ്ങളുടെ ഉപമെനു തുറക്കുക"
        : "Open Services submenu");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      data-lenis-prevent
      className="fixed inset-0 z-50 bg-brand-primary-deep text-white flex flex-col justify-between p-6 sm:p-10 overflow-y-auto overscroll-contain transition-opacity duration-300"
    >
      <div className="flex items-center justify-between border-b border-white/15 pb-5 shrink-0">
        <Link
          href={isHomePage ? "#home" : "/"}
          onClick={onClose}
          className="inline-flex items-center"
        >
          <Image
            src="/images/lrs-logo-light.png"
            alt="LRS — Legal & Relocation Services"
            width={150}
            height={64}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.nav.closeMenuLabel}
          className="p-2.5 border border-white/20 text-white hover:border-brand-secondary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav aria-label="Mobile Primary Navigation" className="my-auto py-8">
        <ul className="space-y-5">
          {navItems.map((item) => (
            <li key={item.num} className="border-b border-white/10 pb-4">
              {item.hasSubmenu ? (
                <div>
                  <div className="flex items-center justify-between gap-3">
                    {/* Action 1: Tapping Services label navigates to /services overview */}
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={item.active ? "page" : undefined}
                      className={`group flex-1 inline-flex items-baseline gap-4 text-2xl sm:text-3xl font-display tracking-tight transition-colors ${
                        item.active
                          ? "text-brand-secondary"
                          : "text-white hover:text-brand-secondary"
                      }`}
                    >
                      <span className="text-xs font-sans uppercase tracking-widest text-brand-secondary">
                        {item.num}
                      </span>
                      <span>{item.label}</span>
                    </Link>

                    {/* Action 2: Tapping Chevron button toggles mobile Services submenu */}
                    <button
                      type="button"
                      onClick={() => setServicesExpanded((prev) => !prev)}
                      aria-expanded={servicesExpanded}
                      aria-controls="lrs-mobile-services-submenu"
                      aria-label={submenuToggleAriaLabel}
                      className={`p-2.5 border transition-colors shrink-0 ${
                        servicesExpanded
                          ? "border-brand-secondary bg-brand-secondary/15 text-brand-secondary"
                          : "border-white/20 text-white hover:border-brand-secondary hover:text-brand-secondary"
                      }`}
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          servicesExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Collapsible Mobile Services Submenu (Service Names Only) */}
                  {servicesExpanded && (
                    <div
                      id="lrs-mobile-services-submenu"
                      ref={submenuRef}
                      className="mt-3 pl-6 sm:pl-8 border-l border-brand-secondary/40"
                    >
                      <ul className="space-y-1">
                        {services.map((service) => {
                          const serviceHref = `/services/${service.slug}`;
                          const isServiceActive = pathname === serviceHref;
                          const serviceTitle =
                            service.title[locale] || service.title.en;

                          return (
                            <li key={service.id}>
                              <Link
                                href={serviceHref}
                                onClick={onClose}
                                data-mobile-service-item
                                aria-current={
                                  isServiceActive ? "page" : undefined
                                }
                                className={`block py-2.5 text-base sm:text-lg transition-colors ${
                                  isServiceActive
                                    ? "text-brand-secondary font-semibold"
                                    : "text-white/85 hover:text-brand-secondary"
                                }`}
                              >
                                {serviceTitle}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={item.active ? "page" : undefined}
                  className={`group flex items-baseline justify-between text-2xl sm:text-3xl font-display tracking-tight transition-colors ${
                    item.active
                      ? "text-brand-secondary"
                      : "text-white hover:text-brand-secondary"
                  }`}
                >
                  <span className="inline-flex items-baseline gap-4">
                    <span className="text-xs font-sans uppercase tracking-widest text-brand-secondary">
                      {item.num}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      item.active
                        ? "text-brand-secondary"
                        : "text-white/50 group-hover:text-brand-secondary"
                    }`}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
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

        <Link
          href={isContactPage ? "#contact-form" : "/contact"}
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-primary text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 transition-colors"
        >
          <span>{t.nav.inquireCta}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}