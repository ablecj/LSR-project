"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { getAllServices } from "@/lib/services";
import { prefersReducedMotion } from "@/lib/animations";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNavigation } from "./MobileNavigation";

export function Navbar() {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  const services = getAllServices();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownRendered, setDropdownRendered] = useState(false);

  const servicesContainerRef = useRef<HTMLDivElement | null>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownPanelRef = useRef<HTMLDivElement | null>(null);
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pendingFocusIndexRef = useRef<number | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const openDropdown = useCallback(
    (focusIndex: number | null = null) => {
      clearHoverTimeout();
      pendingFocusIndexRef.current = focusIndex;
      setDropdownRendered(true);
      setServicesOpen(true);
    },
    [clearHoverTimeout]
  );

  const closeDropdown = useCallback(
    (returnFocusToTrigger = false) => {
      clearHoverTimeout();
      pendingFocusIndexRef.current = null;
      setServicesOpen(false);
      if (prefersReducedMotion()) {
        setDropdownRendered(false);
      }
      if (returnFocusToTrigger) {
        triggerButtonRef.current?.focus();
      }
    },
    [clearHoverTimeout]
  );

  const handleMouseEnter = useCallback(() => {
    clearHoverTimeout();
    openDropdown(null);
  }, [clearHoverTimeout, openDropdown]);

  const handleMouseLeave = useCallback(() => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      closeDropdown(false);
    }, 120);
  }, [clearHoverTimeout, closeDropdown]);

  const toggleDropdown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (servicesOpen) {
        closeDropdown(false);
      } else {
        openDropdown(null);
      }
    },
    [servicesOpen, closeDropdown, openDropdown]
  );

  useEffect(() => {
    return () => clearHoverTimeout();
  }, [clearHoverTimeout]);

  // Track window scroll for navbar surface transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    clearHoverTimeout();
    setServicesOpen(false);
    setDropdownRendered(false);
    setMobileMenuOpen(false);
  }, [pathname, clearHoverTimeout]);

  // Outside click and Escape key handling for desktop Services dropdown
  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDownOutside = (event: MouseEvent | TouchEvent) => {
      if (
        servicesContainerRef.current &&
        !servicesContainerRef.current.contains(event.target as Node)
      ) {
        closeDropdown(false);
      }
    };

    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDropdown(true);
      }
    };

    document.addEventListener("mousedown", handlePointerDownOutside);
    document.addEventListener("touchstart", handlePointerDownOutside, {
      passive: true,
    });
    document.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDownOutside);
      document.removeEventListener("touchstart", handlePointerDownOutside);
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [servicesOpen, closeDropdown]);

  // GSAP entrance & exit animation for the desktop Services dropdown
  useEffect(() => {
    const panel = dropdownPanelRef.current;
    if (!panel || !dropdownRendered) return;

    if (prefersReducedMotion()) {
      gsap.set(panel, { clearProps: "all" });
      if (servicesOpen && pendingFocusIndexRef.current !== null) {
        const target = menuItemRefs.current[pendingFocusIndexRef.current];
        target?.focus();
        pendingFocusIndexRef.current = null;
      }
      if (!servicesOpen) {
        setDropdownRendered(false);
      }
      return;
    }

    const ctx = gsap.context(() => {
      const items = panel.querySelectorAll("[data-dropdown-item]");
      gsap.killTweensOf([panel, items]);

      if (servicesOpen) {
        const tl = gsap.timeline({
          onComplete: () => {
            if (pendingFocusIndexRef.current !== null) {
              const target = menuItemRefs.current[pendingFocusIndexRef.current];
              target?.focus();
              pendingFocusIndexRef.current = null;
            }
          },
        });

        tl.fromTo(
          panel,
          { autoAlpha: 0, y: 8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.22,
            ease: "power3.out",
          }
        );

        if (items.length > 0) {
          tl.fromTo(
            items,
            { autoAlpha: 0, y: 5 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.18,
              stagger: 0.03,
              ease: "power2.out",
              clearProps: "transform",
            },
            "-=0.14"
          );
        }

        if (pendingFocusIndexRef.current !== null) {
          const target = menuItemRefs.current[pendingFocusIndexRef.current];
          target?.focus();
          pendingFocusIndexRef.current = null;
        }
      } else {
        gsap.to(panel, {
          autoAlpha: 0,
          y: 5,
          duration: 0.14,
          ease: "power2.in",
          onComplete: () => {
            setDropdownRendered(false);
          },
        });
      }
    }, panel);

    return () => ctx.revert();
  }, [servicesOpen, dropdownRendered]);

  // Keyboard navigation within the Services nav item and dropdown menu
  const handleServicesKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const totalFocusable = services.length;
    if (totalFocusable === 0) return;

    if (e.key === "Escape" && servicesOpen) {
      e.preventDefault();
      e.stopPropagation();
      closeDropdown(true);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!servicesOpen) {
        openDropdown(0);
      } else {
        const currentIndex = menuItemRefs.current.findIndex(
          (el) => el === document.activeElement
        );
        const nextIndex =
          currentIndex >= 0 ? (currentIndex + 1) % totalFocusable : 0;
        menuItemRefs.current[nextIndex]?.focus();
      }
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!servicesOpen) {
        openDropdown(totalFocusable - 1);
      } else {
        const currentIndex = menuItemRefs.current.findIndex(
          (el) => el === document.activeElement
        );
        const prevIndex =
          currentIndex > 0 ? currentIndex - 1 : totalFocusable - 1;
        menuItemRefs.current[prevIndex]?.focus();
      }
      return;
    }

    if (servicesOpen && e.key === "Home") {
      e.preventDefault();
      menuItemRefs.current[0]?.focus();
      return;
    }

    if (servicesOpen && e.key === "End") {
      e.preventDefault();
      menuItemRefs.current[totalFocusable - 1]?.focus();
    }
  };

  // Close dropdown when keyboard focus leaves the Services container
  const handleContainerBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      servicesOpen &&
      !e.currentTarget.contains(e.relatedTarget as Node | null)
    ) {
      closeDropdown(false);
    }
  };

  const navLinks = [
    {
      id: "home",
      label: t.nav.home,
      href: isHomePage ? "#home" : "/",
      active: pathname === "/",
    },
    {
      id: "about",
      label: t.nav.about,
      href: "/about",
      active: pathname === "/about",
    },
    {
      id: "services",
      label: t.nav.services,
      href: "/services",
      active: isServicesActive,
      hasDropdown: true,
    },
    {
      id: "contact",
      label: t.nav.contact,
      href: "/contact",
      active: isContactPage,
    },
  ];

  const inquiryHref = isContactPage ? "#contact-form" : "/contact";

  const dropdownTriggerAriaLabel = servicesOpen
    ? t.nav.closeServicesSubmenuLabel ||
      (locale === "ml"
        ? "സേവനങ്ങളുടെ ഉപമെനു അടയ്ക്കുക"
        : "Close Services submenu")
    : t.nav.openServicesSubmenuLabel ||
      (locale === "ml"
        ? "സേവനങ്ങളുടെ ഉപമെനു തുറക്കുക"
        : "Open Services submenu");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-brand-border py-3.5 shadow-subtle"
            : "bg-transparent border-b border-white/15 py-6"
        }`}
      >
        <div className="max-w-editorial mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            href={isHomePage ? "#home" : "/"}
            className="inline-flex items-center focus:outline-none"
            aria-label="LRS Legal & Relocation Services Home"
          >
            <Image
              src={
                isScrolled ? "/images/lrs-logo.png" : "/images/lrs-logo-light.png"
              }
              alt="LRS — Legal & Relocation Services"
              width={168}
              height={72}
              priority
              className="h-10 sm:h-11 w-auto object-contain transition-opacity duration-300"
            />
          </Link>

          {/* Middle: Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-10"
          >
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    ref={servicesContainerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onKeyDown={handleServicesKeyDown}
                    onBlur={handleContainerBlur}
                    className="relative flex items-center"
                  >
                    {/* Action 1: Clicking Services label navigates to /services overview */}
                    <Link
                      href={item.href}
                      onClick={() => closeDropdown(false)}
                      aria-current={item.active ? "page" : undefined}
                      data-active={
                        item.active || servicesOpen ? "true" : undefined
                      }
                      className={`nav-link-underline text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                        isScrolled
                          ? item.active || servicesOpen
                            ? "text-brand-primary"
                            : "text-brand-ink hover:text-brand-primary"
                          : item.active || servicesOpen
                          ? "text-white"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {/* Action 2: Chevron Trigger */}
                    <button
                      ref={triggerButtonRef}
                      type="button"
                      onClick={toggleDropdown}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls="lrs-desktop-services-menu"
                      aria-label={dropdownTriggerAriaLabel}
                      className={`ml-1 p-1 inline-flex items-center justify-center transition-colors ${
                        isScrolled
                          ? item.active || servicesOpen
                            ? "text-brand-primary hover:text-brand-secondary"
                            : "text-brand-ink/80 hover:text-brand-primary"
                          : item.active || servicesOpen
                          ? "text-brand-secondary hover:text-white"
                          : "text-white/85 hover:text-white"
                      }`}
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                          servicesOpen ? "rotate-180 text-brand-secondary" : ""
                        }`}
                      />
                    </button>

                    {/* Desktop Services Dropdown Panel (Single-Column, Service Name Only) */}
                    {dropdownRendered && (
                      <div
                        id="lrs-desktop-services-menu"
                        role="region"
                        aria-label={t.nav.services}
                        aria-hidden={!servicesOpen}
                        className={`absolute left-0 top-full pt-3 min-w-[290px] w-max max-w-[360px] z-50 ${
                          servicesOpen
                            ? "pointer-events-auto"
                            : "pointer-events-none"
                        }`}
                      >
                        <div
                          ref={dropdownPanelRef}
                          className="bg-white border border-brand-border border-t-2 border-t-brand-secondary shadow-elevated py-1.5 text-left"
                        >
                          <ul className="divide-y divide-brand-border/60">
                            {services.map((service, index) => {
                              const detailHref = `/services/${service.slug}`;
                              const isActive = pathname === detailHref;
                              const title =
                                service.title[locale] || service.title.en;

                              return (
                                <li key={service.id}>
                                  <Link
                                    ref={(el) => {
                                      menuItemRefs.current[index] = el;
                                    }}
                                    href={detailHref}
                                    onClick={() => closeDropdown(false)}
                                    data-dropdown-item
                                    aria-current={isActive ? "page" : undefined}
                                    className={`block px-5 py-3 text-sm transition-colors duration-200 focus:outline-none focus-visible:bg-brand-surface-muted ${
                                      isActive
                                        ? "bg-brand-secondary-light/40 text-brand-primary font-semibold"
                                        : "text-brand-ink hover:bg-brand-surface-muted hover:text-brand-primary font-medium"
                                    }`}
                                  >
                                    {title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  data-active={item.active ? "true" : undefined}
                  className={`nav-link-underline text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isScrolled
                      ? item.active
                        ? "text-brand-primary"
                        : "text-brand-ink hover:text-brand-primary"
                      : item.active
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Language Switcher & Inquiry Button */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            <Link
              href={inquiryHref}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                isScrolled
                  ? "bg-brand-primary text-white hover:bg-brand-secondary"
                  : "bg-brand-secondary text-white hover:bg-white hover:text-brand-primary-deep"
              }`}
            >
              <span>{t.nav.inquireCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={t.nav.openMenuLabel}
              className={`p-2.5 border transition-colors ${
                isScrolled
                  ? "border-brand-border text-brand-ink hover:border-brand-primary"
                  : "border-white/25 text-white hover:border-white"
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}