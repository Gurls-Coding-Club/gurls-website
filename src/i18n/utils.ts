import en from "./en.json";
import de from "./de.json";

export const translations = {
  en,
  de,
} as const;

export type Language = keyof typeof translations;

export const languages: Language[] = ["en", "de"];
export const defaultLang = "en";

/**
 * Extracts the language code from a URL pathname.
 * For example: /about -> 'en', /de/about -> 'de'
 */
export function getLangFromUrl(url: URL): Language {
  const segments = url.pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && firstSegment in translations) {
    return firstSegment as Language;
  }

  return defaultLang;
}

/**
 * Generates a localized path for the given language.
 * English uses no prefix (e.g., '/join'), German uses /de prefix (e.g., '/de/join').
 *
 * @param lang - The language code ('en' or 'de')
 * @param path - The path to localize (with or without leading slash)
 * @returns The localized path
 *
 * @example
 * getLocalizedPath('en', '/join') // Returns '/join'
 * getLocalizedPath('de', '/join') // Returns '/de/join'
 * getLocalizedPath('en', '/#about') // Returns '/#about'
 */
export function getLocalizedPath(lang: Language, path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // English is the default locale, no prefix needed
  if (lang === defaultLang) {
    return cleanPath;
  }

  // Other languages get their prefix
  return `/${lang}${cleanPath}`;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: Record<string, any> | string = translations[lang];

    for (const k of keys) {
      if (typeof value === "object" && value !== null) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    // Warn in development when translation is missing
    if (!value && import.meta.env.DEV) {
      console.warn(`Missing translation: "${key}" for language: ${lang}`);
    }

    return typeof value === "string" ? value : key;
  };
}
