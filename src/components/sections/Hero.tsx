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
  min-h-[55vh] max-[375px]:min-h-[52vh] sm:min-h-[70vh] lg:min-h-screen
  pb-10 max-[375px]:pb-16
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

          {/* Clean overlay (kun for lesbar tekst – ikke “fade” nederst) */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal variant="heading" delayMs={120}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              {hero.headline[lang]}
            </h1>
          </Reveal>

          <p className="mt-4 text-base sm:text-xl text-white/90">
            {hero.subtext[lang]}
          </p>

          {/* CTA – mobilvennlig */}
      <div className="mt-3 sm:mt-6 grid grid-cols-1 sm:flex gap-2 max-[375px]:mt-2 max-[375px]:gap-2">
  <a
    href={hero.primaryCta.href}
    className="
      inline-flex items-center justify-center
      rounded-full bg-[var(--brand)]
      px-6 py-2.5 max-[375px]:py-2
      text-sm font-medium text-white
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
      bg-white/10 px-6 py-2.5 max-[375px]:py-2
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

    
    </section>
  );
}