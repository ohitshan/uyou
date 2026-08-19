"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

interface SearchResult {
  id: string;
  department_name_ko: string;
  department_name_en: string | null;
  universities: {
    slug: string;
    name: string;
    logo_url: string;
    university_translations: {
      name: string;
      locale?: string;
    }[];
  } | null;
}

async function searchDepartments(
  q: string,
  locale: string,
): Promise<SearchResult[]> {
  const res = await fetch(
    `/api/departments/search?q=${encodeURIComponent(q)}&locale=${encodeURIComponent(locale)}`,
  );

  if (!res.ok) {
    throw new Error("검색 요청 실패");
  }

  const data = await res.json();
  return data.results as SearchResult[];
}

export function DepartmentSearch({ locale }: { locale: string }) {
  const t = useTranslations("Home");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(searchQuery);

  // 뒤로가기/앞으로가기 등으로 URL의 q가 변경되면 input도 동기화
  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const {
    data: results = [],
    isFetching,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["departments", searchQuery, locale],
    queryFn: () => searchDepartments(searchQuery, locale),
    enabled: searchQuery.trim().length >= 2,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const q = query.trim();

    if (q.length < 2) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("q", q);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="mb-10">
      <h2 className="mb-4 text-h2 font-bold text-text-primary">
        {t("deptSearchTitle")}
      </h2>

      <form className="flex gap-2" onSubmit={handleSubmit}>
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("deptSearchPlaceholder")}
          aria-label={t("deptSearchPlaceholder")}
          className="min-w-0 flex-1 h-11"
        />

        <Button
          type="submit"
          size="lg"
          disabled={isFetching || query.trim().length < 2}
        >
          {t("deptSearchButton")}
        </Button>
      </form>

      {/* 검색어가 1글자일 때 */}
      {query.trim().length > 0 && query.trim().length < 2 && (
        <p className="mt-2 text-sm text-text-tertiary">{t("deptSearchHint")}</p>
      )}

      {/* 검색 중 */}
      {isFetching && (
        <p className="mt-3 text-sm text-text-secondary">
          {t("deptSearchLoading")}
        </p>
      )}

      {/* 검색 오류 */}
      {!isFetching && isError && (
        <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600">
          {t("deptSearchError")}
        </div>
      )}

      {/* 검색 결과 없음 */}
      {!isFetching && !isError && isSuccess && results.length === 0 && (
        <div className="mt-3 rounded-lg border border-border bg-surface p-6 text-center text-text-secondary">
          {t("deptSearchEmpty")}
        </div>
      )}

      {/* 검색 결과 */}
      {!isFetching && !isError && results.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {results.map((result) => {
            const university = result.universities;

            // 대학 정보가 없는 결과는 표시하지 않음
            if (!university) return null;

            const translatedUniversityName =
              university.university_translations?.find(
                (translation) => translation.locale === locale,
              )?.name;

            const universityName = translatedUniversityName || university.name;

            const departmentName =
              locale === "ko"
                ? result.department_name_ko
                : result.department_name_en || result.department_name_ko;

            return (
              <li key={result.id}>
                <Link
                  href={`/universities/${university.slug}`}
                  locale={locale}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-background">
                    <Image
                      src={university.logo_url}
                      alt={universityName}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-body-md font-medium text-text-primary">
                      {departmentName}
                    </p>

                    <p className="truncate text-sm text-text-secondary">
                      {universityName}
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
