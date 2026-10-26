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
    imageCaptionTitle: string;
    imageCaptionSubtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  history: {
    sectionLabel: string;
    headline: string;
    description: string;
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
    prevPartnerLabel: string;
    nextPartnerLabel: string;
  };
}

export interface ServicesPageTranslations {
  hero: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  intro: {
    sectionLabel: string;
    headline: string;
    leadParagraph: string;
    secondaryParagraph: string;
    captionBadge: string;
    captionTitle: string;
    captionLocation: string;
    metrics: {
      value: string;
      label: string;
    }[];
  };
  collection: {
    sectionLabel: string;
    headline: string;
    description: string;
    keyParametersLabel: string;
    viewServiceCta: string;
    inquireServiceCta: string;
    officialCodePrefix: string;
  };
  cta: {
    sectionLabel: string;
    headline: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    officeLabel: string;
    emailLabel: string;
    phoneLabel: string;
    regulatoryNote: string;
  };
  detail: {
    backToServices: string;
    officialProgrammeLabel: string;
    editorialIntroLabel: string;
    overviewSectionLabel: string;
    overviewHeadline: string;
    highlightsSectionLabel: string;
    highlightsHeadline: string;
    eligibilitySectionLabel: string;
    eligibilityHeadline: string;
    processSectionLabel: string;
    processHeadline: string;
    profilesSectionLabel: string;
    profilesHeadline: string;
    visualSectionLabel: string;
    visualCaption: string;
    faqSectionLabel: string;
    faqHeadline: string;
    officialNoticeBadge: string;
    officialNoticeBody: string;
    sidebarCardTitle: string;
    sidebarCardSubtitle: string;
    sidebarPrimaryCta: string;
    sidebarSecondaryCta: string;
    relatedSectionLabel: string;
    relatedHeadline: string;
    notFoundTitle: string;
    notFoundDescription: string;
  };
}

export type ContactServiceKey =
  | "mprp"
  | "citizenship-by-merit"
  | "mrp"
  | "grp"
  | "corporate-relocation"
  | "real-estate-tenancy"
  | "general-inquiry";

