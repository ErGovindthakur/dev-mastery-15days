import {
  getDealers,
  getDealerById,
  getDealerStats,
} from "./dealer.repository";

export async function getDealerList(
  page: number,
  limit: number,
  search: string
) {
  const {
    dealers,
    totalRecords,
  } = await getDealers(
    page,
    limit,
    search
  );

  return {
    data: dealers,

    pagination: {
      page,
      limit,

      totalRecords,

      totalPages: Math.ceil(
        totalRecords / limit
      ),
    },
  };
}

export async function getDealerDetails(
  dealerId: number
) {
  return getDealerById(
    dealerId
  );
}

export async function getDealerAnalytics() {
  return getDealerStats();
}