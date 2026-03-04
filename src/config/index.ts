// src/config/index.ts
// Foreløpig: vi peker bare videre til den gamle siteConfig.
// Dette gjør at vi kan bytte import-sti gradvis, én fil av gangen.

export { siteConfig } from "@/data/siteConfig";

// Eksporter typene fra types.ts så vi kan importere dem som "@/config"
export type * from "./types";