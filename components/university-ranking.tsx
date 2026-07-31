import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface RankingItem {
  id: string;
  universityName: string;
  campusName: string | null;
  foreignStudentCount: number;
  slug: string | null;
}

export function UniversityRanking({
  items,
  locale,
}: {
  items: RankingItem[];
  locale: string;
}) {
  return (
    <ol className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
      {items.map((item, index) => {
        const rank = index + 1;
        const displayName = item.campusName
          ? `${item.universityName} (${item.campusName})`
          : item.universityName;

        const content = (
          <div className="flex items-center gap-4 p-4">
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                rank <= 3
                  ? "bg-primary text-white"
                  : "bg-primary-light text-primary",
              )}
            >
              {rank}
            </span>

            <span className="flex-1 truncate text-body-lg font-medium text-text-primary">
              {displayName}
            </span>

            <span className="shrink-0 text-body-md font-semibold text-primary">
              {item.foreignStudentCount.toLocaleString()}
            </span>
          </div>
        );

        return (
          <li key={item.id}>
            {item.slug ? (
              <Link
                href={`/universities/${item.slug}`}
                locale={locale}
                className="block transition-colors hover:bg-primary-light"
              >
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ol>
  );
}
