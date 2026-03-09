"use client";

import Image from "next/image";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Accommodations() {
  const { lang } = useLanguage();
  const safeLang: "no" | "en" | "de" =
    lang === "en" ? "en" : lang === "de" ? "de" : "no";

  const section = siteConfig.accommodationSection;

  const getText = (value: { no: string; en: string; de?: string }) =>
    value[safeLang] ?? value.en;

  return (
    <Section id="overnatting" variant="odd">
      <Reveal variant="heading">
        <SectionHeader
          lang={safeLang}
          title={section.heading}
          lead={section.subtext}
        />
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {section.items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-black/5 bg-white hover:shadow-lg transition"
          >
            <div className="relative h-64">
              <Image
                src={item.image}
                alt={getText(item.title)}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {getText(item.title)}
              </h3>

              <p className="text-sm text-gray-600">
                {getText(item.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}