import { NextRequest, NextResponse } from 'next/server'

interface AuthenticatedRequest extends NextRequest {
  user: {
    token: string
  }
}

const redirectToLogin = false
export async function middleware(req: NextRequest) {
  let token: string | undefined

  if (req.cookies.has('token')) {
    token = req.cookies.get('token')?.value
  } else if (req.headers.get('Authorization')?.startsWith('Bearer ')) {
    token = req.headers.get('Authorization')?.substring(7)
  }

  if (req.nextUrl.pathname.startsWith('/login') && (!token || redirectToLogin))
    return

  const response = NextResponse.next()

  const authUser = (req as AuthenticatedRequest).user

  return response

  if (!authUser) {
    return NextResponse.redirect(
      new URL(
        `/login?${new URLSearchParams({
          error: 'badauth',
          forceLogin: 'true',
        })}`,
        req.url
      )
    )
  }

  if (req.url.includes('/login') && authUser) {
    return NextResponse.redirect(new URL('/home', req.url))
  }

  return response
}

// export const config = {
//   matcher: ['/login', '/api/users/:path*', '/api/auth/logout'],
// }
