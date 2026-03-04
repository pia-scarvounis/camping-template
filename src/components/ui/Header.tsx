"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import BrandMark from "@/components/ui/BrandMark";
import { siteConfig } from "@/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const t = useMemo(
    () => ({
      menu: safeLang === "no" ? "Meny" : "Menu",
      close: safeLang === "no" ? "Lukk" : "Close",
      contact: safeLang === "no" ? "Kontakt oss" : "Contact us",
    }),
    [safeLang]
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--header-bg)] text-[var(--header-text)] border-b border-[var(--header-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Litt høyere for “premium” følelse */}
          <div className="flex items-center h-20 lg:h-24">
            {/* Logo: be BrandMark bruke hvit variant i header */}
          <BrandMark href="#top" size="md" />

            <nav className="hidden lg:flex flex-1 justify-center gap-8">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--header-text)]/80 hover:text-[var(--header-text)] transition whitespace-nowrap"
                >
                  {item.label[safeLang]}
                </a>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-4">
              <div className="hidden lg:block">
                {/* Toggle: hvit / dempet hvit */}
                <LanguageToggle variant="header" />
              </div>

              <a
                href="#kontakt"
                className="hidden lg:inline-flex items-center justify-center rounded-full border border-[var(--header-button-border)] px-5 py-2.5 text-sm font-medium text-[var(--header-text)] hover:border-[var(--header-text)] transition"
              >
                {t.contact}
              </a>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="lg:hidden rounded-full border border-[var(--header-border)] bg-[var(--header-mobile-bg)] px-4 py-2 text-sm font-medium text-[var(--header-text)] hover:opacity-80 transition"
              >
                {t.menu}
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            aria-label="Close menu overlay"
          />

          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[var(--header-mobile-panel)] shadow-2xl p-6 border-l border-black/10">
            <div className="flex items-center justify-between mb-6">
              <BrandMark href="#top" size="md" />

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[var(--surface)] transition"
              >
                {t.close}
              </button>
            </div>

            <div className="mb-6">
              <LanguageToggle />
            </div>

            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mb-5 inline-flex w-full items-center justify-start rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              {t.contact}
            </a>

            <nav className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-medium border border-black/10 hover:bg-[var(--surface)] transition"
                >
                  {item.label[safeLang]}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}