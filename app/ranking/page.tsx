import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy } from "lucide-react"

export default function RankingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <Trophy className="h-6 w-6 mr-2 text-yellow-400" />
          <h1 className="text-2xl font-bold text-white">ランキング</h1>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
          <Tabs defaultValue="weekly">
            <TabsList className="bg-gray-800/50 border border-gray-700 mb-6">
              <TabsTrigger value="weekly" className="data-[state=active]:bg-purple-600">
                今週
              </TabsTrigger>
              <TabsTrigger value="monthly" className="data-[state=active]:bg-purple-600">
                今月
              </TabsTrigger>
              <TabsTrigger value="alltime" className="data-[state=active]:bg-purple-600">
                全期間
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weekly" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <RankingCard rank={2} name="CSSウィザード" avatar="/placeholder.svg?height=80&width=80" xp={10280} />
                <RankingCard
                  rank={1}
                  name="コードマスター"
                  avatar="/placeholder.svg?height=80&width=80"
                  xp={12450}
                  highlight
                />
                <RankingCard
                  rank={3}
                  name="TailwindMaster"
                  avatar="/placeholder.svg?height=80&width=80"
                  xp={9870}
                  isCurrentUser
                />
              </div>

              <div className="space-y-3">
                <RankingItem rank={4} name="デザイナー123" avatar="/placeholder.svg?height=40&width=40" xp={8540} />
                <RankingItem
                  rank={5}
                  name="フロントエンドニンジャ"
                  avatar="/placeholder.svg?height=40&width=40"
                  xp={7320}
                />
                <RankingItem
                  rank={6}
                  name="ウェブクリエイター"
                  avatar="/placeholder.svg?height=40&width=40"
                  xp={6890}
                />
                <RankingItem rank={7} name="CSSアーティスト" avatar="/placeholder.svg?height=40&width=40" xp={6540} />
                <RankingItem
                  rank={8}
                  name="コーディング初心者"
                  avatar="/placeholder.svg?height=40&width=40"
                  xp={5980}
                />
                <RankingItem rank={9} name="デザインラバー" avatar="/placeholder.svg?height=40&width=40" xp={5430} />
                <RankingItem rank={10} name="ウェブ開発者" avatar="/placeholder.svg?height=40&width=40" xp={4980} />
              </div>
            </TabsContent>

            <TabsContent value="monthly">
              <div className="text-center text-gray-400 py-8">月間ランキングは集計中です...</div>
            </TabsContent>

            <TabsContent value="alltime">
              <div className="text-center text-gray-400 py-8">全期間ランキングは集計中です...</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function RankingCard({
  rank,
  name,
  avatar,
  xp,
  highlight = false,
  isCurrentUser = false,
}: {
  rank: number
  name: string
  avatar: string
  xp: number
  highlight?: boolean
  isCurrentUser?: boolean
}) {
  return (
    <div
      className={`
        relative p-6 rounded-xl flex flex-col items-center text-center
        ${
          highlight
            ? "bg-gradient-to-b from-yellow-500/20 to-amber-700/20 border-2 border-yellow-500"
            : isCurrentUser
              ? "bg-gradient-to-b from-purple-500/20 to-blue-700/20 border-2 border-purple-500"
              : "bg-gray-800/50 border border-gray-700"
        }
      `}
    >
      <div
        className={`
          absolute -top-5 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
          ${rank === 1 ? "bg-yellow-500 text-black" : rank === 2 ? "bg-gray-400 text-black" : "bg-amber-700 text-white"}
        `}
      >
        {rank}
      </div>

      <Avatar className="h-20 w-20 mt-4 mb-3 border-4 border-gray-900">
        <AvatarImage src={avatar || "/placeholder.svg"} />
        <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
      </Avatar>

      <div className="font-bold text-xl text-white">{name}</div>
      <div className="text-yellow-400 font-bold text-lg mt-1">{xp.toLocaleString()} XP</div>

      {isCurrentUser && <div className="mt-2 text-sm text-purple-300">あなた</div>}
      {highlight && <Trophy className="mt-2 h-5 w-5 text-yellow-400" />}
    </div>
  )
}

function RankingItem({
  rank,
  name,
  avatar,
  xp,
  isCurrentUser = false,
}: {
  rank: number
  name: string
  avatar: string
  xp: number
  isCurrentUser?: boolean
}) {
  return (
    <div
      className={`
      flex items-center gap-3 p-3 rounded-lg
      ${isCurrentUser ? "bg-purple-900/30 border border-purple-500/50" : "bg-gray-800/50 hover:bg-gray-800 transition-colors"}
    `}
    >
      <div
        className={`
        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
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

      <Avatar className="h-10 w-10">
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
