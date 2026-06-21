import { prisma } from "@/lib/prisma";

export async function createManyErrors(
  errors: {
    rowNumber: number;
    columnName: string;
    message: string;
    value: string;
    uploadId: number;
  }[]
) {
  return prisma.uploadError.createMany({
    data: errors,
  });
}