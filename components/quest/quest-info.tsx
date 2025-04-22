import type React from "react"
import { Award, Clock, Flame, Star } from "lucide-react"

export function QuestInfo() {
  return (
    <div className="border border-gray-800 rounded-lg p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">フレックスボックスの基本</h2>
        <p className="text-gray-400">
          このクエストでは、TailwindCSSのフレックスボックスユーティリティを使用して、
          レスポンシブなナビゲーションバーを作成します。フレックスボックスは、
          一次元のレイアウトを作成するための強力なツールです。
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <InfoCard icon={<Star className="h-5 w-5 text-yellow-400" />} label="難易度" value="初級" />
        <InfoCard icon={<Award className="h-5 w-5 text-purple-400" />} label="獲得XP" value="150 XP" />
        <InfoCard icon={<Clock className="h-5 w-5 text-blue-400" />} label="推定時間" value="15分" />
        <InfoCard icon={<Flame className="h-5 w-5 text-red-400" />} label="人気度" value="高い" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-2">目標</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start gap-2">
            <div className="min-w-4 h-4 rounded-full border border-green-500 flex items-center justify-center mt-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span>フレックスボックスを使用してナビゲーションバーを作成する</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="min-w-4 h-4 rounded-full border border-green-500 flex items-center justify-center mt-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span>ロゴとメニュー項目を水平方向に配置する</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="min-w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center mt-1">
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            </div>
            <span>メニュー項目を均等に配置する</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="min-w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center mt-1">
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            </div>
            <span>レスポンシブデザインを実装する</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-2">学習ポイント</h3>
        <ul className="space-y-1 text-gray-400">
          <li>• TailwindCSSのフレックスボックスユーティリティの基本的な使い方</li>
          <li>• 水平方向の配置と整列</li>
          <li>• フレックスボックスを使用したレスポンシブデザイン</li>
          <li>• ナビゲーションコンポーネントの構造</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-2">アンロック可能なアチーブメント</h3>
        <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
          <div className="bg-purple-900/50 p-2 rounded-lg">
            <Award className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <div className="font-bold text-white">フレックスマスター</div>
            <div className="text-sm text-gray-400">フレックスボックスに関する最初のクエストを完了する</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-3 flex flex-col items-center text-center">
      <div className="mb-1">{icon}</div>
      <div className="text-xs text-gray-400">{label}</div>
      <div className="font-bold text-white">{value}</div>
    </div>
  )
}
