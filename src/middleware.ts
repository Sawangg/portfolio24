import { NextResponse, type NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import { defaultLocale, locales } from "@lib/constants";

const getRequestLocale = (request: NextRequest) => {
  const languages = request.headers
    .get("accept-language")!
    .split(",")
    .map((language) => language.split(";")[0])
    .map((language) => language.trim());

  return match(languages, locales, defaultLocale);
};

export function middleware(request: NextRequest): NextResponse {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getRequestLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
