import { prisma } from "@/lib/prisma";

export async function getDashboardData() {
  const [
    totalUploads,
    totalDealers,
    totalErrors,
    rowAggregates,
    recentUploads
  ] = await Promise.all([
    prisma.upload.count(),

    prisma.dealer.count(),

    prisma.uploadError.count(),

    prisma.upload.aggregate({
      _sum:{
        totalRows:true,
        insertedRows:true
      },
    }),
    prisma.upload.findMany({
      orderBy: {
        createdAt: "desc",
      },

      take: 5,
    }),
  ]);

  return {
    totalUploads,
    totalDealers,
    totalErrors,
    totalRows:rowAggregates._sum.totalRows ?? 0,
    totalInsertedRows: rowAggregates._sum.insertedRows ?? 0,
    recentUploads,
  };
}

export async function getUploadTrend() {
  const uploads =
    await prisma.upload.findMany({
      select: {
        createdAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

  const grouped =
    uploads.reduce(
      (
        acc: Record<
          string,
          number
        >,
        upload
      ) => {
        const day =
          upload.createdAt.toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
            }
          );

        acc[day] =
          (acc[day] || 0) + 1;

        return acc;
      },
      {}
    );

  return Object.entries(
    grouped
  ).map(([day, uploads]) => ({
    day,
    uploads,
  }));
}