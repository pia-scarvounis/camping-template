"use client";

import Image from "next/image";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";

export default function Services() {
  if (!siteConfig.features.services) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" | "de" =
    lang === "en" ? "en" : lang === "de" ? "de" : "no";

  const section = siteConfig.servicesSection;
  const services = section.items;

  const getText = (value: { no: string; en: string; de?: string }) =>
    value[safeLang] ?? value.en;

  return (
    <Section id="tjenester" variant="even">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const isFeatured =
            section.featuredIndex != null && section.featuredIndex === index;

          return (
            <div
              key={index}
              className={[
                "rounded-3xl border p-8 sm:p-9 text-center transition",
                isFeatured
                  ? "bg-[var(--brand)] text-white shadow-xl border-transparent"
                  : "bg-white border-black/5 shadow-sm hover:shadow-lg",
              ].join(" ")}
            >
              {service.icon && (
                <div className="mb-5 flex justify-center">
                  <Image
                    src={service.icon.src}
                    alt={getText(service.icon.alt)}
                    width={44}
                    height={44}
                    className={[
                      "object-contain",
                      isFeatured ? "brightness-0 invert" : "opacity-90",
                    ].join(" ")}
                  />
                </div>
              )}

              <h3
                className={[
                  "text-base sm:text-lg font-semibold",
                  isFeatured ? "text-white" : "text-[var(--brand)]",
                ].join(" ")}
              >
                {getText(service.title)}
              </h3>

              <p
                className={[
                  "mt-3 text-sm leading-relaxed",
                  isFeatured ? "text-white/85" : "text-gray-600",
                ].join(" ")}
              >
                {getText(service.description)}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}