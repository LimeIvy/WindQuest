import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  // ルートパス、login、registerパス、静的ファイル（_next）へのアクセスは認証不要
  const isPublicPath = req.nextUrl.pathname === '/' || 
                      req.nextUrl.pathname.startsWith('/login') || 
                      req.nextUrl.pathname.startsWith('/register') ||
                      req.nextUrl.pathname.startsWith('/_next') ||
                      req.nextUrl.pathname.startsWith('/incomplete') ||
                      req.nextUrl.pathname.includes('.')

  // 認証されていない状態で保護されたルートにアクセスした場合、ログインページにリダイレクト
  if (!session && !isPublicPath) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('redirect', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

// 以下のパスに対してミドルウェアを適用
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 