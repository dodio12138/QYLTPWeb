"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getSiteInfo } from "@/lib/content";

export default function PrivacyPage() {
  const { locale } = useLanguage();
  const site = getSiteInfo();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-brand-900">{locale === "en" ? "Privacy Policy" : "隐私政策"}</h1>
      <section className="space-y-4 rounded-2xl border border-orange-200 bg-white p-6 text-gray-700 shadow-sm">
        <p>
          {locale === "en"
            ? "We collect only the minimum personal information needed to respond to reservation requests and customer enquiries, such as your name, phone number, and preferred booking time."
            : "我们仅收集处理预订和咨询所需的最少个人信息，例如姓名、电话号码和偏好的预订时间。"}
        </p>
        <p>
          {locale === "en"
            ? "Data is used only for restaurant operations and is not sold to third parties. To request deletion or data access, contact us at"
            : "相关数据仅用于门店运营，不会出售给第三方。如需删除或访问数据，请联系"}
          {" "}
          <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
          {locale === "en" ? "." : "。"}
        </p>
        <p>
          {locale === "en"
            ? "If you have allergy information to share, please provide it directly when booking or ordering so our team can support you safely."
            : "如有过敏信息，请在预订或点餐时提前告知，我们将尽力为你安全安排。"}
        </p>
      </section>
    </div>
  );
}
