/**
 * TYPES FOR BUSINESS TEMPLATE
 * -------------------------------------------------
 * Denne filen inneholder kun TypeScript-typer.
 * Den inneholder ingen data.
 *
 * Dette er "kontrakten" mellom:
 * - config-filer (hero.config.ts, services.config.ts osv.)
 * - siteConfig.ts (hub)
 * - komponentene
 */

// -------------------------------------------------
// SPRÅK
// -------------------------------------------------

export type LocalizedText = {
  no: string;
  en: string;
};

export type LocalizedList = {
  no: string[];
  en: string[];
};

// -------------------------------------------------
// GENERELLE MØNSTRE
// -------------------------------------------------

export type CTA = {
  label: LocalizedText;
  href: string;
};

export type NavItem = {
  label: LocalizedText;
  href: string;
};

// -------------------------------------------------
// HERO
// -------------------------------------------------

export type HeroImage = {
  src: string;
  alt: string;
};

export type HeroSection = {
  headline: LocalizedText;
  subtext: LocalizedText;
  primaryCta: CTA;
  secondaryCta: CTA;
  image?: HeroImage;
};

// -------------------------------------------------
// BOOKING
// -------------------------------------------------

export type BookingFieldType = "date" | "select";

export type BookingFieldOption = {
  value: string;
  label: LocalizedText;
};

export type BookingField = {
  key: "checkIn" | "checkOut" | "guests";
  type: BookingFieldType;
  label: LocalizedText;
  options?: BookingFieldOption[];
};

export type BookingSection = {
  enabled: boolean;
  buttonLabel: LocalizedText;
  fields: BookingField[];
};

// -------------------------------------------------
// SERVICES
// -------------------------------------------------

export type Service = {
  title: LocalizedText;
  description: LocalizedText;
  price?: LocalizedText;
  bullets?: LocalizedList;
  cta: CTA;
  icon?: {
    src: string;
    alt: LocalizedText;
  };
};

export type ServicesSection = {
  title: LocalizedText;
  lead: LocalizedText;
  priceLabel: LocalizedText;
  featuredIndex?: number | null;
  items: Service[];
};

// -------------------------------------------------
// ACCOMMODATION
// -------------------------------------------------

export type AccommodationItem = {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
};

export type AccommodationSection = {
  heading: LocalizedText;
  subtext: LocalizedText;
  items: AccommodationItem[];
};

// -------------------------------------------------
// GALLERY
// -------------------------------------------------

export type GallerySection = {
  heading: LocalizedText;
  subtext: LocalizedText;
  images: string[];
};

// -------------------------------------------------
// PRICES
// -------------------------------------------------

export type PriceItem = {
  title: LocalizedText;
  price: LocalizedText;
  description?: LocalizedText;
};

export type PricesSection = {
  heading: LocalizedText;
  subtext: LocalizedText;

  modalTitle: LocalizedText;
  closeLabel: LocalizedText;

  fullListButtonLabel: LocalizedText;
  previewCount: number;

  items: PriceItem[];
};

// -------------------------------------------------
// PROCESS (trekkspill)
// -------------------------------------------------

export type ProcessStep = {
  title: string;
  details: string;
};

export type LocalizedProcess = {
  no: ProcessStep[];
  en: ProcessStep[];
};

export type ProcessSection = {
  title: LocalizedText;
  lead: LocalizedText;
  items: LocalizedProcess;
};

// -------------------------------------------------
// WHY US
// -------------------------------------------------

export type WhyUsSection = {
  title: LocalizedText;
  lead: LocalizedText;
  points: LocalizedList;
  image: {
    src: string;
    alt: LocalizedText;
  };
};

// -------------------------------------------------
// TEAM
// -------------------------------------------------

export type TeamMember = {
  name: string;
  title: LocalizedText;
  image: string;
  languages?: string[];
};

export type TeamSection = {
  heading: LocalizedText;
  subtext?: LocalizedText;
  members: TeamMember[];
};

// -------------------------------------------------
// FAQ / REVIEWS
// -------------------------------------------------

export type FAQItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type FAQSection = {
  title: LocalizedText;
  lead: LocalizedText;
  items: FAQItem[];
};

export type ReviewItem = {
  name: LocalizedText;
  text: LocalizedText;
  stars?: number;
};

export type ReviewsSection = {
  title: LocalizedText;
  lead: LocalizedText;
  items: ReviewItem[];
};

// -------------------------------------------------
// CONTACT
// -------------------------------------------------

export type ContactSection = {
  title: LocalizedText;
  lead: LocalizedText;

  show: {
    phone?: boolean;
    email?: boolean;
    address?: boolean;
    map?: boolean;
  };
};

// -------------------------------------------------
// FOOTER
// -------------------------------------------------

export type FooterConfig = {
  orgNumber: string;
  privacyLabel: LocalizedText;
  orgLabel: LocalizedText;

  tagline: LocalizedText;
  infoTitle: LocalizedText;
  navTitle: LocalizedText;
  backToTopLabel: LocalizedText;

  privacy: {
    title: LocalizedText;
    paragraphs: LocalizedList;
  };

  credit?: {
    label: string;
    href: string;
  };
};

// -------------------------------------------------
// FEATURE FLAGS
// -------------------------------------------------

export type FeatureFlags = {
  languageSwitch: boolean;

  hero: boolean;
  booking: boolean;
  services: boolean;
  gallery: boolean;
  process: boolean;
  prices: boolean;
  team: boolean;

  fullPriceListCta: boolean;

  whyUs: boolean;
  reviews: boolean;
  faq: boolean;
  contact: boolean;
  footer: boolean;
};

// -------------------------------------------------
// HOVEDKONFIG
// -------------------------------------------------

export type SiteConfig = {
  brand: {
    name: string;
    phone: string;
    email: string;
    location: string;

    address?: LocalizedText;

    logo: {
      src: string;
      alt: LocalizedText;
    };

    maps?: {
      embedUrl?: string;
      link?: string;
    };
  };

  features: FeatureFlags;
  nav: NavItem[];

  hero: HeroSection;
  bookingSection: BookingSection;
  servicesSection: ServicesSection;
  accommodationSection: AccommodationSection;
  gallerySection: GallerySection;
  pricesSection: PricesSection;
  processSection: ProcessSection;
  teamSection?: TeamSection;
  whyUsSection: WhyUsSection;
  reviewsSection: ReviewsSection;
  faqSection: FAQSection;
  contactSection: ContactSection;
  footer: FooterConfig;
};