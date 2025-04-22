import type React from "react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Columns, Crown, Palette, Smartphone } from "lucide-react"

export function SkillTreeSidebar() {
  return (
    <div className="lg:w-80 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">獲得称号</h2>
          <div className="text-xl font-bold text-yellow-400">3/24</div>
        </div>
        <p className="text-sm text-gray-400 mt-1">スキルツリーを開放して、新しい称号をアンロックしましょう</p>
      </div>

      <Tabs defaultValue="categories">
        <TabsList className="bg-gray-800/50 border border-gray-700 w-full">
          <TabsTrigger value="categories" className="flex-1 data-[state=active]:bg-purple-600">
            カテゴリ
          </TabsTrigger>
          <TabsTrigger value="unlocked" className="flex-1 data-[state=active]:bg-purple-600">
            獲得済み称号
          </TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="mt-4 space-y-4">
          <SkillCategory
            icon={<Columns className="h-5 w-5 text-blue-400" />}
            name="レイアウト"
            progress={40}
            skills={["Flexbox", "Grid", "Positioning", "Container"]}
          />

          <SkillCategory
            icon={<Palette className="h-5 w-5 text-pink-400" />}
            name="スタイリング"
            progress={25}
            skills={["Colors", "Typography", "Spacing", "Borders"]}
          />

          <SkillCategory
            icon={<Smartphone className="h-5 w-5 text-green-400" />}
            name="レスポンシブ"
            progress={10}
            skills={["Breakpoints", "Mobile First", "Responsive Utilities"]}
          />

          <SkillCategory
            icon={<Code className="h-5 w-5 text-yellow-400" />}
            name="コンポーネント"
            progress={5}
            skills={["Buttons", "Cards", "Forms", "Navigation"]}
          />

          <SkillCategory
            icon={<BookOpen className="h-5 w-5 text-purple-400" />}
            name="アドバンスド"
            progress={0}
            skills={["Custom Utilities", "Plugins", "Performance"]}
          />
        </TabsContent>

        <TabsContent value="unlocked" className="mt-4">
          <div className="space-y-3">
            <UnlockedTitle
              name="フレックスマスター"
              icon={<Columns className="h-5 w-5 text-blue-400" />}
              description="フレックスボックスの達人"
              isActive={true}
            />

            <UnlockedTitle
              name="カラリスト"
              icon={<Palette className="h-5 w-5 text-pink-400" />}
              description="色彩理論のスペシャリスト"
              isActive={false}
            />

            <UnlockedTitle
              name="タイポグラファー"
              icon={<BookOpen className="h-5 w-5 text-purple-400" />}
              description="文字組みの達人"
              isActive={false}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-white">マスタリーレベル</h3>
          <div className="text-sm text-gray-400">レベル 4</div>
        </div>

        <Progress value={40} className="h-2 bg-gray-800">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: "40%" }} />
        </Progress>

        <div className="mt-4">
          <h3 className="font-bold text-white mb-2">次の称号</h3>
          <div className="bg-gray-800/50 rounded-lg p-3 flex items-center gap-3">
            <div className="bg-blue-900/50 p-2 rounded-lg">
              <Crown className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <div className="font-bold text-white">グリッドマスター</div>
              <div className="text-xs text-gray-400">グリッドレイアウトの達人</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillCategory({
  icon,
  name,
  progress,
  skills,
}: {
  icon: React.ReactNode
  name: string
  progress: number
  skills: string[]
}) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-gray-900 p-2 rounded-lg">{icon}</div>
          <h3 className="font-bold text-white">{name}</h3>
        </div>
        <div className="text-sm text-gray-400">{progress}%</div>
      </div>

      <Progress value={progress} className="h-2 bg-gray-700">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </Progress>

      <div className="mt-3 text-sm text-gray-400">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div key={skill} className="bg-gray-900/50 px-2 py-1 rounded">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function UnlockedTitle({
  name,
  icon,
  description,
  isActive,
}: {
  name: string
  icon: React.ReactNode
  description: string
  isActive: boolean
}) {
  return (
    <div
      className={`bg-gray-800/50 rounded-lg p-3 hover:bg-gray-800 transition-colors ${isActive ? "border-2 border-yellow-400" : ""}`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${isActive ? "bg-yellow-900/50" : "bg-gray-900/50"}`}>{icon}</div>
        <div>
          <div className="font-bold text-white flex items-center gap-2">
            {name}
            {isActive && <Crown className="h-4 w-4 text-yellow-400" />}
          </div>
          <div className="text-xs text-gray-400">{description}</div>
        </div>

        {isActive ? (
          <div className="ml-auto bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">使用中</div>
        ) : (
          <div className="ml-auto">
            <button className="text-xs text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded">
              設定
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
