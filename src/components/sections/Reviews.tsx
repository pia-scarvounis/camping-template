"use client";

import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Reviews() {
  if (!siteConfig.features.reviews) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.reviewsSection;
  const items = section.items ?? [];

  if (items.length === 0) return null;

  return (
    <Section id="anmeldelser" variant="odd">
      <Reveal variant="heading">
        <SectionHeader lang={safeLang} title={section.title} lead={section.lead} />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r, idx) => (
          <div
            key={`${r.name.no}-${idx}`}
            className="rounded-2xl bg-white border border-black/5 p-6"
          >
            {typeof r.stars === "number" && (
              <div className="text-sm text-[var(--brand)]">
                {"★".repeat(Math.max(0, Math.min(5, r.stars)))}
              </div>
            )}

            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              “{r.text[safeLang]}”
            </p>

            <p className="mt-4 text-sm font-semibold text-gray-900">
              {r.name[safeLang]}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}