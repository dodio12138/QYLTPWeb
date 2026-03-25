"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getSiteInfo } from "@/lib/content";
import { localize } from "@/lib/i18n";

export default function HomePage() {
  const { locale } = useLanguage();
  const site = getSiteInfo();

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-orange-200 bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
          {locale === "en" ? "London Chinese Noodle Shop" : "伦敦中餐面馆"}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-brand-900 md:text-5xl">{localize(site.name, locale)}</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">{localize(site.tagline, locale)}. {localize(site.description, locale)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/menu" className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
            {locale === "en" ? "Browse Menu" : "查看菜单"}
          </Link>
          <Link href="/reserve" className="rounded-full border border-orange-300 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-orange-100">
            {locale === "en" ? "Reserve a Table" : "立即预订"}
          </Link>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-orange-200 bg-orange-50/60 p-6 md:grid-cols-3">
        <article>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-700">{locale === "en" ? "Address" : "地址"}</h2>
          <p className="mt-2 text-gray-800">{localize(site.address, locale)}</p>
        </article>
        <article>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-700">{locale === "en" ? "Hours" : "营业时间"}</h2>
          <ul className="mt-2 space-y-1 text-gray-800">
            {site.hours.map((slot) => (
              <li key={slot.day.en}>{localize(slot.day, locale)}: {slot.time}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-700">{locale === "en" ? "Contact" : "联系"}</h2>
          <p className="mt-2 text-gray-800"><a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a></p>
          <p className="text-gray-800"><a href={`mailto:${site.email}`}>{site.email}</a></p>
        </article>
      </section>
    </div>
  );
}
