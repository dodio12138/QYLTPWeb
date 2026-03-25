"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getSiteInfo } from "@/lib/content";
import { localize } from "@/lib/i18n";

export default function ContactPage() {
  const { locale } = useLanguage();
  const site = getSiteInfo();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-brand-900">{locale === "en" ? "Contact" : "联系"}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-brand-900">{locale === "en" ? "Find Us" : "门店地址"}</h2>
          <p className="mt-2 text-gray-700">{localize(site.address, locale)}</p>
        </article>
        <article className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-brand-900">{locale === "en" ? "Get in Touch" : "联系我们"}</h2>
          <p className="mt-2 text-gray-700">
            {locale === "en" ? "Phone:" : "电话："} <a className="underline" href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a>
          </p>
          <p className="text-gray-700">
            {locale === "en" ? "Email:" : "邮箱："} <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </article>
      </div>

      <section className="rounded-2xl border border-orange-200 bg-orange-50/60 p-6">
        <h2 className="text-lg font-semibold text-brand-900">{locale === "en" ? "Opening Hours" : "营业时间"}</h2>
        <ul className="mt-2 space-y-1 text-gray-700">
          {site.hours.map((slot) => (
            <li key={slot.day.en}>{localize(slot.day, locale)}: {slot.time}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
