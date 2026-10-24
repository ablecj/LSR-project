// "use client";

// import React, { useRef, useEffect } from "react";
// import Image from "next/image";
// import { TEAM_MEMBERS } from "@/data/siteContent";
// import { useLanguage } from "@/context/LanguageContext";
// import { createSectionReveal } from "@/lib/animations";

// export function TeamSection() {
//   const { locale, t } = useLanguage();
//   const sectionRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     createSectionReveal(sectionRef.current);
//   }, []);

//   return (
//     <section
//       id="team"
//       ref={sectionRef}
//       className="py-24 lg:py-32 bg-white border-b border-brand-border"
//     >
//       <div className="max-w-editorial mx-auto px-6 lg:px-12">
//         <div className="max-w-3xl mb-12">
//           <div
//             data-animate="fade-up"
//             className="inline-flex items-center gap-3 mb-4"
//           >
//             <span className="w-8 h-[2px] bg-brand-secondary" />
//             <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
//               {t.team.sectionLabel}
//             </span>
//           </div>
//           <h2
//             data-animate="fade-up"
//             className="font-display text-[clamp(2rem,3.5vw,3.1rem)] text-brand-ink leading-[1.15] tracking-tight mb-4"
//           >
//             {t.team.headline}
//           </h2>
//           <p
//             data-animate="fade-up"
//             className="text-base text-brand-slate leading-relaxed mb-4"
//           >
//             {t.team.description}
//           </p>
//           <div
//             data-animate="fade-up"
//             className="inline-block bg-brand-surface-muted border border-brand-border px-4 py-2.5 text-xs text-brand-slate"
//           >
//             {t.team.sampleDisclaimer}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {TEAM_MEMBERS.map((member) => (
//             <article
//               key={member.id}
//               data-animate="fade-up"
//               className="group border border-brand-border bg-white hover:border-brand-primary transition-all duration-300 flex flex-col justify-between"
//             >
//               <div>
//                 <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-surface-muted">
//                   <Image
//                     src={member.image}
//                     alt={member.imageAlt[locale]}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
//                   />
//                   {member.isSampleProfile && (
//                     <div className="absolute top-3 left-3 bg-brand-primary-deep/90 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1">
//                       {t.team.sampleBadge}
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-6">
//                   <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-1.5">
//                     {member.designation[locale]}
//                   </p>
//                   <h3 className="font-display text-2xl text-brand-ink mb-2">
//                     {member.name[locale]}
//                   </h3>
//                   <p className="text-xs text-brand-slate leading-relaxed mb-4">
//                     {member.bio[locale]}
//                   </p>
//                 </div>
//               </div>

//               <div className="px-6 py-3.5 bg-brand-surface-muted border-t border-brand-border text-[11px] text-brand-primary font-mono">
//                 {member.specialization[locale]}
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// updated team carousel

"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "@/styles/teamcarousel.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TEAM_MEMBERS } from "@/data/siteContent";
import { useLanguage } from "@/context/LanguageContext";
import { createSectionReveal } from "@/lib/animations";

export function TeamSection() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    createSectionReveal(sectionRef.current);
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="overflow-hidden border-b border-brand-border bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-editorial px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12 max-w-3xl">
          <div
            data-animate="fade-up"
            className="mb-4 inline-flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-brand-secondary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              {t.team.sectionLabel}
            </span>
          </div>

          <h2
            data-animate="fade-up"
            className="mb-4 font-display text-[clamp(2rem,3.5vw,3.1rem)] leading-[1.15] tracking-tight text-brand-ink"
          >
            {t.team.headline}
          </h2>

          <p
            data-animate="fade-up"
            className="mb-4 text-base leading-relaxed text-brand-slate"
          >
            {t.team.description}
          </p>

          {/* <div
            data-animate="fade-up"
            className="inline-block border border-brand-border bg-brand-surface-muted px-4 py-2.5 text-xs text-brand-slate"
          >
            {t.team.sampleDisclaimer}
          </div> */}
        </div>

        {/* Slider */}
        <div className="team-slider relative">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            speed={650}
            loop={TEAM_MEMBERS.length > 3}
            watchOverflow
            grabCursor
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            a11y={{
              prevSlideMessage: "Previous team member",
              nextSlideMessage: "Next team member",
            }}
            pagination={{
              clickable: true,
              el: ".team-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="!overflow-visible"
          >
            {TEAM_MEMBERS.map((member) => (
              <SwiperSlide key={member.id} className="!h-auto">
                <article className="group flex h-full flex-col justify-between border border-brand-border bg-white transition-colors duration-300 hover:border-brand-primary">
                  <div>
                    {/* Team Image */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-surface-muted">
                      <Image
                        src={member.image}
                        alt={member.imageAlt[locale]}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      {member.isSampleProfile && (
                        <div className="absolute left-3 top-3 bg-brand-primary-deep/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                          {t.team.sampleBadge}
                        </div>
                      )}
                    </div>

                    {/* Team Details */}
                    <div className="p-6">
                      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-brand-secondary">
                        {member.designation[locale]}
                      </p>

                      <h3 className="mb-2 font-display text-2xl text-brand-ink">
                        {member.name[locale]}
                      </h3>

                      <p className="mb-4 text-xs leading-relaxed text-brand-slate">
                        {member.bio[locale]}
                      </p>
                    </div>
                  </div>

                  {/* Specialization */}
                  {/* <div className="border-t border-brand-border bg-brand-surface-muted px-6 py-3.5 font-mono text-[11px] text-brand-primary">
                    {member.specialization[locale]}
                  </div> */}
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Controls */}
          <div className="mt-8 flex items-center justify-between gap-6">
            {/* Pagination */}
            <div className="team-pagination flex min-h-5 flex-1 items-center gap-2" />

            {/* Navigation */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous team members"
                className="flex h-11 w-11 items-center justify-center border border-brand-border text-brand-primary transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                <span aria-hidden="true" className="text-xl">
                  ←
                </span>
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next team members"
                className="flex h-11 w-11 items-center justify-center border border-brand-border text-brand-primary transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                <span aria-hidden="true" className="text-xl">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
