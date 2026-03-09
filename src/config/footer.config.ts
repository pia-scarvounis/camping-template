import type { FooterConfig } from "./types";

/**
 * Footer config
 * Kun data/tekst. Komponent håndterer bare rendering + popup state.
 */

export const footer: FooterConfig = {
  orgNumber: "999 999 999",

  tagline: {
    no: "Opplev naturen, stillheten og gjestfriheten hos oss.",
    en: "Experience nature, tranquility and warm hospitality.",
    de: "Erleben Sie Natur, Ruhe und herzliche Gastfreundschaft.",
  },

  infoTitle: {
    no: "Informasjon",
    en: "Information",
    de: "Informationen",
  },

  navTitle: {
    no: "Navigasjon",
    en: "Navigation",
    de: "Navigation",
  },

  backToTopLabel: {
    no: "Til toppen",
    en: "Back to top",
    de: "Nach oben",
  },

  privacyLabel: {
    no: "Personvern",
    en: "Privacy",
    de: "Datenschutz",
  },

  orgLabel: {
    no: "Org.nr",
    en: "Org. no.",
    de: "Org.-Nr.",
  },

  privacy: {
    title: {
      no: "Personvernerklæring",
      en: "Privacy policy",
      de: "Datenschutzerklärung",
    },
    paragraphs: {
      no: [
        "Her kan du legge inn informasjon om hvordan personopplysninger behandles på nettsiden.",
      ],
      en: [
        "Here you can include information about how personal data is processed on the website.",
      ],
      de: [
        "Hier können Sie Informationen darüber einfügen, wie personenbezogene Daten auf dieser Website verarbeitet werden.",
      ],
    },
  },

  credit: {
    label: "Design & utvikling: drist.no",
    href: "https://drist.no",
  },
};