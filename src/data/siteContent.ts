export type Locale = "en" | "ml";

export interface HeroSlide {
  id: string;
  image: string;
  imageAlt: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  headline: Record<Locale, string[]>;
  description: Record<Locale, string>;
  primaryCta: Record<Locale, string>;
  primaryHref: string;
  secondaryCta: Record<Locale, string>;
  secondaryHref: string;
}

export interface ServiceItem {
  id: string;
  code: string;
  image: string;
  imageAlt: Record<Locale, string>;
  category: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
}

export interface TeamMember {
  id: string;
  isSampleProfile: boolean;
  image: string;
  imageAlt: Record<Locale, string>;
  name: Record<Locale, string>;
  designation: Record<Locale, string>;
  specialization: Record<Locale, string>;
  bio: Record<Locale, string>;
  linkedInUrl?: string;
}

/**
 * Editable Website Data
 * Note: Sample service descriptions, team profiles, and contact details are clearly marked
 * so they can be replaced with verified company records before launch.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-01",
    image: "/images/hero-1.jpg",
    imageAlt: {
      en: "Sunlit international corporate headquarters atrium with travertine and deep petrol steel architecture",
      ml: "അന്താരാഷ്ട്ര കോർപ്പറേറ്റ് ആസ്ഥാനത്തിന്റെ മനോഹരമായ ആട്രിയം ദൃശ്യം",
    },
    eyebrow: {
      en: "INTEGRATED LEGAL & GLOBAL MOBILITY COUNSEL",
      ml: "സംയോജിത നിയമ-റീലൊക്കേഷൻ ഉപദേശക സേവനങ്ങൾ",
    },
    headline: {
      en: [
        "Navigating Cross-Border Law",
        "and Executive Relocation",
        "with Quiet Precision.",
      ],
      ml: [
        "അന്താരാഷ്ട്ര നിയമ-റീലൊക്കേഷൻ",
        "സേവനങ്ങളിൽ കൃത്യതയാർന്ന",
        "വിദഗ്ധ മാർഗ്ഗനിർദ്ദേശം.",
      ],
    },
    description: {
      en: "LRS unites corporate legal structuring, regulatory compliance, and end-to-end relocation management under one dedicated advisory practice.",
      ml: "കോർപ്പറേറ്റ് നിയമ നടപടികൾ, വിസ-ഇമിഗ്രേഷൻ അനുമതികൾ, എക്സിക്യൂട്ടീവ് റീലൊക്കേഷൻ സേവനങ്ങൾ എന്നിവ ഒരൊറ്റ മേൽക്കൂരയ്ക്ക് കീഴിൽ LRS ലഭ്യമാക്കുന്നു.",
    },
    primaryCta: {
      en: "Schedule a Consultation",
      ml: "കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക",
    },
    primaryHref: "#contact",
    secondaryCta: {
      en: "Explore Practice Areas",
      ml: "സേവനങ്ങൾ പരിചയപ്പെടുക",
    },
    secondaryHref: "#services",
  },
  {
    id: "slide-02",
    image: "/images/hero-2.jpg",
    imageAlt: {
      en: "Modern coastal residence at golden hour representing seamless executive relocation",
      ml: "എക്സിക്യൂട്ടീവ് റീലൊക്കേഷൻ പ്രതിനിധീകരിക്കുന്ന ആധുനിക വസതി",
    },
    eyebrow: {
      en: "BESPOKE DESTINATION & PRIVATE CLIENT SETTLING",
      ml: "വ്യക്തിഗത-കുടുംബ റീലൊക്കേഷൻ സഹായം",
    },
    headline: {
      en: [
        "Seamless Transitions for",
        "Global Executives, Families,",
        "and ReturningNRIs.",
      ],
      ml: [
        "ആഗോള എക്സിക്യൂട്ടീവുകൾക്കും",
        "കുടുംബങ്ങൾക്കും സുഗമമായ",
        "വാസസ്ഥല മാറ്റം.",
      ],
    },
    description: {
      en: "From visa clearances and residential lease structuring to school admissions and local registration, every relocation milestone is handled with discretion.",
      ml: "വിസ ക്ലിയറൻസ്, ഭവന വാടക കരാറുകൾ, തദ്ദേശ രജിസ്ട്രേഷൻ തുടങ്ങി പുതിയൊരു നാട്ടിലേക്ക് മാറുമ്പോഴുള്ള എല്ലാ ഘട്ടങ്ങളിലും പൂർണ്ണ പിന്തുണ.",
    },
    primaryCta: {
      en: "Explore Relocation Services",
      ml: "റീലൊക്കേഷൻ സേവനങ്ങൾ",
    },
    primaryHref: "#services",
    secondaryCta: {
      en: "About Our Practice",
      ml: "സ്ഥാപനത്തെക്കുറിച്ച്",
    },
    secondaryHref: "#about",
  },
  {
    id: "slide-03",
    image: "/images/hero-3.jpg",
    imageAlt: {
      en: "Refined contemporary legal advisory boardroom with warm walnut table and natural light",
      ml: "ആധുനിക ലീഗൽ അഡ്വൈസറി ബോർഡ്റൂം",
    },
    eyebrow: {
      en: "CORPORATE GOVERNANCE & REAL ESTATE DOCUMENTATION",
      ml: "കോർപ്പറേറ്റ് നിയമങ്ങളും വസ്തു ഇടപാട് രേഖകളും",
    },
    headline: {
      en: [
        "Diligent Legal Protection",
        "for Commercial Entities",
        "and Property Assets.",
      ],
      ml: [
        "വാണിജ്യ സ്ഥാപനങ്ങൾക്കും",
        "വസ്തു ഇടപാടുകൾക്കും",
        "ശക്തമായ നിയമ പരിരക്ഷ.",
      ],
    },
    description: {
      en: "Structured legal due diligence, contract drafting, and statutory compliance tailored for businesses establishing or expanding operations.",
      ml: "വ്യവസായ സംരംഭങ്ങൾക്കും വ്യക്തിഗത നിക്ഷേപങ്ങൾക്കും ആവശ്യമായ കരാറുകൾ, ഡ്യൂ ഡിലിജൻസ്, നിയമപരമായ അനുമതികൾ എന്നിവ കൃത്യതയോടെ നിർവഹിക്കുന്നു.",
    },
    primaryCta: {
      en: "Request Legal Advisory",
      ml: "നിയമോപദേശം തേടുക",
    },
    primaryHref: "#contact",
    secondaryCta: {
      en: "Meet the Advisory Team",
      ml: "ഉപദേശക സമിതി",
    },
    secondaryHref: "#team",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-immigration",
    code: "01",
    image: "/images/service-immigration.jpg",
    imageAlt: {
      en: "Bespoke dark teal leather legal portfolio and brass compass on travertine desk",
      ml: "നിയമ രേഖകളുടെ പോർട്ട്ഫോളിയോയും കോമ്പസും",
    },
    category: {
      en: "SAMPLE SERVICE • GLOBAL MOBILITY",
      ml: "മാതൃകാ സേവനം • ഗ്ലോബൽ മൊബിലിറ്റി",
    },
    title: {
      en: "Immigration, Visa & Consular Advisory",
      ml: "ഇമിഗ്രേഷൻ, വിസ & കോൺസുലാർ ഉപദേശം",
    },
    description: {
      en: "Sample service profile: End-to-end preparation of employment visas, business permits, FRRO registrations, and consular document legalization.",
      ml: "മാതൃകാ വിവരണം: തൊഴിൽ വിസകൾ, ബിസിനസ് പെർമിറ്റുകൾ, എഫ്.ആർ.ആർ.ഒ (FRRO) രജിസ്ട്രേഷൻ, കോൺസുലാർ സാക്ഷ്യപ്പെടുത്തലുകൾ എന്നിവയ്ക്കുള്ള സഹായം.",
    },
    deliverables: {
      en: ["Work Permit & Visa Filings", "FRRO & Residency Compliance", "Document Apostille & Attestation"],
      ml: ["വർക്ക് പെർമിറ്റ് & വിസ നടപടികൾ", "റസിഡൻസി രജിസ്ട്രേഷൻ", "രേഖകളുടെ സാക്ഷ്യപ്പെടുത്തൽ"],
    },
  },
  {
    id: "service-relocation",
    code: "02",
    image: "/images/service-relocation.jpg",
    imageAlt: {
      en: "Luxury contemporary courtyard residence with tranquil water and timber architecture",
      ml: "ആധുനിക രീതിയിലുള്ള മനോഹരമായ വസതി",
    },
    category: {
      en: "SAMPLE SERVICE • DESTINATION SETTLING",
      ml: "മാതൃകാ സേവനം • റീലൊക്കേഷൻ",
    },
    title: {
      en: "Executive & Family Relocation Management",
      ml: "എക്സിക്യൂട്ടീവ് & ഫാമിലി റീലൊക്കേഷൻ",
    },
    description: {
      en: "Sample service profile: Curated home search, neighborhood orientation, school search assistance, and settling-in coordination for relocating professionals.",
      ml: "മാതൃകാ വിവരണം: പുതിയ നഗരത്തിലേക്ക് മാറുന്ന ഉദ്യോഗസ്ഥർക്കും കുടുംബങ്ങൾക്കും അനുയോജ്യമായ വീട്, സ്കൂൾ പ്രവേശനം, പ്രാദേശിക സൗകര്യങ്ങൾ എന്നിവ ക്രമീകരിക്കുന്നു.",
    },
    deliverables: {
      en: ["Curated Home & Villa Search", "Schooling & Family Orientation", "Utility & Local Onboarding"],
      ml: ["അനുയോജ്യമായ വീട് കണ്ടെത്തൽ", "സ്കൂൾ പ്രവേശന സഹായം", "പ്രാദേശിക സൗകര്യങ്ങളുടെ ക്രമീകരണം"],
    },
  },
  {
    id: "service-corporate",
    code: "03",
    image: "/images/service-corporate.jpg",
    imageAlt: {
      en: "Architectural glass corporate tower reflecting deep petrol and azure sky",
      ml: "ആധുനിക കോർപ്പറേറ്റ് ഓഫീസ് സമുച്ചയം",
    },
    category: {
      en: "SAMPLE SERVICE • CORPORATE LAW",
      ml: "മാതൃകാ സേവനം • കോർപ്പറേറ്റ് നിയമം",
    },
    title: {
      en: "Corporate Structuring & Commercial Contracts",
      ml: "കോർപ്പറേറ്റ് രൂപീകരണവും വാണിജ്യ കരാറുകളും",
    },
    description: {
      en: "Sample service profile: Entity incorporation, joint venture agreements, commercial lease negotiations, and ongoing statutory governance.",
      ml: "മാതൃകാ വിവരണം: പുതിയ കമ്പനി രജിസ്ട്രേഷൻ, വാണിജ്യ കരാറുകൾ തയ്യാറാക്കൽ, സംയുക്ത സംരംഭങ്ങൾക്കുള്ള നിയമോപദേശം എന്നിവ നൽകുന്നു.",
    },
    deliverables: {
      en: ["Entity Incorporation & Filings", "Commercial Contract Drafting", "Regulatory Compliance Audits"],
      ml: ["കമ്പനി രജിസ്ട്രേഷൻ", "വാണിജ്യ കരാർ തയ്യാറാക്കൽ", "റെഗുലേറ്ററി കംപ്ലയൻസ് ഓഡിറ്റ്"],
    },
  },
  {
    id: "service-realestate",
    code: "04",
    image: "/images/service-realestate.jpg",
    imageAlt: {
      en: "Bright penthouse interior overlooking city skyline with travertine table",
      ml: "നഗരദൃശ്യമുള്ള ആധുനിക അപ്പാർട്ട്മെന്റ് ഇന്റീരിയർ",
    },
    category: {
      en: "SAMPLE SERVICE • PROPERTY & TENANCY",
      ml: "മാതൃകാ സേവനം • വസ്തു-വാടക നിയമങ്ങൾ",
    },
    title: {
      en: "Real Estate Due Diligence & Tenancy Law",
      ml: "വസ്തു ഇടപാട് പരിശോധനയും വാടക നിയമങ്ങളും",
    },
    description: {
      en: "Sample service profile: Title verification, residential and commercial lease structuring, NRI property management counsel, and registration support.",
      ml: "മാതൃകാ വിവരണം: വസ്തുക്കളുടെ ഉടമസ്ഥാവകാശ പരിശോധന, വാടക കരാറുകൾ, പ്രവാസികൾക്കുള്ള പ്രോപ്പർട്ടി ലീഗൽ സർവീസുകൾ എന്നിവ ലഭ്യമാക്കുന്നു.",
    },
    deliverables: {
      en: ["Title & Encumbrance Verification", "Executive Lease Structuring", "NRI Property Legal Counsel"],
      ml: ["ആധാര-ഉടമസ്ഥാവകാശ പരിശോധന", "എക്സിക്യൂട്ടീവ് ലീസ് കരാറുകൾ", "പ്രവാസി പ്രോപ്പർട്ടി നിയമോപദേശം"],
    },
  },
  {
    id: "service-customs",
    code: "05",
    image: "/images/about-editorial.jpg",
    imageAlt: {
      en: "Bespoke global consultancy gallery and reception space with deep teal glass partitions",
      ml: "ഗ്ലോബൽ കൺസൾട്ടൻസി ഓഫീസ് ഇന്റീരിയർ",
    },
    category: {
      en: "SAMPLE SERVICE • TRANSITION LOGISTICS",
      ml: "മാതൃകാ സേവനം • ട്രാൻസിഷൻ മാനേജ്മെന്റ്",
    },
    title: {
      en: "Cross-Border Mobility & Departure Support",
      ml: "അന്താരാഷ്ട്ര യാത്രാ-റീലൊക്കേഷൻ ഏകോപനം",
    },
    description: {
      en: "Sample service profile: Coordinated move management, customs documentation advisory, and lease exit or repatriation clearance.",
      ml: "മാതൃകാ വിവരണം: രാജ്യാന്തര താമസമാറ്റത്തിനാവശ്യമായ കസ്റ്റംസ് രേഖകൾ, ലീസ് ക്ലോഷർ, റീപാട്രിയേഷൻ ക്ലിയറൻസ് എന്നിവ ഏകോപിപ്പിക്കുന്നു.",
    },
    deliverables: {
      en: ["Customs Documentation Advisory", "Lease Surrender & Dilapidation", "Repatriation & Exit Clearances"],
      ml: ["കസ്റ്റംസ് ഡോക്യുമെന്റേഷൻ ഉപദേശം", "ലീസ് സറണ്ടർ നടപടികൾ", "എക്സിറ്റ് ക്ലിയറൻസ് സഹായം"],
    },
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sample-member-1",
    isSampleProfile: true,
    image: "/images/team-1.jpg",
    imageAlt: {
      en: "Editorial portrait for sample Managing Partner profile",
      ml: "മാനേജിംഗ് പാർട്ണർ മാതൃകാ പ്രൊഫൈൽ ചിത്രം",
    },
    name: {
      en: "[Sample Profile] Adv. Arvind Menon",
      ml: "[മാതൃകാ പ്രൊഫൈൽ] അഡ്വ. അരവിന്ദ് മേനോൻ",
    },
    designation: {
      en: "Managing Partner — Corporate & Cross-Border Law",
      ml: "മാനേജിംഗ് പാർട്ണർ — കോർപ്പറേറ്റ് & ക്രോസ്-ബോർഡർ ലോ",
    },
    specialization: {
      en: "Replace with actual partner biography in src/data/siteContent.ts",
      ml: "യഥാർത്ഥ വിവരങ്ങൾ src/data/siteContent.ts ഫയലിൽ ചേർക്കുക",
    },
    bio: {
      en: "Sample placeholder profile illustrating layout and typography for senior legal leadership focusing on corporate structuring and international regulatory compliance.",
      ml: "കോർപ്പറേറ്റ് നിയമങ്ങളിലും അന്താരാഷ്ട്ര റെഗുലേറ്ററി നടപടികളിലും നേതൃത്വം നൽകുന്ന സീനിയർ പാർട്ണറുടെ വിവരങ്ങൾ ചേർക്കുന്നതിനുള്ള മാതൃകാ കാർഡ്.",
    },
  },
  {
    id: "sample-member-2",
    isSampleProfile: true,
    image: "/images/team-2.jpg",
    imageAlt: {
      en: "Editorial portrait for sample Director of Relocation Services profile",
      ml: "ഗ്ലോബൽ മൊബിലിറ്റി ഡയറക്ടർ മാതൃകാ ചിത്രം",
    },
    name: {
      en: "[Sample Profile] Elena Rostova",
      ml: "[മാതൃകാ പ്രൊഫൈൽ] എലേന റോസ്റ്റോവ",
    },
    designation: {
      en: "Director — Global Mobility & Executive Relocation",
      ml: "ഡയറക്ടർ — ഗ്ലോബൽ മൊബിലിറ്റി & എക്സിക്യൂട്ടീവ് റീലൊക്കേഷൻ",
    },
    specialization: {
      en: "Replace with actual director biography in src/data/siteContent.ts",
      ml: "യഥാർത്ഥ വിവരങ്ങൾ src/data/siteContent.ts ഫയലിൽ ചേർക്കുക",
    },
    bio: {
      en: "Sample placeholder profile demonstrating how executive destination services, diplomatic transitions, and family settling-in leads are presented.",
      ml: "എക്സിക്യൂട്ടീവ് റീലൊക്കേഷൻ, ഡിപ്ലോമാറ്റിക് ട്രാൻസിഷൻ, ഫാമിലി സെറ്റിലിംഗ് വിഭാഗം മേധാവിയുടെ വിവരങ്ങൾ നൽകാനുള്ള മാതൃകാ പ്രൊഫൈൽ.",
    },
  },
  {
    id: "sample-member-3",
    isSampleProfile: true,
    image: "/images/team-3.jpg",
    imageAlt: {
      en: "Editorial portrait for sample Principal Counsel profile",
      ml: "പ്രിൻസിപ്പൽ കൗൺസൽ മാതൃകാ പ്രൊഫൈൽ ചിത്രം",
    },
    name: {
      en: "[Sample Profile] Adv. Clara Vance",
      ml: "[മാതൃകാ പ്രൊഫൈൽ] അഡ്വ. ക്ലാര വാൻസ്",
    },
    designation: {
      en: "Principal Counsel — Real Estate & Private Client Practice",
      ml: "പ്രിൻസിപ്പൽ കൗൺസൽ — റിയൽ എസ്റ്റേറ്റ് & പ്രൈവറ്റ് ക്ലയന്റ്സ്",
    },
    specialization: {
      en: "Replace with actual counsel biography in src/data/siteContent.ts",
      ml: "യഥാർത്ഥ വിവരങ്ങൾ src/data/siteContent.ts ഫയലിൽ ചേർക്കുക",
    },
    bio: {
      en: "Sample placeholder profile showcasing property due diligence, commercial tenancy structuring, and cross-border private client advisory.",
      ml: "വസ്തു ഇടപാട് നിയമങ്ങൾ, വാടക കരാറുകൾ, പ്രൈവറ്റ് ക്ലയന്റ് ഉപദേശം എന്നിവ കൈകാര്യം ചെയ്യുന്ന ലീഗൽ കൗൺസലിന്റെ മാതൃകാ പ്രൊഫൈൽ.",
    },
  },
  {
    id: "sample-member-4",
    isSampleProfile: true,
    image: "/images/team-3.jpg",
    imageAlt: {
      en: "Editorial portrait for sample Principal Counsel profile",
      ml: "പ്രിൻസിപ്പൽ കൗൺസൽ മാതൃകാ പ്രൊഫൈൽ ചിത്രം",
    },
    name: {
      en: "[Sample Profile] Adv. Clara Vance",
      ml: "[മാതൃകാ പ്രൊഫൈൽ] അഡ്വ. ക്ലാര വാൻസ്",
    },
    designation: {
      en: "Principal Counsel — Real Estate & Private Client Practice",
      ml: "പ്രിൻസിപ്പൽ കൗൺസൽ — റിയൽ എസ്റ്റേറ്റ് & പ്രൈവറ്റ് ക്ലയന്റ്സ്",
    },
    specialization: {
      en: "Replace with actual counsel biography in src/data/siteContent.ts",
      ml: "യഥാർത്ഥ വിവരങ്ങൾ src/data/siteContent.ts ഫയലിൽ ചേർക്കുക",
    },
    bio: {
      en: "Sample placeholder profile showcasing property due diligence, commercial tenancy structuring, and cross-border private client advisory.",
      ml: "വസ്തു ഇടപാട് നിയമങ്ങൾ, വാടക കരാറുകൾ, പ്രൈവറ്റ് ക്ലയന്റ് ഉപദേശം എന്നിവ കൈകാര്യം ചെയ്യുന്ന ലീഗൽ കൗൺസലിന്റെ മാതൃകാ പ്രൊഫൈൽ.",
    },
  },
];


// content for about page
// Add to src/data/siteContent.ts (below TEAM_MEMBERS)

export interface HistoryMilestone {
  id: string;
  phase: Record<Locale, string>;
  period: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  deliverableHighlight: Record<Locale, string>;
  isPlaceholder: boolean;
}

export interface CoreValueItem {
  id: string;
  number: string;
  iconName: "scale" | "shield" | "compass" | "globe" | "fileCheck" | "handshake";
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  principleTag: Record<Locale, string>;
}

export interface PartnerSlotItem {
  id: string;
  code: string;
  category: Record<Locale, string>;
  name: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  isPlaceholder: boolean;
}

export const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    id: "milestone-01",
    phase: {
      en: "PHASE I • FOUNDATIONAL VISION",
      ml: "ഘട്ടം 01 • പ്രാരംഭ കാഴ്ചപ്പാട്",
    },
    period: {
      en: "[Milestone Year / Era — Editable]",
      ml: "[വർഷം / കാലഘട്ടം — എഡിറ്റ് ചെയ്യാം]",
    },
    title: {
      en: "Establishing the Integrated Legal & Mobility Premise",
      ml: "സംയോജിത നിയമ-റീലൊക്കേഷൻ സേവന ശൈലിയുടെ തുടക്കം",
    },
    description: {
      en: "Placeholder milestone: Replace with your firm's founding narrative. LRS was conceptualized to bridge the gap between traditional legal chambers and on-the-ground executive relocation management.",
      ml: "മാതൃകാ വിവരണം: സ്ഥാപനത്തിന്റെ യഥാർത്ഥ തുടക്കം ഇവിടെ ചേർക്കുക. പരമ്പരാഗത നിയമ സഹായവും പ്രായോഗിക റീലൊക്കേഷൻ സേവനങ്ങളും ഒരൊറ്റ കുടക്കീഴിൽ കൊണ്ടുവരിക എന്ന ലക്ഷ്യത്തോടെയാണ് LRS രൂപകൽപ്പന ചെയ്തത്.",
    },
    deliverableHighlight: {
      en: "Unified Single-Window Counsel",
      ml: "ഏകീകൃത ഉപദേശക സംവിധാനം",
    },
    isPlaceholder: true,
  },
  {
    id: "milestone-02",
    phase: {
      en: "PHASE II • CORPORATE & CONSULAR PRACTICE",
      ml: "ഘട്ടം 02 • കോർപ്പറേറ്റ് & കോൺസുലാർ വിപുലീകരണം",
    },
    period: {
      en: "[Milestone Year / Era — Editable]",
      ml: "[വർഷം / കാലഘട്ടം — എഡിറ്റ് ചെയ്യാം]",
    },
    title: {
      en: "Structuring Cross-Border Entity & Immigration Workflows",
      ml: "കോർപ്പറേറ്റ് രൂപീകരണവും ഇമിഗ്രേഷൻ നടപടിക്രമങ്ങളും",
    },
    description: {
      en: "Placeholder milestone: Detail how your practice expanded into corporate structuring, employment visa compliance, FRRO registrations, and commercial lease advisory for incoming enterprises.",
      ml: "മാതൃകാ വിവരണം: കമ്പനി രജിസ്ട്രേഷൻ, തൊഴിൽ വിസകൾ, എഫ്.ആർ.ആർ.ഒ (FRRO) നടപടികൾ, വാണിജ്യ കരാറുകൾ എന്നിവയിലേക്ക് സേവനങ്ങൾ വ്യാപിപ്പിച്ച ഘട്ടം ഇവിടെ രേഖപ്പെടുത്താം.",
    },
    deliverableHighlight: {
      en: "Statutory & Regulatory Rigor",
      ml: "നിയമപരമായ കൃത്യതയും സുതാര്യതയും",
    },
    isPlaceholder: true,
  },
  {
    id: "milestone-03",
    phase: {
      en: "PHASE III • PRIVATE CLIENT & NRI STEWARDSHIP",
      ml: "ഘട്ടം 03 • പ്രൈവറ്റ് ക്ലയന്റ് & പ്രവാസി സേവനങ്ങൾ",
    },
    period: {
      en: "[Milestone Year / Era — Editable]",
      ml: "[വർഷം / കാലഘട്ടം — എഡിറ്റ് ചെയ്യാം]",
    },
    title: {
      en: "Dedicated Destination Settling & Real Estate Due Diligence",
      ml: "വസ്തു ഇടപാട് പരിശോധനയും കുടുംബ റീലൊക്കേഷൻ സഹായവും",
    },
    description: {
      en: "Placeholder milestone: Highlight your firm's bespoke workflows for executives, diplomats, and returning NRIs—covering title verification, residential search, schooling, and local onboarding.",
      ml: "മാതൃകാ വിവരണം: എക്സിക്യൂട്ടീവുകൾക്കും നാട്ടിലേക്ക് തിരിച്ചെത്തുന്ന പ്രവാസികൾക്കും (NRIs) വേണ്ടിയുള്ള വസ്തു ആധാര പരിശോധന, ഭവന കണ്ടെത്തൽ, സ്കൂൾ പ്രവേശനം തുടങ്ങിയ സേവനങ്ങളുടെ വിപുലീകരണം.",
    },
    deliverableHighlight: {
      en: "Bespoke Private Client Care",
      ml: "വ്യക്തിഗത ശ്രദ്ധയും സ്വകാര്യതയും",
    },
    isPlaceholder: true,
  },
  {
    id: "milestone-04",
    phase: {
      en: "PHASE IV • CONTEMPORARY PRACTICE",
      ml: "ഘട്ടം 04 • സമകാലിക പ്രവർത്തന ശൈലി",
    },
    period: {
      en: "Present Mandate",
      ml: "നിലവിലെ സേവന ശൈലി",
    },
    title: {
      en: "Synchronized Legal Protection & Global Relocation Advisory",
      ml: "സമഗ്രമായ നിയമ സംരക്ഷണവും ആഗോള റീലൊക്കേഷൻ ഉപദേശവും",
    },
    description: {
      en: "Today, LRS operates as a cohesive, multidisciplinary advisory practice where legal advocates and mobility specialists work in lockstep for corporate and private mandates.",
      ml: "ഇന്ന് കോർപ്പറേറ്റ് സ്ഥാപനങ്ങൾക്കും വ്യക്തികൾക്കും ഒരേസമയം നിയമ പരിരക്ഷയും റീലൊക്കേഷൻ പിന്തുണയും നൽകുന്ന സംയോജിത ഉപദേശക കേന്ദ്രമായി LRS പ്രവർത്തിക്കുന്നു.",
    },
    deliverableHighlight: {
      en: "End-to-End Mandate Execution",
      ml: "സമ്പൂർണ്ണ സേവന ഉത്തരവാദിത്തം",
    },
    isPlaceholder: true,
  },
];

export const CORE_VALUES_DATA: CoreValueItem[] = [
  {
    id: "value-01",
    number: "01",
    iconName: "scale",
    title: {
      en: "Statutory & Legal Precision",
      ml: "നിയമപരമായ സൂക്ഷ്മത",
    },
    description: {
      en: "Every contract, title opinion, corporate filing, and visa petition is grounded in rigorous statutory verification and current regulatory frameworks.",
      ml: "ഓരോ കരാറും, ആധാര പരിശോധനയും, കമ്പനി രേഖകളും, വിസ അപേക്ഷകളും നിലവിലെ നിയമ മാനദണ്ഡങ്ങൾക്കനുസൃതമായി അതീവ സൂക്ഷ്മതയോടെ തയ്യാറാക്കുന്നു.",
    },
    principleTag: {
      en: "ZERO REGULATORY AMBIGUITY",
      ml: "കൃത്യതയാർന്ന നിയമ നടപടികൾ",
    },
  },
  {
    id: "value-02",
    number: "02",
    iconName: "shield",
    title: {
      en: "Uncompromising Discretion",
      ml: "സമ്പൂർണ്ണ സ്വകാര്യതയും വിശ്വാസ്യതയും",
    },
    description: {
      en: "We safeguard sensitive corporate expansion plans, executive movements, and private family property matters with strict professional confidentiality.",
      ml: "കോർപ്പറേറ്റ് വിപുലീകരണ പദ്ധതികൾ, എക്സിക്യൂട്ടീവ് യാത്രകൾ, വ്യക്തിഗത വസ്തു ഇടപാടുകൾ എന്നിവ തികഞ്ഞ സ്വകാര്യതയോടെയും രഹസ്യസ്വഭാവത്തോടെയും കൈകാര്യം ചെയ്യുന്നു.",
    },
    principleTag: {
      en: "CONFIDENTIAL CLIENT STEWARDSHIP",
      ml: "ഉയർന്ന പ്രൊഫഷണൽ രഹസ്യസ്വഭാവം",
    },
  },
  {
    id: "value-03",
    number: "03",
    iconName: "compass",
    title: {
      en: "Single-Window Accountability",
      ml: "ഏകീകൃത ഉത്തരവാദിത്തം",
    },
    description: {
      en: "By uniting legal counsel and field relocation specialists within one practice, our clients never experience fragmented communication or vendor handoffs.",
      ml: "നിയമ വിദഗ്ധരും റീലൊക്കേഷൻ കൺസൾട്ടന്റുമാരും ഒരേ ടീമായി പ്രവർത്തിക്കുന്നതിനാൽ ഇടപാടുകാർക്ക് വിവിധ ഏജൻസികളെ ആശ്രയിക്കേണ്ട ബുദ്ധിമുട്ട് ഒഴിവാകുന്നു.",
    },
    principleTag: {
      en: "SYNCHRONIZED EXECUTION",
      ml: "ഒരൊറ്റ കുടക്കീഴിൽ സമഗ്ര സേവനം",
    },
  },
  {
    id: "value-04",
    number: "04",
    iconName: "fileCheck",
    title: {
      en: "Transparent Documentation",
      ml: "സുതാര്യമായ രേഖാ പരിശോധന",
    },
    description: {
      en: "Clear scope definitions, milestone reporting, and plain-language legal advisories ensure clients make informed commercial and residential decisions.",
      ml: "വ്യക്തമായ കരാർ വ്യവസ്ഥകളും കൃത്യമായ ഘട്ടംഘട്ടമായുള്ള വിവര കൈമാറ്റവും വഴി ഇടപാടുകാർക്ക് ആത്മവിശ്വാസത്തോടെ തീരുമാനങ്ങളെടുക്കാൻ സാധിക്കുന്നു.",
    },
    principleTag: {
      en: "CLARITY AT EVERY STAGE",
      ml: "എല്ലാ ഘട്ടത്തിലും വ്യക്തത",
    },
  },
  {
    id: "value-05",
    number: "05",
    iconName: "globe",
    title: {
      en: "Cross-Cultural & Local Fluency",
      ml: "ആഗോള കാഴ്ചപ്പാടും പ്രാദേശിക പരിചയവും",
    },
    description: {
      en: "We pair international corporate standards with deep regional administrative knowledge to smooth every local registration and neighborhood transition.",
      ml: "അന്താരാഷ്ട്ര നിലവാരമുള്ള സേവന ശൈലിയും പ്രാദേശിക ഭരണ-നിയമ സംവിധാനങ്ങളെക്കുറിച്ചുള്ള ആഴത്തിലുള്ള അറിവും സംയോജിപ്പിച്ച് പ്രവർത്തിക്കുന്നു.",
    },
    principleTag: {
      en: "GLOBAL STANDARDS, LOCAL INSIGHT",
      ml: "ആഗോള നിലവാരം, പ്രാദേശിക വൈദഗ്ധ്യം",
    },
  },
  {
    id: "value-06",
    number: "06",
    iconName: "handshake",
    title: {
      en: "Enduring Client Advocacy",
      ml: "ദീർഘകാല സേവന പങ്കാളിത്തം",
    },
    description: {
      en: "Our engagement extends beyond initial arrival or incorporation—supporting ongoing compliance, lease renewals, and long-term asset protection.",
      ml: "പ്രാരംഭ രജിസ്ട്രേഷനോ താമസമാറ്റത്തിനോ അപ്പുറം, തുടർന്നുണ്ടാകുന്ന നിയമ-കംപ്ലയൻസ് ആവശ്യങ്ങളിലും ദീർഘകാല പങ്കാളിയായി LRS ഒപ്പമുണ്ടാകുന്നു.",
    },
    principleTag: {
      en: "LONG-TERM ADVISORY PARTNERSHIP",
      ml: "തുടർച്ചയായ നിയമ-റീലൊക്കേഷൻ പിന്തുണ",
    },
  },
];

export const PARTNER_SLOTS_DATA: PartnerSlotItem[] = [
  {
    id: "partner-slot-01",
    code: "PARTNER SLOT 01",
    category: {
      en: "CORPORATE & LEGAL NETWORK",
      ml: "കോർപ്പറേറ്റ് & ലീഗൽ ശൃംഖല",
    },
    name: {
      en: "[Partner Logo Slot — International Law Chambers]",
      ml: "[പാർട്ണർ ലോഗോ 01 — അന്താരാഷ്ട്ര ലീഗൽ ചേംബർ]",
    },
    subtitle: {
      en: "Editable Partner Slot • Replace with verified institutional logo",
      ml: "മാതൃകാ സ്ലോട്ട് • അംഗീകൃത സ്ഥാപനത്തിന്റെ ലോഗോ ചേർക്കുക",
    },
    isPlaceholder: true,
  },
  {
    id: "partner-slot-02",
    code: "PARTNER SLOT 02",
    category: {
      en: "GLOBAL MOBILITY ALLIANCE",
      ml: "ഗ്ലോബൽ മൊബിലിറ്റി അലയൻസ്",
    },
    name: {
      en: "[Partner Logo Slot — Global Relocation Partner]",
      ml: "[പാർട്ണർ ലോഗോ 02 — ഗ്ലോബൽ റീലൊക്കേഷൻ പാർട്ണർ]",
    },
    subtitle: {
      en: "Editable Partner Slot • Replace with verified institutional logo",
      ml: "മാതൃകാ സ്ലോട്ട് • അംഗീകൃത സ്ഥാപനത്തിന്റെ ലോഗോ ചേർക്കുക",
    },
    isPlaceholder: true,
  },
  {
    id: "partner-slot-03",
    code: "PARTNER SLOT 03",
    category: {
      en: "REAL ESTATE & PROPERTY ADVISORY",
      ml: "റിയൽ എസ്റ്റേറ്റ് & പ്രോപ്പർട്ടി",
    },
    name: {
      en: "[Partner Logo Slot — Chartered Property Consultants]",
      ml: "[പാർട്ണർ ലോഗോ 03 — പ്രോപ്പർട്ടി കൺസൾട്ടൻസി]",
    },
    subtitle: {
      en: "Editable Partner Slot • Replace with verified institutional logo",
      ml: "മാതൃകാ സ്ലോട്ട് • അംഗീകൃത സ്ഥാപനത്തിന്റെ ലോഗോ ചേർക്കുക",
    },
    isPlaceholder: true,
  },
  {
    id: "partner-slot-04",
    code: "PARTNER SLOT 04",
    category: {
      en: "CONSULAR & DOCUMENT SERVICES",
      ml: "കോൺസുലാർ & ഡോക്യുമെന്റേഷൻ",
    },
    name: {
      en: "[Partner Logo Slot — Consular & Attestation Specialist]",
      ml: "[പാർട്ണർ ലോഗോ 04 — ഡോക്യുമെന്റ് അറ്റസ്റ്റേഷൻ പങ്കാളി]",
    },
    subtitle: {
      en: "Editable Partner Slot • Replace with verified institutional logo",
      ml: "മാതൃകാ സ്ലോട്ട് • അംഗീകൃത സ്ഥാപനത്തിന്റെ ലോഗോ ചേർക്കുക",
    },
    isPlaceholder: true,
  },
  {
    id: "partner-slot-05",
    code: "PARTNER SLOT 05",
    category: {
      en: "BANKING & NRI WEALTH CUSTODY",
      ml: "ബാങ്കിംഗ് & എൻ.ആർ.ഐ സേവനങ്ങൾ",
    },
    name: {
      en: "[Partner Logo Slot — Financial & Escrow Institution]",
      ml: "[പാർട്ണർ ലോഗോ 05 — ഫിനാൻഷ്യൽ & എസ്ക്രോ സ്ഥാപനം]",
    },
    subtitle: {
      en: "Editable Partner Slot • Replace with verified institutional logo",
      ml: "മാതൃകാ സ്ലോട്ട് • അംഗീകൃത സ്ഥാപനത്തിന്റെ ലോഗോ ചേർക്കുക",
    },
    isPlaceholder: true,
  },
];
