export type Locale = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
