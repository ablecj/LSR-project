// src/app/about/page.tsx
import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutUsSection } from "@/components/about/AboutUsSection";
import { OurHistorySection } from "@/components/about/OurHistorySection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { OurValuesSection } from "@/components/about/OurValuesSection";
import { PartnersSlider } from "@/components/about/PartnersSlider";

export const metadata: Metadata = {
  title: "About Us | LRS — Legal & Relocation Services",
  description:
    "Discover LRS Legal & Relocation Services—our institutional mandate, evolution, mission, vision, core values, and global advisory network.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <Navbar />
      <AboutHero />
      <AboutUsSection />
      <OurHistorySection />
      <MissionVisionSection />
      <OurValuesSection />
      <PartnersSlider />
      <Footer />
    </main>
  );
}