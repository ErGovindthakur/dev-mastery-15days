/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Dealer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Upload` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UploadStatus" AS ENUM ('PROCESSING', 'COMPLETED', 'FAILED');

-- DropForeignKey
ALTER TABLE "Dealer" DROP CONSTRAINT "Dealer_uploadId_fkey";

-- DropForeignKey
ALTER TABLE "UploadError" DROP CONSTRAINT "UploadError_uploadId_fkey";

-- AlterTable
ALTER TABLE "Dealer" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Upload" ADD COLUMN     "status" "UploadStatus" NOT NULL DEFAULT 'PROCESSING',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "totalRows" SET DEFAULT 0,
ALTER COLUMN "insertedRows" SET DEFAULT 0,
ALTER COLUMN "failedRows" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Dealer_phone_key" ON "Dealer"("phone");

-- CreateIndex
CREATE INDEX "Dealer_uploadId_idx" ON "Dealer"("uploadId");

-- CreateIndex
CREATE INDEX "Dealer_phone_idx" ON "Dealer"("phone");

-- CreateIndex
CREATE INDEX "Dealer_email_idx" ON "Dealer"("email");

-- CreateIndex
CREATE INDEX "UploadError_uploadId_idx" ON "UploadError"("uploadId");

-- AddForeignKey
ALTER TABLE "Dealer" ADD CONSTRAINT "Dealer_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UploadError" ADD CONSTRAINT "UploadError_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
