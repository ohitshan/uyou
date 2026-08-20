const CACHE_NAME = "uyou-pwa-v1";

const STATIC_ASSETS = [
  "/",
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

  // GET만 처리
  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // 같은 origin만 처리
  if (url.origin !== self.location.origin) {
    return;
  }

  // API는 Service Worker 캐시에서 제외
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // --------------------------------
  // HTML / ISR 페이지
  // Network First
  // --------------------------------
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 정상 응답만 페이지 캐시에 저장
          if (response.ok) {
            const responseClone = response.clone();

            event.waitUntil(
              caches.open(CACHE_NAME).then((cache) => {
                return cache.put(request, responseClone);
              }),
            );
          }

          return response;
        })
        .catch(async () => {
          // 오프라인이면 해당 페이지 캐시 사용
          const cachedResponse = await caches.match(request);

          if (cachedResponse) {
            return cachedResponse;
          }

          // 해당 페이지가 없으면 앱 셸로 fallback
          return caches.match("/");
        }),
    );

    return;
  }

  // --------------------------------
  // JS / CSS / Image / Font 등
  // Cache First
  // --------------------------------
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((response) => {
        if (response.ok) {
          const responseClone = response.clone();

          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              return cache.put(request, responseClone);
            }),
          );
        }

        return response;
      });
    }),
  );
});
