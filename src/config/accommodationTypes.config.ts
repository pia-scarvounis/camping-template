import type { AccommodationSection } from "./types";

export const accommodationSection: AccommodationSection = {
  heading: {
    no: "Overnatting",
    en: "Accommodation",
  },

  subtext: {
    no: "Velg mellom flere komfortable overnattingsmuligheter hos oss.",
    en: "Choose between several comfortable accommodation options.",
  },

  items: [
    {
      title: {
        no: "Campingplass",
        en: "Camping",
      },
      description: {
        no: "Romslige plasser for bobil og caravan.",
        en: "Spacious spots for motorhomes and caravans.",
      },
      image: "/images/camping.png",
    },

    {
      title: {
        no: "Teltplass",
        en: "Tent area",
      },
      description: {
        no: "Naturnære teltplasser i rolige omgivelser.",
        en: "Peaceful tent spots surrounded by nature.",
      },
      image: "/images/telt.png",
    },

    {
      title: {
        no: "Hytter",
        en: "Cabins",
      },
      description: {
        no: "Koselige hytter med plass til hele familien.",
        en: "Cozy cabins for the whole family.",
      },
      image: "/images/hytter.png",
    },

    {
      title: {
        no: "Leiligheter",
        en: "Apartments",
      },
      description: {
        no: "Moderne leiligheter med høy komfort.",
        en: "Modern apartments with high comfort.",
      },
      image: "/images/leiligheter.png",
    },
  ],
};