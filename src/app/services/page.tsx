// src/app/services/page.tsx
import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Malta Residency & Tax Programmes | LRS — Legal & Relocation Services",
  description:
    "Explore LRS Malta Residency & Tax Programmes: Malta Permanent Residence Programme (MPRP), Citizenship by Merit under Article 10(9), Malta Retirement Programme (MRP), and Global Residence Programme (GRP).",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Malta Residency & Tax Programmes | LRS — Legal & Relocation Services",
    description:
      "Your pathway to secure living, investment, and global mobility in Malta—MPRP, Citizenship by Merit, Malta Retirement Programme, and Global Residence Programme.",
    type: "website",
    url: "/services",
    images: ["/images/lrs-logo.png"],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <Navbar />
      <ServicesHero />
      <ServicesIntro />
      <ServicesGrid />
      <ServiceCTA />
      <Footer />
    </main>
  );
}
