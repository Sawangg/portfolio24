import { env } from "./src/env.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    dangerouslyAllowSVG: env.NODE_ENV === "production" ? false : true,
    domains: ["placehold.co"],
  },
};

export default nextConfig;
