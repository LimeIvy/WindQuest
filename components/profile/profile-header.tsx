"use client"

import { Button } from "@/components/ui/button"
import { Crown, Edit } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TitleSelector } from "@/components/profile/title-selector"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

export function ProfileHeader() {
  const [bio, setBio] = useState(
    "TailwindCSSを学習中のフロントエンドエンジニアです。UIデザインに興味があり、特にレスポンシブデザインを勉強しています。",
  )
  const [isEditingBio, setIsEditingBio] = useState(false)

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 overflow-hidden">
      <div className="h-40 bg-gradient-to-r from-purple-600 to-blue-600 relative">
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white">
          <Edit className="h-4 w-4" />
        </Button>
      </div>

      <div className="px-6 pb-6 pt-16 relative">
        <div className="absolute -top-12 left-6 rounded-full border-4 border-gray-900 overflow-hidden">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
            TM
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-white">TailwindMaster</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20"
                  >
                    <Crown className="h-4 w-4 mr-1" />
                    フレックスマスター
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 border border-purple-900/30">
                  <DialogHeader>
                    <DialogTitle className="text-white">称号を選択</DialogTitle>
                    <DialogDescription>獲得した称号からプロフィールに表示する称号を選択できます</DialogDescription>
                  </DialogHeader>
                  <TitleSelector />
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-gray-400">レベル 12 • 初級者 • 2023年10月から参加</p>
          </div>
        </div>

        <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
          {isEditingBio ? (
            <div className="space-y-2">
              <Textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="自己紹介を入力してください..."
                className="bg-gray-900 border-gray-700 min-h-24 text-white"
              />
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditingBio(false)}>
                  キャンセル
                </Button>
                <Button onClick={() => setIsEditingBio(false)}>保存</Button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start">
              <p className="text-gray-300">{bio}</p>
              <Button variant="ghost" size="sm" onClick={() => setIsEditingBio(true)}>
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
