"use client";

import { useEffect } from "react";

const LOCALE_KEY = "uyou-pwa-locale";

const SUPPORTED_LOCALES = ["ko", "en", "my"] as const;

type Locale = (typeof SUPPORTED_LOCALES)[number];

function isSupportedLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

function getBrowserLocale(): Locale {
  const language = navigator.language.toLowerCase();

  if (language.startsWith("ko")) {
    return "ko";
  }

  if (language.startsWith("my")) {
    return "my";
  }

  return "en";
}

export default function PwaEntryPage() {
  useEffect(() => {
    const redirect = async () => {
      // 1. 마지막으로 사용했던 locale
      const savedLocale = localStorage.getItem(LOCALE_KEY);

      if (savedLocale && isSupportedLocale(savedLocale)) {
        window.location.replace(`/${savedLocale}`);
        return;
      }

      // 2. 마지막 locale이 없으면 브라우저 언어 사용
      const locale = getBrowserLocale();

      localStorage.setItem(LOCALE_KEY, locale);

      window.location.replace(`/${locale}`);
    };

    void redirect();
  }, []);

  return (
    <main
      style={{
        display: "grid",
        minHeight: "100svh",
        placeItems: "center",
      }}
    >
      <p>Loading...</p>
    </main>
  );
}
