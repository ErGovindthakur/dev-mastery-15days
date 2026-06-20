/*
  Warnings:

  - Added the required column `uploadId` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uploadId` to the `UploadError` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dealer" ADD COLUMN     "uploadId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UploadError" ADD COLUMN     "uploadId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Dealer" ADD CONSTRAINT "Dealer_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UploadError" ADD CONSTRAINT "UploadError_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
