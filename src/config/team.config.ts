import type { TeamSection } from "./types";

export const teamSection: TeamSection = {
  heading: { no: "Teamet vårt", en: "Our team" },
  subtext: {
    no: "Møt menneskene du møter når du tar kontakt - vi hjelper deg gjerne.",
    en: "Meet the people you'll talk to when you reach out - we’re happy to help.",
  },
  members: [
    {
      name: "Sara Nordmann",
      title: { no: "Daglig leder", en: "General manager" },
      image: "/images/ins1.jpg",
      languages: ["Norsk", "English"],
    },
    {
      name: "Ole Henriksen",
      title: { no: "Fagansvarlig", en: "Head of operations" },
      image: "/images/ins2.jpg",
      languages: ["Norsk", "English", "Tysk"],
    },
    {
      name: "Ali Rehman",
      title: { no: "Kundekonsulent", en: "Customer advisor" },
      image: "/images/ins4.jpg",
      languages: ["Norsk", "English"],
    },
  ],
};