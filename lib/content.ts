import menuData from "@/content/menu.json";
import siteData from "@/content/site.json";

export type SiteInfo = typeof siteData;
export type MenuInfo = typeof menuData;

export function getSiteInfo(): SiteInfo {
  return siteData;
}

export function getMenuInfo(): MenuInfo {
  return menuData;
}

export function formatCurrency(value: number, currencyCode: string): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2
  }).format(value);
}
