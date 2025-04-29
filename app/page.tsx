import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GameLogo } from "@/components/game-logo"
import { GameFeatures } from "@/components/game-features"
import { GameFooter } from "@/components/game-footer"

export default async function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-white">
        <GameLogo />

        <div className="mt-8 max-w-md text-center space-y-2">
          <h2 className="text-2xl font-bold text-yellow-300 animate-pulse">ゲーム感覚でTailwindCSSをマスター！</h2>
          <p className="text-gray-300">
            レベルアップしながら、実践的なスキルを身につけよう。 チャレンジを完了して、TailwindCSSの達人になろう！
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-2 border-pink-300 shadow-lg hover:shadow-pink-500/20 transition-all duration-200 text-lg font-bold"
          >
            <Link href="/incomplete"  /* {startGamePath} */>ゲームスタート</Link>
            
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-blue-400 text-blue-300 hover:bg-blue-900/20 hover:text-blue-200 transition-all duration-200 text-lg font-bold"
          >
            <Link href="/incomplete"/* "/about" */>ゲーム説明</Link>
          </Button>
        </div>

        <GameFeatures />
      </main>

      <GameFooter />
    </div>
  )
}
