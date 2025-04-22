"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Columns, Crown, Palette, Smartphone } from "lucide-react"

export function TitleSelector() {
  const [selectedTitle, setSelectedTitle] = useState("フレックスマスター")

  const titles = [
    {
      id: "flex-master",
      name: "フレックスマスター",
      description: "フレックスボックスの達人",
      icon: <Columns className="h-5 w-5 text-blue-400" />,
      category: "レイアウト",
    },
    {
      id: "colorist",
      name: "カラリスト",
      description: "色彩理論のスペシャリスト",
      icon: <Palette className="h-5 w-5 text-pink-400" />,
      category: "スタイリング",
    },
    {
      id: "typographer",
      name: "タイポグラファー",
      description: "文字組みの達人",
      icon: <BookOpen className="h-5 w-5 text-purple-400" />,
      category: "スタイリング",
    },
    {
      id: "responsive-wizard",
      name: "レスポンシブウィザード",
      description: "レスポンシブデザインの魔術師",
      icon: <Smartphone className="h-5 w-5 text-green-400" />,
      category: "レスポンシブ",
      locked: true,
    },
    {
      id: "component-architect",
      name: "コンポーネントアーキテクト",
      description: "コンポーネント設計の建築家",
      icon: <Code className="h-5 w-5 text-yellow-400" />,
      category: "コンポーネント",
      locked: true,
    },
  ]

  return (
    <div className="space-y-4 mt-2">
      <div className="grid grid-cols-2 gap-2">
        {titles.map((title) => (
          <div
            key={title.id}
            className={`
              p-3 rounded-lg cursor-pointer transition-all
              ${
                title.locked
                  ? "bg-gray-800/50 opacity-50 cursor-not-allowed"
                  : selectedTitle === title.name
                    ? "bg-yellow-900/30 border-2 border-yellow-400"
                    : "bg-gray-800/50 hover:bg-gray-800 border-2 border-transparent"
              }
            `}
            onClick={() => !title.locked && setSelectedTitle(title.name)}
          >
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${selectedTitle === title.name ? "bg-yellow-900/50" : "bg-gray-900/50"}`}>
                {title.icon}
              </div>
              <div>
                <div className="font-bold text-white flex items-center gap-1">
                  {title.name}
                  {title.locked && <span className="text-xs text-gray-500">🔒</span>}
                </div>
                <div className="text-xs text-gray-400">{title.description}</div>
                <div className="text-xs text-gray-500 mt-1">{title.category}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white">
          キャンセル
        </Button>
        <Button>
          <Crown className="h-4 w-4 mr-1" />
          称号を設定
        </Button>
      </div>
    </div>
  )
}
