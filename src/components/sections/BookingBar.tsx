"use client";

import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingBar() {
  const { lang } = useLanguage();
 const safeLang: "no" | "en" | "de" =
  lang === "en" ? "en" : lang === "de" ? "de" : "no";

  const booking = siteConfig.bookingSection;
  if (!booking?.enabled) return null;

  return (
    <section
      id="booking"
      className="bg-[var(--brand)] py-14 sm:py-16 -mt-16 max-[375px]:-mt-6 sm:-mt-20 relative z-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white shadow-xl border border-black/5">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 sm:p-6 items-end"
          >
            {booking.fields.map((field) => (
              <div
                key={field.key}
                className="rounded-xl border border-black/10 px-4 py-3"
              >
                <p className="text-[10px] font-semibold tracking-wide text-gray-500 uppercase">
                  {field.label[safeLang]}
                </p>

                {field.type === "date" ? (
                  <input
                    type="date"
                    className="mt-1 w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
                  />
                ) : (
                  <select className="mt-1 w-full bg-transparent text-sm font-medium text-gray-900 outline-none">
                    {(field.options ?? []).map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label[safeLang]}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full sm:w-auto rounded-xl bg-[#B08A3C] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              {booking.buttonLabel[safeLang]}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}