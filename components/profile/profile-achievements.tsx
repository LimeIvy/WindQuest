import type React from "react"
import { Button } from "@/components/ui/button"
import { Award, Clock, Code, Flame, Zap } from "lucide-react"

export function ProfileAchievements() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">アチーブメント</h2>
        <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
          すべて表示
        </Button>
      </div>

      <div className="space-y-3">
        <Achievement
          icon={<Flame className="h-5 w-5 text-red-400" />}
          name="ホットストリーク"
          description="7日連続でログイン"
          date="2日前に獲得"
          color="bg-red-500"
        />

        <Achievement
          icon={<Code className="h-5 w-5 text-blue-400" />}
          name="フレックスマスター"
          description="フレックスボックスに関する最初のクエストを完了"
          date="1週間前に獲得"
          color="bg-blue-500"
        />

        <Achievement
          icon={<Zap className="h-5 w-5 text-yellow-400" />}
          name="クイックスタート"
          description="最初のクエストを5分以内に完了"
          date="2週間前に獲得"
          color="bg-yellow-500"
        />

        <Achievement
          icon={<Award className="h-5 w-5 text-purple-400" />}
          name="初心者の旅"
          description="5つのクエストを完了"
          date="3週間前に獲得"
          color="bg-purple-500"
        />

        <Achievement
          icon={<Clock className="h-5 w-5 text-green-400" />}
          name="時間厳守"
          description="3日連続でデイリーボーナスを獲得"
          date="1ヶ月前に獲得"
          color="bg-green-500"
        />
      </div>
    </div>
  )
}

function Achievement({
  icon,
  name,
  description,
  date,
  color,
}: {
  icon: React.ReactNode
  name: string
  description: string
  date: string
  color: string
}) {
  return (
    <div className="flex items-start gap-3 bg-gray-800/50 rounded-lg p-3 hover:bg-gray-800 transition-colors">
      <div className={`${color} p-2 rounded-lg`}>{icon}</div>

      <div className="flex-1 min-w-0">
        <div className="font-bold text-white">{name}</div>
        <div className="text-sm text-gray-400 truncate">{description}</div>
        <div className="text-xs text-gray-500 mt-1">{date}</div>
      </div>
    </div>
  )
}
