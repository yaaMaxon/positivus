import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets/icons": path.resolve(__dirname, "src/assets/icons"),
      "@assets/img": path.resolve(__dirname, "src/assets/img"),
      "@components": path.resolve(__dirname, "src/app/components"),
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
