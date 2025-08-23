import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 80, 75, 50, 25],
    remotePatterns: [
      new URL(
        "https://afqrccbryeqkzkwavuhf.supabase.co/storage/v1/object/public/cabin-images/**",
      ),
    ],
  },
};

export default nextConfig;
