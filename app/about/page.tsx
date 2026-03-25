"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getSiteInfo } from "@/lib/content";
import { localize } from "@/lib/i18n";

export default function AboutPage() {
  const { locale } = useLanguage();
  const site = getSiteInfo();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-brand-900">{locale === "en" ? "About Us" : "关于我们"}</h1>
      <p className="rounded-2xl border border-orange-200 bg-white p-6 text-gray-700 shadow-sm">
        {locale === "en"
          ? `${site.name.en} serves hand-pulled noodles inspired by northern Chinese street food traditions. Our kitchen prepares dough fresh daily, stretches noodles by hand, and simmers broths for hours to keep flavors deep and clean.`
          : `${site.name.zh}主打受中国北方街头风味启发的手工拉面。我们每天现和面、手工拉面，并长时间熬制汤底，让味道更加醇厚干净。`}
      </p>
      <p className="rounded-2xl border border-orange-200 bg-white p-6 text-gray-700 shadow-sm">
        {locale === "en"
          ? `We are located at ${localize(site.address, locale)} and focus on a concise menu that is easy to maintain, consistent for guests, and quick to update with seasonal specials.`
          : `我们位于${localize(site.address, locale)}，坚持精简菜单，便于日常维护、保证出品稳定，并可快速更新季节限定菜品。`}
      </p>
    </div>
  );
}
