import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UYOU",
    short_name: "UYOU",
    description: "한국 유학 정보를 한곳에서 확인하는 서비스",
    start_url: "/pwa",
    scope: "/",
    display: "standalone",
    background_color: "#FBFAF7",
    theme_color: "#1A76B0",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
