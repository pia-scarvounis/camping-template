// src/config/services.config.ts
import type { ServicesSection } from "./types";

export const servicesSection: ServicesSection = {
  // Beholdes for typen sin skyld – men brukes ikke i UI nå
  title: { no: "", en: "" },
  lead: { no: "", en: "" },
  priceLabel: { no: "", en: "" },

  // 0=1.boks, 1=2.boks, 2=3.boks, 3=4.boks
  featuredIndex: 1,

  items: [
    {
      title: { no: "Wi-Fi", en: "Wi-Fi" },
      description: { no: "", en: "" },
      icon: {
        src: "/icons/wifi-ikon.png",
        alt: { no: "Wi-Fi ikon", en: "Wi-Fi icon" },
      },
      price: { no: "", en: "" },
      bullets: { no: [], en: [] },
      cta: { label: { no: "", en: "" }, href: "#tjenester" },
    },
    {
      title: { no: "Gratis Parkering", en: "Free Parking" },
      description: { no: "", en: "" },
      icon: {
        src: "/icons/bil-ikon.png",
        alt: { no: "Bil ikon", en: "Car icon" },
      },
      price: { no: "", en: "" },
      bullets: { no: [], en: [] },
      cta: { label: { no: "", en: "" }, href: "#tjenester" },
    },
    {
      title: { no: "Gratis Parkering", en: "Free Parking" },
      description: { no: "", en: "" },
      icon: {
        src: "/icons/bil-ikon.png",
        alt: { no: "Bil ikon", en: "Car icon" },
      },
      price: { no: "", en: "" },
      bullets: { no: [], en: [] },
      cta: { label: { no: "", en: "" }, href: "#tjenester" },
    },
    {
      title: { no: "Gratis Parkering", en: "Free Parking" },
      description: { no: "", en: "" },
      icon: {
        src: "/icons/bil-ikon.png",
        alt: { no: "Bil ikon", en: "Car icon" },
      },
      price: { no: "", en: "" },
      bullets: { no: [], en: [] },
      cta: { label: { no: "", en: "" }, href: "#tjenester" },
    },
  ],
};