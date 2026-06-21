import { Prisma } from "@prisma/client";

export interface UploadErrorInput {
  rowNumber: number;
  columnName: string;
  message: string;
  value: string;
  uploadId: number;
}

export async function createManyErrors(
  tx: Prisma.TransactionClient,
  errors: UploadErrorInput[]
) {
  return tx.uploadError.createMany({
    data: errors,
  });
}