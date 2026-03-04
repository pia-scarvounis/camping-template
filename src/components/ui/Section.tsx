"use client";

import React from "react";

export type SectionVariant = "odd" | "even" | "white" | "surface";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
  paddingClassName?: string;
};

function bgClass(variant: SectionVariant) {
  switch (variant) {
    case "even":
      return "bg-[var(--section-even)]";
    case "odd":
      return "bg-[var(--section-odd)]";
    case "surface":
      return "bg-[var(--surface)]";
    case "white":
    default:
      return "bg-[var(--white)]";
  }
}

export default function Section({
  id,
  children,
  className = "",
  variant = "white",
  // Global responsive spacing (mobil -> desktop)
  paddingClassName = "py-14 sm:py-20 lg:py-24",
}: Props) {
  return (
    <section
      id={id}
      className={[
        "relative overflow-hidden",
        bgClass(variant),
        paddingClassName,
        className,
      ].join(" ")}
    >
      {/* Subtil struktur (ser mer “designet” ut uten at du gjør noe per seksjon) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(900px 240px at 50% -40px, rgba(0,0,0,0.06), transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}