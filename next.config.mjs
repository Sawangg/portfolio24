import { env } from "./src/env.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
  images: {
    dangerouslyAllowSVG: env.NODE_ENV !== "production" ? true : false,
    contentDispositionType: env.NODE_ENV !== "production" ? "attachment" : undefined,
    contentSecurityPolicy:
      env.NODE_ENV !== "production" ? "default-src 'self'; script-src 'none'; sandbox;" : undefined,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mill3.studio",
      },
    ],
  },
};

export default nextConfig;
