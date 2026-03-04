"use client";

import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FAQ() {
  if (!siteConfig.features.faq) return null;
  if (!siteConfig.faqSection) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.faqSection;
  const items = section.items ?? [];
  if (items.length === 0) return null;

  return (
    <Section id="faq" variant="even">
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

      {/* FAQ box – i midten */}
      <div className="mx-auto mt-10 max-w-3xl">
        <div className="divide-y divide-black/5 rounded-3xl border border-black/5 bg-white shadow-sm overflow-hidden">
          {items.map((item, index) => (
            <details
              key={`${item.question.no}-${index}`}
              className="group px-6 sm:px-8 py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-gray-900">
                  {item.question[safeLang]}
                </h3>

                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-[var(--brand)] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.answer[safeLang]}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}