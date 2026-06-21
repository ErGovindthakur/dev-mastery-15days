import { parseCsv } from "@/lib/csv";

import { dealerSchema } from "@/modules/dealer/dealer.validator";

import {
  createUpload,
  updateUpload,
} from "./upload.repository";

import {
  createManyDealers,
} from "@/modules/dealer/dealer.repository";

import {
  createManyErrors,
} from "@/modules/upload-error/upload-error.repository";

export async function processUpload(
  filename: string,
  text: string
) {
  // Step 1
  const upload = await createUpload(filename);

  // Step 2
  const rows = parseCsv(text);

  // Step 3
  const validDealers = [];

  const uploadErrors = [];

  const seenPhones = new Set<string>();

  // Step 4
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];

    const result = dealerSchema.safeParse(row);

    // Validation Failed
    if (!result.success) {
      for (const issue of result.error.issues) {
        uploadErrors.push({
          rowNumber: index + 2,
          columnName: issue.path[0]?.toString() ?? "",
          message: issue.message,
          value:
            row[
              issue.path[0] as keyof typeof row
            ]?.toString() ?? "",
          uploadId: upload.id,
        });
      }

      continue;
    }

    // Duplicate Phone Inside Same File
    if (seenPhones.has(result.data.phone)) {
      uploadErrors.push({
        rowNumber: index + 2,
        columnName: "phone",
        message: "Duplicate phone in CSV",
        value: result.data.phone,
        uploadId: upload.id,
      });

      continue;
    }

    seenPhones.add(result.data.phone);

    validDealers.push({
      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,
      city: result.data.city,
      state: result.data.state,
      creditLimit: result.data.credit_limit,
      uploadId: upload.id,
    });
  }

  // Step 5
  await createManyDealers(validDealers);

  // Step 6
  await createManyErrors(uploadErrors);

  // Step 7
  await updateUpload(upload.id, {
    totalRows: rows.length,
    insertedRows: validDealers.length,
    failedRows: uploadErrors.length,
    status: "COMPLETED",
  });

  // Step 8
  return {
    uploadId: upload.id,
    totalRows: rows.length,
    inserted: validDealers.length,
    failed: uploadErrors.length,
    errors: uploadErrors,
  };
}