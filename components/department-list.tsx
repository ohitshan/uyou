"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

export interface DepartmentItem {
  id: string;
  department_name_ko: string;
  department_name_en: string | null;
}

export function DepartmentList({
  departments,
  locale,
  guidelineYear,
  siteUrl,
}: {
  departments: DepartmentItem[];
  locale: string;
  guidelineYear: number;
  siteUrl: string;
}) {
  const t = useTranslations("UniversityDetail");
  const [query, setQuery] = useState("");

  const displayName = (d: DepartmentItem) =>
    locale === "ko"
      ? d.department_name_ko
      : d.department_name_en || d.department_name_ko;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q === "") return departments;
    return departments.filter((d) => displayName(d).toLowerCase().includes(q));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [departments, query, locale]);

  return (
    <div>
      {/* 학과 검색 */}
      {departments.length > 8 && (
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("departmentSearchPlaceholder")}
          className="mb-3 h-10 w-full rounded-md border border-border-strong bg-surface px-3 text-body-lg text-text-primary placeholder:text-text-tertiary focus:border-primary focus:outline-none focus:ring-2 focus:ring-focus-ring"
        />
      )}

      {/* 개수 표시 (검색 중일 때만) */}
      {query.trim() !== "" && (
        <p className="mb-2 text-sm text-text-secondary">
          {t("departmentCount", { count: filtered.length })}
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-border bg-surface p-6 text-center text-text-secondary">
          {t("noDepartmentsMatch")}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {filtered.map((dept) => (
            <span
              key={dept.id}
              className="rounded-full bg-primary-light px-3 py-1.5 text-sm text-primary"
            >
              {displayName(dept)}
            </span>
          ))}
        </div>
      )}

      <p className="mt-4 text-caption text-text-tertiary">
        {t("departmentsNote", { year: guidelineYear })}{" "}
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {t("siteLink")}
        </a>
      </p>
    </div>
  );
}
