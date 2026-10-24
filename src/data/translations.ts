// import { Locale } from "./siteContent";

// export interface TranslationDictionary {
//   meta: {
//     languageLabel: string;
//     translationReviewNotice: string;
//   };
//   nav: {
//     home: string;
//     about: string;
//     services: string;
//     team: string;
//     contact: string;
//     inquireCta: string;
//     languageSelectorLabel: string;
//     openMenuLabel: string;
//     closeMenuLabel: string;
//   };
//   hero: {
//     prevSlideLabel: string;
//     nextSlideLabel: string;
//     pauseAutoplayLabel: string;
//     resumeAutoplayLabel: string;
//     scrollIndicator: string;
//   };
//   about: {
//     sectionLabel: string;
//     headline: string;
//     leadParagraph: string;
//     bodyParagraph: string;
//     placeholderNotice: string;
//     pillars: {
//       title: string;
//       description: string;
//     }[];
//     imageCaptionTitle: string;
//     imageCaptionSubtitle: string;
//     ctaLabel: string;
//   };
//   services: {
//     sectionLabel: string;
//     headline: string;
//     description: string;
//     sampleNotice: string;
//     exploreLink: string;
//     viewAllCta: string;
//     prevLabel: string;
//     nextLabel: string;
//   };
//   team: {
//     sectionLabel: string;
//     headline: string;
//     description: string;
//     sampleBadge: string;
//     sampleDisclaimer: string;
//   };
//   contact: {
//     sectionLabel: string;
//     headline: string;
//     description: string;
//     formTitle: string;
//     nameLabel: string;
//     namePlaceholder: string;
//     emailLabel: string;
//     emailPlaceholder: string;
//     serviceLabel: string;
//     serviceOptions: string[];
//     messageLabel: string;
//     messagePlaceholder: string;
//     submitButton: string;
//     successMessage: string;
//     placeholderContactNotice: string;
//     officeLabel: string;
//     officeValue: string;
//     emailTitle: string;
//     emailValue: string;
//     phoneTitle: string;
//     phoneValue: string;
//     hoursTitle: string;
//     hoursValue: string;
//   };
//   footer: {
//     brandStatement: string;
//     navigationHeading: string;
//     practiceHeading: string;
//     contactHeading: string;
//     placeholderBadge: string;
//     copyright: string;
//     privacyPolicy: string;
//     termsOfEngagement: string;
//     disclaimer: string;
//   };
// }

// // translation for about page 
// // In src/data/translations.ts, add `aboutPage` to TranslationDictionary interface:

// export interface AboutPageTranslations {
//   hero: {
//     breadcrumbHome: string;
//     breadcrumbCurrent: string;
//     eyebrow: string;
//     title: string;
//     subtitle: string;
//   };
//   overview: {
//     sectionLabel: string;
//     headline: string;
//     leadParagraph: string;
//     secondaryParagraph: string;
//     tertiaryParagraph: string;
//     methodologyHeading: string;
//     methodologyItems: {
//       label: string;
//       detail: string;
//     }[];
//     editorialNoteBadge: string;
//     editorialNoteText: string;
//     imageCaptionTitle: string;
//     imageCaptionSubtitle: string;
//     primaryCta: string;
//     secondaryCta: string;
//   };
//   history: {
//     sectionLabel: string;
//     headline: string;
//     description: string;
//     placeholderBanner: string;
//     deliverablePrefix: string;
//   };
//   missionVision: {
//     sectionLabel: string;
//     headline: string;
//     description: string;
//     missionCode: string;
//     missionLabel: string;
//     missionHeadline: string;
//     missionBody: string;
//     missionPillars: string[];
//     visionCode: string;
//     visionLabel: string;
//     visionHeadline: string;
//     visionBody: string;
//     visionPillars: string[];
//   };
//   values: {
//     sectionLabel: string;
//     headline: string;
//     description: string;
//     bottomCtaPrompt: string;
//     bottomCtaButton: string;
//   };
//   partners: {
//     sectionLabel: string;
//     headline: string;
//     description: string;
//     placeholderBadge: string;
//     prevPartnerLabel: string;
//     nextPartnerLabel: string;
//     footnote: string;
//   };
// }


