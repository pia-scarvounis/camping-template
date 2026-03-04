"use client";

import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  variant?: "default" | "header";
};

export default function LanguageToggle({ variant = "default" }: Props) {
  if (!siteConfig.features.languageSwitch) return null;

  const { lang, setLang } = useLanguage();

  const isHeader = variant === "header";

  const active = isHeader ? "font-medium text-[var(--header-text)]" : "font-medium text-gray-900";
  const inactive = isHeader
    ? "text-[var(--header-text)]/70 hover:text-[var(--header-text)]"
    : "text-gray-500 hover:text-gray-900";
  const divider = isHeader ? "text-[var(--header-text)]/30" : "text-gray-300";

  return (
    <div className="flex items-center justify-end gap-2 text-sm">
      <button
        type="button"
        onClick={() => setLang("no")}
        className={lang === "no" ? active : inactive}
      >
        Norsk
      </button>

      <span className={divider}>|</span>

      <button
        type="button"
        onClick={() => setLang("en")}
        className={lang === "en" ? active : inactive}
      >
        English
      </button>
    </div>
  );
}