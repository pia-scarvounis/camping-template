import type { WhyUsSection } from "./types";

/*
  Denne seksjonen brukes som "Opplevelser" i camping-malen
*/

export const whyUsSection: WhyUsSection = {
  title: { 
    no: "Opplevelser", 
    en: "Experiences" 
  },

  lead: {
    no: "Opplev naturen rundt oss med aktiviteter for både store og små.",
    en: "Experience the surrounding nature with activities for all ages.",
  },

  points: {
    no: ["Kajakk", "Ridning", "Fjellturer"],
    en: ["Kayaking", "Horse riding", "Hiking"],
  },

  image: {
    src: "/images/opplevelser.png",
    alt: { 
      no: "Opplevelser i naturen", 
      en: "Outdoor experiences" 
    },
  },
};