"use client";

import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";

type BrandMarkProps = {
  href?: string;
  size?: "sm" | "md";
  showName?: boolean;
  className?: string;
};

export default function BrandMark({
  href = "#top",
  size = "md",
  showName = false,
  className = "",
}: BrandMarkProps) {
  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  // Bruk SVG-logo (din fil)
  const logoSrc = siteConfig.brand.logo?.src ?? "/icons/min-bedrift.svg";
  const logoAlt = siteConfig.brand.logo?.alt?.[safeLang] ?? siteConfig.brand.name;

  // Størrelser (samme som før)
  const widthClass = size === "sm" ? "w-[140px] sm:w-[150px]" : "w-[150px] sm:w-[170px]";
  const heightClass = size === "sm" ? "h-9" : "h-10";

  return (
    <a href={href} className={`flex items-center gap-3 whitespace-nowrap ${className}`}>
      {/* 
        IMPORTANT:
        SVG kan farges via CSS hvis den bruker currentColor.
        Derfor legger vi logoen i en wrapper som arver header-tekstfarge.
      */}
      <div className={`flex items-center ${heightClass}`}>
        <img
          src={logoSrc}
          alt={logoAlt}
          className={`${widthClass} ${heightClass} object-contain`}
        />
      </div>

      {showName && (
        <span className="text-sm sm:text-base font-semibold text-[var(--foreground)]">
          {siteConfig.brand.name}
        </span>
      )}
    </a>
  );
}