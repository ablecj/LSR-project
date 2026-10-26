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
  code: string;
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
  overview?: LocalizedString;
  highlights: ServiceHighlight[];
  eligibility?: LocalizedString[];
  conditionsHeading?: LocalizedString;
  conditions?: LocalizedString[];
  taxHeading?: LocalizedString;
  taxBenefits?: LocalizedString[];
  process?: ServiceProcessStep[];
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
 * Centralized Malta Residency & Citizenship Programmes Data
 * Source: Official LRS "Malta Residency & Tax Programmes" Brochure (www.lrs-global.com).
 * Note: Only verified brochure figures and programme criteria are included below.
 * Optional sections (such as `overview`, `process`, `eligibleProfiles`, `conditions`, `taxBenefits`, `faq`)
 * render conditionally on `/services/[slug]` only when populated.
 */
export const MALTA_SERVICES_DATA: ServiceData[] = [
  {
    id: "malta-permanent-residence",
    code: "01",
    slug: "malta-permanent-residence",
    officialName: "Malta Permanent Residence Programme (MPRP)",
    abbreviation: "MPRP",
    statutoryBasis: {
      en: "Residency-by-Investment • Property & Government Contribution",
      ml: "റസിഡൻസി-ബൈ-ഇൻവെസ്റ്റ്‌മെന്റ് • വസ്തു നിക്ഷേപവും സർക്കാർ വിഹിതവും",
    },
    category: {
      en: "PROGRAMME 01 • PERMANENT RESIDENCY",
      ml: "പ്രോഗ്രാം 01 • സ്ഥിര താമസാനുമതി (MPRP)",
    },
    title: {
      en: "Malta Permanent Residence Programme (MPRP)",
      ml: "മാൾട്ട പെർമനന്റ് റസിഡൻസ് പ്രോഗ്രാം (MPRP)",
    },
    shortDescription: {
      en: "A residency-by-investment programme based on property investment and government contribution.",
      ml: "വസ്തു നിക്ഷേപത്തിലും സർക്കാർ വിഹിതത്തിലും അധിഷ്ഠിതമായ റസിഡൻസി-ബൈ-ഇൻവെസ്റ്റ്‌മെന്റ് പ്രോഗ്രാം.",
    },
    introduction: {
      en: "The Malta Permanent Residence Programme (MPRP) is a structured residency-by-investment pathway based on qualifying property investment and government contribution in Malta. LRS Legal & Relocation Services coordinates application preparation through a Licensed Agent, financial documentation review, and qualifying property compliance.",
      ml: "മാൾട്ടയിലെ നിശ്ചിത വസ്തു നിക്ഷേപത്തിലും സർക്കാർ വിഹിതത്തിലും അധിഷ്ഠിതമായി പ്രവർത്തിക്കുന്ന സ്ഥിര താമസാനുമതി പദ്ധതിയാണ് മാൾട്ട പെർമനന്റ് റസിഡൻസ് പ്രോഗ്രാം (MPRP). ലൈസൻസുള്ള ഏജന്റ് മുഖേനയുള്ള അപേക്ഷാ സമർപ്പണം, ആസ്തി രേഖകളുടെ പരിശോധന, വസ്തു വാങ്ങൽ/വാടക കരാറുകൾ എന്നിവയിൽ LRS സമഗ്രമായ ഉപദേശം നൽകുന്നു.",
    },
    image: "/images/service-realestate.jpg",
    secondaryImage: "/images/hero-2.jpg",
    imageAlt: {
      en: "Mediterranean residential architecture representing the Malta Permanent Residence Programme (MPRP)",
      ml: "മാൾട്ട പെർമനന്റ് റസിഡൻസ് പ്രോഗ്രാം പ്രതിനിധീകരിക്കുന്ന ഭവന ദൃശ്യം",
    },
    featured: true,
    overview: {
      en: "Designed for third-country nationals (non-EU, non-EEA, and non-Swiss), the MPRP combines a five-year qualifying residential property holding requirement with defined capital asset thresholds, administrative fees, a government contribution, and a registered NGO donation. All applications must be submitted via an authorized Licensed Agent.",
      ml: "യൂറോപ്യൻ യൂണിയൻ (EU/EEA/Swiss) ഇതര രാജ്യങ്ങളിലെ പൗരന്മാർക്കായി രൂപകൽപ്പന ചെയ്തിട്ടുള്ള ഈ പദ്ധതിയിൽ 5 വർഷത്തെ വസ്തു ഉടമസ്ഥത അല്ലെങ്കിൽ വാടക കരാർ, നിശ്ചിത മൂലധന ആസ്തി, അഡ്മിനിസ്ട്രേറ്റീവ് ഫീസ്, സർക്കാർ വിഹിതം, എൻ.ജി.ഒ (NGO) സംഭാവന എന്നിവ ഉൾപ്പെടുന്നു. അംഗീകൃത ലൈസൻസ്ഡ് ഏജന്റ് വഴിയാണ് അപേക്ഷകൾ സമർപ്പിക്കേണ്ടത്.",
    },
    highlights: [
      {
        label: {
          en: "Capital Assets Requirement",
          ml: "മൂലധന ആസ്തി മാനദണ്ഡം",
        },
        value: {
          en: "€500,000 (min €150,000 financial) OR €650,000 (min €75,000 financial)",
          ml: "€500,000 (കുറഞ്ഞത് €150,000 ഫിനാൻഷ്യൽ) അല്ലെങ്കിൽ €650,000 (കുറഞ്ഞത് €75,000 ഫിനാൻഷ്യൽ)",
        },
      },
      {
        label: {
          en: "Qualifying Property (5-Year Hold)",
          ml: "വസ്തു നിബന്ധന (5 വർഷം നിലനിർത്തണം)",
        },
        value: {
          en: "Rent €14,000/yr OR Purchase €375,000+",
          ml: "പ്രതിവർഷം €14,000 വാടക അല്ലെങ്കിൽ €375,000+ മൂല്യമുള്ള വസ്തു വാങ്ങൽ",
        },
      },
      {
        label: {
          en: "Administrative & Government Fees",
          ml: "അഡ്മിനിസ്ട്രേറ്റീവ് ഫീസും സർക്കാർ വിഹിതവും",
        },
        value: {
          en: "€60,000 admin fee + €37,000 government contribution",
          ml: "€60,000 അഡ്മിനിസ്ട്രേറ്റീവ് ഫീസ് + €37,000 സർക്കാർ വിഹിതം",
        },
      },
      {
        label: {
          en: "Dependents, NGO & Card Fees",
          ml: "ആശ്രിത ഫീസും എൻ.ജി.ഒ വിഹിതവും",
        },
        value: {
          en: "€7,500 per adult dependent • €2,000 NGO donation • €500 card fee/person",
          ml: "പ്രായപൂർത്തിയായ ആശ്രിതർക്ക് €7,500 • €2,000 NGO സംഭാവന • കാർഡ് ഫീസ് €500/വ്യക്തിക്ക്",
        },
      },
    ],
    eligibility: [
      {
        en: "Third-country nationals; non-EU/EEA/Swiss",
        ml: "മൂന്നാം രാജ്യ പൗരന്മാർ (Third-country nationals — non-EU/EEA/Swiss)",
      },
      {
        en: "Not from sanctioned countries",
        ml: "ഉപരോധം ഏർപ്പെടുത്തിയ രാജ്യങ്ങളിൽ നിന്നുള്ളവരാകരുത് (Not from sanctioned countries)",
      },
      {
        en: "Stable financial resources",
        ml: "സ്ഥിരതയുള്ള സാമ്പത്തിക സ്രോതസ്സുകൾ (Stable financial resources)",
      },
      {
        en: "No threat to national security or public health",
        ml: "ദേശീയ സുരക്ഷയ്ക്കോ പൊതുജനാരോഗ്യത്തിനോ ഭീഷണിയാകരുത്",
      },
      {
        en: "Clean criminal record, fit-and-proper",
        ml: "ക്രിമിനൽ പശ്ചാത്തലമില്ലാത്തവരും 'Fit-and-proper' പരിശോധന യോഗ്യതയുള്ളവരും",
      },
      {
        en: "Capital assets: €500,000 (min €150,000 financial) OR €650,000 (min €75,000 financial)",
        ml: "മൂലധന ആസ്തി: €500,000 (കുറഞ്ഞത് €150,000 സാമ്പത്തിക ആസ്തി) അല്ലെങ്കിൽ €650,000 (കുറഞ്ഞത് €75,000 സാമ്പത്തിക ആസ്തി)",
      },
    ],
    conditionsHeading: {
      en: "Programme Conditions (Official Brochure Schedule)",
      ml: "പ്രോഗ്രാം നിബന്ധനകൾ (Programme Conditions)",
    },
    conditions: [
      {
        en: "Apply via Licensed Agent",
        ml: "അംഗീകൃത ലൈസൻസ്ഡ് ഏജന്റ് (Licensed Agent) മുഖേന അപേക്ഷിക്കണം",
      },
      {
        en: "€60,000 administrative fee",
        ml: "€60,000 അഡ്മിനിസ്ട്രേറ്റീവ് ഫീസ്",
      },
      {
        en: "€7,500 per adult dependent",
        ml: "പ്രായപൂർത്തിയായ ഓരോ ആശ്രിതർക്കും €7,500 വീതം",
      },
      {
        en: "Hold property for 5 years",
        ml: "യോഗ്യമായ വസ്തു 5 വർഷത്തേക്ക് നിലനിർത്തണം",
      },
      {
        en: "Rent property €14,000/yr OR purchase €375,000+",
        ml: "പ്രതിവർഷം €14,000-ന് വസ്തു വാടകയ്‌ക്കെടുക്കുക അല്ലെങ്കിൽ €375,000+ മൂല്യമുള്ള വസ്തു വാങ്ങുക",
      },
      {
        en: "€37,000 government contribution",
        ml: "€37,000 സർക്കാർ വിഹിതം (Government contribution)",
      },
      {
        en: "€2,000 NGO donation",
        ml: "€2,000 എൻ.ജി.ഒ സംഭാവന (NGO donation)",
      },
      {
        en: "Health insurance + valid travel document",
        ml: "ആരോഗ്യ ഇൻഷുറൻസും സാധുവായ യാത്രാ രേഖകളും (Valid travel document)",
      },
      {
        en: "€500 residence card fee per person",
        ml: "ഒരാൾക്ക് €500 വീതം റസിഡൻസ് കാർഡ് ഫീസ്",
      },
    ],
    relatedServices: [
      "citizenship-by-merit",
      "malta-retirement-programme",
      "global-residence-programme",
    ],
    seo: {
      title: "Malta Permanent Residence Programme (MPRP) | LRS Legal & Relocation Services",
      description:
        "Explore the Malta Permanent Residence Programme (MPRP) with LRS—a residency-by-investment programme based on property investment and government contribution.",
    },
  },
  {
    id: "citizenship-by-merit",
    code: "02",
    slug: "citizenship-by-merit",
    officialName: "Citizenship by Naturalisation on the Basis of Merit",
    abbreviation: "Article 10(9)",
    statutoryBasis: {
      en: "Article 10(9) of the Maltese Citizenship Act",
      ml: "മാൾട്ടീസ് പൗരത്വ നിയമത്തിലെ ആർട്ടിക്കിൾ 10(9)",
    },
    category: {
      en: "PROGRAMME 02 • MERIT NATURALISATION",
      ml: "പ്രോഗ്രാം 02 • മെറിറ്റ് അധിഷ്ഠിത പൗരത്വം",
    },
    title: {
      en: "Citizenship by Naturalisation on the Basis of Merit",
      ml: "യോഗ്യതയുടെ അടിസ്ഥാനത്തിലുള്ള പൗരത്വം (Citizenship by Merit)",
    },
    shortDescription: {
      en: "Highly selective, merit-based citizenship under Article 10(9) of the Maltese Citizenship Act.",
      ml: "മാൾട്ടീസ് പൗരത്വ നിയമത്തിലെ ആർട്ടിക്കിൾ 10(9) പ്രകാരം സവിശേഷ നേട്ടങ്ങളുടെ അടിസ്ഥാനത്തിൽ നൽകുന്ന തിരഞ്ഞെടുക്കപ്പെട്ട പൗരത്വം.",
    },
    introduction: {
      en: "Governed by Article 10(9) of the Maltese Citizenship Act, Citizenship by Naturalisation on the Basis of Merit is a highly selective pathway recognizing individuals whose exceptional achievements and contributions bring distinct value. LRS provides specialized legal counsel for preparing proposal dossiers and navigating board evaluation.",
      ml: "മാൾട്ടീസ് പൗരത്വ നിയമത്തിലെ ആർട്ടിക്കിൾ 10(9) പ്രകാരം അസാധാരണ നേട്ടങ്ങളും സംഭാവനകളും കൈവരിച്ച വ്യക്തികൾക്കായി വ്യവസ്ഥ ചെയ്തിട്ടുള്ള ഉയർന്ന തിരഞ്ഞെടുപ്പ് സ്വഭാവമുള്ള പൗരത്വ പ്രക്രിയയാണിത്. പ്രൊപ്പോസൽ ലെറ്റർ തയ്യാറാക്കുന്നതിലും ഇവാലുവേഷൻ ബോർഡ് നടപടിക്രമങ്ങളിലും LRS വിദഗ്ധ നിയമോപദേശം നൽകുന്നു.",
    },
    image: "/images/service-immigration.jpg",
    secondaryImage: "/images/hero-3.jpg",
    imageAlt: {
      en: "Legal portfolio and consular documentation representing Maltese Citizenship by Merit under Article 10(9)",
      ml: "മാൾട്ടീസ് പൗരത്വ നിയമ നടപടികളെ സൂചിപ്പിക്കുന്ന ലീഗൽ പോർട്ട്ഫോളിയോ",
    },
    featured: true,
    overview: {
      en: "Under Article 10(9) of the Maltese Citizenship Act, naturalisation on the basis of merit follows a rigorous four-stage progression: submitting a comprehensive proposal letter outlining achievements and contribution, undergoing assessment by an independent Evaluation Board, fulfilling residence, language ability, and property requirements following approval in principle, and completing a final review prior to taking the Oath of Allegiance.",
      ml: "മാൾട്ടീസ് പൗരത്വ നിയമത്തിലെ ആർട്ടിക്കിൾ 10(9) പ്രകാരമുള്ള ഈ പ്രക്രിയയ്ക്ക് നാല് പ്രധാന ഘട്ടങ്ങളാണുള്ളത്: നേട്ടങ്ങളും സംഭാവനകളും വിശദീകരിക്കുന്ന പ്രൊപ്പോസൽ ലെറ്റർ സമർപ്പിക്കൽ, സ്വതന്ത്ര ഇവാലുവേഷൻ ബോർഡിന്റെ പരിശോധന, തത്വത്തിലുള്ള അംഗീകാരത്തിന് (Approval in principle) ശേഷം താമസം, ഭാഷാ പരിജ്ഞാനം, വസ്തു നിബന്ധനകൾ എന്നിവ പൂർത്തിയാക്കൽ, അന്തിമ അവലോകനത്തിനും സത്യപ്രതിജ്ഞയ്ക്കും (Oath of Allegiance) ശേഷം പൗരത്വം.",
    },
    highlights: [
      {
        label: {
          en: "Statutory Authority",
          ml: "നിയമപരമായ അടിസ്ഥാനം",
        },
        value: {
          en: "Article 10(9) of the Maltese Citizenship Act",
          ml: "മാൾട്ടീസ് പൗരത്വ നിയമം — ആർട്ടിക്കിൾ 10(9)",
        },
      },
      {
        label: {
          en: "Evaluation Mechanism",
          ml: "വിലയിരുത്തൽ സംവിധാനം",
        },
        value: {
          en: "Independent Evaluation Board assessment of proposal & contribution",
          ml: "സ്വതന്ത്ര ഇവാലുവേഷൻ ബോർഡ് മുഖേനയുള്ള പരിശോധന",
        },
      },
      {
        label: {
          en: "Post-Approval Requirements",
          ml: "അംഗീകാരത്തിന് ശേഷമുള്ള ഘട്ടങ്ങൾ",
        },
        value: {
          en: "Residence, language ability, qualifying property & Oath of Allegiance",
          ml: "താമസം, ഭാഷാ പരിജ്ഞാനം, വസ്തു നിബന്ധനകൾ, സത്യപ്രതിജ്ഞ",
        },
      },
      {
        label: {
          en: "Recognized Candidate Profiles",
          ml: "അർഹരായ പ്രൊഫൈലുകൾ",
        },
        value: {
          en: "Scientists, Researchers, Athletes, Entrepreneurs, Artists, Technologists & Philanthropists",
          ml: "ശാസ്ത്രജ്ഞർ, ഗവേഷകർ, കായികതാരങ്ങൾ, സംരംഭകർ, കലാകാരന്മാർ, സാങ്കേതിക വിദഗ്ധർ, ജീവകാരുണ്യ പ്രവർത്തകർ",
        },
      },
    ],
    process: [
      {
        stepNumber: "01",
        title: {
          en: "Proposal Letter of Achievements & Contribution",
          ml: "നേട്ടങ്ങളും സംഭാവനകളും വ്യക്തമാക്കുന്ന പ്രൊപ്പോസൽ ലെറ്റർ",
        },
        description: {
          en: "Proposal letter outlining achievements & contribution.",
          ml: "അപേക്ഷകന്റെ സവിശേഷ നേട്ടങ്ങളും മാൾട്ടയ്ക്ക് നൽകാനാകുന്ന സംഭാവനകളും വിശദീകരിക്കുന്ന ഔദ്യോഗിക പ്രൊപ്പോസൽ ലെറ്റർ സമർപ്പിക്കുന്നു.",
        },
      },
      {
        stepNumber: "02",
        title: {
          en: "Independent Evaluation Board Assessment",
          ml: "സ്വതന്ത്ര ഇവാലുവേഷൻ ബോർഡ് പരിശോധന",
        },
        description: {
          en: "Assessment by independent Evaluation Board.",
          ml: "സമർപ്പിച്ച രേഖകളും യോഗ്യതകളും സ്വതന്ത്ര ഇവാലുവേഷൻ ബോർഡ് (Independent Evaluation Board) സൂക്ഷ്മമായി വിലയിരുത്തുന്നു.",
        },
      },
      {
        stepNumber: "03",
        title: {
          en: "Approval in Principle & Qualifying Fulfilment",
          ml: "തത്വത്തിലുള്ള അംഗീകാരവും (Approval in Principle) നിബന്ധനകളും",
        },
        description: {
          en: "Approval in principle → residence, language ability, property.",
          ml: "തത്വത്തിലുള്ള അംഗീകാരം ലഭിച്ച ശേഷം താമസം (Residence), ഭാഷാ പരിജ്ഞാനം (Language ability), വസ്തു (Property) എന്നീ നിബന്ധനകൾ പൂർത്തിയാക്കുന്നു.",
        },
      },
      {
        stepNumber: "04",
        title: {
          en: "Final Review & Oath of Allegiance",
          ml: "അന്തിമ അവലോകനവും സത്യപ്രതിജ്ഞയും (Oath of Allegiance)",
        },
        description: {
          en: "Final review → Oath of Allegiance → citizenship.",
          ml: "അന്തിമ പരിശോധനയ്ക്ക് ശേഷം കൂറ് സത്യപ്രതിജ്ഞ (Oath of Allegiance) ചൊല്ലി പൗരത്വ പ്രക്രിയ പൂർത്തിയാക്കുന്നു.",
        },
      },
    ],
    eligibleProfiles: [
      {
        id: "scientists",
        label: { en: "Scientists", ml: "ശാസ്ത്രജ്ഞർ (Scientists)" },
        iconKey: "flask",
      },
      {
        id: "researchers",
        label: { en: "Researchers", ml: "ഗവേഷകർ (Researchers)" },
        iconKey: "search",
      },
      {
        id: "athletes",
        label: { en: "Athletes", ml: "കായികതാരങ്ങൾ (Athletes)" },
        iconKey: "trophy",
      },
      {
        id: "entrepreneurs",
        label: { en: "Entrepreneurs", ml: "സംരംഭകർ (Entrepreneurs)" },
        iconKey: "lightbulb",
      },
      {
        id: "artists",
        label: { en: "Artists", ml: "കലാകാരന്മാർ (Artists)" },
        iconKey: "palette",
      },
      {
        id: "technologists",
        label: { en: "Technologists", ml: "സാങ്കേതിക വിദഗ്ധർ (Technologists)" },
        iconKey: "cpu",
      },
      {
        id: "philanthropists",
        label: {
          en: "Philanthropists",
          ml: "ജീവകാരുണ്യ പ്രവർത്തകർ (Philanthropists)",
        },
        iconKey: "heartHandshake",
      },
    ],
    relatedServices: [
      "malta-permanent-residence",
      "global-residence-programme",
      "malta-retirement-programme",
    ],
    seo: {
      title:
        "Citizenship by Naturalisation on the Basis of Merit | LRS Legal & Relocation Services",
      description:
        "Learn about Maltese Citizenship by Naturalisation on the Basis of Merit under Article 10(9) of the Maltese Citizenship Act—process steps and eligible profiles.",
    },
  },
  {
    id: "malta-retirement-programme",
    code: "03",
    slug: "malta-retirement-programme",
    officialName: "Malta Retirement Programme (MRP)",
    abbreviation: "MRP",
    statutoryBasis: {
      en: "Tax Residence Programme • Pension Income Recipients",
      ml: "ടാക്സ് റസിഡൻസ് പ്രോഗ്രാം • പെൻഷൻ വരുമാനമുള്ളവർക്ക്",
    },
    category: {
      en: "PROGRAMME 03 • RETIREMENT TAX RESIDENCE",
      ml: "പ്രോഗ്രാം 03 • റിട്ടയർമെന്റ് ടാക്സ് റസിഡൻസ് (MRP)",
    },
    title: {
      en: "Malta Retirement Programme (MRP)",
      ml: "മാൾട്ട റിട്ടയർമെന്റ് പ്രോഗ്രാം (MRP)",
    },
    shortDescription: {
      en: "Tax residence programme for retirees receiving pension income.",
      ml: "പെൻഷൻ വരുമാനം സ്വീകരിക്കുന്ന വിരമിച്ച വ്യക്തികൾക്കായുള്ള ടാക്സ് റസിഡൻസ് പ്രോഗ്രാം.",
    },
    introduction: {
      en: "The Malta Retirement Programme (MRP) is a specialized tax residence programme structured for retirees receiving pension income. LRS assists retirees in assessing pension income thresholds, securing qualifying Maltese property, and coordinating health insurance and statutory compliance.",
      ml: "പെൻഷൻ വരുമാനം ലഭിക്കുന്ന വിരമിച്ച വ്യക്തികൾക്കായി മാൾട്ടയിലുള്ള പ്രത്യേക ടാക്സ് റസിഡൻസ് പദ്ധതിയാണ് മാൾട്ട റിട്ടയർമെന്റ് പ്രോഗ്രാം (MRP). പെൻഷൻ വരുമാന അനുപാതം പരിശോധിക്കുന്നതിലും യോഗ്യമായ താമസസ്ഥലവും ഇൻഷുറൻസ് രേഖകളും ക്രമീകരിക്കുന്നതിലും LRS സഹായം നൽകുന്നു.",
    },
    image: "/images/service-relocation.jpg",
    secondaryImage: "/images/hero-2.jpg",
    imageAlt: {
      en: "Tranquil Mediterranean coastal residence representing the Malta Retirement Programme (MRP)",
      ml: "മാൾട്ട റിട്ടയർമെന്റ് പ്രോഗ്രാമിനെ പ്രതിനിധീകരിക്കുന്ന ശാന്തമായ ഭവന ദൃശ്യം",
    },
    featured: true,
    overview: {
      en: "Under the Malta Retirement Programme (MRP), qualifying beneficiaries enjoy a 15% tax rate on foreign income remitted to Malta, subject to a minimum annual tax of €7,500 plus €500 per dependant, with foreign capital gains exempt from Maltese tax. To qualify, pension income must constitute 75% of total chargeable income, alongside property, non-domicile, health insurance, and fit-and-proper criteria.",
      ml: "മാൾട്ട റിട്ടയർമെന്റ് പ്രോഗ്രാം (MRP) പ്രകാരം മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് 15% നികുതി നിരക്കാണ് ബാധകമാകുന്നത് (കുറഞ്ഞ നികുതി €7,500 + ഓരോ ആശ്രിതർക്കും €500). വിദേശ മൂലധന നേട്ടങ്ങൾക്ക് (Foreign capital gains) നികുതി ചുമത്തുന്നതല്ല. അപേക്ഷകന്റെ ആകെ നികുതി വിധേയമായ വരുമാനത്തിന്റെ 75% പെൻഷൻ ആയിരിക്കണം.",
    },
    highlights: [
      {
        label: {
          en: "Remitted Foreign Income Rate",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാന നികുതി",
        },
        value: {
          en: "15% tax on foreign income remitted to Malta",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് 15% നികുതി",
        },
      },
      {
        label: {
          en: "Minimum Annual Tax",
          ml: "കുറഞ്ഞ വാർഷിക നികുതി",
        },
        value: {
          en: "Min tax: €7,500 (+ €500 per dependant)",
          ml: "കുറഞ്ഞ നികുതി: €7,500 (+ ഓരോ ആശ്രിതർക്കും €500 വീതം)",
        },
      },
      {
        label: {
          en: "Capital Gains Treatment",
          ml: "മൂലധന നേട്ട നികുതി (Capital Gains)",
        },
        value: {
          en: "Foreign capital gains not taxed",
          ml: "വിദേശ മൂലധന നേട്ടങ്ങൾക്ക് നികുതിയില്ല",
        },
      },
      {
        label: {
          en: "Core Pension Criterion",
          ml: "പ്രധാന പെൻഷൻ നിബന്ധന",
        },
        value: {
          en: "Pension = 75% of total chargeable income",
          ml: "പെൻഷൻ = ആകെ നികുതി വിധേയ വരുമാനത്തിന്റെ 75%",
        },
      },
    ],
    eligibility: [
      {
        en: "Pension = 75% of total chargeable income",
        ml: "പെൻഷൻ = ആകെ നികുതി വിധേയ വരുമാനത്തിന്റെ 75% (Pension = 75% of total chargeable income)",
      },
      {
        en: "Qualifying property",
        ml: "നിശ്ചിത യോഗ്യതയുള്ള വസ്തു (Qualifying property)",
      },
      {
        en: "Not domiciled in Malta",
        ml: "മാൾട്ടയിൽ സ്ഥിരവാസമല്ലാത്തവർ (Not domiciled in Malta)",
      },
      {
        en: "Full health insurance",
        ml: "സമ്പൂർണ്ണ ആരോഗ്യ ഇൻഷുറൻസ് പരിരക്ഷ (Full health insurance)",
      },
      {
        en: "Fit and proper",
        ml: "'Fit and proper' യോഗ്യതാ പരിശോധന പാസാകണം",
      },
    ],
    taxHeading: {
      en: "Tax Benefits (Official Brochure Summary)",
      ml: "നികുതി ആനുകൂല്യങ്ങൾ (Tax Benefits)",
    },
    taxBenefits: [
      {
        en: "15% tax on foreign income remitted to Malta",
        ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് 15% നികുതി",
      },
      {
        en: "Min tax: €7,500 (+ €500 per dependant)",
        ml: "കുറഞ്ഞ നികുതി: €7,500 (+ ഓരോ ആശ്രിതർക്കും €500 വീതം)",
      },
      {
        en: "Foreign capital gains not taxed",
        ml: "വിദേശ മൂലധന നേട്ടങ്ങൾക്ക് (Foreign capital gains) നികുതിയില്ല",
      },
    ],
    relatedServices: [
      "global-residence-programme",
      "malta-permanent-residence",
      "citizenship-by-merit",
    ],
    seo: {
      title: "Malta Retirement Programme (MRP) | LRS Legal & Relocation Services",
      description:
        "Explore the Malta Retirement Programme (MRP)—a tax residence programme for retirees receiving pension income with 15% tax on foreign income remitted to Malta.",
    },
  },
  {
    id: "global-residence-programme",
    code: "04",
    slug: "global-residence-programme",
    officialName: "Global Residence Programme (GRP)",
    abbreviation: "GRP",
    statutoryBasis: {
      en: "Tax Residence Framework • Third-Country Nationals",
      ml: "ടാക്സ് റസിഡൻസ് പ്രോഗ്രാം • മൂന്നാം രാജ്യ പൗരന്മാർക്ക്",
    },
    category: {
      en: "PROGRAMME 04 • GLOBAL RESIDENCE",
      ml: "പ്രോഗ്രാം 04 • ഗ്ലോബൽ റസിഡൻസ് (GRP)",
    },
    title: {
      en: "Global Residence Programme (GRP)",
      ml: "ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാം (GRP)",
    },
    shortDescription: {
      en: "Tax residence programme for third-country nationals not domiciled in Malta, featuring a 15% tax treatment on foreign income remitted to Malta.",
      ml: "മാൾട്ടയിൽ സ്ഥിരവാസമല്ലാത്ത മൂന്നാം രാജ്യ പൗരന്മാർക്ക് മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് 15% നികുതി നിരക്ക് വ്യവസ്ഥ ചെയ്യുന്ന പ്രോഗ്രാം.",
    },
    introduction: {
      en: "The Global Residence Programme (GRP) provides a dedicated Maltese tax treatment and residence structure for third-country nationals who are not domiciled in Malta. In accordance with the official LRS brochure, the verified eligibility criteria, tax treatment parameters, and ongoing annual obligations are presented below.",
      ml: "മാൾട്ടയിൽ സ്ഥിരവാസമല്ലാത്ത മൂന്നാം രാജ്യ പൗരന്മാർക്കുള്ള (Third-country nationals) പ്രത്യേക നികുതി-റസിഡൻസ് പദ്ധതിയാണ് ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാം (GRP). ഔദ്യോഗിക LRS ബ്രോഷറിൽ ഉൾപ്പെടുത്തിയിട്ടുള്ള യോഗ്യതാ നിബന്ധനകളും നികുതി വ്യവസ്ഥകളും വാർഷിക കംപ്ലയൻസ് വിവരങ്ങളും താഴെ നൽകുന്നു.",
    },
    image: "/images/service-corporate.jpg",
    secondaryImage: "/images/hero-1.jpg",
    imageAlt: {
      en: "International architectural atrium representing the Global Residence Programme (GRP)",
      ml: "ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാമിനെ സൂചിപ്പിക്കുന്ന അന്താരാഷ്ട്ര വാസ്തുവിദ്യാ ദൃശ്യം",
    },
    featured: true,
    highlights: [
      {
        label: {
          en: "Remitted Foreign Income Tax",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാന നികുതി",
        },
        value: {
          en: "15% on foreign income remitted to Malta",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് 15%",
        },
      },
      {
        label: {
          en: "Minimum Annual Tax",
          ml: "കുറഞ്ഞ വാർഷിക നികുതി",
        },
        value: {
          en: "Min annual tax €15,000",
          ml: "കുറഞ്ഞ വാർഷിക നികുതി €15,000",
        },
      },
      {
        label: {
          en: "Unremitted & Capital Gains",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കാത്ത വരുമാനവും മൂലധന നേട്ടവും",
        },
        value: {
          en: "Unremitted foreign income & foreign capital gains not taxed",
          ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കാത്ത വിദേശ വരുമാനത്തിനും മൂലധന നേട്ടത്തിനും നികുതിയില്ല",
        },
      },
      {
        label: {
          en: "Eligible Nationalities",
          ml: "അപേക്ഷക യോഗ്യത",
        },
        value: {
          en: "Third-country nationals only (not domiciled in Malta)",
          ml: "മൂന്നാം രാജ്യ പൗരന്മാർക്ക് മാത്രം (മാൾട്ടയിൽ സ്ഥിരവാസമല്ലാത്തവർ)",
        },
      },
    ],
    eligibility: [
      {
        en: "Not domiciled in Malta",
        ml: "മാൾട്ടയിൽ സ്ഥിരവാസമല്ലാത്തവർ (Not domiciled in Malta)",
      },
      {
        en: "Qualifying property",
        ml: "നിശ്ചിത യോഗ്യതയുള്ള വസ്തു (Qualifying property)",
      },
      {
        en: "Health insurance",
        ml: "ആരോഗ്യ ഇൻഷുറൻസ് പരിരക്ഷ (Health insurance)",
      },
      {
        en: "Fit-and-proper",
        ml: "'Fit-and-proper' പരിശോധന യോഗ്യത",
      },
      {
        en: "Third-country nationals only",
        ml: "മൂന്നാം രാജ്യ പൗരന്മാർക്ക് മാത്രം (Third-country nationals only)",
      },
    ],
    taxHeading: {
      en: "Tax Treatment (Official Brochure Schedule)",
      ml: "നികുതി വ്യവസ്ഥകൾ (Tax Treatment)",
    },
    taxBenefits: [
      {
        en: "15% on foreign income remitted to Malta",
        ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കുന്ന വിദേശ വരുമാനത്തിന് 15% നികുതി",
      },
      {
        en: "Min annual tax €15,000",
        ml: "കുറഞ്ഞ വാർഷിക നികുതി €15,000",
      },
      {
        en: "Foreign income not remitted → not taxed",
        ml: "മാൾട്ടയിലേക്ക് അയയ്ക്കാത്ത വിദേശ വരുമാനത്തിന് നികുതിയില്ല",
      },
      {
        en: "Foreign capital gains not taxed",
        ml: "വിദേശ മൂലധന നേട്ടങ്ങൾക്ക് (Foreign capital gains) നികുതിയില്ല",
      },
      {
        en: "Maltese-source income taxable",
        ml: "മാൾട്ടയിൽ നിന്നുള്ള വരുമാനത്തിന് (Maltese-source income) നികുതി ബാധകമാണ്",
      },
    ],
    conditionsHeading: {
      en: "Ongoing Tax & Regulatory Obligations",
      ml: "വാർഷിക നികുതി-കംപ്ലയൻസ് നിബന്ധനകൾ",
    },
    conditions: [
      {
        en: "Annual tax filing",
        ml: "വാർഷിക നികുതി റിട്ടേൺ സമർപ്പണം (Annual tax filing)",
      },
      {
        en: "Maintain property & insurance",
        ml: "യോഗ്യമായ വസ്തുവും ആരോഗ്യ ഇൻഷുറൻസും നിലനിർത്തുക",
      },
      {
        en: "Notify authority of changes",
        ml: "സാഹചര്യങ്ങളിലുണ്ടാകുന്ന മാറ്റങ്ങൾ അധികാരികളെ അറിയിക്കുക",
      },
    ],
    relatedServices: [
      "malta-retirement-programme",
      "malta-permanent-residence",
      "citizenship-by-merit",
    ],
    seo: {
      title: "Global Residence Programme (GRP) | LRS Legal & Relocation Services",
      description:
        "Review the Malta Global Residence Programme (GRP) eligibility, 15% remitted foreign income tax treatment, and annual compliance obligations with LRS.",
    },
  },
];
