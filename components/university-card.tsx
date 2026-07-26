import Image from "next/image";

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
      <div className="flex h-36 items-center justify-center bg-background p-6">
        <Image
          src={logoUrl}
          alt={`${name} 로고`}
          width={120}
          height={120}
          className="h-full w-full object-contain"
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
      <a href={href} className="block">
        {Card}
      </a>
    );
  }

  return Card;
}