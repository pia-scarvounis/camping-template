"use client";

import { useState } from "react";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Process() {
  if (!siteConfig.features.process) return null;
  if (!siteConfig.processSection) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.processSection;

  const items = section.items?.[safeLang] ?? [];
  if (items.length === 0) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <Section id="prosess" variant="even">
      {/* Header – i midten */}
      <div className="mx-auto max-w-2xl text-center">
        <Reveal variant="heading">
          <SectionHeader
            lang={safeLang}
            title={section.title}
            lead={section.lead}
            align="center"
          />
        </Reveal>
      </div>

      {/* Accordion card – i midten */}
      <div className="mx-auto mt-10 max-w-3xl">
        <div className="rounded-3xl border border-black/5 bg-white shadow-sm overflow-hidden">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${item.title}-${index}`}
                className="border-b last:border-b-0 border-black/5"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-gray-900">
                    {item.title}
                  </span>

                  {/* classy + / x */}
                  <span
                    className={[
                      "h-10 w-10 rounded-full border border-black/10 flex items-center justify-center",
                      "text-[var(--brand)] transition-transform duration-200",
                      isOpen ? "rotate-45" : "rotate-0",
                    ].join(" ")}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-7 -mt-2">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}