import { Prisma } from "@prisma/client";

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