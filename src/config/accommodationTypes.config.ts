import type { AccommodationSection } from "./types";

export const accommodationSection: AccommodationSection = {
  heading: {
    no: "Overnatting",
    en: "Accommodation",
    de: "Unterkunft",
  },

  subtext: {
    no: "Velg mellom flere komfortable overnattingsmuligheter hos oss.",
    en: "Choose between several comfortable accommodation options.",
    de: "Wählen Sie zwischen mehreren komfortablen Übernachtungsmöglichkeiten.",
  },

  items: [
    {
      title: {
        no: "Campingplass",
        en: "Camping",
        de: "Campingplatz",
      },
      description: {
        no: "Romslige plasser for bobil og caravan.",
        en: "Spacious spots for motorhomes and caravans.",
        de: "Großzügige Stellplätze für Wohnmobile und Wohnwagen.",
      },
      image: "/images/camping.png",
    },

    {
      title: {
        no: "Teltplass",
        en: "Tent area",
        de: "Zeltplatz",
      },
      description: {
        no: "Naturnære teltplasser i rolige omgivelser.",
        en: "Peaceful tent spots surrounded by nature.",
        de: "Naturnahe Zeltplätze in ruhiger Umgebung.",
      },
      image: "/images/telt.png",
    },

    {
      title: {
        no: "Hytter",
        en: "Cabins",
        de: "Hütten",
      },
      description: {
        no: "Koselige hytter med plass til hele familien.",
        en: "Cozy cabins for the whole family.",
        de: "Gemütliche Hütten für die ganze Familie.",
      },
      image: "/images/hytter.png",
    },

    {
      title: {
        no: "Leiligheter",
        en: "Apartments",
        de: "Apartments",
      },
      description: {
        no: "Moderne leiligheter med høy komfort.",
        en: "Modern apartments with high comfort.",
        de: "Moderne Apartments mit hohem Komfort.",
      },
      image: "/images/leiligheter.png",
    },
  ],
};