// export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
//   en: {
//     meta: {
//       languageLabel: "English",
//       translationReviewNotice:
//         "Bilingual Content Mode Active — Sample copy & translations marked for business review.",
//     },
//     nav: {
//       home: "Home",
//       about: "About",
//       services: "Services",
//       team: "Leadership",
//       contact: "Contact",
//       inquireCta: "Client Inquiry",
//       languageSelectorLabel: "Select Website Language",
//       openMenuLabel: "Open navigation menu",
//       closeMenuLabel: "Close navigation menu",
//     },
//     hero: {
//       prevSlideLabel: "Previous slide",
//       nextSlideLabel: "Next slide",
//       pauseAutoplayLabel: "Pause slider autoplay",
//       resumeAutoplayLabel: "Resume slider autoplay",
//       scrollIndicator: "Scroll to explore",
//     },
//     about: {
//       sectionLabel: "01 / ABOUT LRS",
//       headline: "Where Legal Rigor Meets Effortless Global Relocation.",
//       leadParagraph:
//         "LRS (Legal & Relocation Services) is an integrated advisory practice built around a singular premise: cross-border mobility and commercial expansion require synchronized legal protection and on-the-ground relocation stewardship.",
//       bodyParagraph:
//         "Whether advising a multinational enterprise on corporate structuring and work permits, or guiding an executive family through property acquisition, tenancy contracts, and destination settling, our methodology prioritizes clarity, statutory compliance, and personal discretion.",
//       placeholderNotice:
//         "Editorial Placeholder Overview — Ready to be customized with your firm's founding history, jurisdictional registrations, and verified client milestones.",
//       pillars: [
//         {
//           title: "Single-Point Accountability",
//           description:
//             "Legal counsel and relocation specialists collaborate within one unified workflow, eliminating fragmented vendor handoffs.",
//         },
//         {
//           title: "Statutory & Consular Precision",
//           description:
//             "Every visa petition, lease deed, and corporate filing is vetted against current national and regional regulatory frameworks.",
//         },
//         {
//           title: "Discreet Private Client Care",
//           description:
//             "Tailored destination orientation, residential search, and administrative onboarding designed for executives and returning NRIs.",
//         },
//       ],
//       imageCaptionTitle: "LRS Advisory Practice",
//       imageCaptionSubtitle: "Corporate Legal Counsel & Destination Mobility",
//       ctaLabel: "Discuss Your Mandate",
//     },
//     services: {
//       sectionLabel: "02 / PRACTICE AREAS & MOBILITY SERVICES",
//       headline: "Integrated Capabilities Across Law & Relocation.",
//       description:
//         "Explore our core advisory pillars. Each practice area below is structured as editable sample content in src/data/siteContent.ts so your exact service scope can be updated effortlessly.",
//       sampleNotice: "Editable Sample Practice Areas — Autoplay Loop Enabled",
//       exploreLink: "Inquire About Service",
//       viewAllCta: "Request a Tailored Scope of Work",
//       prevLabel: "Previous service card",
//       nextLabel: "Next service card",
//     },
//     team: {
//       sectionLabel: "03 / ADVISORY LEADERSHIP",
//       headline: "Guided by Seasoned Legal & Mobility Specialists.",
//       description:
//         "Our multidisciplinary structure pairs legal advocates with dedicated relocation consultants.",
//       sampleBadge: "SAMPLE PROFILE — REPLACE IN DATA FILE",
//       sampleDisclaimer:
//         "Note: The profiles below are clearly marked sample placeholders stored in src/data/siteContent.ts to demonstrate card layout, typography, and hover interactions without fabricating personnel.",
//     },
//     contact: {
//       sectionLabel: "04 / INITIATE AN INQUIRY",
//       headline: "Begin a Confidential Conversation with LRS.",
//       description:
//         "Share your legal or relocation requirements below. Contact coordinates are marked as editable placeholders until your official office details are inserted.",
//       formTitle: "Direct Advisory Inquiry",
//       nameLabel: "Full Name / Organization",
//       namePlaceholder: "e.g., Arjun Nair / Horizon Global Ltd.",
//       emailLabel: "Work or Personal Email",
//       emailPlaceholder: "name@organization.com",
//       serviceLabel: "Primary Area of Interest",
//       serviceOptions: [
//         "Corporate Legal & Entity Structuring",
//         "Immigration, Visa & FRRO Advisory",
//         "Executive & Family Relocation",
//         "Real Estate Due Diligence & Tenancy",
//         "Combined Legal & Relocation Mandate",
//       ],
//       messageLabel: "Brief Outline of Requirements",
//       messagePlaceholder:
//         "Please describe your timeline, jurisdiction, or relocation destination...",
//       submitButton: "Submit Confidential Inquiry",
//       successMessage:
//         "Thank you. Your inquiry has been recorded in this interactive preview. In production, wire this handler to your preferred email or CRM endpoint.",
//       placeholderContactNotice: "SAMPLE CONTACT PLACEHOLDERS — EDIT IN TRANSLATIONS.TS",
//       officeLabel: "Principal Advisory Office (Placeholder)",
//       officeValue: "[Placeholder: Insert Suite, Building, Kochi / Global Office Address]",
//       emailTitle: "Advisory Desk Email (Placeholder)",
//       emailValue: "contact@lrs-example.com (Placeholder)",
//       phoneTitle: "Direct Consultation Line (Placeholder)",
//       phoneValue: "+91 (000) 000-0000 (Placeholder)",
//       hoursTitle: "Consultation Hours",
//       hoursValue: "Monday – Friday, 09:00 – 18:30 IST",
//     },
//     footer: {
//       brandStatement:
//         "LRS — Legal & Relocation Services delivers cohesive legal counsel, regulatory compliance, and bespoke destination management for businesses and private clients.",
//       navigationHeading: "Navigation",
//       practiceHeading: "Core Practice Areas",
//       contactHeading: "Contact Coordinates (Placeholders)",
//       placeholderBadge: "Sample Contact Info — Replace Before Launch",
//       copyright: `© ${new Date().getFullYear()} LRS Legal & Relocation Services. All rights reserved.`,
//       privacyPolicy: "Privacy Policy",
//       termsOfEngagement: "Terms of Engagement",
//       disclaimer:
//         "Attorney & Advisory Notice: Website content is for informational purposes and does not constitute a formal attorney-client relationship until an engagement letter is executed.",
//     },
//   },
//   ml: {
//     meta: {
//       languageLabel: "മലയാളം",
//       translationReviewNotice:
//         "മലയാളം ഭാഷാ ക്രമീകരണം സജീവമാണ് — പ്രസിദ്ധീകരിക്കുന്നതിന് മുമ്പ് വിവർത്തനങ്ങൾ പരിശോധിച്ച് ഉറപ്പുവരുത്തുക.",
//     },
//     nav: {
//       home: "ഹോം",
//       about: "ഞങ്ങളെക്കുറിച്ച്",
//       services: "സേവനങ്ങൾ",
//       team: "നേതൃത്വം",
//       contact: "ബന്ധപ്പെടുക",
//       inquireCta: "കൺസൾട്ടേഷൻ",
//       languageSelectorLabel: "ഭാഷ തിരഞ്ഞെടുക്കുക",
//       openMenuLabel: "നാവിഗേഷൻ മെനു തുറക്കുക",
//       closeMenuLabel: "നാവിഗേഷൻ മെനു അടയ്ക്കുക",
//     },
//     hero: {
//       prevSlideLabel: "മുമ്പത്തെ സ്ലൈഡ്",
//       nextSlideLabel: "അടുത്ത സ്ലൈഡ്",
//       pauseAutoplayLabel: "സ്ലൈഡർ താൽക്കാലികമായി നിർത്തുക",
//       resumeAutoplayLabel: "സ്ലൈഡർ പുനരാരംഭിക്കുക",
//       scrollIndicator: "താഴേക്ക് സ്ക്രോൾ ചെയ്യുക",
//     },
//     about: {
//       sectionLabel: "01 / LRS-നെ പരിചയപ്പെടാം",
//       headline: "നിയമപരമായ കൃത്യതയും സുഗമമായ റീലൊക്കേഷൻ സേവനങ്ങളും ഒരൊറ്റ കുടക്കീഴിൽ.",
//       leadParagraph:
//         "അന്താരാഷ്ട്ര തലത്തിലുള്ള ബിസിനസ് വിപുലീകരണത്തിനും താമസമാറ്റത്തിനും കൃത്യമായ നിയമസഹായവും പ്രായോഗിക റീലൊക്കേഷൻ പിന്തുണയും ഒരേസമയം ആവശ്യമാണ് എന്ന കാഴ്ചപ്പാടിലാണ് LRS (Legal & Relocation Services) പ്രവർത്തിക്കുന്നത്.",
//       bodyParagraph:
//         "കോർപ്പറേറ്റ് സ്ഥാപനങ്ങളുടെ രജിസ്ട്രേഷൻ, വിസ-ഇമിഗ്രേഷൻ അനുമതികൾ എന്നിവ മുതൽ എക്സിക്യൂട്ടീവുകൾക്കും പ്രവാസി കുടുംബങ്ങൾക്കും ആവശ്യമായ വസ്തു ഇടപാട് പരിശോധന, വാടക കരാറുകൾ, പുതിയ നാട്ടിലെ താമസ സൗകര്യങ്ങൾ എന്നിവ വരെ വ്യക്തതയോടെയും വിശ്വാസ്യതയോടെയും ഞങ്ങൾ നിർവഹിക്കുന്നു.",
//       placeholderNotice:
//         "മാതൃകാ വിവരണം (Editorial Placeholder) — നിങ്ങളുടെ സ്ഥാപനത്തിന്റെ യഥാർത്ഥ ചരിത്രവും വിവരങ്ങളും ഇവിടെ എളുപ്പത്തിൽ ചേർക്കാവുന്നതാണ്.",
//       pillars: [
//         {
//           title: "ഏകീകൃത സേവന ശൈലി",
//           description:
//             "നിയമ വിദഗ്ധരും റീലൊക്കേഷൻ കൺസൾട്ടന്റുമാരും ഒരേ ടീമായി പ്രവർത്തിക്കുന്നതിനാൽ നടപടിക്രമങ്ങൾ വേഗത്തിലും ലളിതമായും പൂർത്തിയാകുന്നു.",
//         },
//         {
//           title: "നിയമ-കോൺസുലാർ കൃത്യത",
//           description:
//             "വിസ അപേക്ഷകൾ, വാടക-വസ്തു കരാറുകൾ, കമ്പനി രേഖകൾ എന്നിവയെല്ലാം നിലവിലെ നിയമ മാനദണ്ഡങ്ങൾക്കനുസൃതമായി സൂക്ഷ്മമായി തയ്യാറാക്കുന്നു.",
//         },
//         {
//           title: "വ്യക്തിഗത ശ്രദ്ധയും സ്വകാര്യതയും",
//           description:
//             "എക്സിക്യൂട്ടീവുകൾക്കും നാട്ടിലേക്ക് തിരിച്ചെത്തുന്ന പ്രവാസികൾക്കും (NRIs) അനുയോജ്യമായ വീട്, സ്കൂൾ, മറ്റ് പ്രാദേശിക രജിസ്ട്രേഷനുകൾ എന്നിവയിൽ പൂർണ്ണ പിന്തുണ.",
//         },
//       ],
//       imageCaptionTitle: "LRS അഡ്വൈസറി പ്രാക്ടീസ്",
//       imageCaptionSubtitle: "ലീഗൽ കൗൺസൽ & ഗ്ലോബൽ മൊബിലിറ്റി",
//       ctaLabel: "സേവനങ്ങളെക്കുറിച്ച് സംസാരിക്കാം",
//     },
//     services: {
//       sectionLabel: "02 / പ്രധാന സേവന മേഖലകൾ",
//       headline: "നിയമ-റീലൊക്കേഷൻ രംഗത്തെ സമഗ്ര സേവനങ്ങൾ.",
//       description:
//         "ഞങ്ങളുടെ പ്രധാന സേവന മേഖലകൾ താഴെ നൽകുന്നു. ഇവയെല്ലാം src/data/siteContent.ts എന്ന ഫയലിൽ എഡിറ്റ് ചെയ്യാവുന്ന മാതൃകാ വിവരങ്ങളായി (Sample Content) ക്രമീകരിച്ചിരിക്കുന്നു.",
//       sampleNotice: "എഡിറ്റ് ചെയ്യാവുന്ന മാതൃകാ സേവനങ്ങൾ • ഓട്ടോപ്ലേ കറൗസൽ",
//       exploreLink: "കൂടുതൽ അറിയുക",
//       viewAllCta: "പ്രത്യേക സേവന പാക്കേജ് ആവശ്യപ്പെടുക",
//       prevLabel: "മുമ്പത്തെ സേവനം",
//       nextLabel: "അടുത്ത സേവനം",
//     },
//     team: {
//       sectionLabel: "03 / ഉപദേശക സമിതി",
//       headline: "പരിചയസമ്പന്നരായ നിയമ-റീലൊക്കേഷൻ വിദഗ്ധർ.",
//       description:
//         "നിയമ രംഗത്തെയും അന്താരാഷ്ട്ര റീലൊക്കേഷൻ മേഖലയിലെയും വിദഗ്ധരുടെ കൂട്ടായ്മ.",
//       sampleBadge: "മാതൃകാ പ്രൊഫൈൽ — ഡാറ്റാ ഫയലിൽ മാറ്റം വരുത്താം",
//       sampleDisclaimer:
//         "ശ്രദ്ധിക്കുക: യഥാർത്ഥ വ്യക്തികളുടെ വിവരങ്ങൾ ചേർക്കുന്നതുവരെ ഡിസൈൻ വ്യക്തമാക്കുന്നതിനായി നൽകിയിട്ടുള്ള മാതൃകാ പ്രൊഫൈലുകളാണ് (Sample Placeholders) താഴെ കാണുന്നത്.",
//     },
//     contact: {
//       sectionLabel: "04 / ഞങ്ങളുമായി ബന്ധപ്പെടുക",
//       headline: "നിങ്ങളുടെ ആവശ്യങ്ങൾ LRS ടീമുമായി പങ്കുവെക്കുക.",
//       description:
//         "നിയമപരമോ റീലൊക്കേഷൻ സംബന്ധമായതോ ആയ ആവശ്യങ്ങൾ താഴെ രേഖപ്പെടുത്താം. സ്ഥാപനത്തിന്റെ ഔദ്യോഗിക വിലാസവും ഫോൺ നമ്പറും ചേർക്കുന്നതുവരെ മാതൃകാ വിവരങ്ങളാണ് നൽകിയിരിക്കുന്നത്.",
//       formTitle: "കൺസൾട്ടേഷൻ അപേക്ഷ",
//       nameLabel: "പേര് / സ്ഥാപനം",
//       namePlaceholder: "ഉദാ: അർജുൻ നായർ / ഹൊറൈസൺ ഗ്ലോബൽ",
//       emailLabel: "ഇമെയിൽ വിലാസം",
//       emailPlaceholder: "name@organization.com",
//       serviceLabel: "ആവശ്യമായ സേവന വിഭാഗം",
//       serviceOptions: [
//         "കോർപ്പറേറ്റ് നിയമം & കമ്പനി രൂപീകരണം",
//         "ഇമിഗ്രേഷൻ, വിസ & FRRO സേവനങ്ങൾ",
//         "എക്സിക്യൂട്ടീവ് & ഫാമിലി റീലൊക്കേഷൻ",
//         "വസ്തു ഇടപാട് പരിശോധന & വാടക കരാറുകൾ",
//         "സംയോജിത നിയമ-റീലൊക്കേഷൻ പാക്കേജ്",
//       ],
//       messageLabel: "ആവശ്യങ്ങളുടെ ലഘു വിവരണം",
//       messagePlaceholder:
//         "നിങ്ങളുടെ സമയക്രമം, സ്ഥലം അല്ലെങ്കിൽ ആവശ്യമായ സേവനങ്ങളെക്കുറിച്ച് ചുരുക്കത്തിൽ എഴുതുക...",
//       submitButton: "അപേക്ഷ സമർപ്പിക്കുക",
//       successMessage:
//         "നന്ദി! നിങ്ങളുടെ സന്ദേശം ഈ പ്രിവ്യൂവിൽ രേഖപ്പെടുത്തിയിട്ടുണ്ട്. പ്രൊഡക്ഷൻ സൈറ്റിൽ ഇത് നിങ്ങളുടെ ഇമെയിൽ അല്ലെങ്കിൽ സി.ആർ.എം (CRM) സിസ്റ്റവുമായി ബന്ധിപ്പിക്കാവുന്നതാണ്.",
//       placeholderContactNotice: "മാതൃകാ വിലാസ വിവരങ്ങൾ — TRANSLATIONS.TS-ൽ മാറ്റാം",
//       officeLabel: "പ്രധാന ഓഫീസ് വിലാസം (Placeholder)",
//       officeValue: "[വിലാസം ചേർക്കുക: കൊച്ചി / ഗ്ലോബൽ ഓഫീസ് വിലാസം]",
//       emailTitle: "ഇമെയിൽ (Placeholder)",
//       emailValue: "contact@lrs-example.com (Placeholder)",
//       phoneTitle: "ഫോൺ നമ്പർ (Placeholder)",
//       phoneValue: "+91 (000) 000-0000 (Placeholder)",
//       hoursTitle: "പ്രവർത്തന സമയം",
//       hoursValue: "തിങ്കൾ – വെള്ളി, രാവിലെ 09:00 – വൈകുന്നേരം 06:30 IST",
//     },
//     footer: {
//       brandStatement:
//         "വാണിജ്യ സ്ഥാപനങ്ങൾക്കും വ്യക്തികൾക്കും വിശ്വസനീയമായ നിയമോപദേശവും അന്താരാഷ്ട്ര നിലവാരത്തിലുള്ള റീലൊക്കേഷൻ സേവനങ്ങളും LRS (Legal & Relocation Services) ഉറപ്പാക്കുന്നു.",
//       navigationHeading: "പ്രധാന പേജുകൾ",
//       practiceHeading: "സേവന മേഖലകൾ",
//       contactHeading: "വിലാസം (Placeholders)",
//       placeholderBadge: "മാതൃകാ വിവരങ്ങൾ — ലോഞ്ചിന് മുമ്പ് മാറ്റുക",
//       copyright: `© ${new Date().getFullYear()} LRS Legal & Relocation Services. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.`,
//       privacyPolicy: "സ്വകാര്യതാ നയം",
//       termsOfEngagement: "സേവന നിബന്ധനകൾ",
//       disclaimer:
//         "നിയമപരമായ അറിയിപ്പ്: ഈ വെബ്സൈറ്റിലെ വിവരങ്ങൾ പൊതുവായ അറിവിലേക്കുള്ളതാണ്. ഔദ്യോഗിക കരാറിൽ ഏർപ്പെടുന്നതുവരെ ഇത് ഒരു അറ്റോർണി-ക്ലയന്റ് ബന്ധമായി കണക്കാക്കുന്നതല്ല.",
//     },
//   },




