// src/data/services.ts
import { Locale } from "./siteContent";

export type LocalizedString = Record<Locale, string>;

export interface ServiceHighlight {
  label: LocalizedString;
  value: LocalizedString;
}

export interface ServiceProcessStep {
  stepNumber: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface ServiceEligibleProfile {
  id: string;
  label: LocalizedString;
  iconKey:
    | "flask"
    | "search"
    | "trophy"
    | "lightbulb"
    | "palette"
    | "cpu"
    | "heartHandshake";
}

export interface ServiceFAQItem {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface ServiceData {
  id: string;
  // code: string;
  slug: string;
  officialName: string;
  abbreviation?: string;
  statutoryBasis?: LocalizedString;
  category: LocalizedString;
  title: LocalizedString;
  shortDescription: LocalizedString;
  introduction: LocalizedString;
  image: string;
  secondaryImage?: string;
  imageAlt: LocalizedString;
  featured: boolean;
  overviewSectionLabel?: LocalizedString;
  overviewHeadline?: LocalizedString;
  overview?: LocalizedString;
  highlights: ServiceHighlight[];
  eligibilitySectionLabel?: LocalizedString;
  eligibilityHeadline?: LocalizedString;
  eligibilityHeading?: LocalizedString;
  eligibility?: LocalizedString[];
  conditionsHeading?: LocalizedString;
  conditions?: LocalizedString[];
  taxHeading?: LocalizedString;
  taxBenefits?: LocalizedString[];
  processSectionLabel?: LocalizedString;
  processHeadline?: LocalizedString;
  processIntro?: LocalizedString;
  process?: ServiceProcessStep[];
  profilesSectionLabel?: LocalizedString;
  profilesHeadline?: LocalizedString;
  eligibleProfiles?: ServiceEligibleProfile[];
  faq?: ServiceFAQItem[];
  relatedServices: string[];
  seo: {
    title: string;
    description: string;
  };
}

export const BROCHURE_CONTACT_INFO = {
  officeName: {
    en: "LRS Malta Advisory Chambers",
    ml: "LRS മാൾട്ട അഡ്വൈസറി ചേംബർ",
  },
  address: "32A Scots House, South Street, Valletta, VLT1101, Malta",
  phone: "+356 99980989",
  email: "info@lrs-global.com",
  website: "www.lrs-global.com",
};

/**
 * Centralized Malta Residency, Citizenship, Real Estate & Education Services Data
 * Bilingual support: English (en) and Malayalam (ml)
 */
export const MALTA_SERVICES_DATA: ServiceData[] = [
  // 1. Maltese Citizenship by Merit
  {
    id: "citizenship-by-merit",
    // code: "01",
    slug: "citizenship-by-merit",
    officialName: "The Maltese Citizenship by Merit",
    abbreviation: "MCM",
    category: {
      en: "PROGRAMME 01 • CITIZENSHIP BY MERIT",
      ml: "പ്രോഗ്രാം 01 • മെറിറ്റ് അധിഷ്ഠിത പൗരത്വം",
    },
    title: {
      en: "The Maltese Citizenship by Merit",
      ml: "മെറിറ്റ് അടിസ്ഥാനത്തിലുള്ള മാൾട്ടീസ് പൗരത്വം",
    },
    shortDescription: {
      en: "Malta’s new Citizenship by Merit framework provides a pathway to citizenship for individuals and families who can demonstrate exceptional contributions or value to Malta.",
      ml: "മാൾട്ടയ്ക്ക് അസാധാരണമായ സംഭാവനകളോ മൂല്യമോ നൽകാൻ കഴിയുമെന്ന് തെളിയിക്കുന്ന വ്യക്തികൾക്കും കുടുംബങ്ങൾക്കും പൗരത്വത്തിലേക്കുള്ള വഴി തുറക്കുന്നതാണ് മാൾട്ടയുടെ പുതിയ 'സിറ്റിസൺഷിപ്പ് ബൈ മെറിറ്റ്' (Citizenship by Merit) ചട്ടക്കൂട്.",
    },
    introduction: {
      en: "The Malta Citizenship by Merit framework was introduced in July 2025 through Legal Notice 159 of 2025, which amended the Maltese Citizenship Act (Cap. 188) to establish the Granting of Citizenship by Naturalisation on the Basis of Merit Regulations.",
      ml: "മാൾട്ടീസ് പൗരത്വ നിയമം (Cap. 188) ഭേദഗതി ചെയ്തുകൊണ്ട് 2025 ജൂലൈയിൽ ലീഗൽ നോട്ടീസ് 159 ഓഫ് 2025 (Legal Notice 159 of 2025) വഴിയാണ് മെറിറ്റ് അടിസ്ഥാനത്തിൽ പൗരത്വം നൽകുന്നതിനുള്ള പുതിയ ചട്ടക്കൂട് (Granting of Citizenship by Naturalisation on the Basis of Merit Regulations) നിലവിൽ വന്നത്.",
    },
    image: "/images/service-img/service-1.webp",
    secondaryImage: "/images/service-1-sec.webp",
    imageAlt: {
      en: "Legal portfolio and consular documentation representing The Maltese Citizenship by Merit",
      ml: "മെറിറ്റ് അടിസ്ഥാനത്തിലുള്ള മാൾട്ടീസ് പൗരത്വത്തെ സൂചിപ്പിക്കുന്ന ലീഗൽ പോർട്ട്ഫോളിയോ",
    },
    featured: true,
    highlights: [
      {
        label: {
          en: "Statutory Framework",
          ml: "നിയമപരമായ അടിസ്ഥാനം",
        },
        value: {
          en: "Legal Notice 159 of 2025 • Maltese Citizenship Act (Cap. 188)",
          ml: "ലീഗൽ നോട്ടീസ് 159 ഓഫ് 2025 • മാൾട്ടീസ് പൗരത്വ നിയമം (Cap. 188)",
        },
      },
      {
        label: {
          en: "Basis of Grant",
          ml: "പൗരത്വ അനുവദന അടിസ്ഥാനം",
        },
        value: {
          en: "Genuine merit in the public, humanitarian, or national interest",
          ml: "പൊതു, മാനുഷിക, അല്ലെങ്കിൽ ദേശീയ താൽപ്പര്യങ്ങളിലുള്ള യഥാർത്ഥ മികവ്",
        },
      },
      {
        label: {
          en: "Strategic Alignment",
          ml: "തന്ത്രപരമായ കാഴ്ചപ്പാട്",
        },
        value: {
          en: "Aligned with Malta’s Vision 2050 (sustainability, innovation, culture & collaboration)",
          ml: "മാൾട്ടയുടെ വിഷൻ 2050-ന് അനുസൃതം (സുസ്ഥിരത, നൂതനത്വം, സംസ്കാരം, സഹകരണം)",
        },
      },
      {
        label: {
          en: "Eligible Scope",
          ml: "അർഹരായവർ",
        },
        value: {
          en: "Individuals and families demonstrating extraordinary contributions",
          ml: "അസാധാരണ സംഭാവനകൾ തെളിയിക്കുന്ന വ്യക്തികളും കുടുംബങ്ങളും",
        },
      },
    ],
    eligibilitySectionLabel: {
      en: " MERIT PRINCIPLES & QUALIFYING FIELDS",
      ml: "മെറിറ്റ് മാനദണ്ഡങ്ങളും യോഗ്യതാ മേഖലകളും",
    },
    eligibilityHeadline: {
      en: "Merit Regulations & Extraordinary Contribution Fields",
      ml: "മെറിറ്റ് നിബന്ധനകളും അസാധാരണ സംഭാവന മേഖലകളും",
    },
    eligibilityHeading: {
      en: "Granting of Citizenship on the Basis of Merit",
      ml: "മെറിറ്റ് അടിസ്ഥാനത്തിലുള്ള പൗരത്വ തത്വങ്ങൾ",
    },
    eligibility: [
      {
        en: "Citizenship is granted only for genuine merit in the public, humanitarian, or national interest",
        ml: "പൊതുതാൽപ്പര്യം, മാനുഷിക സേവനം, അല്ലെങ്കിൽ ദേശീയ താൽപ്പര്യം എന്നിവയിലുള്ള യഥാർത്ഥ മികവിന് മാത്രമാണ് പൗരത്വം നൽകുന്നത്",
      },
      {
        en: "Contributions must align with Malta’s Vision 2050, emphasising sustainability, innovation, culture, and collaboration",
        ml: "സുസ്ഥിരത, നൂതനത്വം, സംസ്കാരം, സഹകരണം എന്നിവയ്ക്ക് ഊന്നൽ നൽകുന്ന മാൾട്ടയുടെ 'വിഷൻ 2050'-മായി (Vision 2050) സംഭാവനകൾ പൊരുത്തപ്പെടണം",
      },
    ],
    conditionsHeading: {
      en: "Applicants must demonstrate extraordinary contributions in one or more of the following fields:",
      ml: "താഴെ പറയുന്ന ഒന്നോ അതിലധികമോ മേഖലകളിൽ അപേക്ഷകർ അസാധാരണമായ സംഭാവനകൾ തെളിയിക്കേണ്ടതുണ്ട്:",
    },
    conditions: [
      {
        en: "Science, Technology, and Research",
        ml: "ശാസ്ത്രം, സാങ്കേതികവിദ്യ, ഗവേഷണം (Science, Technology, and Research)",
      },
      {
        en: "Innovation and Entrepreneurship",
        ml: "നൂതനത്വവും സംരംഭകത്വവും (Innovation and Entrepreneurship)",
      },
      {
        en: "Arts, Culture, and Education",
        ml: "കല, സംസ്കാരം, വിദ്യാഭ്യാസം (Arts, Culture, and Education)",
      },
      {
        en: "Sports and Athletics",
        ml: "കായിക മേഖലയും അത്‌ലറ്റിക്സും (Sports and Athletics)",
      },
      {
        en: "Philanthropy or Social Impact",
        ml: "ജീവകാരുണ്യ പ്രവർത്തനം അല്ലെങ്കിൽ സാമൂഹിക സ്വാധീനം (Philanthropy or Social Impact)",
      },
      {
        en: "Public Health or Humanitarian Work",
        ml: "പൊതുജനാരോഗ്യം അല്ലെങ്കിൽ മാനുഷിക പ്രവർത്തനങ്ങൾ (Public Health or Humanitarian Work)",
      },
    ],
    profilesSectionLabel: {
      en: "QUALIFYING CONTRIBUTION FIELDS",
      ml: "പരിഗണിക്കപ്പെടുന്ന പ്രധാന മേഖലകൾ",
    },
    profilesHeadline: {
      en: "Applicants Must Demonstrate Extraordinary Contributions In:",
      ml: "അസാധാരണ സംഭാവനകൾ തെളിയിക്കേണ്ട മേഖലകൾ:",
    },
    eligibleProfiles: [
      {
        id: "science-tech-research",
        label: {
          en: "Science, Technology, and Research",
          ml: "ശാസ്ത്രം, സാങ്കേതികവിദ്യ, ഗവേഷണം",
        },
        iconKey: "flask",
      },
      {
        id: "innovation-entrepreneurship",
        label: {
          en: "Innovation and Entrepreneurship",
          ml: "നൂതനത്വവും സംരംഭകത്വവും",
        },
        iconKey: "lightbulb",
      },
      {
        id: "arts-culture-education",
        label: {
          en: "Arts, Culture, and Education",
          ml: "കല, സംസ്കാരം, വിദ്യാഭ്യാസം",
        },
        iconKey: "palette",
      },
      {
        id: "sports-athletics",
        label: {
          en: "Sports and Athletics",
          ml: "കായിക മേഖലയും അത്‌ലറ്റിക്സും",
        },
        iconKey: "trophy",
      },
      {
        id: "philanthropy-social-impact",
        label: {
          en: "Philanthropy or Social Impact",
          ml: "ജീവകാരുണ്യ പ്രവർത്തനം / സാമൂഹിക സ്വാധീനം",
        },
        iconKey: "heartHandshake",
      },
      {
        id: "public-health-humanitarian",
        label: {
          en: "Public Health or Humanitarian Work",
          ml: "പൊതുജനാരോഗ്യം / മാനുഷിക സേവനം",
        },
        iconKey: "search",
      },
    ],
    processSectionLabel: {
      en: "JURISDICTION ADVANTAGES",
      ml: " മാൾട്ടയുടെ സവിശേഷതകൾ",
    },
    processHeadline: {
      en: "Why Choose Malta?",
      ml: "എന്തുകൊണ്ട് മാൾട്ട തിരഞ്ഞെടുക്കണം?",
    },
    process: [
      {
        stepNumber: "01",
        title: {
          en: "Stability and Safety",
          ml: "സ്ഥിരതയും സുരക്ഷിതത്വവും (Stability and Safety)",
        },
        description: {
          en: "Malta is a democratic country with a strong history of government stability. Malta ranks as one of the safest places in Europe, with a negligible crime rate.",
          ml: "ശക്തമായ ഭരണസ്ഥിരതയുടെ ചരിത്രമുള്ള ഒരു ജനാധിപത്യ രാജ്യമാണ് മാൾട്ട. വളരെ കുറഞ്ഞ കുറ്റകൃത്യ നിരക്കുള്ള മാൾട്ട യൂറോപ്പിലെ ഏറ്റവും സുരക്ഷിതമായ സ്ഥലങ്ങളിൽ ഒന്നാണ്.",
        },
      },
      {
        stepNumber: "02",
        title: {
          en: "Education and Communication",
          ml: "വിദ്യാഭ്യാസവും ആശയവിനിമയവും (Education and Communication)",
        },
        description: {
          en: "Malta’s education system is based on the British model and is highly regarded. English is one of the official languages and widely used in business and daily life.",
          ml: "ബ്രിട്ടീഷ് മാതൃകയെ അടിസ്ഥാനമാക്കിയുള്ള മാൾട്ടയുടെ വിദ്യാഭ്യാസ രീതി ഉയർന്ന അംഗീകാരമുള്ളതാണ്. ഇംഗ്ലീഷ് ഔദ്യോഗിക ഭാഷകളിൽ ഒന്നാണ്, കൂടാതെ ബിസിനസ്സിലും ദൈനംദിന ജീവിതത്തിലും വ്യാപകമായി ഉപയോഗിക്കപ്പെടുന്നു.",
        },
      },
      {
        stepNumber: "03",
        title: {
          en: "Lifestyle",
          ml: "ജീവിതശൈലി (Lifestyle)",
        },
        description: {
          en: "Malta enjoys an unhurried pace of life, 300 days of sunshine a year, cultural activities, and a rich culinary tradition.",
          ml: "ശാന്തമായ ജീവിതശൈലി, വർഷത്തിൽ 300 ദിവസവും വെയിൽ ലഭിക്കുന്ന കാലാവസ്ഥ, സാംസ്കാരിക പ്രവർത്തനങ്ങൾ, സമ്പന്നമായ ഭക്ഷണ പാരമ്പര്യം എന്നിവ മാൾട്ടയുടെ സവിശേഷതകളാണ്.",
        },
      },
      {
        stepNumber: "04",
        title: {
          en: "Healthcare and Connectivity",
          ml: "ആരോഗ്യ സംരക്ഷണവും കണക്റ്റിവിറ്റിയും (Healthcare and Connectivity)",
        },
        description: {
          en: "Malta offers excellent public and private healthcare. Its central Mediterranean location ensures strong air, sea, and digital connectivity.",
          ml: "മികച്ച പൊതു-സ്വകാര്യ ആരോഗ്യ സംരക്ഷണ സൗകര്യങ്ങൾ മാൾട്ട വാഗ്ദാനം ചെയ്യുന്നു. മധ്യധരണ്യാഴിയുടെ മധ്യത്തിലുള്ള സ്ഥാനം മികച്ച വ്യോമ, സമുദ്ര, ഡിജിറ്റൽ കണക്റ്റിവിറ്റി ഉറപ്പാക്കുന്നു.",
        },
      },
      {
        stepNumber: "05",
        title: {
          en: "Business and Economy",
          ml: "ബിസിനസ്സും സമ്പദ്‌വ്യവസ്ഥയും (Business and Economy)",
        },
        description: {
          en: "Malta has a strong and diverse economy with key sectors including gaming, finance, aviation, and pharmaceuticals.",
          ml: "ഗെയിമിംഗ്, ഫിനാൻസ്, ഏവിയേഷൻ, ഫാർമസ്യൂട്ടിക്കൽസ് തുടങ്ങിയ പ്രധാന മേഖലകൾ ഉൾപ്പെടുന്ന ശക്തവും വൈവിധ്യപൂർണ്ണവുമായ സമ്പദ്‌വ്യവസ്ഥയാണ് മാൾട്ടയ്ക്കുള്ളത്.",
        },
      },
    ],
    relatedServices: [
      "malta-permanent-residence",
      "global-residence-programme",
      "the-residence-programme",
    ],
    seo: {
      title: "The Maltese Citizenship by Merit | LRS Legal & Relocation Services",
      description:
        "Malta’s Citizenship by Merit framework (Legal Notice 159 of 2025) provides a pathway to citizenship for individuals and families demonstrating exceptional contributions to Malta.",
    },
  },

  // 2. Malta Permanent Residence Programme
  {
    id: "malta-permanent-residence",
    // code: "02",
    slug: "malta-permanent-residence",
    officialName: "Malta Permanent Residence Programme",
    abbreviation: "MPRP",
    category: {
      en: "PROGRAMME 02 • PERMANENT RESIDENCE",
      ml: "പ്രോഗ്രാം 02 • സ്ഥിര താമസാനുമതി (MPRP)",
    },
    title: {
      en: "Malta Permanent Residence Programme",
      ml: "മാൾട്ട പെർമനന്റ് റസിഡൻസ് പ്രോഗ്രാം",
    },
    shortDescription: {
      en: "The Malta Permanent Residence Programme provides access to the European Union Schengen Area, as well as a superior standard of living in the stunning Mediterranean.",
      ml: "മനോഹരമായ മധ്യധരണ്യാഴി പ്രദേശത്തെ ഉയർന്ന ജീവിതനിലവാരത്തോടൊപ്പം യൂറോപ്യൻ യൂണിയൻ ഷെംഗൻ (EU Schengen) മേഖലയിലേക്കുള്ള പ്രവേശനവും മാൾട്ട പെർമനന്റ് റസിഡൻസ് പ്രോഗ്രാം നൽകുന്നു.",
    },
    introduction: {
      en: "When considering countries for second residency, families have a number of core priorities. They look for a safe and stable jurisdiction, a good quality of life, educational opportunities for their children, access to healthcare and business prospects. Malta is an attractive proposition for those wishing to settle on the Islands.",
      ml: "രണ്ടാമതൊരു താമസാനുമതിക്കായി രാജ്യങ്ങൾ പരിഗണിക്കുമ്പോൾ കുടുംബങ്ങൾക്ക് നിരവധി പ്രധാന മുൻഗണനകളുണ്ട്. സുരക്ഷിതവും സ്ഥിരതയുള്ളതുമായ നിയമവ്യവസ്ഥ, മികച്ച ജീവിതനിലവാരം, കുട്ടികൾക്കുള്ള വിദ്യാഭ്യാസ അവസരങ്ങൾ, ആരോഗ്യ സംരക്ഷണം, ബിസിനസ് സാധ്യതകൾ എന്നിവ അവർ തേടുന്നു. ഈ ദ്വീപുകളിൽ സ്ഥിരതാമസമാക്കാൻ ആഗ്രഹിക്കുന്നവർക്ക് മാൾട്ട മികച്ചൊരു തിരഞ്ഞെടുപ്പാണ്.",
    },
    image: "/images/service-img/service-2.webp",
    secondaryImage: "/images/service-2-sec.webp",
    imageAlt: {
      en: "Mediterranean residential architecture representing the Malta Permanent Residence Programme",
      ml: "മാൾട്ട പെർമനന്റ് റസിഡൻസ് പ്രോഗ്രാം പ്രതിനിധീകരിക്കുന്ന ഭവന ദൃശ്യം",
    },
    featured: true,
    highlights: [
      {
        label: {
          en: "27 • Schengen Access",
          ml: "27 • ഷെംഗൻ യാത്രാ സൗകര്യം",
        },
        value: {
          en: "Visa-free to 27 EU Schengen countries",
          ml: "27 EU ഷെംഗൻ രാജ്യങ്ങളിലേക്ക് വിസയില്ലാതെ യാത്ര",
        },
      },
      {
        label: {
          en: "4 • Processing Time",
          ml: "4 • നടപടിക്രമ കാലയളവ്",
        },
        value: {
          en: "Residency obtaining period of 4-6 months",
          ml: "4-6 മാസത്തിനുള്ളിൽ താമസാനുമതി ലഭ്യമാകുന്നു",
        },
      },
      {
        label: {
          en: "0 • Minimum Stay",
          ml: "0 • കുറഞ്ഞ താമസ നിബന്ധന",
        },
        value: {
          en: "No requirements of Minimum stay",
          ml: "കുറഞ്ഞ താമസ പരിധി നിബന്ധനകളില്ല",
        },
      },
      {
        label: {
          en: "170k • Minimum Requirement",
          ml: "170k • കുറഞ്ഞ നിക്ഷേപ ആവശ്യകത",
        },
        value: {
          en: "€170,000 minimum requirement",
          ml: "€170,000 കുറഞ്ഞ നിക്ഷേപ ആവശ്യകത",
        },
      },
    ],
    eligibilitySectionLabel: {
      en: "03 / ELIGIBILITY & PROGRAMME REQUIREMENTS",
      ml: "03 / യോഗ്യതാ മാനദണ്ഡങ്ങളും ആവശ്യകതകളും",
    },
    eligibilityHeadline: {
      en: "Eligibility & Requirements",
      ml: "യോഗ്യതയും പ്രോഗ്രാം ആവശ്യകതകളും",
    },
    eligibilityHeading: {
      en: "Eligibility",
      ml: "യോഗ്യതാ മാനദണ്ഡങ്ങൾ (Eligibility)",
    },
    eligibility: [
      {
        en: "be third country nationals, non-EEA and non-Swiss;",
        ml: "യൂറോപ്യൻ ഇക്കണോമിക് ഏരിയ (EEA), സ്വിറ്റ്സർലൻഡ് എന്നിവയ്ക്ക് പുറത്തുള്ള മൂന്നാം രാജ്യ പൗരന്മാരായിരിക്കണം;",
      },
      {
        en: "not hail from sanctioned countries, announced from time to time by the Agency;",
        ml: "ഏജൻസി കാലാകാലങ്ങളിൽ പ്രഖ്യാപിക്കുന്ന ഉപരോധം ഏർപ്പെടുത്തിയ രാജ്യങ്ങളിൽ നിന്നുള്ളവരാകരുത്;",
      },
      {
        en: "not be beneficiaries under other pertinent regulations and schemes;",
        ml: "മറ്റ് പ്രസക്തമായ ചട്ടങ്ങളുടെയോ പദ്ധതികളുടെയോ ഗുണഭോക്താക്കളായിരിക്കരുത്;",
      },
      {
        en: "be in receipt of stable and regular financial resources, sufficient to maintain themselves and their dependants, without recourse to Malta’s social assistance system;",
        ml: "മാൾട്ടയുടെ സാമൂഹിക സഹായ സംവിധാനത്തെ ആശ്രയിക്കാതെ സ്വന്തം ചെലവുകളും ആശ്രിതരുടെ ചെലവുകളും നിർവഹിക്കാൻ പര്യാപ്തമായ സ്ഥിരമായ സാമ്പത്തിക സ്രോതസ്സുകൾ ഉണ്ടായിരിക്കണം;",
      },
      {
        en: "show they have capital assets of not less than €500,000, out of which €150,000 must be financial assets, or not less than €650,000 out of which €75,000 must be financial assets;",
        ml: "കുറഞ്ഞത് €500,000 മൂലധന ആസ്തി (അതിൽ €150,000 ഫിനാൻഷ്യൽ ആസ്തി ആയിരിക്കണം), അല്ലെങ്കിൽ കുറഞ്ഞത് €650,000 മൂലധന ആസ്തി (അതിൽ €75,000 ഫിനാൻഷ്യൽ ആസ്തി ആയിരിക്കണം) ഉണ്ടെന്ന് തെളിയിക്കണം;",
      },
      {
        en: "be fit-and-proper individuals with a clean criminal record;",
        ml: "ക്രിമിനൽ പശ്ചാത്തലമില്ലാത്തവരും 'Fit-and-proper' യോഗ്യതയുള്ളവരുമായിരിക്കണം;",
      },
      {
        en: "not pose any potential threat to national security, public policy, public health or public interest.",
        ml: "ദേശീയ സുരക്ഷ, പൊതുനയം, പൊതുജനാരോഗ്യം, അല്ലെങ്കിൽ പൊതുതാൽപ്പര്യം എന്നിവയ്ക്ക് യാതൊരുവിധ ഭീഷണിയും ഉയർത്തുന്നവരാകരുത്.",
      },
    ],
    conditionsHeading: {
      en: "Requirements",
      ml: "ആവശ്യകതകൾ (Requirements)",
    },
    conditions: [
      {
        en: "submit an application via a Licensed Agent;",
        ml: "അംഗീകൃത ലൈസൻസ്ഡ് ഏജന്റ് (Licensed Agent) മുഖേന അപേക്ഷ സമർപ്പിക്കണം;",
      },
      {
        en: "pay a non-refundable administrative fee of €60,000;",
        ml: "തിരികെ ലഭിക്കാത്ത €60,000 അഡ്മിനിസ്ട്രേറ്റീവ് ഫീസ് അടയ്ക്കണം;",
      },
      {
        en: "rent a property for a minimum of €14,000 annually; or purchase a property for a minimum value of €375,000;",
        ml: "പ്രതിവർഷം കുറഞ്ഞത് €14,000 വാടകയ്ക്ക് ഒരു വസ്തു എടുക്കുക; അല്ലെങ്കിൽ കുറഞ്ഞത് €375,000 മൂല്യമുള്ള ഒരു വസ്തു വാങ്ങുക;",
      },
      {
        en: "pay a Government contribution of €37,000;",
        ml: "€37,000 സർക്കാർ വിഹിതമായി (Government contribution) അടയ്ക്കണം;",
      },
      {
        en: "pay €7,500 for each adult dependant (excluding spouse);",
        ml: "പ്രായപൂർത്തിയായ ഓരോ ആശ്രിതർക്കും (ജീവിതപങ്കാളി ഒഴികെ) €7,500 വീതം അടയ്ക്കണം;",
      },
      {
        en: "hold the qualifying property for a minimum period of five years, following which a residential property is required;",
        ml: "യോഗ്യമായ വസ്തു കുറഞ്ഞത് അഞ്ച് (5) വർഷത്തേക്ക് നിലനിർത്തണം, അതിനുശേഷം ഒരു റെസിഡൻഷ്യൽ പ്രോപ്പർട്ടി ആവശ്യമാണ്;",
      },
      {
        en: "make a donation of €2,000 to a local NGO;",
        ml: "പ്രാദേശിക എൻ.ജി.ഒയ്ക്ക് (NGO) €2,000 സംഭാവന നൽകണം;",
      },
      {
        en: "take out a health insurance policy to cover risks in Malta and other European countries;",
        ml: "മാൾട്ടയിലെയും മറ്റ് യൂറോപ്യൻ രാജ്യങ്ങളിലെയും ആരോഗ്യ ചെലവുകൾ കവർ ചെയ്യുന്ന ഹെൽത്ത് ഇൻഷുറൻസ് പോളിസി എടുക്കണം;",
      },
      {
        en: "pay a residence card fee of €500 per person covering five years.",
        ml: "അഞ്ച് വർഷത്തേക്ക് ഒരാൾക്ക് €500 വീതം റസിഡൻസ് കാർഡ് ഫീസ് അടയ്ക്കണം.",
      },
    ],
    processSectionLabel: {
      en: " JURISDICTION ADVANTAGES",
      ml: " മാൾട്ടയുടെ സവിശേഷതകൾ",
    },
    processHeadline: {
      en: "Why choose Malta?",
      ml: "എന്തുകൊണ്ട് മാൾട്ട തിരഞ്ഞെടുക്കണം?",
    },
    processIntro: {
      en: "When considering countries for second residency, families have a number of core priorities. They look for a safe and stable jurisdiction, a good quality of life, educational opportunities for their children, access to healthcare and business prospects. Malta is an attractive proposition for those wishing to settle on the Islands.",
      ml: "രണ്ടാമതൊരു താമസാനുമതിക്കായി രാജ്യങ്ങൾ പരിഗണിക്കുമ്പോൾ കുടുംബങ്ങൾക്ക് നിരവധി പ്രധാന മുൻഗണനകളുണ്ട്. സുരക്ഷിതവും സ്ഥിരതയുള്ളതുമായ നിയമവ്യവസ്ഥ, മികച്ച ജീവിതനിലവാരം, കുട്ടികൾക്കുള്ള വിദ്യാഭ്യാസ അവസരങ്ങൾ, ആരോഗ്യ സംരക്ഷണം, ബിസിനസ് സാധ്യതകൾ എന്നിവ അവർ തേടുന്നു. ഈ ദ്വീപുകളിൽ സ്ഥിരതാമസമാക്കാൻ ആഗ്രഹിക്കുന്നവർക്ക് മാൾട്ട മികച്ചൊരു തിരഞ്ഞെടുപ്പാണ്.",
    },
    process: [
      {
        stepNumber: "01",
        title: {
          en: "Stability and Safety",
          ml: "സ്ഥിരതയും സുരക്ഷിതത്വവും (Stability and Safety)",
        },
        description: {
          en: "Malta is a democratic country with a strong history of government stability. Malta ranks as one of the safest places in Europe, with a negligible crime rate.",
          ml: "ശക്തമായ ഭരണസ്ഥിരതയുടെ ചരിത്രമുള്ള ഒരു ജനാധിപത്യ രാജ്യമാണ് മാൾട്ട. വളരെ കുറഞ്ഞ കുറ്റകൃത്യ നിരക്കുള്ള മാൾട്ട യൂറോപ്പിലെ ഏറ്റവും സുരക്ഷിതമായ സ്ഥലങ്ങളിൽ ഒന്നാണ്.",
        },
      },
      {
        stepNumber: "02",
        title: {
          en: "Education and Communication",
          ml: "വിദ്യാഭ്യാസവും ആശയവിനിമയവും (Education and Communication)",
        },
        description: {
          en: "Malta’s education system is based on the British model and is highly regarded. English is one of the official languages and widely used in business and daily life.",
          ml: "ബ്രിട്ടീഷ് മാതൃകയെ അടിസ്ഥാനമാക്കിയുള്ള മാൾട്ടയുടെ വിദ്യാഭ്യാസ രീതി ഉയർന്ന അംഗീകാരമുള്ളതാണ്. ഇംഗ്ലീഷ് ഔദ്യോഗിക ഭാഷകളിൽ ഒന്നാണ്, കൂടാതെ ബിസിനസ്സിലും ദൈനംദിന ജീവിതത്തിലും വ്യാപകമായി ഉപയോഗിക്കപ്പെടുന്നു.",
        },
      },
      {
        stepNumber: "03",
        title: {
          en: "Lifestyle",
          ml: "ജീവിതശൈലി (Lifestyle)",
        },
        description: {
          en: "Malta enjoys an unhurried pace of life, 300 days of sunshine a year, cultural activities, and a rich culinary tradition.",
          ml: "ശാന്തമായ ജീവിതശൈലി, വർഷത്തിൽ 300 ദിവസവും വെയിൽ ലഭിക്കുന്ന കാലാവസ്ഥ, സാംസ്കാരിക പ്രവർത്തനങ്ങൾ, സമ്പന്നമായ ഭക്ഷണ പാരമ്പര്യം എന്നിവ മാൾട്ടയുടെ സവിശേഷതകളാണ്.",
        },
      },
      {
        stepNumber: "04",
        title: {
          en: "Healthcare and Connectivity",
          ml: "ആരോഗ്യ സംരക്ഷണവും കണക്റ്റിവിറ്റിയും (Healthcare and Connectivity)",
        },
        description: {
          en: "Malta offers excellent public and private healthcare. Its central Mediterranean location ensures strong air, sea, and digital connectivity.",
          ml: "മികച്ച പൊതു-സ്വകാര്യ ആരോഗ്യ സംരക്ഷണ സൗകര്യങ്ങൾ മാൾട്ട വാഗ്ദാനം ചെയ്യുന്നു. മധ്യധരണ്യാഴിയുടെ മധ്യത്തിലുള്ള സ്ഥാനം മികച്ച വ്യോമ, സമുദ്ര, ഡിജിറ്റൽ കണക്റ്റിവിറ്റി ഉറപ്പാക്കുന്നു.",
        },
      },
      {
        stepNumber: "05",
        title: {
          en: "Business and Economy",
          ml: "ബിസിനസ്സും സമ്പദ്‌വ്യവസ്ഥയും (Business and Economy)",
        },
        description: {
          en: "Malta has a strong and diverse economy with key sectors including gaming, finance, aviation, and pharmaceuticals.",
          ml: "ഗെയിമിംഗ്, ഫിനാൻസ്, ഏവിയേഷൻ, ഫാർമസ്യൂട്ടിക്കൽസ് തുടങ്ങിയ പ്രധാന മേഖലകൾ ഉൾപ്പെടുന്ന ശക്തവും വൈവിധ്യപൂർണ്ണവുമായ സമ്പദ്‌വ്യവസ്ഥയാണ് മാൾട്ടയ്ക്കുള്ളത്.",
        },
      },
    ],
    relatedServices: [
      "citizenship-by-merit",
      "global-residence-programme",
      "real-estate",
    ],
    seo: {
      title: "Malta Permanent Residence Programme | LRS Legal & Relocation Services",
      description:
        "The Malta Permanent Residence Programme provides access to the 27 EU Schengen countries and a superior Mediterranean lifestyle.",
    },
  },

  // 3. Malta Digital Nomad Visa
  {
    id: "malta-digital-nomad-visa",
    // code: "03",
    slug: "malta-digital-nomad-visa",
    officialName: "Malta Digital Nomad Visa",
    abbreviation: "NRP",
    category: {
      en: "PROGRAMME 03 • DIGITAL NOMAD VISA",
      ml: "പ്രോഗ്രാം 03 • ഡിജിറ്റൽ നോമാഡ് വിസ (NRP)",
    },
    title: {
      en: "Malta Digital Nomad Visa",
      ml: "മാൾട്ട ഡിജിറ്റൽ നോമാഡ് വിസ",
    },
    shortDescription: {
      en: "Migrate your whole office, join a global community and carry your borderless business or job with you whilst enjoying all that Malta has to offer.",
      ml: "മാൾട്ട നൽകുന്ന എല്ലാ സൗകര്യങ്ങളും ആസ്വദിച്ചുകൊണ്ട് നിങ്ങളുടെ ഓഫീസ് പൂർണ്ണമായി മാറ്റാനും ആഗോള കൂട്ടായ്മയുടെ ഭാഗമാകാനും അതിരുകളില്ലാത്ത നിങ്ങളുടെ ബിസിനസ്സോ ജോലിയോ തുടരാനും അവസരം.",
    },
    introduction: {
      en: "Launched in 2021, Malta’s Nomad Residence Permit (NRP) offers third country nationals, who can work remotely, the opportunity to reside in Malta.",
      ml: "2021-ൽ ആരംഭിച്ച മാൾട്ടയുടെ നോമാഡ് റസിഡൻസ് പെർമിറ്റ് (NRP), വിദൂരമായി (Remotely) ജോലി ചെയ്യാൻ കഴിയുന്ന മൂന്നാം രാജ്യ പൗരന്മാർക്ക് മാൾട്ടയിൽ താമസിക്കാനുള്ള അവസരം നൽകുന്നു.",
    },
    image: "/images/service-img/service-3.webp",
    secondaryImage: "/images/service-3-sec.webp",
    imageAlt: {
      en: "Mediterranean workspace representing the Malta Digital Nomad Visa (Nomad Residence Permit)",
      ml: "മാൾട്ട ഡിജിറ്റൽ നോമാഡ് വിസയെ പ്രതിനിധീകരിക്കുന്ന ദൃശ്യം",
    },
    featured: true,
    overview: {
      en: "Governed by the Residency Malta Agency, the Nomad Residence Permit, aims to attract digital nomads who receive their income from outside of Malta and can work irrespective of their physical location. Applicants for the Nomad Residence Permit must be third country nationals, prove that they can work remotely using telecommunications, and earn a minimum gross monthly income of €2,700.",
      ml: "റസിഡൻസി മാൾട്ട ഏജൻസി (Residency Malta Agency) നിയന്ത്രിക്കുന്ന നോമാഡ് റസിഡൻസ് പെർമിറ്റ്, മാൾട്ടയ്ക്ക് പുറത്തുനിന്ന് വരുമാനം സ്വീകരിക്കുന്നവരും ഭൗതിക സ്ഥാനം പരിഗണിക്കാതെ എവിടെയിരുന്നും ജോലി ചെയ്യാൻ കഴിയുന്നവരുമായ ഡിജിറ്റൽ നോമാഡുകളെ ആകർഷിക്കാൻ ലക്ഷ്യമിടുന്നു. അപേക്ഷകർ മൂന്നാം രാജ്യ പൗരന്മാരായിരിക്കണം, ടെലികമ്മ്യൂണിക്കേഷൻ സംവിധാനങ്ങൾ ഉപയോഗിച്ച് വിദൂരമായി ജോലി ചെയ്യാൻ കഴിയുമെന്ന് തെളിയിക്കണം, കൂടാതെ കുറഞ്ഞത് €2,700 പ്രതിമാസ മൊത്ത വരുമാനം നേടുന്നവരായിരിക്കണം.",
    },
    highlights: [
      {
        label: {
          en: "Governing Agency",
          ml: "നിയന്ത്രണ ഏജൻസി",
        },
        value: {
          en: "Residency Malta Agency (Launched in 2021)",
          ml: "റസിഡൻസി മാൾട്ട ഏജൻസി (2021-ൽ ആരംഭിച്ചു)",
        },
      },
      {
        label: {
          en: "Minimum Monthly Income",
          ml: "കുറഞ്ഞ പ്രതിമാസ വരുമാനം",
        },
        value: {
          en: "€2,700 minimum gross monthly income",
          ml: "കുറഞ്ഞത് €2,700 പ്രതിമാസ മൊത്ത വരുമാനം",
        },
      },
      {
        label: {
          en: "Administrative Fee",
          ml: "അഡ്മിനിസ്ട്രേറ്റീവ് ഫീസ്",
        },
        value: {
          en: "€300 non-refundable administrative fee",
          ml: "€300 തിരികെ ലഭിക്കാത്ത അഡ്മിനിസ്ട്രേറ്റീവ് ഫീസ്",
        },
      },
      {
        label: {
          en: "Eligible Nationals",
          ml: "അപേക്ഷക യോഗ്യത",
        },
        value: {
          en: "Third-country nationals working remotely via telecommunications",
          ml: "ടെലികമ്മ്യൂണിക്കേഷൻ വഴി വിദൂരമായി ജോലി ചെയ്യുന്ന മൂന്നാം രാജ്യ പൗരന്മാർ",
        },
      },
    ],
    eligibilitySectionLabel: {
      en: "03 / ELIGIBILITY & PERMIT REQUIREMENTS",
      ml: "03 / യോഗ്യതയും പെർമിറ്റ് നിബന്ധനകളും",
    },
    eligibilityHeadline: {
      en: "Nomad Residence Permit Eligibility & Requirements",
      ml: "നോമാഡ് റസിഡൻസ് പെർമിറ്റ് യോഗ്യതയും ആവശ്യകതകളും",
    },
    eligibilityHeading: {
      en: "Core Eligibility Criteria",
      ml: "പ്രധാന യോഗ്യതാ മാനദണ്ഡങ്ങൾ",
    },
    eligibility: [
      {
        en: "Must be third country nationals receiving income from outside of Malta;",
        ml: "മാൾട്ടയ്ക്ക് പുറത്തുനിന്ന് വരുമാനം സ്വീകരിക്കുന്ന മൂന്നാം രാജ്യ പൗരന്മാരായിരിക്കണം;",
      },
      {
        en: "Prove that they can work remotely using telecommunications irrespective of their physical location;",
        ml: "ഭൗതിക സ്ഥാനം പരിഗണിക്കാതെ ടെലികമ്മ്യൂണിക്കേഷൻ ഉപയോഗിച്ച് വിദൂരമായി ജോലി ചെയ്യാൻ കഴിയുമെന്ന് തെളിയിക്കണം;",
      },
      {
        en: "Earn a minimum gross monthly income of €2,700.",
        ml: "കുറഞ്ഞത് €2,700 പ്രതിമാസ മൊത്ത വരുമാനം (Minimum gross monthly income) ഉണ്ടായിരിക്കണം.",
      },
    ],
    conditionsHeading: {
      en: "In addition, the applicant must also fulfill the following requirements:",
      ml: "കൂടാതെ, അപേക്ഷകൻ താഴെ പറയുന്ന ആവശ്യകതകളും പൂർത്തിയാക്കേണ്ടതുണ്ട്:",
    },
    conditions: [
      {
        en: "have a valid travel document;",
        ml: "സാധുവായ യാത്രാ രേഖ (Valid travel document) ഉണ്ടായിരിക്കണം;",
      },
      {
        en: "be in possession of health insurance covering all risks in Malta for the duration of their stay;",
        ml: "താമസിക്കുന്ന കാലയളവിൽ മാൾട്ടയിലെ എല്ലാ അപകടസാധ്യതകളും കവർ ചെയ്യുന്ന ഹെൽത്ത് ഇൻഷുറൻസ് ഉണ്ടായിരിക്കണം;",
      },
      {
        en: "hold a valid property rental or purchase agreement in the applicant’s name; pass a background verification check; and",
        ml: "അപേക്ഷകന്റെ പേരിൽ സാധുവായ വസ്തു വാടക അല്ലെങ്കിൽ വാങ്ങൽ കരാർ ഉണ്ടായിരിക്കണം; പശ്ചാത്തല പരിശോധന (Background verification check) പാസാകണം;",
      },
      {
        en: "pay a non-refundable administrative fee of €300.",
        ml: "തിരികെ ലഭിക്കാത്ത €300 അഡ്മിനിസ്ട്രേറ്റീവ് ഫീസ് അടയ്ക്കണം.",
      },
    ],
    relatedServices: [
      "malta-startup-residence",
      "malta-permanent-residence",
      "real-estate",
    ],
    seo: {
      title: "Malta Digital Nomad Visa (Nomad Residence Permit) | LRS Legal & Relocation Services",
      description:
        "Learn about Malta’s Nomad Residence Permit (NRP) for remote workers and digital nomads earning income from outside Malta.",
    },
  },

  // 4. Malta Startup Residence Programme
  {
    id: "malta-startup-residence",
    // code: "04",
    slug: "malta-startup-residence",
    officialName: "Malta Startup Residence Programme",
    abbreviation: "MSRP",
    category: {
      en: "PROGRAMME 04 • STARTUP RESIDENCE",
      ml: "പ്രോഗ്രാം 04 • സ്റ്റാർട്ടപ്പ് റസിഡൻസ്",
    },
    title: {
      en: "Malta Startup Residence Programme",
      ml: "മാൾട്ട സ്റ്റാർട്ടപ്പ് റസിഡൻസ് പ്രോഗ്രാം",
    },
    shortDescription: {
      en: "Combines entrepreneurship and residency into one, the programme is aimed at non-EU citizens and is designed to make it easier for innovative businesses to establish themselves in Malta.",
      ml: "സംരംഭകത്വവും താമസാനുമതിയും ഒന്നിപ്പിക്കുന്ന ഈ പ്രോഗ്രാം യൂറോപ്യൻ യൂണിയൻ ഇതര പൗരന്മാരെ ലക്ഷ്യമിട്ടുള്ളതാണ്; നൂതന ബിസിനസ്സുകൾക്ക് മാൾട്ടയിൽ എളുപ്പത്തിൽ പ്രവർത്തനം ആരംഭിക്കാൻ ഇത് സഹായിക്കുന്നു.",
    },
    introduction: {
      en: "The incorporated Startup in Malta is required to place a tangible investment and/or paid up share capital of not less than €25,000. In case where more than four (4) co-founders apply for the Startup Residence Permit, an additional €10,000 needs to be placed per additional co-founder. In any case, the maximum number of co-founders eligible for the Startup Residence Programme is six (6).",
      ml: "മാൾട്ടയിൽ രജിസ്റ്റർ ചെയ്യുന്ന സ്റ്റാർട്ടപ്പിന് കുറഞ്ഞത് €25,000 മൂല്യമുള്ള നിക്ഷേപം (Tangible investment) അല്ലെങ്കിൽ പെയ്ഡ്-അപ്പ് ഷെയർ ക്യാപിറ്റൽ ഉണ്ടായിരിക്കണം. നാല് (4) സഹസ്ഥാപകരിൽ കൂടുതൽ പേർ സ്റ്റാർട്ടപ്പ് റസിഡൻസ് പെർമിറ്റിനായി അപേക്ഷിക്കുന്ന സാഹചര്യത്തിൽ, ഓരോ അധിക സഹസ്ഥാപകനും €10,000 വീതം അധികമായി നിക്ഷേപിക്കേണ്ടതാണ്. ഏതൊരു സാഹചര്യത്തിലും ഈ പ്രോഗ്രാമിന് അർഹരായ പരമാവധി സഹസ്ഥാപകരുടെ എണ്ണം ആറ് (6) ആണ്.",
    },
    image: "/images/service-img/service-4.webp",
    secondaryImage: "/images/service-4-sec.webp",
    imageAlt: {
      en: "Modern corporate atrium representing the Malta Startup Residence Programme",
      ml: "മാൾട്ട സ്റ്റാർട്ടപ്പ് റസിഡൻസ് പ്രോഗ്രാമിനെ പ്രതിനിധീകരിക്കുന്ന വാണിജ്യ ദൃശ്യം",
    },
    featured: true,
    highlights: [
      {
        label: {
          en: "Minimum Share Capital / Investment",
          ml: "കുറഞ്ഞ നിക്ഷേപം / ഷെയർ ക്യാപിറ്റൽ",
        },
        value: {
          en: "Not less than €25,000 tangible investment and/or paid-up share capital",
          ml: "കുറഞ്ഞത് €25,000 നിക്ഷേപം അല്ലെങ്കിൽ പെയ്ഡ്-അപ്പ് ഷെയർ ക്യാപിറ്റൽ",
        },
      },
      {
        label: {
          en: "Co-Founder Capacity",
          ml: "അർഹരായ സഹസ്ഥാപകർ",
        },
        value: {
          en: "Up to 6 co-founders (+€10,000 per additional co-founder above 4)",
          ml: "പരമാവധി 6 സഹസ്ഥാപകർ (4 പേരിൽ കൂടുതലെങ്കിൽ ഒരാൾക്ക് +€10,000)",
        },
      },
      {
        label: {
          en: "Enterprise Track Record",
          ml: "സംരംഭത്തിന്റെ കാലപരിധി",
        },
        value: {
          en: "Registered for not more than 7 years anywhere globally",
          ml: "ആഗോളതലത്തിൽ രജിസ്റ്റർ ചെയ്ത് 7 വർഷത്തിൽ കവിയരുത്",
        },
      },
      {
        label: {
          en: "Eligible Nationals",
          ml: "അപേക്ഷക യോഗ്യത",
        },
        value: {
          en: "Third-country nationals (excluding EU, EEA and Swiss), 18+ years",
          ml: "18 വയസ്സിന് മുകളിലുള്ള മൂന്നാം രാജ്യ പൗരന്മാർ (EU, EEA, Swiss ഒഴികെ)",
        },
      },
    ],
    eligibilitySectionLabel: {
      en: "03 / ELIGIBILITY & STARTUP CONDITIONS",
      ml: "03 / യോഗ്യതയും സ്റ്റാർട്ടപ്പ് നിബന്ധനകളും",
    },
    eligibilityHeadline: {
      en: "Startup Residence Eligibility & Enterprise Criteria",
      ml: "സ്റ്റാർട്ടപ്പ് റസിഡൻസ് യോഗ്യതയും സംരംഭ നിബന്ധനകളും",
    },
    eligibilityHeading: {
      en: "To be eligible for the Startup Residence Programme an individual must satisfy the following requirements:",
      ml: "സ്റ്റാർട്ടപ്പ് റസിഡൻസ് പ്രോഗ്രാമിന് യോഗ്യത നേടുന്നതിന് ഒരു വ്യക്തി താഴെ പറയുന്ന നിബന്ധനകൾ പാലിക്കണം:",
    },
    eligibility: [
      {
        en: "Third country nationals, excluding EU, EEA and Swiss.",
        ml: "EU, EEA, സ്വിറ്റ്സർലൻഡ് എന്നിവ ഒഴികെയുള്ള മൂന്നാം രാജ്യ പൗരന്മാർ.",
      },
      {
        en: "Must be 18 years and older",
        ml: "18 വയസ്സോ അതിൽ കൂടുതലോ പ്രായമുണ്ടായിരിക്കണം",
      },
      {
        en: "has a concrete intention to develop and/or expand their business in Malta;",
        ml: "മാൾട്ടയിൽ തങ്ങളുടെ ബിസിനസ്സ് വികസിപ്പിക്കാനോ വിപുലീകരിക്കാനോ വ്യക്തമായ ലക്ഷ്യമുണ്ടായിരിക്കണം;",
      },
      {
        en: "is the founder or the co-founder of an enterprise, which has been registered for not more than seven (7) years anywhere globally (including Malta).",
        ml: "മാൾട്ടയിലോ ലോകത്തെവിടെയെങ്കിലുമോ രജിസ്റ്റർ ചെയ്ത് ഏഴ് (7) വർഷത്തിൽ കവിയാത്ത ഒരു സംരംഭത്തിന്റെ സ്ഥാപകനോ സഹസ്ഥാപകനോ ആയിരിക്കണം.",
      },
    ],
    conditionsHeading: {
      en: "Enterprise & Co-Founder Conditions",
      ml: "സംരംഭ & സഹസ്ഥാപക നിബന്ധനകൾ",
    },
    conditions: [
      {
        en: "it has not taken over the activity of another enterprise,",
        ml: "മറ്റൊരു സംരംഭത്തിന്റെ പ്രവർത്തനം ഏറ്റെടുത്തതാകരുത്,",
      },
      {
        en: "it has not yet distributed profit,",
        ml: "ഇതുവരെ ലാഭം വിതരണം ചെയ്തിട്ടുണ്ടാകരുത്,",
      },
      {
        en: "it has not been formed through a merger.",
        ml: "ലയനത്തിലൂടെ (Merger) രൂപീകരിച്ചതാകരുത്.",
      },
      {
        en: "A co-founder would be one of the first entrepreneurs to have set-up the start-up.",
        ml: "സ്റ്റാർട്ടപ്പ് സ്ഥാപിച്ച ആദ്യ സംരംഭകരിൽ ഒരാളായിരിക്കണം സഹസ്ഥാപകൻ (Co-founder).",
      },
      {
        en: "The incorporated Startup in Malta is required to place a tangible investment and/or paid up share capital of not less than €25,000.",
        ml: "മാൾട്ടയിൽ രജിസ്റ്റർ ചെയ്യുന്ന സ്റ്റാർട്ടപ്പിന് കുറഞ്ഞത് €25,000 മൂല്യമുള്ള നിക്ഷേപം അല്ലെങ്കിൽ പെയ്ഡ്-അപ്പ് ഷെയർ ക്യാപിറ്റൽ ആവശ്യമാണ്.",
      },
      {
        en: "In case where more than four (4) co-founders apply for the Startup Residence Permit, an additional €10,000 needs to be placed per additional co-founder. In any case, the maximum number of co-founders eligible for the Startup Residence Programme is six (6);",
        ml: "നാല് (4) സഹസ്ഥാപകരിൽ കൂടുതൽ പേർ അപേക്ഷിക്കുകയാണെങ്കിൽ ഓരോ അധിക സഹസ്ഥാപകനും €10,000 വീതം അധികമായി നിക്ഷേപിക്കണം. പരമാവധി ആറ് (6) സഹസ്ഥാപകർക്കാണ് പ്രോഗ്രാമിൽ യോഗ്യതയുള്ളത്;",
      },
    ],
    relatedServices: [
      "malta-digital-nomad-visa",
      "global-residence-programme",
      "citizenship-by-merit",
    ],
    seo: {
      title: "Malta Startup Residence Programme | LRS Legal & Relocation Services",
      description:
        "Combine entrepreneurship and residency in Malta through the Malta Startup Residence Programme for innovative non-EU founders and co-founders.",
    },
  },

  // 5. Global Residence Programme
  {
    id: "global-residence-programme",
    // code: "05",
    slug: "global-residence-programme",
    officialName: "Global Residence Programme",
    abbreviation: "GRP",
    category: {
      en: "PROGRAMME 05 • GLOBAL RESIDENCE",
      ml: "പ്രോഗ്രാം 05 • ഗ്ലോബൽ റസിഡൻസ് (GRP)",
    },
    title: {
      en: "Global Residence Programme",
      ml: "ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാം",
    },
    shortDescription: {
      en: "The Global Residence Programme is designed to attract Non EU, EEA and Swiss individuals and families, which include the spouse and children up to 25 years who are seeking an attractive tax country to settle in.",
      ml: "ആകർഷകമായ നികുതി വ്യവസ്ഥയുള്ള ഒരു രാജ്യത്ത് സ്ഥിരതാമസമാക്കാൻ ആഗ്രഹിക്കുന്ന EU, EEA, സ്വിസ് ഇതര വ്യക്തികളെയും കുടുംബങ്ങളെയും (ജീവിതപങ്കാളിയും 25 വയസ്സുവരെയുള്ള കുട്ടികളും ഉൾപ്പെടെ) ആകർഷിക്കുന്നതിനാണ് ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാം രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്.",
    },
    introduction: {
      en: "Global Residence Programme offers a special tax status to qualifying applicants.",
      ml: "യോഗ്യരായ അപേക്ഷകർക്ക് ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാം പ്രത്യേക നികുതി പദവി (Special tax status) വാഗ്ദാനം ചെയ്യുന്നു.",
    },
    image: "/images/service-img/service-5.webp",
    secondaryImage: "/images/service-5-sec.webp",
    imageAlt: {
      en: "International architectural atrium representing the Global Residence Programme",
      ml: "ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാമിനെ സൂചിപ്പിക്കുന്ന അന്താരാഷ്ട്ര വാസ്തുവിദ്യാ ദൃശ്യം",
    },
    featured: true,
    highlights: [
      {
        label: {
          en: "Property Purchase Threshold",
          ml: "വസ്തു വാങ്ങൽ മൂല്യം",
        },
        value: {
          en: "North of Malta min €275,000 OR South of Malta / Gozo min €220,000",
          ml: "വടക്കൻ മാൾട്ടയിൽ കുറഞ്ഞത് €275,000 അല്ലെങ്കിൽ തെക്കൻ മാൾട്ട / ഗോസോയിൽ €220,000",
        },
      },
      {
        label: {
          en: "Property Rental Threshold",
          ml: "വസ്തു വാടക നിരക്ക്",
        },
        value: {
          en: "North of Malta min €9,600/yr OR South of Malta / Gozo min €8,750/yr",
          ml: "വടക്കൻ മാൾട്ടയിൽ പ്രതിവർഷം €9,600 അല്ലെങ്കിൽ തെക്കൻ മാൾട്ട / ഗോസോയിൽ €8,750",
        },
      },
      {
        label: {
          en: "Application Fees",
          ml: "അപേക്ഷാ ഫീസ്",
        },
        value: {
          en: "€6,000 (North of Malta) OR €5,500 (South of Malta)",
          ml: "€6,000 (വടക്കൻ മാൾട്ട) അല്ലെങ്കിൽ €5,500 (തെക്കൻ മാൾട്ട)",
        },
      },
      {
        label: {
          en: "Tax Rate & Minimum Tax",
          ml: "നികുതി നിരക്കും കുറഞ്ഞ നികുതിയും",
        },
        value: {
          en: "15% on foreign income remitted to Malta (Min tax €15,000)",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് 15% നികുതി (കുറഞ്ഞത് €15,000)",
        },
      },
    ],
    eligibilitySectionLabel: {
      en: "03 / ELIGIBILITY & TAX TREATMENT",
      ml: "03 / യോഗ്യതയും നികുതി വ്യവസ്ഥകളും",
    },
    eligibilityHeadline: {
      en: "Applicant Criteria & Tax Treatment",
      ml: "അപേക്ഷക യോഗ്യതയും നികുതി വ്യവസ്ഥകളും",
    },
    eligibilityHeading: {
      en: "Applicants must:",
      ml: "അപേക്ഷകർ പാലിക്കേണ്ട നിബന്ധനകൾ:",
    },
    eligibility: [
      {
        en: "Not Be EU, EEA or Swiss nationals.",
        ml: "EU, EEA അല്ലെങ്കിൽ സ്വിസ് പൗരന്മാരായിരിക്കരുത്.",
      },
      {
        en: "Hold a valid Passport",
        ml: "സാധുവായ പാസ്‌പോർട്ട് ഉണ്ടായിരിക്കണം",
      },
      {
        en: "Be fluent in English or Maltese",
        ml: "ഇംഗ്ലീഷിലോ മാൾട്ടീസിലോ പ്രാവീണ്യമുണ്ടായിരിക്കണം",
      },
      {
        en: "Be a person of good conduct",
        ml: "നല്ല സ്വഭാവശുദ്ധിയുള്ള വ്യക്തിയായിരിക്കണം",
      },
      {
        en: "Hold an insurance policy to cover risks across Europe for him/herself and dependants.",
        ml: "അപേക്ഷകനും ആശ്രിതർക്കും യൂറോപ്പിലുടനീളം പരിരക്ഷ നൽകുന്ന ഇൻഷുറൻസ് പോളിസി ഉണ്ടായിരിക്കണം.",
      },
      {
        en: "Hold a qualifying property.",
        ml: "നിശ്ചിത യോഗ്യതയുള്ള വസ്തു (Qualifying property) കൈവശമുണ്ടായിരിക്കണം.",
      },
      {
        en: "Applicant must be in receipt of stable and regular income.",
        ml: "അപേക്ഷകന് സ്ഥിരവും ക്രമവുമായ വരുമാനം ഉണ്ടായിരിക്കണം.",
      },
      {
        en: "The individual must not stay in any other jurisdiction for more than 183 days;",
        ml: "മറ്റൊരു രാജ്യത്തും 183 ദിവസത്തിൽ കൂടുതൽ താമസിക്കാൻ പാടില്ല;",
      },
    ],
    taxHeading: {
      en: "Tax Treatment",
      ml: "നികുതി വ്യവസ്ഥകൾ (Tax Treatment)",
    },
    taxBenefits: [
      {
        en: "The minimum tax payable must be 15,000 euro",
        ml: "അടയ്ക്കേണ്ട കുറഞ്ഞ നികുതി 15,000 യൂറോ ആയിരിക്കണം",
      },
      {
        en: "Beneficiaries are taxed at the rate of 15% on foreign source income remitted to Malta.",
        ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് ഗുണഭോക്താക്കൾക്ക് 15% നിരക്കിൽ നികുതി ചുമത്തുന്നു.",
      },
      {
        en: "No tax is paid on capital gains arising outside of Malta even if such gains are received in Malta.",
        ml: "മാൾട്ടയ്ക്ക് പുറത്തുനിന്നുണ്ടാകുന്ന മൂലധന നേട്ടങ്ങൾ (Capital gains) മാൾട്ടയിൽ ലഭിച്ചാൽ പോലും അതിന് നികുതി നൽകേണ്ടതില്ല.",
      },
      {
        en: "Malta source income is charged as separate income at the rate of 35%.",
        ml: "മാൾട്ടയിൽ നിന്നുള്ള വരുമാനത്തിന് പ്രത്യേക വരുമാനമായി 35% നിരക്കിൽ നികുതി ഈടാക്കുന്നു.",
      },
    ],
    processSectionLabel: {
      en: "04 / FINANCIAL REQUIREMENTS",
      ml: "04 / സാമ്പത്തിക നിബന്ധനകൾ",
    },
    processHeadline: {
      en: "Financial Requirements:",
      ml: "സാമ്പത്തിക നിബന്ധനകൾ (Financial Requirements):",
    },
    process: [
      {
        stepNumber: "01",
        title: {
          en: "Property",
          ml: "വസ്തു (Property)",
        },
        description: {
          en: "Purchase property in the North of Malta at a minimum price of 275,000. Alternatively, applicants can purchase a property in the South of Malta or Gozo at a minimum price of 220,000. Applicants who prefer renting, must either rent a property in the North of Malta at a minimum annual rent of 9600 or in the South of Malta or Gozo at a minimum rent of 8750 per annum.",
          ml: "വടക്കൻ മാൾട്ടയിൽ കുറഞ്ഞത് €275,000 വിലയുള്ള വസ്തു വാങ്ങുക. അല്ലെങ്കിൽ തെക്കൻ മാൾട്ടയിലോ ഗോസോയിലോ കുറഞ്ഞത് €220,000 വിലയുള്ള വസ്തു വാങ്ങാം. വാടകയ്‌ക്കെടുക്കാൻ താല്പര്യപ്പെടുന്ന അപേക്ഷകർ വടക്കൻ മാൾട്ടയിൽ പ്രതിവർഷം കുറഞ്ഞത് €9,600 വാടകയ്‌ക്കോ തെക്കൻ മാൾട്ടയിലോ ഗോസോയിലോ പ്രതിവർഷം കുറഞ്ഞത് €8,750 വാടകയ്‌ക്കോ വസ്തു എടുക്കേണ്ടതാണ്.",
        },
      },
      {
        stepNumber: "02",
        title: {
          en: "Application fees",
          ml: "അപേക്ഷാ ഫീസ് (Application Fees)",
        },
        description: {
          en: "Non-refundable application fees amount to 6000 Euro when applicants rent or purchase a property that is situated in the North. If the applicants invest in property situated in the south the non-refundable administration fee amounts to 5500 Euro",
          ml: "വടക്കൻ മേഖലയിലുള്ള വസ്തു വാടകയ്‌ക്കെടുക്കുകയോ വാങ്ങുകയോ ചെയ്യുമ്പോൾ തിരികെ ലഭിക്കാത്ത അപേക്ഷാ ഫീസ് 6,000 യൂറോയാണ്. തെക്കൻ മേഖലയിലുള്ള വസ്തുവിലാണ് നിക്ഷേപിക്കുന്നതെങ്കിൽ തിരികെ ലഭിക്കാത്ത അഡ്മിനിസ്ട്രേഷൻ ഫീസ് 5,500 യൂറോയാണ്.",
        },
      },
      {
        stepNumber: "03",
        title: {
          en: "Minimum tax payable",
          ml: "അടയ്ക്കേണ്ട കുറഞ്ഞ നികുതി (Minimum Tax Payable)",
        },
        description: {
          en: "The minimum tax payable must be 15,000 euro",
          ml: "അടയ്ക്കേണ്ട കുറഞ്ഞ നികുതി 15,000 യൂറോ ആയിരിക്കണം",
        },
      },
      {
        stepNumber: "04",
        title: {
          en: "Tax Treatment",
          ml: "നികുതി വ്യവസ്ഥകൾ (Tax Treatment)",
        },
        description: {
          en: "Beneficiaries are taxed at the rate of 15% on foreign source income remitted to Malta. No tax is paid on capital gains arising outside of Malta even if such gains are received in Malta. Malta source income is charged as separate income at the rate of 35%.",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് ഗുണഭോക്താക്കൾക്ക് 15% നിരക്കിൽ നികുതി ചുമത്തുന്നു. മാൾട്ടയ്ക്ക് പുറത്തുനിന്നുണ്ടാകുന്ന മൂലധന നേട്ടങ്ങൾ (Capital gains) മാൾട്ടയിൽ ലഭിച്ചാൽ പോലും അതിന് നികുതി നൽകേണ്ടതില്ല. മാൾട്ടയിൽ നിന്നുള്ള വരുമാനത്തിന് പ്രത്യേക വരുമാനമായി 35% നിരക്കിൽ നികുതി ഈടാക്കുന്നു.",
        },
      },
    ],
    relatedServices: [
      "the-residence-programme",
      "malta-permanent-residence",
      "real-estate",
    ],
    seo: {
      title: "Global Residence Programme (GRP) | LRS Legal & Relocation Services",
      description:
        "The Global Residence Programme is designed for non-EU, EEA, and Swiss individuals and families seeking a special 15% tax status in Malta.",
    },
  },

  // 6. The Residence Programme
  {
    id: "the-residence-programme",
    // code: "06",
    slug: "the-residence-programme",
    officialName: "The Residence Programme",
    abbreviation: "TRP",
    category: {
      en: "PROGRAMME 06 • THE RESIDENCE PROGRAMME",
      ml: "പ്രോഗ്രാം 06 • ദി റസിഡൻസ് പ്രോഗ്രാം (TRP)",
    },
    title: {
      en: "The Residence Programme",
      ml: "ദി റസിഡൻസ് പ്രോഗ്രാം",
    },
    shortDescription: {
      en: "The Residence Programme is designed to attract EU, EEA and Swiss individuals and families, which include the spouse and children up to 25 years who are seeking an attractive tax country to settle in.",
      ml: "ആകർഷകമായ നികുതി വ്യവസ്ഥയുള്ള ഒരു രാജ്യത്ത് സ്ഥിരതാമസമാക്കാൻ ആഗ്രഹിക്കുന്ന EU, EEA, സ്വിസ് വ്യക്തികളെയും കുടുംബങ്ങളെയും (ജീവിതപങ്കാളിയും 25 വയസ്സുവരെയുള്ള കുട്ടികളും ഉൾപ്പെടെ) ആകർഷിക്കുന്നതിനാണ് 'ദി റസിഡൻസ് പ്രോഗ്രാം' രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്.",
    },
    introduction: {
      en: "Applicants may qualify for paying only 15% of your external income remitted to Malta under The Residence Programme.",
      ml: "ദി റസിഡൻസ് പ്രോഗ്രാമിന് കീഴിൽ മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് 15% മാത്രം നികുതി നൽകാനുള്ള അർഹത അപേക്ഷകർക്ക് ലഭിക്കുന്നു.",
    },
    image: "/images/service-img/service-6.webp",
    secondaryImage: "/images/service-6-sec.webp",
    imageAlt: {
      en: "Coastal Mediterranean residence representing The Residence Programme in Malta",
      ml: "ദി റസിഡൻസ് പ്രോഗ്രാമിനെ പ്രതിനിധീകരിക്കുന്ന മാൾട്ടയിലെ ഭവന ദൃശ്യം",
    },
    featured: true,
    highlights: [
      {
        label: {
          en: "Property Purchase Threshold",
          ml: "വസ്തു വാങ്ങൽ മൂല്യം",
        },
        value: {
          en: "North of Malta min €275,000 OR South of Malta / Gozo min €220,000",
          ml: "വടക്കൻ മാൾട്ടയിൽ കുറഞ്ഞത് €275,000 അല്ലെങ്കിൽ തെക്കൻ മാൾട്ട / ഗോസോയിൽ €220,000",
        },
      },
      {
        label: {
          en: "Property Rental Threshold",
          ml: "വസ്തു വാടക നിരക്ക്",
        },
        value: {
          en: "North of Malta min €9,600/yr OR South of Malta / Gozo min €8,750/yr",
          ml: "വടക്കൻ മാൾട്ടയിൽ പ്രതിവർഷം €9,600 അല്ലെങ്കിൽ തെക്കൻ മാൾട്ട / ഗോസോയിൽ €8,750",
        },
      },
      {
        label: {
          en: "Application Fees",
          ml: "അപേക്ഷാ ഫീസ്",
        },
        value: {
          en: "€6,000 (North of Malta) OR €5,500 (South of Malta)",
          ml: "€6,000 (വടക്കൻ മാൾട്ട) അല്ലെങ്കിൽ €5,500 (തെക്കൻ മാൾട്ട)",
        },
      },
      {
        label: {
          en: "Tax Rate & Minimum Tax",
          ml: "നികുതി നിരക്കും കുറഞ്ഞ നികുതിയും",
        },
        value: {
          en: "15% on foreign income remitted to Malta (Min tax €15,000)",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് 15% നികുതി (കുറഞ്ഞത് €15,000)",
        },
      },
    ],
    eligibilitySectionLabel: {
      en: "03 / ELIGIBILITY & TAX TREATMENT",
      ml: "03 / യോഗ്യതയും നികുതി വ്യവസ്ഥകളും",
    },
    eligibilityHeadline: {
      en: "Applicant Criteria & Tax Treatment",
      ml: "അപേക്ഷക യോഗ്യതയും നികുതി വ്യവസ്ഥകളും",
    },
    eligibilityHeading: {
      en: "Applicants must:",
      ml: "അപേക്ഷകർ പാലിക്കേണ്ട നിബന്ധനകൾ:",
    },
    eligibility: [
      {
        en: "Be EU, EEA or Swiss nationals.",
        ml: "EU, EEA അല്ലെങ്കിൽ സ്വിസ് പൗരന്മാരായിരിക്കണം.",
      },
      {
        en: "Hold a valid Passport",
        ml: "സാധുവായ പാസ്‌പോർട്ട് ഉണ്ടായിരിക്കണം",
      },
      {
        en: "Be fluent in English or Maltese",
        ml: "ഇംഗ്ലീഷിലോ മാൾട്ടീസിലോ പ്രാവീണ്യമുണ്ടായിരിക്കണം",
      },
      {
        en: "Be a person of good conduct",
        ml: "നല്ല സ്വഭാവശുദ്ധിയുള്ള വ്യക്തിയായിരിക്കണം",
      },
      {
        en: "Hold an insurance policy to cover risks across Europe for him/herself and dependants.",
        ml: "അപേക്ഷകനും ആശ്രിതർക്കും യൂറോപ്പിലുടനീളം പരിരക്ഷ നൽകുന്ന ഇൻഷുറൻസ് പോളിസി ഉണ്ടായിരിക്കണം.",
      },
      {
        en: "Hold a qualifying property.",
        ml: "നിശ്ചിത യോഗ്യതയുള്ള വസ്തു (Qualifying property) കൈവശമുണ്ടായിരിക്കണം.",
      },
      {
        en: "Applicant must be in receipt of stable and regular income.",
        ml: "അപേക്ഷകന് സ്ഥിരവും ക്രമവുമായ വരുമാനം ഉണ്ടായിരിക്കണം.",
      },
      {
        en: "The individual must not stay in any other jurisdiction for more than 183 days;",
        ml: "മറ്റൊരു രാജ്യത്തും 183 ദിവസത്തിൽ കൂടുതൽ താമസിക്കാൻ പാടില്ല;",
      },
    ],
    taxHeading: {
      en: "Tax Treatment",
      ml: "നികുതി വ്യവസ്ഥകൾ (Tax Treatment)",
    },
    taxBenefits: [
      {
        en: "The minimum tax payable must be 15,000 euro",
        ml: "അടയ്ക്കേണ്ട കുറഞ്ഞ നികുതി 15,000 യൂറോ ആയിരിക്കണം",
      },
      {
        en: "Beneficiaries are taxed at the rate of 15% on foreign source income remitted to Malta.",
        ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് ഗുണഭോക്താക്കൾക്ക് 15% നിരക്കിൽ നികുതി ചുമത്തുന്നു.",
      },
      {
        en: "No tax is paid on capital gains arising outside of Malta even if such gains are received in Malta.",
        ml: "മാൾട്ടയ്ക്ക് പുറത്തുനിന്നുണ്ടാകുന്ന മൂലധന നേട്ടങ്ങൾ (Capital gains) മാൾട്ടയിൽ ലഭിച്ചാൽ പോലും അതിന് നികുതി നൽകേണ്ടതില്ല.",
      },
      {
        en: "Malta source income is charged as separate income at the rate of 35%.",
        ml: "മാൾട്ടയിൽ നിന്നുള്ള വരുമാനത്തിന് പ്രത്യേക വരുമാനമായി 35% നിരക്കിൽ നികുതി ഈടാക്കുന്നു.",
      },
    ],
    processSectionLabel: {
      en: "04 / FINANCIAL REQUIREMENTS",
      ml: "04 / സാമ്പത്തിക നിബന്ധനകൾ",
    },
    processHeadline: {
      en: "Financial Requirements:",
      ml: "സാമ്പത്തിക നിബന്ധനകൾ (Financial Requirements):",
    },
    process: [
      {
        stepNumber: "01",
        title: {
          en: "Property",
          ml: "വസ്തു (Property)",
        },
        description: {
          en: "Purchase property in the North of Malta at a minimum price of 275,000. Alternatively, applicants can purchase a property in the South of Malta or Gozo at a minimum price of 220,000. Applicants who prefer renting, must either rent a property in the North of Malta at a minimum annual rent of 9600 or in the South of Malta or Gozo at a minimum rent of 8750 per annum.",
          ml: "വടക്കൻ മാൾട്ടയിൽ കുറഞ്ഞത് €275,000 വിലയുള്ള വസ്തു വാങ്ങുക. അല്ലെങ്കിൽ തെക്കൻ മാൾട്ടയിലോ ഗോസോയിലോ കുറഞ്ഞത് €220,000 വിലയുള്ള വസ്തു വാങ്ങാം. വാടകയ്‌ക്കെടുക്കാൻ താല്പര്യപ്പെടുന്ന അപേക്ഷകർ വടക്കൻ മാൾട്ടയിൽ പ്രതിവർഷം കുറഞ്ഞത് €9,600 വാടകയ്‌ക്കോ തെക്കൻ മാൾട്ടയിലോ ഗോസോയിലോ പ്രതിവർഷം കുറഞ്ഞത് €8,750 വാടകയ്‌ക്കോ വസ്തു എടുക്കേണ്ടതാണ്.",
        },
      },
      {
        stepNumber: "02",
        title: {
          en: "Application fees",
          ml: "അപേക്ഷാ ഫീസ് (Application Fees)",
        },
        description: {
          en: "Non-refundable application fees amount to 6000 Euro when applicants rent or purchase a property that is situated in the North. If the applicants invest in property situated in the south the non-refundable administration fee amounts to 5500 Euro.",
          ml: "വടക്കൻ മേഖലയിലുള്ള വസ്തു വാടകയ്‌ക്കെടുക്കുകയോ വാങ്ങുകയോ ചെയ്യുമ്പോൾ തിരികെ ലഭിക്കാത്ത അപേക്ഷാ ഫീസ് 6,000 യൂറോയാണ്. തെക്കൻ മേഖലയിലുള്ള വസ്തുവിലാണ് നിക്ഷേപിക്കുന്നതെങ്കിൽ തിരികെ ലഭിക്കാത്ത അഡ്മിനിസ്ട്രേഷൻ ഫീസ് 5,500 യൂറോയാണ്.",
        },
      },
      {
        stepNumber: "03",
        title: {
          en: "Minimum tax payable",
          ml: "അടയ്ക്കേണ്ട കുറഞ്ഞ നികുതി (Minimum Tax Payable)",
        },
        description: {
          en: "The minimum tax payable must be 15,000 euro",
          ml: "അടയ്ക്കേണ്ട കുറഞ്ഞ നികുതി 15,000 യൂറോ ആയിരിക്കണം",
        },
      },
      {
        stepNumber: "04",
        title: {
          en: "Tax Treatment",
          ml: "നികുതി വ്യവസ്ഥകൾ (Tax Treatment)",
        },
        description: {
          en: "Beneficiaries are taxed at the rate of 15% on foreign source income remitted to Malta. No tax is paid on capital gains arising outside of Malta even if such gains are received in Malta. Malta source income is charged as separate income at the rate of 35%.",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് ഗുണഭോക്താക്കൾക്ക് 15% നിരക്കിൽ നികുതി ചുമത്തുന്നു. മാൾട്ടയ്ക്ക് പുറത്തുനിന്നുണ്ടാകുന്ന മൂലധന നേട്ടങ്ങൾ (Capital gains) മാൾട്ടയിൽ ലഭിച്ചാൽ പോലും അതിന് നികുതി നൽകേണ്ടതില്ല. മാൾട്ടയിൽ നിന്നുള്ള വരുമാനത്തിന് പ്രത്യേക വരുമാനമായി 35% നിരക്കിൽ നികുതി ഈടാക്കുന്നു.",
        },
      },
    ],
    relatedServices: [
      "global-residence-programme",
      "malta-permanent-residence",
      "real-estate",
    ],
    seo: {
      title: "The Residence Programme (TRP) | LRS Legal & Relocation Services",
      description:
        "The Residence Programme in Malta is designed for EU, EEA, and Swiss individuals and families seeking a 15% tax rate on foreign income remitted to Malta.",
    },
  },

  // 7. Real Estate
  {
    id: "real-estate",
    // code: "07",
    slug: "real-estate",
    officialName: "Real Estate",
    abbreviation: "REAL ESTATE",
    category: {
      en: "SERVICE 07 • PROPERTY & INVESTMENT",
      ml: "സേവനം 07 • റിയൽ എസ്റ്റേറ്റ് & പ്രോപ്പർട്ടി",
    },
    title: {
      en: "Real Estate",
      ml: "റിയൽ എസ്റ്റേറ്റ്",
    },
    shortDescription: {
      en: "Real Estate in Malta has been the most sought-after investment by both local and foreign investors. The property market in Malta is constantly growing providing a stable and profitable return.",
      ml: "സ്വദേശികളും വിദേശികളുമായ നിക്ഷേപകർക്കിടയിൽ ഏറ്റവും കൂടുതൽ ആവശ്യക്കാരുള്ള നിക്ഷേപ മേഖലയാണ് മാൾട്ടയിലെ റിയൽ എസ്റ്റേറ്റ്. സ്ഥിരവും ലാഭകരവുമായ വരുമാനം നൽകിക്കൊണ്ട് മാൾട്ടയിലെ പ്രോപ്പർട്ടി വിപണി നിരന്തരം വളർന്നുകൊണ്ടിരിക്കുന്നു.",
    },
    introduction: {
      en: "We understand that choosing a property is a big decision. Whether you are looking for an investment property, or a rental in Malta, our real estate expert will help you through every step of the process and find the perfect property for your needs.",
      ml: "ഒരു വസ്തു തിരഞ്ഞെടുക്കുക എന്നത് വലിയൊരു തീരുമാനമാണെന്ന് ഞങ്ങൾ മനസ്സിലാക്കുന്നു. നിങ്ങൾ മാൾട്ടയിൽ ഒരു നിക്ഷേപ വസ്തുവോ വാടക വീടോ ആണ് തിരയുന്നതെങ്കിൽ, പ്രക്രിയയുടെ ഓരോ ഘട്ടത്തിലും ഞങ്ങളുടെ റിയൽ എസ്റ്റേറ്റ് വിദഗ്ധർ നിങ്ങളെ സഹായിക്കുകയും നിങ്ങളുടെ ആവശ്യങ്ങൾക്ക് ഏറ്റവും അനുയോജ്യമായ പ്രോപ്പർട്ടി കണ്ടെത്തുകയും ചെയ്യും.",
    },
    image: "/images/service-img/service-7.webp",
    secondaryImage: "/images/service-7-sec.webp",
    imageAlt: {
      en: "Luxury Mediterranean real estate and property investment in Malta",
      ml: "മാൾട്ടയിലെ റിയൽ എസ്റ്റേറ്റ് നിക്ഷേപത്തെയും ഭവനങ്ങളെയും സൂചിപ്പിക്കുന്ന ദൃശ്യം",
    },
    featured: true,
    highlights: [
      {
        label: {
          en: "Investment Options",
          ml: "നിക്ഷേപ സാധ്യതകൾ",
        },
        value: {
          en: "Directing you to the best investment options for your specific requirements",
          ml: "നിങ്ങളുടെ പ്രത്യേക ആവശ്യങ്ങൾക്കനുസരിച്ച് മികച്ച നിക്ഷേപ സാധ്യതകളിലേക്ക് വഴികാട്ടുന്നു",
        },
      },
      {
        label: {
          en: "Viewings & Negotiations",
          ml: "സന്ദർശനങ്ങളും ചർച്ചകളും",
        },
        value: {
          en: "Assisting during negotiations, accompanied visits or virtual visits",
          ml: "ചർച്ചകളിലെ സഹായം, നേരിട്ടുള്ള സന്ദർശനം അല്ലെങ്കിൽ വെർച്വൽ വിസിറ്റ്",
        },
      },
      {
        label: {
          en: "Contracts & Notarial Support",
          ml: "കരാറുകളും നോട്ടറിയൽ സേവനവും",
        },
        value: {
          en: "Drafting lease agreements, promise of sale, Deed of Sale & Notarial service",
          ml: "വാടക കരാറുകൾ, പ്രോമിസ് ഓഫ് സെയിൽ, വിൽപ്പന ആധാരം & നോട്ടറിയൽ സേവനം",
        },
      },
      {
        label: {
          en: "AIP Permits & Surveys",
          ml: "AIP പെർമിറ്റും സർവേയും",
        },
        value: {
          en: "AIP permit applications & engaging Architects for property surveys and certificates",
          ml: "AIP പെർമിറ്റ് അപേക്ഷയും ആർക്കിടെക്റ്റുകൾ മുഖേന വസ്തു പരിശോധനയും സർട്ടിഫിക്കറ്റുകളും",
        },
      },
    ],
    eligibilitySectionLabel: {
      en: "03 / REAL ESTATE ADVISORY SCOPE",
      ml: "03 / റിയൽ എസ്റ്റേറ്റ് സേവനങ്ങൾ",
    },
    eligibilityHeadline: {
      en: "Our Services",
      ml: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    },
    eligibilityHeading: {
      en: "Our services:",
      ml: "ഞങ്ങളുടെ സേവനങ്ങൾ:",
    },
    eligibility: [
      {
        en: "Directing you to the best investment options available for the specific requirements;",
        ml: "നിങ്ങളുടെ പ്രത്യേക ആവശ്യങ്ങൾക്കനുസരിച്ച് ലഭ്യമായ ഏറ്റവും മികച്ച നിക്ഷേപ സാധ്യതകളിലേക്ക് വഴികാട്ടുന്നു;",
      },
      {
        en: "Assisting during negotiations; Accompanying you to a visit or organizing a Virtual visit;",
        ml: "ചർച്ചകളിലും വിലപേശലുകളിലും സഹായിക്കുന്നു; വസ്തു സന്ദർശനത്തിന് ഒപ്പം വരികയോ വെർച്വൽ വിസിറ്റ് (Virtual visit) ക്രമീകരിക്കുകയോ ചെയ്യുന്നു;",
      },
      {
        en: "Drafting of lease agreements or preliminary agreements (promise of sale) and the Deed of Sale or any other contract;",
        ml: "വാടക കരാറുകൾ (Lease agreements), പ്രാഥമിക കരാറുകൾ (Promise of sale), വിൽപ്പന ആധാരം (Deed of Sale) അല്ലെങ്കിൽ മറ്റ് കരാറുകൾ എന്നിവ തയ്യാറാക്കുന്നു;",
      },
      {
        en: "Notarial service;",
        ml: "നോട്ടറിയൽ സേവനങ്ങൾ (Notarial service);",
      },
      {
        en: "Application for the Acquisition of an Immovable Permit (AIP);",
        ml: "വസ്തു വാങ്ങുന്നതിനുള്ള ഇമ്മൂവബിൾ പെർമിറ്റിനായുള്ള (AIP - Acquisition of an Immovable Permit) അപേക്ഷാ സഹായം;",
      },
      {
        en: "Engaging the appropriate Architects to survey the property as well as procure the relevant certificates and permits.",
        ml: "വസ്തു പരിശോധിക്കുന്നതിനും ആവശ്യമായ സർട്ടിഫിക്കറ്റുകളും പെർമിറ്റുകളും ലഭ്യമാക്കുന്നതിനുമായി അനുയോജ്യരായ ആർക്കിടെക്റ്റുകളെ ചുമതലപ്പെടുത്തുന്നു.",
      },
    ],
    relatedServices: [
      "malta-permanent-residence",
      "global-residence-programme",
      "education",
    ],
    seo: {
      title: "Real Estate in Malta | LRS Legal & Relocation Services",
      description:
        "Comprehensive Malta real estate advisory: property investment, rental search, negotiations, lease & sale contracts, notarial services, AIP permits, and architectural surveys.",
    },
  },

  // 8. Education
  {
    id: "education",
    // code: "08",
    slug: "education",
    officialName: "Education",
    abbreviation: "EDUCATION",
    category: {
      en: "SERVICE 08 • EDUCATION CONSULTANCY",
      ml: "സേവനം 08 • വിദ്യാഭ്യാസ കൺസൾട്ടൻസി",
    },
    title: {
      en: "Education",
      ml: "വിദ്യാഭ്യാസം",
    },
    shortDescription: {
      en: "Our Partnerships with both government and private schools cover the whole spectrum of the educational system from primary level to tertiary education.",
      ml: "സർക്കാർ-സ്വകാര്യ സ്കൂളുകളുമായുള്ള ഞങ്ങളുടെ പങ്കാളിത്തം പ്രൈമറി തലം മുതൽ ഉന്നത വിദ്യാഭ്യാസം (Tertiary education) വരെയുള്ള മുഴുവൻ വിദ്യാഭ്യാസ മേഖലയെയും ഉൾക്കൊള്ളുന്നു.",
    },
    introduction: {
      en: "Finding the right school for your child is one of the major concerns for many international families when relocating to Malta/Europe. Assisted by LRS expert, you can be confident to find a wide range schools top choose from and finally pick the right one.",
      ml: "മാൾട്ടയിലേക്കോ യൂറോപ്പിലേക്കോ താമസം മാറുമ്പോൾ അന്താരാഷ്ട്ര കുടുംബങ്ങൾ നേരിടുന്ന പ്രധാന ആശങ്കകളിലൊന്നാണ് കുട്ടികൾക്ക് അനുയോജ്യമായ സ്കൂൾ കണ്ടെത്തുക എന്നത്. LRS വിദഗ്ധരുടെ സഹായത്തോടെ, മികച്ച നിരവധി സ്കൂളുകളിൽ നിന്ന് നിങ്ങളുടെ കുട്ടികൾക്ക് ഏറ്റവും അനുയോജ്യമായ ഒന്ന് ആത്മവിശ്വാസത്തോടെ തിരഞ്ഞെടുക്കാം.",
    },
    image: "/images/service-img/service-8.webp",
    secondaryImage: "/images/service-8-sec.webp",
    imageAlt: {
      en: "Educational consultancy and school admission support in Malta by LRS",
      ml: "മാൾട്ടയിലെ വിദ്യാഭ്യാസ കൺസൾട്ടൻസി സേവനങ്ങളെ പ്രതിനിധീകരിക്കുന്ന ദൃശ്യം",
    },
    featured: true,
    highlights: [
      {
        label: {
          en: "School Partnerships",
          ml: "സ്കൂൾ പങ്കാളിത്തം",
        },
        value: {
          en: "Government and private schools from primary level to tertiary education",
          ml: "പ്രൈമറി തലം മുതൽ ഉന്നത വിദ്യാഭ്യാസം വരെയുള്ള സർക്കാർ-സ്വകാര്യ സ്കൂളുകൾ",
        },
      },
      {
        label: {
          en: "Education Planning & Visits",
          ml: "വിദ്യാഭ്യാസ ആസൂത്രണവും സന്ദർശനവും",
        },
        value: {
          en: "Education planning, admission office appointments & accompanied school visits",
          ml: "വിദ്യാഭ്യാസ ആസൂത്രണം, അഡ്മിഷൻ അപ്പോയിന്റ്മെന്റുകൾ & സ്കൂൾ സന്ദർശന സഹായം",
        },
      },
      {
        label: {
          en: "Applications & Documentation",
          ml: "അപേക്ഷയും രേഖകളും",
        },
        value: {
          en: "Assistance in public/private school applications and required documents",
          ml: "സർക്കാർ/സ്വകാര്യ സ്കൂൾ അപേക്ഷകളിലും രേഖകൾ തയ്യാറാക്കുന്നതിലും സഹായം",
        },
      },
      {
        label: {
          en: "Daily School Affairs",
          ml: "ദൈനംദിന സ്കൂൾ കാര്യങ്ങൾ",
        },
        value: {
          en: "Support with daily school affairs including school uniform and lunch box",
          ml: "സ്കൂൾ യൂണിഫോം, ലഞ്ച് ബോക്സ് തുടങ്ങിയ ദൈനംദിന കാര്യങ്ങളിൽ പിന്തുണ",
        },
      },
    ],
    eligibilitySectionLabel: {
      en: "03 / EDUCATION ADVISORY SCOPE",
      ml: "03 / വിദ്യാഭ്യാസ സേവനങ്ങൾ",
    },
    eligibilityHeadline: {
      en: "LRS Education Services",
      ml: "LRS വിദ്യാഭ്യാസ സേവനങ്ങൾ",
    },
    eligibilityHeading: {
      en: "LRS education services include:",
      ml: "LRS വിദ്യാഭ്യാസ സേവനങ്ങളിൽ ഉൾപ്പെടുന്നവ:",
    },
    eligibility: [
      {
        en: "Education planning",
        ml: "വിദ്യാഭ്യാസ ആസൂത്രണം (Education planning)",
      },
      {
        en: "Make appointment with school admission office",
        ml: "സ്കൂൾ അഡ്മിഷൻ ഓഫീസുമായി അപ്പോയിന്റ്മെന്റ് ക്രമീകരിക്കൽ",
      },
      {
        en: "Accompany client for visiting",
        ml: "സ്കൂൾ സന്ദർശനത്തിനായി ഉപഭോക്താവിനൊപ്പം അനുഗമിക്കൽ",
      },
      {
        en: "Assistance in application for public/private school",
        ml: "സർക്കാർ / സ്വകാര്യ സ്കൂളുകളിലേക്കുള്ള പ്രവേശന അപേക്ഷയിൽ സഹായം",
      },
      {
        en: "Assistance in document preparation requested by the school",
        ml: "സ്കൂൾ ആവശ്യപ്പെടുന്ന രേഖകൾ തയ്യാറാക്കുന്നതിൽ സഹായം",
      },
      {
        en: "Assistance in school daily affairs such as school uniform and lunch box.",
        ml: "സ്കൂൾ യൂണിഫോം, ലഞ്ച് ബോക്സ് തുടങ്ങിയ ദൈനംദിന സ്കൂൾ കാര്യങ്ങളിൽ സഹായം.",
      },
    ],
    relatedServices: [
      "malta-permanent-residence",
      "real-estate",
      "malta-digital-nomad-visa",
    ],
    seo: {
      title: "Education Consultancy in Malta | LRS Legal & Relocation Services",
      description:
        "LRS education services in Malta: partnerships with government and private schools from primary to tertiary education, school visits, admissions, and settling-in support.",
    },
  },
];
