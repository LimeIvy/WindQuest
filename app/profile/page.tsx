import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileStats } from "@/components/profile/profile-stats"
import { ProfileAchievements } from "@/components/profile/profile-achievements"
import { ProfileActivity } from "@/components/profile/profile-activity"
import { ProfileFriends } from "@/components/profile/profile-friends"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6">
        <ProfileHeader />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ProfileStats />
            <ProfileActivity />
          </div>

          <div className="space-y-6">
            <ProfileAchievements />
            <ProfileFriends />
          </div>
        </div>
      </div>
    </div>
  )
}
