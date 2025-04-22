import { Code2, Wind } from "lucide-react"

export function GameLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center gap-2">
          <Code2 className="h-12 w-12 md:h-14 md:w-14 text-pink-400" />
          <span>Wind Quest</span>
          <Wind className="h-12 w-12 mt-3 text-cyan-400 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
