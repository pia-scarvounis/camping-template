"use client";

import Image from "next/image";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  if (!siteConfig.features.hero) return null;

  const { hero } = siteConfig;
  const { lang } = useLanguage();

  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        flex items-center
        min-h-[75vh] sm:min-h-screen
      "
    >
      {/* Background image */}
      {hero.image && (
        <div className="absolute inset-0">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            className="object-cover"
          />

          {/* Clean overlay */}
          <div className="absolute inset-0 bg-black/45 sm:bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal variant="heading" delayMs={120}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              {hero.headline[lang]}
            </h1>
          </Reveal>

          <p className="mt-4 text-base sm:text-xl text-white/90">
            {hero.subtext[lang]}
          </p>

          {/* CTA – mobilvennlig */}
          <div className="mt-6 grid grid-cols-1 sm:flex gap-3">
            <a
              href={hero.primaryCta.href}
              className="
                inline-flex items-center justify-center
                rounded-full bg-[var(--brand)]
                px-6 py-3 text-sm font-medium text-white
                hover:opacity-90 transition
                w-full sm:w-auto
              "
            >
              {hero.primaryCta.label[lang]}
            </a>

            <a
              href={hero.secondaryCta.href}
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/40
                bg-white/10 px-6 py-3
                text-sm font-medium text-white
                hover:bg-white/15 transition
                w-full sm:w-auto
              "
            >
              {hero.secondaryCta.label[lang]}
            </a>
          </div>
        </div>
      </div>

      {/* Fade nederst */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[var(--section-even)]"
      />
    </section>
  );
}