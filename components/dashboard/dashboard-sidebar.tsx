import { Button } from "@/components/ui/button"
import type React from "react"
import { Award, Compass, Home, LayoutGrid, Trophy, User } from "lucide-react"
import Link from "next/link"

export function DashboardSidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 h-fit sticky top-24">
      <nav className="p-4 space-y-1">
        <SidebarLink href="/dashboard" icon={<Home className="h-5 w-5" />} label="ダッシュボード" active />
        <SidebarLink href="/quests" icon={<Compass className="h-5 w-5" />} label="クエスト一覧" />
        <SidebarLink href="/skill-tree" icon={<LayoutGrid className="h-5 w-5" />} label="スキルツリー" />
        <SidebarLink href="/ranking" icon={<Trophy className="h-5 w-5" />} label="ランキング" />
        <SidebarLink href="/achievements" icon={<Award className="h-5 w-5" />} label="アチーブメント" />
        <SidebarLink href="/profile" icon={<User className="h-5 w-5" />} label="プロフィール" />
      </nav>

      <div className="p-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-b-xl">
        <div className="text-sm font-medium text-white">プレミアムにアップグレード</div>
        <div className="text-xs text-gray-300 mt-1">
          すべての機能を解放して、TailwindCSSマスターへの道を加速しよう！
        </div>
        <Button
          size="sm"
          className="w-full mt-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-bold"
        >
          アップグレード
        </Button>
      </div>
    </aside>
  )
}

function SidebarLink({
  href,
  icon,
  label,
  active = false,
}: {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
        active ? "bg-purple-600/20 text-purple-300" : "text-gray-400 hover:text-white hover:bg-gray-800/50"
      }`}
    >
      {icon}
      <span>{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400" />}
    </Link>
  )
}
