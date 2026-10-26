// src/components/contact/ContactFormSection.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Mail,
  Phone,
  Loader2,
  RotateCcw,
  ArrowUpRight,
  ServerCrash,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactServiceKey } from "@/data/translations";
import { BROCHURE_CONTACT_INFO } from "@/data/services";
import { createSectionReveal } from "@/lib/animations";
import {
  CONTACT_SERVICE_KEYS,
  ContactFormValues,
  ContactFormErrors,
  ContactSubmissionStatusCode,
  validateContactForm,
  submitContactInquiry,
  buildDirectMailtoHref,
} from "@/lib/contactSubmission";

const INITIAL_VALUES: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  subject: "",
  message: "",
  privacyConsent: false,
  websiteUrl: "",
};

export function ContactFormSection() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const statusBannerRef = useRef<HTMLDivElement | null>(null);

  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [touched, setTouched] = useState<
    Partial<Record<keyof Omit<ContactFormValues, "websiteUrl">, boolean>>
  >({});
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<ContactSubmissionStatusCode | null>(null);

  const copy = t.contactPage.formSection;

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, [locale]);

  // Pre-select service if ?service= query parameter matches a valid service key
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const queryService = params.get("service") as ContactServiceKey | null;
      if (queryService && CONTACT_SERVICE_KEYS.includes(queryService)) {
        setValues((prev) =>
          prev.service ? prev : { ...prev, service: queryService }
        );
      }
    } catch {
      // Safe no-op if window is unavailable
    }
  }, []);

  // Re-translate active validation messages immediately when the user switches language
  useEffect(() => {
    if (!hasAttemptedSubmit && Object.keys(touched).length === 0) return;
    const allErrors = validateContactForm(values, copy.validation);
    if (hasAttemptedSubmit) {
      setErrors(allErrors);
    } else {
      const nextErrors: ContactFormErrors = {};
      (Object.keys(touched) as Array<keyof typeof touched>).forEach((key) => {
        if (touched[key] && allErrors[key]) {
          nextErrors[key] = allErrors[key];
        }
      });
      setErrors(nextErrors);
    }
  }, [locale, copy.validation, values, touched, hasAttemptedSubmit]);

  const handleFieldChange = <K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K]
  ) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);

    if (submissionStatus && submissionStatus !== "SUCCESS") {
      setSubmissionStatus(null);
    }

    if (hasAttemptedSubmit || (field !== "websiteUrl" && touched[field])) {
      const nextAllErrors = validateContactForm(nextValues, copy.validation);
      if (hasAttemptedSubmit) {
        setErrors(nextAllErrors);
      } else if (field !== "websiteUrl") {
        setErrors((prev) => ({
          ...prev,
          [field]: nextAllErrors[field],
        }));
      }
    }
  };

  const handleFieldBlur = (
    field: keyof Omit<ContactFormValues, "websiteUrl">
  ) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const nextAllErrors = validateContactForm(values, copy.validation);
    setErrors((prev) => ({
      ...prev,
      [field]: nextAllErrors[field],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setHasAttemptedSubmit(true);
    const validationErrors = validateContactForm(values, copy.validation);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    const result = await submitContactInquiry(values, locale);
    setIsSubmitting(false);
    setSubmissionStatus(result.code);

    setTimeout(() => {
      statusBannerRef.current?.focus();
    }, 50);
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setTouched({});
    setErrors({});
    setHasAttemptedSubmit(false);
    setSubmissionStatus(null);
  };

  const selectedServiceLabel = values.service
    ? copy.fields.serviceOptions[values.service]
    : undefined;

  const directMailtoHref = buildDirectMailtoHref(
    values,
    BROCHURE_CONTACT_INFO.email,
    selectedServiceLabel
  );

  const hasValidationErrors =
    hasAttemptedSubmit && Object.keys(errors).length > 0;

  return (
    <section
      id="contact-form"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-brand-surface-muted border-b border-brand-border"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div
            data-animate="fade-up"
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-brand-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              {copy.eyebrow}
            </span>
          </div>

          <h2
            data-animate="fade-up"
            className="font-display text-[clamp(2rem,3.6vw,3.25rem)] text-brand-ink leading-[1.14] tracking-tight mb-4"
          >
            {copy.headline}
          </h2>

          <p
            data-animate="fade-up"
            className="font-sans text-[16px] font-normal text-brand-slate leading-[28px] mb-0"
          >
            {copy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Primary Contact Form */}
          <div className="lg:col-span-8" data-animate="fade-up">
            <div className="bg-white border border-brand-border p-7 sm:p-10 lg:p-12 shadow-subtle">
              {/* Top Confidentiality Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-brand-border">
                <div className="inline-flex items-center gap-2.5 text-xs font-medium text-brand-primary">
                  <ShieldCheck className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>{copy.confidentialityNote}</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-brand-slate">
                  LRS • VALLETTA
                </span>
              </div>

              {/* Confirmed Server Submission Success State */}
              {submissionStatus === "SUCCESS" ? (
                <div
                  ref={statusBannerRef}
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  className="bg-brand-surface-muted border-l-4 border-brand-secondary p-7 sm:p-9 focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-secondary-light text-brand-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-brand-ink mb-2">
                        {copy.states.successTitle}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-slate leading-relaxed mb-6">
                        {copy.states.successDescription}
                      </p>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors duration-300"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{copy.actions.resetButton}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label={copy.aria.formLabel}
                  className="space-y-6"
                >
                  {/* Honeypot field (hidden from assistive tech and visual users) */}
                  <div
                    aria-hidden="true"
                    className="hidden"
                    style={{ display: "none" }}
                  >
                    <label htmlFor="contact-website-url">Website</label>
                    <input
                      id="contact-website-url"
                      name="websiteUrl"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={values.websiteUrl}
                      onChange={(e) =>
                        handleFieldChange("websiteUrl", e.target.value)
                      }
                    />
                  </div>

                  {/* Validation Error Summary Alert */}
                  {hasValidationErrors && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="bg-red-50/80 border-l-4 border-red-600 p-4 flex items-start gap-3 text-red-900"
                    >
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">
                        {copy.validation.formErrorsSummary}
                      </p>
                    </div>
                  )}

                  {/* Honest Backend Configuration Required / Server Error Feedback Banner */}
                  {submissionStatus === "CONFIGURATION_REQUIRED" && (
                    <div
                      ref={statusBannerRef}
                      tabIndex={-1}
                      role="region"
                      aria-label={copy.aria.statusRegionLabel}
                      aria-live="polite"
                      className="bg-brand-surface-muted border border-brand-secondary p-6 sm:p-7 focus:outline-none"
                    >
                      <span className="inline-block bg-brand-secondary-light text-brand-primary text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 mb-3 border border-brand-secondary/30">
                        {copy.states.configRequiredBadge}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl text-brand-ink mb-2">
                        {copy.states.configRequiredTitle}
                      </h3>
                      <p className="text-sm text-brand-slate leading-relaxed mb-4">
                        {copy.states.configRequiredDescription}
                      </p>
                      <p className="text-xs font-mono text-brand-primary bg-white border border-brand-border p-3 mb-5 leading-relaxed">
                        {copy.states.configRequiredTechnicalNote}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={directMailtoHref}
                          className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors duration-300"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>{copy.actions.directEmailCta}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(
                            /\s+/g,
                            ""
                          )}`}
                          className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-primary bg-white text-brand-ink hover:text-brand-primary text-xs font-semibold uppercase tracking-[0.16em] px-5 py-3.5 transition-colors duration-300"
                        >
                          <Phone className="w-3.5 h-3.5 text-brand-secondary" />
                          <span>{copy.actions.directPhoneCta}</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {(submissionStatus === "SERVER_ERROR" ||
                    submissionStatus === "NETWORK_ERROR" ||
                    submissionStatus === "RATE_LIMITED" ||
                    submissionStatus === "VALIDATION_ERROR") && (
                    <div
                      ref={statusBannerRef}
                      tabIndex={-1}
                      role="alert"
                      aria-live="assertive"
                      className="bg-red-50/80 border-l-4 border-red-600 p-6 focus:outline-none"
                    >
                      <div className="flex items-start gap-3.5">
                        <ServerCrash className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-display text-xl text-brand-ink mb-1.5">
                            {copy.states.errorTitle}
                          </h3>
                          <p className="text-sm text-brand-slate leading-relaxed mb-4">
                            {submissionStatus === "RATE_LIMITED"
                              ? copy.states.rateLimitedDescription
                              : copy.states.errorDescription}
                          </p>
                          <div className="flex flex-wrap items-center gap-3">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                              <span>{copy.actions.retryButton}</span>
                            </button>
                            <a
                              href={directMailtoHref}
                              className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-primary bg-white text-brand-ink text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5 text-brand-secondary" />
                              <span>{copy.actions.directEmailCta}</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* 1. Full Name (Required) */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <label
                          htmlFor="contact-full-name"
                          className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
                        >
                          {copy.fields.fullNameLabel}{" "}
                          <span className="text-brand-secondary" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <span className="text-[11px] font-mono text-brand-slate">
                          {copy.requiredIndicator}
                        </span>
                      </div>
                      <input
                        id="contact-full-name"
                        name="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        disabled={isSubmitting}
                        value={values.fullName}
                        onChange={(e) =>
                          handleFieldChange("fullName", e.target.value)
                        }
                        onBlur={() => handleFieldBlur("fullName")}
                        placeholder={copy.fields.fullNamePlaceholder}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? "contact-full-name-error" : undefined
                        }
                        className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none ${
                          errors.fullName
                            ? "border-red-600 focus:border-red-600"
                            : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="contact-full-name-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* 2. Email Address (Required) */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <label
                          htmlFor="contact-email"
                          className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
                        >
                          {copy.fields.emailLabel}{" "}
                          <span className="text-brand-secondary" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <span className="text-[11px] font-mono text-brand-slate">
                          {copy.requiredIndicator}
                        </span>
                      </div>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        disabled={isSubmitting}
                        value={values.email}
                        onChange={(e) =>
                          handleFieldChange("email", e.target.value)
                        }
                        onBlur={() => handleFieldBlur("email")}
                        placeholder={copy.fields.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "contact-email-error" : undefined
                        }
                        className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none ${
                          errors.email
                            ? "border-red-600 focus:border-red-600"
                            : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Service Interested In */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* 3. Phone Number (Optional) */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <label
                          htmlFor="contact-phone"
                          className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
                        >
                          {copy.fields.phoneLabel}
                        </label>
                        <span className="text-[11px] font-mono text-brand-slate">
                          {copy.optionalIndicator}
                        </span>
                      </div>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        disabled={isSubmitting}
                        value={values.phone}
                        onChange={(e) =>
                          handleFieldChange("phone", e.target.value)
                        }
                        onBlur={() => handleFieldBlur("phone")}
                        placeholder={copy.fields.phonePlaceholder}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? "contact-phone-error" : undefined
                        }
                        className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none ${
                          errors.phone
                            ? "border-red-600 focus:border-red-600"
                            : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
                        }`}
                      />
                      {errors.phone && (
                        <p
                          id="contact-phone-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* 4. Service Interested In (Optional Dropdown with stable internal keys) */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <label
                          htmlFor="contact-service"
                          className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
                        >
                          {copy.fields.serviceLabel}
                        </label>
                        <span className="text-[11px] font-mono text-brand-slate">
                          {copy.optionalIndicator}
                        </span>
                      </div>
                      <select
                        id="contact-service"
                        name="service"
                        disabled={isSubmitting}
                        value={values.service}
                        onChange={(e) =>
                          handleFieldChange(
                            "service",
                            e.target.value as ContactServiceKey | ""
                          )
                        }
                        className="w-full bg-white border border-brand-border hover:border-brand-primary/60 focus:border-brand-primary px-4 py-3.5 text-sm text-brand-ink transition-colors duration-200 focus:outline-none"
                      >
                        <option value="">{copy.fields.servicePlaceholder}</option>
                        {CONTACT_SERVICE_KEYS.map((serviceKey) => (
                          <option key={serviceKey} value={serviceKey}>
                            {copy.fields.serviceOptions[serviceKey]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 5. Subject (Required) */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label
                        htmlFor="contact-subject"
                        className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
                      >
                        {copy.fields.subjectLabel}{" "}
                        <span className="text-brand-secondary" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <span className="text-[11px] font-mono text-brand-slate">
                        {copy.requiredIndicator}
                      </span>
                    </div>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={values.subject}
                      onChange={(e) =>
                        handleFieldChange("subject", e.target.value)
                      }
                      onBlur={() => handleFieldBlur("subject")}
                      placeholder={copy.fields.subjectPlaceholder}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={
                        errors.subject ? "contact-subject-error" : undefined
                      }
                      className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none ${
                        errors.subject
                          ? "border-red-600 focus:border-red-600"
                          : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
                      }`}
                    />
                    {errors.subject && (
                      <p
                        id="contact-subject-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* 6. Message (Required Textarea) */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label
                        htmlFor="contact-message"
                        className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
                      >
                        {copy.fields.messageLabel}{" "}
                        <span className="text-brand-secondary" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <span className="text-[11px] font-mono text-brand-slate">
                        {copy.requiredIndicator}
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      value={values.message}
                      onChange={(e) =>
                        handleFieldChange("message", e.target.value)
                      }
                      onBlur={() => handleFieldBlur("message")}
                      placeholder={copy.fields.messagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                      className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none resize-y ${
                        errors.message
                          ? "border-red-600 focus:border-red-600"
                          : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* 7. Privacy Consent Checkbox */}
                  <div className="pt-2">
                    <div className="flex items-start gap-3">
                      <input
                        id="contact-privacy-consent"
                        name="privacyConsent"
                        type="checkbox"
                        required
                        disabled={isSubmitting}
                        checked={values.privacyConsent}
                        onChange={(e) =>
                          handleFieldChange("privacyConsent", e.target.checked)
                        }
                        onBlur={() => handleFieldBlur("privacyConsent")}
                        aria-invalid={Boolean(errors.privacyConsent)}
                        aria-describedby={
                          errors.privacyConsent
                            ? "contact-privacy-error"
                            : undefined
                        }
                        className="mt-1 h-4 w-4 shrink-0 border-brand-border text-brand-primary focus:ring-brand-secondary accent-brand-primary"
                      />
                      <label
                        htmlFor="contact-privacy-consent"
                        className="text-xs sm:text-sm text-brand-slate leading-relaxed cursor-pointer"
                      >
                        {copy.fields.privacyConsentLabel}{" "}
                        <span className="text-brand-secondary" aria-hidden="true">
                          *
                        </span>
                      </label>
                    </div>
                    {errors.privacyConsent && (
                      <p
                        id="contact-privacy-error"
                        role="alert"
                        className="mt-2 text-xs text-red-600 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.privacyConsent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Action Bar */}
                  <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-secondary disabled:opacity-65 disabled:pointer-events-none text-white text-xs font-semibold uppercase tracking-[0.16em] px-8 py-4 transition-colors duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{copy.actions.submittingButton}</span>
                        </>
                      ) : (
                        <>
                          <span>{copy.actions.submitButton}</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    {isSubmitting && (
                      <p
                        role="status"
                        aria-live="polite"
                        className="text-xs text-brand-slate"
                      >
                        {copy.states.loadingDescription}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Editorial Consultation Protocol & Direct Desk Sidebar */}
          <aside
            className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
            data-animate="fade-up"
          >
            <div className="bg-brand-primary-deep text-white p-7 sm:p-8 border border-brand-primary-deep shadow-elevated">
              <div className="inline-flex items-center gap-2.5 mb-3">
                <span className="w-6 h-[2px] bg-brand-secondary" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-secondary">
                  {copy.sidebar.eyebrow}
                </span>
              </div>

              <h3 className="font-display text-2xl text-white leading-snug mb-3">
                {copy.sidebar.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-7">
                {copy.sidebar.description}
              </p>

              <div className="space-y-5 border-t border-white/15 pt-6">
                {copy.sidebar.steps.map((step) => (
                  <div key={step.number} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-white/10 text-brand-secondary font-mono text-xs font-semibold flex items-center justify-center shrink-0 border border-white/15">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs text-white/75 leading-relaxed mt-1">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/15">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-2">
                  {copy.sidebar.directDeskLabel}
                </p>
                <p className="text-xs text-white/75 leading-relaxed mb-5">
                  {copy.sidebar.directDeskNote}
                </p>

                <div className="space-y-2.5">
                  <a
                    href={`mailto:${BROCHURE_CONTACT_INFO.email}`}
                    className="w-full inline-flex items-center justify-between gap-2 bg-white/10 hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.14em] px-4 py-3 border border-white/15 transition-colors duration-300"
                  >
                    <span className="inline-flex items-center gap-2 truncate">
                      <Mail className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                      <span className="truncate">
                        {BROCHURE_CONTACT_INFO.email}
                      </span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>

                  <a
                    href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(
                      /\s+/g,
                      ""
                    )}`}
                    className="w-full inline-flex items-center justify-between gap-2 bg-white/5 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-[0.14em] px-4 py-3 border border-white/15 transition-colors duration-300"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                      <span>{BROCHURE_CONTACT_INFO.phone}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Link to Malta Programmes Directory */}
            <div className="bg-white border border-brand-border p-6 shadow-subtle">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary mb-2">
                {t.servicesPage.collection.sectionLabel}
              </p>
              <p className="text-xs text-brand-slate leading-relaxed mb-4">
                {t.servicesPage.collection.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary hover:text-brand-secondary transition-colors"
              >
                <span>{t.services.viewAllCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}