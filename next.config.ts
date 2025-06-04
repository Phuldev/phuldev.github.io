import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Enables static export
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
