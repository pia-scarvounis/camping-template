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

// Seksjons-configs
import { hero } from "@/config/hero.config";
import { bookingSection } from "@/config/booking.config";
import { servicesSection } from "@/config/services.config";
import { accommodationSection } from "@/config/accommodationTypes.config";
import { gallerySection } from "@/config/gallery.config";
import { pricesSection } from "@/config/prices.config";
import { processSection } from "@/config/process.config";
import { teamSection } from "@/config/team.config";
import { whyUsSection } from "@/config/whyUs.config";
import { reviewsSection } from "@/config/reviews.config";
import { faqSection } from "@/config/faq.config";
import { contactSection } from "@/config/contact.config";
import { footer } from "@/config/footer.config";

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
    booking: true,
    services: true,
    gallery: true,
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

nav: [
  { href: "#overnatting", label: { no: "Overnatting", en: "Accommodation" } },
  { href: "#opplevelser", label: { no: "Opplevelser", en: "Experiences" } },
  { href: "#galleri", label: { no: "Galleri", en: "Gallery" } },
  { href: "#faq", label: { no: "FAQ", en: "FAQ" } },
  { href: "#kontakt", label: { no: "Kontakt", en: "Contact" } },
],

  hero,
  bookingSection,
  servicesSection,
  accommodationSection,
  gallerySection,
  pricesSection,
  processSection,
  teamSection,
  whyUsSection,
  reviewsSection,
  faqSection,
  contactSection,
  footer,
};