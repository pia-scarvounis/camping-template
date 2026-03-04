import type { WhyUsSection } from "./types";
import SectionHeader from "@/components/ui/SectionHeader";

export const whyUsSection: WhyUsSection = {
  title: { no: "Hvorfor velge oss?", en: "Why choose us?" },
  lead: {
    no: "Tydelig plan, god oppfølging og en løsning tilpasset dine mål.",
    en: "A clear plan, great follow-up, and a solution tailored to your goals.",
  },
  points: {
    no: ["Tydelig prosess", "Rask respons", "Fleksible løsninger"],
    en: ["Clear process", "Fast response", "Flexible solutions"],
  },
  image: {
    src: "/images/why-us.png",
    alt: { no: "Illustrasjonsbilde", en: "Illustration image" },
  },
};