// src/data/siteConfig.ts
/**
 * siteConfig.ts (MAL-HUB)
 * --------------------------------------------------------------------
 * Denne fila er en "hub" som samler alt innhold for nettstedet.
 *
 * Prinsipp:
 * - Seksjonskomponenter skal være "dumme" (render kun data)
 * - Alt innhold ligger i config
 */

import type { SiteConfig } from "@/config/types";

// Seksjons-configs (flyttet ut)
import { hero } from "@/config/hero.config";
import { servicesSection } from "@/config/services.config";
import { pricesSection } from "@/config/prices.config";
import { processSection } from "@/config/process.config";
import { teamSection } from "@/config/team.config";
import { whyUsSection } from "@/config/whyUs.config";
import { reviewsSection } from "@/config/reviews.config";
import { faqSection } from "@/config/faq.config";
import { contactSection } from "@/config/contact.config";
import { footer } from "@/config/footer.config";

// --------------------------------------------------------------------
// siteConfig (samler alt)
// --------------------------------------------------------------------

export const siteConfig: SiteConfig = {
  brand: {
    name: "Din bedrift",
    phone: "99 99 99 99",
    email: "post@dinbedrift.no",
    location: "Oslo",
    logo: {
      src: "/icons/min-bedrift.svg",
      alt: { no: "Din bedrift logo", en: "Your business logo" },
    },
    address: {
      no: "Karl Johans gate 1, 0154 Oslo",
      en: "Karl Johans gate 1, 0154 Oslo",
    },
    maps: {
      embedUrl:
        "https://www.google.com/maps?q=Karl%20Johans%20gate%201%2C%200154%20Oslo&output=embed",
      link: "https://www.google.com/maps?q=Karl%20Johans%20gate%201%2C%200154%20Oslo",
    },
  },

  features: {
    languageSwitch: true,

    hero: true,
    services: true,
    process: true,
    prices: true,
    team: true,

    fullPriceListCta: true,

    whyUs: true,
    reviews: true,
    faq: true,
    contact: true,
    footer: true,
  },

  // NB: href må matche Section id i komponentene
  nav: [
    { href: "#tjenester", label: { no: "Tjenester", en: "Services" } },
    { href: "#priser", label: { no: "Priser", en: "Pricing" } },
    { href: "#prosess", label: { no: "Prosess", en: "Process" } },
    { href: "#anmeldelser", label: { no: "Anmeldelser", en: "Reviews" } },
    { href: "#faq", label: { no: "FAQ", en: "FAQ" } },
    { href: "#kontakt", label: { no: "Kontakt", en: "Contact" } },
  ],

  // Seksjoner (importert)
  hero,
  servicesSection,
  pricesSection,
  processSection,
  teamSection,
  whyUsSection,
  reviewsSection,
  faqSection,
  contactSection,
  footer,
};