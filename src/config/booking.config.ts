// src/config/booking.config.ts
import type { BookingSection } from "./types";

export const bookingSection: BookingSection = {
  enabled: true,
  buttonLabel: { no: "Sjekk tilgjengelighet", en: "Check availability" },
  fields: [
    { key: "checkIn", type: "date", label: { no: "Innsjekk", en: "Check in" } },
    { key: "checkOut", type: "date", label: { no: "Utsjekk", en: "Check out" } },
    {
      key: "guests",
      type: "select",
      label: { no: "Gjester", en: "Guests" },
      options: [
        { value: "1", label: { no: "1", en: "1" } },
        { value: "2", label: { no: "2", en: "2" } },
        { value: "3", label: { no: "3", en: "3" } },
        { value: "4", label: { no: "4+", en: "4+" } },
      ],
    },
  ],
};