// };

// // about page translation


// updated transaion.ts page
import { Locale } from "./siteContent";

export interface AboutPageTranslations {
  hero: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  overview: {
    sectionLabel: string;
    headline: string;
    leadParagraph: string;
    secondaryParagraph: string;
    tertiaryParagraph: string;
    methodologyHeading: string;
    methodologyItems: {
      label: string;
      detail: string;
    }[];
    // editorialNoteBadge: string;
    // editorialNoteText: string;
    imageCaptionTitle: string;
    imageCaptionSubtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  history: {
    sectionLabel: string;
    headline: string;
    description: string;
    // placeholderBanner: string;
    deliverablePrefix: string;
  };
  missionVision: {
    sectionLabel: string;
    headline: string;
    description: string;
    missionCode: string;
    missionLabel: string;
    missionHeadline: string;
    missionBody: string;
    missionPillars: string[];
    visionCode: string;
    visionLabel: string;
    visionHeadline: string;
    visionBody: string;
    visionPillars: string[];
  };
  values: {
    sectionLabel: string;
    headline: string;
    description: string;
    bottomCtaPrompt: string;
    bottomCtaButton: string;
  };
  partners: {
    sectionLabel: string;
    headline: string;
    description: string;
    // placeholderBadge: string;
    prevPartnerLabel: string;
    nextPartnerLabel: string;
    // footnote: string;
  };
}

export interface TranslationDictionary {
  meta: {
    languageLabel: string;
    translationReviewNotice: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    team: string;
    contact: string;
    inquireCta: string;
    languageSelectorLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    prevSlideLabel: string;
    nextSlideLabel: string;
    pauseAutoplayLabel: string;
    resumeAutoplayLabel: string;
    scrollIndicator: string;
  };
  about: {
    sectionLabel: string;
    headline: string;
    leadParagraph: string;
    bodyParagraph: string;
    placeholderNotice: string;
    pillars: {
      title: string;
      description: string;
    }[];
    imageCaptionTitle: string;
    imageCaptionSubtitle: string;
    ctaLabel: string;
  };
  services: {
    sectionLabel: string;
    headline: string;
    description: string;
    sampleNotice: string;
    exploreLink: string;
    viewAllCta: string;
    prevLabel: string;
    nextLabel: string;
  };
  team: {
    sectionLabel: string;
    headline: string;
    description: string;
    sampleBadge: string;
    sampleDisclaimer: string;
  };
  contact: {
    sectionLabel: string;
    headline: string;
    description: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    serviceOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
    placeholderContactNotice: string;
    officeLabel: string;
    officeValue: string;
    emailTitle: string;
    emailValue: string;
    phoneTitle: string;
    phoneValue: string;
    hoursTitle: string;
    hoursValue: string;
  };
  footer: {
    brandStatement: string;
    navigationHeading: string;
    practiceHeading: string;
    contactHeading: string;
    placeholderBadge: string;
    copyright: string;
    privacyPolicy: string;
    termsOfEngagement: string;
    // disclaimer: string;
  };
  aboutPage: AboutPageTranslations;
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  en: {
    meta: {
      languageLabel: "English",
      translationReviewNotice:
        "Bilingual Content Mode Active — Sample copy & translations marked for business review.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      team: "Leadership",
      contact: "Contact",
      inquireCta: "Client Inquiry",
      languageSelectorLabel: "Select Website Language",
      openMenuLabel: "Open navigation menu",
      closeMenuLabel: "Close navigation menu",
    },
    hero: {
      prevSlideLabel: "Previous slide",
      nextSlideLabel: "Next slide",
      pauseAutoplayLabel: "Pause slider autoplay",
      resumeAutoplayLabel: "Resume slider autoplay",
      scrollIndicator: "Scroll to explore",
    },
    about: {
      sectionLabel: "01 / ABOUT LRS",
      headline: "Where Legal Rigor Meets Effortless Global Relocation.",
      leadParagraph:
        "LRS (Legal & Relocation Services) is an integrated advisory practice built around a singular premise: cross-border mobility and commercial expansion require synchronized legal protection and on-the-ground relocation stewardship.",
      bodyParagraph:
        "Whether advising a multinational enterprise on corporate structuring and work permits, or guiding an executive family through property acquisition, tenancy contracts, and destination settling, our methodology prioritizes clarity, statutory compliance, and personal discretion.",
      placeholderNotice:
        "Editorial Placeholder Overview — Ready to be customized with your firm's founding history, jurisdictional registrations, and verified client milestones.",
      pillars: [
        {
          title: "Single-Point Accountability",
          description:
            "Legal counsel and relocation specialists collaborate within one unified workflow, eliminating fragmented vendor handoffs.",
        },
        {
          title: "Statutory & Consular Precision",
          description:
            "Every visa petition, lease deed, and corporate filing is vetted against current national and regional regulatory frameworks.",
        },
        {
          title: "Discreet Private Client Care",
          description:
            "Tailored destination orientation, residential search, and administrative onboarding designed for executives and returning NRIs.",
        },
      ],
      imageCaptionTitle: "LRS Advisory Practice",
      imageCaptionSubtitle: "Corporate Legal Counsel & Destination Mobility",
      ctaLabel: "Discuss Your Mandate",
    },
    services: {
      sectionLabel: "02 / PRACTICE AREAS & MOBILITY SERVICES",
      headline: "Integrated Capabilities Across Law & Relocation.",
      description:
        "Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      sampleNotice: "Editable Sample Practice Areas — Autoplay Loop Enabled",
      exploreLink: "Inquire About Service",
      viewAllCta: "Request a Tailored Scope of Work",
      prevLabel: "Previous service card",
      nextLabel: "Next service card",
    },
    team: {
      sectionLabel: "03 / ADVISORY LEADERSHIP",
      headline: "Guided by Seasoned Legal & Mobility Specialists.",
      description:
        "Our multidisciplinary structure pairs legal advocates with dedicated relocation consultants.",
      sampleBadge: "SAMPLE PROFILE — REPLACE IN DATA FILE",
      sampleDisclaimer:
        "Note: The profiles below are clearly marked sample placeholders stored in src/data/siteContent.ts to demonstrate card layout, typography, and hover interactions without fabricating personnel.",
    },
    contact: {
      sectionLabel: "04 / INITIATE AN INQUIRY",
      headline: "Begin a Confidential Conversation with LRS.",
      description:
        "Share your legal or relocation requirements below. Contact coordinates are marked as editable placeholders until your official office details are inserted.",
      formTitle: "Direct Advisory Inquiry",
      nameLabel: "Full Name / Organization",
      namePlaceholder: "e.g., Arjun Nair / Horizon Global Ltd.",
      emailLabel: "Work or Personal Email",
      emailPlaceholder: "name@organization.com",
      serviceLabel: "Primary Area of Interest",
      serviceOptions: [
        "Corporate Legal & Entity Structuring",
        "Immigration, Visa & FRRO Advisory",
        "Executive & Family Relocation",
        "Real Estate Due Diligence & Tenancy",
        "Combined Legal & Relocation Mandate",
      ],
      messageLabel: "Brief Outline of Requirements",
      messagePlaceholder:
        "Please describe your timeline, jurisdiction, or relocation destination...",
      submitButton: "Submit Confidential Inquiry",
      successMessage:
        "Thank you. Your inquiry has been recorded in this interactive preview. In production, wire this handler to your preferred email or CRM endpoint.",
      placeholderContactNotice: "SAMPLE CONTACT PLACEHOLDERS — EDIT IN TRANSLATIONS.TS",
      officeLabel: "Principal Advisory Office (Placeholder)",
      officeValue: "[Placeholder: Insert Suite, Building, Kochi / Global Office Address]",
      emailTitle: "Advisory Desk Email (Placeholder)",
      emailValue: "contact@lrs-example.com (Placeholder)",
      phoneTitle: "Direct Consultation Line (Placeholder)",
      phoneValue: "+91 (000) 000-0000 (Placeholder)",
      hoursTitle: "Consultation Hours",
      hoursValue: "Monday – Friday, 09:00 – 18:30 IST",
    },
    footer: {
      brandStatement:
        "LRS — Legal & Relocation Services delivers cohesive legal counsel, regulatory compliance, and bespoke destination management for businesses and private clients.",
      navigationHeading: "Navigation",
      practiceHeading: "Core Practice Areas",
      contactHeading: "Contact Coordinates (Placeholders)",
      placeholderBadge: "Sample Contact Info — Replace Before Launch",
      copyright: `© ${new Date().getFullYear()} LRS Legal & Relocation Services. All rights reserved.`,
      privacyPolicy: "Privacy Policy",
      termsOfEngagement: "Terms of Engagement",
      // disclaimer:
      //   "Attorney & Advisory Notice: Website content is for informational purposes and does not constitute a formal attorney-client relationship until an engagement letter is executed.",
    },
    aboutPage: {
      hero: {
        breadcrumbHome: "Home",
        breadcrumbCurrent: "About Us",
        eyebrow: "INSTITUTIONAL PROFILE • LRS ADVISORY",
        title: "About Us",
        subtitle:
          "An integrated legal and global relocation practice engineered for multinational enterprises, executives, and returning NRIs.",
      },
      overview: {
        sectionLabel: "01 / FIRM IDENTITY & MANDATE",
        headline: "Synchronizing Legal Counsel with On-the-Ground Relocation Stewardship.",
        leadParagraph:
          "LRS (Legal & Relocation Services) was established around a clear operational insight: cross-border commercial expansion and executive mobility rarely succeed when legal representation and destination settling are handled by disconnected vendors.",
        secondaryParagraph:
          "Our practice unites corporate and property counsel with seasoned relocation specialists under one roof. From entity incorporation, employment visas, and FRRO compliance to residential lease due diligence, title verification, and family settling-in, every mandate is executed with quiet precision.",
        tertiaryParagraph:
          "We serve corporate mobility teams, diplomatic personnel, international executives, and Non-Resident Indians seeking dependable legal protection and seamless transition management.",
        methodologyHeading: "The LRS Integrated Advisory Model",
        methodologyItems: [
          {
            label: "Unified Legal + Mobility Architecture",
            detail:
              "Simultaneous legal vetting and physical relocation logistics under one accountable engagement lead.",
          },
          {
            label: "Jurisdictional & Consular Compliance",
            detail:
              "Strict adherence to national corporate statutes, municipal property laws, and immigration regulations.",
          },
          {
            label: "Tailored Private Client Discretion",
            detail:
              "Confidential handling of residential acquisitions, executive tenancy deeds, and family onboarding.",
          },
        ],
        // editorialNoteBadge: "EDITABLE COMPANY PROFILE OVERVIEW",
        // editorialNoteText:
        //   "This narrative reflects LRS's core service positioning. Specific registration numbers, founding dates, and jurisdictional credentials can be customized directly in src/data/translations.ts.",
        imageCaptionTitle: "LRS Principal Chambers & Advisory Desk",
        imageCaptionSubtitle: "Integrated Legal Structuring & Destination Management",
        primaryCta: "Initiate a Mandate Consultation",
        secondaryCta: "Explore Practice Areas",
      },
      history: {
        sectionLabel: "02 / OUR HISTORY & EVOLUTION",
        headline: "A Deliberate Progression of Legal & Mobility Capabilities.",
        description:
          "Our institutional journey is structured around expanding the depth of our legal counsel alongside our on-the-ground relocation infrastructure. Milestone dates below are structured as editable placeholders until verified firm dates are inserted.",
        // placeholderBanner:
        //   "EDITABLE TIMELINE STRUCTURE — UPDATE MILESTONE DATES IN SRC/DATA/SITECONTENT.TS",
        deliverablePrefix: "Core Focus:",
      },
      missionVision: {
        sectionLabel: "03 / PURPOSE & DIRECTION",
        headline: "Guided by Statutory Clarity and Human-Centered Mobility.",
        description:
          "Our Mission defines the standards we uphold on every mandate today; our Vision charts the benchmark we set for cross-border advisory.",
        missionCode: "MANDATE 01 / OUR MISSION",
        missionLabel: "Our Mission",
        missionHeadline:
          "To deliver cohesive, legally sound, and stress-free transitions for organizations and individuals moving across borders.",
        missionBody:
          "We exist to eliminate the friction, regulatory risk, and administrative uncertainty of relocation and business establishment—pairing diligent legal protection with attentive, personalized destination support.",
        missionPillars: [
          "Uncompromising statutory and contractual accuracy",
          "Seamless single-point coordination from pre-arrival to settling-in",
          "Transparent, plain-language advisory at every milestone",
        ],
        visionCode: "MANDATE 02 / OUR VISION",
        visionLabel: "Our Vision",
        visionHeadline:
          "To be the most trusted integrated legal and relocation advisory practice for cross-border enterprises and global citizens.",
        visionBody:
          "We envision a standard of professional stewardship where every international assignment, corporate expansion, or homeland return is backed by institutional-grade legal security and effortless local integration.",
        visionPillars: [
          "Setting the benchmark for integrated law-and-mobility practices",
          "Long-term fiduciary trust for international families and NRIs",
          "Continuous refinement of regulatory and destination intelligence",
        ],
      },
      values: {
        sectionLabel: "04 / OUR CORE VALUES",
        headline: "The Principles Governing Every Client Engagement.",
        description:
          "Whether reviewing a commercial lease deed or coordinating an executive family's arrival, our work is anchored by six non-negotiable professional standards.",
        bottomCtaPrompt: "Ready to experience our integrated advisory firsthand?",
        bottomCtaButton: "Schedule a Confidential Consultation",
      },
      partners: {
        sectionLabel: "05 / OUR PARTNERS & INSTITUTIONAL NETWORK",
        headline: "Collaborative Stewardship Across Legal & Mobility Ecosystems.",
        description:
          "LRS coordinates with vetted legal chambers, chartered property consultants, and global mobility networks. The showcase below uses official LRS brand marks alongside clearly labeled partner logo slots ready for your approved partner assets.",
        // placeholderBadge: "EDITABLE PARTNER SHOWCASE — ADD APPROVED LOGOS IN SITECONTENT.TS",
        prevPartnerLabel: "Previous partner slide",
        nextPartnerLabel: "Next partner slide",
        // footnote:
        //   "Note: All partner slots are transparently marked as placeholders so no third-party institutional logos or affiliations are fabricated prior to client authorization.",
      },
    },
  },
  ml: {
    meta: {
      languageLabel: "മലയാളം",
      translationReviewNotice:
        "മലയാളം ഭാഷാ ക്രമീകരണം സജീവമാണ് — പ്രസിദ്ധീകരിക്കുന്നതിന് മുമ്പ് വിവർത്തനങ്ങൾ പരിശോധിച്ച് ഉറപ്പുവരുത്തുക.",
    },
    nav: {
      home: "ഹോം",
      about: "ഞങ്ങളെക്കുറിച്ച്",
      services: "സേവനങ്ങൾ",
      team: "നേതൃത്വം",
      contact: "ബന്ധപ്പെടുക",
      inquireCta: "കൺസൾട്ടേഷൻ",
      languageSelectorLabel: "ഭാഷ തിരഞ്ഞെടുക്കുക",
      openMenuLabel: "നാവിഗേഷൻ മെനു തുറക്കുക",
      closeMenuLabel: "നാവിഗേഷൻ മെനു അടയ്ക്കുക",
    },
    hero: {
      prevSlideLabel: "മുമ്പത്തെ സ്ലൈഡ്",
      nextSlideLabel: "അടുത്ത സ്ലൈഡ്",
      pauseAutoplayLabel: "സ്ലൈഡർ താൽക്കാലികമായി നിർത്തുക",
      resumeAutoplayLabel: "സ്ലൈഡർ പുനരാരംഭിക്കുക",
      scrollIndicator: "താഴേക്ക് സ്ക്രോൾ ചെയ്യുക",
    },
    about: {
      sectionLabel: "01 / LRS-നെ പരിചയപ്പെടാം",
      headline: "നിയമപരമായ കൃത്യതയും സുഗമമായ റീലൊക്കേഷൻ സേവനങ്ങളും ഒരൊറ്റ കുടക്കീഴിൽ.",
      leadParagraph:
        "അന്താരാഷ്ട്ര തലത്തിലുള്ള ബിസിനസ് വിപുലീകരണത്തിനും താമസമാറ്റത്തിനും കൃത്യമായ നിയമസഹായവും പ്രായോഗിക റീലൊക്കേഷൻ പിന്തുണയും ഒരേസമയം ആവശ്യമാണ് എന്ന കാഴ്ചപ്പാടിലാണ് LRS (Legal & Relocation Services) പ്രവർത്തിക്കുന്നത്.",
      bodyParagraph:
        "കോർപ്പറേറ്റ് സ്ഥാപനങ്ങളുടെ രജിസ്ട്രേഷൻ, വിസ-ഇമിഗ്രേഷൻ അനുമതികൾ എന്നിവ മുതൽ എക്സിക്യൂട്ടീവുകൾക്കും പ്രവാസി കുടുംബങ്ങൾക്കും ആവശ്യമായ വസ്തു ഇടപാട് പരിശോധന, വാടക കരാറുകൾ, പുതിയ നാട്ടിലെ താമസ സൗകര്യങ്ങൾ എന്നിവ വരെ വ്യക്തതയോടെയും വിശ്വാസ്യതയോടെയും ഞങ്ങൾ നിർവഹിക്കുന്നു.",
      placeholderNotice:
        "മാതൃകാ വിവരണം (Editorial Placeholder) — നിങ്ങളുടെ സ്ഥാപനത്തിന്റെ യഥാർത്ഥ ചരിത്രവും വിവരങ്ങളും ഇവിടെ എളുപ്പത്തിൽ ചേർക്കാവുന്നതാണ്.",
      pillars: [
        {
          title: "ഏകീകൃത സേവന ശൈലി",
          description:
            "നിയമ വിദഗ്ധരും റീലൊക്കേഷൻ കൺസൾട്ടന്റുമാരും ഒരേ ടീമായി പ്രവർത്തിക്കുന്നതിനാൽ നടപടിക്രമങ്ങൾ വേഗത്തിലും ലളിതമായും പൂർത്തിയാകുന്നു.",
        },
        {
          title: "നിയമ-കോൺസുലാർ കൃത്യത",
          description:
            "വിസ അപേക്ഷകൾ, വാടക-വസ്തു കരാറുകൾ, കമ്പനി രേഖകൾ എന്നിവയെല്ലാം നിലവിലെ നിയമ മാനദണ്ഡങ്ങൾക്കനുസൃതമായി സൂക്ഷ്മമായി തയ്യാറാക്കുന്നു.",
        },
        {
          title: "വ്യക്തിഗത ശ്രദ്ധയും സ്വകാര്യതയും",
          description:
            "എക്സിക്യൂട്ടീവുകൾക്കും നാട്ടിലേക്ക് തിരിച്ചെത്തുന്ന പ്രവാസികൾക്കും (NRIs) അനുയോജ്യമായ വീട്, സ്കൂൾ, മറ്റ് പ്രാദേശിക രജിസ്ട്രേഷനുകൾ എന്നിവയിൽ പൂർണ്ണ പിന്തുണ.",
        },
      ],
      imageCaptionTitle: "LRS അഡ്വൈസറി പ്രാക്ടീസ്",
      imageCaptionSubtitle: "ലീഗൽ കൗൺസൽ & ഗ്ലോബൽ മൊബിലിറ്റി",
      ctaLabel: "സേവനങ്ങളെക്കുറിച്ച് സംസാരിക്കാം",
    },
    services: {
      sectionLabel: "02 / പ്രധാന സേവന മേഖലകൾ",
      headline: "നിയമ-റീലൊക്കേഷൻ രംഗത്തെ സമഗ്ര സേവനങ്ങൾ.",
      description:
        "ഞങ്ങളുടെ പ്രധാന സേവന മേഖലകൾ താഴെ നൽകുന്നു. ഇവയെല്ലാം src/data/siteContent.ts എന്ന ഫയലിൽ എഡിറ്റ് ചെയ്യാവുന്ന മാതൃകാ വിവരങ്ങളായി (Sample Content) ക്രമീകരിച്ചിരിക്കുന്നു.",
      sampleNotice: "എഡിറ്റ് ചെയ്യാവുന്ന മാതൃകാ സേവനങ്ങൾ • ഓട്ടോപ്ലേ കറൗസൽ",
      exploreLink: "കൂടുതൽ അറിയുക",
      viewAllCta: "പ്രത്യേക സേവന പാക്കേജ് ആവശ്യപ്പെടുക",
      prevLabel: "മുമ്പത്തെ സേവനം",
      nextLabel: "അടുത്ത സേവനം",
    },
    team: {
      sectionLabel: "03 / ഉപദേശക സമിതി",
      headline: "പരിചയസമ്പന്നരായ നിയമ-റീലൊക്കേഷൻ വിദഗ്ധർ.",
      description:
        "നിയമ രംഗത്തെയും അന്താരാഷ്ട്ര റീലൊക്കേഷൻ മേഖലയിലെയും വിദഗ്ധരുടെ കൂട്ടായ്മ.",
      sampleBadge: "മാതൃകാ പ്രൊഫൈൽ — ഡാറ്റാ ഫയലിൽ മാറ്റം വരുത്താം",
      sampleDisclaimer:
        "ശ്രദ്ധിക്കുക: യഥാർത്ഥ വ്യക്തികളുടെ വിവരങ്ങൾ ചേർക്കുന്നതുവരെ ഡിസൈൻ വ്യക്തമാക്കുന്നതിനായി നൽകിയിട്ടുള്ള മാതൃകാ പ്രൊഫൈലുകളാണ് (Sample Placeholders) താഴെ കാണുന്നത്.",
    },
    contact: {
      sectionLabel: "04 / ഞങ്ങളുമായി ബന്ധപ്പെടുക",
      headline: "നിങ്ങളുടെ ആവശ്യങ്ങൾ LRS ടീമുമായി പങ്കുവെക്കുക.",
      description:
        "നിയമപരമോ റീലൊക്കേഷൻ സംബന്ധമായതോ ആയ ആവശ്യങ്ങൾ താഴെ രേഖപ്പെടുത്താം. സ്ഥാപനത്തിന്റെ ഔദ്യോഗിക വിലാസവും ഫോൺ നമ്പറും ചേർക്കുന്നതുവരെ മാതൃകാ വിവരങ്ങളാണ് നൽകിയിരിക്കുന്നത്.",
      formTitle: "കൺസൾട്ടേഷൻ അപേക്ഷ",
      nameLabel: "പേര് / സ്ഥാപനം",
      namePlaceholder: "ഉദാ: അർജുൻ നായർ / ഹൊറൈസൺ ഗ്ലോബൽ",
      emailLabel: "ഇമെയിൽ വിലാസം",
      emailPlaceholder: "name@organization.com",
      serviceLabel: "ആവശ്യമായ സേവന വിഭാഗം",
      serviceOptions: [
        "കോർപ്പറേറ്റ് നിയമം & കമ്പനി രൂപീകരണം",
        "ഇമിഗ്രേഷൻ, വിസ & FRRO സേവനങ്ങൾ",
        "എക്സിക്യൂട്ടീവ് & ഫാമിലി റീലൊക്കേഷൻ",
        "വസ്തു ഇടപാട് പരിശോധന & വാടക കരാറുകൾ",
        "സംയോജിത നിയമ-റീലൊക്കേഷൻ പാക്കേജ്",
      ],
      messageLabel: "ആവശ്യങ്ങളുടെ ലഘു വിവരണം",
      messagePlaceholder:
        "നിങ്ങളുടെ സമയക്രമം, സ്ഥലം അല്ലെങ്കിൽ ആവശ്യമായ സേവനങ്ങളെക്കുറിച്ച് ചുരുക്കത്തിൽ എഴുതുക...",
      submitButton: "അപേക്ഷ സമർപ്പിക്കുക",
      successMessage:
        "നന്ദി! നിങ്ങളുടെ സന്ദേശം ഈ പ്രിവ്യൂവിൽ രേഖപ്പെടുത്തിയിട്ടുണ്ട്. പ്രൊഡക്ഷൻ സൈറ്റിൽ ഇത് നിങ്ങളുടെ ഇമെയിൽ അല്ലെങ്കിൽ സി.ആർ.എം (CRM) സിസ്റ്റവുമായി ബന്ധിപ്പിക്കാവുന്നതാണ്.",
      placeholderContactNotice: "മാതൃകാ വിലാസ വിവരങ്ങൾ — TRANSLATIONS.TS-ൽ മാറ്റാം",
      officeLabel: "പ്രധാന ഓഫീസ് വിലാസം (Placeholder)",
      officeValue: "[വിലാസം ചേർക്കുക: കൊച്ചി / ഗ്ലോബൽ ഓഫീസ് വിലാസം]",
      emailTitle: "ഇമെയിൽ (Placeholder)",
      emailValue: "contact@lrs-example.com (Placeholder)",
      phoneTitle: "ഫോൺ നമ്പർ (Placeholder)",
      phoneValue: "+91 (000) 000-0000 (Placeholder)",
      hoursTitle: "പ്രവർത്തന സമയം",
      hoursValue: "തിങ്കൾ – വെള്ളി, രാവിലെ 09:00 – വൈകുന്നേരം 06:30 IST",
    },
    footer: {
      brandStatement:
        "വാണിജ്യ സ്ഥാപനങ്ങൾക്കും വ്യക്തികൾക്കും വിശ്വസനീയമായ നിയമോപദേശവും അന്താരാഷ്ട്ര നിലവാരത്തിലുള്ള റീലൊക്കേഷൻ സേവനങ്ങളും LRS (Legal & Relocation Services) ഉറപ്പാക്കുന്നു.",
      navigationHeading: "പ്രധാന പേജുകൾ",
      practiceHeading: "സേവന മേഖലകൾ",
      contactHeading: "വിലാസം (Placeholders)",
      placeholderBadge: "മാതൃകാ വിവരങ്ങൾ — ലോഞ്ചിന് മുമ്പ് മാറ്റുക",
      copyright: `© ${new Date().getFullYear()} LRS Legal & Relocation Services. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.`,
      privacyPolicy: "സ്വകാര്യതാ നയം",
      termsOfEngagement: "സേവന നിബന്ധനകൾ",
      // disclaimer:
      //   "നിയമപരമായ അറിയിപ്പ്: ഈ വെബ്സൈറ്റിലെ വിവരങ്ങൾ പൊതുവായ അറിവിലേക്കുള്ളതാണ്. ഔദ്യോഗിക കരാറിൽ ഏർപ്പെടുന്നതുവരെ ഇത് ഒരു അറ്റോർണി-ക്ലയന്റ് ബന്ധമായി കണക്കാക്കുന്നതല്ല.",
    },
    aboutPage: {
      hero: {
        breadcrumbHome: "ഹോം",
        breadcrumbCurrent: "ഞങ്ങളെക്കുറിച്ച്",
        eyebrow: "സ്ഥാപന പരിചയം • LRS അഡ്വൈസറി",
        title: "ഞങ്ങളെക്കുറിച്ച്",
        subtitle:
          "ബഹുരാഷ്ട്ര സ്ഥാപനങ്ങൾക്കും എക്സിക്യൂട്ടീവുകൾക്കും പ്രവാസികൾക്കും (NRIs) വേണ്ടി രൂപകൽപ്പന ചെയ്ത സംയോജിത നിയമ-റീലൊക്കേഷൻ സേവന കേന്ദ്രം.",
      },
      overview: {
        sectionLabel: "01 / സ്ഥാപനത്തിന്റെ വ്യക്തിത്വവും ലക്ഷ്യവും",
        headline: "വിദഗ്ധ നിയമോപദേശവും പ്രായോഗിക റീലൊക്കേഷൻ സേവനങ്ങളും ഒരൊറ്റ കുടക്കീഴിൽ.",
        leadParagraph:
          "രാജ്യാന്തര തലത്തിലുള്ള ബിസിനസ് വിപുലീകരണവും എക്സിക്യൂട്ടീവ് താമസമാറ്റവും വിജയകരമാകണമെങ്കിൽ നിയമപരമായ സുരക്ഷയും പ്രാദേശിക റീലൊക്കേഷൻ പിന്തുണയും ഒരേസമയം ലഭ്യമാകണം എന്ന കാഴ്ചപ്പാടിലാണ് LRS (Legal & Relocation Services) പ്രവർത്തിക്കുന്നത്.",
        secondaryParagraph:
          "പരിചയസമ്പന്നരായ അഭിഭാഷകരെയും റീലൊക്കേഷൻ വിദഗ്ധരെയും ഒരൊറ്റ ടീമായി ഞങ്ങൾ അണിനിരത്തുന്നു. കമ്പനി രജിസ്ട്രേഷൻ, വിസ-ഇമിഗ്രേഷൻ അനുമതികൾ, എഫ്.ആർ.ആർ.ഒ (FRRO) നടപടികൾ എന്നിവ മുതൽ വസ്തു ആധാര പരിശോധന, വാടക കരാറുകൾ, കുടുംബങ്ങൾക്കുള്ള താമസ സൗകര്യങ്ങൾ എന്നിവ വരെ കൃത്യതയോടെ നിർവഹിക്കുന്നു.",
        tertiaryParagraph:
          "കോർപ്പറേറ്റ് സ്ഥാപനങ്ങൾ, വിദേശ നയതന്ത്ര ഉദ്യോഗസ്ഥർ, ആഗോള എക്സിക്യൂട്ടീവുകൾ, നാട്ടിലേക്ക് തിരിച്ചെത്തുന്ന പ്രവാസികൾ എന്നിവർക്ക് വിശ്വസനീയമായ നിയമ പരിരക്ഷയും റീലൊക്കേഷൻ സഹായവും ഞങ്ങൾ ഉറപ്പാക്കുന്നു.",
        methodologyHeading: "LRS സംയോജിത സേവന സവിശേഷതകൾ",
        methodologyItems: [
          {
            label: "നിയമ + റീലൊക്കേഷൻ ഏകീകൃത രൂപരേഖ",
            detail:
              "നിയമ പരിശോധനകളും താമസമാറ്റ നടപടികളും ഒരൊറ്റ ഉത്തരവാദിത്തപ്പെട്ട ടീമിന് കീഴിൽ ഏകോപിപ്പിക്കുന്നു.",
          },
          {
            label: "നിയമ-കോൺസുലാർ കൃത്യത",
            detail:
              "കോർപ്പറേറ്റ് നിയമങ്ങൾ, വസ്തു-വാടക ചട്ടങ്ങൾ, ഇമിഗ്രേഷൻ നിബന്ധനകൾ എന്നിവയിൽ വിട്ടുവീഴ്ചയില്ലാത്ത സൂക്ഷ്മത.",
          },
          {
            label: "വ്യക്തിഗത ശ്രദ്ധയും സ്വകാര്യതയും",
            detail:
              "വസ്തു വാങ്ങൽ, എക്സിക്യൂട്ടീവ് ലീസ് കരാറുകൾ, കുടുംബങ്ങളുടെ താമസ സൗകര്യങ്ങൾ എന്നിവ തികഞ്ഞ രഹസ്യസ്വഭാവത്തോടെ നിർവഹിക്കുന്നു.",
          },
        ],
        // editorialNoteBadge: "എഡിറ്റ് ചെയ്യാവുന്ന സ്ഥാപന വിവരണം",
        // editorialNoteText:
        //   "ഈ വിവരണം LRS-ന്റെ പ്രധാന സേവന ശൈലിയെ സൂചിപ്പിക്കുന്നു. സ്ഥാപനത്തിന്റെ രജിസ്ട്രേഷൻ വിവരങ്ങളും ചരിത്രവും src/data/translations.ts ഫയലിൽ എളുപ്പത്തിൽ മാറ്റാവുന്നതാണ്.",
        imageCaptionTitle: "LRS പ്രിൻസിപ്പൽ ചേംബർ & അഡ്വൈസറി ഡെസ്ക്",
        imageCaptionSubtitle: "സംയോജിത നിയമ-റീലൊക്കേഷൻ മാനേജ്മെന്റ്",
        primaryCta: "കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക",
        secondaryCta: "സേവന മേഖലകൾ കാണുക",
      },
      history: {
        sectionLabel: "02 / ഞങ്ങളുടെ വളർച്ചയുടെ ഘട്ടങ്ങൾ",
        headline: "നിയമ-റീലൊക്കേഷൻ രംഗത്തെ പടിപടിയായ പുരോഗതി.",
        description:
          "നിയമോപദേശത്തോടൊപ്പം പ്രായോഗിക റീലൊക്കേഷൻ സൗകര്യങ്ങളും വിപുലീകരിച്ചുകൊണ്ടുള്ള ഞങ്ങളുടെ യാത്രയുടെ രൂപരേഖ താഴെ നൽകുന്നു. യഥാർത്ഥ വർഷങ്ങൾ ചേർക്കുന്നതുവരെ ഇവ മാതൃകാ വിവരങ്ങളായി (Editable Placeholders) ക്രമീകരിച്ചിരിക്കുന്നു.",
        // placeholderBanner:
        //   "എഡിറ്റ് ചെയ്യാവുന്ന ടൈംലൈൻ — വർഷങ്ങളും വിവരങ്ങളും SRC/DATA/SITECONTENT.TS-ൽ മാറ്റാം",
        deliverablePrefix: "പ്രധാന ഫോക്കസ്:",
      },
      missionVision: {
        sectionLabel: "03 / ലക്ഷ്യവും കാഴ്ചപ്പാടും",
        headline: "നിയമപരമായ വ്യക്തതയും മനുഷ്യത്വപരമായ റീലൊക്കേഷൻ സമീപനവും.",
        description:
          "ഓരോ ഇടപാടുകാരനും ഇന്ന് ഞങ്ങൾ ഉറപ്പുനൽകുന്ന സേവന ഗുണനിലവാരമാണ് ഞങ്ങളുടെ 'മിഷൻ'; ഭാവിയിലെ അന്താരാഷ്ട്ര ഉപദേശക രംഗത്ത് ഞങ്ങൾ ലക്ഷ്യമിടുന്ന മാതൃകയാണ് ഞങ്ങളുടെ 'വിഷൻ'.",
        missionCode: "MANDATE 01 / ഞങ്ങളുടെ ലക്ഷ്യം (MISSION)",
        missionLabel: "ഞങ്ങളുടെ ലക്ഷ്യം (Mission)",
        missionHeadline:
          "രാജ്യാന്തര തലത്തിൽ സഞ്ചരിക്കുന്ന സ്ഥാപനങ്ങൾക്കും വ്യക്തികൾക്കും സുരക്ഷിതവും സമ്മർദ്ദരഹിതവുമായ നിയമ-റീലൊക്കേഷൻ സേവനം നൽകുക.",
        missionBody:
          "പുതിയൊരു നാട്ടിലേക്ക് മാറുമ്പോഴോ ബിസിനസ് ആരംഭിക്കുമ്പോഴോ ഉണ്ടാകുന്ന നിയമപരമായ സങ്കീർണ്ണതകളും ആശങ്കകളും ഒഴിവാക്കി, ശക്തമായ നിയമ പരിരക്ഷയും വ്യക്തിഗത റീലൊക്കേഷൻ പിന്തുണയും ഒരേസമയം ലഭ്യമാക്കുക എന്നതാണ് ഞങ്ങളുടെ ദൗത്യം.",
        missionPillars: [
          "കരാറുകളിലും നിയമ രേഖകളിലും വിട്ടുവീഴ്ചയില്ലാത്ത കൃത്യത",
          "യാത്രയ്ക്ക് മുമ്പ് മുതൽ പുതിയ നാട്ടിൽ സ്ഥിരതാമസമാക്കുന്നതുവരെ ഏകീകൃത സഹായം",
          "എല്ലാ ഘട്ടത്തിലും ലളിതവും സുതാര്യവുമായ ആശയവിനിമയം",
        ],
        visionCode: "MANDATE 02 / ഞങ്ങളുടെ കാഴ്ചപ്പാട് (VISION)",
        visionLabel: "ഞങ്ങളുടെ കാഴ്ചപ്പാട് (Vision)",
        visionHeadline:
          "ആഗോള സംരംഭങ്ങൾക്കും പ്രവാസികൾക്കും ഏറ്റവും വിശ്വസനീയമായ സംയോജിത നിയമ-റീലൊക്കേഷൻ ഉപദേശക കേന്ദ്രമായി മാറുക.",
        visionBody:
          "ഏതൊരു അന്താരാഷ്ട്ര നിയമനവും, ബിസിനസ് വിപുലീകരണവും, പ്രവാസികളുടെ മടങ്ങിവരവും മികച്ച നിയമ സുരക്ഷയോടെയും സുഗമമായ പ്രാദേശിക ഒത്തുചേരലോടെയും സാധ്യമാക്കുന്ന ഉന്നത പ്രൊഫഷണൽ ശൈലി സൃഷ്ടിക്കുക.",
        visionPillars: [
          "സംയോജിത നിയമ-റീലൊക്കേഷൻ സേവന രംഗത്ത് മികച്ച മാതൃക സൃഷ്ടിക്കുക",
          "അന്താരാഷ്ട്ര കുടുംബങ്ങൾക്കും പ്രവാസികൾക്കും ദീർഘകാല വിശ്വാസ്യത ഉറപ്പാക്കുക",
          "നിയമ-മൊബിലിറ്റി സംവിധാനങ്ങളിൽ കാലാനുസൃതമായ മികവ് നിലനിർത്തുക",
        ],
      },
      values: {
        sectionLabel: "04 / ഞങ്ങളുടെ അടിസ്ഥാന മൂല്യങ്ങൾ",
        headline: "ഞങ്ങളുടെ പ്രവർത്തനങ്ങളെ നയിക്കുന്ന പ്രൊഫഷണൽ മൂല്യങ്ങൾ.",
        description:
          "വാണിജ്യ കരാറുകൾ പരിശോധിക്കുന്നത് മുതൽ ഒരു കുടുംബത്തിന്റെ താമസമാറ്റം ക്രമീകരിക്കുന്നത് വരെയുള്ള എല്ലാ സേവനങ്ങളുടെയും അടിത്തറ ഈ ആറ് മൂല്യങ്ങളാണ്.",
        bottomCtaPrompt: "ഞങ്ങളുടെ സംയോജിത സേവനങ്ങളെക്കുറിച്ച് നേരിട്ട് സംസാരിക്കാൻ ആഗ്രഹിക്കുന്നുണ്ടോ?",
        bottomCtaButton: "കൺസൾട്ടേഷൻ സമയം തിരഞ്ഞെടുക്കുക",
      },
      partners: {
        sectionLabel: "05 / ഞങ്ങളുടെ പങ്കാളികളും ശൃംഖലയും",
        headline: "നിയമ-റീലൊക്കേഷൻ മേഖലകളിലെ സഹകരണ ശൃംഖല.",
        description:
          "അംഗീകൃത ലീഗൽ ചേംബറുകൾ, പ്രോപ്പർട്ടി കൺസൾട്ടന്റുമാർ, ഗ്ലോബൽ മൊബിലിറ്റി നെറ്റ്‌വർക്കുകൾ എന്നിവയുമായി സഹകരിച്ചാണ് LRS പ്രവർത്തിക്കുന്നത്. നിങ്ങളുടെ ഔദ്യോഗിക പങ്കാളികളുടെ ലോഗോകൾ ചേർക്കുന്നതിനായി താഴെ കാണുന്ന സ്ലൈഡർ ക്രമീകരിച്ചിരിക്കുന്നു.",
        // placeholderBadge: "എഡിറ്റ് ചെയ്യാവുന്ന പാർട്ണർ സ്ലൈഡർ — ലോഗോകൾ SITECONTENT.TS-ൽ ചേർക്കാം",
        prevPartnerLabel: "മുമ്പത്തെ പാർട്ണർ സ്ലൈഡ്",
        nextPartnerLabel: "അടുത്ത പാർട്ണർ സ്ലൈഡ്",
        // footnote:
        //   "ശ്രദ്ധിക്കുക: ഔദ്യോഗിക അനുമതിയില്ലാതെ മറ്റ് സ്ഥാപനങ്ങളുടെ ലോഗോകൾ ചേർക്കാതിരിക്കാൻ ഇവ മാതൃകാ സ്ലോട്ടുകളായി (Placeholders) നൽകിയിരിക്കുന്നു.",
      },
    },
  },
};