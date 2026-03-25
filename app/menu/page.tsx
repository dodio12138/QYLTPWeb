"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { formatCurrency, getMenuInfo, getSiteInfo } from "@/lib/content";
import { localize } from "@/lib/i18n";

export default function MenuPage() {
  const { locale } = useLanguage();
  const menu = getMenuInfo();
  const site = getSiteInfo();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-brand-900">{locale === "en" ? "Menu" : "菜单"}</h1>
        <p className="mt-2 text-gray-700">
          {locale === "en"
            ? `Fresh noodles, sides, and drinks. Prices are in ${menu.currency}.`
            : `新鲜拉面、小食与饮品。价格单位：${menu.currency}。`}
        </p>
      </header>

      {menu.categories.map((category) => (
        <section key={category.name.en} className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-900">{localize(category.name, locale)}</h2>
          <ul className="mt-4 space-y-4">
            {category.items.map((item) => (
              <li key={item.name.en} className="flex items-start justify-between gap-6 border-b border-orange-100 pb-4 last:border-b-0 last:pb-0">
                <div>
                  <p className="font-semibold text-gray-900">{localize(item.name, locale)}</p>
                  <p className="text-sm text-gray-600">{localize(item.description, locale)}</p>
                </div>
                <p className="whitespace-nowrap font-semibold text-brand-700">{formatCurrency(item.price, menu.currency)}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        {locale === "en" ? "Allergen notice: " : "过敏原提示："}
        {localize(site.allergenNotice, locale)}
      </p>
    </div>
  );
}
