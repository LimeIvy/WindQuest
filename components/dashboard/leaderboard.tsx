import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy } from "lucide-react"

export function Leaderboard() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-yellow-400" />
          リーダーボード
        </h2>
        <div className="text-sm text-purple-400">今週</div>
      </div>

      <div className="space-y-3">
        <LeaderboardItem
          rank={1}
          name="コードマスター"
          avatar="/placeholder.svg?height=40&width=40"
          xp={12450}
          isCurrentUser={false}
        />
        <LeaderboardItem
          rank={2}
          name="CSSウィザード"
          avatar="/placeholder.svg?height=40&width=40"
          xp={10280}
          isCurrentUser={false}
        />
        <LeaderboardItem
          rank={3}
          name="TailwindMaster"
          avatar="/placeholder.svg?height=40&width=40"
          xp={9870}
          isCurrentUser={true}
        />
        <LeaderboardItem
          rank={4}
          name="デザイナー123"
          avatar="/placeholder.svg?height=40&width=40"
          xp={8540}
          isCurrentUser={false}
        />
        <LeaderboardItem
          rank={5}
          name="フロントエンドニンジャ"
          avatar="/placeholder.svg?height=40&width=40"
          xp={7320}
          isCurrentUser={false}
        />
      </div>
    </div>
  )
}

function LeaderboardItem({
  rank,
  name,
  avatar,
  xp,
  isCurrentUser,
}: {
  rank: number
  name: string
  avatar: string
  xp: number
  isCurrentUser: boolean
}) {
  return (
    <div
      className={`
      flex items-center gap-3 p-2 rounded-lg
      ${isCurrentUser ? "bg-purple-900/30 border border-purple-500/50" : "hover:bg-gray-800/50"}
    `}
    >
      <div
        className={`
        w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold
        ${
          rank === 1
            ? "bg-yellow-500 text-black"
            : rank === 2
              ? "bg-gray-400 text-black"
              : rank === 3
                ? "bg-amber-700 text-white"
                : "bg-gray-700 text-white"
        }
      `}
      >
        {rank}
      </div>

      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar || "/placeholder.svg"} />
        <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
      </Avatar>

      <div className="flex-1 truncate">
        <div className={`font-medium ${isCurrentUser ? "text-purple-300" : "text-white"}`}>{name}</div>
      </div>

      <div className="text-yellow-400 font-bold">{xp.toLocaleString()} XP</div>
    </div>
  )
}
