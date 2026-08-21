const CACHE_NAME = "uyou-pwa-v2";

const STATIC_ASSETS = [
  "/",
  "/pwa",
  "/manifest.webmanifest",
  "/icon.png",
  "/apple-icon.png",
  "/banner.png",
  "/uyou-logo.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }),
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // 외부 요청은 Service Worker가 처리하지 않음
  if (url.origin !== self.location.origin) {
    return;
  }

  // API는 캐시하지 않음
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // Next.js immutable 정적 청크(JS/CSS 등)만 Cache First
  const isImmutableAsset = url.pathname.startsWith("/_next/static/");

  if (isImmutableAsset) {
    event.respondWith(handleImmutableAsset(request, event));
    return;
  }

  // 그 외(페이지 네비게이션 + RSC/JSON fetch 포함)는 Network First
  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }

  event.respondWith(handleRequest(request));
});

async function handleNavigation(request) {
  return handleRequest(request, { allowRootFallback: true });
}

async function handleImmutableAsset(request, event) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  if (response.ok) {
    const clone = response.clone();
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.put(request, clone)),
    );
  }

  return response;
}

async function handleRequest(request, options = {}) {
  const { allowRootFallback = false } = options;

  try {
    const response = await fetch(request);

    const contentType = response.headers.get("content-type") || "";
    const shouldCache =
      response.ok &&
      (!allowRootFallback || contentType.includes("text/html"));

    if (shouldCache) {
      const responseClone = response.clone();
      await caches
        .open(CACHE_NAME)
        .then((cache) => cache.put(request, responseClone));
    }

    return response;
  } catch {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    if (allowRootFallback) {
      const fallbackResponse = await caches.match("/");
      if (fallbackResponse) {
        return fallbackResponse;
      }
    }

    return new Response("Offline", {
      status: 503,
      statusText: "Service Unavailable",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}
