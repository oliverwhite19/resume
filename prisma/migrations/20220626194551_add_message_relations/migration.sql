/*
  Warnings:

  - A unique constraint covering the columns `[responseeId]` on the table `Message` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "responseeId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "Message_responseeId_key" ON "Message"("responseeId");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_responseeId_fkey" FOREIGN KEY ("responseeId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
