import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function createUpload(
  tx: Prisma.TransactionClient,
  filename: string
) {
  return tx.upload.create({
    data: {
      filename,
      status: "PROCESSING",
    },
  });
}

export async function updateUpload(
  tx: Prisma.TransactionClient,
  uploadId: number,
  data: {
    totalRows: number;
    insertedRows: number;
    failedRows: number;
    status: "COMPLETED" | "FAILED";
  }
) {
  return tx.upload.update({
    where: {
      id: uploadId,
    },
    data,
  });
}

export async function getUploads(
  page: number,
  limit: number,
  search: string
) {
  const skip =
    (page - 1) * limit;

  const where = {
    filename: {
      contains: search,
      mode: "insensitive" as const,
    },
  };

  const [uploads, totalRecords] =
    await Promise.all([
      prisma.upload.findMany({
        where,
        skip,
        take: limit,

        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.upload.count({
        where,
      }),
    ]);

  return {
    uploads,
    totalRecords,
  };
}

export async function getUploadById(
  uploadId: number
) {
  return prisma.upload.findUnique({
    where: {
      id: uploadId,
    },

    include: {
      dealers: true,
      errors: true,
    },
  });
}