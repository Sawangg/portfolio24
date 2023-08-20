import { NextResponse, type NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en", "fr"];
const defaultLocale = "en";

const getLocale = (request: NextRequest) => {
  const languages = request.headers
    .get("accept-language")!
    .split(",")
    .map((language) => language.split(";")[0])
    .map((language) => language.trim());

  return match(languages, locales, defaultLocale);
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
  return;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
