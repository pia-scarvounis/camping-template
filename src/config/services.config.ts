// src/config/services.config.ts
import type { ServicesSection } from "./types";

export const servicesSection: ServicesSection = {
  // Beholdes for typen sin skyld – men brukes ikke i UI nå
  title: { no: "", en: "", de: "" },
  lead: { no: "", en: "", de: "" },
  priceLabel: { no: "", en: "", de: "" },

  // Ingen featured boks
  featuredIndex: null,

  items: [
    {
      title: { no: "Wi-Fi", en: "Wi-Fi", de: "WLAN" },
      description: {
        no: "Gratis Wi-Fi tilgjengelig på store deler av området.",
        en: "Free Wi-Fi available across most of the campsite.",
        de: "Kostenloses WLAN ist auf großen Teilen des Campingplatzes verfügbar.",
      },
      icon: {
        src: "/icons/wifi-ikon.png",
        alt: { no: "Wi-Fi ikon", en: "Wi-Fi icon", de: "WLAN Symbol" },
      },
      price: { no: "", en: "", de: "" },
      bullets: { no: [], en: [], de: [] },
      cta: {
        label: { no: "", en: "", de: "" },
        href: "#tjenester",
      },
    },

    {
      title: { no: "Gratis parkering", en: "Free parking", de: "Kostenloses Parken" },
      description: {
        no: "Parkering tilgjengelig i nærheten av alle områdene.",
        en: "Parking available close to all areas.",
        de: "Parkplätze befinden sich in der Nähe aller Bereiche.",
      },
      icon: {
        src: "/icons/bil-ikon.png",
        alt: { no: "Bil ikon", en: "Car icon", de: "Auto Symbol" },
      },
      price: { no: "", en: "", de: "" },
      bullets: { no: [], en: [], de: [] },
      cta: {
        label: { no: "", en: "", de: "" },
        href: "#tjenester",
      },
    },

    {
      title: { no: "Moderne fasiliteter", en: "Modern facilities", de: "Moderne Einrichtungen" },
      description: {
        no: "Rene dusjer, toaletter og gode fellesområder.",
        en: "Clean showers, restrooms and comfortable shared facilities.",
        de: "Saubere Duschen, Toiletten und gute Gemeinschaftsbereiche.",
      },
      icon: {
        src: "/icons/bil-ikon.png",
        alt: { no: "Fasiliteter ikon", en: "Facilities icon", de: "Einrichtungen Symbol" },
      },
      price: { no: "", en: "", de: "" },
      bullets: { no: [], en: [], de: [] },
      cta: {
        label: { no: "", en: "", de: "" },
        href: "#tjenester",
      },
    },

    {
      title: { no: "Åpningstider", en: "Opening hours", de: "Öffnungszeiten" },
      description: {
        no: "Åpent mai–september. Resepsjon 08:00–22:00.",
        en: "Open May–September. Reception 08:00–22:00.",
        de: "Geöffnet Mai–September. Rezeption 08:00–22:00.",
      },
      icon: {
        src: "/icons/bil-ikon.png",
        alt: { no: "Åpningstider ikon", en: "Opening hours icon", de: "Uhr Symbol" },
      },
      price: { no: "", en: "", de: "" },
      bullets: { no: [], en: [], de: [] },
      cta: {
        label: { no: "", en: "", de: "" },
        href: "#tjenester",
      },
    },
  ],
};