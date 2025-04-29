"use client"

import { Progress } from "@/components/ui/progress"
import { Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function UserProgress() {
  const [username, setUsername] = useState("ロード中...")
  useEffect(() => {
  }, [])

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold">
              12
            </div>
            <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-xs text-black font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-gray-900">
              <Sparkles className="h-3 w-3" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">こんにちは、{username}！</h2>
            <p className="text-gray-400">次のレベルまであと320 XP</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm text-gray-400">ストリーク</div>
            <div className="text-xl font-bold text-orange-400">🔥 7日</div>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-400">ランク</div>
            <div className="text-xl font-bold text-emerald-400">初級者</div>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-400">完了クエスト</div>
            <div className="text-xl font-bold text-blue-400">24/120</div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-sm">
          <div className="text-gray-400">レベル 12</div>
          <div className="text-gray-400">680/1000 XP</div>
        </div>
        <Progress value={68} className="h-3 bg-gray-800">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: "68%" }} />
        </Progress>
      </div>
    </div>
  )
}
