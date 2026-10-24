import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { AboutSection } from "@/components/AboutSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ServicesCarousel />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
