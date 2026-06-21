import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

import {
  DealerInsertInput,
} from "./dealer.types";

export async function createManyDealers(
  tx: Prisma.TransactionClient,
  dealers: DealerInsertInput[]
) {
  return tx.dealer.createMany({
    data: dealers,
  });
}

export async function findExistingPhones(
  tx: Prisma.TransactionClient,
  phones: string[]
) {
  return tx.dealer.findMany({
    where: {
      phone: {
        in: phones,
      },
    },
    select: {
      phone: true,
    },
  });
}

export async function getDealers(
  page: number,
  limit: number,
  search: string
) {
  const skip = (page - 1) * limit;

  const where = {
    OR: [
      {
        name: {
          contains: search,
          mode: "insensitive" as const,
        },
      },
      {
        email: {
          contains: search,
          mode: "insensitive" as const,
        },
      },
      {
        phone: {
          contains: search,
        },
      },
    ],
  };

  const [dealers, totalRecords] =
    await Promise.all([
      prisma.dealer.findMany({
        where,
        skip,
        take: limit,

        include: {
          upload: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.dealer.count({
        where,
      }),
    ]);

  return {
    dealers,
    totalRecords,
  };
}

export async function getDealerById(
  dealerId: number
) {
  return prisma.dealer.findUnique({
    where: {
      id: dealerId,
    },

    include: {
      upload: true,
    },
  });
}

export async function getDealerStats() {
  const [
    totalDealers,
    totalCredit,
  ] = await Promise.all([
    prisma.dealer.count(),

    prisma.dealer.aggregate({
      _sum: {
        creditLimit: true,
      },
    }),
  ]);

  return {
    totalDealers,

    totalCredit:
      totalCredit._sum.creditLimit,
  };
}