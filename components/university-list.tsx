"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { UniversityCard } from "@/components/university-card";

export interface UniversityListItem {
  id: string;
  name: string;
  region: string;
  logo_url: string;
  slug: string;
}

export function UniversityList({
  universities,
  locale,
}: {
  universities: UniversityListItem[];
  locale: string;
}) {
  const t = useTranslations("Home");
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");

  const regions = useMemo(() => {
    const set = new Set(universities.map((u) => u.region).filter(Boolean));
    return Array.from(set).sort();
  }, [universities]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return universities.filter((u) => {
      const matchesQuery = q === "" || u.name.toLowerCase().includes(q);
      const matchesRegion = region === "all" || u.region === region;
      return matchesQuery && matchesRegion;
    });
  }, [universities, query, region]);

  return (
    <div>
      {/* 타이틀 + 필터된 개수 (같은 줄) */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-h2 font-bold text-text-primary">
          {t("listTitle")}
        </h2>
        <span className="text-sm text-text-secondary">
          {t("count", { count: filtered.length })}
        </span>
      </div>

      {/* 검색 + 지역 필터 */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="h-10 flex-1 rounded-md border border-border-strong bg-surface px-3 text-body-lg text-text-primary placeholder:text-text-tertiary focus:border-primary focus:outline-none focus:ring-2 focus:ring-focus-ring"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="h-10 rounded-md border border-border-strong bg-surface px-3 text-body-lg text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-focus-ring"
        >
          <option value="all">{t("regionAll")}</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* 리스트 */}
      {filtered.length === 0 ? (
        <div className="rounded-lg border border-border bg-surface p-12 text-center text-text-secondary">
          {t("empty")}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-3">
          {filtered.map((u) => (
            <UniversityCard
              key={u.id}
              name={u.name}
              region={u.region}
              logoUrl={u.logo_url}
              href={`/${locale}/universities/${u.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
