"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle, Clock, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { MonacoEditor } from "@/components/quest/monaco-editor"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function QuestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [timeLeft, setTimeLeft] = useState(300) // 5分 = 300秒
  const [exitDialogOpen, setExitDialogOpen] = useState(false)
  const [code, setCode] = useState(`<!-- ナビゲーションバーをフレックスボックスで作成してください -->
<nav class="bg-gray-800 p-4">
  <div>
    <!-- ロゴ -->
    <div class="text-white font-bold">TailwindCSS</div>
    
    <!-- メニュー項目 -->
    <div>
      <a href="#" class="text-gray-300 hover:text-white px-3 py-2">ホーム</a>
      <a href="#" class="text-gray-300 hover:text-white px-3 py-2">特徴</a>
      <a href="#" class="text-gray-300 hover:text-white px-3 py-2">料金</a>
      <a href="#" class="text-gray-300 hover:text-white px-3 py-2">お問い合わせ</a>
    </div>
  </div>
</nav>`)

  // 時間のフォーマット（mm:ss）
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // 次の問題へ進む
  const nextQuestion = () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1)
      // 問題に応じてコードを変更（実際のアプリではデータベースから取得）
      setCode(`<!-- 問題${currentQuestion + 1}: カードコンポーネントをフレックスボックスで作成してください -->
<div class="bg-white rounded-lg shadow-md p-4">
  <div>
    <!-- カードヘッダー -->
    <div>
      <h3 class="text-lg font-bold">カードタイトル</h3>
      <p class="text-gray-500">サブタイトル</p>
    </div>
    
    <!-- カードコンテンツ -->
    <p class="mt-2">ここにカードの内容が入ります。フレックスボックスを使って要素を配置してください。</p>
    
    <!-- カードフッター -->
    <div class="mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded">詳細</button>
      <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded">キャンセル</button>
    </div>
  </div>
</div>`)
    }
  }

  // 前の問題に戻る
  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
      // 問題に応じてコードを変更（実際のアプリではデータベースから取得）
    }
  }

  // 戻るボタンのハンドラ
  const handleBackClick = () => {
    setExitDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col p-4">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleBackClick}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-white">フレックスボックスチャレンジ</h1>
          <div className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">初級</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg">
            <Clock className="h-6 w-6 text-red-400" />
            <div className="text-white font-mono text-2xl font-bold">{formatTime(timeLeft)}</div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 flex flex-col">
          <div className="bg-gray-900 rounded-t-lg border border-gray-800 p-2 flex items-center justify-between">
            <div className="text-white font-medium text-lg">問題 {currentQuestion}/5</div>
          </div>

          <div className="flex-1 border border-gray-800 border-t-0 rounded-b-lg overflow-hidden">
            <MonacoEditor code={code} onChange={setCode} />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col">
          <Tabs defaultValue="preview">
            <TabsList className="bg-gray-800/50 border border-gray-700">
              <TabsTrigger value="preview" className="data-[state=active]:bg-purple-600">
                プレビュー
              </TabsTrigger>
              <TabsTrigger value="solution" className="data-[state=active]:bg-purple-600">
                正解の画面
              </TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="flex-1 mt-0 border border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-white text-black h-full p-4">
                <div dangerouslySetInnerHTML={{ __html: code }} />
              </div>
            </TabsContent>

            <TabsContent value="solution" className="flex-1 mt-0 border border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-white text-black h-full p-4">
                {currentQuestion === 1 ? (
                  <nav className="bg-gray-800 p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-white font-bold">TailwindCSS</div>
                      <div className="flex space-x-2">
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
                          ホーム
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
                          特徴
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
                          料金
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
                          お問い合わせ
                        </a>
                      </div>
                    </div>
                  </nav>
                ) : (
                  <div className="flex justify-center items-center h-full text-gray-500">
                    この問題の正解画面はまだ表示できません
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <footer className="mt-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white">
              <Lightbulb className="h-4 w-4 mr-2" />
              ヒント
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-400">進捗状況: {(currentQuestion - 1) * 20}%</div>
            <Progress value={(currentQuestion - 1) * 20} className="w-40 h-2 bg-gray-800">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: `${(currentQuestion - 1) * 20}%` }} />
            </Progress>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-400 hover:text-white"
              onClick={prevQuestion}
              disabled={currentQuestion === 1}
            >
              前の問題
            </Button>

            {currentQuestion < 5 ? (
              <Button onClick={nextQuestion}>次の問題</Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                完了
              </Button>
            )}
          </div>
        </div>
      </footer>

      <Dialog open={exitDialogOpen} onOpenChange={setExitDialogOpen}>
        <DialogContent className="bg-gray-900 border border-purple-900/30">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">クエストを終了しますか？</DialogTitle>
            <DialogDescription>クエストを終了すると、現在の進捗が失われます。本当に終了しますか？</DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between mt-4 gap-2">
            <Button variant="outline" onClick={() => setExitDialogOpen(false)}>
              キャンセル
            </Button>
            <Link href="/dashboard">
              <Button variant="destructive">クエストを終了</Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
