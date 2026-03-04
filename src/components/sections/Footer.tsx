"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import BrandMark from "@/components/ui/BrandMark";

export default function Footer() {
  if (!siteConfig.features.footer) return null;

  const { brand, footer } = siteConfig;
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPrivacyOpen(false);
    };

    if (privacyOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [privacyOpen]);

  const privacyTitle = footer.privacy.title[safeLang];
  const privacyParagraphs = footer.privacy.paragraphs[safeLang];

  return (
    <>
      <footer
        className="
          relative
          bg-[var(--footer-bg)]
          border-t border-black/5
          shadow-[0_-12px_40px_-25px_rgba(0,0,0,0.15)]
        "
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid gap-12 sm:grid-cols-3">
            {/* COLUMN 1 – Brand */}
            <div className="space-y-5">
              <BrandMark href="#top" size="sm" />

              <p className="text-sm text-gray-600 leading-relaxed max-w-xs font-medium">
                {footer.tagline[safeLang]}
              </p>
            </div>

            {/* COLUMN 2 – Info */}
            <div className="space-y-5">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em]">
                {footer.infoTitle[safeLang]}
              </div>

              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <span>
                  {footer.orgLabel[safeLang]}:{" "}
                  <span className="font-medium text-gray-900">
                    {footer.orgNumber}
                  </span>
                </span>

                <span>{brand.location}</span>

                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="text-left hover:text-black transition-colors"
                >
                  {footer.privacyLabel[safeLang]}
                </button>
              </div>
            </div>

            {/* COLUMN 3 – Navigation */}
            <div className="space-y-5">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em]">
                {footer.navTitle[safeLang]}
              </div>

              <button
                type="button"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black transition"
              >
                ↑ {footer.backToTopLabel[safeLang]}
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 gap-4">
            <span>
              © {new Date().getFullYear()} {brand.name}
            </span>

            {footer.credit?.href && footer.credit?.label && (
              <a
                href={footer.credit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 underline underline-offset-4"
              >
                {footer.credit.label}
              </a>
            )}
          </div>
        </div>
      </footer>

      {/* PRIVACY POPUP */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <button
            aria-label="Close privacy popup"
            onClick={() => setPrivacyOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {privacyTitle}
              </h2>

              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="text-gray-400 hover:text-black text-xl"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              {privacyParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}