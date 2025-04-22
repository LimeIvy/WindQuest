import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"

export function DailyRewards() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-white">デイリーボーナス</h2>
        <div className="text-sm text-gray-400">リセットまで: 14:32:45</div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <DailyRewardItem key={day} day={day} claimed={day < 4} today={day === 4} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold">
          <Gift className="mr-2 h-4 w-4" />
          今日のボーナスを受け取る
        </Button>
      </div>
    </div>
  )
}

function DailyRewardItem({
  day,
  claimed,
  today,
}: {
  day: number
  claimed: boolean
  today: boolean
}) {
  return (
    <div
      className={`
        relative aspect-square rounded-lg flex flex-col items-center justify-center p-2 border
        ${
          claimed
            ? "bg-green-900/30 border-green-500/50 text-green-400"
            : today
              ? "bg-yellow-900/30 border-yellow-500/50 text-yellow-400 animate-pulse"
              : "bg-gray-800/50 border-gray-700 text-gray-400"
        }
      `}
    >
      <div className="text-xs font-bold">Day</div>
      <div className="text-lg font-bold">{day}</div>

      {claimed && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
          <div className="text-green-400 text-2xl">✓</div>
        </div>
      )}

      <div className="text-xs mt-1">{day === 7 ? "200 XP" : `${day * 20} XP`}</div>
    </div>
  )
}
