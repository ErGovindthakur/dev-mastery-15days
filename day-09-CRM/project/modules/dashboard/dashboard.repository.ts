import { prisma } from "@/lib/prisma";

export async function getDashboardStats() {
  const [
    totalUploads,
    totalDealers,
    totalErrors,
  ] = await Promise.all([
    prisma.upload.count(),
    prisma.dealer.count(),
    prisma.uploadError.count(),
  ]);

  return {
    totalUploads,
    totalDealers,
    totalErrors,
  };
}