export interface ContactPageTranslations {
  hero: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    headline: string;
    leadParagraph: string;
    secondaryParagraph: string;
    coordinatesHeading: string;
    coordinatesBadge: string;
    officeLabel: string;
    officeValue: string;
    emailLabel: string;
    emailValue: string;
    phoneLabel: string;
    phoneValue: string;
    hoursLabel: string;
    hoursValue: string;
    imageAlt: string;
    secondaryImageAlt: string;
    imageCaptionBadge: string;
    imageCaptionTitle: string;
    imageCaptionSubtitle: string;
    secondaryFrameLabel: string;
    secondaryFrameDescription: string;
  };
  formSection: {
    eyebrow: string;
    headline: string;
    description: string;
    confidentialityNote: string;
    requiredIndicator: string;
    optionalIndicator: string;
    fields: {
      fullNameLabel: string;
      fullNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      serviceOptions: Record<ContactServiceKey, string>;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      privacyConsentLabel: string;
    };
    validation: {
      formErrorsSummary: string;
      fullNameRequired: string;
      fullNameMinLength: string;
      emailRequired: string;
      emailInvalid: string;
      phoneInvalid: string;
      subjectRequired: string;
      subjectMinLength: string;
      messageRequired: string;
      messageMinLength: string;
      privacyConsentRequired: string;
    };
    actions: {
      submitButton: string;
      submittingButton: string;
      retryButton: string;
      resetButton: string;
      directEmailCta: string;
      directPhoneCta: string;
    };
    states: {
      loadingTitle: string;
      loadingDescription: string;
      successTitle: string;
      successDescription: string;
      errorTitle: string;
      errorDescription: string;
      rateLimitedDescription: string;
      configRequiredBadge: string;
      configRequiredTitle: string;
      configRequiredDescription: string;
      configRequiredTechnicalNote: string;
    };
    sidebar: {
      eyebrow: string;
      title: string;
      description: string;
      steps: {
        number: string;
        title: string;
        detail: string;
      }[];
      directDeskLabel: string;
      directDeskNote: string;
    };
    aria: {
      formLabel: string;
      breadcrumbLabel: string;
      statusRegionLabel: string;
    };
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
  };
  aboutPage: AboutPageTranslations;
  servicesPage: ServicesPageTranslations;
  contactPage: ContactPageTranslations;
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
        "Explore our core advisory pillars and official Malta residency, tax, and citizenship pathways structured for international investors, retirees, and global professionals.",
      sampleNotice: "Editable Sample Practice Areas — Autoplay Loop Enabled",
      exploreLink: "Explore Service",
      viewAllCta: "Explore All Malta Programmes",
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
        "Malta Permanent Residence Programme (MPRP)",
        "Citizenship by Naturalisation on the Basis of Merit",
        "Malta Retirement Programme (MRP)",
        "Global Residence Programme (GRP)",
        "Corporate Legal & Relocation Advisory",
      ],
      messageLabel: "Brief Outline of Requirements",
      messagePlaceholder:
        "Please describe your timeline, jurisdiction, or relocation destination...",
      submitButton: "Submit Confidential Inquiry",
      successMessage:
        "Thank you. Your inquiry has been recorded in this interactive preview. In production, wire this handler to your preferred email or CRM endpoint.",
      placeholderContactNotice: "MALTA & GLOBAL ADVISORY DESK — LRS",
      officeLabel: "Valletta Advisory Chambers",
      officeValue: "32A Scots House, South Street, Valletta, VLT1101, Malta",
      emailTitle: "Advisory Desk Email",
      emailValue: "info@lrs-global.com",
      phoneTitle: "Direct Consultation Line",
      phoneValue: "+356 99980989",
      hoursTitle: "Consultation Hours",
      hoursValue: "Monday – Friday, 09:00 – 18:00 CET",
    },
    footer: {
      brandStatement:
        "LRS — Legal & Relocation Services delivers cohesive legal counsel, Malta residency and tax programme advisory, and bespoke destination management for private clients and businesses.",
      navigationHeading: "Navigation",
      practiceHeading: "Malta Programmes",
      contactHeading: "Valletta Coordinates",
      placeholderBadge: "LRS Malta Advisory Desk",
      copyright: `© ${new Date().getFullYear()} LRS Legal & Relocation Services. All rights reserved.`,
      privacyPolicy: "Privacy Policy",
      termsOfEngagement: "Terms of Engagement",
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
        prevPartnerLabel: "Previous partner slide",
        nextPartnerLabel: "Next partner slide",
      },
    },
    servicesPage: {
      hero: {
        breadcrumbHome: "Home",
        breadcrumbCurrent: "Services",
        eyebrow: "MALTA RESIDENCY, TAX & CITIZENSHIP ADVISORY",
        title: "Malta Residency & Tax Programmes",
        subtitle:
          "Your pathway to secure living, investment, and global mobility—structured with statutory precision by LRS Legal & Relocation Services.",
      },
      intro: {
        sectionLabel: "01 / ADVISORY MANDATE & PROGRAMME PORTFOLIO",
        headline:
          "Structured Pathways to Maltese Residency, Tax Status, and Merit Naturalisation.",
        leadParagraph:
          "LRS Legal & Relocation Services advises international investors, retirees, and high-achievement professionals across Malta's core residency, special tax status, and naturalisation frameworks.",
        secondaryParagraph:
          "Each programme is governed by distinct statutory rules—ranging from qualifying five-year property holdings and capital asset thresholds under the MPRP to pension remittance tax treatment under the MRP, Global Residence tax status, and Article 10(9) merit naturalisation.",
        captionBadge: "MALTA ADVISORY PORTFOLIO",
        captionTitle: "LRS Valletta Chambers",
        captionLocation: "32A Scots House, South Street, Valletta, VLT1101, Malta",
        metrics: [
          {
            value: "04",
            label: "Official Malta Residency, Tax & Citizenship Frameworks",
          },
          {
            value: "Valletta",
            label: "32A Scots House, South Street, VLT1101, Malta",
          },
          {
            value: "EN / ML",
            label: "Bilingual Legal & Relocation Client Stewardship",
          },
        ],
      },
      collection: {
        sectionLabel: "02 / PROGRAMME DIRECTORY",
        headline: "Explore Our Four Malta Residency & Citizenship Programmes.",
        description:
          "Select a programme below to inspect its verified eligibility criteria, qualifying property and financial conditions, tax parameters, or evaluation stages.",
        keyParametersLabel: "Key Programme Highlights",
        viewServiceCta: "Explore Programme Details",
        inquireServiceCta: "Direct Inquiry",
        officialCodePrefix: "PROGRAMME",
      },
      cta: {
        sectionLabel: "03 / NEXT STEP & CONFIDENTIAL CONSULTATION",
        headline: "Begin a Tailored Programme Assessment with LRS.",
        description:
          "Connect with our Valletta advisory team to discuss which Maltese residency, retirement, tax, or merit citizenship framework aligns with your personal and financial profile.",
        primaryButton: "Contact Us for a Consultation",
        secondaryButton: "Speak with Valletta Desk",
        officeLabel: "Valletta Chambers",
        emailLabel: "Advisory Email",
        phoneLabel: "Direct Line",
        regulatoryNote:
          "Programme summaries reflect the LRS Malta Residency & Tax Programmes brochure for informational orientation and do not constitute formal legal or tax advice, nor a guarantee of residency or citizenship approval.",
      },
      detail: {
        backToServices: "All Malta Programmes",
        officialProgrammeLabel: "Official Programme Designation",
        editorialIntroLabel: "LRS Advisory Introduction",
        overviewSectionLabel: "01 / PROGRAMME OVERVIEW",
        overviewHeadline: "Statutory Scope & Structure",
        highlightsSectionLabel: "02 / KEY INFORMATION & HIGHLIGHTS",
        highlightsHeadline: "At-a-Glance Programme Parameters",
        eligibilitySectionLabel: "03 / ELIGIBILITY & STATUTORY CONDITIONS",
        eligibilityHeadline: "Verified Eligibility & Programme Requirements",
        processSectionLabel: "04 / APPLICATION & EVALUATION PROCESS",
        processHeadline: "Four-Stage Statutory Progression",
        profilesSectionLabel: "ELIGIBLE CANDIDATE PROFILES",
        profilesHeadline: "Recognized Fields of Merit Under Article 10(9)",
        visualSectionLabel: "ARCHITECTURAL & JURISDICTIONAL PERSPECTIVE",
        visualCaption:
          "LRS coordinates documentation, qualifying property compliance, and statutory filings from Valletta, Malta.",
        faqSectionLabel: "FREQUENTLY ASKED QUESTIONS",
        faqHeadline: "Verified Programme Clarifications",
        officialNoticeBadge: "DISTINCTION OF OFFICIAL PROGRAMME INFORMATION & LEGAL NOTICE",
        officialNoticeBody:
          "Eligibility criteria, tax rates, property thresholds, and government contribution figures displayed on this page summarize the official LRS Malta Residency & Tax Programmes brochure for general informational reference. They are distinct from individualized legal or tax counsel, remain subject to updates by Maltese statutory authorities, and never guarantee residency or citizenship approval.",
        sidebarCardTitle: "Request a Programme Consultation",
        sidebarCardSubtitle:
          "Discuss eligibility documentation, qualifying property options, and dependent structuring with LRS.",
        sidebarPrimaryCta: "Inquire About This Programme",
        sidebarSecondaryCta: "Email Valletta Advisory Desk",
        relatedSectionLabel: "COMPLEMENTARY PATHWAYS",
        relatedHeadline: "Explore Other Malta Programmes",
        notFoundTitle: "Programme Not Found",
        notFoundDescription:
          "The requested Malta residency or citizenship programme could not be located. Please return to the Services directory to view all available programmes.",
      },
    },
    contactPage: {
      hero: {
        breadcrumbHome: "Home",
        breadcrumbCurrent: "Contact",
        eyebrow: "DIRECT ADVISORY & CLIENT DESK • LRS",
        title: "Contact Us",
        subtitle:
          "Connect with our Valletta chambers and global mobility specialists for tailored legal, residency, and relocation counsel.",
        imageAlt:
          "LRS Legal & Relocation Services architectural reception and international advisory chambers",
      },
      intro: {
        eyebrow: "LET'S CONNECT",
        headline: "Let's Make Your Next Move Easier.",
        leadParagraph:
          "Whether you're planning a relocation, looking for professional guidance, or exploring our services, we're here to help. Share your requirements with us, and our team will guide you through the next steps.",
        secondaryParagraph:
          "From Malta residency, retirement, and tax programmes to corporate structuring, property due diligence, and family settling-in, every inquiry is reviewed directly by our senior advisory desk with strict confidentiality.",
        coordinatesHeading: "Verified Valletta Chambers & Direct Coordinates",
        coordinatesBadge: "MALTA & GLOBAL ADVISORY DESK — LRS",
        officeLabel: "Office Address",
        officeValue: "32A Scots House, South Street, Valletta, VLT1101, Malta",
        emailLabel: "Advisory Email",
        emailValue: "info@lrs-global.com",
        phoneLabel: "Direct Telephone",
        phoneValue: "+356 99980989",
        hoursLabel: "Business Hours",
        hoursValue: "Monday – Friday, 09:00 – 18:00 CET",
        imageAlt:
          "LRS Legal & Relocation Services private consultation suite and editorial interior",
        secondaryImageAlt:
          "Bespoke legal portfolio and compass representing cross-border statutory precision",
        imageCaptionBadge: "VALLETTA CHAMBERS • MALTA",
        imageCaptionTitle: "LRS Principal Advisory Desk",
        imageCaptionSubtitle: "32A Scots House, South Street, Valletta, VLT1101, Malta",
        secondaryFrameLabel: "SINGLE-WINDOW STEWARDSHIP",
        secondaryFrameDescription:
          "Coordinated legal representation, residency filings, and destination management under one roof.",
      },
      formSection: {
        eyebrow: "GET IN TOUCH",
        headline: "Tell Us How We Can Help.",
        description:
          "Fill out the form below and share a few details about your enquiry.",
        confidentialityNote:
          "All submissions are handled with strict legal and private-client discretion.",
        requiredIndicator: "Required",
        optionalIndicator: "Optional",
        fields: {
          fullNameLabel: "Full Name",
          fullNamePlaceholder: "e.g., Arjun Nair",
          emailLabel: "Email Address",
          emailPlaceholder: "name@organization.com",
          phoneLabel: "Phone Number",
          phonePlaceholder: "+356 9998 0989 or +91 98470 00000",
          serviceLabel: "Service Interested In",
          servicePlaceholder: "Select a programme or advisory service (optional)",
          serviceOptions: {
            mprp: "Malta Permanent Residence Programme (MPRP)",
            "citizenship-by-merit":
              "Citizenship by Naturalisation on the Basis of Merit",
            mrp: "Malta Retirement Programme (MRP)",
            grp: "Global Residence Programme (GRP)",
            "corporate-relocation": "Corporate Legal & Executive Relocation Advisory",
            "real-estate-tenancy": "Real Estate Due Diligence & Qualifying Property",
            "general-inquiry": "General Legal or Mobility Consultation",
          },
          subjectLabel: "Subject",
          subjectPlaceholder: "e.g., MPRP Eligibility & Property Consultation",
          messageLabel: "Message",
          messagePlaceholder:
            "Please share your preferred timeline, family or corporate requirements, and any specific questions...",
          privacyConsentLabel:
            "I consent to LRS Legal & Relocation Services processing the details provided above to respond to my inquiry in accordance with the Privacy Policy and Terms of Engagement.",
        },
        validation: {
          formErrorsSummary:
            "Please review the highlighted fields below before submitting your inquiry.",
          fullNameRequired: "Please enter your full name.",
          fullNameMinLength: "Full name must be at least 2 characters.",
          emailRequired: "Please enter your email address.",
          emailInvalid: "Please enter a valid email address (e.g., name@domain.com).",
          phoneInvalid:
            "Please enter a valid phone number (7 to 20 digits; + and spaces allowed).",
          subjectRequired: "Please enter a subject for your inquiry.",
          subjectMinLength: "Subject must be at least 3 characters.",
          messageRequired: "Please enter your message or inquiry details.",
          messageMinLength:
            "Please provide at least 15 characters so our team can assist you effectively.",
          privacyConsentRequired:
            "Please confirm your consent so we may process and respond to your inquiry.",
        },
        actions: {
          submitButton: "Send Message",
          submittingButton: "Sending Inquiry...",
          retryButton: "Try Again",
          resetButton: "Submit Another Inquiry",
          directEmailCta: "Send via Direct Email",
          directPhoneCta: "Call Valletta Desk",
        },
        states: {
          loadingTitle: "Transmitting Your Inquiry",
          loadingDescription:
            "Please wait a moment while we securely forward your details to the LRS advisory desk.",
          successTitle: "Your Message Has Been Sent",
          successDescription:
            "Thank you for contacting LRS Legal & Relocation Services. Our Valletta advisory team has received your inquiry and will respond shortly.",
          errorTitle: "Unable to Complete Submission",
          errorDescription:
            "We encountered a technical issue while transmitting your message. Please try again or reach our advisory desk directly via email or telephone.",
          rateLimitedDescription:
            "Too many submission attempts were detected from your connection. Please wait a minute before trying again, or email us directly at info@lrs-global.com.",
          configRequiredBadge: "BACKEND DELIVERY ENDPOINT NOT CONFIGURED",
          configRequiredTitle: "Direct Email Delivery Service Required",
          configRequiredDescription:
            "Your inquiry passed all validation checks, but live server-side email or webhook delivery has not been configured in this environment yet. No message was transmitted automatically. You can send your prepared inquiry immediately using your email client below or reach us by phone.",
          configRequiredTechnicalNote:
            "Administrator note: Configure CONTACT_WEBHOOK_URL or RESEND_API_KEY + CONTACT_RECEIVER_EMAIL in the server environment (.env.local) to enable live form delivery via POST /api/contact.",
        },
        sidebar: {
          eyebrow: "WHAT TO EXPECT",
          title: "Structured Advisory Response Protocol",
          description:
            "Every inquiry is routed to the appropriate legal or relocation specialist in our Valletta chambers.",
          steps: [
            {
              number: "01",
              title: "Preliminary Mandate Review",
              detail:
                "We assess your jurisdiction, timeline, and programme or corporate objectives.",
            },
            {
              number: "02",
              title: "Confidential Advisory Call",
              detail:
                "Schedule a private consultation to review statutory eligibility and qualifying property or corporate steps.",
            },
            {
              number: "03",
              title: "Tailored Execution Roadmap",
              detail:
                "Receive a clear scope of documentation, timelines, and single-window onboarding.",
            },
          ],
          directDeskLabel: "Prefer Direct Correspondence?",
          directDeskNote:
            "For urgent consular, property, or corporate filings, contact our Valletta chambers directly during business hours.",
        },
        aria: {
          formLabel: "Client Consultation and Contact Form",
          breadcrumbLabel: "Breadcrumb",
          statusRegionLabel: "Form submission status",
        },
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
        "ഞങ്ങളുടെ പ്രധാന സേവന മേഖലകളും മാൾട്ട റസിഡൻസി, ടാക്സ്, പൗരത്വ പദ്ധതികളും താഴെ പരിചയപ്പെടാം.",
      sampleNotice: "എഡിറ്റ് ചെയ്യാവുന്ന മാതൃകാ സേവനങ്ങൾ • ഓട്ടോപ്ലേ കറൗസൽ",
      exploreLink: "കൂടുതൽ അറിയുക",
      viewAllCta: "എല്ലാ മാൾട്ട പ്രോഗ്രാമുകളും കാണുക",
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
        "മാൾട്ട റസിഡൻസി, ടാക്സ് പ്രോഗ്രാമുകൾ അല്ലെങ്കിൽ റീലൊക്കേഷൻ സംബന്ധമായ ആവശ്യങ്ങൾ താഴെ രേഖപ്പെടുത്താം.",
      formTitle: "കൺസൾട്ടേഷൻ അപേക്ഷ",
      nameLabel: "പേര് / സ്ഥാപനം",
      namePlaceholder: "ഉദാ: അർജുൻ നായർ / ഹൊറൈസൺ ഗ്ലോബൽ",
      emailLabel: "ഇമെയിൽ വിലാസം",
      emailPlaceholder: "name@organization.com",
      serviceLabel: "ആവശ്യമായ സേവന വിഭാഗം",
      serviceOptions: [
        "മാൾട്ട പെർമനന്റ് റസിഡൻസ് പ്രോഗ്രാം (MPRP)",
        "യോഗ്യതയുടെ അടിസ്ഥാനത്തിലുള്ള പൗരത്വം (Citizenship by Merit)",
        "മാൾട്ട റിട്ടയർമെന്റ് പ്രോഗ്രാം (MRP)",
        "ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാം (GRP)",
        "സംയോജിത നിയമ-റീലൊക്കേഷൻ ഉപദേശം",
      ],
      messageLabel: "ആവശ്യങ്ങളുടെ ലഘു വിവരണം",
      messagePlaceholder:
        "നിങ്ങളുടെ സമയക്രമം, സ്ഥലം അല്ലെങ്കിൽ ആവശ്യമായ സേവനങ്ങളെക്കുറിച്ച് ചുരുക്കത്തിൽ എഴുതുക...",
      submitButton: "അപേക്ഷ സമർപ്പിക്കുക",
      successMessage:
        "നന്ദി! നിങ്ങളുടെ സന്ദേശം ഈ പ്രിവ്യൂവിൽ രേഖപ്പെടുത്തിയിട്ടുണ്ട്. പ്രൊഡക്ഷൻ സൈറ്റിൽ ഇത് നിങ്ങളുടെ ഇമെയിൽ അല്ലെങ്കിൽ സി.ആർ.എം (CRM) സിസ്റ്റവുമായി ബന്ധിപ്പിക്കാവുന്നതാണ്.",
      placeholderContactNotice: "മാൾട്ട & ഗ്ലോബൽ അഡ്വൈസറി ഡെസ്ക് — LRS",
      officeLabel: "വലേറ്റ ഓഫീസ് വിലാസം",
      officeValue: "32A Scots House, South Street, Valletta, VLT1101, Malta",
      emailTitle: "ഇമെയിൽ",
      emailValue: "info@lrs-global.com",
      phoneTitle: "ഫോൺ നമ്പർ",
      phoneValue: "+356 99980989",
      hoursTitle: "പ്രവർത്തന സമയം",
      hoursValue: "തിങ്കൾ – വെള്ളി, രാവിലെ 09:00 – വൈകുന്നേരം 06:00 CET",
    },
    footer: {
      brandStatement:
        "വാണിജ്യ സ്ഥാപനങ്ങൾക്കും വ്യക്തികൾക്കും വിശ്വസനീയമായ നിയമോപദേശവും മാൾട്ട റസിഡൻസി-റീലൊക്കേഷൻ സേവനങ്ങളും LRS (Legal & Relocation Services) ഉറപ്പാക്കുന്നു.",
      navigationHeading: "പ്രധാന പേജുകൾ",
      practiceHeading: "മാൾട്ട പ്രോഗ്രാമുകൾ",
      contactHeading: "വലേറ്റ ഓഫീസ് വിലാസം",
      placeholderBadge: "LRS മാൾട്ട അഡ്വൈസറി ഡെസ്ക്",
      copyright: `© ${new Date().getFullYear()} LRS Legal & Relocation Services. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.`,
      privacyPolicy: "സ്വകാര്യതാ നയം",
      termsOfEngagement: "സേവന നിബന്ധനകൾ",
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
        prevPartnerLabel: "മുമ്പത്തെ പാർട്ണർ സ്ലൈഡ്",
        nextPartnerLabel: "അടുത്ത പാർട്ണർ സ്ലൈഡ്",
      },
    },
    servicesPage: {
      hero: {
        breadcrumbHome: "ഹോം",
        breadcrumbCurrent: "സേവനങ്ങൾ",
        eyebrow: "മാൾട്ട റസിഡൻസി, ടാക്സ് & പൗരത്വ പദ്ധതികൾ",
        title: "മാൾട്ട റസിഡൻസി & ടാക്സ് പ്രോഗ്രാമുകൾ",
        subtitle:
          "സുരക്ഷിതമായ താമസം, വസ്തു നിക്ഷേപം, ആഗോള മൊബിലിറ്റി എന്നിവയ്ക്കായുള്ള നിങ്ങളുടെ വഴികാട്ടി — LRS ലീഗൽ & റീലൊക്കേഷൻ സർവീസസ്.",
      },
      intro: {
        sectionLabel: "01 / സേവന പരിചയവും പ്രോഗ്രാം പോർട്ട്ഫോളിയോയും",
        headline:
          "മാൾട്ടയിലെ സ്ഥിരതാമസം, നികുതി ആനുകൂല്യങ്ങൾ, പൗരത്വം എന്നിവയ്ക്കായുള്ള സമഗ്ര പദ്ധതികൾ.",
        leadParagraph:
          "നിക്ഷേപകർ, പെൻഷൻ വരുമാനമുള്ള വിരമിച്ച വ്യക്തികൾ, വിവിധ മേഖലകളിലെ പ്രഗത്ഭരായ പ്രൊഫഷണലുകൾ എന്നിവർക്ക് മാൾട്ടയിലെ ഔദ്യോഗിക റസിഡൻസി, ടാക്സ്, പൗരത്വ പ്രോഗ്രാമുകളിലൂടെ കൃത്യമായ നിയമ-റീലൊക്കേഷൻ മാർഗ്ഗനിർദ്ദേശം LRS നൽകുന്നു.",
        secondaryParagraph:
          "വസ്തു നിക്ഷേപത്തിലും സർക്കാർ വിഹിതത്തിലും അധിഷ്ഠിതമായ MPRP, ആർട്ടിക്കിൾ 10(9) പ്രകാരമുള്ള മെറിറ്റ് പൗരത്വം, പെൻഷൻകാർക്കുള്ള മാൾട്ട റിട്ടയർമെന്റ് പ്രോഗ്രാം (MRP), ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാം (GRP) എന്നീ നാല് പദ്ധതികളുടെ ഔദ്യോഗിക വിവരങ്ങൾ താഴെ പരിശോധിക്കാം.",
        captionBadge: "മാൾട്ട അഡ്വൈസറി പോർട്ട്ഫോളിയോ",
        captionTitle: "LRS വലേറ്റ ചേംബർ",
        captionLocation: "32A Scots House, South Street, Valletta, VLT1101, Malta",
        metrics: [
          {
            value: "04",
            label: "ഔദ്യോഗിക മാൾട്ട റസിഡൻസി, ടാക്സ് & പൗരത്വ പ്രോഗ്രാമുകൾ",
          },
          {
            value: "Valletta",
            label: "32A സ്കോട്ട്സ് ഹൗസ്, സൗത്ത് സ്ട്രീറ്റ്, വലേറ്റ, മാൾട്ട",
          },
          {
            value: "EN / ML",
            label: "ഇംഗ്ലീഷ്, മലയാളം ഭാഷകളിൽ സമഗ്ര സേവന വിവരങ്ങൾ",
          },
        ],
      },
      collection: {
        sectionLabel: "02 / പ്രോഗ്രാം പട്ടിക",
        headline: "ഞങ്ങളുടെ നാല് മാൾട്ട റസിഡൻസി & പൗരത്വ പ്രോഗ്രാമുകൾ.",
        description:
          "ഓരോ പ്രോഗ്രാമിന്റെയും യോഗ്യതാ മാനദണ്ഡങ്ങൾ, വസ്തു നിക്ഷേപ-നികുതി വ്യവസ്ഥകൾ, അപേക്ഷാ ഘട്ടങ്ങൾ എന്നിവ വിശദമായി അറിയാൻ താഴെ നൽകിയ പ്രോഗ്രാമുകൾ തിരഞ്ഞെടുക്കുക.",
        keyParametersLabel: "പ്രധാന പ്രോഗ്രാം സവിശേഷതകൾ",
        viewServiceCta: "പ്രോഗ്രാം വിശദാംശങ്ങൾ കാണുക",
        inquireServiceCta: "അന്വേഷിക്കുക",
        officialCodePrefix: "പ്രോഗ്രാം",
      },
      cta: {
        sectionLabel: "03 / അടുത്ത ഘട്ടം • കൺസൾട്ടേഷൻ",
        headline: "നിങ്ങൾക്ക് അനുയോജ്യമായ മാൾട്ട പ്രോഗ്രാം തിരഞ്ഞെടുക്കാൻ LRS-മായി സംസാരിക്കാം.",
        description:
          "MPRP വസ്തു നിക്ഷേപം, MRP പെൻഷൻ നികുതി വ്യവസ്ഥകൾ, ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാം, അല്ലെങ്കിൽ മെറിറ്റ് അധിഷ്ഠിത പൗരത്വം എന്നിവയിൽ നിങ്ങളുടെ യോഗ്യത പരിശോധിക്കാൻ ഞങ്ങളുടെ വലേറ്റ അഡ്വൈസറി ഡെസ്കുമായി ബന്ധപ്പെടുക.",
        primaryButton: "കൺസൾട്ടേഷനായി ബന്ധപ്പെടുക",
        secondaryButton: "വലേറ്റ ഓഫീസിലേക്ക് വിളിക്കുക",
        officeLabel: "വലേറ്റ ഓഫീസ്",
        emailLabel: "ഇമെയിൽ വിലാസം",
        phoneLabel: "ഫോൺ നമ്പർ",
        regulatoryNote:
          "ഈ പേജുകളിലെ വിവരങ്ങൾ LRS-ന്റെ ഔദ്യോഗിക ബ്രോഷറിനെ അടിസ്ഥാനമാക്കി പ്രാഥമിക അറിവിലേക്ക് നൽകുന്നതാണ്. ഇത് ഔദ്യോഗിക നിയമ-നികുതി ഉപദേശമായോ താമസാനുമതി/പൗരത്വം ലഭിക്കുമെന്ന ഉറപ്പായോ കണക്കാക്കരുത്.",
      },
      detail: {
        backToServices: "എല്ലാ മാൾട്ട പ്രോഗ്രാമുകളും",
        officialProgrammeLabel: "ഔദ്യോഗിക പ്രോഗ്രാം നാമം",
        editorialIntroLabel: "LRS ആമുഖ വിവരണം",
        overviewSectionLabel: "01 / പ്രോഗ്രാം അവലോകനം",
        overviewHeadline: "പ്രോഗ്രാമിന്റെ ഘടനയും ലക്ഷ്യവും",
        highlightsSectionLabel: "02 / പ്രധാന വിവരങ്ങളും സവിശേഷതകളും",
        highlightsHeadline: "പ്രധാന പ്രോഗ്രാം മാനദണ്ഡങ്ങൾ ഒറ്റനോട്ടത്തിൽ",
        eligibilitySectionLabel: "03 / യോഗ്യതാ മാനദണ്ഡങ്ങളും നിബന്ധനകളും",
        eligibilityHeadline: "അപേക്ഷക യോഗ്യതയും പ്രോഗ്രാം വ്യവസ്ഥകളും",
        processSectionLabel: "04 / അപേക്ഷാ-പരിശോധനാ ഘട്ടങ്ങൾ",
        processHeadline: "നാല് ഘട്ടങ്ങളുള്ള ഔദ്യോഗിക നടപടിക്രമം",
        profilesSectionLabel: "അർഹരായ പ്രൊഫൈലുകൾ (ELIGIBLE PROFILES)",
        profilesHeadline: "ആർട്ടിക്കിൾ 10(9) പ്രകാരം പരിഗണിക്കപ്പെടുന്ന മേഖലകൾ",
        visualSectionLabel: "മാൾട്ട ലീഗൽ & റീലൊക്കേഷൻ ഏകോപനം",
        visualCaption:
          "മാൾട്ടയിലെ വലേറ്റ ഓഫീസ് കേന്ദ്രീകരിച്ച് രേഖാ പരിശോധനയും പ്രോപ്പർട്ടി കംപ്ലയൻസ് നടപടികളും LRS ഏകോപിപ്പിക്കുന്നു.",
        faqSectionLabel: "പൊതുവായ ചോദ്യങ്ങളും ഉത്തരങ്ങളും",
        faqHeadline: "പ്രോഗ്രാം സംബന്ധമായ സംശയങ്ങൾ",
        officialNoticeBadge: "ഔദ്യോഗിക പ്രോഗ്രാം വിവരങ്ങളും നിയമപരമായ അറിയിപ്പും",
        officialNoticeBody:
          "ഈ പേജിൽ നൽകിയിട്ടുള്ള യോഗ്യതാ മാനദണ്ഡങ്ങൾ, നികുതി നിരക്കുകൾ, വസ്തു മൂല്യം, സർക്കാർ വിഹിതം എന്നിവ LRS മാൾട്ട റസിഡൻസി & ടാക്സ് പ്രോഗ്രാം ബ്രോഷറിൽ നിന്നുള്ളതാണ്. ഇവ പൊതുവായ അറിവിലേക്ക് മാത്രമുള്ളതാണ്; വ്യക്തിഗത നിയമ-നികുതി ഉപദേശത്തിന് പകരമാകില്ല. എല്ലാ അപേക്ഷകളും മാൾട്ട സർക്കാരിന്റെ ഔദ്യോഗിക പരിശോധനകൾക്കും തീരുമാനങ്ങൾക്കും വിധേയമാണ്.",
        sidebarCardTitle: "പ്രോഗ്രാം കൺസൾട്ടേഷൻ തേടുക",
        sidebarCardSubtitle:
          "യോഗ്യതാ പരിശോധന, വസ്തു നിക്ഷേപം, ആവശ്യമായ രേഖകൾ എന്നിവയെക്കുറിച്ച് LRS വിദഗ്ധരുമായി സംസാരിക്കുക.",
        sidebarPrimaryCta: "ഈ പ്രോഗ്രാമിനെക്കുറിച്ച് അന്വേഷിക്കുക",
        sidebarSecondaryCta: "ഇമെയിൽ അയയ്ക്കുക",
        relatedSectionLabel: "മറ്റ് മാൾട്ട പ്രോഗ്രാമുകൾ",
        relatedHeadline: "ബന്ധപ്പെട്ട മറ്റ് റസിഡൻസി & ടാക്സ് പദ്ധതികൾ",
        notFoundTitle: "പ്രോഗ്രാം കണ്ടെത്താനായില്ല",
        notFoundDescription:
          "നിങ്ങൾ തിരഞ്ഞ മാൾട്ട പ്രോഗ്രാം പേജ് ലഭ്യമല്ല. ലഭ്യമായ എല്ലാ പ്രോഗ്രാമുകളും കാണുന്നതിനായി സേവന പേജിലേക്ക് മടങ്ങുക.",
      },
    },
    contactPage: {
      hero: {
        breadcrumbHome: "ഹോം",
        breadcrumbCurrent: "ബന്ധപ്പെടുക",
        eyebrow: "നേരിട്ടുള്ള ഉപദേശക സഹായം • LRS",
        title: "ബന്ധപ്പെടുക",
        subtitle:
          "മാൾട്ട റസിഡൻസി, ടാക്സ് പ്രോഗ്രാമുകൾ, കോർപ്പറേറ്റ് നിയമോപദേശം, റീലൊക്കേഷൻ സേവനങ്ങൾ എന്നിവയ്ക്കായി ഞങ്ങളുടെ വലേറ്റ അഡ്വൈസറി ടീമുമായി ബന്ധപ്പെടുക.",
        imageAlt:
          "LRS ലീഗൽ & റീലൊക്കേഷൻ സർവീസസ് അന്താരാഷ്ട്ര അഡ്വൈസറി ചേംബർ ദൃശ്യം",
      },
      intro: {
        eyebrow: "ഞങ്ങളുമായി ബന്ധപ്പെടാം",
        headline: "നിങ്ങളുടെ അടുത്ത ചുവടുവെപ്പ് കൂടുതൽ എളുപ്പമാക്കാം.",
        leadParagraph:
          "നിങ്ങൾ പുതിയൊരു നാട്ടിലേക്ക് താമസമാറ്റം പ്ലാൻ ചെയ്യുകയാണെങ്കിലും, വിദഗ്ധ നിയമ മാർഗ്ഗനിർദ്ദേശം തേടുകയാണെങ്കിലും, അല്ലെങ്കിൽ ഞങ്ങളുടെ സേവനങ്ങളെക്കുറിച്ച് കൂടുതലറിയാൻ ആഗ്രഹിക്കുകയാണെങ്കിലും, സഹായിക്കാൻ ഞങ്ങൾ ഒപ്പമുണ്ട്. നിങ്ങളുടെ ആവശ്യങ്ങൾ പങ്കുവെക്കുക; അടുത്ത ഘട്ടങ്ങളിലൂടെ ഞങ്ങളുടെ ടീം നിങ്ങളെ നയിക്കും.",
        secondaryParagraph:
          "മാൾട്ട റസിഡൻസി, റിട്ടയർമെന്റ്, ടാക്സ് പ്രോഗ്രാമുകൾ മുതൽ കോർപ്പറേറ്റ് രൂപീകരണം, വസ്തു ആധാര പരിശോധന, കുടുംബങ്ങളുടെ താമസ സൗകര്യങ്ങൾ വരെയുള്ള എല്ലാ അന്വേഷണങ്ങളും തികഞ്ഞ സ്വകാര്യതയോടെ ഞങ്ങളുടെ സീനിയർ അഡ്വൈസറി ഡെസ്ക് നേരിട്ട് പരിശോധിക്കുന്നു.",
        coordinatesHeading: "വലേറ്റ ചേംബർ • ഔദ്യോഗിക വിലാസവും ഫോൺ വിവരങ്ങളും",
        coordinatesBadge: "മാൾട്ട & ഗ്ലോബൽ അഡ്വൈസറി ഡെസ്ക് — LRS",
        officeLabel: "ഓഫീസ് വിലാസം",
        officeValue: "32A Scots House, South Street, Valletta, VLT1101, Malta",
        emailLabel: "ഇമെയിൽ വിലാസം",
        emailValue: "info@lrs-global.com",
        phoneLabel: "ഫോൺ നമ്പർ",
        phoneValue: "+356 99980989",
        hoursLabel: "പ്രവർത്തന സമയം",
        hoursValue: "തിങ്കൾ – വെള്ളി, രാവിലെ 09:00 – വൈകുന്നേരം 06:00 CET",
        imageAlt:
          "LRS ലീഗൽ & റീലൊക്കേഷൻ സർവീസസ് കൺസൾട്ടേഷൻ ചേംബർ ഇന്റീരിയർ",
        secondaryImageAlt:
          "നിയമപരമായ കൃത്യതയെ സൂചിപ്പിക്കുന്ന ലീഗൽ പോർട്ട്ഫോളിയോയും കോമ്പസും",
        imageCaptionBadge: "വലേറ്റ ചേംബർ • മാൾട്ട",
        imageCaptionTitle: "LRS പ്രിൻസിപ്പൽ അഡ്വൈസറി ഡെസ്ക്",
        imageCaptionSubtitle: "32A Scots House, South Street, Valletta, VLT1101, Malta",
        secondaryFrameLabel: "ഏകീകൃത സേവന ഉത്തരവാദിത്തം",
        secondaryFrameDescription:
          "നിയമ സഹായം, റസിഡൻസി അപേക്ഷകൾ, റീലൊക്കേഷൻ ഏകോപനം എന്നിവ ഒരൊറ്റ കുടക്കീഴിൽ.",
      },
      formSection: {
        eyebrow: "സന്ദേശം അയയ്ക്കുക",
        headline: "നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകുമെന്ന് ഞങ്ങളോട് പറയുക.",
        description:
          "താഴെയുള്ള ഫോം പൂരിപ്പിച്ച് നിങ്ങളുടെ ആവശ്യങ്ങളെക്കുറിച്ചുള്ള വിവരങ്ങൾ പങ്കുവെക്കുക.",
        confidentialityNote:
          "നിങ്ങൾ നൽകുന്ന എല്ലാ വിവരങ്ങളും പൂർണ്ണമായ സ്വകാര്യതയോടെയും നിയമപരമായ രഹസ്യസ്വഭാവത്തോടെയും സൂക്ഷിക്കുന്നതാണ്.",
        requiredIndicator: "നിർബന്ധം",
        optionalIndicator: "നിർബന്ധമില്ല",
        fields: {
          fullNameLabel: "പൂർണ്ണ നാമം",
          fullNamePlaceholder: "ഉദാ: അർജുൻ നായർ",
          emailLabel: "ഇമെയിൽ വിലാസം",
          emailPlaceholder: "name@organization.com",
          phoneLabel: "ഫോൺ നമ്പർ",
          phonePlaceholder: "+356 9998 0989 അല്ലെങ്കിൽ +91 98470 00000",
          serviceLabel: "താല്പര്യമുള്ള സേവനം",
          servicePlaceholder: "ഒരു പ്രോഗ്രാം അല്ലെങ്കിൽ സേവനം തിരഞ്ഞെടുക്കുക (നിർബന്ധമില്ല)",
          serviceOptions: {
            mprp: "മാൾട്ട പെർമനന്റ് റസിഡൻസ് പ്രോഗ്രാം (MPRP)",
            "citizenship-by-merit":
              "യോഗ്യതയുടെ അടിസ്ഥാനത്തിലുള്ള പൗരത്വം (Citizenship by Merit)",
            mrp: "മാൾട്ട റിട്ടയർമെന്റ് പ്രോഗ്രാം (MRP)",
            grp: "ഗ്ലോബൽ റസിഡൻസ് പ്രോഗ്രാം (GRP)",
            "corporate-relocation": "കോർപ്പറേറ്റ് നിയമോപദേശവും എക്സിക്യൂട്ടീവ് റീലൊക്കേഷനും",
            "real-estate-tenancy": "വസ്തു ഇടപാട് പരിശോധനയും പ്രോപ്പർട്ടി കംപ്ലയൻസും",
            "general-inquiry": "പൊതുവായ നിയമ-റീലൊക്കേഷൻ കൺസൾട്ടേഷൻ",
          },
          subjectLabel: "വിഷയം",
          subjectPlaceholder: "ഉദാ: MPRP യോഗ്യതയും പ്രോപ്പർട്ടി കൺസൾട്ടേഷനും",
          messageLabel: "സന്ദേശം",
          messagePlaceholder:
            "നിങ്ങളുടെ സമയക്രമം, ആവശ്യമായ സേവനങ്ങൾ, അല്ലെങ്കിൽ സംശയങ്ങൾ ഇവിടെ വിശദമായി രേഖപ്പെടുത്തുക...",
          privacyConsentLabel:
            "സ്വകാര്യതാ നയത്തിനും സേവന നിബന്ധനകൾക്കും അനുസൃതമായി എന്റെ അന്വേഷണത്തിന് മറുപടി നൽകുന്നതിനായി മുകളിൽ നൽകിയ വിവരങ്ങൾ LRS ലീഗൽ & റീലൊക്കേഷൻ സർവീസസ് ഉപയോഗിക്കുന്നതിന് ഞാൻ സമ്മതിക്കുന്നു.",
        },
        validation: {
          formErrorsSummary:
            "അപേക്ഷ സമർപ്പിക്കുന്നതിന് മുമ്പ് താഴെ അടയാളപ്പെടുത്തിയ വിവരങ്ങൾ പരിശോധിച്ച് തിരുത്തുക.",
          fullNameRequired: "ദയവായി നിങ്ങളുടെ പൂർണ്ണ നാമം നൽകുക.",
          fullNameMinLength: "പേരിൽ കുറഞ്ഞത് 2 അക്ഷരങ്ങളെങ്കിലും ഉണ്ടായിരിക്കണം.",
          emailRequired: "ദയവായി നിങ്ങളുടെ ഇമെയിൽ വിലാസം നൽകുക.",
          emailInvalid:
            "ദയവായി സാധുവായ ഒരു ഇമെയിൽ വിലാസം നൽകുക (ഉദാ: name@domain.com).",
          phoneInvalid:
            "ദയവായി സാധുവായ ഫോൺ നമ്പർ നൽകുക (7 മുതൽ 20 വരെ അക്കങ്ങൾ; + ചിഹ്നവും സ്പേസും ഉപയോഗിക്കാം).",
          subjectRequired: "ദയവായി നിങ്ങളുടെ അന്വേഷണത്തിന്റെ വിഷയം നൽകുക.",
          subjectMinLength: "വിഷയത്തിൽ കുറഞ്ഞത് 3 അക്ഷരങ്ങളെങ്കിലും ഉണ്ടായിരിക്കണം.",
          messageRequired: "ദയവായി നിങ്ങളുടെ സന്ദേശം രേഖപ്പെടുത്തുക.",
          messageMinLength:
            "കൃത്യമായ സഹായം നൽകുന്നതിനായി സന്ദേശത്തിൽ കുറഞ്ഞത് 15 അക്ഷരങ്ങളെങ്കിലും ഉൾപ്പെടുത്തുക.",
          privacyConsentRequired:
            "തുടരുന്നതിനായി ദയവായി സ്വകാര്യതാ സമ്മതപത്രം (Privacy Consent) ടിക്ക് ചെയ്യുക.",
        },
        actions: {
          submitButton: "സന്ദേശം അയയ്ക്കുക",
          submittingButton: "സന്ദേശം അയയ്ക്കുന്നു...",
          retryButton: "വീണ്ടും ശ്രമിക്കുക",
          resetButton: "മറ്റൊരു സന്ദേശം അയയ്ക്കുക",
          directEmailCta: "നേരിട്ട് ഇമെയിൽ അയയ്ക്കുക",
          directPhoneCta: "വലേറ്റ ഓഫീസിലേക്ക് വിളിക്കുക",
        },
        states: {
          loadingTitle: "നിങ്ങളുടെ സന്ദേശം അയച്ചുകൊണ്ടിരിക്കുന്നു",
          loadingDescription:
            "നിങ്ങളുടെ വിവരങ്ങൾ LRS അഡ്വൈസറി ഡെസ്കിലേക്ക് സുരക്ഷിതമായി കൈമാറുകയാണ്, ദയവായി അല്പം കാത്തിരിക്കുക.",
          successTitle: "നിങ്ങളുടെ സന്ദേശം വിജയകരമായി ലഭിച്ചു",
          successDescription:
            "LRS ലീഗൽ & റീലൊക്കേഷൻ സർവീസസിനെ ബന്ധപ്പെട്ടതിന് നന്ദി. ഞങ്ങളുടെ വലേറ്റ അഡ്വൈസറി ടീം നിങ്ങളുടെ അന്വേഷണം പരിശോധിച്ച് ഉടൻ മറുപടി നൽകുന്നതാണ്.",
          errorTitle: "സന്ദേശം അയയ്ക്കാൻ സാധിച്ചില്ല",
          errorDescription:
            "സന്ദേശം അയയ്ക്കുന്നതിൽ സാങ്കേതിക തടസ്സം നേരിട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക അല്ലെങ്കിൽ താഴെ കാണുന്ന ഇമെയിൽ/ഫോൺ വഴി നേരിട്ട് ബന്ധപ്പെടുക.",
          rateLimitedDescription:
            "ചുരുങ്ങിയ സമയത്തിനുള്ളിൽ നിരവധി തവണ ശ്രമിച്ചതിനാൽ ദയവായി ഒരു മിനിറ്റിന് ശേഷം വീണ്ടും ശ്രമിക്കുക, അല്ലെങ്കിൽ info@lrs-global.com എന്ന വിലാസത്തിലേക്ക് ഇമെയിൽ ചെയ്യുക.",
          configRequiredBadge: "ബാക്ക്എൻഡ് ഇമെയിൽ സർവീസ് കോൺഫിഗർ ചെയ്യേണ്ടതുണ്ട്",
          configRequiredTitle: "സെർവർ ഇമെയിൽ ഡെലിവറി ക്രമീകരണം ആവശ്യമാണ്",
          configRequiredDescription:
            "നിങ്ങൾ പൂരിപ്പിച്ച വിവരങ്ങൾ എല്ലാം ശരിയാണ്. എന്നാൽ ഈ എൻവയോൺമെന്റിൽ സെർവർ ഇമെയിൽ അല്ലെങ്കിൽ വെബ്‌ഹുക്ക് ഡെലിവറി സംവിധാനം ഇതുവരെ സജ്ജീകരിച്ചിട്ടില്ലാത്തതിനാൽ സന്ദേശം സ്വയമേവ അയച്ചിട്ടില്ല. താഴെയുള്ള ബട്ടൺ വഴി നിങ്ങളുടെ ഇമെയിൽ ആപ്പിലൂടെ നേരിട്ട് സന്ദേശം അയയ്ക്കാം അല്ലെങ്കിൽ ഫോണിൽ ബന്ധപ്പെടാം.",
          configRequiredTechnicalNote:
            "അഡ്മിനിസ്ട്രേറ്റർ കുറിപ്പ്: POST /api/contact വഴി സന്ദേശങ്ങൾ ലഭിക്കുന്നതിനായി സെർവർ എൻവയോൺമെന്റിൽ (.env.local) CONTACT_WEBHOOK_URL അല്ലെങ്കിൽ RESEND_API_KEY + CONTACT_RECEIVER_EMAIL കോൺഫിഗർ ചെയ്യുക.",
        },
        sidebar: {
          eyebrow: "തുടർനടപടികൾ",
          title: "കൃത്യതയാർന്ന കൺസൾട്ടേഷൻ രീതി",
          description:
            "ഓരോ അന്വേഷണവും വലേറ്റ ചേംബറിലെ ബന്ധപ്പെട്ട നിയമ-റീലൊക്കേഷൻ വിദഗ്ധരിലേക്ക് നേരിട്ട് എത്തുന്നു.",
          steps: [
            {
              number: "01",
              title: "പ്രാഥമിക ആവശ്യങ്ങളുടെ പരിശോധന",
              detail:
                "നിങ്ങളുടെ രാജ്യം, സമയക്രമം, തിരഞ്ഞെടുത്ത പ്രോഗ്രാം അല്ലെങ്കിൽ കോർപ്പറേറ്റ് ആവശ്യങ്ങൾ എന്നിവ ഞങ്ങൾ വിലയിരുത്തുന്നു.",
            },
            {
              number: "02",
              title: "സ്വകാര്യ കൺസൾട്ടേഷൻ കോൾ",
              detail:
                "യോഗ്യതാ മാനദണ്ഡങ്ങളും വസ്തു/നിയമ നടപടികളും ചർച്ച ചെയ്യാൻ വിദഗ്ധരുമായി സംസാരിക്കാം.",
            },
            {
              number: "03",
              title: "വ്യക്തമായ പ്രവർത്തന രൂപരേഖ",
              detail:
                "ആവശ്യമായ രേഖകൾ, സമയക്രമം, ഘട്ടംഘട്ടമായുള്ള നടപടികൾ എന്നിവയുടെ വ്യക്തമായ പ്ലാൻ നൽകുന്നു.",
            },
          ],
          directDeskLabel: "നേരിട്ട് സംസാരിക്കാൻ താല്പര്യമുണ്ടോ?",
          directDeskNote:
            "അടിയന്തര നിയമ-റീലൊക്കേഷൻ ആവശ്യങ്ങൾക്കായി പ്രവൃത്തി സമയങ്ങളിൽ ഞങ്ങളുടെ വലേറ്റ ഓഫീസുമായി നേരിട്ട് ബന്ധപ്പെടാം.",
        },
        aria: {
          formLabel: "കൺസൾട്ടേഷൻ & കോൺടാക്ട് ഫോം",
          breadcrumbLabel: "ബ്രെഡ്ക്രംബ് നാവിഗേഷൻ",
          statusRegionLabel: "ഫോം സമർപ്പണ വിവരം",
        },
      },
    },
  },
};