import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center">
        <span className="text-lg font-bold text-primary">UYOU</span>

        <a
          href="mailto:uyou9599@gmail.com"
          className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-primary"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          uyou9599@gmail.com
        </a>

        <p className="text-xs text-text-tertiary">{t("copyright")}</p>
      </div>
    </footer>
  );
}
