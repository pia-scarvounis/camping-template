"use client";

import Image from "next/image";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Accommodations() {
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.accommodationSection;

  return (
    <Section id="overnatting" variant="odd">

      {/* Header – samme system som resten av siden */}
      <Reveal variant="heading">
        <SectionHeader
          lang={safeLang}
          title={section.heading}
          lead={section.subtext}
        />
      </Reveal>

      {/* Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {section.items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-black/5 bg-white hover:shadow-lg transition"
          >
            {/* Bilde */}
            <div className="relative h-64">
              <Image
                src={item.image}
                alt={item.title[safeLang]}
                fill
                className="object-cover"
              />
            </div>

            {/* Tekst */}
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {item.title[safeLang]}
              </h3>

              <p className="text-sm text-gray-600">
                {item.description[safeLang]}
              </p>
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
}