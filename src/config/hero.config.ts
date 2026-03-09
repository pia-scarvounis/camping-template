import type { SiteConfig } from "@/config/types";

export const hero: SiteConfig["hero"] = {
  headline: {
    no: "Opplev naturen hos Fjellcamp",
    en: "Experience nature at Fjellcamp",
    de: "Natur erleben bei Fjellcamp",
  },

  subtext: {
    no: "Hytter, teltplasser og bobil - med fjord, fjell og ro rett utenfor døra.",
    en: "Cabins, tent pitches and camper vans - with fjords, mountains and calm right outside.",
    de: "Hütten, Zeltplätze und Stellplätze für Wohnmobile – mit Fjord, Bergen und Ruhe direkt vor der Tür.",
  },

  primaryCta: {
    label: {
      no: "Kontakt oss",
      en: "Contact us",
      de: "Kontakt",
    },
    href: "#kontakt",
  },

  secondaryCta: {
    label: {
      no: "Våre tjenester",
      en: "Our services",
      de: "Unsere Angebote",
    },
    href: "#tjenester",
  },

  image: {
    src: "/images/image.jpeg",
    alt: "Hero image",
  },
};