import type React from "react"
import { Award, Code, Layout, Zap } from "lucide-react"

export function GameFeatures() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <FeatureCard
        icon={<Code className="h-8 w-8 text-blue-400" />}
        title="実践的な問題"
        description="実際のUIデザインに基づいた問題で、実践的なスキルを身につけよう"
      />
      <FeatureCard
        icon={<Zap className="h-8 w-8 text-yellow-400" />}
        title="即時フィードバック"
        description="コードを書くとリアルタイムでプレビューが更新され、即座に結果を確認できる"
      />
      <FeatureCard
        icon={<Layout className="h-8 w-8 text-green-400" />}
        title="スキルツリー"
        description="自分の成長を視覚的に確認しながら、新しいスキルをアンロックしよう"
      />
      <FeatureCard
        icon={<Award className="h-8 w-8 text-pink-400" />}
        title="アチーブメント"
        description="チャレンジを達成してバッジを集め、自分の実力を友達に自慢しよう"
      />
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="bg-gray-900/80 p-3 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-gray-400 mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}
