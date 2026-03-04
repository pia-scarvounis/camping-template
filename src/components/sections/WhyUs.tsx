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
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.whyUsSection;

  // Points må finnes for at seksjonen skal gi mening
  const points = section.points?.[safeLang] ?? [];
  if (points.length === 0) return null;

  return (
    <Section id="hvorfor-oss" variant="even">
      {/* Header (samme mønster som Services/Process) */}
      <Reveal variant="heading">
        <SectionHeader lang={safeLang} title={section.title} lead={section.lead} />
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Venstre: bilde */}
        {section.image?.src ? (
          <Reveal className="reveal-image-left" delayMs={120}>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full">
                <Image
                  src={section.image.src}
                  alt={section.image.alt?.[safeLang] ?? section.image.alt?.no ?? "Why us"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        ) : null}

        {/* Høyre: punkter */}
        <div>
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--brand)]"
                >
                  ✓
                </span>

                <span className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}