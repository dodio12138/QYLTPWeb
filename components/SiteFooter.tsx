"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getSiteInfo } from "@/lib/content";
import { localize } from "@/lib/i18n";

export function SiteFooter() {
  const { locale } = useLanguage();
  const site = getSiteInfo();

  return (
    <footer className="mt-16 border-t border-orange-200 bg-white/80">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 text-sm text-gray-700 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-semibold text-brand-900">{localize(site.name, locale)}</p>
          <p>{localize(site.address, locale)}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-900">{locale === "en" ? "Contact" : "联系"}</p>
          <p>
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-brand-900">{locale === "en" ? "Hours" : "营业时间"}</p>
          {site.hours.map((slot) => (
            <p key={slot.day.en}>{localize(slot.day, locale)}: {slot.time}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
