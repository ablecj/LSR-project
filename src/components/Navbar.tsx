"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNavigation } from "./MobileNavigation";

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: t.nav.home,
      href: isHomePage ? "#home" : "/",
      active: pathname === "/",
    },
    {
      label: t.nav.about,
      href: "/about",
      active: pathname === "/about",
    },
    {
      label: t.nav.services,
      href: isHomePage ? "#services" : "/#services",
      active: false,
    },
    {
      label: t.nav.contact,
      href: isHomePage ? "#contact" : "/#contact",
      active: false,
    },
  ];

  const inquiryHref = isHomePage ? "#contact" : "/#contact";

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
              src={isScrolled ? "/images/lrs-logo.png" : "/images/lrs-logo-light.png"}
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
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
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
            ))}
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