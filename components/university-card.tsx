import Image from "next/image";
import Link from "next/link";

export interface UniversityCardProps {
  name: string;
  region: string;
  logoUrl: string;
  href?: string;
}

export function UniversityCard({
  name,
  region,
  logoUrl,
  href,
}: UniversityCardProps) {
  const Card = (
    <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-shadow hover:shadow-md">
      {/* 로고 영역 - 메인으로 크게 */}
      <div className="relative aspect-square w-full overflow-hidden bg-background">
        <Image
          src={logoUrl}
          alt={`${name} 캠퍼스`}
          fill
          className="object-cover"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="border-t border-border p-5">
        <h3 className="truncate text-lg font-semibold text-text-primary">
          {name}
        </h3>
        <p className="mt-1 text-sm text-text-secondary">{region}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block" prefetch>
        {Card}
      </Link>
    );
  }

  return Card;
}
