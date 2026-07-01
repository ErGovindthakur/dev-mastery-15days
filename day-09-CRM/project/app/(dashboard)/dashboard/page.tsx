import StatsCards from "@/app/components/dashboard/StatsCards";
import UploadChart from "@/app/components/dashboard/UploadChart";
import ActivityFeed from "@/app/components/dashboard/ActivityFeed";
import QuickActions from "@/app/components/dashboard/QuickActions";

import { getChartData, getDashboardStats } from "@/modules/dashboard/dashboard.service";
import RecentUploads from "@/app/components/dashboard/RecentUploads";

export default async function DashboardPage() {
  const data = await getDashboardStats();
  const chartData = await getChartData();

  return (
    <>
      <QuickActions />

      <StatsCards
        totalUploads={data.totalUploads}
        totalDealers={data.totalDealers}
        totalErrors={data.totalErrors}
        successRate={data.successRate}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <UploadChart data={chartData} />
        </div>

        <ActivityFeed uploads={data.recentUploads} />
      </div>

      <div className="mt-8">
        <RecentUploads uploads={data.recentUploads} />
      </div>
    </>
  );
}
