"use client";

import Image from "next/image";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Team() {
  if (!siteConfig.teamSection) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.teamSection;
  const members = section.members ?? [];
  if (members.length === 0) return null;

  const labels = {
    languages: { no: "Språk", en: "Languages" },
  };

  return (
    <Section id="team" variant="even">
      {/* Header */}
      <Reveal variant="heading">
        <SectionHeader
          lang={safeLang}
          title={section.heading}
          lead={section.subtext}
        />
      </Reveal>

      {/* Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <article
            key={m.name}
            className="rounded-2xl bg-white border border-black/5 p-5 transition hover:shadow-sm"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-[var(--surface)]">
              <Image src={m.image} alt={m.name} fill className="object-cover" />
            </div>

            <h3 className="mt-4 text-base font-semibold text-gray-900">
              {m.name}
            </h3>
            <p className="text-sm text-gray-600 italic">{m.title[safeLang]}</p>

            <div className="mt-4 space-y-1 text-sm text-gray-700">
              {m.languages?.length ? (
                <p>
                  <span className="font-medium">
                    {labels.languages[safeLang]}:
                  </span>{" "}
                  {m.languages.join(", ")}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}