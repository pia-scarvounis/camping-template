import type { FAQSection } from "./types";

export const faqSection: FAQSection = {
  title: { no: "Ofte stilte spørsmål", en: "Frequently asked questions" },

  lead: {
    no: "Her finner du svar på noen av de vanligste spørsmålene fra våre gjester.",
    en: "Here are answers to some of the most common questions from our guests.",
  },

  items: [
    {
      question: {
        no: "Når er innsjekk og utsjekk?",
        en: "When are check-in and check-out?",
      },
      answer: {
        no: "Innsjekk er fra kl. 15:00 og utsjekk innen kl. 11:00. Ta kontakt dersom du trenger fleksible tider.",
        en: "Check-in is from 3:00 PM and check-out is by 11:00 AM. Contact us if you need flexible times.",
      },
    },

    {
      question: {
        no: "Er hund tillatt?",
        en: "Are dogs allowed?",
      },
      answer: {
        no: "Ja, hund er velkommen så lenge den holdes i bånd og vises hensyn til andre gjester.",
        en: "Yes, dogs are welcome as long as they are kept on a leash and respect other guests.",
      },
    },

    {
      question: {
        no: "Finnes det dusj og toalett?",
        en: "Are there showers and toilets available?",
      },
      answer: {
        no: "Ja, vi har moderne sanitæranlegg med dusjer, toaletter og vaskemuligheter for gjester.",
        en: "Yes, we have modern sanitary facilities with showers, toilets and washing areas for guests.",
      },
    },

    {
      question: {
        no: "Har dere strøm for bobil og caravan?",
        en: "Do you offer electricity for caravans and motorhomes?",
      },
      answer: {
        no: "Ja, flere av våre campingplasser har tilgang til strømuttak.",
        en: "Yes, several of our camping spots provide electricity hookups.",
      },
    },

    {
      question: {
        no: "Kan man parkere ved hytta eller teltplassen?",
        en: "Can you park next to the cabin or tent area?",
      },
      answer: {
        no: "Ja, det er parkering i nærheten av alle overnattingsområdene.",
        en: "Yes, parking is available close to all accommodation areas.",
      },
    },

    {
      question: {
        no: "Hvilke aktiviteter finnes i nærheten?",
        en: "What activities are available nearby?",
      },
      answer: {
        no: "Området byr på flotte turstier, kajakk, fiske, ridning og mange naturopplevelser.",
        en: "The area offers beautiful hiking trails, kayaking, fishing, horseback riding and many nature experiences.",
      },
    },
  ],
};