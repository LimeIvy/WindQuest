import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserAvatar() {
  return (
    <Avatar className="border-2 border-purple-500">
      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="ユーザーアバター" />
      <AvatarFallback className="bg-purple-700">TS</AvatarFallback>
    </Avatar>
  )
}
