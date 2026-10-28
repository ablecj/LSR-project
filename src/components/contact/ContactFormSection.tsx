// src/components/contact/ContactFormSection.tsx
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import {
//   Send,
//   CheckCircle2,
//   AlertCircle,
//   ShieldCheck,
//   Mail,
//   Phone,
//   Loader2,
//   RotateCcw,
//   ArrowUpRight,
//   ServerCrash,
// } from "lucide-react";
// import { useLanguage } from "@/context/LanguageContext";
// import { ContactServiceKey } from "@/data/translations";
// import { BROCHURE_CONTACT_INFO } from "@/data/services";
// import { createSectionReveal } from "@/lib/animations";
// import {
//   CONTACT_SERVICE_KEYS,
//   ContactFormValues,
//   ContactFormErrors,
//   ContactSubmissionStatusCode,
//   validateContactForm,
//   submitContactInquiry,
//   buildDirectMailtoHref,
// } from "@/lib/contactSubmission";

// const INITIAL_VALUES: ContactFormValues = {
//   fullName: "",
//   email: "",
//   phone: "",
//   service: "",
//   subject: "",
//   message: "",
//   privacyConsent: false,
//   websiteUrl: "",
// };

// export function ContactFormSection() {
//   const { locale, t } = useLanguage();
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const statusBannerRef = useRef<HTMLDivElement | null>(null);

//   const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
//   const [touched, setTouched] = useState<
//     Partial<Record<keyof Omit<ContactFormValues, "websiteUrl">, boolean>>
//   >({});
//   const [errors, setErrors] = useState<ContactFormErrors>({});
//   const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submissionStatus, setSubmissionStatus] =
//     useState<ContactSubmissionStatusCode | null>(null);

//   const copy = t.contactPage.formSection;

//   useEffect(() => {
//     createSectionReveal(sectionRef.current);
//   }, [locale]);

//   // Pre-select service if ?service= query parameter matches a valid service key
//   useEffect(() => {
//     try {
//       const params = new URLSearchParams(window.location.search);
//       const queryService = params.get("service") as ContactServiceKey | null;
//       if (queryService && CONTACT_SERVICE_KEYS.includes(queryService)) {
//         setValues((prev) =>
//           prev.service ? prev : { ...prev, service: queryService }
//         );
//       }
//     } catch {
//       // Safe no-op if window is unavailable
//     }
//   }, []);

//   // Re-translate active validation messages immediately when the user switches language
//   useEffect(() => {
//     if (!hasAttemptedSubmit && Object.keys(touched).length === 0) return;
//     const allErrors = validateContactForm(values, copy.validation);
//     if (hasAttemptedSubmit) {
//       setErrors(allErrors);
//     } else {
//       const nextErrors: ContactFormErrors = {};
//       (Object.keys(touched) as Array<keyof typeof touched>).forEach((key) => {
//         if (touched[key] && allErrors[key]) {
//           nextErrors[key] = allErrors[key];
//         }
//       });
//       setErrors(nextErrors);
//     }
//   }, [locale, copy.validation, values, touched, hasAttemptedSubmit]);

//   const handleFieldChange = <K extends keyof ContactFormValues>(
//     field: K,
//     value: ContactFormValues[K]
//   ) => {
//     const nextValues = { ...values, [field]: value };
//     setValues(nextValues);

//     if (submissionStatus && submissionStatus !== "SUCCESS") {
//       setSubmissionStatus(null);
//     }

//     if (hasAttemptedSubmit || (field !== "websiteUrl" && touched[field])) {
//       const nextAllErrors = validateContactForm(nextValues, copy.validation);
//       if (hasAttemptedSubmit) {
//         setErrors(nextAllErrors);
//       } else if (field !== "websiteUrl") {
//         setErrors((prev) => ({
//           ...prev,
//           [field]: nextAllErrors[field],
//         }));
//       }
//     }
//   };

//   const handleFieldBlur = (
//     field: keyof Omit<ContactFormValues, "websiteUrl">
//   ) => {
//     setTouched((prev) => ({ ...prev, [field]: true }));
//     const nextAllErrors = validateContactForm(values, copy.validation);
//     setErrors((prev) => ({
//       ...prev,
//       [field]: nextAllErrors[field],
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     setHasAttemptedSubmit(true);
//     const validationErrors = validateContactForm(values, copy.validation);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmissionStatus(null);

//     const result = await submitContactInquiry(values, locale);
//     setIsSubmitting(false);
//     setSubmissionStatus(result.code);

//     setTimeout(() => {
//       statusBannerRef.current?.focus();
//     }, 50);
//   };

//   const handleReset = () => {
//     setValues(INITIAL_VALUES);
//     setTouched({});
//     setErrors({});
//     setHasAttemptedSubmit(false);
//     setSubmissionStatus(null);
//   };

//   const selectedServiceLabel = values.service
//     ? copy.fields.serviceOptions[values.service]
//     : undefined;

//   const directMailtoHref = buildDirectMailtoHref(
//     values,
//     BROCHURE_CONTACT_INFO.email,
//     selectedServiceLabel
//   );

//   const hasValidationErrors =
//     hasAttemptedSubmit && Object.keys(errors).length > 0;

//   return (
//     <section
//       id="contact-form"
//       ref={sectionRef}
//       className="py-24 lg:py-32 bg-brand-surface-muted border-b border-brand-border"
//     >
//       <div className="max-w-editorial mx-auto px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="max-w-3xl mb-14">
//           <div
//             data-animate="fade-up"
//             className="inline-flex items-center gap-3 mb-4"
//           >
//             <span className="w-8 h-[2px] bg-brand-secondary" />
//             <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
//               {copy.eyebrow}
//             </span>
//           </div>

//           <h2
//             data-animate="fade-up"
//             className="font-display text-[clamp(2rem,3.6vw,3.25rem)] text-brand-ink leading-[1.14] tracking-tight mb-4"
//           >
//             {copy.headline}
//           </h2>

//           <p
//             data-animate="fade-up"
//             className="font-sans text-[16px] font-normal text-brand-slate leading-[28px] mb-0"
//           >
//             {copy.description}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//           {/* Left Column: Primary Contact Form */}
//           <div className="lg:col-span-8" data-animate="fade-up">
//             <div className="bg-white border border-brand-border p-7 sm:p-10 lg:p-12 shadow-subtle">
//               {/* Top Confidentiality Strip */}
//               <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-brand-border">
//                 <div className="inline-flex items-center gap-2.5 text-xs font-medium text-brand-primary">
//                   <ShieldCheck className="w-4 h-4 text-brand-secondary shrink-0" />
//                   <span>{copy.confidentialityNote}</span>
//                 </div>
//                 <span className="font-mono text-[11px] uppercase tracking-widest text-brand-slate">
//                   LRS • VALLETTA
//                 </span>
//               </div>

//               {/* Confirmed Server Submission Success State */}
//               {submissionStatus === "SUCCESS" ? (
//                 <div
//                   ref={statusBannerRef}
//                   tabIndex={-1}
//                   role="status"
//                   aria-live="polite"
//                   className="bg-brand-surface-muted border-l-4 border-brand-secondary p-7 sm:p-9 focus:outline-none"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-brand-secondary-light text-brand-primary flex items-center justify-center shrink-0">
//                       <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
//                     </div>
//                     <div>
//                       <h3 className="font-display text-2xl text-brand-ink mb-2">
//                         {copy.states.successTitle}
//                       </h3>
//                       <p className="text-sm sm:text-base text-brand-slate leading-relaxed mb-6">
//                         {copy.states.successDescription}
//                       </p>
//                       <button
//                         type="button"
//                         onClick={handleReset}
//                         className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors duration-300"
//                       >
//                         <RotateCcw className="w-3.5 h-3.5" />
//                         <span>{copy.actions.resetButton}</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <form
//                   onSubmit={handleSubmit}
//                   noValidate
//                   aria-label={copy.aria.formLabel}
//                   className="space-y-6"
//                 >
//                   {/* Honeypot field (hidden from assistive tech and visual users) */}
//                   <div
//                     aria-hidden="true"
//                     className="hidden"
//                     style={{ display: "none" }}
//                   >
//                     <label htmlFor="contact-website-url">Website</label>
//                     <input
//                       id="contact-website-url"
//                       name="websiteUrl"
//                       type="text"
//                       tabIndex={-1}
//                       autoComplete="off"
//                       value={values.websiteUrl}
//                       onChange={(e) =>
//                         handleFieldChange("websiteUrl", e.target.value)
//                       }
//                     />
//                   </div>

//                   {/* Validation Error Summary Alert */}
//                   {hasValidationErrors && (
//                     <div
//                       role="alert"
//                       aria-live="assertive"
//                       className="bg-red-50/80 border-l-4 border-red-600 p-4 flex items-start gap-3 text-red-900"
//                     >
//                       <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
//                       <p className="text-xs sm:text-sm font-medium leading-relaxed">
//                         {copy.validation.formErrorsSummary}
//                       </p>
//                     </div>
//                   )}

//                   {/* Honest Backend Configuration Required / Server Error Feedback Banner */}
//                   {submissionStatus === "CONFIGURATION_REQUIRED" && (
//                     <div
//                       ref={statusBannerRef}
//                       tabIndex={-1}
//                       role="region"
//                       aria-label={copy.aria.statusRegionLabel}
//                       aria-live="polite"
//                       className="bg-brand-surface-muted border border-brand-secondary p-6 sm:p-7 focus:outline-none"
//                     >
//                       <span className="inline-block bg-brand-secondary-light text-brand-primary text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 mb-3 border border-brand-secondary/30">
//                         {copy.states.configRequiredBadge}
//                       </span>
//                       <h3 className="font-display text-xl sm:text-2xl text-brand-ink mb-2">
//                         {copy.states.configRequiredTitle}
//                       </h3>
//                       <p className="text-sm text-brand-slate leading-relaxed mb-4">
//                         {copy.states.configRequiredDescription}
//                       </p>
//                       <p className="text-xs font-mono text-brand-primary bg-white border border-brand-border p-3 mb-5 leading-relaxed">
//                         {copy.states.configRequiredTechnicalNote}
//                       </p>
//                       <div className="flex flex-wrap items-center gap-3">
//                         <a
//                           href={directMailtoHref}
//                           className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors duration-300"
//                         >
//                           <Mail className="w-3.5 h-3.5" />
//                           <span>{copy.actions.directEmailCta}</span>
//                           <ArrowUpRight className="w-3.5 h-3.5" />
//                         </a>
//                         <a
//                           href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(
//                             /\s+/g,
//                             ""
//                           )}`}
//                           className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-primary bg-white text-brand-ink hover:text-brand-primary text-xs font-semibold uppercase tracking-[0.16em] px-5 py-3.5 transition-colors duration-300"
//                         >
//                           <Phone className="w-3.5 h-3.5 text-brand-secondary" />
//                           <span>{copy.actions.directPhoneCta}</span>
//                         </a>
//                       </div>
//                     </div>
//                   )}

//                   {(submissionStatus === "SERVER_ERROR" ||
//                     submissionStatus === "NETWORK_ERROR" ||
//                     submissionStatus === "RATE_LIMITED" ||
//                     submissionStatus === "VALIDATION_ERROR") && (
//                     <div
//                       ref={statusBannerRef}
//                       tabIndex={-1}
//                       role="alert"
//                       aria-live="assertive"
//                       className="bg-red-50/80 border-l-4 border-red-600 p-6 focus:outline-none"
//                     >
//                       <div className="flex items-start gap-3.5">
//                         <ServerCrash className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
//                         <div>
//                           <h3 className="font-display text-xl text-brand-ink mb-1.5">
//                             {copy.states.errorTitle}
//                           </h3>
//                           <p className="text-sm text-brand-slate leading-relaxed mb-4">
//                             {submissionStatus === "RATE_LIMITED"
//                               ? copy.states.rateLimitedDescription
//                               : copy.states.errorDescription}
//                           </p>
//                           <div className="flex flex-wrap items-center gap-3">
//                             <button
//                               type="submit"
//                               disabled={isSubmitting}
//                               className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
//                             >
//                               <RotateCcw className="w-3.5 h-3.5" />
//                               <span>{copy.actions.retryButton}</span>
//                             </button>
//                             <a
//                               href={directMailtoHref}
//                               className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-primary bg-white text-brand-ink text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
//                             >
//                               <Mail className="w-3.5 h-3.5 text-brand-secondary" />
//                               <span>{copy.actions.directEmailCta}</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Row 1: Full Name & Email Address */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     {/* 1. Full Name (Required) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-full-name"
//                           className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
//                         >
//                           {copy.fields.fullNameLabel}{" "}
//                           <span className="text-brand-secondary" aria-hidden="true">
//                             *
//                           </span>
//                         </label>
//                         <span className="text-[11px] font-mono text-brand-slate">
//                           {copy.requiredIndicator}
//                         </span>
//                       </div>
//                       <input
//                         id="contact-full-name"
//                         name="fullName"
//                         type="text"
//                         required
//                         autoComplete="name"
//                         disabled={isSubmitting}
//                         value={values.fullName}
//                         onChange={(e) =>
//                           handleFieldChange("fullName", e.target.value)
//                         }
//                         onBlur={() => handleFieldBlur("fullName")}
//                         placeholder={copy.fields.fullNamePlaceholder}
//                         aria-invalid={Boolean(errors.fullName)}
//                         aria-describedby={
//                           errors.fullName ? "contact-full-name-error" : undefined
//                         }
//                         className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none ${
//                           errors.fullName
//                             ? "border-red-600 focus:border-red-600"
//                             : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
//                         }`}
//                       />
//                       {errors.fullName && (
//                         <p
//                           id="contact-full-name-error"
//                           role="alert"
//                           className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                         >
//                           <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                           <span>{errors.fullName}</span>
//                         </p>
//                       )}
//                     </div>

//                     {/* 2. Email Address (Required) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-email"
//                           className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
//                         >
//                           {copy.fields.emailLabel}{" "}
//                           <span className="text-brand-secondary" aria-hidden="true">
//                             *
//                           </span>
//                         </label>
//                         <span className="text-[11px] font-mono text-brand-slate">
//                           {copy.requiredIndicator}
//                         </span>
//                       </div>
//                       <input
//                         id="contact-email"
//                         name="email"
//                         type="email"
//                         required
//                         autoComplete="email"
//                         disabled={isSubmitting}
//                         value={values.email}
//                         onChange={(e) =>
//                           handleFieldChange("email", e.target.value)
//                         }
//                         onBlur={() => handleFieldBlur("email")}
//                         placeholder={copy.fields.emailPlaceholder}
//                         aria-invalid={Boolean(errors.email)}
//                         aria-describedby={
//                           errors.email ? "contact-email-error" : undefined
//                         }
//                         className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none ${
//                           errors.email
//                             ? "border-red-600 focus:border-red-600"
//                             : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
//                         }`}
//                       />
//                       {errors.email && (
//                         <p
//                           id="contact-email-error"
//                           role="alert"
//                           className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                         >
//                           <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                           <span>{errors.email}</span>
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Row 2: Phone Number & Service Interested In */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     {/* 3. Phone Number (Optional) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-phone"
//                           className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
//                         >
//                           {copy.fields.phoneLabel}
//                         </label>
//                         <span className="text-[11px] font-mono text-brand-slate">
//                           {copy.optionalIndicator}
//                         </span>
//                       </div>
//                       <input
//                         id="contact-phone"
//                         name="phone"
//                         type="tel"
//                         autoComplete="tel"
//                         disabled={isSubmitting}
//                         value={values.phone}
//                         onChange={(e) =>
//                           handleFieldChange("phone", e.target.value)
//                         }
//                         onBlur={() => handleFieldBlur("phone")}
//                         placeholder={copy.fields.phonePlaceholder}
//                         aria-invalid={Boolean(errors.phone)}
//                         aria-describedby={
//                           errors.phone ? "contact-phone-error" : undefined
//                         }
//                         className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none ${
//                           errors.phone
//                             ? "border-red-600 focus:border-red-600"
//                             : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
//                         }`}
//                       />
//                       {errors.phone && (
//                         <p
//                           id="contact-phone-error"
//                           role="alert"
//                           className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                         >
//                           <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                           <span>{errors.phone}</span>
//                         </p>
//                       )}
//                     </div>

//                     {/* 4. Service Interested In (Optional Dropdown with stable internal keys) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-service"
//                           className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
//                         >
//                           {copy.fields.serviceLabel}
//                         </label>
//                         <span className="text-[11px] font-mono text-brand-slate">
//                           {copy.optionalIndicator}
//                         </span>
//                       </div>
//                       <select
//                         id="contact-service"
//                         name="service"
//                         disabled={isSubmitting}
//                         value={values.service}
//                         onChange={(e) =>
//                           handleFieldChange(
//                             "service",
//                             e.target.value as ContactServiceKey | ""
//                           )
//                         }
//                         className="w-full bg-white border border-brand-border hover:border-brand-primary/60 focus:border-brand-primary px-4 py-3.5 text-sm text-brand-ink transition-colors duration-200 focus:outline-none"
//                       >
//                         <option value="">{copy.fields.servicePlaceholder}</option>
//                         {CONTACT_SERVICE_KEYS.map((serviceKey) => (
//                           <option key={serviceKey} value={serviceKey}>
//                             {copy.fields.serviceOptions[serviceKey]}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* 5. Subject (Required) */}
//                   <div>
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <label
//                         htmlFor="contact-subject"
//                         className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
//                       >
//                         {copy.fields.subjectLabel}{" "}
//                         <span className="text-brand-secondary" aria-hidden="true">
//                           *
//                         </span>
//                       </label>
//                       <span className="text-[11px] font-mono text-brand-slate">
//                         {copy.requiredIndicator}
//                       </span>
//                     </div>
//                     <input
//                       id="contact-subject"
//                       name="subject"
//                       type="text"
//                       required
//                       disabled={isSubmitting}
//                       value={values.subject}
//                       onChange={(e) =>
//                         handleFieldChange("subject", e.target.value)
//                       }
//                       onBlur={() => handleFieldBlur("subject")}
//                       placeholder={copy.fields.subjectPlaceholder}
//                       aria-invalid={Boolean(errors.subject)}
//                       aria-describedby={
//                         errors.subject ? "contact-subject-error" : undefined
//                       }
//                       className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none ${
//                         errors.subject
//                           ? "border-red-600 focus:border-red-600"
//                           : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
//                       }`}
//                     />
//                     {errors.subject && (
//                       <p
//                         id="contact-subject-error"
//                         role="alert"
//                         className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                       >
//                         <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                         <span>{errors.subject}</span>
//                       </p>
//                     )}
//                   </div>

//                   {/* 6. Message (Required Textarea) */}
//                   <div>
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <label
//                         htmlFor="contact-message"
//                         className="text-xs font-semibold uppercase tracking-wider text-brand-ink"
//                       >
//                         {copy.fields.messageLabel}{" "}
//                         <span className="text-brand-secondary" aria-hidden="true">
//                           *
//                         </span>
//                       </label>
//                       <span className="text-[11px] font-mono text-brand-slate">
//                         {copy.requiredIndicator}
//                       </span>
//                     </div>
//                     <textarea
//                       id="contact-message"
//                       name="message"
//                       rows={5}
//                       required
//                       disabled={isSubmitting}
//                       value={values.message}
//                       onChange={(e) =>
//                         handleFieldChange("message", e.target.value)
//                       }
//                       onBlur={() => handleFieldBlur("message")}
//                       placeholder={copy.fields.messagePlaceholder}
//                       aria-invalid={Boolean(errors.message)}
//                       aria-describedby={
//                         errors.message ? "contact-message-error" : undefined
//                       }
//                       className={`w-full bg-white border px-4 py-3.5 text-sm text-brand-ink placeholder:text-brand-slate/55 transition-colors duration-200 focus:outline-none resize-y ${
//                         errors.message
//                           ? "border-red-600 focus:border-red-600"
//                           : "border-brand-border hover:border-brand-primary/60 focus:border-brand-primary"
//                       }`}
//                     />
//                     {errors.message && (
//                       <p
//                         id="contact-message-error"
//                         role="alert"
//                         className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                       >
//                         <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                         <span>{errors.message}</span>
//                       </p>
//                     )}
//                   </div>

//                   {/* 7. Privacy Consent Checkbox */}
//                   <div className="pt-2">
//                     <div className="flex items-start gap-3">
//                       <input
//                         id="contact-privacy-consent"
//                         name="privacyConsent"
//                         type="checkbox"
//                         required
//                         disabled={isSubmitting}
//                         checked={values.privacyConsent}
//                         onChange={(e) =>
//                           handleFieldChange("privacyConsent", e.target.checked)
//                         }
//                         onBlur={() => handleFieldBlur("privacyConsent")}
//                         aria-invalid={Boolean(errors.privacyConsent)}
//                         aria-describedby={
//                           errors.privacyConsent
//                             ? "contact-privacy-error"
//                             : undefined
//                         }
//                         className="mt-1 h-4 w-4 shrink-0 border-brand-border text-brand-primary focus:ring-brand-secondary accent-brand-primary"
//                       />
//                       <label
//                         htmlFor="contact-privacy-consent"
//                         className="text-xs sm:text-sm text-brand-slate leading-relaxed cursor-pointer"
//                       >
//                         {copy.fields.privacyConsentLabel}{" "}
//                         <span className="text-brand-secondary" aria-hidden="true">
//                           *
//                         </span>
//                       </label>
//                     </div>
//                     {errors.privacyConsent && (
//                       <p
//                         id="contact-privacy-error"
//                         role="alert"
//                         className="mt-2 text-xs text-red-600 flex items-center gap-1.5"
//                       >
//                         <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                         <span>{errors.privacyConsent}</span>
//                       </p>
//                     )}
//                   </div>

//                   {/* Submit Action Bar */}
//                   <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-secondary disabled:opacity-65 disabled:pointer-events-none text-white text-xs font-semibold uppercase tracking-[0.16em] px-8 py-4 transition-colors duration-300"
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <Loader2 className="w-4 h-4 animate-spin" />
//                           <span>{copy.actions.submittingButton}</span>
//                         </>
//                       ) : (
//                         <>
//                           <span>{copy.actions.submitButton}</span>
//                           <Send className="w-3.5 h-3.5" />
//                         </>
//                       )}
//                     </button>

//                     {isSubmitting && (
//                       <p
//                         role="status"
//                         aria-live="polite"
//                         className="text-xs text-brand-slate"
//                       >
//                         {copy.states.loadingDescription}
//                       </p>
//                     )}
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>

//           {/* Right Column: Editorial Consultation Protocol & Direct Desk Sidebar */}
//           <aside
//             className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
//             data-animate="fade-up"
//           >
//             <div className="bg-brand-primary-deep text-white p-7 sm:p-8 border border-brand-primary-deep shadow-elevated">
//               <div className="inline-flex items-center gap-2.5 mb-3">
//                 <span className="w-6 h-[2px] bg-brand-secondary" />
//                 <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-secondary">
//                   {copy.sidebar.eyebrow}
//                 </span>
//               </div>

//               <h3 className="font-display text-2xl text-white leading-snug mb-3">
//                 {copy.sidebar.title}
//               </h3>

//               <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-7">
//                 {copy.sidebar.description}
//               </p>

//               <div className="space-y-5 border-t border-white/15 pt-6">
//                 {copy.sidebar.steps.map((step) => (
//                   <div key={step.number} className="flex items-start gap-4">
//                     <span className="w-8 h-8 bg-white/10 text-brand-secondary font-mono text-xs font-semibold flex items-center justify-center shrink-0 border border-white/15">
//                       {step.number}
//                     </span>
//                     <div>
//                       <h4 className="text-sm font-semibold text-white">
//                         {step.title}
//                       </h4>
//                       <p className="text-xs text-white/75 leading-relaxed mt-1">
//                         {step.detail}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 pt-6 border-t border-white/15">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-2">
//                   {copy.sidebar.directDeskLabel}
//                 </p>
//                 <p className="text-xs text-white/75 leading-relaxed mb-5">
//                   {copy.sidebar.directDeskNote}
//                 </p>

//                 <div className="space-y-2.5">
//                   <a
//                     href={`mailto:${BROCHURE_CONTACT_INFO.email}`}
//                     className="w-full inline-flex items-center justify-between gap-2 bg-white/10 hover:bg-brand-secondary text-white text-xs font-semibold uppercase tracking-[0.14em] px-4 py-3 border border-white/15 transition-colors duration-300"
//                   >
//                     <span className="inline-flex items-center gap-2 truncate">
//                       <Mail className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
//                       <span className="truncate">
//                         {BROCHURE_CONTACT_INFO.email}
//                       </span>
//                     </span>
//                     <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
//                   </a>

//                   <a
//                     href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(
//                       /\s+/g,
//                       ""
//                     )}`}
//                     className="w-full inline-flex items-center justify-between gap-2 bg-white/5 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-[0.14em] px-4 py-3 border border-white/15 transition-colors duration-300"
//                   >
//                     <span className="inline-flex items-center gap-2">
//                       <Phone className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
//                       <span>{BROCHURE_CONTACT_INFO.phone}</span>
//                     </span>
//                     <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Link to Malta Programmes Directory */}
//             <div className="bg-white border border-brand-border p-6 shadow-subtle">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary mb-2">
//                 {t.servicesPage.collection.sectionLabel}
//               </p>
//               <p className="text-xs text-brand-slate leading-relaxed mb-4">
//                 {t.servicesPage.collection.description}
//               </p>
//               <Link
//                 href="/services"
//                 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary hover:text-brand-secondary transition-colors"
//               >
//                 <span>{t.services.viewAllCta}</span>
//                 <ArrowUpRight className="w-3.5 h-3.5" />
//               </Link>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }


// updated code
// "use client";

// import React, { useState, useRef, useEffect, createContext, useContext } from "react";
// import {
//   Send,
//   CheckCircle2,
//   AlertCircle,
//   ShieldCheck,
//   Mail,
//   Phone,
//   Loader2,
//   RotateCcw,
//   ArrowUpRight,
//   ServerCrash,
//   Globe,
// } from "lucide-react";

// // ============================================================================
// // Self-Contained Project Types, Data & Utilities (for single-file compilation)
// // ============================================================================

// export type Locale = "en" | "mt";

// export type ContactServiceKey =
//   | "residency"
//   | "tax_advisory"
//   | "corporate_structuring"
//   | "property_conveyancing"
//   | "family_office"
//   | "general_inquiry";

// export const CONTACT_SERVICE_KEYS: ContactServiceKey[] = [
//   "residency",
//   "tax_advisory",
//   "corporate_structuring",
//   "property_conveyancing",
//   "family_office",
//   "general_inquiry",
// ];

// export interface ContactFormValues {
//   fullName: string;
//   email: string;
//   phone: string;
//   service: ContactServiceKey | "";
//   subject: string;
//   message: string;
//   privacyConsent: boolean;
//   websiteUrl: string;
// }

// export type ContactValidatedField = keyof Omit<ContactFormValues, "websiteUrl">;

// export type ContactFormErrors = Partial<Record<ContactValidatedField, string>>;

// export type ContactSubmissionStatusCode =
//   | "SUCCESS"
//   | "CONFIGURATION_REQUIRED"
//   | "SERVER_ERROR"
//   | "NETWORK_ERROR"
//   | "RATE_LIMITED"
//   | "VALIDATION_ERROR";

// export const BROCHURE_CONTACT_INFO = {
//   email: "advisory@lrs-malta.com",
//   phone: "+356 2122 8900",
//   address: "142 Strait Street, Valletta VLT 1434, Malta",
// };

// interface ValidationMessages {
//   fullNameRequired: string;
//   emailRequired: string;
//   emailInvalid: string;
//   phoneInvalid: string;
//   subjectRequired: string;
//   messageRequired: string;
//   messageTooShort: string;
//   privacyConsentRequired: string;
//   formErrorsSummary: string;
// }

// export function validateContactForm(
//   values: ContactFormValues,
//   messages: ValidationMessages
// ): ContactFormErrors {
//   const errors: ContactFormErrors = {};

//   if (!values.fullName.trim()) {
//     errors.fullName = messages.fullNameRequired;
//   }

//   if (!values.email.trim()) {
//     errors.email = messages.emailRequired;
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
//     errors.email = messages.emailInvalid;
//   }

//   if (values.phone.trim() && !/^[+\d\s()-]{7,24}$/.test(values.phone.trim())) {
//     errors.phone = messages.phoneInvalid;
//   }

//   if (!values.subject.trim()) {
//     errors.subject = messages.subjectRequired;
//   }

//   if (!values.message.trim()) {
//     errors.message = messages.messageRequired;
//   } else if (values.message.trim().length < 20) {
//     errors.message = messages.messageTooShort;
//   }

//   if (!values.privacyConsent) {
//     errors.privacyConsent = messages.privacyConsentRequired;
//   }

//   return errors;
// }

// export async function submitContactInquiry(
//   values: ContactFormValues,
//   _locale: Locale
// ): Promise<{ code: ContactSubmissionStatusCode }> {
//   await new Promise((resolve) => setTimeout(resolve, 900));
//   if (values.websiteUrl) {
//     return { code: "SUCCESS" };
//   }
//   return { code: "SUCCESS" };
// }

// export function buildDirectMailtoHref(
//   values: ContactFormValues,
//   recipientEmail: string,
//   selectedServiceLabel?: string
// ): string {
//   const subject = encodeURIComponent(
//     values.subject.trim() ||
//       (selectedServiceLabel
//         ? `Private Advisory Inquiry — ${selectedServiceLabel}`
//         : "Private Advisory Inquiry — LRS Malta")
//   );

//   const bodyLines = [
//     `Full Name: ${values.fullName || "—"}`,
//     `Email: ${values.email || "—"}`,
//     `Phone: ${values.phone || "—"}`,
//     `Programme / Service: ${selectedServiceLabel || "General Advisory"}`,
//     "",
//     values.message || "",
//   ];

//   const body = encodeURIComponent(bodyLines.join("\n"));
//   return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
// }

// export function createSectionReveal(element: HTMLElement | null) {
//   if (!element) return;
//   const targets = element.querySelectorAll<HTMLElement>('[data-animate="fade-up"]');
//   targets.forEach((el, index) => {
//     el.style.transition = `opacity 500ms ease ${index * 60}ms, transform 500ms ease ${index * 60}ms`;
//     el.style.opacity = "1";
//     el.style.transform = "translateY(0)";
//   });
// }

// // Lightweight Link replacement for standalone environment
// function Link({
//   href,
//   className,
//   children,
// }: {
//   href: string;
//   className?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <a
//       href={href}
//       onClick={(e) => e.preventDefault()}
//       className={className}
//     >
//       {children}
//     </a>
//   );
// }

// const TRANSLATIONS = {
//   en: {
//     contactPage: {
//       formSection: {
//         eyebrow: "Private Client Desk",
//         headline: "Initiate a Confidential Consultation",
//         description:
//           "Provide an overview of your relocation, residency, or corporate structuring objectives in Malta. All correspondence is reviewed directly by a Senior Partner.",
//         confidentialityNote:
//           "Protected by strict legal privilege & GDPR compliance",
//         requiredIndicator: "Required",
//         optionalIndicator: "Optional",
//         aria: {
//           formLabel: "Confidential Client Consultation Form",
//           statusRegionLabel: "Submission Status Notification",
//         },
//         fields: {
//           fullNameLabel: "Full Name",
//           fullNamePlaceholder: "e.g. Victoria Sterling",
//           emailLabel: "Email Address",
//           emailPlaceholder: "name@domain.com",
//           phoneLabel: "Telephone Number",
//           phonePlaceholder: "+356 2122 8900",
//           serviceLabel: "Programme or Practice Area",
//           servicePlaceholder: "Select a programme or advisory area...",
//           serviceOptions: {
//             residency: "Malta Permanent Residence Programme (MPRP)",
//             tax_advisory: "International Tax & Remittance Basis Advisory",
//             corporate_structuring: "Corporate & Holding Structuring",
//             property_conveyancing: "Qualifying Property Acquisition & Lease",
//             family_office: "Private Client & Family Office Governance",
//             general_inquiry: "General Legal & Relocation Inquiry",
//           } as Record<ContactServiceKey, string>,
//           subjectLabel: "Subject of Inquiry",
//           subjectPlaceholder: "e.g. MPRP Eligibility & Timeline Assessment",
//           messageLabel: "Briefing & Objectives",
//           messagePlaceholder:
//             "Outline your timeline, family composition, or specific regulatory questions...",
//           privacyConsentLabel:
//             "I consent to LRS Legal & Relocation Services processing my personal details for the purpose of responding to this confidential inquiry.",
//         },
//         validation: {
//           fullNameRequired: "Please enter your full name.",
//           emailRequired: "Please provide an email address.",
//           emailInvalid: "Please enter a valid email address.",
//           phoneInvalid: "Please enter a valid international telephone number.",
//           subjectRequired: "Please specify a subject for your inquiry.",
//           messageRequired: "Please include a brief summary of your inquiry.",
//           messageTooShort:
//             "Please provide at least 20 characters so our desk can route your inquiry accurately.",
//           privacyConsentRequired:
//             "Please confirm your consent to our privacy protocol before submitting.",
//           formErrorsSummary:
//             "Please review the highlighted fields below before submitting your inquiry.",
//         },
//         actions: {
//           submitButton: "Transmit Confidential Inquiry",
//           submittingButton: "Encrypting & Transmitting...",
//           resetButton: "Submit Another Inquiry",
//           retryButton: "Retry Transmission",
//           directEmailCta: "Send via Direct Email",
//           directPhoneCta: "Call Valletta Desk",
//         },
//         states: {
//           loadingDescription: "Establishing secure connection with Valletta desk...",
//           successTitle: "Inquiry Received by Private Client Desk",
//           successDescription:
//             "Thank you. Your briefing has been logged and assigned to a Senior Advisory Partner in Valletta. We respond to all formal inquiries within one business day.",
//           configRequiredBadge: "Direct Dispatch Active",
//           configRequiredTitle: "Direct Partner Dispatch Ready",
//           configRequiredDescription:
//             "Our automated gateway is in direct-dispatch mode. You may transmit your pre-filled briefing directly via your mail client or speak with our Valletta desk.",
//           configRequiredTechnicalNote:
//             "ENDPOINT STATUS: MAILTO_FALLBACK_READY • REF: VLT-DESK",
//           errorTitle: "Transmission Interrupted",
//           errorDescription:
//             "We encountered a temporary network interruption while transmitting your inquiry. Please retry or use direct email below.",
//           rateLimitedDescription:
//             "Too many requests were detected from this connection. Please wait a moment or contact our desk directly.",
//         },
//         sidebar: {
//           eyebrow: "Engagement Protocol",
//           title: "How We Handle Your Briefing",
//           description:
//             "Every inquiry is assessed by qualified Maltese legal and tax practitioners—never automated sales representatives.",
//           steps: [
//             {
//               number: "01",
//               title: "Conflict & Eligibility Screen",
//               detail:
//                 "We verify regulatory alignment and assign the relevant practice head within 24 business hours.",
//             },
//             {
//               number: "02",
//               title: "Preliminary Partner Call",
//               detail:
//                 "A 30-minute confidential video or Valletta chambers meeting to scope timelines and statutory requirements.",
//             },
//             {
//               number: "03",
//               title: "Formal Engagement Letter",
//               detail:
//                 "Clear fee schedule, document checklist, and statutory milestones prior to any commitment.",
//             },
//           ],
//           directDeskLabel: "Prefer Direct Correspondence?",
//           directDeskNote:
//             "Reach our Valletta chambers directly via encrypted email or telephone during business hours (CET).",
//         },
//       },
//     },
//     servicesPage: {
//       collection: {
//         sectionLabel: "Malta Programmes Directory",
//         description:
//           "Compare statutory thresholds, residency timelines, and tax frameworks across Malta's official pathways.",
//       },
//     },
//     services: {
//       viewAllCta: "Explore All Practice Areas",
//     },
//   },
//   mt: {
//     contactPage: {
//       formSection: {
//         eyebrow: "Skrivanija tal-Klijenti Privati",
//         headline: "Ibda Konsultazzjoni Kunfidenzjali",
//         description:
//           "Agħti ħarsa ġenerali lejn l-objettivi tiegħek ta' rilokazzjoni, residenza, jew strutturar korporattiv f'Malta. Kull korrispondenza tiġi riveduta direttament minn Senior Partner.",
//         confidentialityNote:
//           "Protett bi privileġġ legali strett u konformità mal-GDPR",
//         requiredIndicator: "Meħtieġ",
//         optionalIndicator: "Mhux obbligatorju",
//         aria: {
//           formLabel: "Formola ta' Konsultazzjoni Kunfidenzjali",
//           statusRegionLabel: "Notifika dwar l-Istatus tas-Sottomissjoni",
//         },
//         fields: {
//           fullNameLabel: "Isem Sħiħ",
//           fullNamePlaceholder: "eż. Victoria Sterling",
//           emailLabel: "Indirizz tal-Email",
//           emailPlaceholder: "isem@dominju.com",
//           phoneLabel: "Numru tat-Telefon",
//           phonePlaceholder: "+356 2122 8900",
//           serviceLabel: "Programm jew Qasam ta' Prattika",
//           servicePlaceholder: "Agħżel programm jew qasam ta' konsulenza...",
//           serviceOptions: {
//             residency: "Programm ta' Residenza Permanenti ta' Malta (MPRP)",
//             tax_advisory: "Konsulenza dwar Taxxa Internazzjonali",
//             corporate_structuring: "Strutturar Korporattiv u Holding",
//             property_conveyancing: "Akkwist u Kiri ta' Proprjetà Kwalifikanti",
//             family_office: "Governanza ta' Klijenti Privati u Family Office",
//             general_inquiry: "Mistoqsija Ġenerali Legali u ta' Rilokazzjoni",
//           } as Record<ContactServiceKey, string>,
//           subjectLabel: "Suġġett tal-Mistoqsija",
//           subjectPlaceholder: "eż. Valutazzjoni tal-Eliġibbiltà tal-MPRP",
//           messageLabel: "Dettalji u Objettivi",
//           messagePlaceholder:
//             "Iddeskrivi l-iskeda ta' żmien jew il-mistoqsijiet regolatorji tiegħek...",
//           privacyConsentLabel:
//             "Nagħti l-kunsens tiegħi lil LRS Legal & Relocation Services biex jipproċessaw id-dettalji personali tiegħi sabiex iwieġbu għal din l-inkjesta kunfidenzjali.",
//         },
//         validation: {
//           fullNameRequired: "Jekk jogħġbok niżżel ismek sħiħ.",
//           emailRequired: "Jekk jogħġbok ipprovdi indirizz tal-email.",
//           emailInvalid: "Jekk jogħġbok niżżel indirizz tal-email validu.",
//           phoneInvalid: "Jekk jogħġbok niżżel numru tat-telefon validu.",
//           subjectRequired: "Jekk jogħġbok speċifika suġġett għall-inkjesta tiegħek.",
//           messageRequired: "Jekk jogħġbok inkludi sommarju qasir tal-inkjesta tiegħek.",
//           messageTooShort:
//             "Jekk jogħġbok ipprovdi mill-inqas 20 karattru sabiex inkunu nistgħu ngħinuk aħjar.",
//           privacyConsentRequired:
//             "Jekk jogħġbok ikkonferma l-kunsens tiegħek qabel tibgħat.",
//           formErrorsSummary:
//             "Jekk jogħġbok iċċekkja l-oqsma mmarkati hawn taħt qabel tibgħat.",
//         },
//         actions: {
//           submitButton: "Ibgħat Inkjesta Kunfidenzjali",
//           submittingButton: "Qed Jintbagħat...",
//           resetButton: "Ibgħat Inkjesta Oħra",
//           retryButton: "Erġa' Ipprova",
//           directEmailCta: "Ibgħat bl-Email Dirett",
//           directPhoneCta: "Ċempel l-Uffiċċju tal-Belt",
//         },
//         states: {
//           loadingDescription: " Konnessjoni sigura mal-uffiċċju tal-Belt Valletta...",
//           successTitle: "L-Inkjesta Waslet Għand l-Uffiċċju",
//           successDescription:
//             "Grazzi. L-inkjesta tiegħek ġiet irreġistrata u assenjata lil Senior Partner fil-Belt Valletta. Inwieġbu fi żmien ġurnata tax-xogħol.",
//           configRequiredBadge: "Dispaċċ Dirett Attiv",
//           configRequiredTitle: "Dispaċċ Dirett Lest",
//           configRequiredDescription:
//             "Tista' tibgħat l-inkjesta tiegħek direttament bl-email jew iċċempel l-uffiċċju tagħna fil-Belt Valletta.",
//           configRequiredTechnicalNote:
//             "ENDPOINT STATUS: MAILTO_FALLBACK_READY • REF: VLT-DESK",
//           errorTitle: "Trażmissjoni Interrotta",
//           errorDescription:
//             "Inqalgħet problema temporanja fin-netwerk. Jekk jogħġbok erġa' pprova jew uża l-email dirett.",
//           rateLimitedDescription:
//             "Intbagħtu wisq talbiet minn din il-konnessjoni. Jekk jogħġbok stenna ftit.",
//         },
//         sidebar: {
//           eyebrow: "Protokoll ta' Konsultazzjoni",
//           title: "Kif Nindirizzaw l-Inkjesta Tiegħek",
//           description:
//             "Kull inkjesta tiġi evalwata minn prattikanti legali u fiskali kwalifikati f'Malta.",
//           steps: [
//             {
//               number: "01",
//               title: "Verifika ta' Eliġibbiltà",
//               detail:
//                 "Nivverifikaw l-allinjament regolatorju fi żmien 24 siegħa tax-xogħol.",
//             },
//             {
//               number: "02",
//               title: "Laqgħa Preliminari ma' Partner",
//               detail:
//                 "Konsultazzjoni kunfidenzjali ta' 30 minuta bil-vidjo jew fil-Belt Valletta.",
//             },
//             {
//               number: "03",
//               title: "Ittra ta' Inkarigu Formali",
//               detail:
//                 "Skeda ċara ta' tariffi, lista ta' dokumenti, u passijiet statutorji.",
//             },
//           ],
//           directDeskLabel: "Tippreferi Korrispondenza Diretta?",
//           directDeskNote:
//             "Ikkuntattja l-uffiċċju tagħna fil-Belt Valletta bl-email jew bit-telefon (CET).",
//         },
//       },
//     },
//     servicesPage: {
//       collection: {
//         sectionLabel: "Direttorju tal-Programmi ta' Malta",
//         description:
//           "Qabbel ir-rekwiżiti statutorji, iż-żminijiet ta' residenza, u l-oqfsa tat-taxxa f'Malta.",
//       },
//     },
//     services: {
//       viewAllCta: "Esplora l-Oqsma Kollha",
//     },
//   },
// };

// const LanguageContext = createContext<{
//   locale: Locale;
//   setLocale: (locale: Locale) => void;
//   t: typeof TRANSLATIONS.en;
// }>({
//   locale: "en",
//   setLocale: () => {},
//   t: TRANSLATIONS.en,
// });

// export function useLanguage() {
//   return useContext(LanguageContext);
// }

// // ============================================================================
// // Main ContactFormSection Component (with fixed TypeScript generic indexing)
// // ============================================================================

// const INITIAL_VALUES: ContactFormValues = {
//   fullName: "",
//   email: "",
//   phone: "",
//   service: "",
//   subject: "",
//   message: "",
//   privacyConsent: false,
//   websiteUrl: "",
// };

// export function ContactFormSection() {
//   const { locale, t } = useLanguage();
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const statusBannerRef = useRef<HTMLDivElement | null>(null);

//   const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
//   const [touched, setTouched] = useState<
//     Partial<Record<ContactValidatedField, boolean>>
//   >({});
//   const [errors, setErrors] = useState<ContactFormErrors>({});
//   const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submissionStatus, setSubmissionStatus] =
//     useState<ContactSubmissionStatusCode | null>(null);

//   const copy = t.contactPage.formSection;

//   useEffect(() => {
//     createSectionReveal(sectionRef.current);
//   }, [locale]);

//   // Pre-select service if ?service= query parameter matches a valid service key
//   useEffect(() => {
//     try {
//       const params = new URLSearchParams(window.location.search);
//       const queryService = params.get("service") as ContactServiceKey | null;
//       if (queryService && CONTACT_SERVICE_KEYS.includes(queryService)) {
//         setValues((prev) =>
//           prev.service ? prev : { ...prev, service: queryService }
//         );
//       }
//     } catch {
//       // Safe no-op if window is unavailable
//     }
//   }, []);

//   // Re-translate active validation messages immediately when the user switches language
//   useEffect(() => {
//     if (!hasAttemptedSubmit && Object.keys(touched).length === 0) return;
//     const allErrors = validateContactForm(values, copy.validation);
//     if (hasAttemptedSubmit) {
//       setErrors(allErrors);
//     } else {
//       const nextErrors: ContactFormErrors = {};
//       (Object.keys(touched) as Array<ContactValidatedField>).forEach((key) => {
//         if (touched[key] && allErrors[key]) {
//           nextErrors[key] = allErrors[key];
//         }
//       });
//       setErrors(nextErrors);
//     }
//   }, [locale, copy.validation, values, touched, hasAttemptedSubmit]);

//   const handleFieldChange = <K extends keyof ContactFormValues>(
//     field: K,
//     value: ContactFormValues[K]
//   ) => {
//     const nextValues = { ...values, [field]: value };
//     setValues(nextValues);

//     if (submissionStatus && submissionStatus !== "SUCCESS") {
//       setSubmissionStatus(null);
//     }

//     if (hasAttemptedSubmit) {
//       const nextAllErrors = validateContactForm(nextValues, copy.validation);
//       setErrors(nextAllErrors);
//       return;
//     }

//     if (field !== "websiteUrl") {
//       const validatedField = field as ContactValidatedField;
//       if (touched[validatedField]) {
//         const nextAllErrors = validateContactForm(nextValues, copy.validation);
//         setErrors((prev) => ({
//           ...prev,
//           [validatedField]: nextAllErrors[validatedField],
//         }));
//       }
//     }
//   };

//   const handleFieldBlur = (field: ContactValidatedField) => {
//     setTouched((prev) => ({ ...prev, [field]: true }));
//     const nextAllErrors = validateContactForm(values, copy.validation);
//     setErrors((prev) => ({
//       ...prev,
//       [field]: nextAllErrors[field],
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     setHasAttemptedSubmit(true);
//     const validationErrors = validateContactForm(values, copy.validation);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmissionStatus(null);

//     const result = await submitContactInquiry(values, locale);
//     setIsSubmitting(false);
//     setSubmissionStatus(result.code);

//     setTimeout(() => {
//       statusBannerRef.current?.focus();
//     }, 50);
//   };

//   const handleReset = () => {
//     setValues(INITIAL_VALUES);
//     setTouched({});
//     setErrors({});
//     setHasAttemptedSubmit(false);
//     setSubmissionStatus(null);
//   };

//   const selectedServiceLabel = values.service
//     ? copy.fields.serviceOptions[values.service]
//     : undefined;

//   const directMailtoHref = buildDirectMailtoHref(
//     values,
//     BROCHURE_CONTACT_INFO.email,
//     selectedServiceLabel
//   );

//   const hasValidationErrors =
//     hasAttemptedSubmit && Object.keys(errors).length > 0;

//   return (
//     <section
//       id="contact-form"
//       ref={sectionRef}
//       className="py-16 lg:py-24 bg-[#F7F6F2] border-b border-[#E2DFD7] text-[#141A24]"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="max-w-3xl mb-14">
//           <div
//             data-animate="fade-up"
//             className="inline-flex items-center gap-3 mb-4"
//           >
//             <span className="w-8 h-[2px] bg-[#B89352]" />
//             <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2B49]">
//               {copy.eyebrow}
//             </span>
//           </div>

//           <h2
//             data-animate="fade-up"
//             className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141A24] leading-[1.14] tracking-tight mb-4"
//           >
//             {copy.headline}
//           </h2>

//           <p
//             data-animate="fade-up"
//             className="font-sans text-[16px] font-normal text-[#5A6475] leading-[28px] mb-0"
//           >
//             {copy.description}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//           {/* Left Column: Primary Contact Form */}
//           <div className="lg:col-span-8" data-animate="fade-up">
//             <div className="bg-white border border-[#E2DFD7] p-7 sm:p-10 lg:p-12 shadow-sm">
//               {/* Top Confidentiality Strip */}
//               <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[#E2DFD7]">
//                 <div className="inline-flex items-center gap-2.5 text-xs font-medium text-[#1A2B49]">
//                   <ShieldCheck className="w-4 h-4 text-[#B89352] shrink-0" />
//                   <span>{copy.confidentialityNote}</span>
//                 </div>
//                 <span className="font-mono text-[11px] uppercase tracking-widest text-[#5A6475]">
//                   LRS • VALLETTA
//                 </span>
//               </div>

//               {/* Confirmed Server Submission Success State */}
//               {submissionStatus === "SUCCESS" ? (
//                 <div
//                   ref={statusBannerRef}
//                   tabIndex={-1}
//                   role="status"
//                   aria-live="polite"
//                   className="bg-[#F7F6F2] border-l-4 border-[#B89352] p-7 sm:p-9 focus:outline-none"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-[#F5EFE4] text-[#1A2B49] flex items-center justify-center shrink-0">
//                       <CheckCircle2 className="w-5 h-5 text-[#B89352]" />
//                     </div>
//                     <div>
//                       <h3 className="font-serif text-2xl text-[#141A24] mb-2">
//                         {copy.states.successTitle}
//                       </h3>
//                       <p className="text-sm sm:text-base text-[#5A6475] leading-relaxed mb-6">
//                         {copy.states.successDescription}
//                       </p>
//                       <button
//                         type="button"
//                         onClick={handleReset}
//                         className="inline-flex items-center gap-2.5 bg-[#1A2B49] hover:bg-[#B89352] text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors duration-300"
//                       >
//                         <RotateCcw className="w-3.5 h-3.5" />
//                         <span>{copy.actions.resetButton}</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <form
//                   onSubmit={handleSubmit}
//                   noValidate
//                   aria-label={copy.aria.formLabel}
//                   className="space-y-6"
//                 >
//                   {/* Honeypot field (hidden from assistive tech and visual users) */}
//                   <div
//                     aria-hidden="true"
//                     className="hidden"
//                     style={{ display: "none" }}
//                   >
//                     <label htmlFor="contact-website-url">Website</label>
//                     <input
//                       id="contact-website-url"
//                       name="websiteUrl"
//                       type="text"
//                       tabIndex={-1}
//                       autoComplete="off"
//                       value={values.websiteUrl}
//                       onChange={(e) =>
//                         handleFieldChange("websiteUrl", e.target.value)
//                       }
//                     />
//                   </div>

//                   {/* Validation Error Summary Alert */}
//                   {hasValidationErrors && (
//                     <div
//                       role="alert"
//                       aria-live="assertive"
//                       className="bg-red-50/80 border-l-4 border-red-600 p-4 flex items-start gap-3 text-red-900"
//                     >
//                       <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
//                       <p className="text-xs sm:text-sm font-medium leading-relaxed">
//                         {copy.validation.formErrorsSummary}
//                       </p>
//                     </div>
//                   )}

//                   {/* Honest Backend Configuration Required / Server Error Feedback Banner */}
//                   {submissionStatus === "CONFIGURATION_REQUIRED" && (
//                     <div
//                       ref={statusBannerRef}
//                       tabIndex={-1}
//                       role="region"
//                       aria-label={copy.aria.statusRegionLabel}
//                       aria-live="polite"
//                       className="bg-[#F7F6F2] border border-[#B89352] p-6 sm:p-7 focus:outline-none"
//                     >
//                       <span className="inline-block bg-[#F5EFE4] text-[#1A2B49] text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 mb-3 border border-[#B89352]/30">
//                         {copy.states.configRequiredBadge}
//                       </span>
//                       <h3 className="font-serif text-xl sm:text-2xl text-[#141A24] mb-2">
//                         {copy.states.configRequiredTitle}
//                       </h3>
//                       <p className="text-sm text-[#5A6475] leading-relaxed mb-4">
//                         {copy.states.configRequiredDescription}
//                       </p>
//                       <p className="text-xs font-mono text-[#1A2B49] bg-white border border-[#E2DFD7] p-3 mb-5 leading-relaxed">
//                         {copy.states.configRequiredTechnicalNote}
//                       </p>
//                       <div className="flex flex-wrap items-center gap-3">
//                         <a
//                           href={directMailtoHref}
//                           className="inline-flex items-center gap-2.5 bg-[#1A2B49] hover:bg-[#B89352] text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors duration-300"
//                         >
//                           <Mail className="w-3.5 h-3.5" />
//                           <span>{copy.actions.directEmailCta}</span>
//                           <ArrowUpRight className="w-3.5 h-3.5" />
//                         </a>
//                         <a
//                           href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(
//                             /\s+/g,
//                             ""
//                           )}`}
//                           className="inline-flex items-center gap-2 border border-[#E2DFD7] hover:border-[#1A2B49] bg-white text-[#141A24] hover:text-[#1A2B49] text-xs font-semibold uppercase tracking-[0.16em] px-5 py-3.5 transition-colors duration-300"
//                         >
//                           <Phone className="w-3.5 h-3.5 text-[#B89352]" />
//                           <span>{copy.actions.directPhoneCta}</span>
//                         </a>
//                       </div>
//                     </div>
//                   )}

//                   {(submissionStatus === "SERVER_ERROR" ||
//                     submissionStatus === "NETWORK_ERROR" ||
//                     submissionStatus === "RATE_LIMITED" ||
//                     submissionStatus === "VALIDATION_ERROR") && (
//                     <div
//                       ref={statusBannerRef}
//                       tabIndex={-1}
//                       role="alert"
//                       aria-live="assertive"
//                       className="bg-red-50/80 border-l-4 border-red-600 p-6 focus:outline-none"
//                     >
//                       <div className="flex items-start gap-3.5">
//                         <ServerCrash className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
//                         <div>
//                           <h3 className="font-serif text-xl text-[#141A24] mb-1.5">
//                             {copy.states.errorTitle}
//                           </h3>
//                           <p className="text-sm text-[#5A6475] leading-relaxed mb-4">
//                             {submissionStatus === "RATE_LIMITED"
//                               ? copy.states.rateLimitedDescription
//                               : copy.states.errorDescription}
//                           </p>
//                           <div className="flex flex-wrap items-center gap-3">
//                             <button
//                               type="submit"
//                               disabled={isSubmitting}
//                               className="inline-flex items-center gap-2 bg-[#1A2B49] hover:bg-[#B89352] text-white text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
//                             >
//                               <RotateCcw className="w-3.5 h-3.5" />
//                               <span>{copy.actions.retryButton}</span>
//                             </button>
//                             <a
//                               href={directMailtoHref}
//                               className="inline-flex items-center gap-2 border border-[#E2DFD7] hover:border-[#1A2B49] bg-white text-[#141A24] text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
//                             >
//                               <Mail className="w-3.5 h-3.5 text-[#B89352]" />
//                               <span>{copy.actions.directEmailCta}</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Row 1: Full Name & Email Address */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     {/* 1. Full Name (Required) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-full-name"
//                           className="text-xs font-semibold uppercase tracking-wider text-[#141A24]"
//                         >
//                           {copy.fields.fullNameLabel}{" "}
//                           <span className="text-[#B89352]" aria-hidden="true">
//                             *
//                           </span>
//                         </label>
//                         <span className="text-[11px] font-mono text-[#5A6475]">
//                           {copy.requiredIndicator}
//                         </span>
//                       </div>
//                       <input
//                         id="contact-full-name"
//                         name="fullName"
//                         type="text"
//                         required
//                         autoComplete="name"
//                         disabled={isSubmitting}
//                         value={values.fullName}
//                         onChange={(e) =>
//                           handleFieldChange("fullName", e.target.value)
//                         }
//                         onBlur={() => handleFieldBlur("fullName")}
//                         placeholder={copy.fields.fullNamePlaceholder}
//                         aria-invalid={Boolean(errors.fullName)}
//                         aria-describedby={
//                           errors.fullName ? "contact-full-name-error" : undefined
//                         }
//                         className={`w-full bg-white border px-4 py-3.5 text-sm text-[#141A24] placeholder:text-[#5A6475]/55 transition-colors duration-200 focus:outline-none ${
//                           errors.fullName
//                             ? "border-red-600 focus:border-red-600"
//                             : "border-[#E2DFD7] hover:border-[#1A2B49]/60 focus:border-[#1A2B49]"
//                         }`}
//                       />
//                       {errors.fullName && (
//                         <p
//                           id="contact-full-name-error"
//                           role="alert"
//                           className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                         >
//                           <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                           <span>{errors.fullName}</span>
//                         </p>
//                       )}
//                     </div>

//                     {/* 2. Email Address (Required) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-email"
//                           className="text-xs font-semibold uppercase tracking-wider text-[#141A24]"
//                         >
//                           {copy.fields.emailLabel}{" "}
//                           <span className="text-[#B89352]" aria-hidden="true">
//                             *
//                           </span>
//                         </label>
//                         <span className="text-[11px] font-mono text-[#5A6475]">
//                           {copy.requiredIndicator}
//                         </span>
//                       </div>
//                       <input
//                         id="contact-email"
//                         name="email"
//                         type="email"
//                         required
//                         autoComplete="email"
//                         disabled={isSubmitting}
//                         value={values.email}
//                         onChange={(e) =>
//                           handleFieldChange("email", e.target.value)
//                         }
//                         onBlur={() => handleFieldBlur("email")}
//                         placeholder={copy.fields.emailPlaceholder}
//                         aria-invalid={Boolean(errors.email)}
//                         aria-describedby={
//                           errors.email ? "contact-email-error" : undefined
//                         }
//                         className={`w-full bg-white border px-4 py-3.5 text-sm text-[#141A24] placeholder:text-[#5A6475]/55 transition-colors duration-200 focus:outline-none ${
//                           errors.email
//                             ? "border-red-600 focus:border-red-600"
//                             : "border-[#E2DFD7] hover:border-[#1A2B49]/60 focus:border-[#1A2B49]"
//                         }`}
//                       />
//                       {errors.email && (
//                         <p
//                           id="contact-email-error"
//                           role="alert"
//                           className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                         >
//                           <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                           <span>{errors.email}</span>
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Row 2: Phone Number & Service Interested In */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     {/* 3. Phone Number (Optional) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-phone"
//                           className="text-xs font-semibold uppercase tracking-wider text-[#141A24]"
//                         >
//                           {copy.fields.phoneLabel}
//                         </label>
//                         <span className="text-[11px] font-mono text-[#5A6475]">
//                           {copy.optionalIndicator}
//                         </span>
//                       </div>
//                       <input
//                         id="contact-phone"
//                         name="phone"
//                         type="tel"
//                         autoComplete="tel"
//                         disabled={isSubmitting}
//                         value={values.phone}
//                         onChange={(e) =>
//                           handleFieldChange("phone", e.target.value)
//                         }
//                         onBlur={() => handleFieldBlur("phone")}
//                         placeholder={copy.fields.phonePlaceholder}
//                         aria-invalid={Boolean(errors.phone)}
//                         aria-describedby={
//                           errors.phone ? "contact-phone-error" : undefined
//                         }
//                         className={`w-full bg-white border px-4 py-3.5 text-sm text-[#141A24] placeholder:text-[#5A6475]/55 transition-colors duration-200 focus:outline-none ${
//                           errors.phone
//                             ? "border-red-600 focus:border-red-600"
//                             : "border-[#E2DFD7] hover:border-[#1A2B49]/60 focus:border-[#1A2B49]"
//                         }`}
//                       />
//                       {errors.phone && (
//                         <p
//                           id="contact-phone-error"
//                           role="alert"
//                           className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                         >
//                           <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                           <span>{errors.phone}</span>
//                         </p>
//                       )}
//                     </div>

//                     {/* 4. Service Interested In (Optional Dropdown with stable internal keys) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-service"
//                           className="text-xs font-semibold uppercase tracking-wider text-[#141A24]"
//                         >
//                           {copy.fields.serviceLabel}
//                         </label>
//                         <span className="text-[11px] font-mono text-[#5A6475]">
//                           {copy.optionalIndicator}
//                         </span>
//                       </div>
//                       <select
//                         id="contact-service"
//                         name="service"
//                         disabled={isSubmitting}
//                         value={values.service}
//                         onChange={(e) =>
//                           handleFieldChange(
//                             "service",
//                             e.target.value as ContactServiceKey | ""
//                           )
//                         }
//                         className="w-full bg-white border border-[#E2DFD7] hover:border-[#1A2B49]/60 focus:border-[#1A2B49] px-4 py-3.5 text-sm text-[#141A24] transition-colors duration-200 focus:outline-none"
//                       >
//                         <option value="">{copy.fields.servicePlaceholder}</option>
//                         {CONTACT_SERVICE_KEYS.map((serviceKey) => (
//                           <option key={serviceKey} value={serviceKey}>
//                             {copy.fields.serviceOptions[serviceKey]}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* 5. Subject (Required) */}
//                   <div>
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <label
//                         htmlFor="contact-subject"
//                         className="text-xs font-semibold uppercase tracking-wider text-[#141A24]"
//                       >
//                         {copy.fields.subjectLabel}{" "}
//                         <span className="text-[#B89352]" aria-hidden="true">
//                           *
//                         </span>
//                       </label>
//                       <span className="text-[11px] font-mono text-[#5A6475]">
//                         {copy.requiredIndicator}
//                       </span>
//                     </div>
//                     <input
//                       id="contact-subject"
//                       name="subject"
//                       type="text"
//                       required
//                       disabled={isSubmitting}
//                       value={values.subject}
//                       onChange={(e) =>
//                         handleFieldChange("subject", e.target.value)
//                       }
//                       onBlur={() => handleFieldBlur("subject")}
//                       placeholder={copy.fields.subjectPlaceholder}
//                       aria-invalid={Boolean(errors.subject)}
//                       aria-describedby={
//                         errors.subject ? "contact-subject-error" : undefined
//                       }
//                       className={`w-full bg-white border px-4 py-3.5 text-sm text-[#141A24] placeholder:text-[#5A6475]/55 transition-colors duration-200 focus:outline-none ${
//                         errors.subject
//                           ? "border-red-600 focus:border-red-600"
//                           : "border-[#E2DFD7] hover:border-[#1A2B49]/60 focus:border-[#1A2B49]"
//                       }`}
//                     />
//                     {errors.subject && (
//                       <p
//                         id="contact-subject-error"
//                         role="alert"
//                         className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                       >
//                         <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                         <span>{errors.subject}</span>
//                       </p>
//                     )}
//                   </div>

//                   {/* 6. Message (Required Textarea) */}
//                   <div>
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <label
//                         htmlFor="contact-message"
//                         className="text-xs font-semibold uppercase tracking-wider text-[#141A24]"
//                       >
//                         {copy.fields.messageLabel}{" "}
//                         <span className="text-[#B89352]" aria-hidden="true">
//                           *
//                         </span>
//                       </label>
//                       <span className="text-[11px] font-mono text-[#5A6475]">
//                         {copy.requiredIndicator}
//                       </span>
//                     </div>
//                     <textarea
//                       id="contact-message"
//                       name="message"
//                       rows={5}
//                       required
//                       disabled={isSubmitting}
//                       value={values.message}
//                       onChange={(e) =>
//                         handleFieldChange("message", e.target.value)
//                       }
//                       onBlur={() => handleFieldBlur("message")}
//                       placeholder={copy.fields.messagePlaceholder}
//                       aria-invalid={Boolean(errors.message)}
//                       aria-describedby={
//                         errors.message ? "contact-message-error" : undefined
//                       }
//                       className={`w-full bg-white border px-4 py-3.5 text-sm text-[#141A24] placeholder:text-[#5A6475]/55 transition-colors duration-200 focus:outline-none resize-y ${
//                         errors.message
//                           ? "border-red-600 focus:border-red-600"
//                           : "border-[#E2DFD7] hover:border-[#1A2B49]/60 focus:border-[#1A2B49]"
//                       }`}
//                     />
//                     {errors.message && (
//                       <p
//                         id="contact-message-error"
//                         role="alert"
//                         className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                       >
//                         <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                         <span>{errors.message}</span>
//                       </p>
//                     )}
//                   </div>

//                   {/* 7. Privacy Consent Checkbox */}
//                   <div className="pt-2">
//                     <div className="flex items-start gap-3">
//                       <input
//                         id="contact-privacy-consent"
//                         name="privacyConsent"
//                         type="checkbox"
//                         required
//                         disabled={isSubmitting}
//                         checked={values.privacyConsent}
//                         onChange={(e) =>
//                           handleFieldChange("privacyConsent", e.target.checked)
//                         }
//                         onBlur={() => handleFieldBlur("privacyConsent")}
//                         aria-invalid={Boolean(errors.privacyConsent)}
//                         aria-describedby={
//                           errors.privacyConsent
//                             ? "contact-privacy-error"
//                             : undefined
//                         }
//                         className="mt-1 h-4 w-4 shrink-0 border-[#E2DFD7] text-[#1A2B49] focus:ring-[#B89352] accent-[#1A2B49]"
//                       />
//                       <label
//                         htmlFor="contact-privacy-consent"
//                         className="text-xs sm:text-sm text-[#5A6475] leading-relaxed cursor-pointer"
//                       >
//                         {copy.fields.privacyConsentLabel}{" "}
//                         <span className="text-[#B89352]" aria-hidden="true">
//                           *
//                         </span>
//                       </label>
//                     </div>
//                     {errors.privacyConsent && (
//                       <p
//                         id="contact-privacy-error"
//                         role="alert"
//                         className="mt-2 text-xs text-red-600 flex items-center gap-1.5"
//                       >
//                         <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                         <span>{errors.privacyConsent}</span>
//                       </p>
//                     )}
//                   </div>

//                   {/* Submit Action Bar */}
//                   <div className="pt-4 border-t border-[#E2DFD7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="inline-flex items-center justify-center gap-3 bg-[#1A2B49] hover:bg-[#B89352] disabled:opacity-65 disabled:pointer-events-none text-white text-xs font-semibold uppercase tracking-[0.16em] px-8 py-4 transition-colors duration-300"
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <Loader2 className="w-4 h-4 animate-spin" />
//                           <span>{copy.actions.submittingButton}</span>
//                         </>
//                       ) : (
//                         <>
//                           <span>{copy.actions.submitButton}</span>
//                           <Send className="w-3.5 h-3.5" />
//                         </>
//                       )}
//                     </button>

//                     {isSubmitting && (
//                       <p
//                         role="status"
//                         aria-live="polite"
//                         className="text-xs text-[#5A6475]"
//                       >
//                         {copy.states.loadingDescription}
//                       </p>
//                     )}
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>

//           {/* Right Column: Editorial Consultation Protocol & Direct Desk Sidebar */}
//           <aside
//             className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
//             data-animate="fade-up"
//           >
//             <div className="bg-[#0F1B30] text-white p-7 sm:p-8 border border-[#0F1B30] shadow-lg">
//               <div className="inline-flex items-center gap-2.5 mb-3">
//                 <span className="w-6 h-[2px] bg-[#B89352]" />
//                 <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B89352]">
//                   {copy.sidebar.eyebrow}
//                 </span>
//               </div>

//               <h3 className="font-serif text-2xl text-white leading-snug mb-3">
//                 {copy.sidebar.title}
//               </h3>

//               <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-7">
//                 {copy.sidebar.description}
//               </p>

//               <div className="space-y-5 border-t border-white/15 pt-6">
//                 {copy.sidebar.steps.map((step) => (
//                   <div key={step.number} className="flex items-start gap-4">
//                     <span className="w-8 h-8 bg-white/10 text-[#B89352] font-mono text-xs font-semibold flex items-center justify-center shrink-0 border border-white/15">
//                       {step.number}
//                     </span>
//                     <div>
//                       <h4 className="text-sm font-semibold text-white">
//                         {step.title}
//                       </h4>
//                       <p className="text-xs text-white/75 leading-relaxed mt-1">
//                         {step.detail}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 pt-6 border-t border-white/15">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-[#B89352] mb-2">
//                   {copy.sidebar.directDeskLabel}
//                 </p>
//                 <p className="text-xs text-white/75 leading-relaxed mb-5">
//                   {copy.sidebar.directDeskNote}
//                 </p>

//                 <div className="space-y-2.5">
//                   <a
//                     href={`mailto:${BROCHURE_CONTACT_INFO.email}`}
//                     className="w-full inline-flex items-center justify-between gap-2 bg-white/10 hover:bg-[#B89352] text-white text-xs font-semibold uppercase tracking-[0.14em] px-4 py-3 border border-white/15 transition-colors duration-300"
//                   >
//                     <span className="inline-flex items-center gap-2 truncate">
//                       <Mail className="w-3.5 h-3.5 text-[#B89352] shrink-0" />
//                       <span className="truncate">
//                         {BROCHURE_CONTACT_INFO.email}
//                       </span>
//                     </span>
//                     <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
//                   </a>

//                   <a
//                     href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(
//                       /\s+/g,
//                       ""
//                     )}`}
//                     className="w-full inline-flex items-center justify-between gap-2 bg-white/5 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-[0.14em] px-4 py-3 border border-white/15 transition-colors duration-300"
//                   >
//                     <span className="inline-flex items-center gap-2">
//                       <Phone className="w-3.5 h-3.5 text-[#B89352] shrink-0" />
//                       <span>{BROCHURE_CONTACT_INFO.phone}</span>
//                     </span>
//                     <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Link to Malta Programmes Directory */}
//             <div className="bg-white border border-[#E2DFD7] p-6 shadow-sm">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1A2B49] mb-2">
//                 {t.servicesPage.collection.sectionLabel}
//               </p>
//               <p className="text-xs text-[#5A6475] leading-relaxed mb-4">
//                 {t.servicesPage.collection.description}
//               </p>
//               <Link
//                 href="/services"
//                 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#1A2B49] hover:text-[#B89352] transition-colors"
//               >
//                 <span>{t.services.viewAllCta}</span>
//                 <ArrowUpRight className="w-3.5 h-3.5" />
//               </Link>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Default export wrapper for interactive preview with Language Switcher
// export default function App() {
//   const [locale, setLocale] = useState<Locale>("en");

//   return (
//     <LanguageContext.Provider
//       value={{
//         locale,
//         setLocale,
//         t: TRANSLATIONS[locale],
//       }}
//     >
//       <div className="min-h-screen bg-[#F7F6F2]">
//         <header className="bg-[#0F1B30] text-white border-b border-white/10 px-6 lg:px-12 py-4">
//           <div className="max-w-7xl mx-auto flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B89352]">
//                 LRS • MALTA
//               </span>
//               <span className="text-white/30">|</span>
//               <span className="text-xs text-white/80">
//                 Legal &amp; Relocation Services
//               </span>
//             </div>
//             <button
//               type="button"
//               onClick={() => setLocale((prev) => (prev === "en" ? "mt" : "en"))}
//               className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/20 px-3.5 py-1.5 border border-white/15 transition-colors"
//             >
//               <Globe className="w-3.5 h-3.5 text-[#B89352]" />
//               <span>{locale === "en" ? "EN / Switch to MT" : "MT / Switch to EN"}</span>
//             </button>
//           </div>
//         </header>
//         <ContactFormSection />
//       </div>
//     </LanguageContext.Provider>
//   );
// }


// new code
// src/components/contact/ContactFormSection.tsx
// "use client";

// import React, { useState, useRef, useEffect } from "react";

// // Mock fallback for next/link if unavailable in standalone preview
// const Link = ({ href, children, className, ...props }: any) => (
//   <a href={href} className={className} {...props}>{children}</a>
// );

// import {
//   Send,
//   CheckCircle2,
//   AlertCircle,
//   ShieldCheck,
//   Mail,
//   Phone,
//   Loader2,
//   RotateCcw,
//   ArrowUpRight,
//   ServerCrash,
// } from "lucide-react";

// // Fallbacks for project contexts and utilities in preview/sandbox mode
// const useLanguage = () => ({
//   locale: "en",
//   t: {
//     contactPage: {
//       formSection: {
//         eyebrow: "Confidential Inquiry Desk",
//         headline: "Initiate Private Consultation",
//         description: "Connect directly with our senior relocation and legal counsel in Valletta for tailored guidance.",
//         confidentialityNote: "Strictly Confidential & Protected by Legal Professional Privilege",
//         requiredIndicator: "Required",
//         optionalIndicator: "Optional",
//         states: {
//           successTitle: "Inquiry Successfully Transmitted",
//           successDescription: "Thank you. Your dossier has been securely dispatched to our managing partners. We will respond within 4 business hours.",
//           configRequiredBadge: "Environment Notice",
//           configRequiredTitle: "Backend Integration Pending",
//           configRequiredDescription: "The live email dispatch handler requires active SMTP/API keys on Netlify.",
//           configRequiredTechnicalNote: "Configure your environment variables to enable direct server submissions.",
//           errorTitle: "Transmission Interrupted",
//           errorDescription: "We encountered an issue dispatching your transmission. Please try again or use direct email.",
//           rateLimitedDescription: "Too many submissions detected. Please wait a moment before trying again.",
//           loadingDescription: "Encrypting and transmitting secure inquiry..."
//         },
//         actions: {
//           resetButton: "Submit Another Inquiry",
//           retryButton: "Retry Transmission",
//           directEmailCta: "Direct Desk Email",
//           directPhoneCta: "Direct Phone Desk",
//           submittingButton: "Transmitting...",
//           submitButton: "Send Secure Inquiry"
//         },
//         fields: {
//           fullNameLabel: "Full Legal Name",
//           fullNamePlaceholder: "e.g. Lord / Dr. Alexander Vance",
//           emailLabel: "Secure Email Address",
//           emailPlaceholder: "name@domain.com",
//           phoneLabel: "Telephone Contact",
//           phonePlaceholder: "+356 0000 0000",
//           serviceLabel: "Area of Counsel / Programme",
//           servicePlaceholder: "Select preferred practice area",
//           serviceOptions: {
//             "malta-permanent-residence": "Malta Permanent Residence Programme (MPRP)",
//             "malta-citizenship": "Malta Citizenship by Direct Investment",
//             "global-residence": "Global Residence Programme (GRP)",
//             "corporate-relocation": "Corporate Relocation & Tax Structuring",
//             "real-estate": "Prime Real Estate Acquisition"
//           },
//           subjectLabel: "Subject / Matter Reference",
//           subjectPlaceholder: "Brief summary of your relocation objectives",
//           messageLabel: "Detailed Inquiry / Brief",
//           messagePlaceholder: "Please outline your specific requirements, timeline, and family or corporate structure...",
//           privacyConsentLabel: "I consent to the secure processing of this data in accordance with GDPR and professional legal confidentiality standards."
//         },
//         validation: {
//           formErrorsSummary: "Please correct the highlighted fields below before submitting your inquiry.",
//           fullNameRequired: "Full legal name is required.",
//           emailRequired: "A valid email address is required.",
//           emailInvalid: "Please enter a valid email address format.",
//           phoneInvalid: "Please enter a valid phone number.",
//           subjectRequired: "A subject reference is required.",
//           messageRequired: "An inquiry message is required.",
//           privacyConsentRequired: "You must consent to our privacy protocol to proceed."
//         },
//         aria: {
//           formLabel: "Secure Contact and Consultation Inquiry Form",
//           statusRegionLabel: "Submission Status Feedback"
//         },
//         sidebar: {
//             eyebrow: "Consultation Protocol",
//             title: "Private Client Advisory",
//             description: "Every inquiry is handled under strict attorney-client privilege guidelines from our headquarters in Valletta.",
//             directDeskLabel: "Direct Managing Desk",
//             directDeskNote: "For immediate, time-sensitive private wealth or relocation matters.",
//             steps: [
//                 { number: "01", title: "Secure Submission", detail: "Inquiry is encrypted and routed directly to senior partners." },
//                 { number: "02", title: "Initial Review", detail: "A dedicated director reviews your specific jurisdictional requirements." },
//                 { number: "03", title: "Confidential Call", detail: "We schedule a secure consultation at your earliest convenience." }
//             ]
//         }
//       }
//     },
//     servicesPage: {
//       collection: {
//         sectionLabel: "Malta Programmes Directory",
//         description: "Explore our comprehensive suite of residency and citizenship solutions tailored for private clients."
//       }
//     },
//     services: {
//       viewAllCta: "View All Programmes"
//     }
//   }
// });

// export type ContactServiceKey =
//   | "malta-permanent-residence"
//   | "malta-citizenship"
//   | "global-residence"
//   | "corporate-relocation"
//   | "real-estate";

// const BROCHURE_CONTACT_INFO = {
//   email: "advisory@lrs-malta.com",
//   phone: "+356 2100 0000"
// };

// const createSectionReveal = (el: HTMLElement | null) => {
//   // Animation stub
// };

// export const CONTACT_SERVICE_KEYS: ContactServiceKey[] = [
//   "malta-permanent-residence",
//   "malta-citizenship",
//   "global-residence",
//   "corporate-relocation",
//   "real-estate"
// ];

// export interface ContactFormValues {
//   fullName: string;
//   email: string;
//   phone: string;
//   service: ContactServiceKey | "";
//   subject: string;
//   message: string;
//   privacyConsent: boolean;
//   websiteUrl: string; // Honeypot
// }

// export type ContactFormErrors = Partial<Record<keyof Omit<ContactFormValues, "websiteUrl">, string>>;

// export type ContactSubmissionStatusCode =
//   | "SUCCESS"
//   | "CONFIGURATION_REQUIRED"
//   | "SERVER_ERROR"
//   | "NETWORK_ERROR"
//   | "RATE_LIMITED"
//   | "VALIDATION_ERROR";

// export const validateContactForm = (
//   values: ContactFormValues,
//   validationCopy: any
// ): ContactFormErrors => {
//   const errors: ContactFormErrors = {};

//   if (!values.fullName.trim()) {
//     errors.fullName = validationCopy.fullNameRequired;
//   }

//   if (!values.email.trim()) {
//     errors.email = validationCopy.emailRequired;
//   } else {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(values.email)) {
//       errors.email = validationCopy.emailInvalid;
//     }
//   }

//   if (values.phone.trim()) {
//     const phoneRegex = /^[\d\s\-\+\(\)]+$/;
//     if (!phoneRegex.test(values.phone) || values.phone.trim().length < 6) {
//       errors.phone = validationCopy.phoneInvalid;
//     }
//   }

//   if (!values.subject.trim()) {
//     errors.subject = validationCopy.subjectRequired;
//   }

//   if (!values.message.trim()) {
//     errors.message = validationCopy.messageRequired;
//   }

//   if (!values.privacyConsent) {
//     errors.privacyConsent = validationCopy.privacyConsentRequired;
//   }

//   return errors;
// };

// export const submitContactInquiry = async (
//   values: ContactFormValues,
//   locale: string
// ): Promise<{ code: ContactSubmissionStatusCode }> => {
//   if (values.websiteUrl) {
//     return { code: "SUCCESS" }; // Silent catch for bots
//   }
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return { code: "CONFIGURATION_REQUIRED" };
// };

// export const buildDirectMailtoHref = (
//   values: ContactFormValues,
//   email: string,
//   serviceLabel?: string
// ): string => {
//   const subject = encodeURIComponent(values.subject || "Private Client Inquiry");
//   const body = encodeURIComponent(
//     `Name: ${values.fullName}\nEmail: ${values.email}\nPhone: ${values.phone || "N/A"}\nService: ${serviceLabel || "General"}\n\nMessage:\n${values.message}`
//   );
//   return `mailto:${email}?subject=${subject}&body=${body}`;
// };

// type ContactValidatedField = keyof Omit<ContactFormValues, "websiteUrl">;

// const INITIAL_VALUES: ContactFormValues = {
//   fullName: "",
//   email: "",
//   phone: "",
//   service: "",
//   subject: "",
//   message: "",
//   privacyConsent: false,
//   websiteUrl: "",
// };

// export function ContactFormSection() {
//   const { locale, t } = useLanguage();
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const statusBannerRef = useRef<HTMLDivElement | null>(null);

//   const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
//   const [touched, setTouched] = useState<
//     Partial<Record<ContactValidatedField, boolean>>
//   >({});
//   const [errors, setErrors] = useState<ContactFormErrors>({});
//   const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submissionStatus, setSubmissionStatus] =
//     useState<ContactSubmissionStatusCode | null>(null);

//   const copy = t.contactPage.formSection;

//   useEffect(() => {
//     createSectionReveal(sectionRef.current);
//   }, [locale]);

//   // Pre-select service if ?service= query parameter matches a valid service key
//   useEffect(() => {
//     try {
//       const params = new URLSearchParams(window.location.search);
//       const queryService = params.get("service") as ContactServiceKey | null;
//       if (queryService && CONTACT_SERVICE_KEYS.includes(queryService)) {
//         setValues((prev) =>
//           prev.service ? prev : { ...prev, service: queryService }
//         );
//       }
//     } catch {
//       // Safe no-op if window is unavailable
//     }
//   }, []);

//   // Re-translate active validation messages immediately when the user switches language
//   useEffect(() => {
//     if (!hasAttemptedSubmit && Object.keys(touched).length === 0) return;
//     const allErrors = validateContactForm(values, copy.validation);
//     if (hasAttemptedSubmit) {
//       setErrors(allErrors);
//     } else {
//       const nextErrors: ContactFormErrors = {};
//       (Object.keys(touched) as Array<keyof typeof touched>).forEach((key) => {
//         if (touched[key] && allErrors[key]) {
//           nextErrors[key] = allErrors[key];
//         }
//       });
//       setErrors(nextErrors);
//     }
//   }, [locale, copy.validation, values, touched, hasAttemptedSubmit]);

//   const handleFieldChange = <K extends keyof ContactFormValues>(
//     field: K,
//     value: ContactFormValues[K]
//   ) => {
//     const nextValues = { ...values, [field]: value };
//     setValues(nextValues);

//     if (submissionStatus && submissionStatus !== "SUCCESS") {
//       setSubmissionStatus(null);
//     }

//     if (hasAttemptedSubmit) {
//       const nextAllErrors = validateContactForm(nextValues, copy.validation);
//       setErrors(nextAllErrors);
//       return;
//     }

//     if (field !== "websiteUrl") {
//       const validatedField = field as ContactValidatedField;
//       if (touched[validatedField]) {
//         const nextAllErrors = validateContactForm(nextValues, copy.validation);
//         setErrors((prev) => ({
//           ...prev,
//           [validatedField]: nextAllErrors[validatedField],
//         }));
//       }
//     }
//   };

//   const handleFieldBlur = (field: ContactValidatedField) => {
//     setTouched((prev) => ({ ...prev, [field]: true }));
//     const nextAllErrors = validateContactForm(values, copy.validation);
//     setErrors((prev) => ({
//       ...prev,
//       [field]: nextAllErrors[field],
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     setHasAttemptedSubmit(true);
//     const validationErrors = validateContactForm(values, copy.validation);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmissionStatus(null);

//     const result = await submitContactInquiry(values, locale);
//     setIsSubmitting(false);
//     setSubmissionStatus(result.code);

//     setTimeout(() => {
//       statusBannerRef.current?.focus();
//     }, 50);
//   };

//   const handleReset = () => {
//     setValues(INITIAL_VALUES);
//     setTouched({});
//     setErrors({});
//     setHasAttemptedSubmit(false);
//     setSubmissionStatus(null);
//   };

//   const selectedServiceLabel = values.service
//     ? copy.fields.serviceOptions[values.service]
//     : undefined;

//   const directMailtoHref = buildDirectMailtoHref(
//     values,
//     BROCHURE_CONTACT_INFO.email,
//     selectedServiceLabel
//   );

//   const hasValidationErrors =
//     hasAttemptedSubmit && Object.keys(errors).length > 0;

//   return (
//     <section
//       id="contact-form"
//       ref={sectionRef}
//       className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200"
//     >
//       <div className="max-w-6xl mx-auto px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="max-w-3xl mb-14">
//           <div
//             data-animate="fade-up"
//             className="inline-flex items-center gap-3 mb-4"
//           >
//             <span className="w-8 h-[2px] bg-amber-600" />
//             <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
//               {copy.eyebrow}
//             </span>
//           </div>

//           <h2
//             data-animate="fade-up"
//             className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] text-slate-900 leading-[1.14] tracking-tight mb-4"
//           >
//             {copy.headline}
//           </h2>

//           <p
//             data-animate="fade-up"
//             className="font-sans text-[16px] font-normal text-slate-600 leading-[28px] mb-0"
//           >
//             {copy.description}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//           {/* Left Column: Primary Contact Form */}
//           <div className="lg:col-span-8" data-animate="fade-up">
//             <div className="bg-white border border-slate-200 p-7 sm:p-10 lg:p-12 shadow-sm">
//               {/* Top Confidentiality Strip */}
//               <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200">
//                 <div className="inline-flex items-center gap-2.5 text-xs font-medium text-slate-900">
//                   <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
//                   <span>{copy.confidentialityNote}</span>
//                 </div>
//                 <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
//                   LRS • VALLETTA
//                 </span>
//               </div>

//               {/* Confirmed Server Submission Success State */}
//               {submissionStatus === "SUCCESS" ? (
//                 <div
//                   ref={statusBannerRef}
//                   tabIndex={-1}
//                   role="status"
//                   aria-live="polite"
//                   className="bg-slate-50 border-l-4 border-amber-600 p-7 sm:p-9 focus:outline-none"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-amber-50 text-slate-900 flex items-center justify-center shrink-0">
//                       <CheckCircle2 className="w-5 h-5 text-amber-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-serif text-2xl text-slate-900 mb-2">
//                         {copy.states.successTitle}
//                       </h3>
//                       <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
//                         {copy.states.successDescription}
//                       </p>
//                       <button
//                         type="button"
//                         onClick={handleReset}
//                         className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors duration-300"
//                       >
//                         <RotateCcw className="w-3.5 h-3.5" />
//                         <span>{copy.actions.resetButton}</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <form
//                   onSubmit={handleSubmit}
//                   noValidate
//                   aria-label={copy.aria.formLabel}
//                   className="space-y-6"
//                 >
//                   {/* Honeypot field (hidden from assistive tech and visual users) */}
//                   <div
//                     aria-hidden="true"
//                     className="hidden"
//                     style={{ display: "none" }}
//                   >
//                     <label htmlFor="contact-website-url">Website</label>
//                     <input
//                       id="contact-website-url"
//                       name="websiteUrl"
//                       type="text"
//                       tabIndex={-1}
//                       autoComplete="off"
//                       value={values.websiteUrl}
//                       onChange={(e) =>
//                         handleFieldChange("websiteUrl", e.target.value)
//                       }
//                     />
//                   </div>

//                   {/* Validation Error Summary Alert */}
//                   {hasValidationErrors && (
//                     <div
//                       role="alert"
//                       aria-live="assertive"
//                       className="bg-red-50/80 border-l-4 border-red-600 p-4 flex items-start gap-3 text-red-900"
//                     >
//                       <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
//                       <p className="text-xs sm:text-sm font-medium leading-relaxed">
//                         {copy.validation.formErrorsSummary}
//                       </p>
//                     </div>
//                   )}

//                   {/* Honest Backend Configuration Required / Server Error Feedback Banner */}
//                   {submissionStatus === "CONFIGURATION_REQUIRED" && (
//                     <div
//                       ref={statusBannerRef}
//                       tabIndex={-1}
//                       role="region"
//                       aria-label={copy.aria.statusRegionLabel}
//                       aria-live="polite"
//                       className="bg-slate-50 border border-amber-600/40 p-6 sm:p-7 focus:outline-none"
//                     >
//                       <span className="inline-block bg-amber-50 text-slate-900 text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 mb-3 border border-amber-600/30">
//                         {copy.states.configRequiredBadge}
//                       </span>
//                       <h3 className="font-serif text-xl sm:text-2xl text-slate-900 mb-2">
//                         {copy.states.configRequiredTitle}
//                       </h3>
//                       <p className="text-sm text-slate-600 leading-relaxed mb-4">
//                         {copy.states.configRequiredDescription}
//                       </p>
//                       <p className="text-xs font-mono text-slate-900 bg-white border border-slate-200 p-3 mb-5 leading-relaxed">
//                         {copy.states.configRequiredTechnicalNote}
//                       </p>
//                       <div className="flex flex-wrap items-center gap-3">
//                         <a
//                           href={directMailtoHref}
//                           className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors duration-300"
//                         >
//                           <Mail className="w-3.5 h-3.5" />
//                           <span>{copy.actions.directEmailCta}</span>
//                           <ArrowUpRight className="w-3.5 h-3.5" />
//                         </a>
//                         <a
//                           href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(
//                             /\s+/g,
//                             ""
//                           )}`}
//                           className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-900 bg-white text-slate-900 text-xs font-semibold uppercase tracking-[0.16em] px-5 py-3.5 transition-colors duration-300"
//                         >
//                           <Phone className="w-3.5 h-3.5 text-amber-600" />
//                           <span>{copy.actions.directPhoneCta}</span>
//                         </a>
//                       </div>
//                     </div>
//                   )}

//                   {(submissionStatus === "SERVER_ERROR" ||
//                     submissionStatus === "NETWORK_ERROR" ||
//                     submissionStatus === "RATE_LIMITED" ||
//                     submissionStatus === "VALIDATION_ERROR") && (
//                     <div
//                       ref={statusBannerRef}
//                       tabIndex={-1}
//                       role="alert"
//                       aria-live="assertive"
//                       className="bg-red-50/80 border-l-4 border-red-600 p-6 focus:outline-none"
//                     >
//                       <div className="flex items-start gap-3.5">
//                         <ServerCrash className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
//                         <div>
//                           <h3 className="font-serif text-xl text-slate-900 mb-1.5">
//                             {copy.states.errorTitle}
//                           </h3>
//                           <p className="text-sm text-slate-600 leading-relaxed mb-4">
//                             {submissionStatus === "RATE_LIMITED"
//                               ? copy.states.rateLimitedDescription
//                               : copy.states.errorDescription}
//                           </p>
//                           <div className="flex flex-wrap items-center gap-3">
//                             <button
//                               type="submit"
//                               disabled={isSubmitting}
//                               className="inline-flex items-center gap-2 bg-slate-900 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
//                             >
//                               <RotateCcw className="w-3.5 h-3.5" />
//                               <span>{copy.actions.retryButton}</span>
//                             </button>
//                             <a
//                               href={directMailtoHref}
//                               className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-900 bg-white text-slate-900 text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
//                             >
//                               <Mail className="w-3.5 h-3.5 text-amber-600" />
//                               <span>{copy.actions.directEmailCta}</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Row 1: Full Name & Email Address */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     {/* 1. Full Name (Required) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-full-name"
//                           className="text-xs font-semibold uppercase tracking-wider text-slate-900"
//                         >
//                           {copy.fields.fullNameLabel}{" "}
//                           <span className="text-amber-600" aria-hidden="true">
//                             *
//                           </span>
//                         </label>
//                         <span className="text-[11px] font-mono text-slate-500">
//                           {copy.requiredIndicator}
//                         </span>
//                       </div>
//                       <input
//                         id="contact-full-name"
//                         name="fullName"
//                         type="text"
//                         required
//                         autoComplete="name"
//                         disabled={isSubmitting}
//                         value={values.fullName}
//                         onChange={(e) =>
//                           handleFieldChange("fullName", e.target.value)
//                         }
//                         onBlur={() => handleFieldBlur("fullName")}
//                         placeholder={copy.fields.fullNamePlaceholder}
//                         aria-invalid={Boolean(errors.fullName)}
//                         aria-describedby={
//                           errors.fullName ? "contact-full-name-error" : undefined
//                         }
//                         className={`w-full bg-white border px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:outline-none ${
//                           errors.fullName
//                             ? "border-red-600 focus:border-red-600"
//                             : "border-slate-200 hover:border-slate-900/60 focus:border-slate-900"
//                         }`}
//                       />
//                       {errors.fullName && (
//                         <p
//                           id="contact-full-name-error"
//                           role="alert"
//                           className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                         >
//                           <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                           <span>{errors.fullName}</span>
//                         </p>
//                       )}
//                     </div>

//                     {/* 2. Email Address (Required) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-email"
//                           className="text-xs font-semibold uppercase tracking-wider text-slate-900"
//                         >
//                           {copy.fields.emailLabel}{" "}
//                           <span className="text-amber-600" aria-hidden="true">
//                             *
//                           </span>
//                         </label>
//                         <span className="text-[11px] font-mono text-slate-500">
//                           {copy.requiredIndicator}
//                         </span>
//                       </div>
//                       <input
//                         id="contact-email"
//                         name="email"
//                         type="email"
//                         required
//                         autoComplete="email"
//                         disabled={isSubmitting}
//                         value={values.email}
//                         onChange={(e) =>
//                           handleFieldChange("email", e.target.value)
//                         }
//                         onBlur={() => handleFieldBlur("email")}
//                         placeholder={copy.fields.emailPlaceholder}
//                         aria-invalid={Boolean(errors.email)}
//                         aria-describedby={
//                           errors.email ? "contact-email-error" : undefined
//                         }
//                         className={`w-full bg-white border px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:outline-none ${
//                           errors.email
//                             ? "border-red-600 focus:border-red-600"
//                             : "border-slate-200 hover:border-slate-900/60 focus:border-slate-900"
//                         }`}
//                       />
//                       {errors.email && (
//                         <p
//                           id="contact-email-error"
//                           role="alert"
//                           className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                         >
//                           <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                           <span>{errors.email}</span>
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Row 2: Phone Number & Service Interested In */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     {/* 3. Phone Number (Optional) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-phone"
//                           className="text-xs font-semibold uppercase tracking-wider text-slate-900"
//                         >
//                           {copy.fields.phoneLabel}
//                         </label>
//                         <span className="text-[11px] font-mono text-slate-500">
//                           {copy.optionalIndicator}
//                         </span>
//                       </div>
//                       <input
//                         id="contact-phone"
//                         name="phone"
//                         type="tel"
//                         autoComplete="tel"
//                         disabled={isSubmitting}
//                         value={values.phone}
//                         onChange={(e) =>
//                           handleFieldChange("phone", e.target.value)
//                         }
//                         onBlur={() => handleFieldBlur("phone")}
//                         placeholder={copy.fields.phonePlaceholder}
//                         aria-invalid={Boolean(errors.phone)}
//                         aria-describedby={
//                           errors.phone ? "contact-phone-error" : undefined
//                         }
//                         className={`w-full bg-white border px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:outline-none ${
//                           errors.phone
//                             ? "border-red-600 focus:border-red-600"
//                             : "border-slate-200 hover:border-slate-900/60 focus:border-slate-900"
//                         }`}
//                       />
//                       {errors.phone && (
//                         <p
//                           id="contact-phone-error"
//                           role="alert"
//                           className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                         >
//                           <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                           <span>{errors.phone}</span>
//                         </p>
//                       )}
//                     </div>

//                     {/* 4. Service Interested In (Optional Dropdown with stable internal keys) */}
//                     <div>
//                       <div className="flex items-center justify-between gap-2 mb-2">
//                         <label
//                           htmlFor="contact-service"
//                           className="text-xs font-semibold uppercase tracking-wider text-slate-900"
//                         >
//                           {copy.fields.serviceLabel}
//                         </label>
//                         <span className="text-[11px] font-mono text-slate-500">
//                           {copy.optionalIndicator}
//                         </span>
//                       </div>
//                       <select
//                         id="contact-service"
//                         name="service"
//                         disabled={isSubmitting}
//                         value={values.service}
//                         onChange={(e) =>
//                           handleFieldChange(
//                             "service",
//                             e.target.value as ContactServiceKey | ""
//                           )
//                         }
//                         className="w-full bg-white border border-slate-200 hover:border-slate-900/60 focus:border-slate-900 px-4 py-3.5 text-sm text-slate-900 transition-colors duration-200 focus:outline-none"
//                       >
//                         <option value="">{copy.fields.servicePlaceholder}</option>
//                         {CONTACT_SERVICE_KEYS.map((serviceKey) => (
//                           <option key={serviceKey} value={serviceKey}>
//                             {copy.fields.serviceOptions[serviceKey]}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* 5. Subject (Required) */}
//                   <div>
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <label
//                         htmlFor="contact-subject"
//                         className="text-xs font-semibold uppercase tracking-wider text-slate-900"
//                       >
//                         {copy.fields.subjectLabel}{" "}
//                         <span className="text-amber-600" aria-hidden="true">
//                           *
//                         </span>
//                       </label>
//                       <span className="text-[11px] font-mono text-slate-500">
//                         {copy.requiredIndicator}
//                       </span>
//                     </div>
//                     <input
//                       id="contact-subject"
//                       name="subject"
//                       type="text"
//                       required
//                       disabled={isSubmitting}
//                       value={values.subject}
//                       onChange={(e) =>
//                         handleFieldChange("subject", e.target.value)
//                       }
//                       onBlur={() => handleFieldBlur("subject")}
//                       placeholder={copy.fields.subjectPlaceholder}
//                       aria-invalid={Boolean(errors.subject)}
//                       aria-describedby={
//                         errors.subject ? "contact-subject-error" : undefined
//                       }
//                       className={`w-full bg-white border px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:outline-none ${
//                         errors.subject
//                           ? "border-red-600 focus:border-red-600"
//                           : "border-slate-200 hover:border-slate-900/60 focus:border-slate-900"
//                       }`}
//                     />
//                     {errors.subject && (
//                       <p
//                         id="contact-subject-error"
//                         role="alert"
//                         className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                       >
//                         <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                         <span>{errors.subject}</span>
//                       </p>
//                     )}
//                   </div>

//                   {/* 6. Message (Required Textarea) */}
//                   <div>
//                     <div className="flex items-center justify-between gap-2 mb-2">
//                       <label
//                         htmlFor="contact-message"
//                         className="text-xs font-semibold uppercase tracking-wider text-slate-900"
//                       >
//                         {copy.fields.messageLabel}{" "}
//                         <span className="text-amber-600" aria-hidden="true">
//                           *
//                         </span>
//                       </label>
//                       <span className="text-[11px] font-mono text-slate-500">
//                         {copy.requiredIndicator}
//                       </span>
//                     </div>
//                     <textarea
//                       id="contact-message"
//                       name="message"
//                       rows={5}
//                       required
//                       disabled={isSubmitting}
//                       value={values.message}
//                       onChange={(e) =>
//                         handleFieldChange("message", e.target.value)
//                       }
//                       onBlur={() => handleFieldBlur("message")}
//                       placeholder={copy.fields.messagePlaceholder}
//                       aria-invalid={Boolean(errors.message)}
//                       aria-describedby={
//                         errors.message ? "contact-message-error" : undefined
//                       }
//                       className={`w-full bg-white border px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:outline-none resize-y ${
//                         errors.message
//                           ? "border-red-600 focus:border-red-600"
//                           : "border-slate-200 hover:border-slate-900/60 focus:border-slate-900"
//                       }`}
//                     />
//                     {errors.message && (
//                       <p
//                         id="contact-message-error"
//                         role="alert"
//                         className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5"
//                       >
//                         <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                         <span>{errors.message}</span>
//                       </p>
//                     )}
//                   </div>

//                   {/* 7. Privacy Consent Checkbox */}
//                   <div className="pt-2">
//                     <div className="flex items-start gap-3">
//                       <input
//                         id="contact-privacy-consent"
//                         name="privacyConsent"
//                         type="checkbox"
//                         required
//                         disabled={isSubmitting}
//                         checked={values.privacyConsent}
//                         onChange={(e) =>
//                           handleFieldChange("privacyConsent", e.target.checked)
//                         }
//                         onBlur={() => handleFieldBlur("privacyConsent")}
//                         aria-invalid={Boolean(errors.privacyConsent)}
//                         aria-describedby={
//                           errors.privacyConsent
//                             ? "contact-privacy-error"
//                             : undefined
//                         }
//                         className="mt-1 h-4 w-4 shrink-0 border-slate-300 text-slate-900 focus:ring-amber-600 accent-slate-900"
//                       />
//                       <label
//                         htmlFor="contact-privacy-consent"
//                         className="text-xs sm:text-sm text-slate-600 leading-relaxed cursor-pointer"
//                       >
//                         {copy.fields.privacyConsentLabel}{" "}
//                         <span className="text-amber-600" aria-hidden="true">
//                           *
//                         </span>
//                       </label>
//                     </div>
//                     {errors.privacyConsent && (
//                       <p
//                         id="contact-privacy-error"
//                         role="alert"
//                         className="mt-2 text-xs text-red-600 flex items-center gap-1.5"
//                       >
//                         <AlertCircle className="w-3.5 h-3.5 shrink-0" />
//                         <span>{errors.privacyConsent}</span>
//                       </p>
//                     )}
//                   </div>

//                   {/* Submit Action Bar */}
//                   <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-amber-600 disabled:opacity-65 disabled:pointer-events-none text-white text-xs font-semibold uppercase tracking-[0.16em] px-8 py-4 transition-colors duration-300"
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <Loader2 className="w-4 h-4 animate-spin" />
//                           <span>{copy.actions.submittingButton}</span>
//                         </>
//                       ) : (
//                         <>
//                           <span>{copy.actions.submitButton}</span>
//                           <Send className="w-3.5 h-3.5" />
//                         </>
//                       )}
//                     </button>

//                     {isSubmitting && (
//                       <p
//                         role="status"
//                         aria-live="polite"
//                         className="text-xs text-slate-500"
//                       >
//                         {copy.states.loadingDescription}
//                       </p>
//                     )}
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>

//           {/* Right Column: Editorial Consultation Protocol & Direct Desk Sidebar */}
//           <aside
//             className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
//             data-animate="fade-up"
//           >
//             <div className="bg-slate-900 text-white p-7 sm:p-8 border border-slate-900 shadow-lg">
//               <div className="inline-flex items-center gap-2.5 mb-3">
//                 <span className="w-6 h-[2px] bg-amber-600" />
//                 <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-500">
//                   {copy.sidebar.eyebrow}
//                 </span>
//               </div>

//               <h3 className="font-serif text-2xl text-white leading-snug mb-3">
//                 {copy.sidebar.title}
//               </h3>

//               <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-7">
//                 {copy.sidebar.description}
//               </p>

//               <div className="space-y-5 border-t border-white/15 pt-6">
//                 {copy.sidebar.steps.map((step) => (
//                   <div key={step.number} className="flex items-start gap-4">
//                     <span className="w-8 h-8 bg-white/10 text-amber-400 font-mono text-xs font-semibold flex items-center justify-center shrink-0 border border-white/15">
//                       {step.number}
//                     </span>
//                     <div>
//                       <h4 className="text-sm font-semibold text-white">
//                         {step.title}
//                       </h4>
//                       <p className="text-xs text-slate-300 leading-relaxed mt-1">
//                         {step.detail}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 pt-6 border-t border-white/15">
//                 <p className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
//                   {copy.sidebar.directDeskLabel}
//                 </p>
//                 <p className="text-xs text-slate-300 leading-relaxed mb-5">
//                   {copy.sidebar.directDeskNote}
//                 </p>

//                 <div className="space-y-2.5">
//                   <a
//                     href={`mailto:${BROCHURE_CONTACT_INFO.email}`}
//                     className="w-full inline-flex items-center justify-between gap-2 bg-white/10 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-[0.14em] px-4 py-3 border border-white/15 transition-colors duration-300"
//                   >
//                     <span className="inline-flex items-center gap-2 truncate">
//                       <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
//                       <span className="truncate">
//                         {BROCHURE_CONTACT_INFO.email}
//                       </span>
//                     </span>
//                     <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
//                   </a>

//                   <a
//                     href={`tel:${BROCHURE_CONTACT_INFO.phone.replace(
//                       /\s+/g,
//                       ""
//                     )}`}
//                     className="w-full inline-flex items-center justify-between gap-2 bg-white/5 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-[0.14em] px-4 py-3 border border-white/15 transition-colors duration-300"
//                   >
//                     <span className="inline-flex items-center gap-2">
//                       <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
//                       <span>{BROCHURE_CONTACT_INFO.phone}</span>
//                     </span>
//                     <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Link to Malta Programmes Directory */}
//             <div className="bg-white border border-slate-200 p-6 shadow-sm">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 mb-2">
//                 {t.servicesPage.collection.sectionLabel}
//               </p>
//               <p className="text-xs text-slate-600 leading-relaxed mb-4">
//                 {t.servicesPage.collection.description}
//               </p>
//               <Link
//                 href="/services"
//                 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-900 hover:text-amber-600 transition-colors"
//               >
//                 <span>{t.services.viewAllCta}</span>
//                 <ArrowUpRight className="w-3.5 h-3.5" />
//               </Link>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Default export wrapper for live preview
// export default function App() {
//   return <ContactFormSection />;
// }


// fixed code
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

    if (hasAttemptedSubmit || (field !== "websiteUrl" && touched[field as keyof Omit<ContactFormValues, "websiteUrl">])) {
      const nextAllErrors = validateContactForm(nextValues, copy.validation);
      if (hasAttemptedSubmit) {
        setErrors(nextAllErrors);
      } else if (field !== "websiteUrl") {
        setErrors((prev) => ({
          ...prev,
          [field]: nextAllErrors[field as keyof ContactFormErrors],
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