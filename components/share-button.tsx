"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Share2 } from "lucide-react";

export function ShareButton({ url, title }: { url: string; title: string }) {
  const t = useTranslations("Share");
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    // Web Share API 지원 여부는 클라이언트에서만 확인 가능 (SSR 시엔 navigator 없음)
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  async function handleNativeShare() {
    try {
      await navigator.share({ title, url });
    } catch {
      // 사용자가 공유 시트를 취소한 경우 등, 별도 처리 불필요
    }
  }

  // 데스크톱 등 미지원 환경에서는 버튼 자체를 렌더링하지 않음
  // (주소창에서 링크 복사가 이미 쉬우므로 별도 UI 불필요)
  if (!canNativeShare) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleNativeShare}
      className="flex items-center gap-1.5 rounded-md border border-border-strong px-3 py-1.5 text-sm text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
    >
      <Share2 className="h-4 w-4" aria-hidden="true" />
      {t("share")}
    </button>
  );
}
