import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 95, 90, 80, 75, 50, 25],
    remotePatterns: [
      new URL(
        "https://afqrccbryeqkzkwavuhf.supabase.co/storage/v1/object/public/cabin-images/**",
      ),
      new URL("https://lh3.googleusercontent.com/**"),
      new URL("https://authjs.dev/img/**"),
    ],
  },
};

export default nextConfig;
