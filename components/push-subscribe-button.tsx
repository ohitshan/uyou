"use client";

import { useTranslations } from "next-intl";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

interface PushSubscribeButtonProps {
  universityId: string;
}

interface PushStatusResponse {
  subscribed: boolean;
}

interface SubscribePushResponse {
  success: boolean;
}

function urlBase64ToUint8Array(base64String: string): Uint8Array<ArrayBuffer> {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);

  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const buffer = new ArrayBuffer(rawData.length);
  const output = new Uint8Array(buffer);

  for (let i = 0; i < rawData.length; i++) {
    output[i] = rawData.charCodeAt(i);
  }

  return output;
}

/**
 * 현재 Push 구독 상태 조회
 *
 * GET /api/push/subscribe
 */
async function fetchPushStatus(
  universityId: string,
): Promise<PushStatusResponse> {
  if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
    return {
      subscribed: false,
    };
  }

  const registration = await navigator.serviceWorker.ready;

  const subscription = await registration.pushManager.getSubscription();

  if (!subscription) {
    return {
      subscribed: false,
    };
  }

  const response = await fetch(
    `/api/push/subscribe?universityId=${encodeURIComponent(universityId)}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        "x-push-endpoint": subscription.endpoint,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch push subscription status.");
  }

  return response.json();
}

/**
 * Push 구독 저장
 *
 * POST /api/push/subscribe
 */
async function subscribeToPush(
  universityId: string,
  subscription: PushSubscription,
): Promise<SubscribePushResponse> {
  const response = await fetch("/api/push/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      universityId,
      subscription: subscription.toJSON(),
    }),
  });

  if (!response.ok) {
    throw new Error("serverError");
  }

  return response.json();
}

/**
 * Push 구독 취소
 *
 * DELETE /api/push/subscribe
 */
async function unsubscribeFromPush(
  universityId: string,
  endpoint: string,
): Promise<{ success: boolean }> {
  const response = await fetch(
    `/api/push/subscribe?universityId=${encodeURIComponent(universityId)}`,
    {
      method: "DELETE",
      headers: {
        "x-push-endpoint": endpoint,
      },
    },
  );

  if (!response.ok) {
    throw new Error("serverError");
  }

  return response.json();
}

export function PushSubscribeButton({
  universityId,
}: PushSubscribeButtonProps) {
  const t = useTranslations("Push");
  const queryClient = useQueryClient();

  /**
   * 현재 대학의 Push 구독 상태
   */
  const { data: status, isLoading: statusLoading } = useQuery({
    queryKey: ["push-subscribe", universityId],
    queryFn: () => fetchPushStatus(universityId),
    enabled:
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      "PushManager" in window,
    staleTime: 0,
  });

  /**
   * Push 구독
   */
  const subscribeMutation = useMutation({
    mutationFn: async () => {
      if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
        throw new Error("unsupported");
      }

      const permission = await Notification.requestPermission();

      if (permission !== "granted") {
        throw new Error("permissionDenied");
      }

      const registration = await navigator.serviceWorker.ready;

      /**
       * 기존 브라우저 Push Subscription 확인
       */
      const existingSubscription =
        await registration.pushManager.getSubscription();

      const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

      if (!vapidPublicKey) {
        throw new Error("Missing VAPID public key.");
      }

      /**
       * 기존 subscription이 있으면 재사용
       * 없으면 새로 생성
       */
      const subscription =
        existingSubscription ??
        (await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
        }));

      /**
       * 서버에 저장
       */
      return subscribeToPush(universityId, subscription);
    },

    onSuccess: () => {
      queryClient.setQueryData<PushStatusResponse>(
        ["push-subscribe", universityId],
        {
          subscribed: true,
        },
      );

      queryClient.invalidateQueries({
        queryKey: ["push-subscribe", universityId],
      });
    },
  });

  const unsubscribeMutation = useMutation({
    mutationFn: async () => {
      if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
        throw new Error("unsupported");
      }

      const registration = await navigator.serviceWorker.ready;

      const subscription = await registration.pushManager.getSubscription();

      if (!subscription) {
        return {
          success: true,
        };
      }

      return unsubscribeFromPush(universityId, subscription.endpoint);
    },

    onSuccess: () => {
      queryClient.setQueryData<PushStatusResponse>(
        ["push-subscribe", universityId],
        {
          subscribed: false,
        },
      );

      queryClient.invalidateQueries({
        queryKey: ["push-subscribe", universityId],
      });
    },
  });

  const subscribed = status?.subscribed ?? false;

  const loading = statusLoading || subscribeMutation.isPending;

  let errorKey: "unsupported" | "permissionDenied" | "serverError" | null =
    null;

  if (subscribeMutation.error) {
    const message =
      subscribeMutation.error instanceof Error
        ? subscribeMutation.error.message
        : "serverError";

    if (message === "unsupported" || message === "permissionDenied") {
      errorKey = message;
    } else {
      errorKey = "serverError";
    }
  }

  return (
    <div>
      <Button
        variant="secondary"
        size="md"
        onClick={() => {
          if (subscribed) {
            unsubscribeMutation.mutate();
          } else {
            subscribeMutation.mutate();
          }
        }}
        disabled={loading}
      >
        {loading
          ? t("loading")
          : subscribed
            ? t("unsubscribe")
            : t("subscribe")}
      </Button>

      {errorKey && (
        <p className="mt-2 text-sm text-error">{t(`error.${errorKey}`)}</p>
      )}
    </div>
  );
}
