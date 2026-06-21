import DashboardLayout from "@/app/components/layout/DashboardLayout";

import StatsCards from "@/app/components/dashboard/StatsCards";
import UploadChart from "@/app/components/dashboard/UploadChart";
import ActivityFeed from "@/app/components/dashboard/ActivityFeed";
import QuickActions from "@/app/components/dashboard/QuickActions";

import {
  getDashboardData,
} from "@/modules/dashboard/dashboard.service";

export default async function DashboardPage() {
  const stats =
    await getDashboardData();

  return (
    <DashboardLayout>
      <QuickActions />

      <StatsCards
        totalUploads={stats.totalUploads}
        totalDealers={stats.totalDealers}
        totalErrors={stats.totalErrors}
        successRate={stats.successRate}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <UploadChart />
        </div>

        <ActivityFeed />
      </div>
    </DashboardLayout>
  );
}