"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getSiteInfo } from "@/lib/content";

export default function ReservePage() {
  const { locale } = useLanguage();
  const site = getSiteInfo();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-brand-900">{locale === "en" ? "Reserve" : "预订"}</h1>
      <p className="text-gray-700">{locale === "en" ? "Choose one of the lightweight reservation options below." : "请选择以下任一轻量预订方式。"}</p>

      <div className="grid gap-4 md:grid-cols-3">
        <a href={site.reservation.opentableUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm transition hover:border-brand-500 hover:shadow">
          <h2 className="text-lg font-semibold text-brand-900">OpenTable</h2>
          <p className="mt-2 text-sm text-gray-700">{locale === "en" ? "Book online in a few clicks." : "在线快速完成预订。"}</p>
        </a>

        <a href={site.reservation.whatsapp} target="_blank" rel="noreferrer" className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm transition hover:border-brand-500 hover:shadow">
          <h2 className="text-lg font-semibold text-brand-900">WhatsApp</h2>
          <p className="mt-2 text-sm text-gray-700">{locale === "en" ? "Message us directly for fast confirmation." : "直接发消息，快速确认。"}</p>
        </a>

        <a href={`tel:${site.reservation.phone.replace(/\s+/g, "")}`} className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm transition hover:border-brand-500 hover:shadow">
          <h2 className="text-lg font-semibold text-brand-900">{locale === "en" ? "Call" : "电话预订"}</h2>
          <p className="mt-2 text-sm text-gray-700">{site.reservation.phone}</p>
        </a>
      </div>
    </div>
  );
}
