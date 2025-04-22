"use client"

import type React from "react"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from "@/components/ui/button"
import { Bell, Menu, LogOut, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { UserAvatar } from "./user-avatar"
import { toast } from "@/components/ui/use-toast"

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      toast({
        title: 'ログアウト成功',
        description: 'トップページに戻ります',
      })
      router.push('/')
    } catch (error) {
      console.error('Sign out error:', error)
      toast({
        title: 'エラー',
        description: 'ログアウト中に問題が発生しました',
        variant: 'destructive',
      })
    }
  }

  return (
    <header className="bg-gray-900/80 backdrop-blur-md border-b border-purple-900/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>

          <Link
            href="/dashboard"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
          >
            TailwindQuest
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <HeaderIconButton icon={<Bell />} count={3} />
          
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white"
            onClick={handleSignOut}
            title="ログアウト"
          >
            <LogOut className="h-5 w-5" />
          </Button>

          <Link href="/profile">
            <UserAvatar />
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-b border-gray-800">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-2">
            <Link
              href="/dashboard"
              className="px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
            >
              ダッシュボード
            </Link>
            <Link
              href="/quests"
              className="px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
            >
              クエスト一覧
            </Link>
            <Link
              href="/skill-tree"
              className="px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
            >
              スキルツリー
            </Link>
            <Link
              href="/ranking"
              className="px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
            >
              ランキング
            </Link>
            <Link
              href="/profile"
              className="px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
            >
              プロフィール
            </Link>
            <Button
              variant="ghost"
              className="px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors flex items-center justify-start"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-2" />
              ログアウト
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeaderIconButton({ icon, count }: { icon: React.ReactNode; count?: number }) {
  return (
    <Button variant="ghost" size="icon" className="relative">
      {icon}
      {count && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Button>
  )
}
