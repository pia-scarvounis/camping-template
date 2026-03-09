import type { LocalizedText } from "./types";

export const gallerySection: {
  heading: LocalizedText;
  subtext: LocalizedText;
  images: string[];
} = {
  heading: {
    no: "Galleri",
    en: "Gallery",
    de: "Galerie",
  },

  subtext: {
    no: "Et lite innblikk i livet på Fjellcamp.",
    en: "A glimpse of life at Fjellcamp.",
    de: "Ein kleiner Einblick in das Leben bei Fjellcamp.",
  },

  images: [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
  ],
};