import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
    reactCompiler: true,
  },
};

export default nextConfig;
