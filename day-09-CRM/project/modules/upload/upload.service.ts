// import { parseCsv } from "@/lib/csv";

// import { dealerSchema } from "@/modules/dealer/dealer.validator";

// import {
//   createUpload,
//   updateUpload,
// } from "./upload.repository";

// import {
//   createManyDealers,
// } from "@/modules/dealer/dealer.repository";

// import {
//   createManyErrors,
// } from "@/modules/upload-error/upload-error.repository";

// export async function processUpload(
//   filename: string,
//   text: string
// ) {
//   // Step 1
//   const upload = await createUpload(filename);

//   // Step 2
//   const rows = parseCsv(text);

//   // Step 3
//   const validDealers = [];

//   const uploadErrors = [];

//   const seenPhones = new Set<string>();

//   // Step 4
//   for (let index = 0; index < rows.length; index++) {
//     const row = rows[index];

//     const result = dealerSchema.safeParse(row);

//     // Validation Failed
//     if (!result.success) {
//       for (const issue of result.error.issues) {
//         uploadErrors.push({
//           rowNumber: index + 2,
//           columnName: issue.path[0]?.toString() ?? "",
//           message: issue.message,
//           value:
//             row[
//               issue.path[0] as keyof typeof row
//             ]?.toString() ?? "",
//           uploadId: upload.id,
//         });
//       }

//       continue;
//     }

//     // Duplicate Phone Inside Same File
//     if (seenPhones.has(result.data.phone)) {
//       uploadErrors.push({
//         rowNumber: index + 2,
//         columnName: "phone",
//         message: "Duplicate phone in CSV",
//         value: result.data.phone,
//         uploadId: upload.id,
//       });

//       continue;
//     }

//     seenPhones.add(result.data.phone);

//     validDealers.push({
//       name: result.data.name,
//       phone: result.data.phone,
//       email: result.data.email,
//       city: result.data.city,
//       state: result.data.state,
//       creditLimit: result.data.credit_limit,
//       uploadId: upload.id,
//     });
//   }

//   // Step 5
//   await createManyDealers(validDealers);

//   // Step 6
//   await createManyErrors(uploadErrors);

//   // Step 7
//   await updateUpload(upload.id, {
//     totalRows: rows.length,
//     insertedRows: validDealers.length,
//     failedRows: uploadErrors.length,
//     status: "COMPLETED",
//   });

//   // Step 8
//   return {
//     uploadId: upload.id,
//     totalRows: rows.length,
//     inserted: validDealers.length,
//     failed: uploadErrors.length,
//     errors: uploadErrors,
//   };
// }

import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { parseCsv } from "@/lib/csv";

import { dealerSchema } from "@/modules/dealer/dealer.validator";

import {
  DealerInput,
  DealerInsertInput,
} from "@/modules/dealer/dealer.types";

import {
  createManyDealers,
  findExistingPhones,
} from "@/modules/dealer/dealer.repository";

import {
  createManyErrors,
} from "@/modules/upload-error/upload-error.repository";

import {
  createUpload,
  updateUpload,
  getUploads,
  getUploadById
} from "./upload.repository";


export async function getUploadHistory(
  page: number,
  limit: number,
  search: string
) {
  const result =
    await getUploads(
      page,
      limit,
      search
    );

  return {
    data: result.uploads,

    pagination: {
      page,
      limit,

      totalRecords:
        result.totalRecords,

      totalPages: Math.ceil(
        result.totalRecords /
          limit
      ),
    },
  };
}

export async function getUploadDetails(
  uploadId: number
) {
  return getUploadById(uploadId);
}

export async function processUpload(
  filename: string,
  text: string
) {
  const rows = parseCsv(text);

  const validDealers: DealerInput[] = [];

  const uploadErrors: {
    rowNumber: number;
    columnName: string;
    message: string;
    value: string;
  }[] = [];

  const seenPhones = new Set<string>();

  // Validation Phase
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];

    const result =
      dealerSchema.safeParse(row);

    if (!result.success) {
      for (const issue of result.error.issues) {
        uploadErrors.push({
          rowNumber: index + 2,
          columnName:
            issue.path[0]?.toString() ?? "",

          message: issue.message,

          value:
            row[
              issue.path[0] as keyof typeof row
            ]?.toString() ?? "",
        });
      }

      continue;
    }

    if (seenPhones.has(result.data.phone)) {
      uploadErrors.push({
        rowNumber: index + 2,
        columnName: "phone",
        message:
          "Duplicate phone found in CSV",
        value: result.data.phone,
      });

      continue;
    }

    seenPhones.add(result.data.phone);

    validDealers.push({
      rowNumber: index + 2,

      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,

      city: result.data.city,
      state: result.data.state,

      creditLimit:
        result.data.credit_limit,
    });
  }

  try {
    return await prisma.$transaction(
      async (tx) => {
        const upload =
          await createUpload(
            tx,
            filename
          );

        // Check DB duplicates
        const existingDealers =
          await findExistingPhones(
            tx,
            validDealers.map(
              dealer => dealer.phone
            )
          );

        const existingPhoneSet =
          new Set(
            existingDealers.map(
              dealer => dealer.phone
            )
          );

        const dealersToInsert:
          DealerInsertInput[] = [];

        for (const dealer of validDealers) {
          if (
            existingPhoneSet.has(
              dealer.phone
            )
          ) {
            uploadErrors.push({
              rowNumber:
                dealer.rowNumber,

              columnName:
                "phone",

              message:
                "Phone already exists in database",

              value:
                dealer.phone,
            });

            continue;
          }

          dealersToInsert.push({
            name: dealer.name,
            phone: dealer.phone,
            email: dealer.email,

            city: dealer.city,
            state: dealer.state,

            creditLimit:
              dealer.creditLimit,

            uploadId:
              upload.id,
          });
        }

        const errorsToInsert =
          uploadErrors.map(error => ({
            ...error,
            uploadId: upload.id,
          }));

        await createManyDealers(
          tx,
          dealersToInsert
        );

        await createManyErrors(
          tx,
          errorsToInsert
        );

        await updateUpload(
          tx,
          upload.id,
          {
            totalRows: rows.length,

            insertedRows:
              dealersToInsert.length,

            failedRows:
              errorsToInsert.length,

            status: "COMPLETED",
          }
        );

        return {
          uploadId: upload.id,

          totalRows: rows.length,

          inserted:
            dealersToInsert.length,

          failed:
            errorsToInsert.length,

          errors:
            errorsToInsert,
        };
      }
    );
  } catch (error) {
    if (
      error instanceof
      Prisma.PrismaClientKnownRequestError
    ) {
      throw new Error(
        `Database Error: ${error.message}`
      );
    }

    throw error;
  }
}