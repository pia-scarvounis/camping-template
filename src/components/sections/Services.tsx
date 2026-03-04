"use client";

import Image from "next/image";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Services() {
  if (!siteConfig.features.services) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.servicesSection;
  const services = section.items;

  return (
    <Section id="tjenester" variant="even">
      {/* Header */}
      <Reveal variant="heading">
        <SectionHeader
          lang={safeLang}
          title={section.title}
          lead={section.lead}
        />
      </Reveal>

      {/* Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
         const isFeatured = section.featuredIndex != null && section.featuredIndex === index;

          return (
            <div
              key={index}
              className={[
                "rounded-2xl p-6 flex flex-col justify-between transition",
                isFeatured
                  ? "bg-[var(--brand)] text-white shadow-xl border border-transparent"
                  : "bg-white border border-black/5 hover:shadow-sm",
              ].join(" ")}
            >
              <div>
                {service.icon && (
                  <Image
                    src={service.icon.src}
                    alt={service.icon.alt[safeLang]}
                    width={28}
                    height={28}
                    className={isFeatured ? "opacity-100" : "opacity-80"}
                  />
                )}

                <h3
                  className={[
                    "mt-2 text-lg font-semibold",
                    isFeatured ? "text-white" : "text-gray-900",
                  ].join(" ")}
                >
                  {service.title[safeLang]}
                </h3>

                <p
                  className={[
                    "mt-2 text-sm leading-relaxed",
                    isFeatured ? "text-white/90" : "text-gray-700",
                  ].join(" ")}
                >
                  {service.description[safeLang]}
                </p>

                {service.price ? (
                  <p
                    className={[
                      "mt-4 text-base font-semibold",
                      isFeatured ? "text-white" : "text-gray-900",
                    ].join(" ")}
                  >
                    {section.priceLabel[safeLang]}{" "}
                    <span>{service.price[safeLang]}</span>
                  </p>
                ) : null}

                {service.bullets?.[safeLang]?.length ? (
                  <ul className="mt-4 space-y-2">
                    {service.bullets[safeLang].map((item) => (
                      <li
                        key={item}
                        className={[
                          "flex gap-3 text-sm",
                          isFeatured ? "text-white/90" : "text-gray-700",
                        ].join(" ")}
                      >
                        <span
                          aria-hidden
                          className={[
                            "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full",
                            isFeatured
                              ? "bg-white/20 text-white"
                              : "bg-[var(--surface)] text-[var(--brand)]",
                          ].join(" ")}
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <a
                href={service.cta.href}
                className={[
                  "mt-6 inline-flex items-center text-sm font-medium",
                  isFeatured ? "text-white" : "text-gray-900",
                ].join(" ")}
              >
                {service.cta.label[safeLang]} →
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
}