import type { FAQSection } from "./types";

export const faqSection: FAQSection = {
  title: { no: "Spørsmål og svar", en: "FAQ" },
  lead: {
    no: "Her er noen vanlige spørsmål. Finner du ikke svaret, ta kontakt.",
    en: "Here are some common questions. If you can’t find the answer, get in touch.",
  },
  items: [
    {
      question: { no: "Hvor raskt kan dere levere?", en: "How fast can you deliver?" },
      answer: {
        no: "Det kommer an på omfang. Vi gir alltid et estimat før oppstart.",
        en: "It depends on scope. We always provide an estimate before kickoff.",
      },
    },
    {
      question: { no: "Kan løsningen tilpasses?", en: "Can the solution be customized?" },
      answer: {
        no: "Ja – vi tilpasser innhold og oppsett etter behov.",
        en: "Yes — we tailor content and layout to your needs.",
      },
    },
    {
      question: { no: "Hva trenger dere fra oss?", en: "What do you need from us?" },
      answer: {
        no: "Logo, tekst/bilder (hvis dere har), og et kort møte om mål og behov.",
        en: "Logo, copy/images (if available), and a short meeting about goals and needs.",
      },
    },
  ],
};