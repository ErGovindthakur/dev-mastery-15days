import { prisma } from "@/lib/prisma";
import { DealerInput } from "./upload.types";

export async function createUpload(
  filename: string
) {
  return prisma.upload.create({
    data: {
      filename,
      status: "PROCESSING",
    },
  });
}

export async function updateUpload(
  uploadId: number,
  data: {
    totalRows: number;
    insertedRows: number;
    failedRows: number;
    status: "COMPLETED" | "FAILED";
  }
) {
  return prisma.upload.update({
    where: {
      id: uploadId,
    },
    data,
  });
}

export async function createManyDealers(
  dealers: DealerInput[]
) {
  return prisma.dealer.createMany({
    data: dealers,
  });
}