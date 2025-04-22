import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  
  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    
    // codeを使ってセッションを交換
    await supabase.auth.exchangeCodeForSession(code)
  }
  
  // Auth リダイレクト URL か、クエリパラメータの 'redirect' から取得されたリダイレクト先
  const redirectTo = requestUrl.searchParams.get('redirect') || '/dashboard'
  
  return NextResponse.redirect(new URL(redirectTo, request.url))
} 