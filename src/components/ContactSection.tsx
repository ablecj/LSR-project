"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal } from "@/lib/animations";

export function ContactSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Advisory Coordinates */}
          <div className="lg:col-span-5">
            <div
              data-animate="fade-up"
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {t.contact.sectionLabel}
              </span>
            </div>

            <h2
              data-animate="fade-up"
              className="font-display text-[clamp(2rem,3.4vw,3rem)] text-brand-ink leading-[1.15] tracking-tight mb-4"
            >
              {t.contact.headline}
            </h2>

            <p
              data-animate="fade-up"
              className="text-sm sm:text-base text-brand-slate leading-relaxed mb-8"
            >
              {t.contact.description}
            </p>

            <div
              data-animate="fade-up"
              className="inline-block bg-brand-secondary-light text-brand-primary text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 mb-6 border border-brand-secondary/30"
            >
              {t.contact.placeholderContactNotice}
            </div>

            <div className="space-y-6 border-t border-brand-border pt-6">
              <div data-animate="fade-up" className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand-surface-muted border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">
                    {t.contact.officeLabel}
                  </p>
                  <p className="text-sm text-brand-slate mt-1">
                    {t.contact.officeValue}
                  </p>
                </div>
              </div>

              <div data-animate="fade-up" className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand-surface-muted border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">
                    {t.contact.emailTitle}
                  </p>
                  <p className="text-sm text-brand-slate mt-1">
                    {t.contact.emailValue}
                  </p>
                </div>
              </div>

              <div data-animate="fade-up" className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand-surface-muted border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">
                    {t.contact.phoneTitle}
                  </p>
                  <p className="text-sm text-brand-slate mt-1">
                    {t.contact.phoneValue}
                  </p>
                </div>
              </div>

              <div data-animate="fade-up" className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand-surface-muted border border-brand-border flex items-center justify-center text-brand-primary shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">
                    {t.contact.hoursTitle}
                  </p>
                  <p className="text-sm text-brand-slate mt-1">
                    {t.contact.hoursValue}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7" data-animate="fade-up">
            <div className="bg-brand-surface-muted border border-brand-border p-8 sm:p-10">
              <h3 className="font-display text-2xl text-brand-ink mb-6">
                {t.contact.formTitle}
              </h3>

              {submitted ? (
                <div className="bg-white border border-brand-secondary p-6 text-brand-ink">
                  <div className="flex items-center gap-3 text-brand-primary font-semibold mb-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                    <span>Inquiry Recorded</span>
                  </div>
                  <p className="text-sm text-brand-slate leading-relaxed mb-4">
                    {t.contact.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold uppercase tracking-widest text-brand-primary underline"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="client-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-brand-ink mb-2"
                      >
                        {t.contact.nameLabel}
                      </label>
                      <input
                        id="client-name"
                        name="name"
                        type="text"
                        required
                        placeholder={t.contact.namePlaceholder}
                        className="w-full bg-white border border-brand-border px-4 py-3 text-sm text-brand-ink focus:border-brand-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="client-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-brand-ink mb-2"
                      >
                        {t.contact.emailLabel}
                      </label>
                      <input
                        id="client-email"
                        name="email"
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full bg-white border border-brand-border px-4 py-3 text-sm text-brand-ink focus:border-brand-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="client-service"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-ink mb-2"
                    >
                      {t.contact.serviceLabel}
                    </label>
                    <select
                      id="client-service"
                      name="service"
                      className="w-full bg-white border border-brand-border px-4 py-3 text-sm text-brand-ink focus:border-brand-primary focus:outline-none"
                    >
                      {t.contact.serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="client-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-brand-ink mb-2"
                    >
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="client-message"
                      name="message"
                      rows={4}
                      required
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full bg-white border border-brand-border px-4 py-3 text-sm text-brand-ink focus:border-brand-primary focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-8 py-4 transition-colors"
                  >
                    <span>{t.contact.submitButton}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
