// src/app/contact/page.tsx
import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | LRS — Legal & Relocation Services",
  description:
    "Connect with LRS Legal & Relocation Services in Valletta, Malta for tailored legal counsel, Malta residency and tax programmes (MPRP, MRP, GRP, Citizenship by Merit), and global relocation support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | LRS — Legal & Relocation Services",
    description:
      "Speak with our Valletta chambers and global mobility specialists for integrated legal and relocation advisory.",
    type: "website",
    url: "/contact",
    images: ["/images/lrs-logo.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <Navbar />
      <ContactHero />
      <ContactIntro />
      <ContactFormSection />
      <Footer />
    </main>
  );
}