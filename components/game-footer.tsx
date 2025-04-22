import { Github } from "lucide-react"
import Link from "next/link"

export function GameFooter() {
  return (
    <footer className="w-full py-6 px-4 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">© 2025 TailwindQuest - ゲーム感覚でTailwindCSSを学ぼう</div>
        <div className="flex items-center gap-6">
          <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
            利用規約
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
