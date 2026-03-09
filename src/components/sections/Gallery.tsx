"use client";

import Image from "next/image";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Gallery() {
  if (!siteConfig.features.gallery) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" | "de" =
    lang === "en" ? "en" : lang === "de" ? "de" : "no";

  const section = siteConfig.gallerySection;

  return (
    <Section id="galleri" variant="odd">
      <Reveal variant="heading">
        <SectionHeader
          lang={safeLang}
          title={section.heading}
          lead={section.subtext}
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {section.images.map((src, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-2xl
              ${index === 0 || index === 3 ? "col-span-2 row-span-2" : ""}
            `}
          >
            <Image
              src={src}
              alt="Fjellcamp gallery"
              width={900}
              height={700}
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}