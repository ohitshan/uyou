"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<string, string> = {
  ko: "한국어",
  en: "English",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function handleChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- params는 현재 라우트의 동적 세그먼트(slug 등)를 그대로 유지하기 위함
      { pathname, params },
      { locale: nextLocale }
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-border bg-surface p-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => handleChange(loc)}
          className={cn(
            "rounded px-2.5 py-1 text-sm font-medium transition-colors",
            loc === locale
              ? "bg-primary text-white"
              : "text-text-secondary hover:bg-primary-light hover:text-primary"
          )}
          aria-current={loc === locale ? "true" : undefined}
        >
          {LOCALE_LABELS[loc] ?? loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}   