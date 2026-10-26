// src/app/services/[slug]/page.tsx
import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceContent } from "@/components/services/ServiceContent";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  getRelatedServices,
} from "@/lib/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServiceSlugs();
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Programme Not Found | LRS — Legal & Relocation Services",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: "article",
      url: `/services/${service.slug}`,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(
    service.slug,
    service.relatedServices
  );

  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <Navbar />
      <ServiceDetailHero service={service} />
      <ServiceContent service={service} />
      <RelatedServices services={relatedServices} />
      <ServiceCTA />
      <Footer />
    </main>
  );
}
