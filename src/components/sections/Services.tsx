"use client";

import Image from "next/image";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";

export default function Services() {
  if (!siteConfig.features.services) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.servicesSection;
  const services = section.items;

  return (
    <Section id="tjenester" variant="even">
      {/* Grid (4 bokser) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const isFeatured =
            section.featuredIndex != null && section.featuredIndex === index;

          return (
            <div
              key={index}
              className={[
                "rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center transition",
                isFeatured
                  ? "bg-[var(--brand)] text-white shadow-xl border border-transparent"
                  : "bg-white border border-black/5 hover:shadow-sm",
              ].join(" ")}
            >
              {service.icon && (
                <Image
                  src={service.icon.src}
                  alt={service.icon.alt[safeLang]}
                  width={44}
                  height={44}
                  className={[
                    "mb-4 object-contain",
                    isFeatured ? "brightness-0 invert" : "opacity-90",
                  ].join(" ")}
                />
              )}

              <h3
                className={[
                  "text-sm sm:text-base font-semibold",
                  isFeatured ? "text-white" : "text-[var(--brand)]",
                ].join(" ")}
              >
                {service.title[safeLang]}
              </h3>

              {/* Vi viser ikke description/price/bullets/cta i camping-varianten */}
            </div>
          );
        })}
      </div>
    </Section>
  );
}