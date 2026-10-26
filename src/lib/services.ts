// src/lib/services.ts
import { MALTA_SERVICES_DATA, ServiceData } from "@/data/services";

/**
 * Returns all Malta residency and citizenship services in display order.
 */
export function getAllServices(): ServiceData[] {
  return MALTA_SERVICES_DATA;
}

/**
 * Looks up a single service by its URL slug.
 */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return MALTA_SERVICES_DATA.find((service) => service.slug === slug);
}

/**
 * Returns all valid service slugs for Next.js generateStaticParams().
 */
export function getAllServiceSlugs(): { slug: string }[] {
  return MALTA_SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * Resolves related ServiceData items for a given service.
 */
export function getRelatedServices(
  currentSlug: string,
  relatedSlugs?: string[]
): ServiceData[] {
  if (relatedSlugs && relatedSlugs.length > 0) {
    const resolved = relatedSlugs
      .map((slug) => getServiceBySlug(slug))
      .filter((item): item is ServiceData => Boolean(item) && item.slug !== currentSlug);
    if (resolved.length > 0) {
      return resolved;
    }
  }
  return MALTA_SERVICES_DATA.filter((service) => service.slug !== currentSlug);
}
