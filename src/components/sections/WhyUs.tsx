"use client";

import Image from "next/image";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WhyUs() {
  if (!siteConfig.features.whyUs) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" | "de" =
    lang === "en" ? "en" : lang === "de" ? "de" : "no";

  const section = siteConfig.whyUsSection;

  const getText = (value: { no: string; en: string; de?: string }) =>
    value[safeLang] ?? value.en;

  const getList = (value: { no: string[]; en: string[]; de?: string[] }) =>
    value[safeLang] ?? value.en;

  const points = getList(section.points);

  return (
    <Section id="opplevelser" variant="even">
      {/* Header sentrert */}
      <Reveal variant="heading">
        <div className="text-center">
          <SectionHeader
            lang={safeLang}
            title={section.title}
            lead={section.lead}
            align="center"
          />
        </div>
      </Reveal>

      {/* Stort bilde */}
      <div className="mt-12 overflow-hidden rounded-3xl shadow-xl">
        <Image
          src={section.image.src}
          alt={getText(section.image.alt)}
          width={1600}
          height={700}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Opplevelser under bildet – mer premium */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-sm font-medium tracking-[0.18em] text-gray-700 uppercase">
        {points.map((item, index) => (
          <div key={item} className="flex items-center gap-4 sm:gap-6">
            <span>{item}</span>

            {index !== points.length - 1 && (
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-gray-400" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}