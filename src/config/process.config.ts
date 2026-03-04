// src/config/process.config.ts
import type { ProcessSection } from "./types";

export const processSection: ProcessSection = {
  title: { no: "En enkel prosess", en: "A simple process" },
  lead: {
    no: "Vi tilpasser leveransen til behovene dine og sørger for trygg progresjon.",
    en: "We tailor the delivery to your needs and ensure steady progress.",
  },
  items: {
    no: [
      { title: "Kontakt og avklar behov", details: "Vi tar en kort prat og kartlegger behov." },
      { title: "Plan og oppstart", details: "Vi lager en enkel plan og starter opp." },
      { title: "Leveranse og oppfølging", details: "Vi leverer og følger opp med forbedringer." },
    ],
    en: [
      { title: "Get in touch", details: "We’ll briefly map your needs." },
      { title: "Plan and kickoff", details: "We create a simple plan and start." },
      { title: "Delivery and follow-up", details: "We deliver and iterate improvements." },
    ],
  },
};