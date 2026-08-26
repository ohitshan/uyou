import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { universityId, subscription } = body;

    if (!universityId || !subscription) {
      return NextResponse.json(
        { error: "universityId와 subscription이 필요합니다." },
        { status: 400 },
      );
    }

    const { endpoint, expirationTime, keys } = subscription;

    if (!endpoint || !keys?.p256dh || !keys?.auth) {
      return NextResponse.json(
        { error: "잘못된 Push subscription입니다." },
        { status: 400 },
      );
    }
    console.log(123);
    // Push subscription 저장
    const { data: pushSubscription, error: subscriptionError } =
      await supabaseAdmin
        .from("push_subscriptions")
        .upsert(
          {
            endpoint,
            p256dh: keys.p256dh,
            auth: keys.auth,
            expiration_time: expirationTime
              ? new Date(expirationTime).toISOString()
              : null,
          },
          { onConflict: "endpoint" },
        )
        .select("id")
        .single();

    if (subscriptionError) {
      console.error(subscriptionError);
      return NextResponse.json(
        { error: "Push subscription 저장에 실패했습니다." },
        { status: 500 },
      );
    }

    // 대학과 subscription 연결
    const { error: universitySubscriptionError } = await supabaseAdmin
      .from("university_push_subscriptions")
      .upsert(
        {
          subscription_id: pushSubscription.id,
          university_id: universityId,
        },
        {
          onConflict: "subscription_id,university_id",
          ignoreDuplicates: true,
        },
      );

    if (universitySubscriptionError) {
      console.error(universitySubscriptionError);
      return NextResponse.json(
        { error: "대학 구독 연결에 실패했습니다." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const universityId = request.nextUrl.searchParams.get("universityId");

    if (!universityId) {
      return NextResponse.json(
        { error: "universityId is required" },
        { status: 400 },
      );
    }

    // 현재 브라우저의 Push Subscription을 확인하기 위해
    // 클라이언트가 endpoint를 전달해야 함
    const endpoint = request.headers.get("x-push-endpoint");

    if (!endpoint) {
      return NextResponse.json({
        subscribed: false,
      });
    }

    const { data: subscription, error: subscriptionError } = await supabaseAdmin
      .from("push_subscriptions")
      .select("id")
      .eq("endpoint", endpoint)
      .maybeSingle();

    if (subscriptionError) {
      console.error("Push subscription lookup error:", subscriptionError);

      return NextResponse.json(
        { error: "Failed to check push subscription" },
        { status: 500 },
      );
    }

    if (!subscription) {
      return NextResponse.json({
        subscribed: false,
      });
    }

    const { data: universitySubscription, error } = await supabaseAdmin
      .from("university_push_subscriptions")
      .select("id")
      .eq("subscription_id", subscription.id)
      .eq("university_id", universityId)
      .maybeSingle();

    if (error) {
      console.error("University push subscription lookup error:", error);

      return NextResponse.json(
        { error: "Failed to check university subscription" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      subscribed: !!universitySubscription,
    });
  } catch (error) {
    console.error("Push status error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const universityId = request.nextUrl.searchParams.get("universityId");

    const endpoint = request.headers.get("x-push-endpoint");

    if (!universityId) {
      return NextResponse.json(
        { error: "universityId is required" },
        { status: 400 },
      );
    }

    if (!endpoint) {
      return NextResponse.json(
        { error: "Push endpoint is required" },
        { status: 400 },
      );
    }

    // 1. endpoint로 Push Subscription 찾기
    const { data: subscription, error: subscriptionError } = await supabaseAdmin
      .from("push_subscriptions")
      .select("id")
      .eq("endpoint", endpoint)
      .maybeSingle();

    console.log(endpoint, subscription, subscriptionError);

    if (subscriptionError) {
      console.error("Push subscription lookup error:", subscriptionError);

      return NextResponse.json(
        { error: "Failed to find push subscription" },
        { status: 500 },
      );
    }

    // 이미 존재하지 않는 subscription이면 성공으로 처리
    if (!subscription) {
      return NextResponse.json({
        success: true,
      });
    }

    // 2. 해당 대학과의 구독 매핑만 삭제
    const { error: mappingError } = await supabaseAdmin
      .from("university_push_subscriptions")
      .delete()
      .eq("subscription_id", subscription.id)
      .eq("university_id", universityId);

    if (mappingError) {
      console.error("University push subscription delete error:", mappingError);

      return NextResponse.json(
        { error: "Failed to unsubscribe from university" },
        { status: 500 },
      );
    }

    // 3. 더 이상 연결된 대학이 없는 subscription인지 확인
    const { data: remainingMappings, error: remainingError } =
      await supabaseAdmin
        .from("university_push_subscriptions")
        .select("id")
        .eq("subscription_id", subscription.id)
        .limit(1);

    if (remainingError) {
      console.error("Remaining subscription lookup error:", remainingError);

      return NextResponse.json({
        success: true,
      });
    }

    // 4. 연결된 대학이 하나도 없으면 subscription 자체도 삭제
    if (!remainingMappings || remainingMappings.length === 0) {
      const { error: deleteSubscriptionError } = await supabaseAdmin
        .from("push_subscriptions")
        .delete()
        .eq("id", subscription.id);

      if (deleteSubscriptionError) {
        console.error(
          "Push subscription cleanup error:",
          deleteSubscriptionError,
        );

        return NextResponse.json(
          { error: "Failed to clean up push subscription" },
          { status: 500 },
        );
      }
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Push unsubscribe error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
