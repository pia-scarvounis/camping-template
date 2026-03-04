import type { ReviewsSection } from "./types";

export const reviewsSection: ReviewsSection = {
  title: { no: "Hva kundene våre sier", en: "What our customers say" },
  lead: {
    no: "Et par ord fra folk som har brukt løsningen.",
    en: "A few words from people who’ve used the solution.",
  },
  items: [
    {
      name: { no: "Kunde", en: "Customer" },
      text: {
        no: "Ryddig prosess og veldig bra resultat.",
        en: "A smooth process and a great result.",
      },
      stars: 5,
    },
    {
      name: { no: "Kunde", en: "Customer" },
      text: {
        no: "God kommunikasjon og rask levering.",
        en: "Great communication and fast delivery.",
      },
      stars: 5,
    },
    {
      name: { no: "Kunde", en: "Customer" },
      text: {
        no: "Enkelt å samarbeide med og veldig fornøyd med sluttresultatet.",
        en: "Easy to work with and very happy with the final result.",
      },
      stars: 5,
    },
  ],
};