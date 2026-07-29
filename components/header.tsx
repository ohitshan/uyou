import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-16 border-b border-border bg-surface">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/uyou-logo.png"
            alt="UYOU"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="text-lg font-bold text-primary">UYOU</span>
        </Link>

        <LanguageSwitcher />
      </div>
    </header>
  );
}