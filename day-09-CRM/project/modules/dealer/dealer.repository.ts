import { prisma } from "@/lib/prisma";

export async function createManyDealers(
  dealers: {
    name: string;
    phone: string;
    email: string;
    city: string;
    state: string;
    creditLimit: number;
    uploadId: number;
  }[]
) {
  return prisma.dealer.createMany({
    data: dealers,
  });
}