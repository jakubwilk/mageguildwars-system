import type { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('request', request.url)

  // return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
