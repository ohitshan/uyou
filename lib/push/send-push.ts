import webpush from "web-push";
import { supabaseAdmin } from "@/lib/supabase-admin";

webpush.setVapidDetails(
  `mailto:${process.env.VAPID_SUBJECT}`,
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
);

type PushPost = {
  title: string;
  url: string;
};

type PushSubscription = {
  id: string;
  endpoint: string;
  p256dh: string;
  auth: string;
};

type SubscriptionRow = {
  subscription_id: string;
  push_subscriptions: PushSubscription | PushSubscription[] | null;
};

export async function sendUniversityPush(
  universityId: string,
  universityName: string,
  posts: PushPost[],
) {
  if (posts.length === 0) {
    return;
  }

  const { data, error } = await supabaseAdmin
    .from("university_push_subscriptions")
    .select(
      `
      subscription_id,
      push_subscriptions (
        id,
        endpoint,
        p256dh,
        auth
      )
    `,
    )
    .eq("university_id", universityId);

  if (error) {
    throw new Error(`Push subscription 조회 실패: ${error.message}`);
  }

  const subscriptions = (data ?? []) as SubscriptionRow[];

  if (subscriptions.length === 0) {
    console.log(`[Push] ${universityName}: 구독자가 없습니다.`);
    return;
  }

  const firstPost = posts[0];

  const payload = JSON.stringify({
    title: universityName,
    body:
      posts.length === 1
        ? firstPost.title
        : `${firstPost.title} 외 ${
            posts.length - 1
          }개의 새로운 공지가 있습니다.`,
    url: firstPost.url,
  });

  await Promise.all(
    subscriptions.map(async (row) => {
      const subscription = Array.isArray(row.push_subscriptions)
        ? row.push_subscriptions[0]
        : row.push_subscriptions;

      if (!subscription) {
        return;
      }

      try {
        await webpush.sendNotification(
          {
            endpoint: subscription.endpoint,
            keys: {
              p256dh: subscription.p256dh,
              auth: subscription.auth,
            },
          },
          payload,
        );

        console.log(`[Push] sent: ${universityName}`);
      } catch (error: unknown) {
        const pushError = error as {
          statusCode?: number;
          message?: string;
        };

        console.error(`[Push] failed: ${universityName}`, error);

        // 만료/삭제된 subscription 제거
        if (pushError.statusCode === 404 || pushError.statusCode === 410) {
          await supabaseAdmin
            .from("push_subscriptions")
            .delete()
            .eq("id", subscription.id);

          console.log(
            `[Push] removed invalid subscription: ${subscription.id}`,
          );
        }
      }
    }),
  );
}
