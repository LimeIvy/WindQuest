import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"

export function ProfileFriends() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">フレンド</h2>
        <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
          すべて表示
        </Button>
      </div>

      <div className="space-y-3">
        <Friend name="コードマスター" avatar="/placeholder.svg?height=40&width=40" level={18} />
        <Friend name="CSSウィザード" avatar="/placeholder.svg?height=40&width=40" level={15} />
        <Friend name="デザイナー123" avatar="/placeholder.svg?height=40&width=40" level={10} />
        <Friend name="フロントエンドニンジャ" avatar="/placeholder.svg?height=40&width=40" level={14} />
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        <Button className="w-full">
          <UserPlus className="h-4 w-4 mr-2" />
          フレンドを追加
        </Button>
      </div>
    </div>
  )
}

function Friend({
  name,
  avatar,
  level,
}: {
  name: string
  avatar: string
  level: number
}) {
  return (
    <div className="flex items-center justify-between gap-3 bg-gray-800/50 rounded-lg p-3 hover:bg-gray-800 transition-colors">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatar || "/placeholder.svg"} />
          <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
        </Avatar>

        <div>
          <div className="font-medium text-white">{name}</div>
          <div className="text-xs text-gray-400">レベル {level}</div>
        </div>
      </div>

      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
        表示
      </Button>
    </div>
  )
}
