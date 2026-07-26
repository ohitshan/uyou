import { ExternalLink } from "lucide-react";

export interface PostCardProps {
  title: string;
  url: string;
  publishedAt: string | null;
}

export function PostCard({ title, url, publishedAt }: PostCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-border bg-surface p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-body-lg font-medium text-text-primary">{title}</p>
        <ExternalLink
          className="mt-0.5 h-4 w-4 shrink-0 text-text-tertiary transition-colors group-hover:text-primary"
          aria-hidden="true"
        />
      </div>

      {publishedAt && (
        <p className="mt-1 text-caption text-text-tertiary">
          {new Date(publishedAt).toLocaleDateString("ko-KR")}
        </p>
      )}
    </a>
  );
}