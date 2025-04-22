"use client"

import type React from "react"

import { useState } from "react"
import { Award, Code, Columns, Palette, Smartphone, Zap } from "lucide-react"

export function SkillTreeMap() {
  const [scale, setScale] = useState(1)

  return (
    <div className="relative h-[600px] overflow-auto">
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 z-10">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white"
          onClick={() => setScale(Math.max(0.5, scale - 0.1))}
        >
          -
        </button>
        <div className="text-sm text-gray-300">{Math.round(scale * 100)}%</div>
        <button
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white"
          onClick={() => setScale(Math.min(2, scale + 0.1))}
        >
          +
        </button>
      </div>

      <div
        className="relative w-[1200px] h-[1000px]"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
      >
        {/* 中央のコアスキル */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <SkillNode
            icon={<Zap className="h-6 w-6 text-yellow-400" />}
            name="TailwindCSS基礎"
            level={3}
            maxLevel={3}
            size="lg"
            unlocked
          />
        </div>

        {/* レイアウトブランチ */}
        <div className="absolute top-[30%] left-[30%]">
          <SkillBranch
            icon={<Columns className="h-6 w-6 text-blue-400" />}
            name="レイアウト"
            skills={[
              { name: "Flexbox基礎", level: 2, maxLevel: 3, unlocked: true, x: 0, y: -80 },
              { name: "Flexbox応用", level: 0, maxLevel: 3, unlocked: false, x: -80, y: -140 },
              { name: "Grid基礎", level: 0, maxLevel: 3, unlocked: false, x: 80, y: -140 },
              { name: "Grid応用", level: 0, maxLevel: 3, unlocked: false, x: 0, y: -200 },
              { name: "レイアウトマスタリー", level: 0, maxLevel: 1, unlocked: false, x: 0, y: -280, isSpecial: true },
            ]}
          />
        </div>

        {/* スタイリングブランチ */}
        <div className="absolute top-[30%] right-[30%]">
          <SkillBranch
            icon={<Palette className="h-6 w-6 text-pink-400" />}
            name="スタイリング"
            skills={[
              { name: "色彩理論", level: 1, maxLevel: 3, unlocked: true, x: 0, y: -80 },
              { name: "タイポグラフィ", level: 2, maxLevel: 2, unlocked: true, x: -80, y: -140 },
              { name: "スペーシング", level: 0, maxLevel: 2, unlocked: false, x: 80, y: -140 },
              { name: "アニメーション", level: 0, maxLevel: 3, unlocked: false, x: 0, y: -200 },
              { name: "デザインマスタリー", level: 0, maxLevel: 1, unlocked: false, x: 0, y: -280, isSpecial: true },
            ]}
          />
        </div>

        {/* レスポンシブブランチ */}
        <div className="absolute bottom-[30%] left-[30%]">
          <SkillBranch
            icon={<Smartphone className="h-6 w-6 text-green-400" />}
            name="レスポンシブ"
            skills={[
              { name: "ブレイクポイント", level: 1, maxLevel: 2, unlocked: true, x: 0, y: 80 },
              { name: "モバイルファースト", level: 0, maxLevel: 3, unlocked: false, x: -80, y: 140 },
              { name: "レスポンシブユーティリティ", level: 0, maxLevel: 2, unlocked: false, x: 80, y: 140 },
              { name: "アダプティブUI", level: 0, maxLevel: 3, unlocked: false, x: 0, y: 200 },
              { name: "レスポンシブマスタリー", level: 0, maxLevel: 1, unlocked: false, x: 0, y: 280, isSpecial: true },
            ]}
          />
        </div>

        {/* コンポーネントブランチ */}
        <div className="absolute bottom-[30%] right-[30%]">
          <SkillBranch
            icon={<Code className="h-6 w-6 text-yellow-400" />}
            name="コンポーネント"
            skills={[
              { name: "ボタンデザイン", level: 1, maxLevel: 3, unlocked: true, x: 0, y: 80 },
              { name: "カードレイアウト", level: 0, maxLevel: 2, unlocked: false, x: -80, y: 140 },
              { name: "フォーム要素", level: 0, maxLevel: 3, unlocked: false, x: 80, y: 140 },
              { name: "ナビゲーション", level: 0, maxLevel: 3, unlocked: false, x: 0, y: 200 },
              {
                name: "コンポーネントマスタリー",
                level: 0,
                maxLevel: 1,
                unlocked: false,
                x: 0,
                y: 280,
                isSpecial: true,
              },
            ]}
          />
        </div>

        {/* 接続線 */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#4B5563" />
            </marker>
          </defs>

          {/* 中央から各ブランチへの線 */}
          <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="#4B5563" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="#4B5563" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#4B5563" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="#4B5563" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>
    </div>
  )
}

function SkillBranch({
  icon,
  name,
  skills,
}: {
  icon: React.ReactNode
  name: string
  skills: {
    name: string
    level: number
    maxLevel: number
    unlocked: boolean
    x: number
    y: number
    isSpecial?: boolean
  }[]
}) {
  return (
    <div className="relative">
      <SkillNode icon={icon} name={name} level={1} maxLevel={1} size="md" unlocked />

      {skills.map((skill, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            transform: `translate(${skill.x}px, ${skill.y}px)`,
            zIndex: skill.isSpecial ? 2 : 1,
          }}
        >
          <SkillNode
            name={skill.name}
            level={skill.level}
            maxLevel={skill.maxLevel}
            size={skill.isSpecial ? "md" : "sm"}
            unlocked={skill.unlocked}
            isSpecial={skill.isSpecial}
          />
        </div>
      ))}

      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {skills.map((skill, index) => (
          <line
            key={index}
            x1="0"
            y1="0"
            x2={skill.x}
            y2={skill.y}
            stroke={skill.unlocked ? "#8B5CF6" : "#4B5563"}
            strokeWidth="2"
            strokeDasharray={skill.unlocked ? "none" : "5,5"}
            markerEnd="url(#arrowhead)"
          />
        ))}
      </svg>
    </div>
  )
}

function SkillNode({
  icon,
  name,
  level,
  maxLevel,
  size = "sm",
  unlocked = false,
  isSpecial = false,
}: {
  icon?: React.ReactNode
  name: string
  level: number
  maxLevel: number
  size?: "sm" | "md" | "lg"
  unlocked?: boolean
  isSpecial?: boolean
}) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
  }

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`
          ${sizeClasses[size]} rounded-full flex items-center justify-center
          ${
            unlocked
              ? isSpecial
                ? "bg-gradient-to-r from-yellow-500 to-amber-500 border-2 border-yellow-300"
                : "bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-purple-400"
              : "bg-gray-800 border-2 border-gray-700"
          }
          ${!unlocked && "opacity-50"}
          cursor-pointer hover:scale-105 transition-transform
        `}
      >
        {icon || (
          <div className={`font-bold ${unlocked ? "text-white" : "text-gray-400"}`}>
            {level}/{maxLevel}
          </div>
        )}
      </div>

      <div
        className={`mt-2 text-center ${textSizeClasses[size]} max-w-24 ${unlocked ? "text-white" : "text-gray-500"}`}
      >
        {name}
      </div>

      {!icon && level > 0 && (
        <div className="mt-1 flex gap-0.5">
          {Array.from({ length: maxLevel }).map((_, i) => (
            <div
              key={i}
              className={`h-1 w-2 rounded-full ${
                i < level ? (isSpecial ? "bg-yellow-500" : "bg-blue-500") : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      )}

      {isSpecial && (
        <div className="mt-1">
          <Award className="h-4 w-4 text-yellow-400" />
        </div>
      )}
    </div>
  )
}
