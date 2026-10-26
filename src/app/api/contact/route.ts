// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  CONTACT_SERVICE_KEYS,
  isValidInternationalPhone,
} from "@/lib/contactSubmission";
import { ContactServiceKey } from "@/data/translations";

interface IncomingContactPayload {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  subject?: unknown;
  message?: unknown;
  privacyConsent?: unknown;
  websiteUrl?: unknown;
  locale?: unknown;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const ipRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestLog.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  ipRequestLog.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "local";

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { ok: false, code: "RATE_LIMITED" },
      { status: 429 }
    );
  }

  let body: IncomingContactPayload;
  try {
    body = (await request.json()) as IncomingContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, code: "VALIDATION_ERROR" },
      { status: 400 }
    );
  }

  // Honeypot check: if a bot filled the hidden websiteUrl field, reject silently
  if (typeof body.websiteUrl === "string" && body.websiteUrl.trim().length > 0) {
    return NextResponse.json(
      { ok: false, code: "VALIDATION_ERROR" },
      { status: 400 }
    );
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const privacyConsent = body.privacyConsent === true;
  const locale = body.locale === "ml" ? "ml" : "en";

  if (
    fullName.length < 2 ||
    fullName.length > 160 ||
    !EMAIL_REGEX.test(email) ||
    email.length > 254 ||
    (phone.length > 0 && !isValidInternationalPhone(phone)) ||
    (service.length > 0 &&
      !CONTACT_SERVICE_KEYS.includes(service as ContactServiceKey)) ||
    subject.length < 3 ||
    subject.length > 200 ||
    message.length < 15 ||
    message.length > 5000 ||
    !privacyConsent
  ) {
    return NextResponse.json(
      { ok: false, code: "VALIDATION_ERROR" },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const receiverEmail =
    process.env.CONTACT_RECEIVER_EMAIL || "info@lrs-global.com";
  const senderEmail =
    process.env.CONTACT_SENDER_EMAIL || "LRS Advisory Desk <onboarding@resend.dev>";

  // Honest check: never simulate a sent message if no backend delivery service is configured
  if (!webhookUrl && !resendApiKey) {
    return NextResponse.json(
      {
        ok: false,
        code: "CONFIGURATION_REQUIRED",
      },
      { status: 503 }
    );
  }

  try {
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "lrs-website-contact-page",
          submittedAt: new Date().toISOString(),
          locale,
          fullName,
          email,
          phone: phone || null,
          service: service || null,
          subject,
          message,
          privacyConsent,
        }),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          { ok: false, code: "SERVER_ERROR" },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, code: "SUCCESS" }, { status: 200 });
    }

    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [receiverEmail],
          reply_to: email,
          subject: `[LRS Inquiry] ${subject}`,
          text: [
            `New client inquiry received from the LRS Contact Page (${locale.toUpperCase()})`,
            `------------------------------------------------------------`,
            `Full Name: ${fullName}`,
            `Email: ${email}`,
            `Phone: ${phone || "Not provided"}`,
            `Service Key: ${service || "Not specified"}`,
            `Subject: ${subject}`,
            `Privacy Consent: Confirmed`,
            ``,
            `Message:`,
            message,
          ].join("\n"),
        }),
      });

      if (!resendResponse.ok) {
        return NextResponse.json(
          { ok: false, code: "SERVER_ERROR" },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, code: "SUCCESS" }, { status: 200 });
    }

    return NextResponse.json(
      { ok: false, code: "CONFIGURATION_REQUIRED" },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, code: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}