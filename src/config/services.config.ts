// src/config/services.config.ts
import type { ServicesSection } from "./types";

/**
 * SERVICES (én seksjon = ett config-objekt)
 * ------------------------------------------------
 * Mønsteret vi bruker i malen:
 * - ÉN export per seksjon (f.eks. servicesSection)
 * - Seksjons-tekst (title/lead/labels) + innhold (items) ligger samlet
 * - Komponentene renderer kun data herfra (ingen hardkoding)
 */

export const servicesSection: ServicesSection = {
  title: {
    no: "Våre tjenester",
    en: "Our services",
  },
  lead: {
    no: "Skreddersydde løsninger tilpasset dine behov og mål.",
    en: "Tailored solutions designed to fit your needs and goals.",
  },
  priceLabel: {
    no: "Pris:",
    en: "Price:",
  },

  // 0-basert index: 0=1. boks, 1=2. boks, 2=3. boks
  featuredIndex: 2,

  items: [
    {
      title: { no: "Grunnpakke", en: "Starter Package" },
      description: {
        no: "En solid start for små og mellomstore virksomheter som ønsker en profesjonell løsning.",
        en: "A solid starting point for small and medium businesses looking for a professional solution.",
      },
      price: { no: "Fra 4 900 kr", en: "From 4,900 NOK" },
      bullets: {
        no: ["Tilpasset oppsett", "Standard funksjonalitet", "Support inkludert"],
        en: ["Custom setup", "Core functionality", "Support included"],
      },
      cta: {
        label: { no: "Les mer", en: "Learn more" },
        href: "#kontakt",
      },
    },
    {
      title: { no: "Utvidet løsning", en: "Advanced Solution" },
      description: {
        no: "For virksomheter som ønsker flere funksjoner og skreddersøm.",
        en: "For businesses that require additional features and customization.",
      },
      price: { no: "Fra 9 900 kr", en: "From 9,900 NOK" },
      bullets: {
        no: ["Utvidet funksjonalitet", "Skreddersydd design", "Prioritert support"],
        en: ["Extended functionality", "Custom design", "Priority support"],
      },
      cta: {
        label: { no: "Se detaljer", en: "View details" },
        href: "#kontakt",
      },
    },
    {
      title: { no: "Premium", en: "Premium Package" },
      description: {
        no: "En komplett løsning med full tilpasning og oppfølging.",
        en: "A complete solution with full customization and follow-up.",
      },
      price: { no: "Etter avtale", en: "On request" },
      bullets: {
        no: ["Full tilpasning", "Dedikert rådgivning", "Langsiktig samarbeid"],
        en: ["Full customization", "Dedicated consulting", "Long-term partnership"],
      },
      cta: {
        label: { no: "Ta kontakt", en: "Contact us" },
        href: "#kontakt",
      },
    },
  ],
};