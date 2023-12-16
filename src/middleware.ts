import { NextResponse, type NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import { defaultLocale, locales } from "@lib/constants";
import { env } from "@src/env.mjs";

const getRequestLocale = (request: NextRequest) => {
  const languageHeader = request.headers.get("accept-language");
  if (!languageHeader) return defaultLocale;
  const languages = languageHeader
    .split(",")
    .map((language) => language.split(";")[0])
    .map((language) => language.trim());

  return match(languages, locales, defaultLocale);
};

export function middleware(request: NextRequest): NextResponse {
  // Server action ignore
  if (request.headers.get("content-type")?.includes("multipart/form-data")) {
    return NextResponse.next();
  }

  // Content Security Policy
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
    default-src 'none';
    script-src-elem 'self' 'nonce-${nonce}';
    script-src 'self' 'nonce-${nonce}' ${env.NODE_ENV === "development" && "'unsafe-eval'"};
    style-src 'self' 'unsafe-inline';
    img-src 'self';
    font-src 'self' https:;
    connect-src 'self';
    form-action 'self';
    object-src 'none';
    frame-ancestors 'none';
    base-uri 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;
  request.headers.set("X-Nonce", nonce);
  request.headers.set("Content-Security-Policy", cspHeader.replace(/\s{2,}/g, " ").trim());

  request.headers.set("X-DNS-Prefetch-Control", "on");
  request.headers.set("X-Content-Type-Options", "nosniff");

  // Localization
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getRequestLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }

  return NextResponse.next({
    headers: request.headers,
  });
}

export const config = {
  runtime: "experimental-edge",
  matcher: [
    {
      source: "/((?!api|_next|.*\\..*).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
