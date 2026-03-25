"use client";

import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { useLanguage } from "@/components/LanguageProvider";
import { getSiteInfo } from "@/lib/content";
import { localize } from "@/lib/i18n";

const navItems = [
  { href: "/", label: { en: "Home", zh: "首页" } },
  { href: "/menu", label: { en: "Menu", zh: "菜单" } },
  { href: "/about", label: { en: "About", zh: "关于" } },
  { href: "/contact", label: { en: "Contact", zh: "联系" } },
  { href: "/reserve", label: { en: "Reserve", zh: "预订" } },
  { href: "/privacy", label: { en: "Privacy", zh: "隐私" } }
];

export function SiteHeader() {
  const { locale } = useLanguage();
  const site = getSiteInfo();

  return (
    <header className="border-b border-orange-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-brand-900">
          {localize(site.name, locale)}
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-1 transition hover:bg-orange-100 hover:text-brand-900">
                {localize(item.label, locale)}
              </Link>
            ))}
          </nav>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
