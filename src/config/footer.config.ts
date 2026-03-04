import type { FooterConfig } from "./types";

/**
 * Footer config
 * Kun data/tekst. Komponent håndterer bare rendering + popup state.
 */
export const footer: FooterConfig = {
  orgNumber: "999 999 999",

  tagline: {
    no: "En moderne bedrift med fokus på kvalitet, trygghet og personlig service.",
    en: "A modern business focused on quality, trust and personal service.",
  },

  infoTitle: {
    no: "Informasjon",
    en: "Information",
  },

  navTitle: {
    no: "Navigasjon",
    en: "Navigation",
  },

  backToTopLabel: {
    no: "Til toppen",
    en: "Back to top",
  },

  privacyLabel: {
    no: "Personvern",
    en: "Privacy",
  },

  orgLabel: {
    no: "Org.nr",
    en: "Org. no.",
  },

  privacy: {
    title: {
      no: "Personvernerklæring",
      en: "Privacy policy",
    },
    paragraphs: {
      no: ["HER limer vi inn personverntekst."],
      en: ["Paste your privacy text here."],
    },
  },

  // credit?: { label: "Laget av ...", href: "https://..." },
};