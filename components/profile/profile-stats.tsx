import type React from "react"
import { Progress } from "@/components/ui/progress"
import { Award, Code2, Flame, Zap } from "lucide-react"

export function ProfileStats() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
      <h2 className="text-lg font-bold text-white mb-4">統計情報</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard icon={<Zap className="h-5 w-5 text-yellow-400" />} value="4,250" label="合計XP" />
        <StatCard icon={<Flame className="h-5 w-5 text-red-400" />} value="7日" label="現在のストリーク" />
        <StatCard icon={<Code2 className="h-5 w-5 text-blue-400" />} value="24" label="完了クエスト" />
        <StatCard icon={<Award className="h-5 w-5 text-purple-400" />} value="12" label="獲得アチーブメント" />
      </div>

      <div className="space-y-4">
        <SkillProgress name="レイアウト" value={40} color="from-blue-500 to-indigo-500" />
        <SkillProgress name="スタイリング" value={25} color="from-pink-500 to-purple-500" />
        <SkillProgress name="レスポンシブ" value={10} color="from-green-500 to-emerald-500" />
        <SkillProgress name="コンポーネント" value={5} color="from-yellow-500 to-amber-500" />
        <SkillProgress name="アドバンスド" value={0} color="from-gray-500 to-gray-600" />
      </div>
    </div>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 flex flex-col items-center text-center">
      <div className="mb-2">{icon}</div>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  )
}

function SkillProgress({
  name,
  value,
  color,
}: {
  name: string
  value: number
  color: string
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <div className="text-sm font-medium text-white">{name}</div>
        <div className="text-sm text-gray-400">{value}%</div>
      </div>
      <Progress value={value} className="h-2 bg-gray-800">
        <div className={`h-full bg-gradient-to-r ${color} rounded-full`} style={{ width: `${value}%` }} />
      </Progress>
    </div>
  )
}
