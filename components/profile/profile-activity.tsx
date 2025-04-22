import { Badge } from "@/components/ui/badge"
import { Award, CheckCircle, Clock, Star, Trophy } from "lucide-react"

export function ProfileActivity() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
      <h2 className="text-lg font-bold text-white mb-4">最近のアクティビティ</h2>

      <div className="space-y-6">
        <div className="relative border-l-2 border-purple-500 pl-6 pb-6">
          <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
            <Trophy className="h-3 w-3 text-white" />
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-purple-900/30 rounded-lg p-3 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-purple-400" />
            </div>

            <div>
              <div className="font-bold text-white">リーダーボードで3位になりました</div>
              <div className="text-sm text-gray-400 mt-1">
                今週のXPランキングで3位に入りました。おめでとうございます！
              </div>
              <div className="text-xs text-gray-500 mt-2">2時間前</div>
            </div>
          </div>
        </div>

        <div className="relative border-l-2 border-green-500 pl-6 pb-6">
          <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <CheckCircle className="h-3 w-3 text-white" />
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-green-900/30 rounded-lg p-3 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-400" />
            </div>

            <div>
              <div className="font-bold text-white">クエスト「フレックスボックスの基本」を完了しました</div>
              <div className="text-sm text-gray-400 mt-1">
                <Badge variant="outline" className="bg-green-500 text-black border-0 mr-2">
                  初級
                </Badge>
                150 XPを獲得しました
              </div>
              <div className="text-xs text-gray-500 mt-2">1日前</div>
            </div>
          </div>
        </div>

        <div className="relative border-l-2 border-yellow-500 pl-6 pb-6">
          <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
            <Award className="h-3 w-3 text-white" />
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-yellow-900/30 rounded-lg p-3 flex items-center justify-center">
              <Award className="h-6 w-6 text-yellow-400" />
            </div>

            <div>
              <div className="font-bold text-white">アチーブメント「ホットストリーク」を獲得しました</div>
              <div className="text-sm text-gray-400 mt-1">7日連続でログインしました。100 XPを獲得しました。</div>
              <div className="text-xs text-gray-500 mt-2">2日前</div>
            </div>
          </div>
        </div>

        <div className="relative border-l-2 border-blue-500 pl-6 pb-6">
          <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
            <Star className="h-3 w-3 text-white" />
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-blue-900/30 rounded-lg p-3 flex items-center justify-center">
              <Star className="h-6 w-6 text-blue-400" />
            </div>

            <div>
              <div className="font-bold text-white">スキル「タイポグラフィ」がレベル2になりました</div>
              <div className="text-sm text-gray-400 mt-1">
                スキルツリーでタイポグラフィのスキルがレベル2に上がりました。
              </div>
              <div className="text-xs text-gray-500 mt-2">3日前</div>
            </div>
          </div>
        </div>

        <div className="relative border-l-2 border-gray-500 pl-6">
          <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-gray-500 flex items-center justify-center">
            <Clock className="h-3 w-3 text-white" />
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center">
              <Clock className="h-6 w-6 text-gray-400" />
            </div>

            <div>
              <div className="font-bold text-white">TailwindCSSの勉強を始めました</div>
              <div className="text-sm text-gray-400 mt-1">TailwindQuest への旅が始まりました！</div>
              <div className="text-xs text-gray-500 mt-2">1ヶ月前</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
