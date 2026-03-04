import type { SiteConfig } from "@/config/types";

export const hero: SiteConfig["hero"] = {
headline: {
  no: "Opplev naturen hos Fjellcamp",
  en: "Experience nature at Fjellcamp",
},
subtext: {
  no: "Hytter, teltplasser og bobil - med fjord, fjell og ro rett utenfor døra.",
  en: "Cabins, tent pitches and camper vans - with fjords, mountains and calm right outside.",
},
  primaryCta: {
    label: { no: "Kontakt oss", en: "Contact us" },
    href: "#kontakt",
  },
  secondaryCta: {
    label: { no: "Våre tjenester", en: "Our services" },
    href: "#tjenester",
  },

  // image må matche HeroImage-typen i siteConfig.ts
  image: {
    src: "/images/image.jpeg",
    alt: "Hero image",
  },
};