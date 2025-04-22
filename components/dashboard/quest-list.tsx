import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Clock, Flame, Star } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function QuestList() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">利用可能なクエスト</h2>
        <Link href="/quests">
          <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
            すべて表示
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="basic">
        <TabsList className="bg-gray-800/50 border border-gray-700">
          <TabsTrigger value="basic" className="data-[state=active]:bg-purple-600">
            ベーシック
          </TabsTrigger>
          <TabsTrigger value="new" className="data-[state=active]:bg-purple-600">
            新着
          </TabsTrigger>
          <TabsTrigger value="popular" className="data-[state=active]:bg-purple-600">
            人気
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-4 space-y-4">
          <QuestCard
            title="フレックスボックスチャレンジ"
            description="5分間で5つのフレックスボックス問題を解こう！基本的なレイアウトから応用まで"
            difficulty="初級"
            difficultyColor="bg-green-500"
            xp={150}
            estimatedTime="5分"
            questions={5}
            tags={["レイアウト", "フレックスボックス"]}
            progress={0}
            hot
            learningPoints={[
              "TailwindCSSのフレックスボックスユーティリティの基本的な使い方",
              "水平方向の配置と整列",
              "フレックスボックスを使用したレスポンシブデザイン",
              "ナビゲーションコンポーネントの構造",
            ]}
            achievement={{
              name: "フレックスマスター",
              description: "フレックスボックスに関する最初のクエストを完了する",
            }}
          />

          <QuestCard
            title="レスポンシブデザイン"
            description="5分間で5つのレスポンシブデザイン問題に挑戦！様々な画面サイズに対応しよう"
            difficulty="中級"
            difficultyColor="bg-yellow-500"
            xp={250}
            estimatedTime="5分"
            questions={5}
            tags={["レスポンシブ", "メディアクエリ"]}
            progress={0}
            learningPoints={[
              "ブレイクポイントの効果的な使用方法",
              "モバイルファーストの考え方",
              "レスポンシブユーティリティの活用",
              "様々な画面サイズでのテスト方法",
            ]}
            achievement={{
              name: "レスポンシブウィザード",
              description: "レスポンシブデザインに関するクエストを完了する",
            }}
          />

          <QuestCard
            title="グリッドマスター"
            description="5分間で5つのグリッドレイアウト問題を解こう！複雑なレイアウトを構築"
            difficulty="上級"
            difficultyColor="bg-red-500"
            xp={400}
            estimatedTime="5分"
            questions={5}
            tags={["レイアウト", "グリッド"]}
            progress={0}
            featured
            learningPoints={[
              "CSSグリッドの基本概念",
              "グリッドテンプレートの定義",
              "グリッドアイテムの配置",
              "複雑なレイアウトの構築",
            ]}
            achievement={{
              name: "グリッドマスター",
              description: "グリッドレイアウトに関するクエストを完了する",
            }}
          />

          <QuestCard
            title="カラーとタイポグラフィ"
            description="5分間で5つのスタイリング問題に挑戦！色彩とフォントの使い方をマスター"
            difficulty="中級"
            difficultyColor="bg-yellow-500"
            xp={300}
            estimatedTime="5分"
            questions={5}
            tags={["スタイリング", "タイポグラフィ"]}
            progress={35}
            learningPoints={[
              "TailwindCSSのカラーパレットの活用",
              "効果的なタイポグラフィの設定",
              "テキストスタイリングのベストプラクティス",
              "アクセシビリティに配慮した色使い",
            ]}
            achievement={{
              name: "デザインアーティスト",
              description: "カラーとタイポグラフィに関するクエストを完了する",
            }}
          />
        </TabsContent>

        <TabsContent value="new" className="mt-4">
          <div className="text-gray-400 text-center py-8">新着クエストは近日公開予定です！</div>
        </TabsContent>

        <TabsContent value="popular" className="mt-4">
          <div className="text-gray-400 text-center py-8">人気クエストは近日公開予定です！</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function QuestCard({
  title,
  description,
  difficulty,
  difficultyColor,
  xp,
  estimatedTime,
  questions,
  tags,
  progress,
  hot = false,
  featured = false,
  learningPoints,
  achievement,
}: {
  title: string
  description: string
  difficulty: string
  difficultyColor: string
  xp: number
  estimatedTime: string
  questions: number
  tags: string[]
  progress: number
  hot?: boolean
  featured?: boolean
  learningPoints: string[]
  achievement: {
    name: string
    description: string
  }
}) {
  return (
    <div
      className={`bg-gray-800/50 rounded-lg border ${
        featured ? "border-yellow-500/50" : "border-gray-700"
      } p-4 hover:bg-gray-800 transition-colors relative overflow-hidden`}
    >
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-yellow-500 text-black text-xs font-bold py-1 px-3 rounded-bl-lg flex items-center gap-1">
            <Star className="h-3 w-3" fill="currentColor" />
            おすすめ
          </div>
        </div>
      )}

      {hot && (
        <div className="absolute top-0 right-0">
          <div className="bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg flex items-center gap-1">
            <Flame className="h-3 w-3" />
            人気
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline" className={`${difficultyColor} text-black`}>
              {difficulty}
            </Badge>

            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-700 hover:bg-gray-600">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 md:min-w-32">
          <div className="flex items-center gap-2">
            <div className="text-yellow-400 font-bold">{xp} XP</div>
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {estimatedTime}
              </div>
              <div className="text-blue-400">{questions}問</div>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className={progress > 0 ? "bg-blue-600 hover:bg-blue-700" : ""}>
                {progress > 0 ? "続ける" : "開始"}
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border border-purple-900/30 max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl text-white">{title}</DialogTitle>
                <DialogDescription className="text-gray-400">{description}</DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">学習ポイント</h3>
                  <ul className="space-y-1 text-gray-400">
                    {learningPoints.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">アンロック可能なアチーブメント</h3>
                  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <div className="bg-purple-900/50 p-2 rounded-lg">
                      <Star className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{achievement.name}</div>
                      <div className="text-sm text-gray-400">{achievement.description}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="text-gray-400 text-sm flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {estimatedTime}
                    </div>
                    <div className="text-gray-400 text-sm">{questions}問</div>
                    <div className="text-yellow-400 font-bold">{xp} XP</div>
                  </div>

                  <Link href="/quest/flexbox-basics">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      チャレンジ開始
                    </Button>
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {progress > 0 && (
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>進捗状況</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-700">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
          </Progress>
        </div>
      )}
    </div>
  )
}
