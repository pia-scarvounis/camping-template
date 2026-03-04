"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Prices() {
  if (!siteConfig.features.prices) return null;
  if (!siteConfig.pricesSection) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.pricesSection;

  const prices = section.items ?? [];
  if (prices.length === 0) return null;

  const previewCount = section.previewCount ?? 3;
  const visiblePrices = prices.slice(0, previewCount);

  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const modalTitle = useMemo(
    () => section.modalTitle[safeLang],
    [section.modalTitle, safeLang]
  );

  useEffect(() => setMounted(true), []);

  function openModal() {
    setIsModalOpen(true);
    requestAnimationFrame(() => setModalVisible(true));
  }

  function closeModal() {
    setModalVisible(false);
    window.setTimeout(() => setIsModalOpen(false), 160);
  }

  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isModalOpen]);

  const modal =
    mounted && isModalOpen
      ? createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <button
              type="button"
              onClick={closeModal}
              className={[
                "absolute inset-0 bg-black/60 transition-opacity duration-150",
                modalVisible ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-label={modalTitle}
              className={[
                "relative w-full max-w-3xl rounded-3xl bg-white border border-black/10 overflow-hidden",
                "shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)]",
                "transition-all duration-150",
                modalVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-[0.98]",
              ].join(" ")}
            >
              <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-black/5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {modalTitle}
                </h3>

                <button
                  type="button"
                  onClick={closeModal}
                  className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[var(--surface)] transition"
                >
                  <span className="text-xl leading-none text-gray-700">×</span>
                </button>
              </div>

              <div className="max-h-[70vh] overflow-auto px-6 sm:px-8 py-6">
                <ul className="divide-y">
                  {prices.map((item, index) => (
                    <li key={`${item.title.no}-${index}`} className="py-4">
                      <div className="flex items-start justify-between gap-6">
                        <div className="min-w-0">
                          <p className="font-medium text-gray-900">
                            {item.title[safeLang]}
                          </p>
                          {item.description && (
                            <p className="mt-1 text-sm text-gray-600">
                              {item.description[safeLang]}
                            </p>
                          )}
                        </div>

                        <p className="font-semibold text-gray-900 whitespace-nowrap">
                          {item.price[safeLang]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                  >
                    {section.closeLabel[safeLang]}
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <Section id="priser" variant="odd">
        {/* Header: likt som tjenester (venstrestilt, ikke text-center wrapper) */}
        <Reveal variant="heading">
          <SectionHeader
            lang={safeLang}
            align="left"
            title={section.heading}
            lead={section.subtext}
          />
        </Reveal>

        {/* Innhold: bruker samme containerbredde som resten av siden */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-black/5">
          <ul>
            {visiblePrices.map((item, index) => (
              <li
                key={`${item.title.no}-${index}`}
                className="flex justify-between gap-4 py-4 border-b last:border-b-0"
              >
                <div className="min-w-0">
                  <p className="font-medium text-gray-900">
                    {item.title[safeLang]}
                  </p>
                  {item.description && (
                    <p className="mt-1 text-sm text-gray-600">
                      {item.description[safeLang]}
                    </p>
                  )}
                </div>

                <p className="font-medium text-gray-900 whitespace-nowrap">
                  {item.price[safeLang]}
                </p>
              </li>
            ))}
          </ul>

          {siteConfig.features.fullPriceListCta && prices.length > previewCount && (
            <div className="mt-4">
              <button
                type="button"
                onClick={openModal}
                className="text-sm underline text-[var(--brand)]"
              >
                {section.fullListButtonLabel[safeLang]}
              </button>
            </div>
          )}
        </div>
      </Section>

      {modal}
    </>
  );
}