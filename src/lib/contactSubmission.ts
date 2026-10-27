// src/lib/contactSubmission.ts
import { ContactPageTranslations, ContactServiceKey } from "@/data/translations";
import { Locale } from "@/data/siteContent";

export const CONTACT_SERVICE_KEYS: ContactServiceKey[] = [
  "citizenship-by-merit",
  "mprp",
  "digital-nomad-visa",
  "startup-residence",
  "grp",
  "trp",
  "real-estate",
  "education",
  "general-inquiry",
];

export interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  service: ContactServiceKey | "";
  subject: string;
  message: string;
  privacyConsent: boolean;
  /** Honeypot field that should remain empty for human users */
  websiteUrl?: string;
}

export type ContactFormErrors = Partial<
  Record<keyof Omit<ContactFormValues, "websiteUrl">, string>
>;

export type ContactSubmissionStatusCode =
  | "SUCCESS"
  | "CONFIGURATION_REQUIRED"
  | "VALIDATION_ERROR"
  | "RATE_LIMITED"
  | "SERVER_ERROR"
  | "NETWORK_ERROR";

export interface ContactSubmissionResult {
  ok: boolean;
  code: ContactSubmissionStatusCode;
  fieldErrors?: Partial<Record<keyof Omit<ContactFormValues, "websiteUrl">, string>>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Validates optional international phone numbers without rejecting country codes,
 * spaces, hyphens, or parentheses. Requires 7 to 20 digits when provided.
 */
export function isValidInternationalPhone(rawPhone: string): boolean {
  const trimmed = rawPhone.trim();
  if (!trimmed) return true;
  if (!/^[+\d\s().-]+$/.test(trimmed)) return false;
  const digitsOnly = trimmed.replace(/\D/g, "");
  return digitsOnly.length >= 7 && digitsOnly.length <= 20;
}

export function validateContactForm(
  values: ContactFormValues,
  messages: ContactPageTranslations["formSection"]["validation"]
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const fullName = values.fullName.trim();
  if (!fullName) {
    errors.fullName = messages.fullNameRequired;
  } else if (fullName.length < 2) {
    errors.fullName = messages.fullNameMinLength;
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = messages.emailRequired;
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = messages.emailInvalid;
  }

  const phone = values.phone.trim();
  if (phone && !isValidInternationalPhone(phone)) {
    errors.phone = messages.phoneInvalid;
  }

  const subject = values.subject.trim();
  if (!subject) {
    errors.subject = messages.subjectRequired;
  } else if (subject.length < 3) {
    errors.subject = messages.subjectMinLength;
  }

  const message = values.message.trim();
  if (!message) {
    errors.message = messages.messageRequired;
  } else if (message.length < 15) {
    errors.message = messages.messageMinLength;
  }

  if (!values.privacyConsent) {
    errors.privacyConsent = messages.privacyConsentRequired;
  }

  return errors;
}

export async function submitContactInquiry(
  values: ContactFormValues,
  locale: Locale
): Promise<ContactSubmissionResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        service: values.service || undefined,
        subject: values.subject.trim(),
        message: values.message.trim(),
        privacyConsent: values.privacyConsent,
        websiteUrl: values.websiteUrl || "",
        locale,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    let data: { ok?: boolean; code?: ContactSubmissionStatusCode } = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (response.ok && data.ok === true && data.code === "SUCCESS") {
      return { ok: true, code: "SUCCESS" };
    }

    if (response.status === 503 || data.code === "CONFIGURATION_REQUIRED") {
      return { ok: false, code: "CONFIGURATION_REQUIRED" };
    }

    if (response.status === 429 || data.code === "RATE_LIMITED") {
      return { ok: false, code: "RATE_LIMITED" };
    }

    if (response.status === 400 || data.code === "VALIDATION_ERROR") {
      return { ok: false, code: "VALIDATION_ERROR" };
    }

    return { ok: false, code: "SERVER_ERROR" };
  } catch {
    clearTimeout(timeoutId);
    return { ok: false, code: "NETWORK_ERROR" };
  }
}

export function buildDirectMailtoHref(
  values: ContactFormValues,
  recipientEmail: string,
  serviceLabel?: string
): string {
  const subjectLine = values.subject.trim() || "Client Inquiry — LRS Legal & Relocation Services";
  const bodyLines = [
    `Full Name: ${values.fullName.trim()}`,
    `Email: ${values.email.trim()}`,
    values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
    serviceLabel ? `Service of Interest: ${serviceLabel}` : null,
    "",
    "Inquiry Details:",
    values.message.trim(),
  ].filter((line): line is string => line !== null);

  return `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subjectLine
  )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}