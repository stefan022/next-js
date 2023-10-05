import { legacyPrefixes } from "@/constants/legacyPrefixes";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
 
export const middleware = (request: NextRequest) => {
    const { url, nextUrl } = request;
    const newUrl = new URL("/dashboard", url);

    const { pathname } = nextUrl;
 
    if (legacyPrefixes.some((prefix: string) => pathname.startsWith(prefix))) {
        return NextResponse.next()
    };
 
    if (
        !pathname.endsWith("/") &&
        !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
    ) {
        nextUrl.pathname += "/";
        return NextResponse.redirect(nextUrl);
    };

    return NextResponse.redirect(newUrl);
};