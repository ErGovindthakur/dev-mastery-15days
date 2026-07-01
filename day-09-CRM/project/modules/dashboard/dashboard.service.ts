import {
  getDashboardData,
  getUploadTrend
} from "./dashboard.repository";

export async function getChartData() {
  return getUploadTrend();
}
export async function getDashboardStats() {
  const data =
    await getDashboardData();

  const successRate =
    data.totalUploads === 0
      ? 0
      : Math.round(
          (data.totalInsertedRows / data.totalRows) * 100
        );

  return {
    ...data,
    successRate,
  };
}