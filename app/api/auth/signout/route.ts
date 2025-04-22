import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  
  // サインアウト
  await supabase.auth.signOut()
  
  return NextResponse.json({ success: true })
}

// GETリクエストでもサインアウトを許可する（リンクからのナビゲーション対応）
export async function GET(request: NextRequest) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  
  // サインアウト
  await supabase.auth.signOut()
  
  // トップページにリダイレクト
  return NextResponse.redirect(new URL('/', request.url))
} 