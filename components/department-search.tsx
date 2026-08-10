"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

interface SearchResult {
  id: string;
  department_name_ko: string;
  department_name_en: string | null;
  universities: {
    slug: string;
    name: string;
    logo_url: string;
    university_translations: { name: string }[];
  } | null;
}

export function DepartmentSearch({ locale }: { locale: string }) {
  const t = useTranslations("Home");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function runSearch() {
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      setSearched(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("university_departments")
      .select(
        `id, department_name_ko, department_name_en,
         universities!inner(slug, name, logo_url, university_translations!left(name))`,
      )
      .eq("universities.university_translations.locale", locale)
      .or(`department_name_ko.ilike.%${q}%,department_name_en.ilike.%${q}%`)
      .limit(30);

    if (!error && data) {
      setResults(data as unknown as SearchResult[]);
    }
    setLoading(false);
    setSearched(true);
  }

  return (
    <div className="mb-10">
      <h2 className="mb-4 text-h2 font-bold text-text-primary">
        {t("deptSearchTitle")}
      </h2>

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          runSearch();
        }}
      >
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("deptSearchPlaceholder")}
          className="h-11 flex-1 rounded-md border border-border-strong bg-surface px-3 text-body-lg text-text-primary placeholder:text-text-tertiary focus:border-primary focus:outline-none focus:ring-2 focus:ring-focus-ring"
        />

        <Button type="submit" size="lg" disabled={loading}>
          {t("deptSearchButton")}
        </Button>
      </form>

      {query.trim().length > 0 && query.trim().length < 2 && (
        <p className="mt-2 text-sm text-text-tertiary">{t("deptSearchHint")}</p>
      )}

      {loading && (
        <p className="mt-3 text-sm text-text-secondary">
          {t("deptSearchLoading")}
        </p>
      )}

      {!loading && searched && results.length === 0 && (
        <div className="mt-3 rounded-lg border border-border bg-surface p-6 text-center text-text-secondary">
          {t("deptSearchEmpty")}
        </div>
      )}

      {!loading && results.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {results.map((r) => {
            const uni = r.universities;
            if (!uni) return null;
            const uniName = uni.university_translations?.[0]?.name || uni.name;
            const deptName =
              locale === "ko"
                ? r.department_name_ko
                : r.department_name_en || r.department_name_ko;

            return (
              <li key={r.id}>
                <Link
                  href={`/universities/${uni.slug}`}
                  locale={locale}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-background">
                    <Image
                      src={uni.logo_url}
                      alt={uniName}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-body-md font-medium text-text-primary">
                      {deptName}
                    </p>
                    <p className="truncate text-sm text-text-secondary">
                      {uniName}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
