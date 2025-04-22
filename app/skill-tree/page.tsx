import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SkillTreeMap } from "@/components/skill-tree/skill-tree-map"
import { SkillTreeSidebar } from "@/components/skill-tree/skill-tree-sidebar"

export default function SkillTreePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">スキルツリー</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <SkillTreeSidebar />

          <div className="flex-1 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-6 overflow-hidden">
            <SkillTreeMap />
          </div>
        </div>
      </div>
    </div>
  )
}
