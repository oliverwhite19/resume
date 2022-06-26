/*
  Warnings:

  - You are about to drop the column `responseeId` on the `Message` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[responseId]` on the table `Message` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_responseeId_fkey";

-- DropIndex
DROP INDEX "Message_responseeId_key";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "responseeId";
ALTER TABLE "Message" ADD COLUMN     "responseId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "Message_responseId_key" ON "Message"("responseId");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
