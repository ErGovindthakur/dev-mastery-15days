import DashboardLayout
from "@/app/components/layout/DashboardLayout";

import DealerTable
from "@/app/components/dealers/DealerTable";

import DealerStats
from "@/app/components/dealers/DealerStats";

import {
  getDealerList,
  getDealerAnalytics,
}
from "@/modules/dealer/dealer.service";

interface Props {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
}

export default async function DealersPage({
  searchParams,
}: Props) {
  const params =
    await searchParams;

  const page = Number(
    params.page ?? "1"
  );

  const search =
    params.search ?? "";

  const dealers =
    await getDealerList(
      page,
      10,
      search
    );

  const stats =
    await getDealerAnalytics();

  return (
    <>
      <DealerStats
        totalDealers={
          stats.totalDealers
        }
        totalCredit={
          stats.totalCredit?.toString() ??
          "0"
        }
      />

      <div className="mt-8">
        <DealerTable
          dealers={dealers.data}
        />
      </div>
    </>
  );
}