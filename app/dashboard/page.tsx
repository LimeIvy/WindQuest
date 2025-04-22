import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { QuestList } from "@/components/dashboard/quest-list"
import { UserProgress } from "@/components/dashboard/user-progress"
import { DailyRewards } from "@/components/dashboard/daily-rewards"
import { Leaderboard } from "@/components/dashboard/leaderboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <DashboardSidebar />

        <main className="flex-1 space-y-6">
          <UserProgress />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DailyRewards />
            <Leaderboard />
          </div>

          <QuestList />
        </main>
      </div>
    </div>
  )
}
