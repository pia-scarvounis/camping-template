// src/config/prices.config.ts
import type { LocalizedText, PriceItem } from "./types";

export const pricesSection: {
  heading: LocalizedText;
  subtext: LocalizedText;

  // modal-tekster
  modalTitle: LocalizedText;
  closeLabel: LocalizedText;

  // knapp for å åpne modal
  fullListButtonLabel: LocalizedText;

  // hvor mange rader vises før modal
  previewCount: number;

  items: PriceItem[];
} = {
  heading: { no: "Priser", en: "Pricing" },
  subtext: {
    no: "Velg løsningen som passer dine behov. Ta kontakt for tilpasninger.",
    en: "Choose the solution that fits your needs. Contact us for custom options.",
  },

  modalTitle: { no: "Full prisliste", en: "Full pricing overview" },
  closeLabel: { no: "Lukk", en: "Close" },
  fullListButtonLabel: { no: "Se full prisliste", en: "View full pricing" },

  previewCount: 3,

  items: [
    {
      title: { no: "Grunnpakke", en: "Basic package" },
      description: {
        no: "For mindre prosjekter eller oppstart.",
        en: "For small projects or startups.",
      },
      price: { no: "Fra 9 900 kr", en: "From €900" },
    },
    {
      title: { no: "Standardpakke", en: "Standard package" },
      description: {
        no: "For bedrifter som ønsker en komplett løsning.",
        en: "For businesses that need a complete solution.",
      },
      price: { no: "Fra 19 900 kr", en: "From €1,900" },
    },
    {
      title: { no: "Premium", en: "Premium package" },
      description: {
        no: "Skreddersydd løsning med ekstra oppfølging.",
        en: "Tailored solution with extended support.",
      },
      price: { no: "Etter avtale", en: "Custom pricing" },
    },
    {
      title: { no: "Timepris", en: "Hourly rate" },
      description: {
        no: "For mindre oppdrag eller rådgivning.",
        en: "For smaller assignments or consulting.",
      },
      price: { no: "1 250 kr / time", en: "€110 / hour" },
    },
    {
      title: { no: "Vedlikeholdsavtale", en: "Maintenance plan" },
      description: {
        no: "Løpende oppdateringer og support.",
        en: "Ongoing updates and support.",
      },
      price: { no: "Fra 1 500 kr / mnd", en: "From €120 / month" },
    },
  ],
};