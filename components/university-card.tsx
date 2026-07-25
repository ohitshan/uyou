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
    <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-background">
        <Image
          src={logoUrl}
          alt={`${name} 로고`}
          width={56}
          height={56}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
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