"use client";

import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  if (!siteConfig.features.contact) return null;

  const { lang } = useLanguage();
  const safeLang: "no" | "en" = lang === "en" ? "en" : "no";

  const section = siteConfig.contactSection;
  const brand = siteConfig.brand;

  const email = brand.email ?? "";

  return (
    <Section id="kontakt" variant="odd">
      <Reveal variant="heading">
        <SectionHeader
          lang={safeLang}
          title={section.title}
          lead={section.lead}
          align="left"
        />
      </Reveal>

      {/* Øverst: samme oppsett som før (kontaktinfo + kart) */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {/* Venstre: kontaktinfo */}
        <div className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8">
          <div className="space-y-3 text-sm text-gray-700">
            {section.show.phone && brand.phone && (
              <p>
                <span className="font-medium">
                  {safeLang === "no" ? "Telefon" : "Phone"}:
                </span>{" "}
                {brand.phone}
              </p>
            )}

            {section.show.email && brand.email && (
              <p>
                <span className="font-medium">
                  {safeLang === "no" ? "E-post" : "Email"}:
                </span>{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="underline decoration-black/20 hover:decoration-black/40"
                >
                  {brand.email}
                </a>
              </p>
            )}

            {section.show.address && brand.address?.[safeLang] && (
              <p>
                <span className="font-medium">
                  {safeLang === "no" ? "Adresse" : "Address"}:
                </span>{" "}
                {brand.address[safeLang]}
              </p>
            )}
          </div>

          {/* Knapp til kart */}
          {brand.maps?.link && (
            <div className="mt-6">
              <a
                href={brand.maps.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              >
                {safeLang === "no" ? "Åpne i kart" : "Open in maps"}
              </a>
            </div>
          )}
        </div>

        {/* Høyre: kart */}
        {section.show.map && brand.maps?.embedUrl && (
          <div className="overflow-hidden rounded-2xl border border-black/5 bg-white min-h-[320px]">
            <iframe
              src={brand.maps.embedUrl}
              className="h-full w-full min-h-[320px]"
              loading="lazy"
              title={safeLang === "no" ? "Kart" : "Map"}
            />
          </div>
        )}
      </div>

      {/* Under: kontaktskjema (nytt, men matcher designet) */}
      <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 sm:p-8">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
          {safeLang === "no" ? "Send oss en melding" : "Send us a message"}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {safeLang === "no"
            ? "Dette skjemaet åpner e-postprogrammet ditt (ingen backend i v1)."
            : "This form opens your email client (no backend in v1)."}
        </p>

        <form
          className="mt-6 grid gap-4 sm:grid-cols-2"
          action={email ? `mailto:${email}` : undefined}
          method="post"
          encType="text/plain"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {safeLang === "no" ? "Navn" : "Name"}
            </label>
            <input
              name="name"
              className="mt-2 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]/30"
              placeholder={safeLang === "no" ? "Ditt navn" : "Your name"}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {safeLang === "no" ? "Telefon" : "Phone"}
            </label>
            <input
              name="phone"
              className="mt-2 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]/30"
              placeholder={
                safeLang === "no" ? "Ditt telefonnummer" : "Your phone number"
              }
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              {safeLang === "no" ? "E-post" : "Email"}
            </label>
            <input
              name="email"
              type="email"
              className="mt-2 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]/30"
              placeholder={safeLang === "no" ? "din@epost.no" : "you@email.com"}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              {safeLang === "no" ? "Melding" : "Message"}
            </label>
            <textarea
              name="message"
              rows={6}
              className="mt-2 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]/30 resize-none"
              placeholder={
                safeLang === "no" ? "Skriv meldingen din her…" : "Write your message here…"
              }
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              disabled={!email}
              title={!email ? "Mangler e-post i siteConfig.brand.email" : undefined}
            >
              {safeLang === "no" ? "Send melding" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}