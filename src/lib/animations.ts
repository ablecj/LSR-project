import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function createSectionReveal(
  container: HTMLElement | null,
  selector: string = "[data-animate='fade-up']"
) {
  if (!container || prefersReducedMotion()) return;

  const elements = container.querySelectorAll(selector);
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    { y: 36, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 82%",
        toggleActions: "play none none none",
      },
    }
  );
}
