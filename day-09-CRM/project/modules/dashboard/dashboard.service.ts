import {
  getDashboardStats,
} from "./dashboard.repository";

export async function getDashboardData() {
  const stats =
    await getDashboardStats();

  const successRate =
    stats.totalUploads === 0
      ? 0
      : Math.round(
          ((stats.totalUploads -
            stats.totalErrors) /
            stats.totalUploads) *
            100
        );

  return {
    ...stats,
    successRate,
  };
}