"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageSwitch() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="rounded-full border border-orange-300 px-3 py-1 text-xs font-semibold text-brand-900 transition hover:bg-orange-100"
      aria-label="Toggle language"
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
