import React from "react";

type Lang = "no" | "en";
type Text = string | { no: string; en: string };

function resolveText(value: Text | undefined, lang: Lang) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value.no ?? "";
}

type Props = {
  title?: Text;
  lead?: Text;
  align?: "left" | "center";
  lang: Lang;
  className?: string;
};

export default function SectionHeader({
  title,
  lead,
  align = "left",
  lang,
  className = "",
}: Props) {
  const t = resolveText(title, lang);
  const l = resolveText(lead, lang);
  if (!t && !l) return null;

  const isCenter = align === "center";

  return (
    <div
      className={[
        isCenter ? "text-center mx-auto" : "text-left",
        // mer luft over alle overskrifter globalt
        "pt-2",
        className,
      ].join(" ")}
    >
      {/* liten “brand marker” under overskrift (high-end og konsistent) */}
      <div className={isCenter ? "mx-auto" : ""}>
        {t ? (
          <>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {t}
            </h2>

            <div
              aria-hidden
              className={[
                "mt-3 h-[3px] w-10 rounded-full bg-[var(--brand)]/70",
                isCenter ? "mx-auto" : "",
              ].join(" ")}
            />
          </>
        ) : null}

        {l ? (
          <p
            className={[
              "mt-4 text-base text-gray-600 sm:text-lg",
              // bedre linjelengde
              "max-w-2xl",
              isCenter ? "mx-auto" : "",
            ].join(" ")}
          >
            {l}
          </p>
        ) : null}
      </div>
    </div>
  );
}