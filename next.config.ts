import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "file.aiquickdraw.com" },
    { protocol: "https", hostname: "assets-jiocdn.ajio.com" },
    { protocol: "https", hostname: "image01-in.oneplus.net" },
  ],
  },
};

export default nextConfig;